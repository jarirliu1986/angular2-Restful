System.register(['angular2/core', "./navbar.component", "angular2/router", "./home.component", "./users.component", "./posts.component", "./user-form.component", "./not-found.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, navbar_component_1, router_1, home_component_1, users_component_1, posts_component_1, user_form_component_1, not_found_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (navbar_component_1_1) {
                navbar_component_1 = navbar_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (users_component_1_1) {
                users_component_1 = users_component_1_1;
            },
            function (posts_component_1_1) {
                posts_component_1 = posts_component_1_1;
            },
            function (user_form_component_1_1) {
                user_form_component_1 = user_form_component_1_1;
            },
            function (not_found_component_1_1) {
                not_found_component_1 = not_found_component_1_1;
            }],
        execute: function() {
            // import {OnInit} from 'angular2/core';
            // import {PostService} from "./post.service";
            // import {HTTP_PROVIDERS} from "angular2/http";
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    router_1.RouteConfig([
                        { path: '/', name: 'Home', component: home_component_1.HomeComponent },
                        { path: '/users', name: 'Users', component: users_component_1.UsersComponent },
                        { path: '/users/:id', name: 'EditUser', component: user_form_component_1.UserFormComponent },
                        { path: '/users/new', name: 'NewUser', component: user_form_component_1.UserFormComponent },
                        { path: '/posts', name: 'Posts', component: posts_component_1.PostsComponent },
                        { path: '/not-found', name: 'NotFound', component: not_found_component_1.NotFoundComponent },
                        { path: '/*other', name: 'Other', redirectTo: ['Home'] }
                    ]),
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <navbar></navbar>\n        <div class=\"container\">\n            <router-outlet></router-outlet>\n        </div>\n    ",
                        directives: [navbar_component_1.NavBarComponent, router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
// export class AppComponent implements OnInit{
//     constructor(private _postService : PostService){
//         //this._postService.createPost({userId : 1, title : "a", body : "b"});
//     }
//     ngOnInit(){
//         this._postService.getPosts()
//             .subscribe(posts => console.log(posts));
//     }
// } 
//# sourceMappingURL=app.component.js.map