import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from "@angular/core";
import { CasesComponent } from './cases.component';

describe('CasesComponent', () => {
  let component: CasesComponent;
  let fixture: ComponentFixture<CasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have default case = 1`, async(() => {
    const app = fixture.debugElement.componentInstance;
    expect(app.case).toEqual(1);
  }));

  it(`should be 3 buttons`, async(() => {
    const comp = new CasesComponent();
    let button = fixture.debugElement.nativeElement.querySelectorAll('button');
    expect(button.length).toEqual(3);
  }));

  it(`should have text Przypadek 3`, () => {
    const compiled = fixture.debugElement.nativeElement;
    const btn = compiled.querySelectorAll('button')[2];
    expect(btn.textContent).toEqual('Przypadek 3');
  });

  it(`should have num = 3`, () => {
    const compiled = fixture.debugElement.nativeElement;
    const btn = compiled.querySelectorAll('button')[2];
    btn.click();
    expect(component.case).toEqual(3);
  });
});
