import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  @Output() onSubmit = new EventEmitter();

  user: {
    email: string;
    password: string;
  } = {
    email: '',
    password: '',
  };
  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {}

  handleSubmit() {
    this.onSubmit.emit(this.user);
    this.handleUser();
  }

  handleUser() {
    this.userService.signin(this.user).subscribe((user: any) => {
      localStorage.setItem('user', JSON.stringify(user));
      setTimeout(() => {
        // redirect
        if (user.user.id === 1) {
          console.log(user.user.id);

          this.router.navigateByUrl('/admin');
        } else {
          console.log(user.user.id);
          this.router.navigateByUrl('/');
        }
      }, 2000);
    });
  }
}
