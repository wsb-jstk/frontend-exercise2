import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookSearchCriteriaComponent } from './book-search-criteria.component';

describe('BookSearchCriteriaComponent', () => {
  let component: BookSearchCriteriaComponent;
  let fixture: ComponentFixture<BookSearchCriteriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookSearchCriteriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookSearchCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
