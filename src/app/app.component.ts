import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  photos = [
    {
      url:'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fdavidthier%2Ffiles%2F2018%2F07%2FSquirtle_Squad.jpg',
      description:'Squirtle'
    },
    {
      url:'data:image/jpeg;base64,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',
      description:'Charmander'
    }
  ]
  
}
