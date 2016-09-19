export const BASE_URL = 'http://localhost:3000';
export const API_VERSION = 'api';
export const EMAIL_REGEX: string = '^(([a-zA-Z]|[0-9])|([-]|[_]|[.]))+[@](([a-zA-Z0-9])|([-])){2,63}[.](([a-zA-Z0-9]){2,63})+$';
export const PASSWORD_MIN_LENGTH: number = 5;

export const EventTypes: any = {
  LOGGED_IN: 'LOGGED_IN',
  LOGGED_OUT: 'LOGGED_OUT'
};
