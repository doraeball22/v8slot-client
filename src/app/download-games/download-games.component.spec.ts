import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadGamesComponent } from './download-games.component';

describe('DownloadGamesComponent', () => {
  let component: DownloadGamesComponent;
  let fixture: ComponentFixture<DownloadGamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownloadGamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
