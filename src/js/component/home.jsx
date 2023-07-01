import React from "react";
import Navbar from "./navbar.jsx";
import Container from "./container.jsx";
import Footer from "./footer.jsx";

//Home component
const Home = () => {
	return (
		<div className="root">
			<Navbar/>
			<Container/>
			<Footer/>
		</div>
	);
};

export default Home;
