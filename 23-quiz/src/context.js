import {createContext, useContext, useEffect, useState} from 'react';
import axios from 'axios';
const AppContext = createContext();

export const useGlobalContext = () => {
	return useContext(AppContext);
};

const table = {
	sports: 21,
	history: 23,
	politics: 24,
};

const API_ENDPOINT = 'https://opentdb.com/api.php?';
const url = '';
const tempUrl =
	'https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple';

export const AppProvider = ({children}) => {
	const [loading, setLoading] = useState(false);
	const [question, setQuestion] = useState([]);
	const [quiz, setQuiz] = useState({
		amount: 10,
		category: 'sports',
		difficult: 'easy',
	});

	const fetchQuiz = async (url) => {
		setLoading(true)
		try {
			const {data} = await axios(url);
			const veri = data.results
			console.log(veri);
			setQuestion(veri)
			setLoading(false)
		} catch (error) {
			console.log(error);
			setLoading(false)
		}
	};

	useEffect(() => {
		const {amount, category, difficulty} = quiz;
		const url = `${API_ENDPOINT}amount=${amount}&difficult=${difficulty}&category=${table[category]}&type=multiple`;
		fetchQuiz(url);
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		const {amount, category, difficulty} = quiz;
		const url = `${API_ENDPOINT}amount=${amount}&difficult=${difficulty}&category=${table[category]}&type=multiple`;
		fetchQuiz(url);
	};
	return (
		<AppContext.Provider value={{handleSubmit}}>{children}</AppContext.Provider>
	);
};
