import { Component, OnInit } from '@angular/core';
import { PostService } from "src/app/service/post.service";





@Component({
  selector: 'app-active-posts',
  templateUrl: './inactive-posts.component.html',
  styleUrls: ['./inactive-posts.component.scss']
})
export class InactivePostsComponent implements OnInit {
data: any =[];

  constructor(private PostService: PostService) {}

  fetchData() {
    this.PostService.fetchData().subscribe(
      (data) => {
        console.log(data);
        this.data = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }


  ngOnInit(): void {
    this.fetchData();
  }

}
