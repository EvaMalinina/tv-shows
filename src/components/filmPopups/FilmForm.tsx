import React, { useEffect, useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Container } from "../../styles/general";
import {Bg, BgForm, Form, BtnPopupClose, BtnsWrapper, BtnReset, BtnSubmit, ErrorMsg} from "./filmPopups.styled";
import SelectC from "../ui/Select/Select";
import {IType} from "./interfaces";
import {useDispatch, useSelector} from "react-redux";
import {controlPopupVisibility} from "./storePopups/actions";
import {IFilmPopupVisibility, IState} from "../../store/interfaces";
import {getMoviesDataStart} from "../films/components/filmsList/store/actions";
import Portal from "../alerts/Portal";
import Alert from "../alerts/Alert";
import {sendNewMovieData, updateMovieData} from "./storeMovie/actions";
import {showAlert} from "./storeAlerts/actions";
import {useFormik} from "formik";
import {formSchema} from "./formValidation";
import { RootState } from "../../store/reducer";


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
  startDate: Date | null,
  movieUrl: string,
  genre: string,
  overview: string,
  runtime: number
}

interface IDatePickerField {
  name: string,
  onChange: Function,
  value: Date | null
}

const FilmPopup = ({type}: IType) => {
  const initialEmptyMovieData = {
    title: '',
    startDate: null,
    movieUrl: '',
    genre: '',
    overview: '',
    runtime: 60
  }

  const [newMovieData, setNewMovieData] = useState<IMovieData>(initialEmptyMovieData);


  const visible = useSelector(({popupsReducer: {[type as keyof IState]: visibility}}: IFilmPopupVisibility) => visibility);
  const editPopupVisible = useSelector(({popupsReducer: {edit: visibility}}: IFilmPopupVisibility) => visibility)

  const movieData = useSelector((state: RootState) => state.singleMovieReducer.movie);

  const notification = useSelector((state: RootState) => state.alertsReducer);


  const dispatch = useDispatch();
  const onClose = () => {
    dispatch(controlPopupVisibility(type, false));
  }

  const resetForm = () => {
    setNewMovieData(initialEmptyMovieData);
  }

  const sendFilmData = (values: IMovieData) => {
    try {
      dispatch(sendNewMovieData({
        ...values,
        startDate: values.startDate ? values.startDate.toLocaleDateString() : null
      }));
      resetForm();
      dispatch(getMoviesDataStart());
    } catch (e) {
      dispatch(showAlert(e))
    }
  };


  const sendUpdateFilmData = (values: IMovieData) => {
    try {
      const movieId = movieData.movieId;
      const updatedMovieData = {...values, movieId};

      dispatch(updateMovieData(updatedMovieData));
      dispatch(getMoviesDataStart());
    } catch (e) {
      dispatch(showAlert(e))
    }
  }


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

    else if (!editPopupVisible) {
      Object.assign(formik.initialValues, {
        title: '',
        startDate: null,
        movieUrl: '',
        genre: '',
        overview: '',
        runtime: 60
      })
    }
  },[editPopupVisible])

  const  submitForm = (values: IMovieData) => {
     if (!editPopupVisible) {
       sendFilmData(values)
     } else {
       sendUpdateFilmData(values)
     }
  };

  const formik = useFormik({
    initialValues: {
      title: '',
      startDate: null,
      movieUrl: '',
      genre: '',
      overview: '',
      runtime: 60
    },
    validationSchema: formSchema,
    onSubmit: submitForm
  });

  useEffect(() => {
    console.log(newMovieData)
  }, [newMovieData])

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

  return <>{
    !!visible && (
        <Bg>
          <BgForm>
            <Container>
              <Form>
                <h2>{type} movie</h2>
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
                        selectedGenre={formik.values.genre}
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
                  <BtnReset onClick={formik.handleReset}>Reset</BtnReset>
                  {
                    type === 'add' ?
                        <BtnSubmit type="submit" onClick={(e) => {e.preventDefault(); formik.handleSubmit()}}>Submit</BtnSubmit>
                        :
                        <BtnSubmit type="submit" onClick={(e) => {e.preventDefault(); formik.handleSubmit()}}>Update</BtnSubmit>
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
  }</>
}

export default FilmPopup;
