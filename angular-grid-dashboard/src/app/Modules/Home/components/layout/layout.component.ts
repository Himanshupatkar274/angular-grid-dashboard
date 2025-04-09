import { Component } from '@angular/core';
import { SharedModule } from '../../../Shared/Shared.module';
import { MatModule } from '../../../../Base/Mat.module';
import { HeaderComponent } from '../../../Shared/components/header/header.component';
import { FooterComponent } from '../../../Shared/components/footer/footer.component';
import { SidenavComponent } from '../sidenav/sidenav.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [SharedModule,HeaderComponent, FooterComponent, SidenavComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
