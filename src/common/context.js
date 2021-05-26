import React from "react";
import { auth } from "firebase.js";
import { history } from "common/utils";

export const Context = React.createContext([]);

const initialContext = {
	isLogged: false,
	user: null,
	isQuizCompleted: false,
	hairType: null,
	weeklyPlans: [],
};

export const ContextProvider = ({ children }) => {
	const [context, setContext] = React.useState(initialContext);

	React.useEffect(() => {
		auth.onAuthStateChanged((userAuth) => {
			//userAuth istnieje tylko przy logowaniu - przy wylogowywaniu jest undefined
			if (userAuth) {
				setContext({ ...context, user: userAuth, isLogged: true });
				return;
			}

			setContext(initialContext);
		});
	}, []);

	React.useEffect(() => {
		if (context.isLogged && context.isQuizCompleted === false) {
			history.push("/quiz");
			return;
		}

		if (context.isLogged && context.isQuizCompleted) {
			history.push("/plan");
			return;
		}

		history.push("/");
	}, [context.isLogged]);

	console.log(context, 111);

	return (
		<Context.Provider value={[context, setContext]}>
			{children}
		</Context.Provider>
	);
};
