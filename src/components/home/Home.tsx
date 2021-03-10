import React, { useState } from "react";
import Films from "../films/Films";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import FilmPopup from "../filmPopups/FilmForm";
import FilmDeletePopup from "../filmPopups/FilmDeletePopup";
import Logo from "../ui/Logo/Logo";
import { AddMovieContext } from "../../context/addMovieContext";
import { EditMovieContext } from "../../context/editMovieContext";
import { DeleteMovieContext } from "../../context/deleteMovieContext";


export interface ILabel {
  mainTitle: string,
  title: string,
  date: string,
  url: string,
  // genre?: string,
  overview: string,
  runtime: string,
  btnSubmit: string
}

const labelOptionsAdd: ILabel = {
  mainTitle: 'Add movie',
  title: 'Moran',
  date: 'Select date',
  url: 'Movie URL here',
  overview: 'Overview',
  runtime: 'Runtime',
  btnSubmit: 'Submit'
}

const labelOptionsEdit: ILabel = {
  mainTitle: 'edit movie',
  title: 'Moran',
  date: '03/08/2019',
  url: 'Movie URL here',
  overview: 'Overview',
  runtime: 'Runtime',
  btnSubmit: 'Save'
}

const Home = () => {
  const [ isAddPopupShown, setAddPopupShown ] = useState<boolean>(false);
  const [ isEditPopupShown, setEditPopupShown ] = useState<boolean>(false);
  const [ isDeletePopupShown, setDeletePopupShown ] = useState<boolean>(false);

  return (
    <>
      <AddMovieContext.Provider value={{ isAddPopupShown, setAddPopupShown }}>
        <EditMovieContext.Provider value={{ isEditPopupShown, setEditPopupShown }}>
          <DeleteMovieContext.Provider value={{ isDeletePopupShown, setDeletePopupShown }}>
            <ErrorBoundary>
              {
                isAddPopupShown ?
                  <FilmPopup labels={labelOptionsAdd}/>
                  :
                  <></>
              }
              {
                isEditPopupShown ?
                  // pass film data
                  <FilmPopup labels={labelOptionsEdit}/>
                  :
                  <></>
              }
              {
                isDeletePopupShown ?
                  <FilmDeletePopup/>
                  :
                  <></>
              }
              <Header/>
              <Films/>
              <Footer>
                <Logo/>
              </Footer>
            </ErrorBoundary>
          </DeleteMovieContext.Provider>
        </EditMovieContext.Provider>
      </AddMovieContext.Provider>
    </>
  )
};

export default Home;




