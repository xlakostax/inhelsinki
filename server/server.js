require("dotenv").config();

const axios = require("axios");
const cors = require("cors");
const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 5000;

app.use(
  cors()
  // {origin: ['http://localhost:3000']}
);

const apiUrl = "api.hel.fi/linkedevents/v1";

const getData = async (req, res) => {
  const params = req.query;
  const path = req.path;

  try {
    const eventsResponse = await axios.get(
      `http://${apiUrl}${path}?page=${params.page}`
    );
    const events = eventsResponse.data;
    const placesResponse = await axios.get(
      "http://api.hel.fi/linkedevents/v1/place/"
    );
    const places = placesResponse.data.data;
    const updatedEvents = events.data.map((event) => {
      const address = places.find((place) => {
        return event.location["@id"].includes(place.id);
      });
      return {
        ...event,
        address: address ? address : "Online event",
      };
    });
    events.data = updatedEvents;
    // console.log(events)
    res.json(events);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

app.get("/event/", (req, res) => {
  getData(req, res);
});

// app.get("/place/", (req, res) => {
//   getData(req, res);
// });

app.listen(port, () => console.log(`Server is running on port ${port}`));
