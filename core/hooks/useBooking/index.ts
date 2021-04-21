import useBookingSession from './useBookingSession';
import useBooking from './useBooking';

export default () => ({
  ...useBookingSession(),
  ...useBooking(),
});
