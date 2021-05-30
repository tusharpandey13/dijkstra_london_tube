import { useState, useEffect, useRef } from 'react';
import { Circle, Group, Text } from 'react-konva';
import { drawConfig } from '../../store';

const Node = props => {
  const [nodeRadiusTransformer, setnodeRadiusTransformer] = useState(8);
  const [nodeBgTransformer, setnodeBgTransformer] = useState('#ffffff');
  const [nodeOpacityTransformer, setnodeOpacityTransformer] = useState(0);
  const [nodeStroke, setnodeStroke] = useState('#000000');
  const [nodeStrokeWidthTransfomer, setnodeStrokeWidthTransfomer] = useState(0);
  const [nodeDotRadiusTransformer, setnodeDotRadiusTransformer] = useState(8);
  const [nodeDotBgTransformer, setnodeDotBgTransformer] = useState('#ffffff');
  const [nodeDotOpacityTransformer, setnodeDotOpacityTransformer] = useState(0);
  const [nodeTextOpacityTransformer, setnodeTextOpacityTransformer] = useState(0);
  const [nodeTextSizeTransformer, setnodeTextSizeTransformer] = useState(0);
  const [nodeTextStyleTransformer, setnodeTextStyleTransformer] = useState(0);

  useEffect(() => {
    setnodeRadiusTransformer(
      drawConfig.nodeRadiusTransformer(props.v.weight, props.isSelected || props.isActive)
    );
    setnodeBgTransformer(
      drawConfig.nodeBgTransformer(
        props.v.weight,
        props.isSelected || props.isActive,
        props.isSelected,
        props.selectedid
      )
    );
    setnodeOpacityTransformer(
      drawConfig.nodeOpacityTransformer(props.v.weight, props.isSelected || props.isActive)
    );
    setnodeStroke(drawConfig.nodeStroke);
    setnodeStrokeWidthTransfomer(
      drawConfig.nodeStrokeWidthTransfomer(props.v.weight, props.isSelected || props.isActive)
    );
    setnodeDotRadiusTransformer(
      drawConfig.nodeDotRadiusTransformer(props.v.weight, props.isSelected || props.isActive)
    );
    setnodeDotBgTransformer(
      drawConfig.nodeDotBgTransformer(
        props.v.weight,
        props.isSelected || props.isActive,
        props.isSelected,
        props.selectedid
      )
    );
    setnodeDotOpacityTransformer(
      drawConfig.nodeDotOpacityTransformer(props.v.weight, props.isSelected || props.isActive)
    );
    setnodeStrokeWidthTransfomer(
      drawConfig.nodeStrokeWidthTransfomer(props.v.weight, props.isSelected || props.isActive)
    );
    setnodeOpacityTransformer(
      drawConfig.nodeOpacityTransformer(props.v.weight, props.isSelected || props.isActive)
    );
    setnodeStrokeWidthTransfomer(
      drawConfig.nodeStrokeWidthTransfomer(props.v.weight, props.isSelected || props.isActive)
    );
    setnodeTextOpacityTransformer(
      drawConfig.nodeTextOpacityTransformer(props.v.weight, props.isSelected || props.isActive)
    );
    setnodeTextSizeTransformer(
      drawConfig.nodeTextSizeTransformer(props.v.weight, props.isSelected || props.isActive)
    );
    setnodeTextStyleTransformer(
      drawConfig.nodeTextStyleTransformer(props.v.weight, props.isSelected || props.isActive)
    );
  }, [props.isSelected, props.isActive, props.v.weight]);

  return (
    <>
      <Group width={16} height={16}>
        <Circle
          key={`${props.k}_1`}
          x={0}
          y={0}
          radius={nodeRadiusTransformer}
          fill={nodeBgTransformer}
          opacity={nodeOpacityTransformer}
          stroke={nodeStroke}
          strokeEnabled={true}
          strokeWidth={nodeStrokeWidthTransfomer}
        />
        <Circle
          key={`${props.k}_2`}
          x={0}
          y={0}
          radius={nodeDotRadiusTransformer}
          fill={nodeDotBgTransformer}
          opacity={nodeDotOpacityTransformer}
          stroke={'#000000'}
          strokeEnabled={props.isSelected || props.isActive}
          strokeWidth={nodeStrokeWidthTransfomer}
        />
        {(props.isSelected || props.isActive) && (
          <Text
            key={`${props.k}_3`}
            text={props.v.name}
            x={10}
            y={-20}
            fill={'#000000'}
            opacity={nodeTextOpacityTransformer}
            fontSize={nodeTextSizeTransformer}
            fontStyle={nodeTextStyleTransformer}
          />
        )}
      </Group>
    </>
  );
};
export default Node;
