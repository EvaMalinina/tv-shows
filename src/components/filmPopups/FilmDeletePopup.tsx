import React from "react";
import {Bg, BgForm, Form, BtnPopupClose, BtnSubmit} from "./filmPopups.styled";
import {Container} from "../../styles/general";
import {IType} from "./interfaces";
import {useDispatch, useSelector} from "react-redux";
import {controlPopupVisibility} from "./storePopups/actions";
import {IFilmPopupVisibility} from "../../store/interfaces";
import {getMoviesDataStart} from "../films/components/filmsList/store/actions";
import {deleteMovieData} from "./storeMovie/actions";
import {showAlert} from "./storeAlerts/actions";


const FilmDeletePopup = ({type}: IType) => {

  // having troubles typing props here
  const visible = useSelector(({popupsReducer: {[type]: visibility}}: IFilmPopupVisibility) => visibility);

  const dispatch = useDispatch();
  const onClose = () => dispatch(controlPopupVisibility(type, false));

  const movieData = useSelector(state => state.singleMovieReducer.movie);


  const deleteFilm = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    try {
      dispatch(deleteMovieData(movieData.movieId));
      onClose();
      dispatch(getMoviesDataStart());
    } catch (e) {
      dispatch(showAlert(e.response.data))
    }
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
