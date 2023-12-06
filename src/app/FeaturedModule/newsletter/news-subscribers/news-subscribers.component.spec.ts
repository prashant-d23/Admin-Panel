import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsSubscribersComponent } from './news-subscribers.component';

describe('NewsSubscribersComponent', () => {
  let component: NewsSubscribersComponent;
  let fixture: ComponentFixture<NewsSubscribersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsSubscribersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsSubscribersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
