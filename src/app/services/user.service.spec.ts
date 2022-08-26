import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserService } from './user.service';
import { userdata } from './users';
import { user } from './user';

describe('UserService', () => {
  let res: user[];
  let tusers: userdata[];
  let newusers: any=[];
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule], 
    providers: [UserService]
  }));
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
  });
  
  newusers = [{
      id: 101, name: 'Raj', email: 'raj@example.com', password: 'rajpass'
    }];

  xit('should be created', () => {
    expect(service).toBeTruthy();
  });
  xit('fetched users', () => {
    let result = service.getUsers().subscribe(users => { users
      // console.log(users.values);
      
      expect(users.length).toBe(4);
    });
    // expect(res).not.toBeNull();
    // expect(result).toEqual(newusers);
    // console.warn(result);
    expect(result).toBeTruthy();
  })
});
