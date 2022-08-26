import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup.component';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupComponent ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
  xit('1 field filled,1 empty',()=>{
    const form = component.signupform;
    const prevals = {
      username: 'jayveer',
      pass: 'hello'
    }
    expect(form.value).toEqual(prevals);
  });
  xit('check entered values',()=>{
    const form: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#signupform').querySelectorAll('input')[0];
    form.value = 'jayveer';
    form.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    fixture.whenStable().then(()=>{
      const formval = component.signupform.get('username');
      expect<any>(form.value).toEqual(formval?.value);
      expect(formval?.errors).toBeNull();
    })
  });
  it('form submitted',()=>{
    fixture.detectChanges();
    const done = fixture.debugElement.nativeElement;
    const getform = fixture.debugElement.query(By.css('#signupform'));
    expect(getform.triggerEventHandler('submit',done)).toBeUndefined();
  });
  
});
