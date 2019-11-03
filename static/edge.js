class edge {
	// TODO add weight info
	constructor(n1, n2, weight) {
		this._n1 = n1;
		this._n2 = n2;
		this._wt = weight;
	}

	draw(highlight = 0) {
		var x1 = nodedata[this._n1]['x'] * parseInt(1.4124 * windowHeight);
		var x2 = nodedata[this._n2]['x'] * parseInt(1.4124 * windowHeight);
		var y1 = nodedata[this._n1]['y'] * windowHeight;
		var y2 = nodedata[this._n2]['y'] * windowHeight;

		if (highlight) {
			// strokeWeight(0);
			// stroke(0);
			// line(x1, y1, x2, y2);
			// stroke('#66b3ff');
			stroke('#00bcd4');
			strokeWeight(3);
			line(x1, y1, x2, y2);
		} else {
			strokeWeight(3.5 + 2 * this._wt);
			stroke(0);
			line(x1, y1, x2, y2);
			strokeWeight(2.5 + 2 * this._wt);
			// stroke(98 - 53 * this._wt);
			stroke(
				28 * (1 - this._wt),
				28 + 50 * this._wt * this._wt,
				28 + 50 * this._wt * this._wt
			);
			line(x1, y1, x2, y2);
		}
	}
}

// stroke(62, 78, 85, 100);
