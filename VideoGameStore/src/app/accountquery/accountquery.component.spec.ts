import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountqueryComponent } from './accountquery.component';

describe('AccountqueryComponent', () => {
  let component: AccountqueryComponent;
  let fixture: ComponentFixture<AccountqueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountqueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountqueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
