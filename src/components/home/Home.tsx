import React from "react";
import Films from "../films/Films";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import Logo from "../ui/Logo/Logo";
import {SuspenseWrapper} from "../../styles/general";

// this error disappear if I export components as React.FC, bit then new errors appear
const FilmPopup =  React.lazy(() => import(`../filmPopups/FilmForm`));
const FilmDeletePopup =  React.lazy(() => import(`../filmPopups/FilmDeletePopup`));


const Home = () => {
  return (
    <>
      <ErrorBoundary>
        <React.Suspense fallback={<SuspenseWrapper><h4>Loading...</h4></SuspenseWrapper>}>
          <FilmPopup type="add" />
          <FilmPopup type="edit" />
          <FilmDeletePopup type="remove"/>
        </React.Suspense>

        <Header/>
        <Films/>
        <Footer>
          <Logo/>
        </Footer>
      </ErrorBoundary>
    </>
  )
};

export default Home;




