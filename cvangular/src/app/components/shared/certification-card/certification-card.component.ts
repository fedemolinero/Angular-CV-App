import { Component, Input, input } from '@angular/core';
import { Certifications } from '@app/models/cv.model';

@Component({
  selector: 'app-certification-card',
  templateUrl: './certification-card.component.html',
  styleUrl: './certification-card.component.scss'
})
export class CertificationCardComponent {
  @Input() certification!: Certifications;

    // Método para abrir la URL en una nueva ventana
    openLink(url: string): void {
      window.open(url, '_blank');
  }

}
