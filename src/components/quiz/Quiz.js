import React from "react";

import { Question } from "components/question/Question";

import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import "./Quiz.scss";

const questions = [
	{
		text: "Twoje włosy są?",
		questionId: 1,
		questionPath: "/",
		answers: [
			{
				answerId: "a",
				text: "Gładkie, lśniące i proste, ale brakuje im objętości",
			},
			{
				answerId: "b",
				text: "Puszą się, są lekko falowane i matowe.",
			},
			{
				answerId: "c",
				text: "Kręcą się lub są zniszczone, suche i łatwo się łamią.",
			},
		],
	},
	{
		text: "Czy łatwo obciążyć Twoje włosy?",
		questionId: 2,
		questionPath: "/2",
		answers: [
			{
				answerId: "a",
				text: "Zdecydowanie tak, wiele produktów je obciąża.",
			},
			{
				answerId: "b",
				text: "Zależy od produktów, ale zdarza się",
			},
			{
				answerId: "c",
				text: "Nie, mogę je odżywiać bez końca.",
			},
		],
	},
	{
		text: "Czy Twoje włosy się kręcą?",
		questionId: 3,
		questionPath: "/3",
		answers: [
			{
				answerId: "a",
				text: "Zdecydowanie nie, są proste jak drut.",
			},
			{
				answerId: "b",
				text: "Bywa, że się falują/zawijają",
			},
			{
				answerId: "c",
				text: "Tak, mam kręcone włosy",
			},
		],
	},

	{
		text: "Twoje włosy:",
		questionId: 4,
		questionPath: "/4",
		answers: [
			{
				answerId: "a",
				text: "Łatwo się elektryzują, są oklapnięte.",
			},
			{
				answerId: "b",
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
		questionPath: "/5",
		answers: [
			{
				answerId: "a",
				text:
					"Zdecydowanie nie, często po godzinie wracają do poprzedniego stanu.",
			},
			{
				answerId: "b",
				text:
					"Tak, ale zdarza się, że po jakimś czasie wracają do poprzedniego stanu.",
			},
			{
				answerId: "c",
				text: "Tak, jedno pociągnięcie prostownicą i są proste.",
			},
		],
	},

	{
		text: "Po rozczesaniu włosów Twoje włosy są:",
		questionId: 6,
		questionPath: "/6",
		answers: [
			{
				answerId: "a",
				text: "Gładkie, lśniące, mogą się elektryzować",
			},
			{
				answerId: "b",
				text: "Mogą się trochę puszyć, ale w dotyku są gładkie",
			},
			{
				answerId: "c",
				text: "Bardzo spuszone",
			},
		],
	},
];

export const Quiz = () => {
	const [questionNumber, setQuestionNumber] = React.useState(1);

	const goNext = () => setQuestionNumber(questionNumber + 1);
	const goPrev = () => setQuestionNumber(questionNumber - 1);

	return (
		<div className='quiz'>
			{questions.map((question) => {
				if (question.questionId === questionNumber) {
					return <Question key={question.questionId} question={question} />;
				}
			})}

			<div className='quiz__btns'>
				<button onClick={goPrev} className='quiz__btn'>
					<ArrowBackIcon fontSize='inherit' />
				</button>
				<button onClick={goNext} className='quiz__btn'>
					<ArrowForwardIcon fontSize='inherit' />
				</button>
			</div>
		</div>
	);
};
