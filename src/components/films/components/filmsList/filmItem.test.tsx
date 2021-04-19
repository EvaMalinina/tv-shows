// import React from 'react';
// import { render } from '@testing-library/react';
//
// import FilmsItemC from './FilmItem';
//
// describe('It should render list item - single movie view', () => {
//   it('should render list item -movie snapshot', () => {
//     const filmMockProps = {
//       movieId: '12345',
//       name: 'Hello',
//       desc: 'I am hello',
//       category: 'comedy',
//       year: 2021,
//       img: 'link',
//       runtime: 100
//     }
//    const { asFragment } = render(<FilmsItemC
//                                    movieId={filmMockProps.movieId}
//                                    name={filmMockProps.name}
//                                    desc={filmMockProps.desc}
//                                    category={filmMockProps.category}
//                                    year={filmMockProps.year}
//                                    img={filmMockProps.img}
//                                    runtime={filmMockProps.runtime}
//                                 />);
//    expect(asFragment(<FilmsItemC/>)).toMatchSnapshot(<FilmsItemC/>);
//   })
// });