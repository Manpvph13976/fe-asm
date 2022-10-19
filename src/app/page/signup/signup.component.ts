import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
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
    this.userService.signup(this.user).subscribe((user: any) => {
      setTimeout(() => {
        // redirect
        this.router.navigateByUrl('/signin');
      }, 2000);
    });
  }
}
