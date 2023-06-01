import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/interface.interface';
import { PostService } from "src/app/service/post.service";





@Component({
  selector: 'app-active-posts',
  templateUrl: './inactive-posts.component.html',
  styleUrls: ['./inactive-posts.component.scss']
})
export class InactivePostsComponent implements OnInit {
posts!: Post[];

  constructor(private postService: PostService) {}
  ngOnInit(): void {
    this.fetchData();
  }

  async fetchData() {
    this.posts = await this.postService.upPost();
  }

  onActivePosts(id: number, index: number) {
    this.postService.updatePost({active:true}, id);
    this.posts.splice(index, 1);
  }
}
