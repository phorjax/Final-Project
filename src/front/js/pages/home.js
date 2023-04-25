import React, { useState, useContext, useEffect, useLayoutEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Artistcard } from "../component/artistscards";
import { Venuecard } from "../component/venuecards";
import { useParams } from "react-router";
import Carousel from "better-react-carousel";
import rockMusic from "../../img/RockMusic.png";
import HipHopMusic from "../../img/HipHopMusic.png";
import JazzMusic from "../../img/JazzMusic.png";
import ElectronicMusic from "../../img/ElectronicMusic.png";
import ClassicalMusic from "../../img/ClassicalMusic.png";

export const Home = () => {
  useLayoutEffect(() => {
    actions.getArtist();
    actions.getVenue();
  }, []);
  const { store, actions } = useContext(Context);
  const artists = store.artists;
  const venues = store.venues;
  const { id } = useParams();

  // const [filter, setFilter] = useState(artists)

  // const rockArtists = artists.filter(artist => artist.genre == "rock");
  // const hipHopArtists = artists.filter(artist => artist.genre == "hip hop");
  // const jazzArtists = artists.filter(artist => artist.genre == "jazz");
  // const electronicArtists = artists.filter(artist => artist.genre == "electronic");
  // const classicalArtists = artists.filter(artist => artist.genre == "classical")

  console.log(venues);
  // console.log(rockArtists)

  const rockFilter = () => setArtists(rockArtists);
  const hipHopFilter = () => setArtists(hipHopArtists);
  const jazzFilter = () => setArtists(jazzArtists);
  const electronicFilter = () => setArtists(electronicArtists);
  const classicalFilter = () => setArtists(classicalArtists);

  useEffect(() => {
    if (store.token && store.token != "" && store.token != undefined)
      actions.Authorization();
  }, [store.token]);
  return (
    <div className="container-fluid">
      {/* EVERYTHING ABOVE THIS LINE FOR HEADER TESTS */}
      <div className="row header-image p-3 align-items-center">
        <h1 className="header-text text-center">
          Where <b>Music</b> Meets <b>Opportunity</b>
        </h1>
      </div>
      <div className="row text-center mt-2">
        <h1>Bringing Musicians and Venues Together!</h1>
      </div>
      <div className="row text-center">
        <h4>Genres</h4>
      </div>
      <Carousel cols={5} rows={1} gap={-10} loop>
        <Carousel.Item rounded-circle>
          <img className="genreImage" src={rockMusic} onClick={rockFilter} />
          <p className="genreText">Rock</p>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="genreImage"
            src={HipHopMusic}
            onClick={hipHopFilter}
          />
          <p className="genreText">Hip-Hop</p>
        </Carousel.Item>
        <Carousel.Item>
          <img className="genreImage" src={JazzMusic} onClick={jazzFilter} />
          <p className="genreText">Jazz</p>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="genreImage"
            src={ElectronicMusic}
            onClick={electronicFilter}
          />
          <p className="genreText">Electronic</p>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="genreImage"
            src={ClassicalMusic}
            onClick={classicalFilter}
          />
          <p className="genreText">Classical</p>
        </Carousel.Item>
        <Carousel.Item>
          <p className="genreText other-Text">Other</p>
        </Carousel.Item>
      </Carousel>
      <div className="row px-3">
        <h1 className="artistitle">Artists</h1>
      </div>
      <div className="card-row d-flex flex-row flex-wrap justify-content-start">
        {artists.map((artist, index) => {
          return (
            <Artistcard
              artist_name={artist.artist_name}
              genre={artist.genre}
              performance_type={artist.performance_type}
              imgUrl={artist.images.split(", ")[0]}
              link={"/artists/" + index}
              id={index}
              starRating="5.0"
            />
          );
        })}
      </div>

      <div className="row px-3 mt-3">
        <h1>Venues</h1>
        <div className="card-row d-flex flex-nowrap px-3">
          {venues.map((venue, index) => {
            return (
              <Venuecard
                venue_name={venue.venue_name}
                city={venue.city}
                state={venue.state}
                imgUrl={venue.images.split(", ")[0]}
                link={"/venues/" + index}
                id={index}
                starRating="5.0"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
