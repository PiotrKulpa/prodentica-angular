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

  it('should have length = 70', () => {
    expect(component.certs.length).toEqual(70);
  });

  it('should have class cert-thumb', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.cert-thumb')).toBeTruthy();
  });

  it('should have cert-thumb elements = certs', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('.cert-thumb').length).toEqual(component.certs.length);
  });

  it('should test 2nd cert-thumb', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('.cert-thumb')[1]).toBeTruthy();
  });
});
