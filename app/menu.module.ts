import { NativeScriptCommonModule } from "nativescript-angular/common";
import { ModalDialogService, NativeScriptFormsModule, NativeScriptRouterModule } from "nativescript-angular";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { Routes } from "@angular/router";
import { TNSFontIconModule } from "nativescript-ngx-fonticon";
import { NativeScriptUIListViewModule } from "nativescript-telerik-ui/listview/angular";
import { NativeScriptUISideDrawerModule } from "nativescript-telerik-ui/sidedrawer/angular";
import { MenuComponent } from "./menu/menu.component";
import { HomeComponent } from "./home/home.component";
import { InfoModalComponent } from "./info-modal/info-modal";

const routerConfig: Routes = [
  {
    path: "",
    component: MenuComponent,
    children: [
      {
        path: "",
        component: HomeComponent
      },
      {
        path: "feedback",
        loadChildren: "./feedback/feedback.module#FeedbackModule"
      },
      {
        path: "mapping",
        loadChildren: "./mapping/mapping.module#MappingModule"
      },
      {
        path: "speech",
        loadChildren: "./speech/speech.module#SpeechModule"
      },
      {
        path: "appicon",
        loadChildren: "./appicon/appicon.module#AppIconModule"
      },
      {
        path: "input",
        loadChildren: "./input/input.module#InputModule"
      }
    ]
  }
];

//noinspection JSUnusedGlobalSymbols
@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptFormsModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forChild(routerConfig),
    NativeScriptUIListViewModule,
    NativeScriptUISideDrawerModule,
    TNSFontIconModule,
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [
    ModalDialogService
  ],
  declarations: [
    MenuComponent,
    HomeComponent,
    InfoModalComponent,
  ],
  entryComponents: [InfoModalComponent]
})

export class MenuModule {
}