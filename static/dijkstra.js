function dijkstra(G, src, dest) {
	let inf = Infinity;
	let P = {};
	let U = new Set(Object.keys(G));
	let D = {};
	D[src] = 0;
	var queue = new PriorityQueue({
		comparator: function(a, b) {
			return a[1] - b[1];
		}
	});
	queue.queue([src, 0]);

	while (U.size) {
		// console.log(queue);
		queue.dequeue();
		let v = tmp[0];
		let d = tmp[1];
		D[v] = d;
		U.delete(v);
		if (v == dest) break;

		for (const [w, val] of Object.entries(G)) {
			if (U.has(w)) {
				let tmpd = D[v] + G[v][w];
				if (tmpd < (queue.hasOwnProperty(w) ? queue[w] : inf)) {
					queue[w] = tmpd;
					P[w] = v;
				}
			}
		}
	}

	return [D, P];
}
// gg = { a: { b: 1 }, b: { c: 2, b: 5 }, c: { d: 1 }, d: {} };

function shortest_path(G, src, dest) {
	dj = dijkstra(G, src, dest);
	tmpl = [dest];
	tmp = dest;
	while (tmp != src) {
		tmp = dj[1][tmp];
		tmpl.push(tmp);
	}
	tmpl.reverse();
	return tmpl;
}
