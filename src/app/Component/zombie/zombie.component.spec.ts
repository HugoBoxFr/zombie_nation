import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZombieComponent } from './zombie.component';

describe('ZombieComponent', () => {
  let component: ZombieComponent;
  let fixture: ComponentFixture<ZombieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZombieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZombieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
