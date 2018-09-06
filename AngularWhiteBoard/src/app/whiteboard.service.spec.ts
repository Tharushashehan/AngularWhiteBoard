import { TestBed, inject } from '@angular/core/testing';

import { WhiteboardService } from './whiteboard.service';

describe('WhiteboardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WhiteboardService]
    });
  });

  it('should be created', inject([WhiteboardService], (service: WhiteboardService) => {
    expect(service).toBeTruthy();
  }));
});
