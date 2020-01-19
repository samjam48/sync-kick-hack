import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import WordLink from './WordLink';
import handlers from '../utils/handlers';

const TranscriptedAudio = ({ track }) => {
  const [comments, setComments] = React.useState([]);

  setTimeout( function() {
    handlers.getCommentsByAudioId(track.id).then(comments => {
      console.log(comments);
      setComments(comments);
    })}, 5000
  )
  
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