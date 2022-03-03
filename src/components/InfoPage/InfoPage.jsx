import React from 'react';
import SnowStorm from 'react-snowstorm';
import { useDispatch, useSelector} from 'react-redux';

function InfoPage() {
  const timeCard = useSelector(store => store.timeCard);
  return (
    <div className="container">
      <SnowStorm />
      <h2>Route Progress</h2>
      {timeCard.map((times, index) => <ul><li key={index}>Date: {times.date} Clock In: {times.clock_in} Clock Out: {times.clock_out}</li></ul>)}
    </div>
  );
}

export default InfoPage;
