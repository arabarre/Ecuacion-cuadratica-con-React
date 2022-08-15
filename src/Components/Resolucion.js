import React from 'react';

export const Resolucion = () => {
	return (
		<section className="resolucion">
			<div className="resolucion--interno">
				<div>
					<form>
						<p>
							Ingrese a: <input type="number" id="Na" />
						</p>
						<p>
							Ingrese b: <input type="number" id="Nb" />
						</p>
						<p>
							Ingrese c: <input type="number" id="Nc" />
						</p>
						<p>
							<input type="button" value="Calcular" id="calcular" />
						</p>
					</form>
					<h3>Solución</h3>
					<div>
						<p>
							Caso: <span id="caso"></span>
						</p>
						<p>
							S_x1: <span id="solx1"></span>{' '}
						</p>
						<p>
							S_x2: <span id="solx2"></span>{' '}
						</p>
						<h4>Vértice</h4>
						<p>
							Coord x: <span id="coordXv"></span>
						</p>
						<p>
							Coord y: <span id="coordYv"></span>{' '}
						</p>
					</div>
				</div>
				<canvas id="grafico" width="600" height="480"></canvas>
			</div>
		</section>
	);
};
