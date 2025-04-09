import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { SharedModule } from '../../../Shared/Shared.module';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-edit-profile',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.scss'
})
export class EditProfileComponent {
  profileForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EditProfileComponent>
  ) {
    this.profileForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      phone: [''],
      bio: ['']
    });
  }
  onSave() {
    console.log('Form Data:', this.profileForm.value);
    this.dialogRef.close();
  }

  onCancel() {
    this.dialogRef.close();
  }
}
