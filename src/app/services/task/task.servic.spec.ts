import { TestBed } from '@angular/core/testing';

import { TaskServic } from './task.servic';

describe('TaskServic', () => {
  let service: TaskServic;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskServic);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
