import { TestBed } from '@angular/core/testing';

import { ServiceCustomerService } from './service-customer.service';

describe('ServiceCustomerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceCustomerService = TestBed.get(ServiceCustomerService);
    expect(service).toBeTruthy();
  });
});
