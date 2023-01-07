"use strict";
(self["webpackChunkngx_admin"] = self["webpackChunkngx_admin"] || []).push([["src_app_pages_bloodtype_bloodtype_module_ts"],{

/***/ 66081:
/*!*************************************************************!*\
  !*** ./src/app/pages/bloodtype/bloodtype-routing.module.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BloodtypeRoutingModule": function() { return /* binding */ BloodtypeRoutingModule; },
/* harmony export */   "routedComponents": function() { return /* binding */ routedComponents; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _bloodtype_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bloodtype.component */ 82810);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);




const routes = [{
        path: '',
        component: _bloodtype_component__WEBPACK_IMPORTED_MODULE_0__.BloodtypeComponent,
    }];
class BloodtypeRoutingModule {
}
BloodtypeRoutingModule.ɵfac = function BloodtypeRoutingModule_Factory(t) { return new (t || BloodtypeRoutingModule)(); };
BloodtypeRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: BloodtypeRoutingModule });
BloodtypeRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](BloodtypeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();
const routedComponents = [
    _bloodtype_component__WEBPACK_IMPORTED_MODULE_0__.BloodtypeComponent,
];


/***/ }),

/***/ 82810:
/*!********************************************************!*\
  !*** ./src/app/pages/bloodtype/bloodtype.component.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BloodtypeComponent": function() { return /* binding */ BloodtypeComponent; }
/* harmony export */ });
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-smart-table */ 98391);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _service_domain_domainService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../service/domain/domainService */ 81276);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/theme */ 40465);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 54364);







function BloodtypeComponent_option_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r1.domain, " ");
} }
class BloodtypeComponent {
    constructor(domainService, formBuilder) {
        this.domainService = domainService;
        this.formBuilder = formBuilder;
        this.source = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__.LocalDataSource();
        this.loadingList = false;
        /////    SMART TABLE     //////////
        this.settings = {
            noDataMessage: "Sem Dados",
            //mode: 'external',
            //actions: { columnTitle: 'Ações', add: true },
            add: {
                addButtonContent: '<i class="nb-plus"></i>',
                createButtonContent: '<i class="nb-checkmark"></i>',
                cancelButtonContent: '<i class="nb-close"></i>',
                confirmCreate: true,
            },
            edit: {
                editButtonContent: '<i class="nb-edit"></i>',
                saveButtonContent: '<i class="nb-checkmark"></i>',
                cancelButtonContent: '<i class="nb-close"></i>',
                confirmSave: true,
            },
            delete: {
                deleteButtonContent: '<i class="nb-trash"></i>',
                confirmDelete: true,
            },
            columns: {
                domain: { title: "Dominio", type: "string",
                    /* editor: {
                      type: "list",
                      config: { list: [] },
                    }, */
                },
                dmName: { title: "Descrição", type: "string", },
                dmCode: { title: "Cod.", type: "string", },
            },
        };
    }
    ngOnInit() {
        this.getBySelfId();
        this.loadForms();
    }
    loadForms() {
        this.searchForm = this.formBuilder.group({
            search: this.formBuilder.group({
                domain: [""],
            }),
        });
    }
    convertFormToModel() {
        var viewModelObject = {
            domain: this.searchGroup.get("domain").value,
        };
        return viewModelObject;
    }
    clearSearchForm() { }
    get searchGroup() {
        return this.searchForm.get("search");
    }
    /******** GET  *************** */
    getBySelfId() {
        this.domainService.getBySelfId("").subscribe((data) => {
            this.domainSelfId = data.details;
            /* for (const i of this.domainSelfId) {
              this.settings.columns.domain.editor.config.list.push({
                value: i.domain,
                title: i.domain,
              });
              this.settings = Object.assign({}, this.settings);
            } */
        });
    }
    onSearchFormSubmit() {
        this.loadingList = true;
        this.domainService
            .getByDomain(this.convertFormToModel())
            .subscribe((data) => {
            this.source.load(data.details);
        });
        this.loadingList = false;
    }
    getDomain() {
        this.domainService.get().subscribe((data) => {
            this.domainName = data.details;
            this.source.load(data.details);
        });
    }
    /******** ADD  *************** */
    onAdd(event) {
        const domain = {
            domain: event.newData.domain,
            dmName: event.newData.dmName,
            dmCode: event.newData.dmCode,
            dmOrder: event.newData.dmOrder,
            selfId: event.newData.selfId,
        };
        this.domainService.create(domain).subscribe((data) => {
            this.domainService
                .getByDomain(event.newData.domain)
                .subscribe((data) => {
                this.source.load(data.details);
            });
            event.confirm.resolve();
        });
    }
    /************** Edit ***********/
    onEdit(event) {
        const domain = {
            domain: event.newData.domain,
            dmName: event.newData.dmName,
            dmCode: event.newData.dmCode,
            dmOrder: event.newData.dmOrder,
            selfId: event.newData.selfId,
        };
        this.domainService.edit(event.newData.idDomain, domain).subscribe((data) => {
            event.confirm.resolve();
        });
    }
    onDelete(event) { }
}
BloodtypeComponent.ɵfac = function BloodtypeComponent_Factory(t) { return new (t || BloodtypeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_domain_domainService__WEBPACK_IMPORTED_MODULE_0__.DomainService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder)); };
BloodtypeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BloodtypeComponent, selectors: [["ngx-person"]], decls: 22, vars: 5, consts: [[3, "formGroup", "ngSubmit"], ["formGroupName", "search", "nbSpinnerStatus", "info", "nbSpinnerSize", "small", "accent", "primary"], [1, "row"], [1, "col-sm-4"], [1, "form-group"], ["for", "domain"], ["formControlName", "domain", 1, "form-control"], [4, "ngFor", "ngForOf"], ["nbButton", "", "size", "small", "status", "danger", "type", "button", 1, "mt-3", "mr-2", 3, "click"], ["nbButton", "", "size", "small", "status", "primary", "type", "submit", 1, "mt-3", "mr-2", 3, "click"], ["accent", "primary", 3, "nbSpinner"], [3, "settings", "source", "createConfirm", "editConfirm", "deleteConfirm"]], template: function BloodtypeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nb-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function BloodtypeComponent_Template_form_ngSubmit_1_listener() { return ctx.onSearchFormSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "nb-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Pesquisa:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Dom\u00EDnio");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, BloodtypeComponent_option_12_Template, 2, 1, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "nb-card-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BloodtypeComponent_Template_button_click_14_listener() { return ctx.clearSearchForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Limpar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BloodtypeComponent_Template_button_click_16_listener() { return ctx.onSearchFormSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Pesquisar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "nb-card", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "ng2-smart-table", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("createConfirm", function BloodtypeComponent_Template_ng2_smart_table_createConfirm_20_listener($event) { return ctx.onAdd($event); })("editConfirm", function BloodtypeComponent_Template_ng2_smart_table_editConfirm_20_listener($event) { return ctx.onEdit($event); })("deleteConfirm", function BloodtypeComponent_Template_ng2_smart_table_deleteConfirm_20_listener($event) { return ctx.onDelete($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "nb-card-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.searchForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.domainSelfId);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nbSpinner", ctx.loadingList);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("settings", ctx.settings)("source", ctx.source);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbCardComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupName, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbCardHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbCardBodyComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbCardFooterComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbButtonComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbSpinnerDirective, ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__.Ng2SmartTableComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJsb29kdHlwZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztFQU9FIiwiZmlsZSI6ImJsb29kdHlwZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEBpbXBvcnQgJy4uLy4uLy4uL0B0aGVtZS9zdHlsZXMvdGhlbWVzJztcclxuXHJcbkBpbmNsdWRlIG5iLWluc3RhbGwtY29tcG9uZW50KCkge1xyXG4gIG5iLWNhcmQge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxuICB9XHJcbn1cclxuICovXHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ 39416:
/*!*****************************************************!*\
  !*** ./src/app/pages/bloodtype/bloodtype.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BloodtypeModule": function() { return /* binding */ BloodtypeModule; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/theme */ 40465);
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-smart-table */ 98391);
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../@theme/theme.module */ 80268);
/* harmony import */ var _service_employee_employeeService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/employee/employeeService */ 3436);
/* harmony import */ var _bloodtype_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bloodtype-routing.module */ 66081);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _bloodtype_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bloodtype.component */ 82810);








