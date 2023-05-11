import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OmnivoresPage } from './omnivores.page';

describe('OmnivoresPage', () => {
  let component: OmnivoresPage;
  let fixture: ComponentFixture<OmnivoresPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OmnivoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
