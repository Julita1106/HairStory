import React from "react";

import { PlanDay } from "./PlanDay";
import { plans } from "common/plans";

import "./PlanPage.scss";

const plan = plans.highpourous;

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
