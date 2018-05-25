import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  getPosts(): void {
    this.postService.getPosts()
    .subscribe(posts => this.posts = posts)
  }
  posts: Post[];
 
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getPosts();
  }

}
