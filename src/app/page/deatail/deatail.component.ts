import { Component, OnInit } from '@angular/core';
import { Iprofile } from 'src/app/models/profile';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from 'src/app/service/profile/profile.service';
import { Ipost } from 'src/app/models/post';
import { PostService } from 'src/app/service/post/post.service';
import SwiperCore, { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-deatail',
  templateUrl: './deatail.component.html',
  styleUrls: ['./deatail.component.scss'],
})
export class DeatailComponent implements OnInit {
  post: Ipost[] = [];

  constructor(
    private activateRouter: ActivatedRoute,
    private postService: PostService
  ) {}

  ngOnInit(): void {
    this.activateRouter.params.subscribe((params) => {
      const id = params['id'];
      this.postService.get_Detail(id).subscribe((data) => {
        this.post = data;
      });
    });
  }
}
