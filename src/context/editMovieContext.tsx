import { createContext, useContext } from 'react';

export interface IEditMovie {
  isEditPopupShown: boolean,
  setEditPopupShown: (isEditPopupShown: boolean) => void
}

export const EditMovieContext = createContext<IEditMovie>({
  isEditPopupShown: false,
  setEditPopupShown: (isEditPopupShown) => {}
});

export const useEditMovieContext = () => useContext(EditMovieContext);
