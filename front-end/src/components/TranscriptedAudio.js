import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import WordLink from './WordLink';


const TranscriptedAudio = ({ track }) =>{
  const words = track.transcription.split(" ");

  const openComments = (wordIndex) => {
    console.log("yeahhhhhhhh!!!!!!!!!!!!!!!" + wordIndex)
  }

  return (
    <CardContent>
      <Typography paragraph>
        { words.map((word, i) => <> 
          <WordLink word={word} key={i} wordIndex={i} openComments={openComments.bind(this)} />
        </>)
        }
      </Typography>
    </CardContent>
  );
}

export default TranscriptedAudio;