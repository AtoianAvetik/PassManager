import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class NotificationService {

    constructor(private toastr: ToastrService) {
    }

    success(text) {
        this.toastr.success(text);
    }

    error(text) {
        this.toastr.error(text);
    }

    serverError() {
        this.toastr.error('Something went wrong. Please try again later or contact support', 'Server communication error.');
    }
}
