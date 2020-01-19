import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  word: {
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: 'black',
      borderRadius: '3px',
      color: 'white'
    }
  },
  commentedWord: {
    backgroundColor: 'green',
    borderRadius: '3px',
    color: 'white',
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: 'blue'
    }
  }
}));

const WordLink = ({ word, wordIndex, hasComments, openComments }) => {
  const classes = useStyles();
  const trigger = () => {
    openComments(wordIndex);
  };

  return (
    <span
      className={hasComments ? classes.commentedWord : classes.word}
      onClick={trigger}
    >
      {`${word} `}
    </span>
  );
};

export default WordLink;
