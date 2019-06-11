import { TestBed } from '@angular/core/testing';

import { FilmsApiService } from './films-api.service';

describe('FilmsApiService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: FilmsApiService = TestBed.get(FilmsApiService);
        expect(service).toBeTruthy();
    });
});
