import { Layer } from 'react-konva';

import NodesLayer from './NodesLayer';
import ActiveLayer from './ActiveLayer';
import BgLayer from '../Map/BgLayer';
import EdgesLayer from '../Map/EdgesLayer';

const DynamicMap = props => {
  return (
    <Layer>
      <EdgesLayer {...props} />
      <BgLayer {...props} />
      <ActiveLayer {...props} />
      <NodesLayer {...props} />
    </Layer>
  );
};

export default DynamicMap;
