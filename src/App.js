import './App.css';
import React, { useEffect } from 'react';
import { Title } from './Components/Title';
import { Resolucion } from './Components/Resolucion';
import { Footer } from './Components/Footer';
import { Calcular } from './Function/Calcular';

function App() {
	useEffect(() => {
		Calcular();
	}, []);
	return (
		<div className="App">
			<Title mensaje="Resolución de una Ecuación cuadrática" />
			<Resolucion />
			<Footer />
		</div>
	);
}

export default App;
