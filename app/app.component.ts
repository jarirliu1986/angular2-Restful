import {Component} from 'angular2/core';
// import {OnInit} from 'angular2/core';
// import {PostService} from "./post.service";
// import {HTTP_PROVIDERS} from "angular2/http";

@Component({
    selector: 'my-app',
    template: '<h1>My First Angular 2 App</h1>'
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