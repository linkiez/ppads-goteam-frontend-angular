import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroGameComponent } from './cadastro-game.component';

describe('CadastroGameComponent', () => {
  let component: CadastroGameComponent;
  let fixture: ComponentFixture<CadastroGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
