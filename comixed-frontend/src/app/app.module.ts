/*
 * ComiXed - A digital comic book library management application.
 * Copyright (C) 2017, The ComiXed Project
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

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { MenubarModule } from 'primeng/menubar';
import { SidebarModule } from 'primeng/sidebar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { SliderModule } from 'primeng/slider';
import { TabViewModule } from 'primeng/tabview';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { CardModule } from 'primeng/card';
import { DataViewModule } from 'primeng/dataview';
import { DialogModule } from 'primeng/dialog';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { PanelModule } from 'primeng/panel';
import { TooltipModule } from 'primeng/tooltip';
import { ToolbarModule } from 'primeng/toolbar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ProgressBarModule } from 'primeng/progressbar';
import { BlockUIModule } from 'primeng/blockui';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { PasswordModule } from 'primeng/password';
import { PickListModule } from 'primeng/picklist';
import { InplaceModule } from 'primeng/inplace';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ChartModule } from 'primeng/chart';
import { AppRouting } from 'app/app.routing';
import { AppComponent } from 'app/app.component';
import {
  HttpClient,
  HttpClientModule,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingModule, ANIMATION_TYPES } from 'ngx-loading';
import { XhrInterceptor } from 'app/xhr.interceptor';
import { ComicService } from 'app/services/comic.service';
import { MessageService } from 'primeng/api';
import { ComicDetailsPageComponent } from 'app/ui/pages/comic-details-page/comic-details-page.component';
import { ComicReaderComponent } from 'app/ui/components/comic/comic-reader/comic-reader.component';
import { ComicDetailsEditorComponent } from 'app/ui/components/comic/comic-details-editor/comic-details-editor.component';
import { ComicOverviewComponent } from 'app/ui/components/comic/comic-overview/comic-overview.component';
import { ComicStoryComponent } from 'app/ui/components/comic/comic-story/comic-story.component';
import { ComicCreditsComponent } from 'app/ui/components/comic/comic-credits/comic-credits.component';
import { ComicPagesComponent } from 'app/ui/components/comic/comic-pages/comic-pages.component';
import { MainPageComponent } from 'app/ui/pages/main-page/main-page.component';
import { LoginComponent } from 'app/ui/components/login/login.component';
import { UserService } from 'app/services/user.service';
import { LibraryPageComponent } from 'app/ui/pages/library/library-page/library-page.component';
import { ImportPageComponent } from 'app/ui/pages/import-page/import-page.component';
import { DuplicatesPageComponent } from 'app/ui/pages/library/duplicates-page/duplicates-page.component';
import { StoreModule } from '@ngrx/store';
import { userReducer } from 'app/reducers/user.reducer';
import { userAdminReducer } from 'app/reducers/user-admin.reducer';
import { importingReducer } from 'app/reducers/importing.reducer';
import { libraryReducer } from 'app/reducers/library.reducer';
import { libraryFilterReducer } from 'app/reducers/library-filter.reducer';
import { libraryDisplayReducer } from 'app/reducers/library-display.reducer';
import { singleComicScrapingReducer } from 'app/reducers/single-comic-scraping.reducer';
import { multipleComicsScrapingReducer } from 'app/reducers/multiple-comics-scraping.reducer';
import { duplicatesReducer } from 'app/reducers/duplicates.reducer';
import { IssueDetailsComponent } from 'app/ui/components/library/issue-details/issue-details.component';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from 'app/effects/user.effects';
import { UserAdminEffects } from 'app/effects/user-admin.effects';
import { ImportingEffects } from 'app/effects/importing.effects';
import { LibraryEffects } from 'app/effects/library.effects';
import { SingleComicScrapingEffects } from 'app/effects/single-comic-scraping.effects';
import { DuplicatesEffects } from 'app/effects/duplicates.effects';
import { DuplicatePagesViewComponent } from 'app/ui/views/library/duplicate-pages-view/duplicate-pages-view.component';
import { PageHashViewComponent } from 'app/ui/views/library/page-hash-view/page-hash-view.component';
import { VolumeListComponent } from 'app/ui/components/scraping/volume-list/volume-list.component';
import { TokenStorage } from 'app/storage/token.storage';
import { AccountPageComponent } from 'app/ui/pages/account/account-page/account-page.component';
import { AccountPreferencesComponent } from 'app/ui/components/account/account-preferences/account-preferences.component';
import { UserDetailsComponent } from 'app/ui/components/account/user-details/user-details.component';
import { MultipleComicScrapingComponent } from 'app/ui/components/scraping/multiple-comic-scraping/multiple-comic-scraping.component';
import { LibraryScrapingToolbarComponent } from 'app/ui/components/library/library-scraping-toolbar/library-scraping-toolbar.component';
import { ScrapingComicListComponent } from 'app/ui/components/scraping/scraping-comic-list/scraping-comic-list.component';
import { AdminGuard } from 'app/admin.guard';
import { ReaderGuard } from 'app/reader.guard';
import { ComicTitlePipe } from 'app/pipes/comic-title.pipe';
import { ComicCoverUrlPipe } from 'app/pipes/comic-cover-url.pipe';
import { ComicPageUrlPipe } from 'app/pipes/comic-page-url.pipe';
import { ComicFileCoverUrlPipe } from 'app/pipes/comic-file-cover-url.pipe';
import { LibraryFilterComponent } from 'app/ui/components/library/library-filter/library-filter.component';
import { LibraryFilterPipe } from 'app/pipes/library-filter.pipe';
import { UsersPageComponent } from 'app/ui/pages/admin/users-page/users-page.component';
import { UserDetailsEditorComponent } from 'app/ui/components/admin/user-details-editor/user-details-editor.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MenubarComponent } from 'app/ui/components/main/menubar/menubar.component';
import { ComicListItemComponent } from 'app/ui/components/library/comic-list-item/comic-list-item.component';
import { ComicGridItemComponent } from 'app/ui/components/library/comic-grid-item/comic-grid-item.component';
import { SeriesPageComponent } from 'app/ui/pages/series/series-page/series-page.component';
import { SeriesDetailsPageComponent } from 'app/ui/pages/series/series-details-page/series-details-page.component';
import { ComicSeriesPipe } from 'app/pipes/comic-series.pipe';
import { ComicListToolbarComponent } from 'app/ui/components/library/comic-list-toolbar/comic-list-toolbar.component';
import { PublishersPageComponent } from 'app/ui/pages/publishers/publishers-page/publishers-page.component';
import { PublisherDetailsPageComponent } from 'app/ui/pages/publishers/publisher-details-page/publisher-details-page.component';
import { ComicPublisherPipe } from 'app/pipes/comic-publisher.pipe';
import { ComicCoverComponent } from 'app/ui/components/comic/comic-cover/comic-cover.component';
import { CharactersPageComponent } from 'app/ui/pages/characters/characters-page/characters-page.component';
import { CharacterDetailsPageComponent } from 'app/ui/pages/characters/character-details-page/character-details-page.component';
import { ComicCharacterPipe } from 'app/pipes/comic-character.pipe';
import { TeamsPageComponent } from 'app/ui/pages/teams/teams-page/teams-page.component';
import { TeamDetailsPageComponent } from 'app/ui/pages/teams/team-details-page/team-details-page.component';
import { ComicTeamPipe } from 'app/pipes/comic-team.pipe';
import { LocationsPageComponent } from 'app/ui/pages/locations/locations-page/locations-page.component';
import { LocationDetailsPageComponent } from 'app/ui/pages/locations/location-details-page/location-details-page.component';
import { ComicLocationPipe } from 'app/pipes/comic-location.pipe';
import { ComicGroupingCardComponent } from 'app/ui/components/comic/comic-grouping-card/comic-grouping-card.component';
import { StoryArcsPageComponent } from 'app/ui/pages/story-arcs/story-arcs-page/story-arcs-page.component';
import { ComicStoriesPipe } from 'app/pipes/comic-stories.pipe';
import { StoryArcDetailsPageComponent } from 'app/ui/pages/story-arcs/story-arc-details-page/story-arc-details-page.component';
import { ComicListComponent } from 'app/ui/components/library/comic-list/comic-list.component';
import { SelectedComicsListComponent } from 'app/ui/components/library/selected-comics-list/selected-comics-list.component';
import { MultiComicScrapingPageComponent } from 'app/ui/pages/library/multi-comic-scraping-page/multi-comic-scraping-page.component';
import { ComicFileListToolbarComponent } from 'app/ui/components/import/comic-file-list-toolbar/comic-file-list-toolbar.component';
import { ComicFileGridItemComponent } from 'app/ui/components/import/comic-file-grid-item/comic-file-grid-item.component';
import { SelectedComicFileListComponent } from 'app/ui/components/import/selected-comic-file-list/selected-comic-file-list.component';
import { ComicFileListComponent } from 'app/ui/components/import/comic-file-list/comic-file-list.component';
import { FileSaverModule } from 'ngx-filesaver';
import { LibraryAdminPageComponent } from 'app/ui/pages/admin/library-admin-page/library-admin-page.component';
import { ComicDownloadLinkPipe } from './pipes/comic-download-link.pipe';
import { MissingComicsPipe } from './pipes/missing-comics.pipe';
import { MissingComicsPageComponent } from './ui/pages/library/missing-comics-page/missing-comics-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    LoginComponent,
    ComicDetailsPageComponent,
    ComicReaderComponent,
    ComicDetailsEditorComponent,
    ComicOverviewComponent,
    ComicStoryComponent,
    ComicCreditsComponent,
    ComicPagesComponent,
    LibraryPageComponent,
    ImportPageComponent,
    DuplicatesPageComponent,
    IssueDetailsComponent,
    DuplicatePagesViewComponent,
    PageHashViewComponent,
    VolumeListComponent,
    AccountPageComponent,
    AccountPreferencesComponent,
    UserDetailsComponent,
    MultipleComicScrapingComponent,
    LibraryScrapingToolbarComponent,
    ScrapingComicListComponent,
    ComicTitlePipe,
    ComicCoverUrlPipe,
    ComicPageUrlPipe,
    ComicFileCoverUrlPipe,
    LibraryFilterComponent,
    LibraryFilterPipe,
    UsersPageComponent,
    UserDetailsEditorComponent,
    MenubarComponent,
    ComicListItemComponent,
    ComicGridItemComponent,
    SeriesPageComponent,
    SeriesDetailsPageComponent,
    ComicSeriesPipe,
    ComicListToolbarComponent,
    PublishersPageComponent,
    PublisherDetailsPageComponent,
    ComicPublisherPipe,
    ComicCoverComponent,
    CharactersPageComponent,
    CharacterDetailsPageComponent,
    ComicCharacterPipe,
    TeamsPageComponent,
    TeamDetailsPageComponent,
    ComicTeamPipe,
    LocationsPageComponent,
    LocationDetailsPageComponent,
    ComicLocationPipe,
    ComicGroupingCardComponent,
    StoryArcsPageComponent,
    ComicStoriesPipe,
    StoryArcDetailsPageComponent,
    ComicListComponent,
    SelectedComicsListComponent,
    MultiComicScrapingPageComponent,
    ComicFileListToolbarComponent,
    ComicFileGridItemComponent,
    SelectedComicFileListComponent,
    ComicFileListComponent,
    LibraryAdminPageComponent,
    ComicDownloadLinkPipe,
    MissingComicsPipe,
    MissingComicsPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouting,
    HttpClientModule,
    MenubarModule,
    SidebarModule,
    InputTextModule,
    ButtonModule,
    CheckboxModule,
    DropdownModule,
    SliderModule,
    TabViewModule,
    TableModule,
    ToastModule,
    CardModule,
    DataViewModule,
    DialogModule,
    ScrollPanelModule,
    ToggleButtonModule,
    PanelModule,
    TooltipModule,
    ToolbarModule,
    SplitButtonModule,
    ProgressBarModule,
    BlockUIModule,
    ConfirmDialogModule,
    PasswordModule,
    InplaceModule,
    OverlayPanelModule,
    ChartModule,
    PickListModule,
    LoadingModule.forRoot({
      animationType: ANIMATION_TYPES.pulse,
      fullScreenBackdrop: true
    }),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    LoadingModule.forRoot({
      animationType: ANIMATION_TYPES.pulse,
      fullScreenBackdrop: true
    }),

    StoreModule.forRoot({
      user: userReducer,
      importing: importingReducer,
      library: libraryReducer,
      library_filter: libraryFilterReducer,
      library_display: libraryDisplayReducer,
      single_comic_scraping: singleComicScrapingReducer,
      multiple_comic_scraping: multipleComicsScrapingReducer,
      duplicates: duplicatesReducer,
      user_admin: userAdminReducer
    }),
    EffectsModule.forRoot([
      UserEffects,
      ImportingEffects,
      LibraryEffects,
      SingleComicScrapingEffects,
      DuplicatesEffects,
      UserAdminEffects
    ]),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    FileSaverModule
  ],
  providers: [
    UserService,
    ComicService,
    MessageService,
    [{ provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true }],
    ConfirmationService,
    TokenStorage,
    AdminGuard,
    ReaderGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
