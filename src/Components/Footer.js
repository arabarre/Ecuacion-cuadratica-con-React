import React from 'react';
import linkedin from '../images/linkedin.png';
import correo from '../images/correo-electronico.png';
import git from '../images/gitB.png';
export const Footer = () => {
	return (
		<>
			<br />
			<footer>
				<div>© José L. Araujo B. - 2022</div>
				<div className="imgfooter">
					<img id="linkedinf" src={linkedin} />
					<a href="https://www.linkedin.com/in/jose-araujo-barrera">Linkedin</a>
				</div>
				<div className="imgfooter">
					<img id="gitf" src={git} />
					<a href="https://github.com/arabarre?tab=repositories"> github</a>
				</div>
				<div className="imgfooter">
					<img id="correof" src={correo} />
					<a href="mailto:arabarre52@gmail.com"> arabarre52@gmail.com</a>
				</div>
			</footer>
		</>
	);
};
