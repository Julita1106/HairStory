import React from "react";

import { Question } from "components/question/Question";
import { history, getQuizResult } from "common/utils";
import { plans } from "common/plans";
import { Context } from "common/context";

import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import EmailIcon from "@material-ui/icons/Email";

import { questions } from "common/questions";

import "./Quiz.scss";

export const Quiz = () => {
	const [questionNumber, setQuestionNumber] = React.useState(1);
	const [answers, setAnswers] = React.useState([]);
	const [currentAnswer, setCurrentAnswer] = React.useState(null);
	const [isCompleted, setCompleted] = React.useState(false);
	const [context, setContext] = React.useContext(Context);

	const goNext = () => {
		const isLastQuestion = questionNumber >= questions.length;
		if (isLastQuestion) {
			setAnswers([...answers, currentAnswer]);
			return setCompleted(true);
		} else {
			setQuestionNumber(questionNumber + 1);
			setAnswers([...answers, currentAnswer]);
		}
	};

	const goPrev = () => {
		const prevQuestionNumber = questionNumber - 1;

		//z answers zostaje usunieta (przefiltrowana) ostatnia odpowiedz
		const filteredAnswers = answers.filter(
			(answer) => answer.questionId !== prevQuestionNumber
		);

		setAnswers(filteredAnswers);
		setQuestionNumber(prevQuestionNumber);

		if (isCompleted) {
			setCompleted(false);
		}
	};

	React.useEffect(() => {
		setCurrentAnswer(null);
	}, [questionNumber]);

	const getAnswer = (answer) => {
		setCurrentAnswer(answer);
	}; //zbieranie odpowiedzi z componentu question.

	const onSend = () => {
		const result = getQuizResult(answers);
		setContext({
			...context,
			weeklyPlans: plans[result],
			hairType: result,
			isQuizCompleted: true,
		});
		history.push(`/results`);
	};

	console.log(answers);
	return (
		<div className='quiz'>
			{questions.map((question) => {
				if (question.questionId === questionNumber) {
					return (
						<Question
							key={question.questionId}
							question={question}
							getAnswer={getAnswer}
						/>
					);
				}
				return null;
			})}

			<div className='quiz__btns'>
				<button
					disabled={questionNumber < 2}
					onClick={goPrev}
					className='quiz__btn'>
					<ArrowBackIcon fontSize='inherit' />
				</button>

				{isCompleted ? (
					<button onClick={onSend} className='quiz__btn'>
						<EmailIcon fontSize='inherit' />
					</button>
				) : (
					<button
						disabled={!currentAnswer}
						onClick={goNext}
						className='quiz__btn'>
						<ArrowForwardIcon fontSize='inherit' />
					</button>
				)}
			</div>
		</div>
	);
};
