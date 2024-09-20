import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TextAreaModule } from '@syncfusion/ej2-angular-inputs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TextAreaModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
