import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  imports: [MatButtonModule],
  selector: 'app-header-actions',
  standalone: true,
  template: `
    <div>
      <button mat-flat-button color="primary" class="font-medium shadow-sm">
        Login
      </button>
    </div>
  `
})
export class HeaderActions {}
