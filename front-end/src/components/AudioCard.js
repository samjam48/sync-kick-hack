import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import PlayPauseButton from './PlayPauseButton';

const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

const AudioCard = ({ track }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [audio, setAudio] = useState(new Audio(track.downloadUrl));
  const [isPlaying, setIsPlaying] = useState(false);


  const play = () => {
    console.log("yooo")
    audio.play();
    setIsPlaying(true);
  }

  const pause = () => {
    console.log("ciaoo")
    audio.pause()
    setIsPlaying(false);
  }

  return (
    <Card className={classes.card}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {track.title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {track.artist}
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          <IconButton aria-label="previous">
            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
          </IconButton>
          <PlayPauseButton isPlaying={isPlaying} play={play.bind(this)} pause={pause.bind(this)}></PlayPauseButton>
          <IconButton aria-label="next">
            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
          </IconButton>
        </div>
      </div>
      <CardMedia
        className={classes.cover}
        image={track.pictureUrl}
        title={track.title}
      />
    </Card>
  );
}

export default AudioCard;
