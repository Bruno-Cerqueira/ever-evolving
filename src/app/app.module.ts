import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardListComponent } from './card-list/card-list.component';
import { WrapCardComponent } from './wrap-card/wrap-card.component';
import { BasicCardComponent } from './basic-card/basic-card.component';
import { CardActionComponent } from './card-action/card-action.component';
import { MiniCardComponent } from './mini-card/mini-card.component';
import { UnionistDirective } from './unionist.directive';
import { CompanyDirective } from './company.directive';
import { ModalComponent } from './global/components/modal/modal.component';
import { InjectCaseModule } from './inject-case/inject-case.module';
import { WithoutContextStandaloneComponent } from './inject-case/without-context-standalone/without-context-standalone.component';
import { WrapperForm } from './global/form/wrapper-form.component';
import { BasicComponent } from './signal-test/basic/basic.component';

@NgModule({
  declarations: [
    AppComponent,
    CardListComponent,
    WrapCardComponent,
    WrapperForm,
    BasicCardComponent,
    CardActionComponent,
    MiniCardComponent,
    UnionistDirective,
    CompanyDirective    
  ],
  imports: [
    BasicComponent,
    ModalComponent,
    WithoutContextStandaloneComponent,
    InjectCaseModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
