import { Component, OnInit } from '@angular/core';
import { UserService } from '../../app/services/user.service';

@Component({
selector: 'app-blog',
templateUrl: './blog.component.html',
styleUrls: ['./blog.component.css']
})

export class BlogComponent implements OnInit {

content: string;

constructor(private userService: UserService) { }

ngOnInit(): void {

this.userService.getPublicContent().subscribe(
data => {
this.content = data;
},
err => {
this.content = JSON.parse(err.error).message;
}
);
}
}
