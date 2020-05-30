import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RegComponent } from "../components/reg/reg.component";



const routes: Routes = [
  { path: "", component: RegComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
