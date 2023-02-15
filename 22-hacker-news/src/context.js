import {createContext, useContext, useEffect, useReducer} from 'react';
import {reducer} from './reducer';
import {
	HANDLE_PAGE,
	HANDLE_SEARCH,
	REMOVE_STORY,
	SET_LOADING,
	SET_STORIES,
} from './actions';

const AppContext = createContext();

export const useGlobalContext = () => {
	return useContext(AppContext);
};

const initialState = {
	isLoading: true,
	hits: [],
	query: 'react',
	page: 0,
	nbPages: 0,
};

const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?';

export const AppProvider = ({children}) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const fetchStories = async (url) => {
		dispatch({type: SET_LOADING});
		try {
			const res = await fetch(url);
			const data = await res.json();
			console.log(data);
			dispatch({
				type: SET_STORIES,
				payload: {hits: data.hits, nbPages: data.nbPages},
			});
		} catch (error) {
			console.log(error);
		}
	};

	const removeStory = (id) => {
		dispatch({type: REMOVE_STORY, payload: id});
	};
	const handleSearch = (query) => {
		dispatch({type: HANDLE_SEARCH, payload: query});
	};
	const handlePage = (value) => {
		dispatch({type: HANDLE_PAGE, payload: value});
	};

	useEffect(() => {
		fetchStories(`${API_ENDPOINT}query=${state.query}`);
	}, [state.query]);

	return (
		<AppContext.Provider
			value={{...state, handleSearch, handlePage, removeStory}}
		>
			{children}
		</AppContext.Provider>
	);
};
