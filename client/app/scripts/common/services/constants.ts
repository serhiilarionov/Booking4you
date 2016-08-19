import { Injectable } from '@angular/core';

@Injectable()
export class Constants {
  EMAIL_REGEX: string = '^(([a-zA-Z]|[0-9])|([-]|[_]|[.]))+[@](([a-zA-Z0-9])|([-])){2,63}[.](([a-zA-Z0-9]){2,63})+$';
  PASSWORD_MIN_LENGTH: number = 6;
}
