import { SET_LOADING, SET_STORIES, REMOVE_STORY, HANDLE_PAGE, HANDLE_SEARCH } from "./actions"

export const reduver = (state, action) => {

    switch (action.type) {

        case SET_LOADING:
            return { ...state, }
        case SET_STORIES:
            return { ...state, }
        case REMOVE_STORY:
            return { ...state, }
        case HANDLE_PAGE:
            return { ...state, }
        case HANDLE_SEARCH:
            return { ...state, }

        default:
            return state
    }
}
