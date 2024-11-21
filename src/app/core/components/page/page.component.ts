import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SpinnerComponent } from "../../../shared/components/spinner/spinner.component";
import { PageHeaderComponent } from '../page-header/page-header.component';
import { PageSubheaderComponent } from "../page-subheader/page-subheader.component";
import { PageTitleComponent } from "../page-title/page-title.component";

@Component({
  selector: 'app-page',
  imports: [PageHeaderComponent, PageTitleComponent, PageSubheaderComponent, NgIf, SpinnerComponent],
  templateUrl: './page.component.html',
  styleUrl: './page.component.scss'
})
export class PageComponent {

  @Input() title: string;
  @Input() subheader: string;
  @Input() showBanner = true;
  @Input() loading: boolean = false;

}
