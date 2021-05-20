import React from "react";

import "./Question.scss";

export const Question = ({ question }) => {
	const [value, setValue] = React.useState(null);

	const onCheck = (e) => setValue(e.target.value);

	return (
		<div className='question'>
			<div className='question__header'>
				<h2>{question.text}</h2>
			</div>
			<div className='question__answers'>
				{question.answers.map((answer) => {
					const isChecked = value === answer.answerId;

					return (
						<div className='question__answer' key={answer.answerId}>
							<input
								checked={isChecked}
								onChange={onCheck}
								type='radio'
								value={answer.answerId}
								name={answer.text}
							/>
							<label htmlFor={answer.text}>{answer.text}</label>
						</div>
					);
				})}
			</div>
		</div>
	);
};
