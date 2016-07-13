import {
  Component,
  Input
} from '@angular/core';

@Component({
  selector: 'site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.scss']
})
export class Site {
	@Input() title;
	@Input() imageUrl;
	@Input() description;
	@Input() url;
}