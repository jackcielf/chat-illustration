import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-time-chat-price",
  templateUrl: "./time-chat-price.component.html",
  styleUrls: ["./time-chat-price.component.scss"],
})
export class TimeChatPriceComponent implements OnInit {
  @Input() time: string;
  @Input() price: number;
  @Input() sender = false;

  constructor() {}

  ngOnInit() {}
}