class BloodtypeModule {
}
BloodtypeModule.ɵfac = function BloodtypeModule_Factory(t) { return new (t || BloodtypeModule)(); };
BloodtypeModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: BloodtypeModule });
BloodtypeModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [_service_employee_employeeService__WEBPACK_IMPORTED_MODULE_1__.EmployeeService], imports: [[
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbButtonModule,
            _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__.ThemeModule,
            ng2_smart_table__WEBPACK_IMPORTED_MODULE_6__.Ng2SmartTableModule,
            _bloodtype_routing_module__WEBPACK_IMPORTED_MODULE_2__.BloodtypeRoutingModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbSpinnerModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](BloodtypeModule, { declarations: [_bloodtype_component__WEBPACK_IMPORTED_MODULE_3__.BloodtypeComponent], imports: [_nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbButtonModule,
        _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__.ThemeModule,
        ng2_smart_table__WEBPACK_IMPORTED_MODULE_6__.Ng2SmartTableModule,
        _bloodtype_routing_module__WEBPACK_IMPORTED_MODULE_2__.BloodtypeRoutingModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbSpinnerModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule] }); })();


/***/ }),

/***/ 81276:
/*!*************************************************!*\
  !*** ./src/app/service/domain/domainService.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DomainService": function() { return /* binding */ DomainService; }
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _defaultService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../defaultService */ 38806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);




class DomainService extends _defaultService__WEBPACK_IMPORTED_MODULE_0__.DefaultService {
    constructor(http) {
        super('domain/');
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Basic bmFudTpuYW51'
            })
        };
    }
    get() {
        return this.http.get(`${this.url}`, this.httpOptions);
    }
    getByDomain(dModel) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set('Authorization', 'Basic bmFudTpuYW51');
        let queryDomain = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams().append("domain", dModel.domain);
        const options = { params: queryDomain, headers: headers };
        return this.http.get(`${this.url}getByDomain`, options);
    }
    getBySelfId(selfId) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set('Authorization', 'Basic bmFudTpuYW51');
        let querySelfId = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams().append("selfId", selfId);
        const options = { params: querySelfId, headers: headers };
        return this.http.get(`${this.url}getBySelfId`, options);
    }
    create(domain) {
        return this.http.post(`${this.url}`, domain, this.httpOptions);
    }
    delete(id) {
        return this.http.delete(`${this.url}/${id}`);
    }
    edit(id, domain) {
        return this.http.put(`${this.url}${id}`, domain, this.httpOptions);
    }
}
DomainService.ɵfac = function DomainService_Factory(t) { return new (t || DomainService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
DomainService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: DomainService, factory: DomainService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=src_app_pages_bloodtype_bloodtype_module_ts-es2015.js.map