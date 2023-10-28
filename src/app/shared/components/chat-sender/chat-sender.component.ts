import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-sender',
  templateUrl: './chat-sender.component.html',
  styleUrls: ['./chat-sender.component.scss']
})
export class ChatSenderComponent implements OnInit {
  @Input() chat: string;

  constructor() { }

  ngOnInit() {
  }

}
