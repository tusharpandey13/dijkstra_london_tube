import { useState, useEffect } from 'react';
import { Group } from 'react-konva';
import { nodedata } from '../../store';
import NodeGroup from './NodeGroup';
import { drawConfig } from '../../store';

const NodesLayer = props => {
  const [nodes, setNodes] = useState([]);
  const [xOffset, setxOffset] = useState(0);
  const [yOffset, setyOffset] = useState(0);
  const [xScale, setxScale] = useState(0);
  const [yScale, setyScale] = useState(0);

  useEffect(() => {
    let tmpnodedata = Object.entries(nodedata)
      .filter(e => {
        if (props.store.pathnodes.length) {
          if (props.store.pathnodes.includes(e[0])) return true;
          return false;
        }
        return true;
      })
      .map(e => {
        return { v: e[1], k: e[0] };
      })
      .sort((a, b) => a.v.weight - b.v.weight);

    setxOffset(
      ((1 - drawConfig.globalXScale) / 2) * props.width +
        (window.innerWidth - 1.42 * window.innerHeight) / 2
    );
    setyOffset(((1 - drawConfig.globalYScale) / 2) * props.height);
    setxScale(drawConfig.globalXScale * props.width * ((1.42 * window.innerHeight) / window.innerWidth));
    setyScale(drawConfig.globalXScale * props.height);

    setNodes(
      tmpnodedata.map(e => (
        <NodeGroup
          k={e.k}
          v={e.v}
          {...props}
          key={e.k}
          {...{ xOffset, xScale, yOffset, yScale }}
        ></NodeGroup>
      ))
    );
  }, [props, xOffset, xScale, yOffset, yScale]);

  return (
    <Group
    // listening={true} onMouseDown={checkDeselect} onTouchStart={checkDeselect}
    >
      {nodes}
    </Group>
  );
};
export default NodesLayer;

// https://coolors.co/001123-0eb1d2-34e4ea-8ab9b5-c8c2ae
