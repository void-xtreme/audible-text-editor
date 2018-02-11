import { TestBed, inject } from '@angular/core/testing';

import { FestivalService } from './festival.service';

describe('FestivalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FestivalService]
    });
  });

  it('should be created', inject([FestivalService], (service: FestivalService) => {
    expect(service).toBeTruthy();
  }));
});
