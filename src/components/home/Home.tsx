import React, {useState} from "react";
import Header from '../header/Header';
import Films from "../films/Films";
import Footer from "../footer/Footer";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import AddFilmPopup from "../addFilm/AddFilm";


const Home = () => {
  const [ isAddPopupShown, setAddPopupShown ] = useState<boolean>(false);

  const showAddMoviePopup = (e: React.FormEvent): void => {
    e.preventDefault();
    setAddPopupShown(!isAddPopupShown);
  }

  return (
    <>
      <ErrorBoundary>
        {
          isAddPopupShown ?
            <AddFilmPopup popup={showAddMoviePopup}/>
            :
            <></>
        }
        <Header showAddMoviePopup={showAddMoviePopup}/>
        <Films/>
        <Footer/>
      </ErrorBoundary>
    </>
  )
};

export default Home;




