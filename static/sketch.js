let g;
// var canvasw = 1526;

var i_dest_indicator;

function stri(x) {
	return parseInt(x).toString();
}
Number.prototype.clamp = function(min, max) {
	return Math.min(Math.max(this, min), max);
};
async function fetchAsync(url) {
	let response = await fetch(url);
	let data = await response.json();
	return data;
}
function preparedata() {
	for (let i = 0; i < windowHeight + 1; i++) {
		pm[str(i)] = {};
		for (let j = 0; j < parseInt(1.4124 * windowHeight) + 1; j++) {
			pm[str(i)][str(j)] = -1;
		}
	}

	for (const [key, value] of Object.entries(nodedata)) {
		value['y'] = 1 - value['y'];
		if (!graphdata.hasOwnProperty(key)) graphdata[key] = {};

		var tmpx = value['x'] * parseInt(1.4124 * windowHeight);
		var tmpy = value['y'] * windowHeight;
		// console.log(tmpx, tmpy);
		for (let i = -10; i < 11; i++) {
			for (let j = -10; j < 11; j++) {
				pm[stri((tmpy + i).clamp(0, windowHeight))][
					stri((tmpx + j).clamp(0, parseInt(1.4124 * windowHeight)))
				] = key;
			}
		}
	}
}

function test() {
	// d = new Dijsktra(graphdata);
	// console.log(d.path(11, 163));
	// console.log(shortest_path(graphdata, 11, 163));
	fetch('api/v0.1/path/188/189')
		.then(r => r.json())
		.then(data => console.log(data))
		.catch(e => console.log(e, 'Booo'));
}

function prepareimages() {
	i_dest_indicator = loadImage(
		'https://raw.githubusercontent.com/google/material-design-icons/master/communication/2x_web/ic_location_on_white_48dp.png'
	);
}

function setup() {
	// test();

	preparedata();
	prepareimages();
	g = new graph();

	frameRate(60);
	createCanvas(parseInt(1.4124 * windowHeight), windowHeight).parent(
		'canvasHolder'
	);

	noLoop();
}

function draw() {
	// background('#1c1c1c');
	console.log('fefe');
	g.draw();
}

function mouseClicked() {
	g.mouseClick(mouseX, mouseY);
}
function mouseMoved() {
	g.mouseMove(mouseX, mouseY);
}
