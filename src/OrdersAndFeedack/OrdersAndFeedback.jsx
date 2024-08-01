/** @format */

import React from "react";
import "./OrdersAndFeedback.css";

const ordersData = [
	{
		customerImg: "https://picsum.photos/200/300",
		customerName: "John Doe",
		orderNumber: "12345",
		amount: "$100",
		status: "Delivered",
	},
	{
		customerImg: "https://picsum.photos/200/301",
		customerName: "Jane Smith",
		orderNumber: "12346",
		amount: "$150",
		status: "Delivered",
	},
	{
		customerImg: "https://picsum.photos/200/302",
		customerName: "Mike Johnson",
		orderNumber: "12347",
		amount: "$200",
		status: "Cancelled",
	},
	{
		customerImg: "https://picsum.photos/200/303",
		customerName: "kevin smith",
		orderNumber: "46",
		amount: "$50",
		status: "Delivered",
	},
	{
		customerImg: "https://picsum.photos/200/304",
		customerName: "david miller",
		orderNumber: "1347",
		amount: "$600",
		status: "Cancelled",
	},
];

const feedbackData = [
	{
		profileImg: "https://picsum.photos/200/305",
		name: "Alice Brown",
		stars: 4,
		text: "Great service!",
	},
	{
		profileImg: "https://picsum.photos/200/306",
		name: "Bob Green",
		stars: 5,
		text: "Loved the food!",
	},
	{
		profileImg: "https://picsum.photos/200/307",
		name: "Carol White",
		stars: 3,
		text: "It was okay.",
	},
];

const OrdersAndFeedback = () => {
	return (
		<div className="orders-feedback">
			<div className="orders-feedback-content">
				<div className="orders-box">
					<div className="orders-heading-container">
						<h2 className="orders-heading">Recent Orders</h2>
					</div>
					<table className="orders-table">
						<thead>
							<tr>
								<th>Customer</th>
								<th>Order Number</th>
								<th>Amount</th>
								<th>Status</th>
							</tr>
						</thead>
						<tbody>
							{ordersData.map((order, index) => (
								<tr key={index}>
									<td>
										<img src={order.customerImg} alt="Customer" />
										{order.customerName}
									</td>
									<td>{order.orderNumber}</td>
									<td>{order.amount}</td>
									<td
										className={
											order.status === "Delivered"
												? "status-delivered"
												: order.status === "Cancelled"
												? "status-cancelled"
												: ""
										}>
										<p>{order.status}</p>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
				<div className="feedback-box">
					<div className="feedback-heading-container">
						<h2 className="feedback-heading">Customer Feedback</h2>
					</div>
					{feedbackData.map((feedback, index) => (
						<div className="feedback-item" key={index}>
							<div className="feedback-profile">
								<img src={feedback.profileImg} alt="Profile" />
								<span className="feedback-name">{feedback.name}</span>
							</div>
							<div className="feedback-stars">
								{Array.from({ length: feedback.stars }, (_, i) => (
									<i key={i} className="fas fa-star"></i>
								))}
								{Array.from({ length: 5 - feedback.stars }, (_, i) => (
									<i key={i} className="far fa-star"></i>
								))}
							</div>
							<p className="feedback-text">{feedback.text}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default OrdersAndFeedback;
