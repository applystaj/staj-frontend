import React from 'react';
import './index.css';
import { brandsData } from '../../dummy-data/brands'; //dummy data olusturuyoruz
import gorsel1 from '../../assets/logos/google_play.png'
import gorsel2 from '../../assets/logos/app_store.png'

function Brand() {
  return (
    <div className="brand-section">
      <h2>Our brands</h2>
      <div className="brands">
        {brandsData.map((brand) => (
          <div className="brand" key={brand.id}>
            <img src={require(`../../assets/${brand.imagePath}`)} alt={brand.name} />
          </div>
        ))}
      </div>
      <h2>Download our apps!</h2>
      <div className="download-buttons">
        <button className="app-store">
          <img src={gorsel1} alt="App Store" className="store-logo" />
          Download on the App Store
        </button>
        <button className="google-play">
          <img src={gorsel2} alt="Google Play" className="store-logo" />
          Get it on Google Play
        </button>
      </div>
    </div>
  );
}

export default Brand;
