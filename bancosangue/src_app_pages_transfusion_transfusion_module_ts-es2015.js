"use strict";
(self["webpackChunkngx_admin"] = self["webpackChunkngx_admin"] || []).push([["src_app_pages_transfusion_transfusion_module_ts"],{

/***/ 99953:
/*!*****************************************************************!*\
  !*** ./src/app/pages/transfusion/transfusion-routing.module.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransfusionRoutingModule": function() { return /* binding */ TransfusionRoutingModule; },
/* harmony export */   "routedComponents": function() { return /* binding */ routedComponents; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _transfusion_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transfusion.component */ 26576);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);




const routes = [
    {
        path: '',
        component: _transfusion_component__WEBPACK_IMPORTED_MODULE_0__.TransfusionComponent,
    },
];
class TransfusionRoutingModule {
}
TransfusionRoutingModule.ɵfac = function TransfusionRoutingModule_Factory(t) { return new (t || TransfusionRoutingModule)(); };
TransfusionRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: TransfusionRoutingModule });
TransfusionRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TransfusionRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();
const routedComponents = [
    _transfusion_component__WEBPACK_IMPORTED_MODULE_0__.TransfusionComponent,
];


/***/ }),

/***/ 26576:
/*!************************************************************!*\
  !*** ./src/app/pages/transfusion/transfusion.component.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransfusionComponent": function() { return /* binding */ TransfusionComponent; }
/* harmony export */ });
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-smart-table */ 98391);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _service_blood_collection_ts_BloodCollectService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../service/blood-collection.ts/BloodCollectService */ 23389);
/* harmony import */ var _service_person_personService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/person/personService */ 22706);
/* harmony import */ var _service_sample_SampleService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/sample/SampleService */ 28825);
/* harmony import */ var _service_bloodTest_BloodTestService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/bloodTest/BloodTestService */ 19243);
/* harmony import */ var _service_transfusion_transfusionService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/transfusion/transfusionService */ 14131);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nebular/theme */ 40465);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 54364);











