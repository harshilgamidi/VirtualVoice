import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {useState,useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import Footer from './Footer';

const HomePage = ({ photoUrl, content, buttonText }) => {
    const [Widths, setWidth] = useState(window.innerWidth);

    const handleClick = () => {
        // Set a flag in the session storage to indicate a redirect
        sessionStorage.setItem('shouldReload', true);
      }

    useEffect(() => {
        // Check if the flag is set in the session storage
        const shouldReload = sessionStorage.getItem('shouldReload') === 'true';
        if (shouldReload) {
          // Clear the flag
          sessionStorage.removeItem('shouldReload');
          // Reload the page once
          window.location.reload();
        }
      },);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <div className="container">
      <div className="photo-container">
        <img src={photoUrl} alt="photo" style={{width:550,marginTop:100,marginLeft:100}}/>
      </div>
      <div className="content-container">
        <p style={{fontWeight:700,color:'grey'}}>{content}</p>
        <Link to='/signtotext' style={{textDecoration:'none'}}><button style={{fontWeight:700}}>{buttonText}</button></Link>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: row;
          justify-content: flex-end;
          align-items: center;
          padding: 20px;
          background-color: #f8f8f8;
          border: 1px solid #e8e8e8;
          border-radius: 5px;
          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        }
        @media(max-width:767px){
            .container{
                flex-direction:column
            }
        }


        .photo-container {
          width: 100%;
          margin-bottom: 20px;
        }

        .photo-container img {
          width: 100%;
          height: auto;
        }

        .content-container {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          text-align: right;
        }

        button {
          margin-top: 20px;
          padding: 10px 20px;
          border-radius: 5px;
          background-color: #007bff;
          color: #fff;
          border: none;
          cursor: pointer;
          transition: background-color 0.2s ease-in-out;
        }

        button:hover {
          background-color: #0062cc;
        }
      `}</style>
    </div>
    
    
  );
};

HomePage.propTypes = {
  photoUrl: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default HomePage;
