import { Button } from '@material-ui/core';
import React from 'react'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useState ,useEffect} from 'react';
import { Link } from 'react-router-dom';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { useSpeechSynthesis } from 'react-speech-kit';
import MicIcon from '@mui/icons-material/Mic';


const Text_To_Sign = () => {
  const {speak} = useSpeechSynthesis();
  const [Data,setData] = useState('');
  const [Text,setText] = useState('');
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  

  const handleSubmit = (event) =>{
    let str1 = Data.toLowerCase();
    console.log(str1)
    const strWithoutSpaces = str1.replace(/\s+/g, "");
    console.log(strWithoutSpaces)
    var Data1 = strWithoutSpaces+'.mp4';
    console.log(Data1)
    document.getElementById('avatar').innerHTML=`<Video src ="avatars/${Data1}" autoplay />`
    speak({text:Data})
  }

  const handleClick = () => {
    // Set a flag in the session storage to indicate a redirect
    sessionStorage.setItem('shouldReload', true);
  }

  const handleTimer =()=>{
    SpeechRecognition.startListening();
    setTimeout(() => {
     SpeechRecognition.stopListening();
     var val = document.getElementById('get').innerHTML;
    setData(val);
    document.getElementById('texts').innerHTML=val;
    }, 4000); 


  }

  return (

    <div className="container">
    <div className="text-editor" style={{backgroundColor:'black'}}>
    <Link to = '/' onClick={handleClick}>
    <Button style={{marginTop:0,marginLeft:4,marginBottom:15}}
  variant="contained"
  color="primary"
  startIcon={<ArrowBackIcon />}
>
  Back
</Button></Link>
<div>
      <p style={{color:'white'}}>Microphone: {listening ? 'on' : 'off'}</p>
      <button onClick={handleTimer} style={{position:'relative',right:350}}><MicIcon/></button>
      <p id='get' style={{color:'white'}}>{transcript}</p>

    </div>
      <h2 style={{color:'whitesmoke'}}>Speech to Sign</h2>
      <textarea id='texts' placeholder="Get your text here ... " value={Data} style={{color:'white'}}></textarea>
      <Button style={{ backgroundColor: '#3f51b5', color: 'white', border: 'none', borderRadius: '5px', padding: '10px 20px', fontSize: '16px', cursor: 'pointer', marginTop: '10px', transition: 'all 0.3s ease' }} onClick={handleSubmit}>Submit</Button>
    </div>
    <div id = "avatar" className="avatar">
    </div>
    <style>{`
      .container {
        display: flex;
        height: 100vh;
      }

      .text-editor {
        flex: 1;
        padding: 20px;
      }

      .avatar {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #f0f0f0;
      }

      .avatar img {
        max-width: 100%;
        max-height: 100%;
      }

      .text-editor {
        flex: 1;
        display: flex;
        flex-direction: column;
        background-color: #f5f5f5;
        border-radius: 10px;
        padding: 20px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
      }
      
      .text-editor h2 {
        margin-top: 0;
      }
      
      .text-editor textarea {
        flex: 1;
        border: none;
        outline: none;
        font-size: 16px;
        font-family: 'Helvetica Neue', sans-serif;
        padding: 10px;
        resize: none;
        background-color: transparent;
      }
      
      @media (max-width: 768px) {
        .text-editor {
          padding: 10px;
        }
      
        .text-editor h2 {
          font-size: 1.5rem;
        }
      
        .text-editor textarea {
          font-size: 14px;
        }
        .text-editor button:hover {
          background-color: #283593;
        }
      }
      
    `}</style>
  </div>
);
}

  

export default Text_To_Sign
