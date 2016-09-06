import {Component, OnInit} from "angular2/core";
import {PostService} from "./post.service";
import {SpinnerComponent} from "./spinner.component";

@Component({
    templateUrl:'app/posts.component.html',
    directives: [SpinnerComponent],
    styles: [`
        .posts li { cursor: default; }
        .posts li:hover { background: #ecf0f1; } 
        .list-group-item.active, 
        .list-group-item.active:hover,
        .list-group-item.active:focus { 
            background-color: #ecf0f1;
            border-color: #ecf0f1; 
            color: #2c3e50;
        }
    `],
    providers: [PostService]
})

export class PostsComponent implements OnInit{
    posts = [];
    isLoading = true;
    currentPost;
    constructor(private _postService : PostService){
    }
    ngOnInit(){
        this._postService.getPosts()
            .subscribe( post => this.posts =  post,
                        null,
                        () => {this.isLoading = false});
    }

    select(post){
        this.currentPost = post;
    }
}