import { NgModule } from "@angular/core";
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'; // Optional for form inputs

const materialModules = [
  MatSidenavModule,
  MatIconModule,
  MatTooltipModule,
  MatProgressBarModule,
  MatToolbarModule,
  MatListModule,
  MatButtonModule,
  MatPaginatorModule,
  MatDialogModule,
  MatCardModule,
  MatDividerModule,
  MatTableModule,
  MatCheckboxModule,
  MatChipsModule,
  MatFormFieldModule,
  MatInputModule
];

@NgModule({
  imports: [...materialModules], // ✅ FIX: Spread the array
  exports: [...materialModules],
})
export class MatModule { }
