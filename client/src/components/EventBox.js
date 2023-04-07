import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import moment from "moment";
import '../styles/EventBox.css';

function EventBox(props) {
    return (
      <div className="event-box" onClick={props.onClick} id={props.id}>
        <div className="image-holder">
          {props.imageURL !== null? <img src={props.imageURL} alt="event-img"/> : <span />}
        </div>
          <p className='name'>{props.name}</p>
          <p className="date-n-time"><FontAwesomeIcon icon="fa-solid fa-calendar-days" /><br></br>{moment(props.startDate).format('LLL')}</p>
          <p className="address" ><FontAwesomeIcon icon="fa-solid fa-location-dot" /><br></br>{props.address}, {props.city}, {props.postcode}</p>
          <p className="intro"><FontAwesomeIcon icon="fa-solid fa-circle-info" /><br></br>{props.intro}</p>
          <p className="event-url"><FontAwesomeIcon icon="fa-solid fa-link" /> <a href={props.url} target="_blank" rel="noopener noreferrer">More details</a></p>
      </div>
    );
  }
export default EventBox;
