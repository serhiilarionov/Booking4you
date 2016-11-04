import { Component, trigger, state, style, transition, animate } from '@angular/core';
import { SocketService } from '../../shared/index';

@Component({
  selector: 'user-notify',
  templateUrl: 'scripts/parts/notify/notify.component.html',
  styleUrls: ['scripts/parts/notify/notify.component.css'],
  animations: [
    trigger('messageInOut', [
      state('hidden', style({ transform: 'translateX(100%)', display: 'none' })),
      transition('* => hidden', [
        animate('200ms ease-out')
      ]),
      transition('void => *', [
        style({transform: 'translateX(100%)'}),
        animate('200ms ease-in')
      ])
    ])
  ]
})

export class UserNotify {
  public messageList: Array<Object> = [];

  constructor(private notifySocket: SocketService) {

      this.notifySocket.response.subscribe((data) => {
          this.messageList.push({message: data, state: 'in'});
      });

  };

  hideNotice(notice) {
    notice.state = 'hidden';
  }
}
