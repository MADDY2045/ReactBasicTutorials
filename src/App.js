import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import DeleteIcon from '@material-ui/icons/Delete';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import SendIcon from '@material-ui/icons/Send';
import SaveIcon from '@material-ui/icons/Save';
import AlarmIcon from '@material-ui/icons/Alarm';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles( theme => (
  {root: {
    '& > *': {
      margin: theme.spacing(2)
    },
  },
  input: {
    display: 'none',
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  margin: {
    margin: theme.spacing(1),
  },
  image: {
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
  floatingimages: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
  },
  alarmicon:{
    '&:active': {
      outline: 'none',
    },
    '&:focus': {
      outline: 'none',
    }
  }
}));

const images = [
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQMWfaogaF6q1wCPJBqUNPGWtvLJ9WR0ZnHw&usqp=CAU',
    title: 'Breakfast',
    width: '40%',
  },
  {
    url: 'https://i.pinimg.com/originals/f5/7f/b2/f57fb2bf1b6b3350a9415512e12f313e.jpg',
    title: 'Burgers',
    width: '30%',
  },
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTGlh9LsDSPxPUS7j9bqcY9LJ8d4zwQBw17fA&usqp=CAU',
    title: 'Camera',
    width: '30%',
  },
];

const App = () => {
  const classes = useStyles();

  const handleSubmit=()=>{
    alert('tested ok!');
  }

  return (
    <div className={classes.root}>
      <h1>Material UI</h1>
      <Button variant="contained" >Default</Button>
      <Button variant="contained" color="primary">PRIMARY</Button>
      <Button variant="contained" color="secondary">SECONDARY</Button>
      <Button variant="contained" color="secondary" href="https://www.youtube.com">Link</Button>
      <Button variant="contained" color="primary" disabled href="https://www.youtube.com">DISABLED</Button>
      <Button onClick={ handleSubmit } variant="contained" color="primary" >ACTION</Button>
      <Button  variant="contained" color="primary" disableElevation>DISABLED ELEVATION</Button>
      <Button color="secondary" disableElevation>TEXT</Button>
      <Button  variant="outlined" color="secondary" disableElevation>OUTLINE</Button>
      <div className={classes.root}>
          <h1>UPLOAD</h1>
          <input accept="image/*" type="file" multiple className={classes.input} id="contained-button-file" />
          <label htmlFor="contained-button-file">
            <Button variant="contained" color="primary" component="span">
              Upload
            </Button>
      </label>
      <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
      <label htmlFor="icon-button-file">
        <IconButton color="secondary"  component="span">
          <PhotoCamera />
        </IconButton>
      </label>
      </div>
      <div>
        <h1>Sizes</h1>
        <Button size="small" variant="contained" color="primary"  className={classes.margin}>
          Small
        </Button>
        <Button size="medium" variant="contained" color="primary"  className={classes.margin}>
          Medium
        </Button>
        <Button size="large" variant="contained" color="primary"  className={classes.margin}>
          Large
        </Button>
        <div>
        <IconButton aria-label="delete" className={classes.margin} size="small">
          <ArrowDownwardIcon fontSize="inherit" />
        </IconButton>
        <IconButton aria-label="delete" className={classes.margin}>
          <DeleteIcon fontSize="small" />
        </IconButton>
        <IconButton onClick={ handleSubmit } aria-label="delete" className={classes.margin}>
          <DeleteIcon />
        </IconButton>
        <IconButton  aria-label="delete" className={classes.margin}>
          <DeleteIcon onClick={ handleSubmit } fontSize="large" />
        </IconButton>
      </div>
      </div>
      <h1>Buttons With Labels and icons</h1>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<DeleteIcon />}
      >
        Delete
      </Button>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={<SendIcon />}
      >
        Send
      </Button>
      <Button
        variant="contained"
        color="default"
        className={classes.button}
        startIcon={<CloudUploadIcon />}
      >
        Upload
      </Button>
      <Button
        variant="contained"
        disabled
        color="secondary"
        className={classes.button}
        startIcon={<KeyboardVoiceIcon />}
      >
        Talk
      </Button>
      <Button
        variant="contained"
        color="primary"
        size="small"
        className={classes.button}
        startIcon={<SaveIcon />}
      >
        Save
      </Button>
      <IconButton color="secondary" aria-label="add an alarm">
        <AlarmIcon />
      </IconButton>
      <IconButton color="primary" aria-label="add to shopping cart" className={classes.alarmicon}>
        <AddShoppingCartIcon />
      </IconButton>
      <div>
        <h1>Floating Buttons</h1>
        <div className={classes.floatingimages}>
      {images.map((image) => (
        <ButtonBase
          focusRipple
          key={image.title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: image.width,
          }}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.url})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {image.title}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      ))}
    </div>
      </div>
    </div>
  );
}

export default App;
