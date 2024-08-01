/** @format */

import React from "react";
import "./NetProfit.css";

const NetProfit = ({ label, profit, indicator, percentage }) => {
	return (
		<div className="net-profit">
			<div className="net-profit-content">
				<div className="net-profit-label">{label}</div>
				<div className="net-profit-number">
					{profit}
					<span
						className={`net-profit-indicator ${
							indicator.startsWith("+") ? "positive" : "negative"
						}`}>
						{indicator}
					</span>
				</div>
			</div>
			<div className="circle-chart-container">
				<div className="circle-chart">
					<div className="circle-chart-inner">
						<span className="percentage">{percentage}%</span>
					</div>
				</div>
				<div className="rounded-value">* The values as been round off</div>
			</div>
		</div>
	);
};

export default NetProfit;
