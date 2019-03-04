import { ComponentRef } from '@angular/core';

export class NgcNotification {
  type: NgcNotificationType;
  message: string;
  timeout: number;
  typeClass: string;
  aside: boolean;
  title: string;
  _ref: ComponentRef<NgcNotification>;
}

export enum NgcNotificationType {
  Success,
  Error,
  Info,
  Warning
}
