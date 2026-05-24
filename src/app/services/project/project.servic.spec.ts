import { TestBed } from '@angular/core/testing';

import { ProjectServic } from './project.servic';

describe('ProjectServic', () => {
  let service: ProjectServic;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectServic);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
