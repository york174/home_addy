import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderActions } from '../header-actions/header-actions';

@Component({
  imports: [MatToolbarModule, HeaderActions],
  selector: 'app-header',
  standalone: true,
  template: `
    <mat-toolbar class="w-full bg-white border-b border-gray-100 h-20 px-6">
      <div class="max-w-[1280px] mx-auto w-full flex items-center justify-between">

        <!-- Logo de la empresa -->
        <div class="flex items-center gap-2 cursor-pointer">
          <img src="logo.png" alt="HomeAddy Logo" class="h-6 w-auto object-contain" />
          <span class="font-bold text-xl text-gray-900 tracking-tight">HomeAddy</span>
        </div>

        <!-- Menú de Navegación Central -->
        <nav class="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <a class="text-blue-600 border-b-2 border-blue-600 pb-1 cursor-pointer">Home</a>
          <a class="hover:text-blue-600 transition-colors cursor-pointer">Buy</a>
          <a class="hover:text-blue-600 transition-colors cursor-pointer">Rent</a>
          <a class="hover:text-blue-600 transition-colors cursor-pointer">About Us</a>
        </nav>

        <!-- Botón Login -->
        <app-header-actions></app-header-actions>

      </div>
    </mat-toolbar>
  `
})
export class Header {}
