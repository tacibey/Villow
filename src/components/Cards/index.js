import React from "react";
import "./index.scss";
import { arsaAl, arsaSat } from "./cardText";
import Card from "./Card";
import { Link } from "react-router-dom";

const Layout = () => {
	return (
		<div className="cards-container">
			<Link to="/ilanlar">
				<Card
					headerImg={arsaAl.headerImg}
					header={arsaAl.header}
					body={arsaAl.body}
					buttonText={arsaAl.btnText}
				/>
			</Link>

			<Link to="/arsa-sat">
				<Card
					headerImg={arsaSat.headerImg}
					header={arsaSat.header}
					body={arsaSat.body}
					buttonText={arsaSat.btnText}
				/>
			</Link>
		</div>
	);
};

export default Layout;
