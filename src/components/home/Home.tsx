import React, {useState} from "react";
import Header from '../header/Header';
import Films from "../films/Films";
import Footer from "../footer/Footer";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import FilmPopup from "../filmForm/FilmForm";


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
  btnSubmit: 'Add'
}

const Home = () => {
  const [ isAddPopupShown, setAddPopupShown ] = useState<boolean>(false);
  const [ isEditPopupShown, setEditPopupShown ] = useState<boolean>(false);


  const showAddMoviePopup = (e: React.FormEvent): void => {
    e.preventDefault();
    setAddPopupShown(!isAddPopupShown);
  }

  const showEditMoviePopup = (e: React.FormEvent): void => {
    e.preventDefault();
    setEditPopupShown(!isEditPopupShown);
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
            <FilmPopup popup={showEditMoviePopup} labels={labelOptions}/>
            :
            <></>
        }
        <Header showAddMoviePopup={showAddMoviePopup}/>
        <Films showEditMoviePopup={showEditMoviePopup}/>
        <Footer/>
      </ErrorBoundary>
    </>
  )
};

export default Home;




