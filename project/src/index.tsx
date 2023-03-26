import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {offers} from './mocks/offers';
import {reviews} from './mocks/reviews';

const Setting = {
  HotelCount: 3,
} as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      hotelCount = {Setting.HotelCount}
      offers = {offers}
      reviews = {reviews}
    />
  </React.StrictMode>,
);
