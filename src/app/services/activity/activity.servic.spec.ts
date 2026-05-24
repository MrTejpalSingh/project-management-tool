import { TestBed } from '@angular/core/testing';

import { ActivityServic } from './activity.servic';

describe('ActivityServic', () => {
  let service: ActivityServic;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActivityServic);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
