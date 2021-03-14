import { createContext, useContext } from 'react';

export interface IDeleteMovie {
  isDeletePopupShown: boolean,
  setDeletePopupShown: (isDeletePopupShown: boolean) => void
}

export const DeleteMovieContext = createContext<IDeleteMovie>({
  isDeletePopupShown: false,
  setDeletePopupShown: (isDeletePopupShown) => {}
});

export const useDeleteMovieContext = () => useContext(DeleteMovieContext);
