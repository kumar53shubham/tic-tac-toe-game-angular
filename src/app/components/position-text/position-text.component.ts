import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-position-text',
  templateUrl: './position-text.component.html',
  styleUrl: './position-text.component.css',
})
export class PositionTextComponent {
  @Input() textValue = 3;
}
