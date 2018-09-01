import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShellComponent } from './home/shell.component';
import { WelcomeComponent } from './home/welcome.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: '/welcome', pathMatch: 'full' },
      {
        path: '', component: ShellComponent,
        children: [
          { path: 'welcome', component: WelcomeComponent }
        ]
      }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
