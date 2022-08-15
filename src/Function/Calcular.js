import React from 'react';

export const Calcular = () => {
	function fx(a, b, c, x) {
		return a * x * x + b * x + c;
	}
	function xp(x) {
		return 30 * x + 300;
	}

	function yp(y) {
		return (-50 / 3) * y + 250;
	}

	var botonCalcular = document.querySelector('#calcular');
	var lienzo = document.querySelector('canvas');
	var pincel = lienzo.getContext('2d');
	pincel.fillStyle = '#E6E6FA';
	pincel.fillRect(0, 0, 600, 500);
	botonCalcular.addEventListener('click', function (event) {
		event.preventDefault();

		let a = Number(document.getElementById('Na').value);
		let b = Number(document.getElementById('Nb').value);
		let c = Number(document.getElementById('Nc').value);
		let caso = document.getElementById('caso');
		let solx1 = document.getElementById('solx1');
		let solx2 = document.getElementById('solx2');
		let Xv = document.getElementById('coordXv');
		let Yv = document.getElementById('coordYv');
		let coordXv;
		let coordYv;

		if (a != 0) {
			let D = b ** 2 - 4 * a * c;
			let Cad;
			if (a == 1) {
				Cad = 'x²';
			} else if (a == -1) {
				Cad = '-x²';
			} else {
				Cad = a + 'x²';
			}
			if (b > 0 && b != 1) {
				Cad = Cad + ' + ' + b + 'x';
			} else if (b < 0) {
				Cad = Cad + ' - ' + Math.abs(b) + 'x';
			} else if (b == 1) {
				Cad = Cad + ' + x ';
			}
			if (c > 0) {
				Cad = Cad + ' + ' + c;
			} else if (c < 0) {
				Cad = Cad + ' - ' + Math.abs(c);
			}
			Cad = Cad + ' = 0';
			coordXv = -b / (2 * a);
			coordYv = fx(a, b, c, coordXv);

			if (D > 0) {
				let x1 = ((-b + D ** 0.5) / (2 * a)).toFixed(3);
				let x2 = ((-b - D ** 0.5) / (2 * a)).toFixed(3);
				caso.innerText = `La ecuación  ${Cad}  tiene soluciones diferentes`;
				solx1.innerText = x1;
				solx2.innerText = x2;
			} else {
				if (D == 0) {
					let x1 = (-b / (2 * a)).toFixed(3);

					caso.innerText = `La ecuación  ${Cad}  tiene soluciones repetidas`;
					solx1.innerText = x1;
					solx2.innerText = x1;
				} else {
					let x1 = (-b / (2 * a)).toFixed(3);
					let x2 = (Math.pow(-D, 0.5) / (2 * a)).toFixed(3);
					caso.innerText = `La ecuación  ${Cad}  tiene soluciones complejas`;
					solx1.innerText = `${x1} + ${x2}i`;
					solx2.innerText = `${x1} - ${x2}i`;
				}
			}
		} else {
			caso.innerText = 'No es una ecuación cuadrática';
		}
		Xv.innerText = coordXv.toFixed(3);
		Yv.innerText = coordYv.toFixed(3);

		let coordX;
		let coordY;
		let paso = 0.1;

		// Eje x
		pincel.strokeStyle = '#032b43';
		pincel.beginPath();
		coordX = xp(-10);
		coordY = yp(0);
		pincel.moveTo(coordX, coordY);
		pincel.lineTo(xp(10), coordY);
		pincel.stroke();
		// Eje y
		pincel.beginPath();
		coordX = xp(0);
		coordY = yp(-15);
		pincel.moveTo(coordX, coordY);
		pincel.lineTo(coordX, yp(15));
		pincel.stroke();
		pincel.lineWidth = 2;
		pincel.strokeStyle = '#3f88c5'; // color de línea y/o  relleno
		pincel.beginPath(); // indica que empezaremos a realizar trazos
		coordX = xp(-10);
		coordY = yp(fx(a, b, c, -10));
		pincel.moveTo(coordX, coordY); // indica la coordenada de inicio de los trazo
		for (let x = -10 + paso; x <= 10; x += paso) {
			coordX = xp(x);
			coordY = yp(fx(a, b, c, x));
			pincel.lineTo(coordX, coordY);
		}
		pincel.stroke();
	});
};
