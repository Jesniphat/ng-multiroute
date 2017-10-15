import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondadminComponent } from './secondadmin.component';

describe('SecondadminComponent', () => {
  let component: SecondadminComponent;
  let fixture: ComponentFixture<SecondadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
