/** @format */

import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./MainNavBar.css";

const MainNavBar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleToggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className="navbar">
			<div className="logo">
				<img
					src="data:image/webp;base64,UklGRqoCAABXRUJQVlA4IJ4CAADwDQCdASo4ADgAPjEKjEYiERELgCADBLEAYCgVfuTzc9Z/0C1Hf1V303gAP0Y6zT9mf279oApmHkM+hPYA/VLqZ+ir+wBEVl+aSpS7wJemL5z9a1sU/YmTyYk1HSL56uEBH4vgBoZVv0Y4O4I+FjQzixF/n66IWwAA/vK2ZMf/1dt//q7b//V23q7bSXTgkv/2njTv8T/xXeJf/WsA41DdZBmjd6Jkj029KkK8cVlbTb16cnO06qacPv4a+/FwzfzZ7zH9XY78XfBGki+rND0d8l1xkj/+35Pm1ZCoUi2S1C/XL+DRLzzUa6vtX4ufLxB//qzSNn8ZufPPFu7v8lU0oZNnv81+HqX79zIYRfan7BJlXPPJf/UXn/4xXVP9zvvb/z1j+wLEr3APTY5OlFqyzP5S+drvyzKVg2d36sPhlaTIn4YceaMQqdbaufx0ENrfU2m+cnBjaG2PCG/EuTrkfzg9MG7UBG/w4Fehmuo9rRvHzY/6dw+9NMaDTTd4tnv8bbfnHUZ1Ea6b//v04ip+lz5XhV96GHgnQqhxjZVdD0tFdd1IDXuf8RSPNFudd094nTb+GxjQz//FPL9+/ENzpBLfYj8jRviQwE4ofDoqvwv/+Y8p/iKOwnFzJ+9mZVSHhnqirSme1IwxjCoUTrnpyaGGDt4RULNHRARraTiP+lLTwYGpNrqcAyNOCFPXdnXqM+6S63jjTZpPUzXjBp2qAUp9+nr0cY79gdEBkUtxf8jE4VdVcQ1CjF0GnTF3L7IdIZov/iIzY2+AUfoI5jV+I59+lPsipi/Hn5uH+PYdYpkkZsL//Lj/vFsvZ0rRyVLj7hhrcrncZn81LNWs7RQYand4I5fzijBWlKJECfbiDOYnoPnHtzuPN8xW7AAA"
					alt="logo"
				/>
			</div>
			<button className="toggle-button" onClick={handleToggle}>
				<i className={`fas ${isOpen ? "fa-times" : "fa-bars"}`}></i>
			</button>
			<div className={`search-bar ${isOpen ? "open" : ""}`}>
				<i className="fas fa-search"></i>
				<input type="text" placeholder="Search..." />
			</div>
			<div className={`nav-icons ${isOpen ? "open" : ""}`}>
				<i className="fas fa-envelope"></i>
				<i className="fas fa-cog"></i>
				<i className="fas fa-bell"></i>
				<i className="fas fa-user"></i>
			</div>
		</nav>
	);
};

export default MainNavBar;
