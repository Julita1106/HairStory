import React from "react";

export const Context = React.createContext({});

const initialContext = {
	user: {},
	isQuizCompleted: false,
	hairType: null,
	weeklyPlans: [],
};

export const ContextProvider = ({ children }) => {
	const [context, setContext] = React.useState(initialContext);

	return (
		<Context.Provider value={[context, setContext]}>
			{children}
		</Context.Provider>
	);
};
