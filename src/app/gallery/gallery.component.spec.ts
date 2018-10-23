import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryComponent } from './gallery.component';

describe('GalleryComponent', () => {
  let component: GalleryComponent;
  let fixture: ComponentFixture<GalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load images', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('.gallery-img').length).toEqual(26);
  });

  it('should display loader', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#loader').style.display).toEqual('block');
  }));
});
