import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Iprofile } from 'src/app/models/profile';
import { ProfileService } from 'src/app/service/profile/profile.service';
import { ImageService } from 'src/app/service/image/image.service';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss'],
})
export class ProfileEditComponent implements OnInit {
  profileForm = new FormGroup({
    name: new FormControl(''),
    position: new FormControl(''),
    image: new FormControl(''),
    description: new FormControl(''),
    cv: new FormControl(''),
  });

  profile: any;

  constructor(
    private profileService: ProfileService,
    private imageService: ImageService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const id = params['id'];
      if (params) {
        // this.product = this.products.find(item => item.id == id)!;
        this.profileService.get_Profile(id).subscribe((item) => {
          this.profile = item;
          console.log(this.profile);
        });
      }
    });
  }

  onHandleAdd() {
    this.activatedRoute.params.subscribe((params) => {
      const id = params['id'];
      if (params) {
        // this.product = this.products.find(item => item.id == id)!;
        this.profileService
          .edit_Profile(id, this.profileForm.value)
          .subscribe((data) => {
            console.log('Thanh cong');
            this.router.navigateByUrl(`admin/list`);
          });
      }
    });
  }
}
