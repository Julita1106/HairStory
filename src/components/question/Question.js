import React from "react";

import "./Question.scss";

export const Question = ({ question }) => {
	return (
		<div className='question'>
			<div className='question__header'>
				<h2>{question.text}</h2>
			</div>
			<div className='question__answers'>
				{question.answers.map((answer) => {
					return (
						<div className='question__answer' key={answer.answerId}>
							<input type='radio' value={answer.answerId} name={answer.text} />
							<label htmlFor={answer.text}>{answer.text}</label>
						</div>
					);
				})}
			</div>
		</div>
	);
};
