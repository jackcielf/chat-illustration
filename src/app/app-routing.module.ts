import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ChatIllustrationComponent } from "./pages/chat-illustration/chat-illustration.component";

const routes: Routes = [
  {
    path: "chat-illustration",
    component: ChatIllustrationComponent,
  },
  {
    path: "**",
    redirectTo: "chat-illustration",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
