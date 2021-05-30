import { useState, useEffect, useRef } from 'react';
import { Group } from 'react-konva';
import { drawConfig } from '../../store';

import Node from './Node';

const NodeGroup = props => {
  const [isActive, setIsActive] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [selectedid, setSelectedid] = useState(0);

  const nodeRef = useRef(null);
  useEffect(() => {
    nodeRef.current.moveToTop();
  }, [isActive]);

  useEffect(() => {
    setIsSelected(props.store.selectedLabels.includes(props.k));
  }, [props.store.selectedLabels, isSelected, props.k]);

  // useEffect(() => {

  // }, [props.store.pathnodes, isSelected, props.k]);

  return (
    <Group
      ref={nodeRef}
      key={props.k}
      x={props.v.x * props.xScale + props.xOffset}
      y={(1 - props.v.y) * props.yScale + props.yOffset}
      width={2 * drawConfig.nodeRadiusTransformer(props.v.weight, true)}
      height={2 * drawConfig.nodeRadiusTransformer(props.v.weight, true)}
      onMouseEnter={e => setIsActive(true)}
      onMouseLeave={e => setIsActive(false)}
      onClick={async e => {
        let tmplabels = [];

        if (props.store.selectedLabels.length < 2) {
          setSelectedid(props.store.selectedLabels.length);
          tmplabels = [...props.store.selectedLabels, props.k];
        } else if (props.store.selectedLabels.length === 2) {
          setSelectedid(selectedid - 1);
          tmplabels = [props.store.selectedLabels[1], props.k];
        }

        await props.dispatch({
          type: 'SETSELECTEDLABELS',
          selectedLabels: tmplabels,
        });
      }}
    >
      <Node {...props} {...{ isActive, isSelected, selectedid }}></Node>
    </Group>
  );
};

export default NodeGroup;
