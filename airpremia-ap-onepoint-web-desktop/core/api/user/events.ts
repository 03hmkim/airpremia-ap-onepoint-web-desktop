import { IGetUserEvent, IGetUserEvents } from './types';
import { CommonResp } from '../config';
import http from '../http';

export const getUserEvents = ({
  category,
}: IGetUserEvents) => {
  let path: string;
  switch (category) {
    case 'ing':
      path = 'on-going';
      break;
    case 'ended':
      path = 'terminated';
      break;
    case 'applied':
      path = 'me';
      break;
    default:
      path = 'on-going';
      break;
  }

  return http.get<void, CommonResp>(
    `/user/v1/events/${path}`,
  );
};

export const getUserEvent = ({ id }: IGetUserEvent) => {
  return http.get<void, CommonResp>(
    `/user/v1/events/${id}`,
  );
};
