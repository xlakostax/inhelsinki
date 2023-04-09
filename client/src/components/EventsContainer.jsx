import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import { Events, animateScroll as scroll} from 'react-scroll'

/*Import components*/
import Event from "./Event";
import usePagination from "../hooks/usePagination";
// import "./EventsContainer.css";
import {Container} from "../styles/EventsContainer"

const EventsContainer = () => {
  const [page, setPage] = useState(1);

  const { data, loading, more } = usePagination(page);

  const handleInfiniteScroll = () => {
    const endOfPage =
      window.innerHeight + window.pageYOffset >= document.body.offsetHeight;
    if (endOfPage) {
      setPage(page + 1);
      window.removeEventListener("scroll", handleInfiniteScroll);
    }
  };

  window.addEventListener("scroll", handleInfiniteScroll);

  return (
    <Container>
      {data.map((el, index) => {
        return (
            <Event
              key={index}
              id={el.id}
              name={el.name ? el.name.fi : ""}
              address={
                el.address === "Online event"
                  ? "Online event"
                  : el.address.street_address.fi
              }
              postcode={
                el.address === "Online event" ? "" : el.address.postal_code
              }
              city={
                el.address === "Online event"
                  ? ""
                  : el.address.address_locality.fi
              }
              intro={el.short_description ? el.short_description.fi : ""}
              imageURL={el.images.length !== 0 ? el.images[0].url : null}
              // url={el.info_url}
              // onClick={handleEventClick}
              startDate={el.start_time}
            />
        );
      })}
      {loading && (
        <span id="loader">
          <FontAwesomeIcon
            icon="fa-solid fa-arrows-spin"
            spin
            size="2xl"
            style={{ color: "#b4c92b" }}
          />
        </span>
      )}
      {!more && <span id="end">You've the reached the end</span>}
    </Container>
  );
};
export default EventsContainer;
