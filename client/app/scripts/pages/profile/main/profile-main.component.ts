import { Component } from '@angular/core';
import { Client, ClientApi, PASSWORD_MIN_LENGTH, CustomValidators } from '../../../shared/index';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'profile-main',
    templateUrl: 'scripts/pages/profile/main/profile-main.component.html',
    styleUrls: ['scripts/pages/profile/main/profile-main.component.css']
})
export class ProfileMainComponent {
    public submitted: boolean = false;
    public success: boolean = false;
    public passwordMinLength: number = PASSWORD_MIN_LENGTH;
    private currentUser: Client;
    private changePassForm: FormGroup;

    constructor(private clientApi: ClientApi, public formBuilder: FormBuilder) {
        this.currentUser = this.clientApi.getCachedCurrent();

        this.changePassForm = this.formBuilder.group({
            newPass: ['', Validators.compose([Validators.required, Validators.minLength(this.passwordMinLength)])],
            newPassConfirm: ['', Validators.required]
        }, {validator: CustomValidators.areEqual});
    }

    onSubmit() {
        this.submitted = true;
        if (this.changePassForm.valid) {
            this.clientApi.upsert({
                id: this.currentUser.id,
                password: this.changePassForm.value.newPass
            }).subscribe(() => { this.success = true; }, (error) => { console.log(error); });
        }
    }
}
