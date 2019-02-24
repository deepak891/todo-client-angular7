import { TestBed } from '@angular/core/testing';

import { HttpInterceperBasicAuthService } from './http-interceper-basic-auth.service';

describe('HttpInterceperBasicAuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpInterceperBasicAuthService = TestBed.get(HttpInterceperBasicAuthService);
    expect(service).toBeTruthy();
  });
});
