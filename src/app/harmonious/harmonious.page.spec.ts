import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HarmoniousPage } from './harmonious.page';

describe('HarmoniousPage', () => {
  let component: HarmoniousPage;
  let fixture: ComponentFixture<HarmoniousPage>;

  beforeEach(waitForAsync () => {
    fixture = TestBed.createComponent(HarmoniousPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
