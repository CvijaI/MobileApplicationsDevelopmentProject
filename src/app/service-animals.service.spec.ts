import { TestBed } from '@angular/core/testing';

import { ServiceAnimalsService } from './service-animals.service';

describe('ServiceAnimalsService', () => {
  let service: ServiceAnimalsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceAnimalsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});