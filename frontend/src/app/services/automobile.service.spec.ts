import { TestBed, inject } from '@angular/core/testing';

import { AutomobileService } from './automobile.service';

describe('AutomobileService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AutomobileService]
    });
  });

  it('should be created', inject([AutomobileService], (service: AutomobileService) => {
    expect(service).toBeTruthy();
  }));
});
