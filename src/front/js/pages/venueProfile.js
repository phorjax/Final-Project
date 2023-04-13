import React, { useContext, useState } from "react";
import { MessagingModal } from "../component/messagingmodal";

import "../../styles/venueProfile.css";

import CalendarPlaceholder from "./CalendarPlaceholder.png";
import MapPlaceholder from "./MapPlaceholder.png";

import { Context } from "../store/appContext";

export function VenueProfile() {
  const { store, actions } = useContext(Context);

  return (
    <div className="container-fluid">
      <div className="row mt-4 px-2 gx-3 d-flex mainRow">
        <div className="col-md-5 mt-2 rounded profile-main-img">
          Image goes here
        </div>
        <div className="col-md-7">
          <div class="d-flex flex-row mb-0">
            <div>
              <h2 className="venueName m-0">Venue Name</h2>
            </div>
            <div className="mx-2 pt-1">
              <button className="btn btn-sm btn-primary">
                <MessagingModal />
              </button>
            </div>
          </div>
          <div className="row mt-0">
            <div>
              <i className="fa-regular fa-star"></i>
              <i className="fa-regular fa-star"></i>
              <i className="fa-regular fa-star"></i>
              <i className="fa-regular fa-star"></i>
              <i className="fa-regular fa-star"></i>
            </div>
          </div>
          <div className="row mt-3">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
            </p>
            <p className="my-0">
              <b>Capacity: </b>
            </p>
            <p className="my-0">
              <b>Music Type: </b>
            </p>
            <p className="my-0">
              <b>Hiring?: </b>
            </p>
            <p className="my-0">
              <b>Pay Rate: </b>
            </p>
            <p className="my-0">
              <b>Fee Rate: </b>
            </p>
            <p className="my-0">
              <b>Equipment Info: </b>Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="row mt-3 px-2">
            <div className="social-link rounded-circle mx-2 d-flex justify-content-center align-items-center">
              <i className="fa-brands fa-instagram fa-xl"></i>
            </div>
            <div className="social-link rounded-circle mx-2 d-flex justify-content-center align-items-center">
              <i className="fa-brands fa-tiktok fa-xl"></i>
            </div>
            <div className="social-link rounded-circle mx-2 d-flex justify-content-center align-items-center">
              <i className="fa-brands fa-facebook fa-xl"></i>
            </div>
            <div className="social-link rounded-circle mx-2 d-flex justify-content-center align-items-center">
              <i className="fa-brands fa-twitter fa-xl"></i>
            </div>
            <div className="social-link rounded-circle mx-2 d-flex justify-content-center align-items-center">
              <i className="fa-brands fa-soundcloud fa-xl"></i>
            </div>
            <div className="social-link rounded-circle mx-2 d-flex justify-content-center align-items-center">
              <i className="fa-brands fa-spotify fa-xl"></i>
            </div>
          </div>
        </div>
        <div className="row px-2 d-flex justify-content-between align-items-center secondRow">
          <div className="col-md-5 mx-1">
            <div className="row d-flex justify-content-between">
              <div className="col-md m-2 rounded smImage">Test</div>
              <div className="col-md m-2 rounded smImage">Test</div>
              <div className="col-md m-2 rounded smImage">Test</div>
            </div>
            <div className="row d-flex justify-content-between">
              <div className="col-md rounded m-2 smImage">Test</div>
              <div className="col-md rounded m-2 smImage">Test</div>
              <div className="col-md rounded m-2 smImage">Test</div>
            </div>
          </div>
          <div className="col-md-6">
            <img className="calendar" src={CalendarPlaceholder} />
            <img className="calendar mx-5" src={CalendarPlaceholder} />
          </div>
        </div>
        <div className="row rounded">
          <img src={MapPlaceholder} />
        </div>
      </div>
    </div>
  );
}
