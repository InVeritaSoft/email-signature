import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./signature/signature.component').then(m => m.SignatureComponent)
  },
  {
    path: 'email-test',
    loadComponent: () => import('./signature-email-test/signature-email-test.component').then(m => m.SignatureEmailTestComponent)
  }
];

