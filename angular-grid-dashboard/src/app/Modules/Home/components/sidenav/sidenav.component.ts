import { Component } from '@angular/core';
import { SharedModule } from '../../../Shared/Shared.module';
import { MenuItems } from '../../../../Base/Model/Constents/navigation';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {

  menuItems: any[] = MenuItems
}
