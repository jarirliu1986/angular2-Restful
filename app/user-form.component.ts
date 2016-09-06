import {Component} from "angular2/core";
import {ControlGroup, FormBuilder, Validators} from "angular2/common";

import {BasicValidators} from "./basicValidators";
import {CanDeactivate, Router} from "angular2/router";
import {UserService} from "./users.service";

@Component({
    templateUrl:'app/user-form.component.html',
    providers: [UserService]
})
export class UserFormComponent implements CanDeactivate{
    form : ControlGroup;

    constructor(fb : FormBuilder, private _router: Router, private _userService: UserService){
        this.form = fb.group({
            name: ['', Validators.required],
            email: ['', BasicValidators.email],
            phone: [],
            address: fb.group({
                street: [],
                suite: [],
                city: [],
                zipcode: []
            })
        });
    }

    routerCanDeactivate(){
        if (this.form.dirty){
            return confirm('You have made some unsaved changes, are you sure want to leave this page?');
        }
        return true;
    }

    save(){
        this._userService.addUser(this.form.value).subscribe(x => {
            //set this.form.markAsPristine()
            this._router.navigate(['Users']);
        });
    }
}