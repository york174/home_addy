import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Header } from './layout/header/header';

@Component({
  imports: [MatButtonModule, Header],
  selector: 'app-root',
  standalone: true,
  template: `
    <app-header></app-header>

    <main class="max-w-[1280px] mx-auto px-6 py-12 md:py-16">

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">


        <div class="lg:col-span-7 flex flex-col gap-8">
          <div class="max-w-[580px]">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-950 leading-[1.15] mb-6">
              Find the Perfect <span class="text-blue-600">Apartment</span> That Fits Your Lifestyle
            </h1>

            <button mat-stroked-button class="text-gray-900 border-gray-300 font-medium tracking-wide">
              Get Started
            </button>
          </div>

          <div class="w-full rounded-2xl overflow-hidden shadow-md border border-gray-100 aspect-[4/3] lg:aspect-[1.4/1]">
            <img src="sala1.png" alt="Interior de departamento de lujo" class="w-full h-full object-cover" />
          </div>
        </div>


        <div class="lg:col-span-5 flex flex-col gap-6 lg:pt-4">
          <p class="text-gray-500 text-sm leading-relaxed max-w-[420px] ml-auto">
            Step into luxury and comfort with our curated selection of apartments. Buy or rent, each space is designed to reflect your unique lifestyle. Find the key to your next home with us.
          </p>

          <div class="flex flex-col gap-4">
            <div class="w-full h-44 md:h-52 rounded-2xl overflow-hidden shadow-sm">
              <img src="sala2.png" alt="Terraza del departamento" class="w-full h-full object-cover" />
            </div>
            <div class="w-full h-44 md:h-52 rounded-2xl overflow-hidden shadow-sm">
              <img src="sala3.png" alt="Sala de estar moderna" class="w-full h-full object-cover" />
            </div>
            <div class="w-full h-44 md:h-52 rounded-2xl overflow-hidden shadow-sm">
              <img src="sala4.jpg" alt="Detalle comedor de lujo" class="w-full h-full object-cover" />
            </div>
          </div>
        </div>

      </div>
    </main>
  `
})
export class App {}
