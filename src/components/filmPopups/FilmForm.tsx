import React, {FormEvent, useEffect, useState} from "react";
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
import {baseUrl} from "../../url";


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


const FilmPopup = ({labels, type}: IPopupProps) => {
  const initialEmptyMovieData = {
    title: '', startDate: '03/24/2021',  movieUrl: '', genre: { id: 2, type: 'comedy'}, overview: '', runtime: ''
  }
  const [startDate, setStartDate] = useState<Date | [Date, Date] | null>(null);
  const [newMovieData, setNewMovieData] = useState(initialEmptyMovieData);

  // having troubles typing props here
  const visible = useSelector(({popupsReducer: {[type]: visibility}}: IFilmPopupVisibility) => visibility)

  const dispatch = useDispatch();
  const onClose = () => dispatch(controlPopupVisibility(type, false));

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
  };

  const sendFilmData = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    axios.post(`${baseUrl}movie`, newMovieData)
        .then((res) => {
          alert('Congrats! Movie added.')
        })
        .catch((err) => {
          console.log(err)
        })

    onClose();
  };

  useEffect(() => {
    console.log(newMovieData)
  },[newMovieData])


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
                    <input id="movieId" placeholder="pdb6fshan" readOnly={true}/>
                  </label>
                </>
            }

            <label htmlFor="title">
              Title
              <input
                  id="title"
                  name="title"
                  value={newMovieData.title}
                  placeholder={labels.title}
                  onChange={handleChange}
              />
            </label>

            <label htmlFor="date">
              Release Date
              {/*issues with ts error can't be resolved*/}
              <DatePicker
                id="date"
                selected={startDate}
                placeholderText={labels.date}
                onChange={(date: Date) => handleDateChange(date)}
              />
            </label>

            <label htmlFor="movie-url">
              movie url
              <input
                  id="movie-url"
                  name="movieUrl"
                  value={newMovieData.movieUrl}
                  placeholder={labels.url}
                  onChange={handleChange}
              />
            </label>

            <label htmlFor="genre">
              genre
              <SelectC
                options={_genreOptions}
                onHandleChange={(val: Option) => handleGenreChange(val)}
              />
            </label>

            <label htmlFor="overview">
              Overview
              <input
                  id="overview"
                  name="overview"
                  value={newMovieData.overview}
                  onChange={handleChange}
                  placeholder={labels.overview}
              />
            </label>

            <label htmlFor="runtime">
              Runtime
              <input
                  id="runtime"
                  name="runtime"
                  value={newMovieData.runtime}
                  onChange={handleChange}
                  placeholder={labels.runtime}
              />
            </label>

            <BtnsWrapper>
              <BtnReset onClick={resetForm}>Reset</BtnReset>
              <BtnSubmit onClick={sendFilmData}>{labels.btnSubmit}</BtnSubmit>
            </BtnsWrapper>
          </Form>
        </Container>
      </BgForm>
    </Bg>
  )
}

export default FilmPopup;
