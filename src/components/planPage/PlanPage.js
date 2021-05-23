import React from "react";

import { PlanDay } from "./PlanDay";
import { Context } from "common/context";
import { history } from "common/utils";

import "./PlanPage.scss";

export const PlanPage = () => {
	const [context] = React.useContext(Context);

	if (!context.isLogged) {
		history.push("/");
		return null;
	}

	const plan = context.weeklyPlans;

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
