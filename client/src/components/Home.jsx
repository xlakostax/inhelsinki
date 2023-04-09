import React from "react";

/*Import components*/
import Header from "./Header";
// import Navigation from "./Navigation";
import EventsContainer from "./EventsContainer";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Header />
      {/* <Navigation /> */}
      <EventsContainer />
      <Footer />
    </>
  );
};
export default Home;
