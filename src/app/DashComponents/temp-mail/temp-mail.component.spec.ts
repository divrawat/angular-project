import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempMailComponent } from './temp-mail.component';

describe('TempMailComponent', () => {
  let component: TempMailComponent;
  let fixture: ComponentFixture<TempMailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TempMailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TempMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
