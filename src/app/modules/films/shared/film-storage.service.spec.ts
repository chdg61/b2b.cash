import { TestBed } from '@angular/core/testing';

import { FilmStorageService } from './film-storage.service';

describe('FilmStorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FilmStorageService = TestBed.get(FilmStorageService);
    expect(service).toBeTruthy();
  });
});
