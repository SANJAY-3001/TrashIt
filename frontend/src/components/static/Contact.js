import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import '../../assets/styles/Contact.css';
import 'leaflet/dist/leaflet.css';

const Contact = () => {
  return (
      <div className="contact-page">
          <h1 className="contact-header">Contact Us</h1>
          <div className="contact-content">
              <div className="contact-info">
                  <div className="contact-item">
                      <i className="fas fa-envelope contact-icon"></i>
                      <div className="contact-text">
                          <span className="contact-label">Email:</span>
                          <span className="contact-detail">contact@trashit.com</span>
                      </div>
                  </div>
                  <div className="contact-item">
                      <i className="fas fa-phone contact-icon"></i>
                      <div className="contact-text">
                          <span className="contact-label">Phone:</span>
                          <span className="contact-detail">+1 (555) 123-4567</span>
                      </div>
                  </div>
                  <div className="contact-item">
                      <i className="fas fa-map-marker-alt contact-icon"></i>
                      <div className="contact-text">
                          <span className="contact-label">Address:</span>
                          <span className="contact-detail">123 Green Street, Eco City, Earth</span>
                      </div>
                  </div>
              </div>
              <div className="contact-image">
                  <img src="https://img.freepik.com/free-photo/location-symbol-with-landscape-background_23-2149906278.jpg?t=st=1723305928~exp=1723309528~hmac=afd721357a2e2c8a3cab9bf1c3546c89809669765b19f1905056787d1e381fcf&w=996" alt="TrashIt Service Area" />
              </div>
          </div>
          <div className="map-container">
              <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
                  <TileLayer
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  />
                  <Marker position={[51.505, -0.09]}>
                      <Popup>
                          TrashIt Service Area.
                      </Popup>
                  </Marker>
              </MapContainer>
          </div>
      </div>
  );
}

export default Contact;
