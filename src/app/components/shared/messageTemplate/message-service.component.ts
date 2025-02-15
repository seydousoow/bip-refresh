import { Component, input } from '@angular/core';
import { Toast, ToastPositionType } from 'primeng/toast';

@Component({
  selector: 'bip-message-service',
  imports: [Toast],
  templateUrl: './message-service.component.html'
})
export class MessageServiceComponent {
  baseZIndex = input<number>(5000);
  hideTransitionOptions = input<string>('500ms');
  life = input<number>(3000);
  position = input<ToastPositionType>('top-right');
  preventOpenDuplicates = input<boolean>(true);
  showTransitionOptions = input<string>('500ms');
}
