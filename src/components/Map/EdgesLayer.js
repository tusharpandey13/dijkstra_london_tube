import { useState, useEffect } from 'react';

import { graphdata } from '../../store';
import EdgesGroup from './EdgesGroup';

const EdgesLayer = props => {
  const [dim, setDim] = useState(false);

  useEffect(() => {
    setDim(!!props.store.pathnodes.length);
  }, [props.store.pathnodes, setDim]);

  return <EdgesGroup {...props} graph={graphdata} dim={dim}></EdgesGroup>;
};
export default EdgesLayer;
