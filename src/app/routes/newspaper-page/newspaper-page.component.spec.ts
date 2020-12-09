import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewspaperPageComponent } from './newspaper-page.component';

describe('NewspaperPageComponent', () => {
  let component: NewspaperPageComponent;
  let fixture: ComponentFixture<NewspaperPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewspaperPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewspaperPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
