import React from 'react';

import Player from './Player';
import TrackDetails from './TrackDetails';

const Screen = ({ files }) => {
  if (files.length === 0) {
    return <p>"No data"</p>;
  } else {
    return (
      <>
      {
        files.map((file, i) => <>
          <TrackDetails track={file} />
          <Player track={file} />
        </>)
      }
      </>
    );
  }
};

export default Screen;
