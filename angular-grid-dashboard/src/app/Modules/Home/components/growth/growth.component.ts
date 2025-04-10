import { Component } from '@angular/core';
import { SharedModule } from '../../../Shared/Shared.module';

@Component({
  selector: 'app-growth',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './growth.component.html',
  styleUrl: './growth.component.scss'
})
export class GrowthComponent {

}
