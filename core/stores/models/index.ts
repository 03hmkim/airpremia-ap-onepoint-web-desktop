import { combineReducers } from 'redux';

import accident, { IAccidentState } from './accident';
import auth, { IAuthState } from './auth';
import common, { ICommonState } from './common';
import bookingSession, {
  IBookingSessionState,
} from './bookingSession';
import ui, { IUiState } from './ui';
import ssr, { ISsrState } from './ssr';
import booking, { IBookingState } from './booking';
import me, { IMeState } from './me';
import support, { ISupportState } from './support';
import notice, { INoticeState } from './notice';

export interface IStoreState {
  accident: IAccidentState;
  auth: IAuthState;
  bookingSession: IBookingSessionState;
  booking: IBookingState;
  common: ICommonState;
  ui: IUiState;
  ssr: ISsrState;
  me: IMeState;
  support: ISupportState;
  notice: INoticeState;
}

export default combineReducers<IStoreState>({
  accident,
  auth,
  common,
  ui,
  ssr,
  bookingSession,
  booking,
  me,
  support,
  notice,
});
