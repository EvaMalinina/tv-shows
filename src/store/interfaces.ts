export interface IAction {
  type: string,
  payload: [] | string | {} | any
}

export interface IState {
  add: boolean,
  edit: boolean,
  remove: boolean,
  filmOverview: boolean
}

export interface IFilmPopupVisibility {
  popupsReducer: {
    filmOverview: boolean;
  }
}

export interface IMovie {
  movieId: string,
  name: string,
  desc: string,
  category: string,
  year: number,
  img: string,
  runtime: number
}