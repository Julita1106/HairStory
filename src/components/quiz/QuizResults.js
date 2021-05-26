import React from "react";
import { Context } from "common/context";
import { resultDictionary, history } from "common/utils";

import "./QuizResults.scss";

export const QuizResults = () => {
	const [context] = React.useContext(Context);
	if (!context.isLogged) {
		history.push("/");
		return null;
	}

	const onShowPlan = () => history.push(`/plan`);

	const resultInfo = resultDictionary[context.hairType];

	return (
		<div className='results'>
			<h3 className='results__header'>
				Twoje włosy są: &nbsp; <span>{resultInfo.label}</span>
			</h3>

			<p>{resultInfo.description}</p>
			<button onClick={onShowPlan} className='results__btn'>
				Pokaz plan
			</button>
		</div>
	);
};
