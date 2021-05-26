import React from "react";

import "./Question.scss";

export const Question = ({ question, getAnswer }) => {
	const [value, setValue] = React.useState(null);
	const answers = question.answers;

	const onCheck = (e) => setValue(e.target.value);

	React.useEffect(() => {
		if (value) {
			const currentAnswer = answers.find((answer) => answer.answerId === value);
			getAnswer(currentAnswer);
		}
	}, [value]);
	//kod wykona sie tylko wtedy gdy zmienimy wartosc (odpowiedz)

	return (
		<div className='question'>
			<div className='question__header'>
				<h2>{question.text}</h2>
			</div>
			<div className='question__answers'>
				{answers.map((answer) => {
					const isChecked = value === answer.answerId;

					return (
						<div className='question__answer' key={answer.answerId}>
							<input
								checked={isChecked}
								onChange={onCheck}
								type='radio'
								value={answer.answerId}
								id={answer.text}
							/>
							<label htmlFor={answer.text}>{answer.text}</label>
						</div>
					);
				})}
			</div>
		</div>
	);
};
