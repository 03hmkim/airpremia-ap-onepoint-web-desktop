import useBooking from './useBooking';
import useBookingSession from './useBookingSession';

function index() {
  return {
    ...useBooking(),
    ...useBookingSession(),
  };
}

export default index;
