/** @format */

import React, { useState } from "react";
import "./Activity.css";
import { Bar } from "react-chartjs-2";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

const Activity = () => {
	const [showMenu, setShowMenu] = useState(false);

	const toggleMenu = () => {
		setShowMenu(!showMenu);
	};

	const data = {
		labels: [
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday",
			"Saturday",
			"Sunday",
		],
		datasets: [
			{
				label: "Activity",
				data: [12, 19, 3, 5, 2, 3, 7],
				backgroundColor: "rgba(91, 66, 255, 0.2)",
				borderColor: "rgb(91, 66, 255)",
				borderWidth: 1,
			},
		],
	};

	return (
		<div className="activity">
			<div className="activity-content">
				<div className="activity-box large-box">
					<div className="activity-heading-container">
						<h2 className="activity-heading">Activity</h2>
						<button className="selection-button" onClick={toggleMenu}>
							Select Period
						</button>
					</div>
					{showMenu && (
						<div className="selection-menu">
							<button>Weekly</button>
							<button>Monthly</button>
							<button>Yearly</button>
						</div>
					)}
					<div className="chart-container">
						<Bar data={data} />
					</div>
				</div>
				<div className="activity-box small-box">
					<div className="icon-container">
						{[
							{ icon: "fas fa-bullseye", label: "Goal", color: "#FF5733" },
							{ icon: "fas fa-utensils", label: "Dishes", color: "#33FF57" },
							{ icon: "fas fa-book", label: "Menu", color: "#3357FF" },
							{
								icon: "fas fa-money-bill-wave",
								label: "Money",
								color: "#084f09",
							},
							{
								icon: "fas fa-graduation-cap",
								label: "Study",
								color: "#c39797",
							},
							{ icon: "fas fa-brain", label: "Learning", color: "#1c375b" },
						].map((item, index) => (
							<div className="icon-item" key={index}>
								<i
									className={item.icon}
									style={{
										backgroundColor: `rgba(${parseInt(
											item.color.slice(1, 3),
											16
										)}, ${parseInt(item.color.slice(3, 5), 16)}, ${parseInt(
											item.color.slice(5, 7),
											16
										)}, 0.2)`,
										color: item.color,
									}}></i>
								<p>{item.label}</p>
								<i className="fas fa-arrow-right arrow"></i>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Activity;
