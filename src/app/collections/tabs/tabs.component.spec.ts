import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TAbsComponent } from './tabs.component';

describe('TAbsComponent', () => {
  let component: TAbsComponent;
  let fixture: ComponentFixture<TAbsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TAbsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TAbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
