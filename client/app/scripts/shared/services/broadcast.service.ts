import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class Broadcaster<T> extends EventEmitter<T> {}
