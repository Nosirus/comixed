/*
 * ComixEd - A digital comic book library management application.
 * Copyright (C) 2017, Darryl L. Pierce
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.package
 * org.comixed;
 */

import {Component, OnInit, Input} from '@angular/core';

import {ComicService} from '../comic.service';
import {ErrorsService} from '../../errors.service';
import {Page} from '../page.model';

@Component({
  selector: 'app-page-thumbnail',
  templateUrl: './page-thumbnail.component.html',
  styleUrls: ['./page-thumbnail.component.css']
})
export class PageThumbnailComponent implements OnInit {
  @Input() missing: boolean;
  @Input() page: Page;
  page_url: string;
  show_details = false;
  width = 192;
  delete_page_title: string;
  undelete_page_title: string;
  delete_page_message: string;
  undelete_page_message: string;
  confirm_button = 'Yes';
  cancel_button = 'No';
  page_title: string;

  constructor(private comicService: ComicService,
    private errorsService: ErrorsService) {}

  ngOnInit() {
    this.page_url = this.missing ? '/assets/img/missing.png' : this.comicService.getImageUrlForId(this.page.id);
    this.delete_page_title = `Delete the page ${this.page.filename}`;
    this.undelete_page_title = `Undelete the page ${this.page.filename}`;
    this.delete_page_message = 'Are you sure you want to delete this page?';
    this.undelete_page_message = 'Are you sure you want to undelete this page?';
    this.page_title = `Page #${this.page.index}`;
  }

  deletePage(): void {
    this.comicService.markPageAsDeleted(this.page)
      .subscribe(
      success => {
        this.page.deleted = true;
      },
      error => {
        this.errorsService.fireErrorMessage('Failed to delete page...');
      });
  }

  undeletePage(): void {
    this.comicService.markPageAsUndeleted(this.page)
      .subscribe(
      success => {
        this.page.deleted = false;
      },
      error => {
        this.errorsService.fireErrorMessage('Failed to undelete page...');
      });
  }
}
