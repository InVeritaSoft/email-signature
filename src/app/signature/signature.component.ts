import { Component } from '@angular/core';

@Component({
  selector: 'app-signature',
  standalone: true,
  imports: [],
  templateUrl: './signature.component.html',
  styleUrl: './signature.component.css',
})
export class SignatureComponent {
  // Image assets
  readonly imageUrl = 'assets/f629c4c2df25111d7773a91610d6528d1a8cb5bb.png';
  readonly logoUrl = 'assets/516f9476ae82f86dc9aed7edb53d662b1027a057.svg';
  readonly facebookIconUrl =
    'assets/86fe2a2a805b38a53a570fffbfcedff5bee14c6e.svg';
  readonly youtubeIconUrl =
    'assets/e954b2b256844b45a4312866e2427080e4f4680e.svg';
  readonly linkedInIconUrl =
    'assets/252ab1f841d7b12fa4ab683d55d5059552029ff1.svg';

  // Contact information
  readonly name = 'Zoryan Hudziy';
  readonly title = 'CEO, Co-founder Inverita';
  readonly linkedInText = 'Zoryan on LinkedIn';
  readonly linkedInUrl = 'https://www.linkedin.com/in/zoryan-hudziy';
  readonly websiteUrl = 'https://inveritasoft.com';
  readonly websiteText = 'inveritasoft.com';

  // Social media links
  readonly facebookUrl = 'https://www.facebook.com/inveritasoft';
  readonly youtubeUrl = 'https://www.youtube.com/@inveritasoft';
  readonly linkedInSocialUrl = 'https://www.linkedin.com/company/inveritasoft';

