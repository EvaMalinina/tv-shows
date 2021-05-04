import React from 'react';
import { render } from '@testing-library/react';
import FilmsItemC from './FilmItem';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

describe('It should render list item - single movie view', () => {
  const mockStore = configureStore();
  const filmMockProps = {
    movieId: '12345',
    name: 'Hello',
    desc: 'I am hello',
    category: 'comedy',
    year: 2021,
    img: 'link',
    runtime: 100
  }
  const initialState = [];
  const store = mockStore(initialState.push(filmMockProps));

  const name = filmMockProps.name;

  const FilmsItem = (name: string) => {
    return <>{
      <Provider store={store}>
        name && <FilmsItemC
          movieId={filmMockProps.movieId}
          name={filmMockProps.name}
          desc={filmMockProps.desc}
          category={filmMockProps.category}
          year={filmMockProps.year}
          img={filmMockProps.img}
          runtime={filmMockProps.runtime}
        />
      </Provider>
    }</>
  }

  test('Render single movie view', () => {
    const { asFragment } = render(FilmsItem(name));

    expect(asFragment()).toMatchSnapshot();
  });

});