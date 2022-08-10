import Main from '../view/Landing/Main';
import OurServicePage from '../view/Landing/OurServices/OurServicePage';


export const routes = [
  {
    primaryText: 'Landing Component',
    path: '/',
    authorized: [''],
    component: <Main />,
  },
  {
    primaryText: 'Our Service Page',
    path: '/our-service-page',
    authorized: [''],
    component: <OurServicePage />,
  },
];
