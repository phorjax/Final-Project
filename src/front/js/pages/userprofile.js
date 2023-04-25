import React from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const UserProfile = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  return (
    <div className="container">
      <card style={{ width: "18rem" }}>
        <div className="card-body">
          Are you an {artist} or {venue}
        </div>
      </card>
    </div>
  );
};
