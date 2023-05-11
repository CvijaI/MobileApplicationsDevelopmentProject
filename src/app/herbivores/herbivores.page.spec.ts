import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HerbivoresPage } from './herbivores.page';

describe('HerbivoresPage', () => {
  let component: HerbivoresPage;
  let fixture: ComponentFixture<HerbivoresPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HerbivoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
