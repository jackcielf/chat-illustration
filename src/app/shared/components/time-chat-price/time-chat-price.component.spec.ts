import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeChatPriceComponent } from './time-chat-price.component';

describe('TimeChatPriceComponent', () => {
  let component: TimeChatPriceComponent;
  let fixture: ComponentFixture<TimeChatPriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeChatPriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeChatPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
