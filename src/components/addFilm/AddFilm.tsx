import React, { useState } from "react";
import { Bg } from "./addFilms.styled";


const AddFilmPopup = (popup: (event: React.MouseEvent<HTMLButtonElement>) => void) => {

  return (
    <Bg>
      <button onClick={(e) => {popup(e)}}>close</button>
    </Bg>
  )
}

export default AddFilmPopup;
