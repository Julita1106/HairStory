import React from "react";
import { plans } from "common/plans";

export const Context = React.createContext({});

const initialContext = {
	user: {},
	isQuizCompleted: false,
	hairType: null,
	weeklyPlans: [],
};

export const ContextProvider = ({ children }) => {
	const [context, setContext] = React.useState(initialContext);

	React.useEffect(() => {
		setContext({ ...context, weeklyPlans: plans[context.hairType] });
	}, [context.hairType]);

	return (
		<Context.Provider value={[context, setContext]}>
			{children}
		</Context.Provider>
	);
};
