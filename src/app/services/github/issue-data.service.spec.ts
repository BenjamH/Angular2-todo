import { TestBed, inject } from '@angular/core/testing';

import { IssueDataService } from './issue-data.service';

describe('IssueDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IssueDataService]
    });
  });

  it('should ...', inject([IssueDataService], (service: IssueDataService) => {
    expect(service).toBeTruthy();
  }));
});
