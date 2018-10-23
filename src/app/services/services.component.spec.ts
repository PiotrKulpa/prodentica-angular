import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesComponent } from './services.component';

describe('ServicesComponent', () => {
  let component: ServicesComponent;
  let fixture: ComponentFixture<ServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have services class', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.services')).toBeTruthy();
  });

  it('should have services-hide class', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.services-hide')).toBeTruthy();
  });

  it('should not have default slide-bottom class', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.slide-bottom')).not.toBeTruthy();
  });

  it('should add slide-bottom class', () => {
    const compiled = fixture.debugElement.nativeElement;
    const btn = compiled.querySelector('.services');
    btn.click();
    expect(compiled.querySelector('.slide-bottom')).toBeTruthy();
  });
});
