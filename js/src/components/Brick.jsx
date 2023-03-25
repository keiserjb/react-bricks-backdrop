import React from 'react';
import PropTypes from 'prop-types';


const Brick = ({
                 title,
                 firstLine100,
                 secondLine100,
                 thirdLine100,
                 firstLine500,
                 secondLine500,
                 thirdLine500,
                 firstLine1000,
                 secondLine1000,
                 thirdLine1000,
                 fourthLine1000,
                 fifthLine1000,
                 background100,
                 background500,
                 background1000,
                 path
               }) => (
  // <div className="col-md-4 mx-auto">
    <div>
    <a className="brick-link" style={{display: background100 ? "block" : "none"}} href={`https://test-137a472c-153f916d-14c5c44b.app.devpanel.com/${path}`}>
      <div className="brick-wrapper-view-100" style={{display: background100 ? "flex" : "none"}}>

        <div className="brick-contents-view">
          <p className="brick-text-view-100 text-center">{firstLine100}</p>
          <p className="brick-text-view-100 text-center">{secondLine100}</p>
          <p className="brick-text-view-100 text-center">{thirdLine100}</p>
        </div>

      </div>
    </a>

    <a className="brick-link" style={{display: background500 ? "block" : "none"}} href={`https://test-137a472c-153f916d-14c5c44b.app.devpanel.com/${path}`}>
      <div className="brick-wrapper-view-500" style={{display: background500 ? "flex" : "none"}}>
        <div className="brick-contents-view">
          <p className="brick-text-view-500 text-center">{firstLine500}</p>
          <p className="brick-text-view-500 text-center">{secondLine500}</p>
          <p className="brick-text-view-500 text-center">{thirdLine500}</p>
        </div>
      </div>
    </a>

    <a className="brick-link" style={{display: background1000 ? "block" : "none"}} href={`https://test-137a472c-153f916d-14c5c44b.app.devpanel.com/${path}`}>
      <div className="brick-wrapper-view-1000" style={{display: background1000 ? "flex" : "none"}}>

        <div className="brick-contents-view-1000">
          <p className="brick-text-view-1000 text-center">{firstLine1000}</p>
          <p className="brick-text-view-1000 text-center">{secondLine1000}</p>
          <p className="brick-text-view-1000 text-center">{thirdLine1000}</p>
          <p className="brick-text-view-1000 text-center">{fourthLine1000}</p>
          <p className="brick-text-view-1000 text-center">{fifthLine1000}</p>
        </div>
      </div>
    </a>
    <div className="container justify-content-center align-items-end" style={{display: title ? "none" : "flex"}}>
      <p>There were no results.  Please try again.</p>
    </div>
  </div>

)

Brick.propTypes = {
  title: PropTypes.string,
  // firstLine100: PropTypes.string,
  // secondLine100: PropTypes.string,
}

export default Brick
