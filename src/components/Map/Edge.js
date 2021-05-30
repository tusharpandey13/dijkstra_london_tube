import { useState, useEffect } from 'react';
import { Line } from 'react-konva';
import { nodedata, drawConfig } from '../../store';

const Edge = props => {
  const [edgeBg, setedgeBg] = useState('#000000');
  const [edgeWidth, setedgeWidth] = useState(0);
  const [edgeOpacity, setedgeOpacity] = useState(0);

  useEffect(() => {
    setedgeBg(drawConfig.edgeBg(props.active, props.dim));
    setedgeWidth(drawConfig.edgeWidthTransformer(props.weight, props.active, props.dim));
    setedgeOpacity(drawConfig.edgeOpacityTransformer(props.weight, props.active, props.dim));
  }, [props]);

  return (
    <Line
      key={`k_${props.n0}_${props.n1}`}
      x={0}
      y={0}
      points={[
        nodedata[props.n0].x * props.xScale + props.xOffset || 0,
        (1 - nodedata[props.n0].y) * props.yScale + props.yOffset || 0,
        nodedata[props.n1].x * props.xScale + props.xOffset || 0,
        (1 - nodedata[props.n1].y) * props.yScale + props.yOffset || 0,
      ]}
      stroke={edgeBg}
      closed={true}
      strokeWidth={edgeWidth}
      lineJoin={'round'}
      opacity={edgeOpacity}
    />
  );
};
export default Edge;
