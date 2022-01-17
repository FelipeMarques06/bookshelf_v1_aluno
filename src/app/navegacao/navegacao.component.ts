import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-navegacao',
  templateUrl: './navegacao.component.html',
  styleUrls: ['./navegacao.component.scss']
})
export class NavegacaoComponent {
  //Itens do Menu Principal
  tituloNav = 'BookShelf V1';
  usuario={userName: 'Felipe Marques', icone:'remember_me'};

  //Itens da barra superior
  tituloBarra = '[Sua Estante Virtual]';

  //Itens de ícones e imagens de navegação
  iconeGeral = '../../assets/imagens/ShelfBook.png';
  lIcone = 80;
  aIcone = 80;

  //Controle das rotas do menu
  itensMenu = [
    {linkMenu:'/cdd', labelMenu:'Classes Dewey', hab: true},
    {linkMenu:'/feed', labelMenu:'Feed de Notícias', hab: false},
    {linkMenu:'/clube', labelMenu:'Páginas de Usuário', hab: false},
    {linkMenu:'/leitura', labelMenu:'Clubes de Leitura', hab: false},
    {linkMenu:'/estante', labelMenu:'Estante Particular', hab: false},
  ]



  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

}