const _c0 = ["dialogDelete"];
const _c1 = ["dialogPerson"];
function TransfusionComponent_form_0_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "nb-card", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "nb-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Detalhes da An\u00E1lise:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "nb-card-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "N\u00BA An\u00E1lise");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "AgHBs:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "hcv");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "HIV 1 e 2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](25, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "VDRL");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](30, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, "G.Sangu\u00EDneo");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](35, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39, "Conclus\u00E3o");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](40, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42, "Detalhes Amostra");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](47, "N\u00BA Amostra");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](48, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](52, "Validade");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](53, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](55, "Detalhes do Funcion\u00E1rio:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](60, "Nome:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](61, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](63, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](65, "N\u00BA Ident.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](66, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](67, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TransfusionComponent_form_0_Template_button_click_67_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r9.closeDetails(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](68, "nb-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r0.resultForm);
} }
function TransfusionComponent_nb_card_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "nb-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "form", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function TransfusionComponent_nb_card_1_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r11.onSearchFormSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "nb-card", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "nb-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TransfusionComponent_nb_card_1_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r13.showAddBloodCollect(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, " Nova Transfus\u00E3o ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "nb-card-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "N\u00FAmero Transfus\u00E3o");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "nb-card-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TransfusionComponent_nb_card_1_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r14.clearSearchForm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, " Limpar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TransfusionComponent_nb_card_1_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r15.onSearchFormSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, " Pesquisar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r1.searchForm);
} }
function TransfusionComponent_nb_card_2_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "nb-card", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "nb-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " TRANSFUS\u00C3O: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TransfusionComponent_nb_card_2_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r16.closeResult(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "nb-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "nb-card-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "ng2-smart-table", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("userRowSelect", function TransfusionComponent_nb_card_2_Template_ng2_smart_table_userRowSelect_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r17); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r18.onTransfSelect($event); })("edit", function TransfusionComponent_nb_card_2_Template_ng2_smart_table_edit_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r17); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r19.onEdit($event); })("delete", function TransfusionComponent_nb_card_2_Template_ng2_smart_table_delete_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r17); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r20.onDelete($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("settings", ctx_r2.settings)("source", ctx_r2.source);
} }
function TransfusionComponent_form_3_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "nb-card", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "nb-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Nova Amostra:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "nb-card-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "N\u00FAmero de Colheita:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "nb-icon", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TransfusionComponent_form_3_Template_nb_icon_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r21.searchSample(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Validade:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "N\u00BA Amostra:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](22, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TransfusionComponent_form_3_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r22); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r23.closeAddForm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](24, "nb-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TransfusionComponent_form_3_Template_button_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r22); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r24.addCollect(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, " Salvar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r3.addForm);
} }
function TransfusionComponent_ng_template_4_nb_card_0_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "nb-card", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "nb-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " COLHEITAS: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TransfusionComponent_ng_template_4_nb_card_0_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r28.closeDonnerTable(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "nb-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "nb-card-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "ng2-smart-table", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("userRowSelect", function TransfusionComponent_ng_template_4_nb_card_0_Template_ng2_smart_table_userRowSelect_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r29); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r30.onCollectSelect($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("settings", ctx_r27.settingsCollection)("source", ctx_r27.sourceCollection);
} }
function TransfusionComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, TransfusionComponent_ng_template_4_nb_card_0_Template, 8, 2, "nb-card", 2);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r5.showdonnerTable);
} }
function TransfusionComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "nb-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "nb-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "ELIMINAR ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "nb-card-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, " Tens certeza que deseja excluir? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, " ? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "nb-card-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TransfusionComponent_ng_template_6_Template_button_click_9_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r34); const ref_r32 = restoredCtx.dialogRef; return ref_r32.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Cancelar");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TransfusionComponent_ng_template_6_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r34); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r35.onDeleteConfirm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, " Excluir ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", data_r31, "");
} }
function TransfusionComponent_form_8_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "nb-card", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "nb-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Editar Doa\u00E7\u00E3o:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "nb-card-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Validade:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "N\u00BA Amostra:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TransfusionComponent_form_8_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r37); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r36.closeEditForm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "nb-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TransfusionComponent_form_8_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r37); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r38.editCollect(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, " Salvar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r8.editForm);
} }
class TransfusionComponent {
    constructor(formBuilder, bloodCollectService, personService, sampleService, bloodService, bloodtestService, transfService, dialogService) {
        this.formBuilder = formBuilder;
        this.bloodCollectService = bloodCollectService;
        this.personService = personService;
        this.sampleService = sampleService;
        this.bloodService = bloodService;
        this.bloodtestService = bloodtestService;
        this.transfService = transfService;
        this.dialogService = dialogService;
        this.showSearchCard = true;
        this.showResultForm = false;
        this.showEditForm = false;
        this.showAddForm = false;
        this.showSmartTable = false;
        this.showdonnerTable = false;
        this.source = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_6__.LocalDataSource();
        this.sourceCollection = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_6__.LocalDataSource();
        this.resultForm = this.formBuilder.group({
            //Blood Test
            testNumber: [""], aghbs: [""], hcv: [""],
            hiv: [""], vdrl: [""], bloodType: [""], dmConclusion: [""],
            //Sample
            sampleNumber: [""], expirationDate: [""],
            //Employee
            nameEmployee: [""], identifNumber: [""]
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
                transfNumber: {
                    title: 'Nº Transfusão',
                    type: 'string',
                },
                namePerson: {
                    title: 'Receptor',
                    type: 'string',
                    valuePrepareFunction: (cell, row) => {
                        return row.idPerson.namePerson + ' '
                            + row.idPerson.surnamePerson;
                    }
                },
                Funcionário: {
                    title: 'Funcionário',
                    type: 'string',
                    valuePrepareFunction: (cell, row) => {
                        return row.idEmployee.idPerson.namePerson + ' '
                            + row.idEmployee.idPerson.surnamePerson;
                    }
                },
                dmBloodCode: {
                    title: 'G. Sanguíneo',
                    type: 'string',
                    valuePrepareFunction: (cell, row) => { return row.idStock.collection.bloodType; }
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
                transfNumber: ["ZvHWx2"],
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
            transfNumber: this.searchGroup.get("transfNumber").value,
            //insertionDate: this.searchGroup.get("insertionDate").value,
        };
        return viewModelObject;
    }
    onSearchFormSubmit() {
        this.showSmartTable = true;
        this.transfService.findByTransfNumber(this.convertFormToModel())
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
    onTransfSelect($event) {
        this.showResultForm = true;
        this.showSearchCard = false;
        if ($event.data.id) {
            this.idTest = $event.data.id;
            this.bloodtestService.findById(this.idTest).subscribe((data) => {
                this.testResponse = data.details[0];
                //blood collection fields
                this.resultForm.get("testNumber").setValue($event.data.testNumber);
                this.resultForm.get("aghbs").setValue($event.data.aghbs);
                this.resultForm.get("hcv").setValue($event.data.hcv);
                this.resultForm.get("hiv").setValue($event.data.hiv);
                this.resultForm.get("vdrl").setValue($event.data.vdrl);
                this.resultForm.get("bloodType").setValue($event.data.idSample.idCollection.bloodType);
                this.resultForm.get("dmConclusion").setValue($event.data.dmConclusion);
                //sample fields
                this.resultForm.get("sampleNumber").setValue($event.data.idSample.sampleNumber);
                this.resultForm.get("expirationDate").setValue($event.data.idSample.idCollection.expirationDate);
                //employee fields
                this.resultForm.get("nameEmployee").setValue($event.data.idEmployee.idPerson.namePerson + " "
                    + $event.data.idEmployee.idPerson.surnamePerson);
                this.resultForm.get("identifNumber").setValue($event.data.idEmployee.identifNumber);
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
        this.idTest = $event.data.id;
        this.refreshTable = $event.data;
        this.dialogRef = this.dialogService.open(this.dialogDelete);
    }
    onDeleteConfirm() {
        this.bloodCollectService.changeStatus(this.idTest).subscribe((data) => {
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
TransfusionComponent.ɵfac = function TransfusionComponent_Factory(t) { return new (t || TransfusionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_service_blood_collection_ts_BloodCollectService__WEBPACK_IMPORTED_MODULE_0__.BloodCollectService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_service_person_personService__WEBPACK_IMPORTED_MODULE_1__.PersonService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_service_sample_SampleService__WEBPACK_IMPORTED_MODULE_2__.SampleService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_service_blood_collection_ts_BloodCollectService__WEBPACK_IMPORTED_MODULE_0__.BloodCollectService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_service_bloodTest_BloodTestService__WEBPACK_IMPORTED_MODULE_3__.BloodTestService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_service_transfusion_transfusionService__WEBPACK_IMPORTED_MODULE_4__.TransfusionService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbDialogService)); };
TransfusionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: TransfusionComponent, selectors: [["ngx-stock"]], viewQuery: function TransfusionComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c1, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.dialogDelete = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.dialogPerson = _t.first);
    } }, decls: 9, vars: 5, consts: [[3, "formGroup", 4, "ngIf"], [4, "ngIf"], ["accent", "primary", 4, "ngIf"], ["dialogPerson", ""], ["dialogDelete", ""], [3, "formGroup"], ["accent", "primary"], [1, "row"], [1, "col-sm-4"], [1, "form-group"], ["type", "text", "nbInput", "", "formControlName", "testNumber", "placeholder", "N\u00FAmero"], ["type", "text", "nbInput", "", "formControlName", "aghbs", "placeholder", "aghbs"], ["type", "text", "nbInput", "", "formControlName", "hcv", "placeholder", "hcv"], ["type", "text", "nbInput", "", "formControlName", "hiv", "placeholder", "hiv"], ["type", "text", "nbInput", "", "formControlName", "vdrl", "placeholder", "vdrl"], ["type", "text", "nbInput", "", "formControlName", "bloodType", "placeholder", "G.Sangu\u00EDneo"], ["type", "text", "nbInput", "", "formControlName", "dmConclusion", "placeholder", "Conclus\u00E3o"], ["type", "text", "nbInput", "", "formControlName", "sampleNumber", "placeholder", "N\u00BA Amostra"], ["type", "text", "nbInput", "", "formControlName", "expirationDate", "placeholder", "Validade"], ["type", "text", "nbInput", "", "formControlName", "nameEmployee", "placeholder", "Nome"], ["type", "text", "nbInput", "", "formControlName", "identifNumber", "placeholder", "Num.Identifica\u00E7\u00E3o "], ["title", "button", "nbButton", "", "size", "small", "type", "button", "status", "danger", 1, "mt-3", "mr-2", 3, "click"], ["icon", "close-outline"], [3, "formGroup", "ngSubmit"], ["formGroupName", "search", "nbSpinnerStatus", "info", "nbSpinnerSize", "small", "accent", "primary"], ["nbButton", "", "size", "small", "status", "primary", "type", "button", 3, "click"], ["for", "transfNumber"], ["type", "text", "id", "transfNumber", "formControlName", "transfNumber", 1, "form-control"], ["nbButton", "", "size", "small", "status", "danger", "type", "button", 1, "mt-3", "mr-2", 3, "click"], ["nbButton", "", "size", "small", "status", "primary", "type", "submit", 1, "mt-3", "mr-2", 3, "click"], [1, "headerList"], [3, "settings", "source", "userRowSelect", "edit", "delete"], [1, "form-groupp"], ["type", "text", "nbInput", "", "formControlName", "value"], ["icon", "search-outline", 3, "click"], ["type", "text", "nbInput", "", "formControlName", "sampleNumber", "placeholder", "Quantidade"], ["nbButton", "", "size", "small", "type", "button", "status", "primary", 1, "mt-3", "mr-2", 3, "click"], [3, "settings", "source", "userRowSelect"], [2, "font-weight", "bold"], ["nbButton", "", "status", "danger", 3, "click"], ["nbButton", "", "status", "primary", 1, "btn-action-modal", 3, "click"]], template: function TransfusionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, TransfusionComponent_form_0_Template, 69, 1, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, TransfusionComponent_nb_card_1_Template, 18, 1, "nb-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, TransfusionComponent_nb_card_2_Template, 8, 2, "nb-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, TransfusionComponent_form_3_Template, 27, 1, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, TransfusionComponent_ng_template_4_Template, 1, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, TransfusionComponent_ng_template_6_Template, 13, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, TransfusionComponent_form_8_Template, 20, 1, "form", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showResultForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showSearchCard);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showSmartTable);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showAddForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showEditForm);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbCardHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbCardBodyComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbButtonComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbIconComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupName, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbCardFooterComponent, ng2_smart_table__WEBPACK_IMPORTED_MODULE_6__.Ng2SmartTableComponent], styles: [".form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.headerList[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.personalData[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  margin-bottom: 15px;\n  font-weight: bold;\n}\n.jobData[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  margin-bottom: 15px;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYW5zZnVzaW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0VBT0U7QUFFRDtFQUNDLGFBQWE7RUFDYixzQkFBc0I7QUFBeEI7QUFHQztFQUNDLGFBQWM7RUFDZCw4QkFBOEI7QUFBaEM7QUFHQztFQUNDLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQW5CO0FBR0M7RUFDQyxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUFuQiIsImZpbGUiOiJ0cmFuc2Z1c2lvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEBpbXBvcnQgJy4uLy4uLy4uL0B0aGVtZS9zdHlsZXMvdGhlbWVzJztcclxuXHJcbkBpbmNsdWRlIG5iLWluc3RhbGwtY29tcG9uZW50KCkge1xyXG4gIG5iLWNhcmQge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxuICB9XHJcbn1cclxuICovXHJcblxyXG4gLmZvcm0tZ3JvdXB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gfVxyXG5cclxuIC5oZWFkZXJMaXN0e1xyXG4gIGRpc3BsYXk6ICBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuIH1cclxuXHJcbiAucGVyc29uYWxEYXRhe1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuIH1cclxuXHJcbiAuam9iRGF0YXtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiB9XHJcbiJdfQ== */"] });


