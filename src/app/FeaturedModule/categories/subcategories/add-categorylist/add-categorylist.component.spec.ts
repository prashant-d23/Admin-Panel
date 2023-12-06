import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCategorylistComponent } from './add-categorylist.component';

describe('AddCategorylistComponent', () => {
  let component: AddCategorylistComponent;
  let fixture: ComponentFixture<AddCategorylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCategorylistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCategorylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
