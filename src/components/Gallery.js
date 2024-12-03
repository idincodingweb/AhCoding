import React from 'react';
import '../assets/style/Gallery.css'

const Gallery = () => {
  const images = [
    'https://images.pexels.com/photos/177598/pexels-photo-177598.jpeg',
    'https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg',
    'https://images.pexels.com/photos/5475752/pexels-photo-5475752.jpeg',
    'https://images.pexels.com/photos/3888151/pexels-photo-3888151.jpeg',
  ];

  return (
    <section className="gallery">
      <h2>Gallery</h2>
      <div className="image-grid">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Gallery item ${index + 1}`} />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
