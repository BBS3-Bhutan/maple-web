import React, {useEffect} from 'react';
import CleaningService from './CleaningService/CleaningService';
import WhyChooseUs from './WhyChooseUs/WhyChooseUs';
import HowWeWork from './HowWeWork/HowWeWork';
import OurServices from './OurServices/OurServices';
import BookingService from './BookingCleaningService/BookingService';
import {useLocation} from 'react-router-dom';

export default function Main() {
  const {pathname} = useLocation();

  useEffect(() => {
    window.scrollTo({top: 0, behavior: 'smooth', left: 0});
  }, [pathname]);

  return (
    <div>
      <CleaningService/>
      <WhyChooseUs/>
      <HowWeWork/>
      <OurServices/>
      <BookingService/>
    </div>
  );
}
