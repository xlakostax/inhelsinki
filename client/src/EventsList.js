import React, {useEffect, useState} from 'react';

import axios from 'axios';
import debounce from "lodash.debounce";
import { Events, animateScroll as scroll} from 'react-scroll'

/*Import components*/
import EventBox from './components/EventBox';
// import MapContainer from './Map/MapContainer';

const EventsList = () => {
  const [data, setData] = useState([])
  // const [filter, setFilter] = useState({
  //   filter_lang: "",
  //   tags_filter: "",
  // });
  // const [pins, setPins] = useState([]);
  // const [selectedEvent, setSelectedEvent] = useState([]);
  const [scrolling, setScrolling] = useState({
    error: false,
    hasMore: true,
    isLoading: false,
  });
  // const [event, setEvent] = ("");
  // let limit = 2;
  // let start = data.length;

  // const getPins = () => {
  //   axios.get(`/api/pins/?${this.state.filter_type}&${this.state.filter_lang}`)
  //   .then(result => {
  //     setPins(state => {
  //       state.pins = result.data;
  //       return state;
  //     });
  //   });
  // }

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // getEvents();
  //   // getPins();
  //   document.documentElement.scrollTop = 0;
  // }

  // const handleChange = (event) => {
  //   let newFilter = {};
  //   newFilter[event.target.name] = event.target.value;
  //   console.log(newFilter)
  //   setData({
  //     ...this.state,
  //     ...newFilter,
  //     ...{start: 0}
  //   });
  // }

  const updateState = async () => {
    try {
      const response = (await axios.get(`http://localhost:5000/event/?start=today`)).data
      // console.log("Response", response)
      setScrolling(
        {
          ...scrolling,
          isLoading: true,
        }
      );
      setData([...data, ...response])
      setScrolling(
        {
          ...scrolling,
          hasMore: response.length !== 0,
          isLoading: false,
        }
      );
    } catch (error) {
      console.log(error)
    }
  }

  const showToTopButton = () => {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
      document.getElementById("back-to-top").style.display = "block";
    } else {
      document.getElementById("back-to-top").style.display = "none";
    }
  }

  window.onscroll = debounce(() => {
    showToTopButton();
    const { error, isLoading, hasMore } = scrolling;
    if (error || isLoading || !hasMore) {
      return
    };
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      // console.log("window.innerHeight: ", window.innerHeight)
      // console.log("document.documentElement.scrollTop: ", document.documentElement.scrollTop)
      // console.log("document.documentElement.offsetHeight: ", document.documentElement.offsetHeight)
      updateState();
    } else {
      return;
    }
  }, 100);

  useEffect(() => {
    Events.scrollEvent.register('begin', function () {});
    Events.scrollEvent.register('end', function () {});
    updateState();
  }, [])

  const scrollToTop = () => {
    scroll.scrollToTop();
  }

  return (
    <div className='App'>
      <div className='map-events-holder'>
        <article>
          {data.map((el, index) => {
            return el.dates ?
            <div className="complex-box" key={index}>
              <EventBox
                key={index}
                id={el.id}
                name={el.name.fi}
                // address={el.location.address.street_address}
                // postcode={el.location.address.postal_code}
                // city={el.location.address.locality}
                intro={el.short_description.fi}
                imageURL={el.images[0].url}
                startDate={el.start_time}
                // url={el.url}
                // onClick={this.handleEventClick}
              />
            </div>
            :
            <div className="complex-box" key={index}>
              <EventBox
                key={index}
                id={el.id}
                name={el.name ? el.name.fi : ""}
                address={el.address === "Online" ? "" : el.address.street_address.fi}
                postcode={el.address === "Online" ? "" : el.address.postal_code}
                city={el.address === "Online" ? "Online" : el.address.address_locality.fi}
                intro={el.short_description ? el.short_description.fi : ""}
                imageURL={el.images.length !== 0 ? el.images[0].url : "#"}
                // url={el.info_url}
                // onClick={handleEventClick}
                startDate={el.start_time}
              />
            </div>
          })}
        </article>
        {/*<div id='map-holder'>
          <aside className='sticky'>

          </aside>
        </div>*/}
      </div>
      <footer>
        <div id='back-to-top_placeholder'>
          <i
            id="back-to-top"
            className="fas fa-arrow-alt-circle-up"
            onClick={scrollToTop}
          />
        </div>
        <ul className='footer-menu'>
          <li className = 'footer-menu-element'>
            About
          </li>
          <li className = 'footer-menu-element'>
            Contact Us
          </li>
          <li className = 'footer-menu-element last'>
            Disclaimer
          </li>
        </ul>
      </footer>
    </div>
  );
}
export default EventsList;
