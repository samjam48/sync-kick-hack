import React, { useState } from 'react';

const WordLink = ({ word, wordIndex, openComments }) =>{

  const trigger = () => {
    openComments(wordIndex)
  }

  return (
    <span onClick={trigger}>{word} </span>
  )
}

export default WordLink;