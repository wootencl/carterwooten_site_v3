import {
  Component,
  Input,
  Attribute
} from '@angular/core';

@Component({
  selector: 'linker',
  templateUrl: './linker.component.html'
})
export class Linker {
  @Input() url;

  constructor(@Attribute('name') name) {
    this.name = name;
  }
}