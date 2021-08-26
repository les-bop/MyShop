import React from 'react';
import './menu-item.styles.scss';
import { withRouter } from 'react-router-dom';

const MenuItem = ({title, imageUrl, size, history, linkUrl, match}) => (

        <div className="row start-xs">
<div className={`${size} menu-item d-flex justify-content-end  `} onClick={() =>history.push(`${match.url}${linkUrl}`)}>
    <div className='background-image img-responsive ' style={{
    backgroundImage: `url(${imageUrl}) `
    
 }}/>
    <div className='content'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <span className='subtitle'>SHOP NOW</span>
    </div>
    
    </div>
    </div>
  
);

export default withRouter(MenuItem);

