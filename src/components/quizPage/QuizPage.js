import React from "react";

import { Quiz } from "components/quiz/Quiz";
import { Context } from "common/context";
import { history } from "common/utils";

import "./QuizPage.scss";

export const QuizPage = () => {
	const [context] = React.useContext(Context);

	if (!context.isLogged) {
		history.push("/");
		return null;
	}

	return (
		<div className='quiz-page'>
			<div className='quiz-page__heading'>
				<p>Wypełnij przygotowany ponizej quiz!</p>
				<p>Zaczynamy!</p>
			</div>
			<Quiz />
		</div>
	);
};
