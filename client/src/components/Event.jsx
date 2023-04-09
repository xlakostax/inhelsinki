import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import moment from "moment";
import {Container, Image, Heading, Component} from "../styles/Event";

const Event = (props) => {
    return (
      <Container onClick={props.onClick} id={props.id}>
          {props.imageURL !== null? <Image src={props.imageURL} alt="event-img"/> : <span />}
          <Heading className='name'>{props.name}</Heading>
          <Component>
            <FontAwesomeIcon icon="fa-solid fa-calendar-days"/>
            <p>{moment(props.startDate).format('LLL')}</p>
          </Component>
          <Component>
            <FontAwesomeIcon icon="fa-solid fa-location-dot"/>
            <p>{props.address}, {props.city}, {props.postcode}</p>
          </Component>
          <Component>
            <FontAwesomeIcon icon="fa-solid fa-circle-info"/>
            <p>{props.intro}</p>
          </Component>
          <Component>
            <FontAwesomeIcon icon="fa-solid fa-link"/>
            <a href={props.url} target="_blank" rel="noopener noreferrer">More details</a>
          </Component>
      </Container>
    );
  }
export default Event;
