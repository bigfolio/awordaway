import React from 'react';
import PropTypes from 'prop-types';
import { Header, Jumbotron } from 'watson-react-components';

// eslint-disable-mnext-lin =
const DESCRIPTION = 'The IBM Watson Speech to Text service uses speech recognition capabilities to convert Arabic, English, Spanish, French, Brazilian Portuguese, Japanese, Korean, German, and Mandarin speech into text.';
const GDPR_INFO = 'This system is for demonstration purposes only and is not intended to process Personal Data. No Personal Data is to be entered into this system as it may not have the necessary controls in place to meet the requirements of the General Data Protection Regulation (EU) 2016/679';
const TERMS_OF_USE_URL = 'https://watson-developer-cloud.github.io/terms?name=Speech-to-Text%20Demo';

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>
          A Word Away, Inc. ASR
        </title>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.ico" type="image/x-icon" />
        <link rel="stylesheet" href="/css/watson-react-components.min.css" />
        <link rel="stylesheet" href="/css/style.css" />
      </head>
      <body>
<div style={{backgroundColor:"#001f4e",width:"100%",padding:".8rem"}}>	  
<img src="/images/awa-logo-sm.png" />
</div>
       

        
        
        <div id="root">
          {children}
        </div>
        <script type="text/javascript" src="scripts/bundle.js" />
        <script type="text/javascript" src="https://cdn.rawgit.com/watson-developer-cloud/watson-developer-cloud.github.io/master/analytics.js" />
		
 <div style={{color:"#FFFFFF",fontSize:"11px",fontWeight:"bold",padding:"15px",backgroundColor:"#001f4e"}}>
  <div style={{textAlign:"center",padding:"0",margin:"0",maxWidth:"100%"}}> &copy; Copyright 1990 - 2023 A Word Away, Inc.® is a registered trademark </div>
</div> 		
		
      </body>
    </html>
  );
}

Layout.propTypes = {
  children: PropTypes.object.isRequired, // eslint-disable-line
};
