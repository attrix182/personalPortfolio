import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMeCardComponent } from './about-me-card.component';

describe('AboutMeCardComponent', () => {
  let component: AboutMeCardComponent;
  let fixture: ComponentFixture<AboutMeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutMeCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutMeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
