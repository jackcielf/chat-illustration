import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-header-avatar",
  templateUrl: "./header-avatar.component.html",
  styleUrls: ["./header-avatar.component.scss"],
})
export class HeaderAvatarComponent implements OnInit {
  @Input() name: string;

  constructor() {}

  ngOnInit() {}
}
