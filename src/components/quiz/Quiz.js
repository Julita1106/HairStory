import React from "react";

import { Question } from "components/question/Question";
import { history, getQuizResult } from "common/utils";
import { plans } from "common/plans";
import { Context } from "common/context";

import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import EmailIcon from "@material-ui/icons/Email";

import "./Quiz.scss";

const questions = [
	{
		text: "Twoje włosy są?",
		questionId: 1,
		answers: [
			{
				answerId: "a",
				questionId: 1,
				text: "Gładkie, lśniące i proste, ale brakuje im objętości",
			},
			{
				answerId: "b",
				questionId: 1,
				text: "Puszą się, są lekko falowane i matowe.",
			},
			{
				answerId: "c",
				questionId: 1,
				text: "Kręcą się lub są zniszczone, suche i łatwo się łamią.",
			},
		],
	},
	{
		text: "Czy łatwo obciążyć Twoje włosy?",
		questionId: 2,
		answers: [
			{
				answerId: "a",
				questionId: 2,
				text: "Zdecydowanie tak, wiele produktów je obciąża.",
			},
			{
				answerId: "b",
				questionId: 2,
				text: "Zależy od produktów, ale zdarza się",
			},
			{
				answerId: "c",
				questionId: 2,
				text: "Nie, mogę je odżywiać bez końca.",
			},
		],
	},
	{
		text: "Czy Twoje włosy się kręcą?",
		questionId: 3,
		answers: [
			{
				answerId: "a",
				questionId: 3,
				text: "Zdecydowanie nie, są proste jak drut.",
			},
			{
				answerId: "b",
				questionId: 3,
				text: "Bywa, że się falują/zawijają",
			},
			{
				answerId: "c",
				questionId: 3,
				text: "Tak, mam kręcone włosy",
			},
		],
	},

	{
		text: "Twoje włosy:",
		questionId: 4,
		answers: [
			{
				answerId: "a",
				questionId: 4,
				text: "Łatwo się elektryzują, są oklapnięte.",
			},
			{
				answerId: "b",
				questionId: 4,
				text: "Często się puszą, czasami w dotyku są matowe.",
			},
			{
				answerId: "c",
				text: "Są bardzo suche, zdecydowanie brakuje im nawilżenia.",
			},
		],
	},

	{
		text: "Czy łatwo stylizuje się Twoje włosy?",
		questionId: 5,
		answers: [
			{
				answerId: "a",
				questionId: 5,
				text:
					"Zdecydowanie nie, często po godzinie wracają do poprzedniego stanu.",
			},
			{
				answerId: "b",
				questionId: 5,
				text:
					"Tak, ale zdarza się, że po jakimś czasie wracają do poprzedniego stanu.",
			},
			{
				answerId: "c",
				questionId: 5,
				text: "Tak, jedno pociągnięcie prostownicą i są proste.",
			},
		],
	},

	{
		text: "Po rozczesaniu włosów Twoje włosy są:",
		questionId: 6,
		answers: [
			{
				answerId: "a",
				text: "Gładkie, lśniące, mogą się elektryzować",
				questionId: 6,
			},
			{
				answerId: "b",
				text: "Mogą się trochę puszyć, ale w dotyku są gładkie",
				questionId: 6,
			},
			{
				answerId: "c",
				text: "Bardzo spuszone",
				questionId: 6,
			},
		],
	},
];

export const Quiz = () => {
	const [questionNumber, setQuestionNumber] = React.useState(1);
	const [answers, setAnswers] = React.useState([]);
	const [currentAnswer, setCurrentAnswer] = React.useState(null);
	const [isCompleted, setCompleted] = React.useState(false);
	const [context, setContext] = React.useContext(Context);
	const googleId = context.user.googleId;

	React.useEffect(() => {
		setCurrentAnswer(null);

		if (questionNumber === questions.length + 1) {
			setCompleted(true);
		}

		const shouldBeNotCompleted =
			questionNumber < questions.length + 1 && isCompleted === true;

		if (shouldBeNotCompleted) {
			setCompleted(false);
		}
	}, [questionNumber]);

	const getAnswer = (answer) => {
		setCurrentAnswer(answer);
	};

	const goNext = () => {
		if (questionNumber >= questions.length) {
			setAnswers([...answers, currentAnswer]);
			return setCompleted(true);
		}

		setQuestionNumber(questionNumber + 1);
		setAnswers([...answers, currentAnswer]);
	};

	const goPrev = () => {
		const prevQuestionNumber = questionNumber - 1;

		//z answers zostaje usunieta (przefiltrowana) ostatnia odpowiedz
		const filteredAnswers = answers.filter(
			(answer) => answer.questionId !== prevQuestionNumber
		);

		setAnswers(filteredAnswers);

		setQuestionNumber(prevQuestionNumber);
	};

	const onSend = () => {
		const result = getQuizResult(answers);
		setContext({ ...context, hairType: result });
		history.push(`/${googleId}/results`);
	};

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
