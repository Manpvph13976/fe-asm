import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { PostService } from 'src/app/service/post/post.service';
import { Ipost } from 'src/app/models/post';
import { ImageService } from 'src/app/service/image/image.service';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.scss'],
})
export class PostEditComponent implements OnInit {
  postForm = new FormGroup({
    title: new FormControl(''),
    createAt: new FormControl(''),
    description: new FormControl(''),
    thumnail: new FormControl(''),
  });

  post: any;

  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private router: Router,
    private imageService: ImageService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const id = params['id'];
      if (params) {
        // this.product = this.products.find(item => item.id == id)!;
        this.postService.get_Post(id).subscribe((item) => {
          this.post = item;
          console.log(this.post);
        });
      }
    });
  }

  onHandleAdd() {
    this.activatedRoute.params.subscribe((params) => {
      const id = params['id'];
      if (params) {
        // this.product = this.products.find(item => item.id == id)!;
        this.postService
          .edit_Post(id, this.postForm.value)
          .subscribe((data) => {
            console.log('Thanh cong');
            this.router.navigateByUrl(`admin/post`);
          });
      }
    });
  }
}
