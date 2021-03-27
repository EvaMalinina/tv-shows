import React from "react";
import {AlertPopup} from "./alert.styled";

interface IProps {
  text: string,
  type: string
}

const Alert = ({text, type}: IProps) => {
  return (
      <AlertPopup style={{ backgroundColor: type === 'success' ? 'green' : 'red'}}>
        {text}
      </AlertPopup>
  );
};

export default Alert;
