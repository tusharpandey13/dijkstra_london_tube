import { useState, useEffect } from 'react';
import { graphdata } from '../../store';
import EdgesGroup from './EdgesGroup';

const EdgesLayer = props => {
  const [graph, setGraph] = useState({});

  useEffect(() => {
    if (props.store.pathnodes.length < 2) setGraph({});
    let tmp = {};
    for (let i = 0; i < props.store.pathnodes.length - 1; i++) {
      tmp[props.store.pathnodes[i]] = {
        [props.store.pathnodes[i + 1]]:
          graphdata[props.store.pathnodes[i]][props.store.pathnodes[i + 1]],
      };
    }
    setGraph(tmp);
  }, [props.store.pathnodes, setGraph]);

  return <EdgesGroup {...props} graph={graph} active={true}></EdgesGroup>;
};
export default EdgesLayer;
