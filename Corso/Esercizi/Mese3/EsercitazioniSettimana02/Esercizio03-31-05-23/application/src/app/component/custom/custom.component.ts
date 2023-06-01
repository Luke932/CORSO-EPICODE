import { Component, OnInit, Input } from "@angular/core";
import { Post } from "src/app/models/interface.interface";

@Component({
  selector: "app-custom",
  templateUrl: "./custom.component.html",
  styleUrls: ["./custom.component.scss"],
})
export class CustomComponent implements OnInit {
@Input() itemData!: Post;

  constructor() {}

  ngOnInit(): void {
  }

}

