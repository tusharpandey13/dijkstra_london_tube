class node {
	constructor(id, data, mul) {
		this.id = id;
		this.data = data;
		this.active = 0;
		this.highlight = 0;
		this.mul = mul;
		this.r = 7 + 10 * ((this.mul * this.mul) / 49);
		this.w = parseInt(1.4124 * windowHeight);
		this.h = windowHeight;
		this.t = this.l = 0;
	}

	draw(hover = 0) {
		var x = this.l + this.data['x'] * this.w;
		var y = this.t + this.data['y'] * this.h;
		// console.log(x, y);
		// fill('#E94B3C');
		if (hover || this.active) {
			strokeWeight(0);
			textSize(10);

			if (hover) {
				fill(255);
				text(this.data['name'], x + 5, y - 5);
			} else if (this.active) {
				if (this.active == 1) {
					tint('#e91e63');
					fill('#e91e63');
				} else {
					tint('#4caf50');
					fill('#4caf50');
				}
				image(i_dest_indicator, x - 20, y - 40 + 4, 40, 40);
				text(this.data['name'], x + 18, y - 13);
			}
		} else {
			// E94B3C
			if (this.mul > 2) {
				strokeWeight(0);
				if (this.highlight) {
					strokeWeight(0);
					stroke(0);
					fill(50 + (250 * this.mul) / 7);
					textSize(10);
					text(this.data['name'], x + 10, y + 3);

					fill('#0073e6');
					ellipse(x, y, this.r, this.r);
				} else {
					fill('#ffa000');
					ellipse(x, y, this.r, this.r);
					fill(0, 0, 0, 128 * (1 - this.mul / 7));
					ellipse(x, y, this.r, this.r);
				}
				strokeWeight(0.5 + (1 * this.mul) / 7);
				stroke(0);
				circle(x, y, this.r, this.r);
				strokeWeight(0);
				fill(0);
				if (this.highlight) {
					ellipse(x, y, (this.r * 1) / 2, (this.r * 1) / 2);
				} else {
					ellipse(x, y, (this.r * 1) / 4, (this.r * 1) / 4);
				}
			} else {
				strokeWeight(0);
				stroke(0);
				if (this.highlight) fill(28);
				else fill(150);
				ellipse(x, y, this.r / 2, this.r / 2);
			}
		}
	}
	toggleactive(x) {
		this.active = x;
	}
	togglehighlight(x) {
		this.highlight = x;
	}
	getid() {
		return parseInt(this.id, 10);
	}
	isactive() {
		return this.active;
	}
	ishighlighted() {
		return this.highlight;
	}
	setmultiplicity(x) {
		this.mul = x;
	}
	// mouseMove() {
	// 	this.hovered = 1;
	// 	// this.draw();
	// }
	// mouseLeave() {
	// 	this.hovered = 0;
	// 	// console.log(this.id, 'was cleared');
	// 	// this.draw();
	// }
	// getxy() {
	// 	return [this.data['x'], this.data['y']];
	// }
}
