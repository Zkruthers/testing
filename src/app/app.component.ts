import { HttpClient } from '@angular/common/http';
import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'tf_arquiweb';

  serverData: any;
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.http.get('http://localhost:5000').subscribe(data => {
      this.serverData = data;
      console.log(this.serverData);
    });
  }

}
