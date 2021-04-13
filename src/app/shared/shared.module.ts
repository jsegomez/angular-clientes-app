import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Componentes
import { NotFoundComponent } from './not-found/not-found.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';

// Directivas
import { ErrorMsgDirective } from './directives/error-msg.directive';
import { AnimacionesDirective } from './directives/animaciones.directive';

@NgModule({
  declarations: [
    NotFoundComponent,    
    FooterComponent,
    SidebarComponent,
    HeaderComponent,
    ErrorMsgDirective,
    AnimacionesDirective
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    NotFoundComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ErrorMsgDirective,
    AnimacionesDirective
  ]
})
export class SharedModule { }
