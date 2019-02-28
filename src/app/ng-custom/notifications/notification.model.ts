import { ComponentRef } from '@angular/core';

export class NgcNotification {
  type: NgcNotificationType;
  message: string;
  timeout: number;
  _ref: ComponentRef<NgcNotification>;
}

export enum NgcNotificationType {
  Success,
  Error,
  Info,
  Warning
}
