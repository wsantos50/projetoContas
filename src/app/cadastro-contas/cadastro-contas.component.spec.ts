import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroContasComponent } from './cadastro-contas.component';

describe('CadastroContasComponent', () => {
  let component: CadastroContasComponent;
  let fixture: ComponentFixture<CadastroContasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroContasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroContasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
