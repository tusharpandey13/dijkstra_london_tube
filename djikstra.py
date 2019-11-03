from pqdict import PQDict
# 1 level in gives dict of neighbours
# 2 levels in gives distance always

# G[v][w] gives the weight of edge from v -> w


def dijkstra(G, src, dst=None):
    inf = float('inf')
    D = {src: 0}                                # distance
    Q = PQDict(D)                               # priority queue
    P = {}                                      # predecessor
    U = set(G.keys())                           # unexplored nodes

    while U:                                    # still have unexplored
        try:
            tmp = Q.topitem()
        except KeyError:
            return None, None
        (v, d) = Q.popitem()                    # get node with least d
        D[v] = d                                # add to D dict
        U.remove(v)                             # node now explored
        if v == dst:                            # reached destination
            break

        # now edges FROM v
        for w in G[v]:
            if w in U:                          # unvisited neighbour
                tmpd = D[v] + G[v][w]
                if tmpd < Q.get(w, inf):        # return inf if not found
                    Q[w] = tmpd                 # update distance
                    P[w] = v                    # set predecessor as current
    return D, P


# print(dijkstra(graph, 'a', 'd'))
# dijkstra(gg, 'a', 'd')


def shortest_path(graph, src, dest):
    _, P = dijkstra(graph, src, dest)
    if P is None:
        return None
    tmpl = [dest]
    tmp = dest
    while (tmp != src):
        tmp = P[tmp]
        tmpl.append(tmp)
    return list(reversed(tmpl))
