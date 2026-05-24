import { TestBed } from '@angular/core/testing';

import { NotificationServic } from './notification.servic';

describe('NotificationServic', () => {
  let service: NotificationServic;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotificationServic);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
