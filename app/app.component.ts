import {Component} from 'angular2/core';
import {NavBarComponent} from "./navbar.component";
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";

import {HomeComponent} from "./home.component";
import {UsersComponent} from "./users.component";
import {PostsComponent} from "./posts.component";
// import {OnInit} from 'angular2/core';
// import {PostService} from "./post.service";
// import {HTTP_PROVIDERS} from "angular2/http";
@RouteConfig([
    {path: '/', name: 'Home', component: HomeComponent},
    {path: '/users', name: 'Users', component:UsersComponent},
    {path: '/posts', name: 'Posts', component: PostsComponent},
    {path: '/*other', name: 'Other', redirectTo: ['Home']}
])
@Component({
    selector: 'my-app',
    template: `
        <navbar></navbar>
        <div class="container">
            <router-outlet></router-outlet>
        </div>
    `,
    directives:[NavBarComponent, ROUTER_DIRECTIVES]
    //providers : [PostService, HTTP_PROVIDERS]
})
export class AppComponent{}

// export class AppComponent implements OnInit{
//     constructor(private _postService : PostService){
//         //this._postService.createPost({userId : 1, title : "a", body : "b"});
//     }
//     ngOnInit(){
//         this._postService.getPosts()
//             .subscribe(posts => console.log(posts));
//     }
// }