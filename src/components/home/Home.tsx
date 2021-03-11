import React, { useState } from "react";
import Films from "../films/Films";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import Logo from "../ui/Logo/Logo";
import { SuspenseWrapper } from "../../styles/general";
import { AddMovieContext } from "../../context/addMovieContext";
import { EditMovieContext } from "../../context/editMovieContext";
import { DeleteMovieContext } from "../../context/deleteMovieContext";

const FilmPopup =  React.lazy(() => import("../filmPopups/FilmForm"));
const FilmDeletePopup =  React.lazy(() => import("../filmPopups/FilmDeletePopup"));


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
                  <React.Suspense fallback={<SuspenseWrapper><h4>Loading...</h4></SuspenseWrapper>}>
                    <FilmPopup labels={labelOptionsAdd}/>
                  </React.Suspense>
                  :
                  <></>
              }
              {
                isEditPopupShown ?
                  // pass film data
                  <React.Suspense fallback={<SuspenseWrapper><h4>Loading...</h4></SuspenseWrapper>}>
                    <FilmPopup labels={labelOptionsEdit}/>
                  </React.Suspense>
                  :
                  <></>
              }
              {
                isDeletePopupShown ?
                  <React.Suspense fallback={<SuspenseWrapper><h4>Loading...</h4></SuspenseWrapper>}>
                    <FilmDeletePopup/>
                  </React.Suspense>
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




