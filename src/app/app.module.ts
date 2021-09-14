import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { fakeBackendProvider } from "./structure/fake-backend/fake-backend.service";
import { StructureModule } from "./structure/structure.module";
import { EvaluationsFilterComponent } from './evaluation/evaluations-filter/evaluations-filter.component';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, StructureModule, ReactiveFormsModule, HttpClientModule],
    providers: [fakeBackendProvider],
    bootstrap: [AppComponent],
})
export class AppModule {}
