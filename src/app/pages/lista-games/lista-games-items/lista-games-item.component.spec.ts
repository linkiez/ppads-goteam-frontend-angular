import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaGamesItemComponent } from './lista-games-item.component';

describe('ListaGamesItemComponent', () => {
  let component: ListaGamesItemComponent;
  let fixture: ComponentFixture<ListaGamesItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaGamesItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaGamesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
