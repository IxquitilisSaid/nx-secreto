import { async, TestBed } from '@angular/core/testing';
import { VgImaAdsModule } from './vg-ima-ads.module';

describe('VgImaAdsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [VgImaAdsModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(VgImaAdsModule).toBeDefined();
  });
});
