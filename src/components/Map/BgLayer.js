import { useState, useEffect } from 'react';
import { Text, Rect, Group } from 'react-konva';

const BgLayer = props => {
  const [dim, setDim] = useState(false);
  useEffect(() => {
    if (props.store.pathnodes.length) {
      setDim(true);
    }
  }, [props.store.pathnodes]);

  return (
    <Group
      onClick={async e => {
        if (dim) {
          await props.dispatch({
            type: 'SETSELECTEDLABELS',
            selectedLabels: [],
          });
          setDim(false);
        }
      }}
    >
      {dim && <Rect x={0} y={0} width={props.width} height={props.height} fill='#ffffff55' />}
      <Text
        text={
          !dim
            ? 'Click on any 2 nodes to show the shortest path between them'
            : 'Tip: Click on any empty area to reset map'
        }
        x={0}
        y={15}
        width={props.width}
        align={'center'}
        fill={'#888888'}
        fontSize={12}
      ></Text>
    </Group>
  );
};
export default BgLayer;

// https://coolors.co/001123-0eb1d2-34e4ea-8ab9b5-c8c2ae
