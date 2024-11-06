import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { PageHeaderComponent } from '../page-header/page-header.component';
import { PageSubheaderComponent } from "../page-subheader/page-subheader.component";
import { PageTitleComponent } from "../page-title/page-title.component";

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [PageHeaderComponent, PageTitleComponent, PageSubheaderComponent, NgIf],
  templateUrl: './page.component.html',
  styleUrl: './page.component.scss'
})
export class PageComponent {

  @Input() title: string;
  @Input() subheader: string;

}
