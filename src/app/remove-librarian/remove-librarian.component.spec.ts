import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveLibrarianComponent } from './remove-librarian.component';

describe('RemoveLibrarianComponent', () => {
  let component: RemoveLibrarianComponent;
  let fixture: ComponentFixture<RemoveLibrarianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveLibrarianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveLibrarianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
