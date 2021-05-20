import React from "react";

import "./PlanDay.scss";

export const PlanDay = ({ dayData }) => {
	const { tasks, isCompleted, day } = dayData;
	return (
		<div className='day'>
			<h3>{day}</h3>
			<ul className='day__tasks'>
				{tasks.map((task) => {
					return (
						<li key={task.id}>
							<div className='checkbox-wrapper'>
								<input defaultChecked={task.isDone} type='checkbox'></input>
								<span className='checkmark'></span>
							</div>
							<label>{task.text}</label>
						</li>
					);
				})}
			</ul>
		</div>
	);
};
