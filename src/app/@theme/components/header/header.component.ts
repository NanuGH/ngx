import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbMediaBreakpointsService, NbMenuService, NbSidebarService, NbThemeService } from '@nebular/theme';

import { UserData } from '../../../@core/data/users';
import { LayoutService } from '../../../@core/utils';
import { filter, map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {

  private destroy$: Subject<void> = new Subject<void>();
  userPictureOnly: boolean = false;
  user: any;
  userss: string;

  /*themes = [
    {
      value: 'default',
      name: 'Light',
    },
    {
      value: 'dark',
      name: 'Dark',
    },
    {
      value: 'cosmic',
      name: 'Cosmic',
    },
    {
      value: 'corporate',
      name: 'Corporate',
    },
  ];*/
  themes = [
    {
      value: 'default',
      name: 'Corporate',
    },
    {
      value: 'dark',
      name: 'Dark',
    },
  ];

  currentTheme = 'default';

  userMenu = [ { title: 'Perfil' }, { title: 'Sair' } ];

  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private themeService: NbThemeService,
              private authService: NbAuthService,
              private userService: UserData,
              private layoutService: LayoutService,
              private router:Router,
              private breakpointService: NbMediaBreakpointsService) {

                this.authService.onTokenChange().subscribe((token: NbAuthJWTToken) => {

                  if (token.isValid()) {
                    this.user = token.getPayload(); // here we receive a payload from the token and assigns it to our `user` variable

                    const requestTokin = localStorage.getItem('auth_app_token');
                    console.log( requestTokin);
                    const object = JSON.parse(requestTokin)
                   console.log( this.user.sub);
                   this.userss = this.user.sub;
                    console.log(object.value);
                    this.user = this.user.sub;

                } else { this.router.navigate(['auth/login']);}

                });
  }

  ngOnInit() {
    this.currentTheme = this.themeService.currentTheme;

    this.userService.getUsers()
      .pipe(takeUntil(this.destroy$))
      .subscribe((users: any) => this.user = users.alan);

      this.menuService.onItemClick()
      .pipe(
        filter(({ tag }) => tag === 'user_menu'),
        map(({ item: { title } }) => title),
      )
      .subscribe(title =>{
          if(title == 'Sair'){
            this.authService.logout('email');
            this.router.navigate(['auth/login']);
            localStorage.removeItem('auth_app_token');
          }
      });

  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  changeTheme(themeName: string) {
    this.themeService.changeTheme(themeName);
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();

    return false;
  }

  navigateHome() {
    this.menuService.navigateHome();
    return false;
  }
}
