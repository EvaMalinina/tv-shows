import React, { useEffect, useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Container } from "../../styles/general";
import {Bg, BgForm, Form, BtnPopupClose, BtnsWrapper, BtnReset, BtnSubmit, ErrorMsg} from "./filmPopups.styled";
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
import {useFormik} from "formik";
import {formSchema} from "./formValidation";


enum Genre {
  DOCUMENTARY = 'documentary',
  COMEDY = 'comedy',
  HORROR = 'horror',
  CRIME = 'crime'
}

type Option = Record<'value' | 'label', Genre>

const _genreOptions: Option[] = Object
    .values(Genre)
    .map(value => ({value, label: value}))


interface IMovieData {
  title: string,
  startDate: Date | [Date, Date]  | null,
  movieUrl: string,
  genre: string,
  overview: string,
  runtime: number
}

interface IDatePickerField {
  name: string,
  onChange: Function,
  value: Date | [Date, Date] | null
}

const FilmPopup = ({labels, type}: IPopupProps) => {
  const initialEmptyMovieData = {
    title: '',
    startDate: null,
    movieUrl: '',
    genre: '',
    overview: '',
    runtime: 60
  }

  const [newMovieData, setNewMovieData] = useState<IMovieData>(initialEmptyMovieData);

  // having troubles typing props here
  const visible = useSelector(({popupsReducer: {[type]: visibility}}: IFilmPopupVisibility) => visibility);
  const editPopupVisible = useSelector(({popupsReducer: {['edit']: visibility}}: IFilmPopupVisibility) => visibility)

  const movieData = useSelector(state => state.singleMovieReducer.movie);

  const notification = useSelector(state => state.alertsReducer);


  const dispatch = useDispatch();
  const onClose = () => {
    dispatch(controlPopupVisibility(type, false));
  }


  const resetForm = () => {
    setNewMovieData(initialEmptyMovieData);
  }

  const sendFilmData = (values: IMovieData) => {
    try {
      dispatch(sendNewMovieData({...values, startDate: values.startDate.toLocaleDateString()}));
      resetForm();
      dispatch(getMoviesDataStart());
    } catch (e) {
      dispatch(showAlert(e))
    }
  };


  const sendUpdateFilmData = (values: IMovieData) => {
    try {
      const movieId = movieData.movieId;
      const updatedMovieData = {...values, movieId, startDate: values.startDate.toLocaleDateString()};

      dispatch(updateMovieData(updatedMovieData));
      dispatch(getMoviesDataStart());
    } catch (e) {
      dispatch(showAlert(e))
    }
  }

  const formik = useFormik({
    initialValues: {},
    validationSchema: formSchema,
    onSubmit: !editPopupVisible ?
        (values) => sendFilmData(values)
        :
        (values) => sendUpdateFilmData(values)
  });

  useEffect(() => {
    if(movieData.name && editPopupVisible){
      const initialValues = {
          ...newMovieData,
          title: movieData.name,
          startDate: movieData.year,
          movieUrl: movieData.img,
          genre: movieData.genre,
          overview: movieData.overview,
          runtime: movieData.runtime
        }
      setNewMovieData(initialValues)
      Object.assign(formik.initialValues, initialValues)
    }

  },[editPopupVisible])



  const AlertComponent = () => <Alert text={notification.alertText} type={notification.alertType}/>;

  const DatePickerField = ({ name, value, onChange }: IDatePickerField) => {
    return (
        <DatePicker
            selected={(value && new Date(value)) || null}
            onChange={val => {
              onChange(name, val);
            }}
        />
    );
  };

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
                  onChange={formik.handleChange}
                  value={formik.values.title}
              />
              {
                !!formik.errors.title && formik.touched.title &&
                <ErrorMsg>{formik.errors.title}</ErrorMsg>
              }
            </label>

            <label htmlFor="startDate">
              Release Date
              <DatePickerField
                  name="startDate"
                  value={formik.values.startDate}
                  onChange={formik.setFieldValue}
              />
              {
                !!formik.errors.startDate && formik.touched.startDate &&
                <ErrorMsg>{formik.errors.startDate}</ErrorMsg>
              }
            </label>

            <label htmlFor="movie-url">
              movie url
              <input
                  id="movie-url"
                  name="movieUrl"
                  onChange={formik.handleChange}
                  value={formik.values.movieUrl}
              />
              {
                !!formik.errors.movieUrl && formik.touched.movieUrl &&
                <ErrorMsg>{formik.errors.movieUrl}</ErrorMsg>
              }
            </label>

            <label htmlFor="genre">
              genre
              <div style={{marginTop: '5px'}}>
                <SelectC
                  options={_genreOptions}
                  onHandleChange={(val: string) => formik.setFieldValue('genre', val)}
                />
              </div>
              {
                !!formik.errors.genre && formik.touched.genre &&
                <ErrorMsg>{formik.errors.genre}</ErrorMsg>
              }
            </label>

            <label htmlFor="overview">
              Overview
              <input
                  id="overview"
                  name="overview"
                  onChange={formik.handleChange}
                  value={formik.values.overview}
              />
              {
                !!formik.errors.overview && formik.touched.overview &&
                <ErrorMsg>{formik.errors.overview}</ErrorMsg>
              }
            </label>

            <label htmlFor="runtime">
              Runtime
              <input
                  id="runtime"
                  name="runtime"
                  onChange={formik.handleChange}
                  value={formik.values.runtime}
              />
              {
                !!formik.errors.runtime && formik.touched.runtime &&
                <ErrorMsg>{formik.errors.runtime}</ErrorMsg>
              }
            </label>

            <BtnsWrapper>
              <BtnReset onClick={resetForm}>Reset</BtnReset>
              {
                type === 'add' ?
                    <BtnSubmit type="submit" onClick={(e) => {e.preventDefault(); formik.handleSubmit()}}>{labels.btnSubmit}</BtnSubmit>
                    :
                    <BtnSubmit onClick={(e) => {e.preventDefault(); formik.handleSubmit()}}>Update</BtnSubmit>
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
