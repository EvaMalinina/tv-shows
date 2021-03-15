import React from "react";
import Films from "../films/Films";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import Logo from "../ui/Logo/Logo";
import {SuspenseWrapper} from "../../styles/general";
import {DialogProvider} from "../../context/modalMovieContext";

// this error disappear if I export components as React.FC, bit then new errors appear
const FilmPopup =  React.lazy(() => import(`../filmPopups/FilmForm`));
const FilmDeletePopup =  React.lazy(() => import(`../filmPopups/FilmDeletePopup`));


export interface ILabel {
  mainTitle: string,
  title: string,
  date: string,
  url?: string,
  genre?: string,
  overview: string,
  runtime: string,
  btnSubmit?: string,
  img?: string,
  rating?: number
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

  return (
    <>
      <DialogProvider>
        <ErrorBoundary>
          <React.Suspense fallback={<SuspenseWrapper><h4>Loading...</h4></SuspenseWrapper>}>
            <FilmPopup labels={labelOptionsAdd} type="add" />
            <FilmPopup labels={labelOptionsEdit} type="edit" />
            <FilmDeletePopup type="remove"/>
          </React.Suspense>

          <Header/>
          <Films/>
          <Footer>
            <Logo/>
          </Footer>
        </ErrorBoundary>
      </DialogProvider>
    </>
  )
};

export default Home;




