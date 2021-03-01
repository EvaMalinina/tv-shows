import * as React from "react";
import { SearchTitle } from "./title.styled";
import { useState } from "react";


const Title = () => {
  const [text] = useState<string>( 'find your movie');

  return (
    <SearchTitle>{ text }</SearchTitle>
  )
};

export default Title;
