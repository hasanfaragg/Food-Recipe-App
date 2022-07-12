import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
<<<<<<< HEAD
      declarations: [LoginComponent],
    }).compileComponents();
=======
      declarations: [ LoginComponent ]
    })
    .compileComponents();
>>>>>>> 6075a4ed9ab5957056518b9e11d5beea4779ffec

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
