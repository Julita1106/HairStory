import React from "react";

import "./PlanDay.scss";

export const PlanDay = ({ dayData }) => {
	const [dayTasks, setDayTasks] = React.useState(dayData.tasks);
	const { tasks, day } = dayData;

	const onCheck = () => {
		console.log(dayTasks, 1111);
	};

	return (
		<div className='day'>
			<h3>{day}</h3>
			<ul className='day__tasks'>
				{tasks.map((task) => {
					return (
						<li key={task.id}>
							<div className='checkbox-wrapper'>
								<input onClick={onCheck} type='checkbox'></input>
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
