import React from "react";
import {ErrorPageC, ErrorPageImg} from "./errorPage.styled";
import {Link} from "react-router-dom";
import {BtnErrorPage} from "../../styles/general";


const ErrorPage = () => {
  return (
      <ErrorPageC>
        <h2>Page Not Found</h2>
        <ErrorPageImg/>
        <Link to="/">
          <BtnErrorPage>
            Go Back to Home
          </BtnErrorPage>
        </Link>
      </ErrorPageC>
  );
};

export default ErrorPage;