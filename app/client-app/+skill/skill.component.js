import {
  Component,
  Input
} from '@angular/core';

@Component({
  selector: 'skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class Skill {
	@Input() skillName;
	@Input() iconUrl;
	@Input() description;
}