import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularInitTemplateComponent } from './angular-init-template.component';

describe('AngularInitTemplateComponent', () => {
  let component: AngularInitTemplateComponent;
  let fixture: ComponentFixture<AngularInitTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularInitTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularInitTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
