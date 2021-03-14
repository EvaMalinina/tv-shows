import React from "react";
import { Bg, BgForm, Form, BtnPopupClose, BtnSubmit } from "./filmPopups.styled";
import { Container } from "../../styles/general";
import { actionControlVisibility, useDispatch, useSelector } from "../../context/modalMovieContext";


const FilmDeletePopup = ({type}: {type: string}) => {
  const visible = useSelector(({[type]: visibility}) => visibility),
        dispatch = useDispatch(),
        onClose = () => dispatch(actionControlVisibility(type, false))


  const deleteFilm = (e: { preventDefault: () => void;}) => {
    //send delete request
    e.preventDefault();
    onClose()
  };

  return !!visible && (
    <Bg>
      <BgForm>
        <Container>
          <Form>
            <BtnPopupClose onClick={onClose}>&#10005;</BtnPopupClose>
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
