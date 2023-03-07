import React, { useState } from 'react';
import "../styles/DescriptionPanel.scss"


function DescriptionPanel(props) {

  const [isContentVisible, setIsContentVisible] = useState(false) //chevron animation
  const showContent = () => {
    setIsContentVisible(!isContentVisible)
  }

  return (
    <div className="description__panel">
      <p className='description__header'>
        <span>{props.title}</span>
        <i className="fas fa-chevron-up" onClick={showContent}></i> 
      </p>                                                              
      {isContentVisible && <p className='description__content'>{props.content}</p>} 
    </div>
  ); 
}

export default DescriptionPanel;
