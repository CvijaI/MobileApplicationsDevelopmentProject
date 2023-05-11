import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarnivoresPage } from './carnivores.page';

describe('CarnivoresPage', () => {
  let component: CarnivoresPage;
  let fixture: ComponentFixture<CarnivoresPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CarnivoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
