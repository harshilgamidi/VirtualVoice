import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Text_To_Sign from './Text_To_Sign';
import Sign_To_Text from './Sign_To_Text';
import Opencv from './Opencv';
import LearningModules from './LearningModules';
import DeafGpt from './DeafGpt';


function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/texttosign" element={<Text_To_Sign />} />
        <Route path="/signtotext" element={<Sign_To_Text />} />
        <Route path="/livemotion" element={<Opencv/>}/>
        <Route path="/learningmodules" element={<LearningModules/>}/>
        <Route path="/deafgpt" element={<DeafGpt/>}/>
      </Routes>
  </BrowserRouter>
  );
}

export default App;
