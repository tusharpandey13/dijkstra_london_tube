class graph {
	constructor() {
		// console.log(this.nodes, this.edges);
		// console.log(graphdata);
		this.nodes = {};
		this.edges = {};
		this.activenodes = { 1: -1, 2: -1 };
		this.activeedges = {};

		for (const [key, value] of Object.entries(nodedata)) {
			var tmp = graphdata[key];

			this.nodes[key] = new node(
				parseInt(key, 10),
				value,
				Object.keys(tmp).length
			);

			if (!!tmp) {
				this.edges[key] = {};
				for (const [key2, val2] of Object.entries(tmp)) {
					this.edges[key][key2] = new edge(
						parseInt(key, 10),
						parseInt(key2, 10),
						graphdata[key][key2]
					);
				}
			}
		}
		// console.log(this.nodes);
		// console.log(this.nodes[0]);
	}

	// stroke('#1c1c1c');
	// line(0, tmp['y'] * windowHeight, parseInt(1.4124 * windowHeight), tmp['y'] * windowHeight);
	// line(tmp['x'] * parseInt(1.4124 * windowHeight), 0, tmp['x'] * parseInt(1.4124 * windowHeight), windowHeight);

	draw() {
		// background(33, 28, 28);
		// background(255, 240, 240);
		background('#323434');
		for (const [k1, v1] of Object.entries(this.edges)) {
			for (const [k2, v2] of Object.entries(v1)) {
				v2.draw(0);
			}
		}
		for (const [key2, val2] of Object.entries(this.nodes)) {
			if (!val2.ishighlighted()) val2.draw();
		}
		if (Object.keys(this.activeedges).length > 1) {
			noStroke();
			fill(0, 0, 0, 150);
			rect(0, 0, parseInt(1.4124 * windowHeight), windowHeight);
		}
		for (const [k1, v1] of Object.entries(this.edges)) {
			for (const [k2, v2] of Object.entries(v1)) {
				if (this.activeedges.hasOwnProperty([k1, k2])) {
					v2.draw(1);
				}
			}
		}
		for (const [key2, val2] of Object.entries(this.nodes)) {
			if (val2.ishighlighted()) val2.draw();
		}
	}

	drawpath() {
		this.activeedges = {};
		for (const [k, v] of Object.entries(this.nodes)) {
			v.togglehighlight(0);
		}
		let tmpstr =
			'api/v0.1/path/' +
			stri(this.activenodes[1]) +
			'/' +
			stri(this.activenodes[2]);
		// console.log(tmpstr);
		fetch(tmpstr)
			.then(r => r.json())
			.then(data => {
				this.nodes[data['path'][0]].togglehighlight(1);
				for (let i = 0; i < data['path'].length - 1; i++) {
					// console.log(data['path'][i], data['path'][i + 1]);
					let tmpl = [data['path'][i], data['path'][i + 1]];
					this.activeedges[tmpl] = 1;
					this.nodes[data['path'][i + 1]].togglehighlight(1);
				}
			})
			.catch(e => console.log(e, 'Booo'));
	}
	mouseClick(x, y) {
		let tmp = pm[stri(y)][stri(x)];
		if (tmp != -1) {
			let tmpnode = this.nodes[tmp];
			if (tmpnode) {
				if (this.activenodes[1] == -1) {
					this.activenodes[1] = tmpnode.getid();
					tmpnode.toggleactive(1);
				} else if (this.activenodes[2] == -1) {
					this.activenodes[2] = tmpnode.getid();
					tmpnode.toggleactive(2);
					this.drawpath();
				} else {
					this.nodes[this.activenodes[1]].toggleactive(0);
					this.activenodes[1] = this.activenodes[2];
					this.activenodes[2] = tmpnode.getid();
					this.nodes[this.activenodes[1]].toggleactive(1);
					tmpnode.toggleactive(2);
					this.drawpath();
				}
			}
			// tmpnode.toggleactive(1);
		} else {
			for (const [k, v] of Object.entries(this.activenodes)) {
				if (v != -1) this.nodes[v].toggleactive(0);
			}
			this.activenodes = { 1: -1, 2: -1 };
			this.activeedges = {};
			for (const [k, v] of Object.entries(this.nodes)) {
				v.togglehighlight(0);
			}
		}
		this.draw();
	}
	mouseMove(x, y) {
		// console.log(x, y);
		this.draw();
		let tmp = pm[stri(y)][stri(x)];
		if (tmp > -1) {
			this.nodes[tmp].draw(1);
		}
	}
}
// /**
//  *  @autor Javier Cobos
//  *  @param value The value to look for
//  *  @return true if founded deleted, false if not
//  */
//
// Object.prototype.removeByValue = function(value) {
// var i;
// for (i in this) {
// if (this.hasOwnProperty(i))
// if (value === this[i]) {
// delete this[i];
// return true;
// }
// }
// return false;
// };
