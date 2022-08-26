import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CrudComponent } from './crud.component';
import { UserService } from 'src/app/services/user.service';
import { HttpClient } from '@angular/common/http';
import { userdata } from 'src/app/services/users';
import { tap } from 'rxjs';
import { user } from 'src/app/services/user';
describe('CrudComponent', () => {
  let component: CrudComponent;
  let fixture: ComponentFixture<CrudComponent>;
  let service: UserService;
  let httpMock: HttpTestingController;
  let tusers: userdata[];
  let userapi= "api/tusers";
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [CrudComponent],
      providers: [UserService]
    })
      .compileComponents();

    service = TestBed.inject(UserService);
    httpMock = TestBed.inject(HttpTestingController);
    fixture = TestBed.createComponent(CrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  tusers:[{
    id: 101, name: 'Raj', email: 'raj@example.com', password: 'rajpass'
  }]

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should get username', () => {
    expect(service.getUsers()).not.toBeNull();
    // console.log(service.getUsers().subscribe(user=>user));
  })
});
