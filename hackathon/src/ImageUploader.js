import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Container, Grid, Paper, TextField, Typography } from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import axios from 'axios';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {Link} from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f7f7f7',
  },
  perf:{
  position:'relative',
  right:150,
  top:60,
  marginLeft:300
  },
  [theme.breakpoints.up('767px')]: {
    perf:{
      right:0
      
    }
  },
  paper: {
    padding: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '80%',
    maxWidth: '500px',
  },
  input: {
    display: 'none',
  },
  button: {
    margin: theme.spacing(1),
  },
  preview: {
    marginTop: theme.spacing(2),
    width: '100%',
    height: 'auto',
  },
}));

function ImageUploader() {
  const classes = useStyles();
  const [Data,SetData]=useState('');
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      setFile(selectedFile);

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    } else {
      setFile(null);
      setPreview(null);
    }
  };

  const handleClick = () => {
    // Set a flag in the session storage to indicate a redirect
    sessionStorage.setItem('shouldReload', true);
  }

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await axios.post('/upload', formData);
      console.log(response.data.category);
      SetData(response.data.category)
    } catch (error) {
      console.error(error);
    }
  };

  return (
      <>
      <Link to = '/' onClick={handleClick}> 
      <Button 
  className={classes.button}
  variant="contained"
  color="primary"
  startIcon={<ArrowBackIcon />}
>
  Back
</Button></Link>
  <Link to='/livemotion'><Button style={{position:'relative',left:1230}}
  className={classes.button}
  variant="contained"
  color="primary"
  startIcon={<LiveTvIcon />}
>
  Live Motion
</Button></Link>
    <div className={classes.root}>  
    <div className={classes.perf }>
      <Paper className={classes.paper} elevation={3}>
        <Typography variant="h3" component="h2" gutterBottom>
          Upload your Image
        </Typography>

        <label htmlFor="contained-button-file">
          <input
            accept="image/*"
            className={classes.input}
            id="contained-button-file"
            type="file"
            onChange={handleFileChange}
          />
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            component="span"
            startIcon={<CloudUploadIcon />}
          >
            Choose File
          </Button>
        </label>

        {preview && (
          <img className={classes.preview} src={preview} alt="Preview" />
        )}

        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          disabled={!file}
          onClick={handleUpload}
        >
          Upload
        </Button>
      </Paper>
    </div>

    <div className={classes.perf }>
      <Paper className={classes.paper} elevation={3}>
        <Typography variant="h3" component='h2' gutterBottom >
          Prediction Output
        </Typography>
        <h2 style={{fontSize:30}}>Category : {Data}</h2>
      </Paper>
    </div>
    </div>

</>
  );
}

export default ImageUploader;
