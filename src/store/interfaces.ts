export interface IAction {
  type: string,
  payload: [] | string | {}
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