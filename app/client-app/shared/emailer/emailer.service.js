import { 
	Headers,
	RequestOptions,
	Http,
	Response
} from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class EmailService {
	constructor(http: Http) {
		this.http = http;
		this.emailUrl = '/email'
	}
	sendEmail(payload) {
		let body = JSON.stringify({ payload });
		let headers = new Headers({'Content-Type' : 'application/json'});
		let options = new RequestOptions({ headers: headers });
		return this.http.post(this.emailUrl, body, options)
			.map(this._extractData)
			.catch(this._handleError);
	}
	// Private Methods
	_extractData(res) {
		let body = res.json();
		return body.data || {};
	} 
	_handleError(e) {
		let errMsg = (e.message) ? e.message : (e.status ? e.status + ' - ' + e.statusText : 'Server Error');
		console.log(errMsg);
	}
}