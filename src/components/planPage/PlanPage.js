import React from "react";

import { PlanDay } from "./PlanDay";

import "./PlanPage.scss";

const plan = {
	week: 1,
	isCompleted: true,
	days: [
		{
			day: "Poniedzialek",
			isCompleted: false,
			tasks: [
				{
					text: "Olejowanie na 15 min przed myciem olejem z pestek dyni",
					isDone: true,
					id: 1,
				},
				{
					text: "Mycie: Sessio Mango",
					isDone: false,
					id: 2,
				},
				{
					text: "Maska emolientowa: Garnier Fruictis, Macadamia oils",
					isDone: false,
					id: 3,
				},
				{
					text: "Wcierka: Vianek",
					isDone: false,
					id: 4,
				},
				{
					text: "Serum: Marion termo",
					isDone: false,
					id: 5,
				},
			],
		},
		{
			day: "Wtorek",
			isCompleted: false,
			tasks: [
				{
					text: "Wcierka: czarnuszkowa",
					isDone: false,
					id: 1,
				},
			],
		},

		{
			day: "Środa",
			isCompleted: false,
			tasks: [
				{
					text: "Olejowanie całonocne olejem z pestek dyni na podkład aloesowy",
					isDone: false,
					id: 1,
				},
			],
		},

		{
			day: "Czwartek",
			isCompleted: false,
			tasks: [
				{
					text: "Mycie: Sessio Mango",
					isDone: false,
					id: 1,
				},
				{
					text: "Maska emolientowa: Garnier Fruictis, Macadamia oils",
					isDone: false,
					id: 2,
				},
				{
					text: "Wcierka: Vianek",
					isDone: false,
					id: 3,
				},
				{
					text: "Serum: Marion termo",
					isDone: false,
					id: 4,
				},
			],
		},

		{
			day: "Piątek",
			isCompleted: false,
			tasks: [
				{
					text: "Wcierka: Vianek",
					isDone: false,
					id: 1,
				},
			],
		},
		{
			day: "Sobota",
			isCompleted: false,
			tasks: [
				{
					text: "Olejowanie calonocne olejem z pestek dyni na podład aloesowy",
					isDone: false,
					id: 1,
				},
			],
		},
		{
			day: "Niedziela",
			isCpmpleted: false,
			tasks: [
				{
					text: "Mycie: Sessio Mango",
					isDone: false,
					id: 1,
				},
				{
					text: "Maska emolientowa: Garnier Fruictis, Macadamia oils",
					isDone: false,
					id: 2,
				},
				{
					text: "Wcierka: Vianek",
					isDone: false,
					id: 3,
				},
				{
					text: "Serum: Marion termo",
					isDone: false,
					id: 4,
				},
			],
		},
	],
};

export const PlanPage = () => {
	return (
		<div className='plan'>
			<div className='plan__heading'>
				<button className='btn'>Poprzedni plan</button>
				<h3>Tydzień: {plan.week}</h3>
				<button className='btn'>Następny plan</button>
			</div>
			<div className='plan__days'>
				{plan.days.map((day) => {
					return <PlanDay key={day.day} dayData={day} />;
				})}
			</div>
			<div className='plan__actions'>
				<button className='btn'>Wyślij</button>
			</div>
		</div>
	);
};
