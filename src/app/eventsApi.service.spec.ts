import { TestBed } from '@angular/core/testing';

import { EventsApiService } from './eventsApi.service';

describe('EventsApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EventsApiService = TestBed.get(EventsApiService);
    expect(service).toBeTruthy();
  });
});
