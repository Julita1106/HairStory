import React from "react";

import { Quiz } from "components/quiz/Quiz";

import "./QuizPage.scss";

export const QuizPage = () => {
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
