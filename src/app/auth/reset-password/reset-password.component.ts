import { ChangeDetectorRef, Component, Inject } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { getDeepFromObject, NbAuthJWTToken, NbAuthService, NbAuthSocialLink, NB_AUTH_OPTIONS } from "@nebular/auth";
import { NbDialogService, NbToastrService } from "@nebular/theme";
import { EmployeeService } from "../../service/employee/employeeService";

@Component({
    selector: 'reset-password',
    templateUrl: './reset-password.component.html',
    styleUrls: ['./reset-password.component.scss']
})

export class NgxResetPasswordComponent {


    redirectDelay: number = 0;
    showMessages: any = {};
    strategy: string = '';

    submitted = false;
    errors: string[] = [];
    messages: string[] = [];
    user: any = {};
    userToken:any;
    userEmail: string;
    socialLinks: NbAuthSocialLink[] = [];

    constructor(
        private formBuilder: FormBuilder,
        private dialogService: NbDialogService,
        private toastrService: NbToastrService,
        private router: Router,
        private employeeService:EmployeeService,
        private authService: NbAuthService,
        protected service: NbAuthService,
        @Inject(NB_AUTH_OPTIONS) protected options = {},
        protected cd: ChangeDetectorRef,
    ) {

        this.redirectDelay = this.getConfigValue('forms.register.redirectDelay');
        this.showMessages = this.getConfigValue('forms.register.showMessages');
        this.strategy = this.getConfigValue('forms.register.strategy');
        this.socialLinks = this.getConfigValue('forms.login.socialLinks');
    }

    ngOnInit(): void {

    }

    resetPass(): void {
        this.errors = this.messages = [];
        this.submitted = true;
        console.log(this.user.password);
        this.authService.onTokenChange().subscribe((token: NbAuthJWTToken) => {
            this.userToken = token.getPayload();
            this.userEmail = this.userToken.sub;
        });

        if (this.user.password == this.user.confirmPassword) {
            this.employeeService.resetPw(this.userEmail, this.user.password).subscribe((data) => {
                this.toastrService.success('Password redefinido com sucesso.', 'Sucesso');
                this.router.navigateByUrl('auth/login');
                localStorage.removeItem('auth_app_token');
            });

        } else {
            this.toastrService.warning('Confirmar Password .', 'Atenção');

        }


    }

    getConfigValue(key: string): any {
        return getDeepFromObject(this.options, key, null);
    }

}
