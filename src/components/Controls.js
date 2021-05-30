const Controls = props => {
  return (
    <div className='flex-col'>
      <div className='flex-row ControlsContainer'>
        <span className='heading'>Graph Pathfinding on the</span>
        <a
          className='headingBold'
          href={`https://en.wikipedia.org/wiki/London_Underground`}
          target='_blank'
          rel='noreferrer'
        >
          <span>London Tube</span>
        </a>
      </div>
      <div className='flex-row'>
        <span>
          This is an interactive visualisation for finding the shortest path between 2 stations in the
          London underground. Uses the <b>Dijkstra's graph pathfinding algorithm.</b>
        </span>
      </div>
      <div className='flex-row'>
        <a
          class='github-button'
          href='https://github.com/tusharpandey13'
          data-color-scheme='no-preference: light; light: light; dark: dark;'
          data-size='large'
          aria-label='Follow @tusharpandey13 on GitHub'
        >
          Follow @tusharpandey13
        </a>

        <a
          class='github-button'
          href='https://github.com/tusharpandey13/dijkstra_london_tube'
          data-color-scheme='no-preference: dark; light: dark; dark: dark;'
          data-icon='octicon-star'
          data-size='large'
          aria-label='Star tusharpandey13/dijkstra_london_tube on GitHub'
        >
          Star on Github
        </a>
      </div>
    </div>
  );
};
export default Controls;
