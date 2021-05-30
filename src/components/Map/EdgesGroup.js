import { useState, useEffect } from 'react';
import { Layer, Line, Group } from 'react-konva';
import { nodedata, graphdata, drawConfig } from '../../store';
import Edge from './Edge';

const EdgesLayer = props => {
  const [edges, setEdges] = useState([]);

  const [xOffset, setxOffset] = useState(0);
  const [yOffset, setyOffset] = useState(0);
  const [xScale, setxScale] = useState(0);
  const [yScale, setyScale] = useState(0);

  useEffect(() => {
    setxOffset(
      ((1 - drawConfig.globalXScale) / 2) * props.width +
        (window.innerWidth - 1.42 * window.innerHeight) / 2
    );
    setyOffset(((1 - drawConfig.globalYScale) / 2) * props.height);
    setxScale(drawConfig.globalXScale * props.width * ((1.42 * window.innerHeight) / window.innerWidth));
    setyScale(drawConfig.globalXScale * props.height);

    let tmpedges = [];

    for (const [k, v] of Object.entries(props.graph)) {
      for (const [k1, v1] of Object.entries(v)) {
        tmpedges.push(
          <Edge
            {...{ xOffset, xScale, yOffset, yScale }}
            n0={k}
            n1={k1}
            weight={v1}
            active={props.active ?? false}
            dim={props.dim ?? false}
          ></Edge>
        );
      }
    }

    setEdges(tmpedges);
  }, [props, xOffset, xScale, yOffset, yScale]);

  return <Group>{edges}</Group>;
};
export default EdgesLayer;
