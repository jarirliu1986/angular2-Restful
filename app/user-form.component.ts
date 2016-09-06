import {Component, OnInit} from "angular2/core";
import {ControlGroup, FormBuilder, Validators} from "angular2/common";

import {BasicValidators} from "./basicValidators";
import {CanDeactivate, Router, RouteParams} from "angular2/router";
import {UserService} from "./users.service";
import {User} from "./user";

@Component({
    templateUrl:'app/user-form.component.html',
    providers: [UserService]
})
export class UserFormComponent implements OnInit, CanDeactivate{
    form : ControlGroup;
    title : string;
    user = new User();

    constructor(
        fb : FormBuilder,
        private _router: Router,
        private _routeParams: RouteParams,
        private _userService: UserService
    ){
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

    ngOnInit(){
        var id = this._routeParams.get('id');
        this.title = id ? "Edit User" : "New User";

        if (!id)
            return;
        
        this._userService.getUser(id).subscribe(
            user => this.user = user,
            response => {
                if(response.status == 404){
                    this._router.navigate(['NotFound']);
                }
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