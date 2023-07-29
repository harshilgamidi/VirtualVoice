import React from 'react';
import Header from './Header';
import Footer from './Footer';

function LearningModules() {
  return (
      <>
      <Header/>
      <div style={{display:'flex',flexDirection:'row'}}>
      <iframe style={{marginTop:100,marginLeft:20}} width="460" height="315" src="https://www.youtube.com/embed/VtbYvVDItvg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <iframe style={{marginTop:100,marginLeft:20}} width="460" height="315" src="https://www.youtube.com/embed/lffGJ29IhZQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <iframe style={{marginTop:100,marginLeft:20}} width="460" height="315" src="https://www.youtube.com/embed/bIkHfFlu4VU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      <div style={{display:'flex',flexDirection:'row'}}>
      <iframe style={{marginTop:100,marginLeft:20}} width="460" height="315" src="https://www.youtube.com/embed/drs0_jcKr5w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <iframe style={{marginTop:100,marginLeft:20}} width="460" height="315" src="https://www.youtube.com/embed/DOFPRw6Epl0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <iframe style={{marginTop:100,marginLeft:20,marginBottom:20}} width="460" height="315" src="https://www.youtube.com/embed/x58C6-ZtW_8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      <Footer/>
       </>
  );
}

export default LearningModules;
