import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../Shared.module';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-under-development',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './under-development.component.html',
  styleUrl: './under-development.component.scss'
})
export class UnderDevelopmentComponent implements OnInit {
  // This component is used to show a message that the page is under development.

  constructor(private route: Router) {}
  urlField: string = '';
  ngOnInit() {
    this.urlField = this.route.url.split('/')[1].split('')[0].toUpperCase() + this.route.url.split('/')[1].slice(1);
  }
}
