import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatIllustrationComponent } from './chat-illustration.component';

describe('ChatIllustrationComponent', () => {
  let component: ChatIllustrationComponent;
  let fixture: ComponentFixture<ChatIllustrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatIllustrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatIllustrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
