import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

// import { Events, animateScroll as scroll} from 'react-scroll'

/*Import components*/
import EventBox from './components/EventBox';
// import MapContainer from './Map/MapContainer';
import usePagination from './hooks/usePagination';

const EventsList = () => {
  const [page, setPage] = useState(1);

  const {data, loading, more} = usePagination(page);

  const handleInfiniteScroll = () => {
    const endOfPage = window.innerHeight + window.pageYOffset >= document.body.offsetHeight;
    if (endOfPage) {
      setPage(page+1)
      window.removeEventListener("scroll", handleInfiniteScroll);
    }
  };

  window.addEventListener("scroll", handleInfiniteScroll);

  return (
    <div className='App'>
      <div className='map-events-holder'>
        <article>
          {data.map((el, index) => {
            return <div className="complex-box" key={index}>
              <EventBox
                key={index}
                id={el.id}
                name={el.name ? el.name.fi : ""}
                address={el.address === "Online event" ? "Online event" : el.address.street_address.fi}
                postcode={el.address === "Online event" ? "" : el.address.postal_code}
                city={el.address === "Online event" ? "" : el.address.address_locality.fi}
                intro={el.short_description ? el.short_description.fi : ""}
                imageURL={el.images.length !== 0 ? el.images[0].url : null}
                // url={el.info_url}
                // onClick={handleEventClick}
                startDate={el.start_time}
              />
            </div>
          })}
        </article>
        {loading && (
          <span id="loader"><FontAwesomeIcon icon="fa-solid fa-arrows-spin" spin size="2xl" style={{color: "#b4c92b"}} /></span>
        )}
        {!more && <span id="end">You've the reached the end</span>}
        {/*<div id='map-holder'>
          <aside className='sticky'>

          </aside>
        </div>*/}
      </div>
    </div>
  );
}
export default EventsList;
