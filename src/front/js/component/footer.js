import React, { Component } from "react";

export const Footer = () => (
  <footer className="footer mt-auto py-3  footerbackground text-center text-white">
    <div className="footer">
      <div className="container p-4 pb-0">
        <section className="mb-4">
          <a className=" btn-floating m-1" href="#!" role="button">
            <i className="fab fa-facebook-f iconfooter"></i>
          </a>

          <a className=" btn-floating m-1" href="#!" role="button">
            <i className="fab fa-twitter  iconfooter"></i>
          </a>

          <a className=" btn-floating m-1" href="#!" role="button">
            <i className="fab fa-instagram  iconfooter"></i>
          </a>

          <a className=" btn-floating m-1" href="#!" role="button">
            <i className="fab fa-linkedin-in  iconfooter"></i>
          </a>
        </section>
      </div>

      <div className="text-center p-3" style={{ color: (137, 104, 205) }}>
        @4Geeks by: Sean, Anthony, Jean, Sierra
      </div>
    </div>
  </footer>
);
