import React, {FormEvent, useEffect, useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Container } from "../../styles/general";
import { Bg, BgForm, Form, BtnPopupClose, BtnsWrapper, BtnReset, BtnSubmit } from "./filmPopups.styled";
import SelectC from "../ui/Select/Select";
import {IPopupProps} from "./interfaces";
import {useDispatch, useSelector} from "react-redux";
import {controlPopupVisibility} from "./storePopups/actions";
import {IFilmPopupVisibility} from "../../store/interfaces";
import {getMoviesDataStart} from "../films/components/filmsList/store/actions";
import Portal from "../alerts/Portal";
import Alert from "../alerts/Alert";
import {sendNewMovieData, updateMovieData} from "./storeMovie/actions";
import {showAlert} from "./storeAlerts/actions";


type Option = {
  value: string;
  label: string;
};

const _genreOptions: Option[] = [
  { value: 'documentary', label: 'documentary' },
  { value: 'comedy', label: 'comedy' },
  { value: 'horror', label: 'horror' },
  { value: 'crime', label: 'crime' }
]


interface IMovieData {
  title: string,
  startDate: string,
  movieUrl: string,
  genre: string,
  overview: string,
  runtime: number
}

const FilmPopup = ({labels, type}: IPopupProps) => {
  const initialEmptyMovieData = {
    title: ' ',
    startDate: ' ',
    movieUrl: ' ',
    genre: ' ',
    overview: ' ',
    runtime: 60
  }
  const [startDate, setStartDate] = useState<Date | [Date, Date] | null>(null);
  const [newMovieData, setNewMovieData] = useState<IMovieData>(initialEmptyMovieData);

  // having troubles typing props here
  const visible = useSelector(({popupsReducer: {[type]: visibility}}: IFilmPopupVisibility) => visibility)

  const movieData = useSelector(state => state.singleMovieReducer.movie);

  const notification = useSelector(state => state.alertsReducer)


  const dispatch = useDispatch();
  const onClose = () => {
    dispatch(controlPopupVisibility(type, false));
  }

  const handleChange = (e: FormEvent) => {
    let { name, value } = e.target;
    setNewMovieData({...newMovieData, [name]: value });
  }

  const handleGenreChange = (value: string) => {
    setNewMovieData({...newMovieData, genre: value });
  }

  const handleDateChange = (value: Date) => {
    setStartDate(value);
    setNewMovieData({...newMovieData, startDate: value.toLocaleDateString() });
  }

  const resetForm = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setNewMovieData(initialEmptyMovieData);
  }


  const sendFilmData = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      dispatch(sendNewMovieData(newMovieData));
      resetForm(e);
      dispatch(getMoviesDataStart());
    } catch (e) {
      dispatch(showAlert(e))
    }
  };

  const sendUpdateFilmData = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      const movieId = movieData.movieId;
      const updatedMovieData = {...newMovieData, movieId};

      dispatch(updateMovieData(updatedMovieData));
      dispatch(getMoviesDataStart());
    } catch (e) {
      dispatch(showAlert(e))
    }
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

  const AlertComponent = () => <Alert text={notification.alertText} type={notification.alertType}/>;

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
              <div style={{marginTop: '5px'}}>
                <SelectC
                  selectedOption={newMovieData.genre}
                  options={_genreOptions}
                  onHandleChange={(val: string) => handleGenreChange(val)}
                />
              </div>
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
        notification.alertIsVisible ?
            <Portal children={<AlertComponent/>}/>
          :
          <></>
      }
    </Bg>
  )
}

export default FilmPopup;
