import { Component, OnInit, DoCheck } from "@angular/core";
import { Post } from "src/app/models/interface.interface";
import { PostService } from "src/app/service/post.service";

@Component({
  selector: "app-active-posts",
  templateUrl: "./active-posts.component.html",
  styleUrls: ["./active-posts.component.scss"],
})
export class ActivePostsComponent implements OnInit {
  posts!: Post[];

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.fetchData();
  }

  async fetchData() {
    this.posts = await this.postService.upPost();
  }

  onInactivePosts(id: number, index: number) {
    this.postService.updatePost({ active: false }, id);
    this.posts.splice(index, 1);
  }
}
