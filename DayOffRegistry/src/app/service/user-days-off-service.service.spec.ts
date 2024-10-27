import { TestBed } from '@angular/core/testing';

import { UserDaysOffServiceService } from './user-days-off-service.service';

describe('UserDaysOffServiceService', () => {
  let service: UserDaysOffServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserDaysOffServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
