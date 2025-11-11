import React from 'react';
import './Clock.css';
import 'bootstrap/dist/css/bootstrap.min.css'; //Importa boostrap5
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; //Importa JavaScrip de Boostrap5

function Clock({ timezone, currentTime }) {
  const getTimeInTimezone = (date, offset) => {
    const utc = date.getTime() + (date.getTimezoneOffset() * 60000);
    return new Date(utc + (3600000 * offset));
  };

  const formatTime = (date) => {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  const localTime = getTimeInTimezone(currentTime, timezone.offset);

  return (
    <div className="container bg-danger border border-2 border-dark text-center"> {/*clock*/}
      <div className="row">
        <div className='col-xl-4 text-white fs-4'><p>{timezone.name}</p>
          </div>
        </div>{/*clock-label*/}
      <div className="row">
        <div className='col-xl-4 text-white fs-4'><p>{formatTime(localTime)}</p>
          </div>
        </div>{/*clock-time*/}
      <div className="col-xl-4 text-white fs-4"><div><p>UTC{timezone.offset >= 0 ? '+' : ''}{timezone.offset}</p></div></div>{/*clock-offset*/}
    </div>
  );
}

export default Clock;
