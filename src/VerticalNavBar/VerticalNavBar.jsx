/** @format */

import React, { useState } from "react";
import "./VerticalNavBar.css";

const VerticalNavBar = ({ onIconClick }) => {
	const [activeIcon, setActiveIcon] = useState("home");

	const handleIconClick = (icon) => {
		setActiveIcon(icon);
		onIconClick(icon);
	};

	return (
		<div className="vertical-navbar">
			<i
				className={`fas fa-home ${activeIcon === "home" ? "active" : ""}`}
				title="Home"
				onClick={() => handleIconClick("home")}></i>
			<i
				className={`fas fa-tasks ${activeIcon === "activity" ? "active" : ""}`}
				title="Activity"
				onClick={() => handleIconClick("activity")}></i>
			<i
				className={`fas fa-shopping-cart ${
					activeIcon === "orders" ? "active" : ""
				}`}
				title="Orders"
				onClick={() => handleIconClick("orders")}></i>

			<div className="logout-icon">
				<i
					className="fas fa-sign-out-alt logout-icon"
					id="logout-icon"
					title="Logout"
					onClick={() => handleIconClick("logout")}></i>
			</div>
		</div>
	);
};

export default VerticalNavBar;
