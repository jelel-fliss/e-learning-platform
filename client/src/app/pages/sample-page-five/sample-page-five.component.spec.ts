import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplePageFiveComponent } from './sample-page-five.component';

describe('SamplePageFiveComponent', () => {
  let component: SamplePageFiveComponent;
  let fixture: ComponentFixture<SamplePageFiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamplePageFiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamplePageFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
