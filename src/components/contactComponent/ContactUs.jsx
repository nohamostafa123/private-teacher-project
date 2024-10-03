import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./contactUs.css";
import "./contactUs.scss";
<link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
  rel="stylesheet"
  integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
  crossorigin="anonymous"
/>;

export default function ContactUs() {
  useEffect(() => {
    // Check if the map is already initialized
    if (L.DomUtil.get("map") !== null) {
      L.DomUtil.get("map")._leaflet_id = null;
    }

    // Initialize the map and set view to Cairo
    var map = L.map("map").setView([30.0444, 31.2357], 13);

    // Add OpenStreetMap tile layer
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Add marker for Cairo
    L.marker([30.0444, 31.2357])
      .addTo(map)
      .bindTooltip(
        "<strong>Welcome to Cairo</strong><br/>مرحبا بك في القاهرة",
        {
          permanent: true,
          direction: "top",
        }
      )
      .openTooltip();
  }, []);

  return (
    <section className="contact">
      <div className="info container-fluid">
        <div className="row gx-6 mx-5">
          <div className="info_block col-lg-4 col-md-6 col-xs-12">
            <span className="fa fa-envelope"></span>
            <div className="text">
              <h2>E-mail</h2>
              <h3>info@tqniait.com</h3>
              <h3>info@tqniait.com</h3>
            </div>
          </div>

          <div className="info_block col-lg-4 col-md-6 col-xs-12">
            <span className="fa fa-phone"></span>
            <div className="text">
              <h2>Phone</h2>
              <h3>موقع مدرس خصوصي</h3>
              <h3>Private Teacher Site</h3>
            </div>
          </div>

          <div className="info_block col-lg-4 col-md-6 col-xs-12">
            <span className="fa fa-map-marker-alt"></span>
            <div className="text">
              <h2>Our Location</h2>
              <h3>Your best choice for your Private Teacher</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid contact_form mt-5">
        <div className="container-fluid">
          <div className="title">
            <h1>Stay in touch with us</h1>
            <h3>Write a message:</h3>
            <hr />
          </div>

          <div className="container-fluid row mt-5 justify-content-between">
            <div className="col-md-6 col-xs-12 col-sm-12">
              <form className="row gy-2 mb-5">
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Title"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    placeholder="Mail or Phone"
                  />
                </div>
                <div className="col-12">
                  <textarea
                    className="form-control"
                    id="message"
                    rows="2"
                    placeholder="The message"
                  ></textarea>
                </div>
                <div className="col-12">
                  <button type="submit" className="btn btn-primary">
                    Send
                  </button>
                </div>
              </form>
            </div>

            <div className="col-md-12 col-xs-12 col-sm-12">
              {/* Map container */}
              <div id="map" style={{ height: "400px" }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
