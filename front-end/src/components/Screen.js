import React from 'react';
import handlers from '../utils/handlers';

import Player from './Player';

const Screen = () => {
  const [files, setFiles] = React.useState([]);

  React.useEffect(() => {
    // handlers.getAlldata().then(filesArr => {
    //   console.log(filesArr);
    //   setFiles(filesArr);
    // });
  }, [files, setFiles]);

  if (files.length < 1) {
    handlers.getAlldata().then(filesArr => {
      console.log(filesArr);
      setFiles(filesArr);
    });
  }

  return files.length > 0 ? <Player files={files} /> : <p>"No data"</p>;
};

export default Screen;
