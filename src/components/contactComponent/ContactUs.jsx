import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './contactUs.css';

export default function ContactUs() {
  useEffect(() => {
    // Initialize the map and set view to Cairo
    var map = L.map('map').setView([30.0444, 31.2357], 13);

    // Add OpenStreetMap tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Add marker for Cairo
    L.marker([30.0444, 31.2357]).addTo(map)
      .bindTooltip('<strong>Welcome to Cairo</strong><br/>مرحبا بك في القاهرة', {
        permanent: true,
        direction: 'top',
      })
      .openTooltip();
  }, []);

  return (
    <section className="contact">
      <div className="info">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="info_block">
                <span className="fa fa-envelope"></span>
                <div class="text">
                <h2>البريد الألكتروني</h2>
                <h3>info@tqniait.com</h3>
                <h3>info@tqniait.com</h3>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="info_block">
              <span className="fa fa-phone"></span>
              <div className="text">
                <h2>رقم الجوال</h2>
                <h3>موقع مدرس خصوصي</h3>
                <h3>Private Teacher Site</h3>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 col-xs-12">
            <div className="info_block">
              <span className="fa fa-map-marker-alt"></span>
              <div className="text">
                <h2>موقعنا</h2>
                <h3>إختيارك الأفضل لمدرسك الخصوصي</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="contact_form">
      <div className="container-fluid">
        <div className="title">
          <h1>أبقى على تواصل معنا</h1>
          <h3>أكتب رسالة : </h3>
          <hr />
        </div>
        <div className="row">
          <div className="col-md-6 col-sm-6 col-xs-12">
            <form action="contactUs.html" method="POST">
              <input
                type="hidden"
                name="_token"
                value="XXZeFMnYLuR6UzUaZMrUeexF95SKYCu3WgY3I2zf"
              />
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  required
                  className="form-control"
                  placeholder="الأسم"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="keyword"
                  required
                  className="form-control"
                  placeholder="البريد أو الهاتف"
                />
              </div>
              <div className="form-group">
                <textarea
                  className="form-control"
                  name="msg"
                  required
                  placeholder=" الرسالة"
                ></textarea>
              </div>
              <div className="form-group">
                <input type="submit" className="btn" value="إرسال" />
              </div>
            </form>
          </div>
          <div className="col-md-6 col-sm-6 col-xs-12">
            {/* Map container */}
            <div id="map" style={{ height: '400px' }}></div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
}

