import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutDesignComponent } from './layout-design.component';

describe('LayoutDesignComponent', () => {
  let component: LayoutDesignComponent;
  let fixture: ComponentFixture<LayoutDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutDesignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
