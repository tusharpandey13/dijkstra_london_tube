import { useEffect, useState, useReducer, useRef } from 'react';
import { Stage } from 'react-konva';
import { initialState, reducer } from '../store';

import Map from './Map';

import Controls from './Controls';

const Content = props => {
  const [store, dispatch] = useReducer(reducer, initialState);
  const stageRef = useRef(null);

  useWindowSize();

  // const width = 1.42 * window.innerHeight;
  const width = window.innerWidth - 20;
  const height = window.innerHeight;

  return (
    <div class='ContentContainer'>
      <Controls />
      <Stage
        className={`stage`}
        ref={stageRef}
        width={width}
        height={height}
        style={{
          display: `flex`,
          flexFlow: `row nowrap`,
          justifyContent: `center`,
        }}
      >
        <Map store={store} dispatch={dispatch} width={width} height={height} />
      </Stage>
    </div>
  );
};
export default Content;

// Hook
function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener('resize', handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  // return windowSize;
}
