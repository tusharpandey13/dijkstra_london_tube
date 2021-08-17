## Graph Pathfinding on the London Metro

Currently deployed on [https://tusharpandey13.github.io/dijkstra_london_tube/](https://tusharpandey13.github.io/dijkstra_london_tube/)

![screenshot](https://github.com/tusharpandey13/dijkstra_london_tube/raw/master/Screenshot_20210619_222943.png)


Heavily inspired from work by [Mark Dunne : The London Tube as a Graph](http://markd.ie/2016/04/10/The-London-Tube-as-a-Graph/)


## Introduction
This app is an interactive visualization of the [Dijkstra's pathfinding algorithm](https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm) for finding the shortest path between 2 nodes in a graph.
This was originally a project for my algorithms class but I wanted to test it out on some real data so I built this.

## Features
Using this app, you can view the (approximate\*) shortest path between any 2 stations.
* The edges are represented by railway lines, their weights by the average train speeds on those lines.
* The vertices are represented the individual stations, their weights by the number of trains that visit those stations.
* All the weight values are normalized for simplification. I used pandas for encoding this information as a graph.
* The web app is made using ReactJS. It is completely self-sufficient and uses HTML canvas for rendering the graph.


## Usage
```
git clone https://github.com/tusharpandey13/dijkstra_london_tube.git && cd dijkstra_london_tube && npm install && npm run start
```

### Footnotes
\* These paths may not reflect 100% to the actual real life data as these approximations are based only on a few factors like speed and frequency of trains running a given track.
In real life, many other factors like weather, schedules etc. may affect the data.
