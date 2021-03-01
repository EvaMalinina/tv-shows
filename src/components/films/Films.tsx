import * as React from "react";
import {useEffect, useRef, useState} from "react";
import { FilmsC } from './films.styled';

const Films = () => {

  const [ categories ] = useState(['all',  'documentary', 'comedy', 'horror', 'crime'])

  return (
    <FilmsC>
      <nav>
        <ul>
          { categories.map((cat) => {
            return(
              <li key={cat}>
                {cat}
              </li>
            )
          })}
        </ul>
      </nav>
    </FilmsC>
  );
};

export default Films;
