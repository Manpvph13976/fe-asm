import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { PostService } from 'src/app/service/post/post.service';
import { Ipost } from 'src/app/models/post';
import { ImageService } from 'src/app/service/image/image.service';

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.scss'],
})
export class PostAddComponent implements OnInit {
  constructor(
    private postService: PostService,
    private router: Router,
    private imageService: ImageService
  ) {}

  postForm = new FormGroup({
    title: new FormControl(''),
    createAt: new FormControl(''),
    description: new FormControl(''),
    thumnail: new FormControl(''),
  });

  ngOnInit(): void {}

  onHandleAdd() {
    this.postService.add_Post(this.postForm.value).subscribe((data) => {
      console.log('Thanh cong');
      this.router.navigateByUrl(`admin/post`);
    });
  }
}