  /**
   * Generates email-compatible HTML signature (body content only, for direct insertion)
   * @param baseUrl - Base URL for images (e.g., 'https://yourdomain.com' or 'https://cdn.yourdomain.com')
   * @returns HTML string ready for email clients (just the signature, no html/body tags)
   */
  generateEmailSignature(baseUrl: string = ''): string {
    // Convert relative asset paths to absolute URLs
    const getImageUrl = (relativePath: string) => {
      if (baseUrl) {
        return `${baseUrl.replace(/\/$/, '')}/${relativePath.replace(
          /^\//,
          ''
        )}`;
      }
      return relativePath; // Fallback to relative if no baseUrl provided
    };

    const portraitUrl = getImageUrl(this.imageUrl);
    const logoUrl = getImageUrl(this.logoUrl);
    const facebookIconUrl = getImageUrl(this.facebookIconUrl);
    const youtubeIconUrl = getImageUrl(this.youtubeIconUrl);
    const linkedInIconUrl = getImageUrl(this.linkedInIconUrl);

    return `<!-- Main Container Table -->
<table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="background-color: #fbfbfb; padding: 4px 3px; margin: 0 auto;">
  <tr>
    <td>
      <!-- Content Table -->
      <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #ffffff;">
        <tr>
          <!-- Left Column: Portrait and Logo -->
          <td valign="top" width="160" style="width: 160px; padding: 0; vertical-align: top;">
            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
              <!-- Portrait Image -->
              <tr>
                <td style="padding: 0;">
                  <img src="${portraitUrl}" alt="${this.name}" width="160" height="160" style="display: block; width: 160px; height: 160px; object-fit: cover; border: 0; outline: none; text-decoration: none;" />
                </td>
              </tr>
              <!-- Logo -->
              <tr>
                <td style="padding: 0;">
                  <img src="${logoUrl}" alt="Inverita logo" width="160" height="40" style="display: block; width: 160px; height: 40px; border: 0; outline: none; text-decoration: none;" />
                </td>
              </tr>
            </table>
          </td>
          
          <!-- Right Column: Contact Information -->
          <td valign="top" style="background-color: #cbcbcb; padding: 0; vertical-align: top;">
            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
              <!-- Contact Info Container -->
              <tr>
                <td style="background-color: #fbfbfb; padding: 20px; width: 100%;">
                  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                    <!-- Name -->
                    <tr>
                      <td style="padding: 0 0 4px 0;">
                        <p style="margin: 0; padding: 0; font-family: 'Montserrat', Arial, sans-serif; font-size: 20px; font-weight: 600; line-height: 28px; color: #101828;">
                          ${this.name}
                        </p>
                      </td>
                    </tr>
                    <!-- Title -->
                    <tr>
                      <td style="padding: 0;">
                        <p style="margin: 0; padding: 0; font-family: 'Montserrat', Arial, sans-serif; font-size: 15px; font-weight: 400; line-height: 24px; color: #000000;">
                          ${this.title}
                        </p>
                      </td>
                    </tr>
                    <!-- Spacer -->
                    <tr>
                      <td style="padding: 0; height: 40px; line-height: 4px; font-size: 4px;">&nbsp;</td>
                    </tr>
                    <!-- LinkedIn Link -->
                    <tr>
                      <td style="padding: 0;">
                        <a href="${this.linkedInUrl}" style="display: block; text-decoration: none; color: inherit; background-color: #fbfbfb; height: 24px; line-height: 24px;">
                          <p style="margin: 0; padding: 0; font-family: 'Montserrat', Arial, sans-serif; font-size: 15px; font-weight: 600; line-height: 24px; color: #6b7280;">
                            ${this.linkedInText}
                          </p>
                        </a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              
              <!-- Social Media Section -->
              <tr>
                <td style="background-color: #cbcbcb; padding: 0;">
                  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                    <tr>
                      <td style="padding: 0;">
                        <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="margin: 0;">
                          <tr>
                            <!-- Facebook Icon -->
                            <td style="padding: 0; width: 40px; height: 40px; text-align: center; vertical-align: middle;">
                              <a href="${this.facebookUrl}" target="_blank" rel="noopener noreferrer" style="display: inline-block; text-decoration: none;">
                                <img src="${facebookIconUrl}" alt="Facebook" width="24" height="24" style="display: block; width: 24px; height: 24px; border: 0; outline: none; text-decoration: none;" />
                              </a>
                            </td>
                            <!-- Spacer -->
                            <td style="padding: 0; width: 14px; font-size: 14px; line-height: 14px;">&nbsp;</td>
                            <!-- YouTube Icon -->
                            <td style="padding: 0; width: 40px; height: 40px; text-align: center; vertical-align: middle;">
                              <a href="${this.youtubeUrl}" target="_blank" rel="noopener noreferrer" style="display: inline-block; text-decoration: none;">
                                <img src="${youtubeIconUrl}" alt="YouTube" width="24" height="24" style="display: block; width: 24px; height: 24px; border: 0; outline: none; text-decoration: none;" />
                              </a>
                            </td>
                            <!-- Spacer -->
                            <td style="padding: 0; width: 14px; font-size: 14px; line-height: 14px;">&nbsp;</td>
                            <!-- LinkedIn Icon -->
                            <td style="padding: 0; width: 40px; height: 40px; text-align: center; vertical-align: middle;">
                              <a href="${this.linkedInSocialUrl}" target="_blank" rel="noopener noreferrer" style="display: inline-block; text-decoration: none;">
                                <img src="${linkedInIconUrl}" alt="LinkedIn" width="24" height="24" style="display: block; width: 24px; height: 24px; border: 0; outline: none; text-decoration: none;" />
                              </a>
                            </td>
                            <!-- Spacer -->
                            <td style="padding: 0; width: 14px; font-size: 14px; line-height: 14px;">&nbsp;</td>
                            <!-- Website Link -->
                            <td style="padding: 0 8px; height: 40px; text-align: center; vertical-align: middle;">
                              <a href="${this.websiteUrl}" target="_blank" rel="noopener noreferrer" style="display: inline-block; text-decoration: underline; color: #000000; font-family: 'Montserrat', Arial, sans-serif; font-size: 15px; font-weight: 600; line-height: 24px;">
                                ${this.websiteText}
                              </a>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>`;
  }

  /**
   * Generates email-compatible HTML signature (full document)
   * @param baseUrl - Base URL for images (e.g., 'https://yourdomain.com' or 'https://cdn.yourdomain.com')
   * @returns Complete HTML document ready for email clients
   */
  generateEmailHtml(baseUrl: string = ''): string {
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Email Signature</title>
  <!--[if mso]>
  <style type="text/css">
    table {border-collapse:collapse;border-spacing:0;margin:0;}
    div, td {padding:0;}
    div {margin:0 !important;}
  </style>
  <![endif]-->
</head>
<body style="margin: 0; padding: 0; background-color: #fbfbfb;">
${this.generateEmailSignature(baseUrl)}
</body>
</html>`;
  }
}
