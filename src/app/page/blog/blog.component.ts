import { Component, OnInit } from '@angular/core';
import { Iprofile } from 'src/app/models/profile';
import { ProfileService } from 'src/app/service/profile/profile.service';
import { Ipost } from 'src/app/models/post';
import { PostService } from 'src/app/service/post/post.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  post: Ipost[] = [];

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.get_All_Post().subscribe((data) => {
      this.post = data;
    });
  }
}