/***/ }),

/***/ 69622:
/*!*********************************************************!*\
  !*** ./src/app/pages/transfusion/transfusion.module.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransfusionModule": function() { return /* binding */ TransfusionModule; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/theme */ 40465);
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-smart-table */ 98391);
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../@theme/theme.module */ 80268);
/* harmony import */ var _service_bloodTest_BloodTestService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/bloodTest/BloodTestService */ 19243);
/* harmony import */ var _transfusion_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transfusion-routing.module */ 99953);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _transfusion_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transfusion.component */ 26576);








class TransfusionModule {
}
TransfusionModule.ɵfac = function TransfusionModule_Factory(t) { return new (t || TransfusionModule)(); };
TransfusionModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: TransfusionModule });
TransfusionModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [_service_bloodTest_BloodTestService__WEBPACK_IMPORTED_MODULE_1__.BloodTestService], imports: [[
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbButtonModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbTreeGridModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbIconModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbInputModule,
            _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__.ThemeModule,
            ng2_smart_table__WEBPACK_IMPORTED_MODULE_6__.Ng2SmartTableModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _transfusion_routing_module__WEBPACK_IMPORTED_MODULE_2__.TransfusionRoutingModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](TransfusionModule, { declarations: [_transfusion_component__WEBPACK_IMPORTED_MODULE_3__.TransfusionComponent], imports: [_nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbButtonModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbTreeGridModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbIconModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbInputModule,
        _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__.ThemeModule,
        ng2_smart_table__WEBPACK_IMPORTED_MODULE_6__.Ng2SmartTableModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
        _transfusion_routing_module__WEBPACK_IMPORTED_MODULE_2__.TransfusionRoutingModule] }); })();


/***/ }),

/***/ 14131:
/*!***********************************************************!*\
  !*** ./src/app/service/transfusion/transfusionService.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransfusionService": function() { return /* binding */ TransfusionService; }
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _defaultService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../defaultService */ 38806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);




class TransfusionService extends _defaultService__WEBPACK_IMPORTED_MODULE_0__.DefaultService {
    constructor(http) {
        super('transfusion/');
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Basic bmFudTpuYW51'
            })
        };
    }
    findById(id) {
        return this.http.get(`${this.url}${id}`, this.httpOptions);
    }
    changeStatus(id) {
        return this.http.put(`${this.url}changestatus/${id}`, null, this.httpOptions);
    }
    findByTransfNumber(searchtransf) {
        return this.http.get(`${this.url}transfusion/${searchtransf.transfNumber}`, this.httpOptions);
    }
    create(testModel, idEmp, idSample) {
        return this.http.post(`${this.url}/${idEmp}/${idSample}`, testModel, this.httpOptions);
    }
}
TransfusionService.ɵfac = function TransfusionService_Factory(t) { return new (t || TransfusionService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
TransfusionService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: TransfusionService, factory: TransfusionService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=src_app_pages_transfusion_transfusion_module_ts-es2015.js.map