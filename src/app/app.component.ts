import { Component, OnInit } from '@angular/core';
import { Post } from './post';
import { PostService } from './post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  posts: Post[];


  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getPosts()
      .subscribe(posts => 
        {this.posts = posts;
        console.log (this.posts)}
        
      )
    
  }

  // getPosts(): void {
  //   this.postService.getPosts()
  //     .subscribe(posts => 
  //       {this.posts = posts;
  //       console.log (this.posts)}
        
  //     )
  // }
  
}
