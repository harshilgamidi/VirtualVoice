import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { makeStyles } from '@material-ui/core/styles';
import { Button, Container, Grid, Typography } from "@mui/material";
import { Paper } from '@material-ui/core';
import { Link } from "react-router-dom";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import { lightBlue } from "@mui/material/colors";
import Timer from "./Timer";
import { useSpeechSynthesis } from 'react-speech-kit';
import { Configuration, OpenAIApi } from "openai";

var s1;
var s2;
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
    left:650,
    top:-350,
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

  

const DeafGpt = () => {
  const confi = new Configuration({
    apiKey: "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",
});
const openai = new OpenAIApi(confi);
 const {speak} = useSpeechSynthesis();
const classes = useStyles();
const [timerId, setTimerId] = useState(null);
const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
const [Data,setData]=useState('');
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [isStreaming, setIsStreaming] = useState(false);


  const handleClick = () => {
    // Set a flag in the session storage to indicate a redirect
    sessionStorage.setItem('shouldReload', true);
  }



  useEffect(() => {
    const audio = new Audio('beepsound/alertsound.mp3');
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
        if (seconds=== 0) {
          audio.play();
        }
        if (seconds===7){
          stopStreaming();
          clearInterval(interval);
        }
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);


  function handleStart() {
    setIsActive(true);
  }

  function handleReset() {
    setSeconds(0);
    setIsActive(false);
  }


  useEffect(() => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then((stream) => {
          videoRef.current.srcObject = stream;
        })
        .catch((error) => console.error(error));
    }
  }, []);

  const startStreaming = () => {
    setIsStreaming(true);
    handleStart();
  };

  const stopStreaming = () => {
    setIsStreaming(false);
    axios
      .get("/result")
      .then((response) => {
        var dat = response.data.category;
        const strWithoutSpaces = dat.replace(/\s+/g, "");
        var Data1 = strWithoutSpaces;
        s1 = Data1;
        console.log('meaning of '+s1)
        setData(Data1)
        speak({text:Data1})
        const timer = setTimeout(() => {
         
        }, 2000);
        return () => clearTimeout(timer);
      })

      .catch((error) => console.error(error));
      handleGPT();
      handleReset();
  };

   async function handleGPT()
   {
    var res;
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: 'meaning of '+s1,
      max_tokens: 20,
      temperature: 0.7,
    });
    const parsableJSONresponse = response.data.choices[0].text;
    var ch = parsableJSONresponse;
    console.log(ch);
    s2 = ch;
    res.send(parsableJSONresponse);

   }

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const postFrameToServer = () => {
      if (!isStreaming) return;
      ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
      canvas.toBlob((blob) => {
        const formData = new FormData();
        formData.append("frame", blob);
        fetch("/process", {
          method: "POST",
          body: formData,
        })
          .then((response) => console.log(response))
          .catch((error) => console.error(error));
      }, "image/jpeg", 0.9);
    };

   
    const intervalId = setInterval(postFrameToServer,250);

    return () => clearInterval(intervalId);
  }, [isStreaming]);


  function handling()
  {
    document.getElementById('key').innerHTML=s2;
  }
  return (<>
    <Link to = '/' onClick={handleClick}>
      <Button style={{marginTop:10,marginLeft:4,}}
  variant="contained"
  color="primary"
  startIcon={<ArrowBackIcon />}
>
  Back
</Button></Link>
    <Container maxWidth="lg">
      <Typography variant="h3" gutterBottom style={{color:'#602FF7',fontWeight:700,fontFamily:'sans-serif'}}>
        Live Streaming
      </Typography>
      <Grid container spacing={2} sx={{ alignItems: "center", justifyContent: "flex-start" }}>
        <Grid item xs={12} md={8}>
          <video ref={videoRef} autoPlay muted style={{ width: "70%" }} />
          <canvas ref={canvasRef} style={{ display: "none" }} />
        </Grid>
        <Grid item xs={12} md={4}>
          <Grid container direction="column" spacing={2}>
            <Grid item>
            </Grid>
            <Grid item>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Button variant="contained" onClick={startStreaming} style={{marginTop:10,fontSize:20}}>
                Start
              </Button>
        <div className={classes.perf }>
      <Paper className={classes.paper} elevation={3}>
      <div>
      <h1>Timer: {seconds}</h1>
    </div>
        <Typography variant="h3" component='h2' gutterBottom >
          Prediction Output
        </Typography>
        <h2 style={{fontSize:30}}>{Data}</h2>
      </Paper>
      <Button variant="contain" style={{marginTop:10}}  onClick={handling}>Generate Response For the given Word</Button>
      <h4 id='key'></h4>
    </div>
    </Container>
    </>
  );
};
export default DeafGpt;

