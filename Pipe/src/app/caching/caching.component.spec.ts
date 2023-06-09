import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CachingComponent } from './caching.component';

describe('CachingComponent', () => {
  let component: CachingComponent;
  let fixture: ComponentFixture<CachingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CachingComponent]
    });
    fixture = TestBed.createComponent(CachingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
