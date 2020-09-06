import { ChatModel } from './model/chat.model';
import { MessageService } from './service/message.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'websocket-client';

  form: FormGroup;
  chats: ChatModel[];

  constructor(fb: FormBuilder, private service: MessageService) {
    this.form = fb.group({
      sender: ['', Validators.required],
      message: ['', Validators.required]
    });

    this.chats = service.chats;
  }

  ngOnInit() {
    this.service.connect();
  }

  ngOnDestroy() {
    this.service.disconnect();
  }

  send() {
    this.service.sendMessage(this.form.value)
    this.form.reset();
  }
}
