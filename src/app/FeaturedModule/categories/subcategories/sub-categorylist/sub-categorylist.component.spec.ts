import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCategorylistComponent } from './sub-categorylist.component';

describe('SubCategorylistComponent', () => {
  let component: SubCategorylistComponent;
  let fixture: ComponentFixture<SubCategorylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubCategorylistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubCategorylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
