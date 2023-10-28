import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-receiver',
  templateUrl: './chat-receiver.component.html',
  styleUrls: ['./chat-receiver.component.scss']
})
export class ChatReceiverComponent implements OnInit {
  @Input() chat: string;
  
  constructor() { }

  ngOnInit() {
  }

}
