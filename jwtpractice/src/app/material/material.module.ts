import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule, MatFormFieldModule, MatButtonModule } from '@angular/material';

const Materials = [
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule
];

@NgModule({
  imports: Materials,
  exports: Materials,
})
export class MaterialModule { }
