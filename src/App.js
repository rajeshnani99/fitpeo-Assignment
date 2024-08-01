/** @format */
import React, { useState } from "react";
import "./App.css";
import MainNavBar from "./Main-NavBar/MainNavBar.jsx";
import VerticalNavBar from "./VerticalNavBar/VerticalNavBar.jsx";
import Dashboard from "./Dashboard/Dashboard.jsx";
import Activity from "./Activity/Activity.jsx";
import OrdersAndFeedback from "./OrdersAndFeedack/OrdersAndFeedback.jsx";

function App() {
	const [activeComponent, setActiveComponent] = useState("home");

	const renderComponent = () => {
		switch (activeComponent) {
			case "home":
				return <Dashboard />;
			case "activity":
				return <Activity />;
			case "orders":
				return <OrdersAndFeedback />;
			default:
				return <Dashboard />;
		}
	};
	return (
		<div className="App">
			<MainNavBar />
			<VerticalNavBar onIconClick={setActiveComponent} />
			<div style={{ flex: 1, padding: "20px" }}>{renderComponent()}</div>
		</div>
	);
}

export default App;
