"use strict";
(self["webpackChunkngx_admin"] = self["webpackChunkngx_admin"] || []).push([["src_app_pages_sample_sample_module_ts"],{

/***/ 85944:
/*!*******************************************************!*\
  !*** ./src/app/pages/sample/sample-routing.module.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StockRoutingModule": function() { return /* binding */ StockRoutingModule; },
/* harmony export */   "routedComponents": function() { return /* binding */ routedComponents; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _sample_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sample.component */ 60614);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);




const routes = [
    {
        path: '',
        component: _sample_component__WEBPACK_IMPORTED_MODULE_0__.SampleComponent,
    },
];
class StockRoutingModule {
}
StockRoutingModule.ɵfac = function StockRoutingModule_Factory(t) { return new (t || StockRoutingModule)(); };
StockRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: StockRoutingModule });
StockRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](StockRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();
const routedComponents = [
    _sample_component__WEBPACK_IMPORTED_MODULE_0__.SampleComponent,
];


/***/ }),

/***/ 60614:
/*!**************************************************!*\
  !*** ./src/app/pages/sample/sample.component.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SampleComponent": function() { return /* binding */ SampleComponent; }
/* harmony export */ });
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-smart-table */ 98391);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _service_blood_collection_ts_BloodCollectService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../service/blood-collection.ts/BloodCollectService */ 23389);
/* harmony import */ var _service_person_personService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../service/person/personService */ 22706);
/* harmony import */ var _service_sample_SampleService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/sample/SampleService */ 28825);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nebular/theme */ 40465);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 54364);









