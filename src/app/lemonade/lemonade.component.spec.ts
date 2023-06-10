import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LemonadeComponent } from './lemonade.component';

describe('LemonadeComponent', () => {
  let component: LemonadeComponent;
  let fixture: ComponentFixture<LemonadeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LemonadeComponent]
    });
    fixture = TestBed.createComponent(LemonadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
