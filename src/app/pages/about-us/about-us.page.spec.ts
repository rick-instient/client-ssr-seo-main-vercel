import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsPage } from './about-us.page';

describe('AboutUsPage', () => {
  let component: AboutUsPage;
  let fixture: ComponentFixture<AboutUsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutUsPage ],
      imports: []
    }).compileComponents();

    fixture = TestBed.createComponent(AboutUsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
