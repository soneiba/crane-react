import React, { useEffect, useState } from 'react';

const CalendarCarousel = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    $('.owl-carousel').owlCarousel({
      items: 7,
      loop: true,
      margin: 10,
      nav: true,
      navText: ["<",">"],
      responsive: {
        0: {
          items: 1,
        },
        640: {
          items: 3,
        },
        768: {
          items: 5,
        },
        1024: {
          items: 7,
        },
        1200: {
          items: 7,
        }, 
      },
    });
  }, []);

  const tarihler = Array.from({ length: 31 }, (_, index) => {
    const date = new Date();
    date.setDate(currentDate.getDate() + index);
    const dayNumber = date.getDate();
    const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });
    const customText = '77,879.00 KZT';
    return { dayNumber, dayName, customText };
  });

  return (
    <div className="carousel-container">
      <button className="prev-btn mb-8 mr-4" onClick={() => $('.owl-carousel').trigger('prev.owl.carousel')}>
        Previous
      </button>
      <div className="owl-carousel">
        {tarihler.map((tarih, index) => (
          <div className="item" key={index}>
            <div className="day-number">{tarih.dayNumber}</div>
            <div className="day-name">{tarih.dayName}</div>
            <div className="custom-text">{tarih.customText}</div>
          </div>
        ))}
      </div>
      <button className="next-btn mb-8 ml-4" onClick={() => $('.owl-carousel').trigger('next.owl.carousel')}>
        Next
      </button>
    </div>
  );
};

export default CalendarCarousel;