import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DataService } from './data.service';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [NgFor,RouterOutlet,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  posts: any[] = [];
  constructor(private dataService: DataService) {

  }
  ngOnInit(): void {
    this.dataService.getPost().subscribe(
      data => this.posts = data,
      error => console.error('Error fetching data:', error)
    );
  }

  }