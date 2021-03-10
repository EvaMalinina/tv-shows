import React, {FormEvent} from "react";
import { Bg, BgForm, Form, BtnPopupClose, BtnSubmit } from "./filmPopups.styled";
import { Container } from "../../styles/general";

interface IFuncProps {
  popup(e: React.FormEvent): void;
}

//having troubles with typing
const deleteFilm = ({e, popup}: {e: { preventDefault: () => void; }, popup: any}) => {
  //send delete request
  e.preventDefault();
  popup();
};

const FilmDeletePopup = ({popup}: IFuncProps) => {
  return (
    <Bg>
      <BgForm>
        <Container>
          <Form>
            <BtnPopupClose onClick={popup}>&#10005;</BtnPopupClose>
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