const _c0 = ["dialogDelete"];
const _c1 = ["dialogPerson"];
function SampleComponent_form_0_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "nb-card", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "nb-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Detalhes:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "nb-card-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Detalhes da Colheita:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "N\u00FAmero:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Quantidade:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Externo");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Detalhes do Doador:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Nome:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](30, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "Doc. Identifica\u00E7\u00E3o");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](35, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "Email:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](40, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "Detalhes do Funcion\u00E1rio:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, "Nome:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](48, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52, "N\u00BA Ident.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](53, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57, "Fun\u00E7\u00E3o:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](58, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SampleComponent_form_0_Template_button_click_59_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r9.closeDetails(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](60, "nb-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r0.resultForm);
} }
function SampleComponent_nb_card_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nb-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "form", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function SampleComponent_nb_card_1_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r11.onSearchFormSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "nb-card", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "nb-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SampleComponent_nb_card_1_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r13.showAddBloodCollect(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " Nova Amostra ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "nb-card-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "N\u00FAmero Amostra");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "nb-card-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SampleComponent_nb_card_1_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r14.clearSearchForm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, " Limpar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SampleComponent_nb_card_1_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r15.onSearchFormSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, " Pesquisar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r1.searchForm);
} }
function SampleComponent_nb_card_2_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nb-card", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "nb-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " AMOSTRAS: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SampleComponent_nb_card_2_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r16.closeResult(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "nb-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "nb-card-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "ng2-smart-table", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("userRowSelect", function SampleComponent_nb_card_2_Template_ng2_smart_table_userRowSelect_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r17); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r18.onEmploIdSelect($event); })("edit", function SampleComponent_nb_card_2_Template_ng2_smart_table_edit_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r17); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r19.onEdit($event); })("delete", function SampleComponent_nb_card_2_Template_ng2_smart_table_delete_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r17); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r20.onDelete($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("settings", ctx_r2.settings)("source", ctx_r2.source);
} }
function SampleComponent_form_3_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "nb-card", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "nb-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Nova Amostra:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "nb-card-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "N\u00FAmero de Colheita:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "nb-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SampleComponent_form_3_Template_nb_icon_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r21.searchSample(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Validade:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "N\u00BA Amostra:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SampleComponent_form_3_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r22); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r23.closeAddForm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "nb-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SampleComponent_form_3_Template_button_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r22); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r24.addCollect(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, " Salvar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r3.addForm);
} }
function SampleComponent_ng_template_4_nb_card_0_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nb-card", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "nb-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " COLHEITAS: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SampleComponent_ng_template_4_nb_card_0_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r28.closeDonnerTable(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "nb-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "nb-card-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "ng2-smart-table", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("userRowSelect", function SampleComponent_ng_template_4_nb_card_0_Template_ng2_smart_table_userRowSelect_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r29); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r30.onCollectSelect($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("settings", ctx_r27.settingsCollection)("source", ctx_r27.sourceCollection);
} }
function SampleComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, SampleComponent_ng_template_4_nb_card_0_Template, 8, 2, "nb-card", 2);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r5.showdonnerTable);
} }
function SampleComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nb-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "nb-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "ELIMINAR ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "nb-card-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " Tens certeza que deseja excluir? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, " ? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "nb-card-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SampleComponent_ng_template_6_Template_button_click_9_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r34); const ref_r32 = restoredCtx.dialogRef; return ref_r32.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Cancelar");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SampleComponent_ng_template_6_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r34); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r35.onDeleteConfirm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, " Excluir ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", data_r31, "");
} }
function SampleComponent_form_8_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "nb-card", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "nb-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Editar Doa\u00E7\u00E3o:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "nb-card-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Validade:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "N\u00BA Amostra:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SampleComponent_form_8_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r37); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r36.closeEditForm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "nb-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SampleComponent_form_8_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r37); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r38.editCollect(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, " Salvar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r8.editForm);
} }
class SampleComponent {
    constructor(formBuilder, bloodCollectService, personService, sampleService, dialogService) {
        this.formBuilder = formBuilder;
        this.bloodCollectService = bloodCollectService;
        this.personService = personService;
        this.sampleService = sampleService;
        this.dialogService = dialogService;
        this.showSearchCard = true;
        this.showResultForm = false;
        this.showEditForm = false;
        this.showAddForm = false;
        this.showSmartTable = false;
        this.showdonnerTable = false;
        this.source = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__.LocalDataSource();
        this.sourceCollection = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__.LocalDataSource();
        this.resultForm = this.formBuilder.group({
            //Donner
            id: [""], nameDonner: [""], surnameDonner: [""], bloodCode: [""], dmDocIdent: [""], birthday: [""], dmSex: [""],
            homeAdd: [""], jobAddress: [""], profession: [""], grade: [""], email: [""],
            //Blood Collection
            identifNumber: [""], dmfunction: [""],
            //Employee
            collectionNumber: [""], qtdde: [""], externCollection: [""], nameEmployee: [""], surnameEmployee: [""],
        });
        /////    SMART TABLE     //////////
        this.settings = {
            noDataMessage: "Sem Dados",
            mode: 'external',
            actions: { columnTitle: 'Ações', add: false },
            add: {
                addButtonContent: '<i class="nb-plus"></i>',
                createButtonContent: '<i class="nb-checkmark"></i>',
                cancelButtonContent: '<i class="nb-close"></i>',
            },
            edit: {
                editButtonContent: '<i class="nb-edit"></i>',
                saveButtonContent: '<i class="nb-checkmark"></i>',
                cancelButtonContent: '<i class="nb-close"></i>',
                //confirmSave: true
            },
            delete: {
                deleteButtonContent: '<i class="nb-trash"></i>',
                confirmDelete: true,
            },
            columns: {
                sampleNumber: {
                    title: 'Amostra',
                    type: 'string',
                },
                namePerson: {
                    title: 'Doador',
                    type: 'string',
                    valuePrepareFunction: (cell, row) => {
                        return row.idCollection.idPerson.namePerson + ' '
                            + row.idCollection.idPerson.surnamePerson;
                    }
                },
                surnamePerson: {
                    title: 'Funcionário',
                    type: 'string',
                    valuePrepareFunction: (cell, row) => { return row.idEmployee.identifNumber; }
                },
                dmBloodCode: {
                    title: 'G. Sanguíneo',
                    type: 'string',
                    valuePrepareFunction: (cell, row) => { return row.idCollection.bloodType; }
                },
                insertionDate: {
                    title: 'Data Inserção',
                    type: 'string',
                },
            },
        };
        this.addForm = this.formBuilder.group({
            expirationDate: [""], sampleNumber: [""], value: [""]
        });
        /************** Edit ***********/
        this.editForm = this.formBuilder.group({
            expirationDate: ["as"], sampleNumber: ["asd"]
        });
        this.settingsCollection = {
            noDataMessage: "Sem Dados",
            mode: 'external',
            actions: { columnTitle: 'Ações', add: false },
            add: {
                addButtonContent: '<i class="nb-plus"></i>',
                createButtonContent: '<i class="nb-checkmark"></i>',
                cancelButtonContent: '<i class="nb-close"></i>',
            },
            edit: {
                editButtonContent: '<i class="nb-edit"></i>',
                saveButtonContent: '<i class="nb-checkmark"></i>',
                cancelButtonContent: '<i class="nb-close"></i>',
                //confirmSave: true
            },
            delete: {
                deleteButtonContent: '<i class="nb-trash"></i>',
                confirmDelete: true,
            },
            columns: {
                collectionNumber: {
                    title: 'Nº Colheita',
                    type: 'string',
                },
                namePerson: {
                    title: 'Doador',
                    type: 'string',
                    valuePrepareFunction: (cell, row) => {
                        return row.idPerson.namePerson + ' '
                            + row.idPerson.surnamePerson;
                    }
                },
                bloodType: {
                    title: 'G. Sanguíneo',
                    type: 'string',
                },
            },
        };
    }
    ngOnInit() {
        this.loadForms();
    }
    loadForms() {
        this.searchForm = this.formBuilder.group({
            search: this.formBuilder.group({
                sampleNumber: ["string"],
                //insertionDate: ["2022-11-07"]
            }),
        });
    }
    get searchGroup() {
        return this.searchForm.get("search");
    }
    /*********** CLOSE FORMS */
    closeResult() {
        this.showSmartTable = false;
    }
    closeEditForm() {
        this.showEditForm = false;
    }
    closeDetails() {
        this.showResultForm = false;
        this.showSearchCard = true;
    }
    closeAddForm() {
        this.showAddForm = false;
        this.addForm.reset();
        this.showSearchCard = true;
    }
    ////////        GET  with Params        ///////
    convertFormToModel() {
        var viewModelObject = {
            sampleNumber: this.searchGroup.get("sampleNumber").value,
            //insertionDate: this.searchGroup.get("insertionDate").value,
        };
        return viewModelObject;
    }
    onSearchFormSubmit() {
        this.showSmartTable = true;
        this.sampleService.findBySampleNumber(this.convertFormToModel())
            .subscribe((data) => {
            /* var filtroStatus = data.details[0].filter(
              function (pesquisa) {
                var list = String(pesquisa.status)
                return list == "true";
              }
            );
            this.source.load(filtroStatus); */
            this.source.load(data.details);
        });
        this.showAddForm = false;
    }
    clearSearchForm() {
        this.searchForm.reset();
    }
    /******** Get BY ID - Details */
    onEmploIdSelect($event) {
        this.showResultForm = true;
        this.showSearchCard = false;
        if ($event.data.id) {
            this.idBloodCollect = $event.data.id;
            this.bloodCollectService.findById(this.idBloodCollect).subscribe((data) => {
                this.personResponse = data.details[0];
                //blood collection fields
                this.resultForm.get("collectionNumber").setValue($event.data.collectionNumber);
                this.resultForm.get("qtdde").setValue($event.data.qtdde);
                this.resultForm.get("externCollection").setValue($event.data.externCollection);
                //donner fields
                this.resultForm.get("nameDonner").setValue($event.data.idPerson.namePerson + " "
                    + $event.data.idPerson.surnamePerson);
                this.resultForm.get("dmDocIdent").setValue($event.data.idPerson.dmDocIdent);
                this.resultForm.get("email").setValue($event.data.idPerson.email);
                //employee fields
                this.resultForm.get("nameEmployee").setValue($event.data.idEmployee.idPerson.namePerson + " "
                    + $event.data.idEmployee.idPerson.surnamePerson);
                this.resultForm.get("identifNumber").setValue($event.data.idEmployee.identifNumber);
                this.resultForm.get("dmfunction").setValue($event.data.idEmployee.dmfunction);
            });
        }
    }
    /******** ADD  *************** */
    showAddBloodCollect() {
        this.showAddForm = true;
        this.showSmartTable = false;
    }
    convertAddFormToModel() {
        var viewModelObject = {
            expirationDate: this.addForm.get("expirationDate").value,
            sampleNumber: this.addForm.get("sampleNumber").value,
        };
        return viewModelObject;
    }
    onCollectSelect($event) {
        if ($event.data.id) {
            this.idCollection = $event.data.id;
            this.collectResponse = $event.data;
            this.addForm.get("value").setValue(this.collectResponse.collectionNumber);
            this.addForm.get("expirationDate").setValue($event.data.expirationDate);
        }
        this.dialogRef.close();
    }
    addCollect() {
        this.convertFormToModel();
        this.sampleService.create(this.convertAddFormToModel(), this.idCollection, 'bbd6c39a-3c69-497c-8ca6-fab04dd51698').subscribe((data) => {
            console.log(data);
        });
    }
    onDelete($event) {
        this.idBloodCollect = $event.data.id;
        this.refreshTable = $event.data;
        this.dialogRef = this.dialogService.open(this.dialogDelete);
    }
    onDeleteConfirm() {
        this.bloodCollectService.changeStatus(this.idBloodCollect).subscribe((data) => {
            this.dialogRef.close();
            this.source.remove(this.refreshTable);
        });
    }
    searchSample() {
        this.valueToSearch = this.addForm.get("value").value;
        this.showdonnerTable = true;
        this.showSearchCard = false;
        this.dialogRef = this.dialogService.open(this.dialogPerson);
        this.bloodCollectService.findByCollectionNumber(this.valueToSearch).subscribe((data) => {
            this.sourceCollection = data.details;
        });
    }
    closeDonnerTable() {
        this.showdonnerTable = false;
        this.showSearchCard = true;
        this.dialogRef.close();
    }
}
SampleComponent.ɵfac = function SampleComponent_Factory(t) { return new (t || SampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_blood_collection_ts_BloodCollectService__WEBPACK_IMPORTED_MODULE_0__.BloodCollectService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_person_personService__WEBPACK_IMPORTED_MODULE_1__.PersonService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_sample_SampleService__WEBPACK_IMPORTED_MODULE_2__.SampleService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbDialogService)); };
SampleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SampleComponent, selectors: [["ngx-stock"]], viewQuery: function SampleComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c1, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.dialogDelete = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.dialogPerson = _t.first);
    } }, decls: 9, vars: 5, consts: [[3, "formGroup", 4, "ngIf"], [4, "ngIf"], ["accent", "primary", 4, "ngIf"], ["dialogPerson", ""], ["dialogDelete", ""], [3, "formGroup"], ["accent", "primary"], [1, "row"], [1, "col-sm-4"], [1, "form-group"], ["type", "text", "nbInput", "", "formControlName", "collectionNumber", "placeholder", "N\u00FAmero"], ["type", "text", "nbInput", "", "formControlName", "qtdde", "placeholder", "Quantidade"], ["type", "text", "nbInput", "", "formControlName", "externCollection", "placeholder", "Externo"], ["type", "text", "nbInput", "", "formControlName", "nameDonner", "placeholder", "Nome"], ["type", "text", "nbInput", "", "formControlName", "dmDocIdent", "placeholder", "Num.Identifica\u00E7\u00E3o "], ["type", "text", "nbInput", "", "formControlName", "email", "placeholder", "Email"], ["type", "text", "nbInput", "", "formControlName", "nameEmployee", "placeholder", "Nome"], ["type", "text", "nbInput", "", "formControlName", "identifNumber", "placeholder", "Num.Identifica\u00E7\u00E3o "], ["type", "text", "nbInput", "", "formControlName", "dmfunction", "placeholder", "Fun\u00E7\u00E3o"], ["title", "button", "nbButton", "", "size", "small", "type", "button", "status", "danger", 1, "mt-3", "mr-2", 3, "click"], ["icon", "close-outline"], [3, "formGroup", "ngSubmit"], ["formGroupName", "search", "nbSpinnerStatus", "info", "nbSpinnerSize", "small", "accent", "primary"], ["nbButton", "", "size", "small", "status", "primary", "type", "button", 3, "click"], ["for", "sampleNumber"], ["type", "text", "id", "sampleNumber", "formControlName", "sampleNumber", 1, "form-control"], ["nbButton", "", "size", "small", "status", "danger", "type", "button", 1, "mt-3", "mr-2", 3, "click"], ["nbButton", "", "size", "small", "status", "primary", "type", "submit", 1, "mt-3", "mr-2", 3, "click"], [1, "headerList"], [3, "settings", "source", "userRowSelect", "edit", "delete"], [1, "form-groupp"], ["type", "text", "nbInput", "", "formControlName", "value"], ["icon", "search-outline", 3, "click"], ["type", "text", "nbInput", "", "formControlName", "expirationDate", "placeholder", "Validade"], ["type", "text", "nbInput", "", "formControlName", "sampleNumber", "placeholder", "Quantidade"], ["nbButton", "", "size", "small", "type", "button", "status", "primary", 1, "mt-3", "mr-2", 3, "click"], [3, "settings", "source", "userRowSelect"], [2, "font-weight", "bold"], ["nbButton", "", "status", "danger", 3, "click"], ["nbButton", "", "status", "primary", 1, "btn-action-modal", 3, "click"], ["type", "text", "nbInput", "", "formControlName", "sampleNumber", "placeholder", "N\u00BA Amostra"]], template: function SampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, SampleComponent_form_0_Template, 61, 1, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SampleComponent_nb_card_1_Template, 18, 1, "nb-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, SampleComponent_nb_card_2_Template, 8, 2, "nb-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, SampleComponent_form_3_Template, 27, 1, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, SampleComponent_ng_template_4_Template, 1, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, SampleComponent_ng_template_6_Template, 13, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, SampleComponent_form_8_Template, 20, 1, "form", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showResultForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showSearchCard);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showSmartTable);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showAddForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showEditForm);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbCardHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbCardBodyComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbButtonComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbIconComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupName, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbCardFooterComponent, ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__.Ng2SmartTableComponent], styles: [".form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.headerList[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.personalData[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  margin-bottom: 15px;\n  font-weight: bold;\n}\n.jobData[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  margin-bottom: 15px;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhbXBsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztFQU9FO0FBRUQ7RUFDQyxhQUFhO0VBQ2Isc0JBQXNCO0FBQXhCO0FBR0M7RUFDQyxhQUFjO0VBQ2QsOEJBQThCO0FBQWhDO0FBR0M7RUFDQyxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUFuQjtBQUdDO0VBQ0MsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFBbkIiLCJmaWxlIjoic2FtcGxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQGltcG9ydCAnLi4vLi4vLi4vQHRoZW1lL3N0eWxlcy90aGVtZXMnO1xyXG5cclxuQGluY2x1ZGUgbmItaW5zdGFsbC1jb21wb25lbnQoKSB7XHJcbiAgbmItY2FyZCB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xyXG4gIH1cclxufVxyXG4gKi9cclxuXHJcbiAuZm9ybS1ncm91cHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiB9XHJcblxyXG4gLmhlYWRlckxpc3R7XHJcbiAgZGlzcGxheTogIGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gfVxyXG5cclxuIC5wZXJzb25hbERhdGF7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gfVxyXG5cclxuIC5qb2JEYXRhe1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuIH1cclxuIl19 */"] });


