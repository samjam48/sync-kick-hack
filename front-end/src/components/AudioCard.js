import React, { useState } from 'react';
import clsx from 'clsx'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';
import Container from '@material-ui/core/Container';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import PlayPauseButton from './PlayPauseButton';
import TranscriptedAudio from './TranscriptedAudio';

const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
    maxWidth: 600,
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
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

const AudioCard = ({ track }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [audio, setAudio] = useState(new Audio(track.downloadUrl));
  const [isPlaying, setIsPlaying] = useState(false);
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <TranscriptedAudio></TranscriptedAudio>
      </Collapse>
    </Card>
  );
}

export default AudioCard;
