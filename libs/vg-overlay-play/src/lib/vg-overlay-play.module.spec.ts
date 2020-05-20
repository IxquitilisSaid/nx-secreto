import { async, TestBed } from '@angular/core/testing';
import { VgOverlayPlayModule } from './vg-overlay-play.module';

describe('VgOverlayPlayModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [VgOverlayPlayModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(VgOverlayPlayModule).toBeDefined();
  });
});
