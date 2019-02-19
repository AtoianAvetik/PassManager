import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-angular-material',
    templateUrl: './angular-material.component.html',
    styleUrls: ['./angular-material.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class AngularMaterialComponent {
    options: FormGroup;

    constructor(fb: FormBuilder) {
        this.options = fb.group({
            color: 'primary',
            fontSize: [16, Validators.min(10)],
        });
    }

    getFontSize() {
        return Math.max(10, this.options.value.fontSize);
    }
}
