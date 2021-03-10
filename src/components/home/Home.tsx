import React, {useState} from "react";
import Header from '../header/Header';
import Films from "../films/Films";
import Footer from "../footer/Footer";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import FilmPopup from "../filmPopups/FilmForm";
import FilmDeletePopup from "../filmPopups/FilmDeletePopup";
import Logo from "../ui/Logo/Logo";


export interface ILabel {
  mainTitle: string,
  title: string,
  date: string,
  url: string,
  genre?: string,
  overview: string,
  runtime: string,
  btnSubmit: string
}

const labelOptions: ILabel = {
  mainTitle: 'Add movie',
  title: 'Moran',
  date: 'Select date',
  url: 'Movie URL here',
  overview: 'Overview',
  runtime: 'Runtime',
  btnSubmit: 'Submit'
}

const Home = () => {
  const [ isAddPopupShown, setAddPopupShown ] = useState<boolean>(false);
  const [ isEditPopupShown, setEditPopupShown ] = useState<boolean>(false);
  const [ isDeletePopupShown, setDeletePopupShown ] = useState<boolean>(false);


  const showAddMoviePopup = (e: React.FormEvent): void => {
    e.preventDefault();
    setAddPopupShown(!isAddPopupShown);
  }

  const showEditMoviePopup = (e: React.FormEvent): void => {
    e.preventDefault();
    setEditPopupShown(!isEditPopupShown);
  }

  const showDeleteMoviePopup =  (e: React.FormEvent): void => {
    e.preventDefault();
    setDeletePopupShown(!isDeletePopupShown);
  }

  return (
    <>
      <ErrorBoundary>
        {
          isAddPopupShown ?
            <FilmPopup popup={showAddMoviePopup} labels={labelOptions}/>
            :
            <></>
        }
        {
          isEditPopupShown ?
            // pass film data
            <FilmPopup popup={showEditMoviePopup} labels={labelOptions}/>
            :
            <></>
        }
        {
          isDeletePopupShown ?
            <FilmDeletePopup popup={showDeleteMoviePopup} />
            :
            <></>
        }
        <Header showAddMoviePopup={showAddMoviePopup}/>
        <Films
          showEditMoviePopup={showEditMoviePopup}
          showDeleteMoviePopup={showDeleteMoviePopup}
        />
        <Footer>
          <Logo/>
        </Footer>
      </ErrorBoundary>
    </>
  )
};

export default Home;




