import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'forms-component',
    templateUrl: './app/forms.component.html'
})

export class FormsComponent {
    reactiveForm: FormGroup;

    constructor(formBuilder: FormBuilder) {
        this.reactiveForm = formBuilder.group({
            'username': 'john.doe',
            'password': 'pass1234'
        });
    }

    onSubmit(form: any): void {
        console.log('you submitted value:', form);
    }
}