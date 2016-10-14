import React from 'react';
import { withRouter } from 'react-router';



const NotFound = (props) => {
    return (
      <div className="welcome-page-container">
        <div className="welcome-background">
          <h1 className="welcome-heading">SoundScape</h1>
        </div>
        <div className="heading-and-button">
          <h1 className="welcome-tracks-heading">Page not found</h1>
          <button className="go-back" onClick={ () => props.router.push("/")}>Back to Home</button>
        </div>
      </div>
    );
};

export default withRouter(NotFound);
