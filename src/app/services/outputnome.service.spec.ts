import { TestBed } from '@angular/core/testing';

import { OutputnomeService } from './outputnome.service';

describe('OutputnomeService', () => {
  let service: OutputnomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OutputnomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
