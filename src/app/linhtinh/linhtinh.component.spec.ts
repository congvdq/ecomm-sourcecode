import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinhtinhComponent } from './linhtinh.component';

describe('LinhtinhComponent', () => {
  let component: LinhtinhComponent;
  let fixture: ComponentFixture<LinhtinhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinhtinhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinhtinhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
