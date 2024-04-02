import { TestBed } from '@angular/core/testing';

import { sharedService} from './shared-services.service';

describe('SharedServicesService', () => {
  let service: sharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(sharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
