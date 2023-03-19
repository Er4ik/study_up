import { Component, OnInit } from '@angular/core';
import { AuthService } from './state/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private readonly authService: AuthService) {}

  async ngOnInit() {
    if (!this.authService.isAuthenticated()) {
      await this.authService.fetchToken();
    }
  }
}
