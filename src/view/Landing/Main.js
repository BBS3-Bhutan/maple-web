import React from 'react';
import CleaningService from './CleaningService/CleaningService';
import WhyChooseUs from './WhyChooseUs/WhyChooseUs';
import HowWeWork from './HowWeWork/HowWeWork';
import OurServices from './OurServices/OurServices';
import BookingService from './BookingCleaningService/BookingService';

export default function Main() {
  return (
    <div>
      <CleaningService />
      <WhyChooseUs />
      <HowWeWork/>
      <OurServices/>
      <BookingService/>
    </div>
  );
}
