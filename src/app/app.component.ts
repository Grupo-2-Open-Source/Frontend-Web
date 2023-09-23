import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Frontend-Web-Application';
  options=[
    {path:'/login-tenant',title:'LOGIN1'},
    {path:'/login-owner',title:'LOGIN2'},
    {path:'/register-tenant',title: 'REGISTER1'},
    {path:'/register-owner',title: 'REGISTER2'},
  ]
}
