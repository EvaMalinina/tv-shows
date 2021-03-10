import React, {FormEvent} from "react";
import { Bg, BgForm, Form, BtnPopupClose, BtnSubmit } from "./filmPopups.styled";
import { Container } from "../../styles/general";
import {useDeleteMovieContext} from "../../context/deleteMovieContext";


const FilmDeletePopup = () => {
  let { isDeletePopupShown, setDeletePopupShown } = useDeleteMovieContext();

  const closeDeletePopup = (e: { preventDefault: () => void;}) => {
    e.preventDefault();
    setDeletePopupShown(!isDeletePopupShown);
  }

  const deleteFilm = (e: { preventDefault: () => void;}) => {
    //send delete request
    e.preventDefault();
    setDeletePopupShown(!isDeletePopupShown);
  };

  return (
    <Bg>
      <BgForm>
        <Container>
          <Form>
            <BtnPopupClose onClick={closeDeletePopup}>&#10005;</BtnPopupClose>
            <h2>delete movie</h2>
            <p>Are you sue you want to delete this movie?</p>
            <BtnSubmit onClick={deleteFilm}>Confirm</BtnSubmit>
          </Form>
        </Container>
      </BgForm>
    </Bg>
  );
};

export default FilmDeletePopup;
