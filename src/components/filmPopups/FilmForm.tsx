import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Container } from "../../styles/general";
import { Bg, BgForm, Form, BtnPopupClose, BtnsWrapper, BtnReset, BtnSubmit } from "./filmPopups.styled";
import SelectC from "../ui/Select/Select";
import { ILabel } from "../home/Home";
import { useAddMovieContext } from "../../context/addMovieContext";
import { useEditMovieContext } from "../../context/editMovieContext";


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


const FilmPopup = ({labels}: {labels: ILabel}) => {
  let { isAddPopupShown, setAddPopupShown } = useAddMovieContext();
  let { isEditPopupShown, setEditPopupShown } = useEditMovieContext();
  const [startDate, setStartDate] = useState<Date | [Date, Date] | null>(null);

  const resetForm = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
  };

  const sendFilmData = (e: { preventDefault: () => void; }) => {
    //send data
    e.preventDefault();
    setAddPopupShown(!isAddPopupShown);
  };

  const sendEditedFilmData = (e: { preventDefault: () => void; }) => {
    //send edited data
    e.preventDefault();
    setEditPopupShown(!isEditPopupShown);
  };

  const closeAddMoviePopup = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setAddPopupShown(!isAddPopupShown);
  };

  const closeEditMoviePopup = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setEditPopupShown(!isEditPopupShown);
  };

  return (
    // having issues with ts typing
    <Bg>
      <BgForm>
        <Container>
          <Form>
            <h2>{labels.mainTitle}</h2>
            {
              isAddPopupShown ?
                <BtnPopupClose onClick={closeAddMoviePopup}>&#10005;</BtnPopupClose>
                :
                <>
                  <BtnPopupClose onClick={closeEditMoviePopup}>&#10005;</BtnPopupClose>
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
              <DatePicker
                id="date"
                // selected={startDate}
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
              {
                isAddPopupShown ?
                  <BtnSubmit onClick={sendFilmData}>{labels.btnSubmit}</BtnSubmit>
                  :
                  <BtnSubmit onClick={sendEditedFilmData}>{labels.btnSubmit}</BtnSubmit>
              }
            </BtnsWrapper>
          </Form>
        </Container>
      </BgForm>
    </Bg>
  )
}

export default FilmPopup;
