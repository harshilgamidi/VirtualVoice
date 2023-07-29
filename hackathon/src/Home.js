import React from 'react'
import Header from './Header'
import HomePage from './HomePage'
import './CardRow.css';
import Footer from './Footer';

function handleButtonClick(id) {
  // Execute different link functions based on the button id
  switch (id) {
    case 1:
      window.location.href = "http://localhost:3000/livemotion";
      break;
    case 2:
      window.location.href = "http://localhost:3000/texttosign";
      break;
      case 3:
        window.location.href = "http://localhost:3000/DeafGpt";
        break;
        case 4:
      window.location.href = "http://localhost:3000/learningmodules";
      break;
    default:
      break;
  }
}

const Home = () => {

  const cardData = [
    {
      id: 1,
      imgSrc: 'https://img.freepik.com/free-vector/sign-language-classes-abstract-concept-vector-illustration-study-sign-language-translation-voiceless-basic-communication-silent-speech-online-classes-learn-gesture-alphabet-abstract-metaphor_335657-4230.jpg',
      content: 'Here is the software to break the communication gap between the deaf people and normal people. The over all website is user-friendly and Just try this out now. This is about Conversion of Sign to Text, So start interacting with your friend',
      btnText: 'Sign to Text',
    },
    {
      id: 2,
      imgSrc: 'https://img.freepik.com/free-vector/organic-flat-people-business-training_23-2148909572.jpg',
      content: 'Here is the software to break the communication gap between the deaf people and normal people. The over all website is user-friendly and Just try this out now. This is about Conversion of Speech to Sign, So start interacting with your friend',
      btnText: 'Speech to Text',
    },
    {
      id: 3,
      imgSrc: 'https://img.freepik.com/free-vector/conversation-chat-bot-screen-phone-customer-tiny-man-talking-with-cute-robot-online-messenger-flat-vector-illustration-chatbot-ai-virtual-support-social-media-concept_74855-24047.jpg',
      content: 'We all know that ChatGpt is the new revolution for this world, then how about trying DeafGpt.',
      btnText: 'Try Our DeafGpt',
    },
    {
      id: 4,
      imgSrc: 'https://media.istockphoto.com/id/1316279925/vector/online-learning-for-seniors-abstract-concept-vector-illustration.jpg?s=612x612&w=0&k=20&c=9SrbnLUd_9iJUyCwcDRuaSp6ez8FRtGpYahsk4GC5hw=',
      content: 'These study modules will assist you in learning Indian Sign Language (ISL) if you are not already familiar with it in order to communicate with Deaf individuals.',
      btnText: 'Learning Modules',
    },
  ];

  return (
    <>
    <Header/>
      <div className="App">
      <HomePage
        photoUrl="https://media.istockphoto.com/id/1283837580/vector/couple-of-deaf-people-talking-with-hand-gestures.jpg?s=612x612&w=0&k=20&c=Tcza_GLJJ2BCbDlvFvvrBhiV1hdZVTItjMFFEov7QSw="
        content="Wanna say something to your friend, give the sign to us, we will demonstrate the message that you want to express your friend."
        buttonText="Try it Now"
      />
    </div>
    <div className="card-row" style={{marginTop:20,marginLeft:0}}>
      {cardData.map((card) => (
        <div className="card" key={card.id}>
          <img src={card.imgSrc} alt={`Card ${card.id}`} />
          <div className="card-content">{card.content}</div>
          <button onClick={() => handleButtonClick(card.id)}>{card.btnText}</button>
        </div>
      ))}
    </div>
    <Footer/>
    
    </>
  )
}

export default Home
