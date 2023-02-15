import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from "./actions"

export const reducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {...state, isLoading: true}
    case SET_STORIES:
      return {
        ...state,
        isLoading: false,
        hits: action.payload.hits,
        nbPages: action.payload.nbPages,
      }
    case REMOVE_STORY:
      return {...state}
    case HANDLE_PAGE:
      if (action.payload === "inc") {
      }
      return {...state}
    case HANDLE_SEARCH:
      return {...state, query: action.payload, page: 0}

    default:
      return state
  }
}
