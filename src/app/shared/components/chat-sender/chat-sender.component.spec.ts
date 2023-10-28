import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatSenderComponent } from './chat-sender.component';

describe('ChatSenderComponent', () => {
  let component: ChatSenderComponent;
  let fixture: ComponentFixture<ChatSenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatSenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatSenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
