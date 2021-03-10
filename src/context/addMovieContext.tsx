import { createContext, useContext } from 'react';

export interface IAddMovie {
  isAddPopupShown: boolean,
  setAddPopupShown: (isAddPopupShown: boolean) => void
}

export const AddMovieContext = createContext<IAddMovie>({
  isAddPopupShown: false,
  setAddPopupShown: (isAddPopupShown) => {}
});

export const useAddMovieContext = () => useContext(AddMovieContext);
