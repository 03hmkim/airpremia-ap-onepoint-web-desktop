import moment from 'moment';
import { IInputData } from '../stores/models/auth';

export const formattingDate = (data: IInputData) => ({
  ...data,
  value: moment(data.value).format('YYYY.MM.DD'),
});
