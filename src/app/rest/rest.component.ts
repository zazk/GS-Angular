import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface UserResponse {
	login: string;
	bio: string;
	company: string;
	followers: number;
}

@Component({
	selector: 'app-rest',
	template: `
    <p>
      rest Works!
    </p>
  `,
	styles: []
})
export class RestComponent implements OnInit {
	constructor(private http: HttpClient) {}

	ngOnInit() {
		this.http
			.get<UserResponse>('https://api.github.com/users/zazk')
			.subscribe((data) => {
				console.log('Followers', data.followers);
				console.log('Bio', data.bio);
				console.log('Company', data.company);
			});
	}
}
