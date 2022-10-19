import { Component, OnInit } from '@angular/core';
import { Iprofile } from 'src/app/models/profile';
import { ProfileService } from 'src/app/service/profile/profile.service';

@Component({
  selector: 'app-profile-admin',
  templateUrl: './profile-admin.component.html',
  styleUrls: ['./profile-admin.component.scss'],
})
export class ProfileAdminComponent implements OnInit {
  profile: Iprofile[] = [];

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.onGetList();
  }

  onGetList() {
    this.profileService.get_All_Profiles().subscribe((product: any) => {
      console.log(product);
      this.profile = product;
    });
  }

  removeItem(id: any) {
    this.profileService.remove_Profile(id).subscribe(() => {
      // ReRender
      this.profile = this.profile.filter((item) => item.id !== id);
    });
  }
}
