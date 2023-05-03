import React, { useContext, useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/userprofile.css";

export const UserProfile = () => {
  const { store, actions } = useContext(Context);
  const { id } = useParams();
  const user = store.user;
  const artist = store.artists;
  const history = useNavigate();
  console.log(user.artist, "userprofile");

  // Check if user is authenticated
  useEffect(() => {
    if (!store.isAuthenticated) {
    }
  }, [store.isAuthenticated, history]);
  useEffect(() => {
    if (!store.token) {
      history("/login");
    } else {
      actions.getUser();
      actions.getArtist();
    }
  }, [store.token]);

  return (
    <div className="container">
      <div className="user-card">
        <img
          className="card-img-top "
          style={{ width: 200, height: 200 }}
          src="https://cdn.vectorstock.com/i/preview-1x/15/40/blank-profile-picture-image-holder-with-a-crown-vector-42411540.webp"
          alt=""
        ></img>
        <div className="user-card-body">
          <h1 classname="user-card-title"> Welcome {user.username}</h1>
          <p className="user-card-text">
            {" "}
            Your name : {user.first_name} {user.last_name}
          </p>
          <p className="user-card-text"> Your Email {user.email}</p>
        </div>
      </div>
      <div className="Jumbotron">
        <div className="card">
          <p>I am {user.first_name} and i would like to Add a</p>
        </div>
        <Link to="/register/venue">
          <button type="button">Venue </button>
        </Link>
        <Link to="/register/artist">
          <button type="button">Artist </button>
        </Link>
        <Link to="/myprofile">
          <button type="button">Edit Your Profile</button>
        </Link>
      </div>
      {/* map users artists and venues on profile */}
      {
        user.artists &&
          user.artists.map((artist) => {
            return (
              <div key={artist.id} className="container">
                <div className="card">
                  <p className="card-title">
                    Artist Name :{artist.artist_name}
                  </p>
                  <p className="card-text">Genre :{artist.genre}</p>
                  <p className="card-text">Instagram :{artist.instagram}</p>
                  <p className="card-text">
                    Performance Type :{artist.performance_type}
                  </p>
                  <p className="card-text">TikTok : {artist.tiktok}</p>
                  <p className="card-text">Twitter : {artist.twitter}</p>
                  <p className="card-text">Spotify : {artist.spotify}</p>
                  <p className="card-text">Sound Cloud : {artist.soundcloud}</p>
                  <p className="card-text">Facebook: {artist.facebook}</p>
                  <p className="card-text">About Info : {artist.aboout_info}</p>
                </div>
              </div>
            );
          })

        // {users.artists &&
        //   store.users.artists.map((artist, id) => {
        //     return (
        //       <div key={id} className="row mx-2 py-auto align-content-center">
        //         <div className="col-md-1 my-auto p-0">
        //           <span>Artist Name :{users.artist_name}</span>
        //           <span>Genre :{artist.genre}</span>
        //           <span>Instagram :{artist.instagram}</span>
        //           <span>Performance Type :{artist_name}</span>
        //         </div>
        //       </div>
        //     );
      }
    </div>
  );
};
