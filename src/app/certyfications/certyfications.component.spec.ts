import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertyficationsComponent } from './certyfications.component';

describe('CertyficationsComponent', () => {
  let component: CertyficationsComponent;
  let fixture: ComponentFixture<CertyficationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertyficationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertyficationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
