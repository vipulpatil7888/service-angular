import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Properties } from './properties';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class NewserviceService {
  //newtitle: string = "New service";
  constructor(private http: Http) { }
  getTitle() {//: Observable<Properties[]> {
    /*let headers = new Headers({ 'Access-Control-Allow-Origin': '*' });
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });*/
    //this.http.get('http://localhost/drupal8-newstuff/export/article/4')
    return this.http.get("http://localhost/drupal8-newstuff/export/article/4")
            .map((res: Response) => res.json())
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
  newtitleReturn() {
    return "New service new way";
  }

}
