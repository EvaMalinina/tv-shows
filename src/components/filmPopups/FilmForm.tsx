import React, {FormEvent, useCallback, useEffect, useRef, useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Container } from "../../styles/general";
import { Bg, BgForm, Form, BtnPopupClose, BtnsWrapper, BtnReset, BtnSubmit } from "./filmPopups.styled";
import SelectC from "../ui/Select/Select";
import {IPopupProps} from "./interfaces";
import {useDispatch, useSelector} from "react-redux";
import {controlPopupVisibility} from "./store/actions";
import {IFilmPopupVisibility} from "../../store/interfaces";
import axios from "axios";
import { baseUrl } from "../../url";
import {getMoviesDataStart} from "../films/components/filmsList/store/actions";
import Portal from "../alerts/Portal";
import Alert from "../alerts/Alert";


type Option = {
  id: number;
  type: string;
};

const _genreOptions: Option[] = [
  { id: 1, type: 'documentary'},
  { id: 2, type: 'comedy'},
  { id: 3, type: 'horror'},
  { id: 4, type: 'crime'},
];

interface IMovieData {
  title: string,
  startDate: string,
  movieUrl: string,
  genre: { id: number, type: string},
  overview: string,
  runtime: number
}

const FilmPopup = ({labels, type}: IPopupProps) => {
  const initialEmptyMovieData = {
    title: ' ',
    startDate: ' ',
    movieUrl: ' ',
    genre: { id: 2, type: 'comedy'},
    overview: ' ',
    runtime: 60
  }
  const [startDate, setStartDate] = useState<Date | [Date, Date] | null>(null);
  const [newMovieData, setNewMovieData] = useState<IMovieData>(initialEmptyMovieData);

  // having troubles typing props here
  const visible = useSelector(({popupsReducer: {[type]: visibility}}: IFilmPopupVisibility) => visibility)

  const movieData = useSelector(state => state.singleMovieReducer.movie);

  const [ isAlertVisible, setIsAlertVisible ] = useState( false);
  const [ alertText, setAlertText ] = useState<string>('');
  const [ alertType, setAlertType ] = useState<string>('');

  const dispatch = useDispatch();
  const onClose = () => {
    dispatch(controlPopupVisibility(type, false));
  }

  const handleChange = (e: FormEvent) => {
    let { name, value } = e.target;
    setNewMovieData({...newMovieData, [name]: value });
  }

  const handleGenreChange = (value: Option) => {
    setNewMovieData({...newMovieData, genre: value });
  }

  const handleDateChange = (value: Date) => {
    setStartDate(value);
    setNewMovieData({...newMovieData, startDate: value.toLocaleDateString() });
  }

  const resetForm = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setNewMovieData({...newMovieData, genre: {id: 0, type: ""}, movieUrl: "", overview: "", runtime: 0, startDate: "", title: ""})
  };

  const closeForm = () => {
    if (alertType === 'success') {
      onClose();
    }
  };

  const showAlert = () => {
    setIsAlertVisible(true);
    window.setTimeout(() =>  {
      setIsAlertVisible(false);

      closeForm();
    }, 3000);
  };

  const sendFilmData = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    // dispatch(sendNewMovieData());
    axios.post(`${baseUrl}movie`, newMovieData)
        .then((res) => {
          setAlertType('success');
          setAlertText('Congrats! Movie added.');

          showAlert();
          dispatch(getMoviesDataStart());
          resetForm(e);
        })
        .catch((err) => {
          setAlertType('error');
          if (err.response) {
            setAlertText('Error: '+ err.response.data);
          } else if (err.request) {
            // client never received a response, or request never left
            setAlertText('Please check internet connection...');
          }
          showAlert();
        })
  };

  const sendUpdateFilmData = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    axios.patch(`${baseUrl}movie/${movieData.movieId}`, newMovieData)
        .then((res) => {
          setAlertType('success');
          setAlertText('Congrats! Movie updated.');

          showAlert();
          dispatch(getMoviesDataStart());
          resetForm(e);
        })
        .catch((err) => {
          setAlertType('error');
          if (err.response) {
            setAlertText('Error: '+ err.response.data);
          } else if (err.request) {
            // client never received a response, or request never left
            setAlertText('Please check internet connection...');
          }
          showAlert();
        })
  }

  useEffect(() => {
    movieData.name ?
    setNewMovieData({
      ...newMovieData,
      title: movieData.name,
      startDate: movieData.year,
      movieUrl: movieData.img,
      genre: movieData.genre,
      overview: movieData.overview,
      runtime: movieData.runtime
    })
      : null;
  },[movieData])

  useEffect(() => {
    console.log(newMovieData)
  }, [newMovieData])

  const AlertComponent = () => <Alert text={alertText} type={alertType}/>;

  return !!visible && (
    <Bg>
      <BgForm>
        <Container>
          <Form>
            <h2>{labels.mainTitle}</h2>
            <BtnPopupClose onClick={onClose}>&#10005;</BtnPopupClose>
            {
              type === 'add' ?
                <></>
                :
                <>
                  <label htmlFor="movieId">
                    Movie Id
                    <input id="movieId" placeholder={movieData.movieId} readOnly={true}/>
                  </label>
                </>
            }

            <label htmlFor="title">
              Title
              <input
                  id="title"
                  name="title"
                  value={newMovieData.title}
                  placeholder={movieData.name}
                  onChange={handleChange}
              />
            </label>

            <label htmlFor="date">
              Release Date
              {/*issues with ts error can't be resolved*/}
              <DatePicker
                id="date"
                selected={startDate}
                placeholderText={movieData.year}
                onChange={(date: Date) => handleDateChange(date)}
              />
            </label>

            <label htmlFor="movie-url">
              movie url
              <input
                  id="movie-url"
                  name="movieUrl"
                  value={newMovieData.movieUrl}
                  placeholder={movieData.img}
                  onChange={handleChange}
              />
            </label>

            <label htmlFor="genre">
              genre
              {/*need to stopPropagation, can't resolve*/}
              {/*<div onMouseDown={e => e.stopPropagation()}>*/}
                <SelectC
                  options={_genreOptions}
                  onHandleChange={(val: Option) => handleGenreChange(val)}
                />
              {/*</div>*/}
            </label>

            <label htmlFor="overview">
              Overview
              <input
                  id="overview"
                  name="overview"
                  value={newMovieData.overview}
                  onChange={handleChange}
                  placeholder={movieData.desc}
              />
            </label>

            <label htmlFor="runtime">
              Runtime
              <input
                  id="runtime"
                  name="runtime"
                  value={newMovieData.runtime}
                  onChange={handleChange}
                  placeholder={movieData.runtime ? movieData.runtime : '--'}
              />
            </label>

            <BtnsWrapper>
              <BtnReset onClick={resetForm}>Reset</BtnReset>
              {
                type === 'add' ?
                    <BtnSubmit onClick={(e) => sendFilmData(e)}>{labels.btnSubmit}</BtnSubmit>
                    :
                    <BtnSubmit onClick={sendUpdateFilmData}>Update</BtnSubmit>
              }
            </BtnsWrapper>
          </Form>
        </Container>
      </BgForm>

      {
        isAlertVisible ?
            <Portal children={<AlertComponent/>}/>
          :
          <></>
      }
    </Bg>
  )
}

export default FilmPopup;
