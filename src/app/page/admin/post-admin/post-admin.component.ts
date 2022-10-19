import { Component, OnInit, Input } from '@angular/core';
import { Ipost } from 'src/app/models/post';
import { PostService } from 'src/app/service/post/post.service';

@Component({
  selector: 'app-post-admin',
  templateUrl: './post-admin.component.html',
  styleUrls: ['./post-admin.component.scss'],
})
export class PostAdminComponent implements OnInit {
  post: Ipost[] = [];

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.get_All_Post().subscribe((data) => {
      this.post = data;
      console.log(data);
    });
  }

  removeItem(id: any) {
    this.postService.remove_Post(id).subscribe(() => {
      // ReRender
      this.post = this.post.filter((item) => item.id != id);
    });
  }
}
