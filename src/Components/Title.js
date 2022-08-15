import React from 'react';
import ec2 from '../images/EC2.png';
import MiName from '../images/MiName.png';
export const Title = (props) => {
	return (
		<div className="titleP">
			<section className="section-title">
				<img className="logoreactD" src={MiName} />
				<div className="title">
					<h1 className="presentacion">{props.mensaje}</h1>
					<img className="ec2" src={ec2} />
				</div>
				<img className="logoreactI" src={MiName} />
			</section>
		</div>
	);
};
