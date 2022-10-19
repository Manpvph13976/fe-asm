import { Component, OnInit } from '@angular/core';
import { Iprofile } from 'src/app/models/profile';
import { ProfileService } from 'src/app/service/profile/profile.service';
import { Ipost } from 'src/app/models/post';
import { PostService } from 'src/app/service/post/post.service';
import SwiperCore, { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  profile: Iprofile[] = [];
  post: Ipost[] = [];

  constructor(
    private profiletService: ProfileService,
    private postService: PostService
  ) {}

  ngOnInit(): void {
    this.profiletService.get_All_Profiles().subscribe((data) => {
      this.profile = data;
    });

    this.postService.get_All_Post().subscribe((data) => {
      this.post = data;
    });
  }
}