/***/ }),

/***/ 17082:
/*!***********************************************!*\
  !*** ./src/app/pages/sample/sample.module.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SampleModule": function() { return /* binding */ SampleModule; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/theme */ 40465);
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-smart-table */ 98391);
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../@theme/theme.module */ 80268);
/* harmony import */ var _service_person_personService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/person/personService */ 22706);
/* harmony import */ var _sample_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sample-routing.module */ 85944);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _sample_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sample.component */ 60614);








class SampleModule {
}
SampleModule.ɵfac = function SampleModule_Factory(t) { return new (t || SampleModule)(); };
SampleModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: SampleModule });
SampleModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [_service_person_personService__WEBPACK_IMPORTED_MODULE_1__.PersonService], imports: [[
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbButtonModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbTreeGridModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbIconModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbInputModule,
            _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__.ThemeModule,
            ng2_smart_table__WEBPACK_IMPORTED_MODULE_6__.Ng2SmartTableModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _sample_routing_module__WEBPACK_IMPORTED_MODULE_2__.StockRoutingModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](SampleModule, { declarations: [_sample_component__WEBPACK_IMPORTED_MODULE_3__.SampleComponent], imports: [_nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbButtonModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbTreeGridModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbIconModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbInputModule,
        _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__.ThemeModule,
        ng2_smart_table__WEBPACK_IMPORTED_MODULE_6__.Ng2SmartTableModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
        _sample_routing_module__WEBPACK_IMPORTED_MODULE_2__.StockRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_sample_sample_module_ts-es2015.js.map