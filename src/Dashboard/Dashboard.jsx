/** @format */

import React from "react";
import "./Dashboard.css";

const dashboardData = [
	{
		icon: "fas fa-box",
		label: "Total orders",
		price: "$1,200",
		indicator: "+5%",
		color: "#833ce7",
	},
	{
		icon: "fas fa-users",
		label: "Total delivered",
		price: "$2,000",
		indicator: "-2%",
		color: "#008000",
	},
	{
		icon: "fas fa-chart-line",
		label: "Total cancel",
		price: "$3,500",
		indicator: "+10%",
		color: "#f44336",
	},
	{
		icon: "fas fa-calendar-alt",
		label: "Total Revenue",
		price: "$500",
		indicator: "+8%",
		color: "#ff0195",
	},
];

const percentage = 45;

const Dashboard = () => {
	return (
		<div className="dashboard">
			<h1 className="dashboard-heading">Dashboard</h1>
			<div className="dashboard-content">
				<div className="boxes-container">
					{dashboardData.map((item, index) => (
						<div className="box" key={index}>
							<i
								className={item.icon}
								style={{
									backgroundColor: `rgba(${parseInt(
										item.color.slice(1, 3),
										16
									)}, ${parseInt(item.color.slice(3, 5), 16)}, ${parseInt(
										item.color.slice(5, 7),
										16
									)}, 0.3)`,
									color: item.color, // Strong color for the icon
								}}></i>
							<div className="box-content">
								<h5>{item.label}</h5>
								<div className="price-indicator">
									<p>{item.price}</p>
									<span
										className={`indicator ${
											item.indicator.startsWith("+") ? "positive" : "negative"
										}`}>
										{item.indicator}
									</span>
								</div>
							</div>
						</div>
					))}
				</div>
				<div className="net-profit-box">
					<div className="net-profit-box-content">
						<h3>Net Profit</h3>
						<p>$6,234</p>
						<div
							className="circle-indicator"
							style={{
								background: `conic-gradient(rgb(91, 66, 255) 0% ${percentage}%, #eee ${percentage}% 100%)`,
							}}>
							<span className="percentage">{percentage}%</span>
						</div>
					</div>
					<div className="rounded-value">
						* The values have been rounded off
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
