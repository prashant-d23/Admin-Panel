import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsRecordsComponent } from './news-records.component';

describe('NewsRecordsComponent', () => {
  let component: NewsRecordsComponent;
  let fixture: ComponentFixture<NewsRecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsRecordsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
