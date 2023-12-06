import { TestBed } from '@angular/core/testing';

import { AppProjectInterceptor } from './app-project.interceptor';

describe('AppProjectInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AppProjectInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: AppProjectInterceptor = TestBed.inject(AppProjectInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
