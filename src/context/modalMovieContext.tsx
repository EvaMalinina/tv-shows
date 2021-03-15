import React, { createContext, useContext, useReducer } from 'react';

//need add types

interface IActionControlVisibility {
  modalType: {},
  visibility: boolean
}

interface IReducer {
  state: {},
  action: {
    type: string,
    payload: any
  }
}

export const DialogContext = createContext();

const defaultState = {
  add: false,
  edit: false,
  remove: false,
  filmOverview: false
}

export const actionControlVisibility = (modalType, visibility) => ({
  type: 'SET_MODAL_VISIBILITY',
  payload: {
    modalType,
    visibility
  }
})

const reducer = (state, action) => {
  switch(action.type){
    case 'SET_MODAL_VISIBILITY': {
      const { payload: { modalType, visibility} } = action
      return {...state, [modalType]: visibility}
    }
    default: return state
  }
}

export const DialogProvider = ({children}: {children: React.ReactNode}) => {
  const [state, dispatch] = useReducer(reducer, defaultState),
        store = {state, dispatch}

  return (
      <DialogContext.Provider value={store}>
        {children}
      </DialogContext.Provider>
  )
}

export const useDispatch = () => {
  const { dispatch } = useContext(DialogContext)
  return dispatch
}


export const useSelector = fn => {
  const { state } = useContext(DialogContext)
  return fn(state)
}

