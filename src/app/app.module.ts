import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatReceiverComponent } from './shared/components/chat-receiver/chat-receiver.component';
import { ChatIllustrationComponent } from './pages/chat-illustration/chat-illustration.component';
import { ChatSenderComponent } from './shared/components/chat-sender/chat-sender.component';
import { TimeChatPriceComponent } from './shared/components/time-chat-price/time-chat-price.component';
import { HeaderAvatarComponent } from './shared/components/header-avatar/header-avatar.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatReceiverComponent,
    ChatIllustrationComponent,
    ChatSenderComponent,
    TimeChatPriceComponent,
    HeaderAvatarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
