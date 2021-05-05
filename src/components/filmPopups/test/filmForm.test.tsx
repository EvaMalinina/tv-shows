import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import FilmPopup from "../FilmForm";

describe('It should render FilmForm component', () => {
  const mockStore = configureStore();
  const filmMockProps = {
    movieId: '123456',
    name: 'Film',
    desc: 'I am film',
    category: 'comedy',
    year: 2021,
    img: 'link',
    runtime: 100
  }
  const initialState = {};
  const typeAdd = 'add';

  const popupsReducer = {
      add: true
    }

  const singleMovieReducer = {
      movie: {}
    }

  const alertsReducer = {
    alertsVisible: false
  }
  
  const store = mockStore({
      popupsReducer,
      singleMovieReducer,
      alertsReducer
    })
  

console.log('------store', store.getState())
  const FilmAddPopupComponent = (type: any) => {
    return <>{
      <Provider store={store}>
        <FilmPopup type={type}/>
      </Provider>
    }</>
  }

  test('Render add movie popup', () => {
    const { asFragment } = render(FilmAddPopupComponent(typeAdd));
    expect(asFragment()).toMatchSnapshot();
  });

  // test('Render edit movie popup', () => {
  //   const { asFragment } = render(FilmAddPopupComponent(typeAdd));
  //   expect(asFragment()).toMatchSnapshot();
  // });
});