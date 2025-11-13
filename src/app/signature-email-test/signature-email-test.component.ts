import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { SignatureComponent } from '../signature/signature.component';

@Component({
  selector: 'app-signature-email-test',
  standalone: true,
  imports: [],
  templateUrl: './signature-email-test.component.html',
  styleUrl: './signature-email-test.component.css'
})
export class SignatureEmailTestComponent implements OnInit {
  emailHtml: SafeHtml | null = null;
  emailSignature: SafeHtml | null = null;
  baseUrl: string = '';
  private signatureComponent: SignatureComponent;

  constructor(private sanitizer: DomSanitizer) {
    this.signatureComponent = new SignatureComponent();
  }

  ngOnInit(): void {
    this.updateEmailHtml();
  }

  updateEmailHtml(): void {
    const html = this.signatureComponent.generateEmailHtml(this.baseUrl);
    const signature = this.signatureComponent.generateEmailSignature(this.baseUrl);
    
    this.emailHtml = this.sanitizer.bypassSecurityTrustHtml(html);
    this.emailSignature = this.sanitizer.bypassSecurityTrustHtml(signature);
  }

  onBaseUrlChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.baseUrl = input.value;
    this.updateEmailHtml();
  }

  copyToClipboard(content: string): void {
    navigator.clipboard.writeText(content).then(() => {
      alert('Copied to clipboard!');
    }).catch(err => {
      console.error('Failed to copy:', err);
    });
  }

  getEmailHtmlString(): string {
    return this.signatureComponent.generateEmailHtml(this.baseUrl);
  }

  getEmailSignatureString(): string {
    return this.signatureComponent.generateEmailSignature(this.baseUrl);
  }
}

