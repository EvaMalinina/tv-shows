import React, {useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Container } from "../../styles/general";
import { Bg, BgForm, Form, BtnPopupClose, BtnsWrapper, BtnReset, BtnSubmit } from "./filmPopups.styled";
import SelectC from "../ui/Select/Select";
import {
  actionControlVisibility,
  useDispatch,
  useSelector
} from "../../context/modalMovieContext";
import {IPopupProps} from "./interfaces";


type Option = {
  id: number;
  type: string;
};

const _genreOptions: Option[] = [
  { id: 1, type: 'documentary'},
  { id: 2, type: 'comedy'},
  { id: 3, type: 'horror'},
  { id: 3, type: 'crime'},
];


const FilmPopup = ({labels, type}: IPopupProps) => {

  // having troubles typing props here
  const visible = useSelector(({[type]: visibility}) => visibility),
        dispatch = useDispatch(),
        onClose = () => dispatch(actionControlVisibility(type, false))

  const [startDate, setStartDate] = useState<Date | [Date, Date] | null>(null);


  const resetForm = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
  };

  const sendFilmData = (e: { preventDefault: () => void; }) => {
    //send data
    e.preventDefault();
    onClose();
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
                    <input id="movieId" placeholder="pdb6fshan" readOnly={true}/>
                  </label>
                </>
            }

            <label htmlFor="title">
              Title
              <input id="title" placeholder={labels.title}/>
            </label>

            <label htmlFor="date">
              Release Date
              {/*issues with ts error can't be resolved*/}
              <DatePicker
                id="date"
                selected={startDate}
                placeholderText={labels.date}
                onChange={date => setStartDate(date)}
              />
            </label>

            <label htmlFor="movie-url">
              movie url
              <input id="movie-url" placeholder={labels.url}/>
            </label>

            <label htmlFor="genre">
              genre
              <SelectC
                options={_genreOptions}
              />
            </label>

            <label htmlFor="overview">
              Overview
              <input id="overview" placeholder={labels.overview}/>
            </label>

            <label htmlFor="runtime">
              Runtime
              <input id="runtime" placeholder={labels.runtime}/>
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
