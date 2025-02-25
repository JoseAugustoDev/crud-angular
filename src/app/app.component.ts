import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatToolbarModule],
  templateUrl: './app.component.html',
  styleUrl: '../../node_modules/bootstrap/dist/css/bootstrap.css'
})
export class AppComponent {
  title = 'crud-angular';
}
