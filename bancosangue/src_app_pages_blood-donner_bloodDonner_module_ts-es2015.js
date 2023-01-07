"use strict";
(self["webpackChunkngx_admin"] = self["webpackChunkngx_admin"] || []).push([["src_app_pages_blood-donner_bloodDonner_module_ts"],{

/***/ 85315:
/*!******************************************************************!*\
  !*** ./src/app/pages/blood-donner/bloodDonner-routing.module.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BloodDonnerRoutingModule": function() { return /* binding */ BloodDonnerRoutingModule; },
/* harmony export */   "routedComponents": function() { return /* binding */ routedComponents; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _bloodDonner_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bloodDonner.component */ 61523);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);




const routes = [{
        path: '',
        component: _bloodDonner_component__WEBPACK_IMPORTED_MODULE_0__.BloodDonnerComponent,
    }];
class BloodDonnerRoutingModule {
}
BloodDonnerRoutingModule.ɵfac = function BloodDonnerRoutingModule_Factory(t) { return new (t || BloodDonnerRoutingModule)(); };
BloodDonnerRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: BloodDonnerRoutingModule });
BloodDonnerRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](BloodDonnerRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();
const routedComponents = [
    _bloodDonner_component__WEBPACK_IMPORTED_MODULE_0__.BloodDonnerComponent,
];


/***/ }),

/***/ 61523:
/*!*************************************************************!*\
  !*** ./src/app/pages/blood-donner/bloodDonner.component.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BloodDonnerComponent": function() { return /* binding */ BloodDonnerComponent; }
/* harmony export */ });
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-smart-table */ 98391);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _service_blood_donnner_DonnerService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../service/blood-donnner/DonnerService */ 77277);
/* harmony import */ var _service_person_personService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/person/personService */ 22706);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/theme */ 40465);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 54364);








const _c0 = ["dialogPerson"];
const _c1 = ["dialogDelete"];
function BloodDonnerComponent_form_0_button_119_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BloodDonnerComponent_form_0_button_119_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r10.editDonner(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Editar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function BloodDonnerComponent_form_0_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "nb-card", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "nb-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "DETALHES:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "nb-card-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Nome:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Apelido:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Grupo Sangu\u00EDneo");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Numero Identifica\u00E7\u00E3o");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Data Nascimento:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Doc. Identifica\u00E7\u00E3o:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "Telefone:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Sexo:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](46, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "Endere\u00E7o");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](51, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "Endere\u00E7o Trabalho:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](57, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, "Profiss\u00E3o");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](62, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, "Escolaridade:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](67, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71, "Email:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](72, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77, "C\u00E9lulas Falsiformes");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](78, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](82, "Kell:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](83, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](87, "Hemolisina:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](88, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](93, "Fenotipo");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](94, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](98, "Tipo de Doador:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](99, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](101, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](102, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](104, "Antecedentes Pessoais:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](105, "textarea", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](106, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](107, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](108, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](109, "Exame Cl\u00EDnico:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](110, "textarea", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](111, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](112, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](113, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](114, "Exame F\u00EDsico:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](115, "textarea", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](116, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](117, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BloodDonnerComponent_form_0_Template_button_click_117_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r12.closeDetails(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](118, "nb-icon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](119, BloodDonnerComponent_form_0_button_119_Template, 2, 0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r0.resultForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](119);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.IfEdit);
} }
function BloodDonnerComponent_nb_card_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nb-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BloodDonnerComponent_nb_card_1_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r14.showAddPerson(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Novo Doador");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "form", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function BloodDonnerComponent_nb_card_1_Template_form_ngSubmit_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r16.onSearchFormSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "nb-card", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "nb-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Pesquisa:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "nb-card-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "N\u00FAmero de Identifica\u00E7\u00E3o");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "nb-card-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BloodDonnerComponent_nb_card_1_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r17.clearSearchForm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Limpar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BloodDonnerComponent_nb_card_1_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r18.onSearchFormSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Pesquisar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r1.searchForm);
} }
function BloodDonnerComponent_nb_card_2_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nb-card", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "nb-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " DOADORES: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BloodDonnerComponent_nb_card_2_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r19.closeResult(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "nb-icon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "nb-card-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ng2-smart-table", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("userRowSelect", function BloodDonnerComponent_nb_card_2_Template_ng2_smart_table_userRowSelect_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r20); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r21.onDonnerSelect($event); })("edit", function BloodDonnerComponent_nb_card_2_Template_ng2_smart_table_edit_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r20); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r22.onEdit($event); })("delete", function BloodDonnerComponent_nb_card_2_Template_ng2_smart_table_delete_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r20); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r23.onDelete($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("settings", ctx_r2.settings)("source", ctx_r2.source);
} }
function BloodDonnerComponent_form_3_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "nb-card", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "nb-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Detalhes:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "nb-card-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Doador:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "nb-icon", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BloodDonnerComponent_form_3_Template_nb_icon_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r24.searchPerson(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Kell:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "C\u00E9lulas Falsiformes");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "input", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Hemolisina:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Fenotipo");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Tipo de Doador:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "Antecedentes Pessoais:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](43, "textarea", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "Exame Cl\u00EDnico:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](48, "textarea", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "Exame F\u00EDsico:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](53, "textarea", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BloodDonnerComponent_form_3_Template_button_click_54_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r25); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r26.closeAddForm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](55, "nb-icon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BloodDonnerComponent_form_3_Template_button_click_56_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r25); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r27.addDonner(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, " Salvar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BloodDonnerComponent_form_3_Template_button_click_58_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r25); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r28.editEmployee(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, " Editar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r3.showAddForm);
} }
function BloodDonnerComponent_form_4_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "nb-card", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "nb-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Novo Doador:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "nb-card-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Doador:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "nb-icon", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BloodDonnerComponent_form_4_Template_nb_icon_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r29.searchPerson(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Kell:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "C\u00E9lulas Falsiformes");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Hemolisina:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Fenotipo");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "input", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Tipo de Doador:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "Antecedentes Pessoais:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](43, "textarea", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "Exame Cl\u00EDnico:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](48, "textarea", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "Exame F\u00EDsico:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](53, "textarea", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BloodDonnerComponent_form_4_Template_button_click_54_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r30); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r31.closeAddForm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](55, "nb-icon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BloodDonnerComponent_form_4_Template_button_click_56_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r30); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r32.addDonner(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, " Salvar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BloodDonnerComponent_form_4_Template_button_click_58_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r30); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r33.editEmployee(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, " Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r4.addForm);
} }
function BloodDonnerComponent_ng_template_5_nb_card_0_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nb-card", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "nb-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Utente: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BloodDonnerComponent_ng_template_5_nb_card_0_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r38); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r37.closeDonnerTable(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "nb-icon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "nb-card-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ng2-smart-table", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("userRowSelect", function BloodDonnerComponent_ng_template_5_nb_card_0_Template_ng2_smart_table_userRowSelect_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r38); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r39.onPersonSelect($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("settings", ctx_r36.settingsPerson)("source", ctx_r36.sourcePerson);
} }
function BloodDonnerComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, BloodDonnerComponent_ng_template_5_nb_card_0_Template, 8, 2, "nb-card", 2);
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r6.showPersonTable);
} }
function BloodDonnerComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nb-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "nb-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "ELIMINAR ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "nb-card-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Tens certeza que deseja excluir? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " ? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "nb-card-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BloodDonnerComponent_ng_template_7_Template_button_click_9_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r43); const ref_r41 = restoredCtx.dialogRef; return ref_r41.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Cancelar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BloodDonnerComponent_ng_template_7_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r43); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r44.onDeleteConfirm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Excluir");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", data_r40, "");
} }
class BloodDonnerComponent {
    constructor(formBuilder, donnerService, personService, dialogService) {
        this.formBuilder = formBuilder;
        this.donnerService = donnerService;
        this.personService = personService;
        this.dialogService = dialogService;
        /* showSearchCard: boolean = true;
        showResultForm: boolean = false;
        showAddOrEditForm: boolean = false;
        showSmartTable: boolean = false; */
        this.showSearchCard = true;
        this.showResultForm = false;
        this.showAddOrEditForm = false;
        this.showAddForm = false;
        this.showSmartTable = false;
        this.showPersonTable = false;
        this.IfEdit = false;
        this.source = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_3__.LocalDataSource();
        this.sourcePerson = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_3__.LocalDataSource();
        this.resultForm = this.formBuilder.group({
            namePerson: [""], surnamePerson: [""], dmBloodCode: [""], dmDocIdent: [""], birthday: [""], dmSex: [""],
            dmHomeAdd: [""], jobAddress: [""], profession: [""], grade: [""], email: [""], telefone: [""],
            identifNumber: [""], kell: [""], personalBackground: [""], phenotype: [""], dmTypeDonor: [""],
            physicalExam: [""], status: [""], celFalcif: [""], clinicalExam: [""], dmHemolisina: [""]
        });
        /////  SMART TABLE   ////////
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
                namePerson: {
                    title: 'Nome',
                    type: 'string',
                    valuePrepareFunction: (cell, row) => {
                        return row.idPerson.namePerson + ' ' + row.idPerson.surnamePerson;
                    }
                },
                dmBloodCode: {
                    title: 'Grupo Sanguíneo',
                    type: 'string',
                    valuePrepareFunction: (cell, row) => {
                        return row.idPerson.dmBloodCode;
                    }
                },
                identifNumber: {
                    title: 'Nº Identificação',
                    type: 'string',
                },
                email: {
                    title: 'email',
                    type: 'string',
                    valuePrepareFunction: (cell, row) => {
                        return row.idPerson.email;
                    }
                },
            },
        };
        /*  addForm = this.formBuilder.group({
           name: ["as"], surname: ["asd"], bloodCode: ["s"], dmDocIdent: ["asd"],
           birthday: ["2022-09-08"], dmSex: ["s"], homeAdd: ["asdf"], jobAddress: ["asf"],
           profession: ["fwrt"], grade: ["herg"],
      
           identNumber: ["56256"], dmFunction: ["efwe"], email: ["sdff@ds.com"],
           pw: ["zdf"]
         }); */
        this.addOrEditForm = this.formBuilder.group({
            dmTypeDonor: [""], kell: [""], celFalcif: [""], dmHemolisina: [""],
            phenotype: [""], personalBackground: [""], clinicalExam: [""], physicalExam: [""]
        });
        this.settingsPerson = {
            noDataMessage: "Sem Dados",
            mode: 'external',
            actions: { columnTitle: 'Ações', add: false, edit: false, delete: false },
            columns: {
                namePerson: {
                    title: 'Nome',
                    type: 'string',
                },
                surnamePerson: {
                    title: 'Apelido',
                    type: 'string',
                },
                dmBloodCode: {
                    title: 'G. Sanguíneo',
                    type: 'string',
                },
                dmDocIdent: {
                    title: 'Doc. Ident.',
                    type: 'string',
                },
            },
        };
        /******** ADD  *************** */
        this.addForm = this.formBuilder.group({
            kell: [""], celFalcif: [""], dmHemolisina: [""], value: [""], phenotype: [""],
            dmTypeDonor: [""], personalBackground: [""], clinicalExam: [""], physicalExam: [""]
        });
    }
    ngOnInit() {
        this.loadForms();
    }
    loadForms() {
        this.searchForm = this.formBuilder.group({
            search: this.formBuilder.group({
                identifNumber: ["mxvlEl"],
            }),
        });
    }
    get searchGroup() {
        return this.searchForm.get("search");
    }
    /*********** CLOSE FORMS */
    closeResult() {
        this.showSmartTable = false;
        this.resultForm.reset();
    }
    closeAddForm() {
        this.showAddForm = false;
        this.addOrEditForm.reset();
    }
    closeDetails() {
        this.showResultForm = false;
        this.showSearchCard = true;
    }
    ////////  GET  with Params  ///////
    convertFormToModel() {
        var viewModelObject = {
            identifNumber: this.searchGroup.get("identifNumber").value,
        };
        return viewModelObject;
    }
    onSearchFormSubmit() {
        this.showSmartTable = true;
        this.donnerService.getDonnerBy(this.convertFormToModel())
            .subscribe((data) => {
            var filtroStatus = data.details.filter(function (pesquisa) {
                var list = String(pesquisa.status);
                return list == "true";
            });
            this.source.load(filtroStatus);
            // this.source.load(data.details);
        });
    }
    clearSearchForm() {
        this.searchForm.reset();
    }
    /******** Get BY ID - Details */
    onDonnerSelect($event) {
        this.showResultForm = true;
        this.showSearchCard = false;
        this.IfEdit = false;
        if ($event.data.id) {
            this.idDonner = $event.data.id;
            console.log($event.data);
            this.resultForm.get("namePerson").setValue($event.data.idPerson.namePerson);
            this.resultForm.get("surnamePerson").setValue($event.data.idPerson.surnamePerson);
            this.resultForm.get("dmBloodCode").setValue($event.data.idPerson.dmBloodCode);
            this.resultForm.get("dmDocIdent").setValue($event.data.idPerson.dmDocIdent);
            this.resultForm.get("birthday").setValue($event.data.idPerson.birthday);
            this.resultForm.get("dmSex").setValue($event.data.idPerson.dmSex);
            this.resultForm.get("dmHomeAdd").setValue($event.data.idPerson.dmHomeAdd);
            this.resultForm.get("jobAddress").setValue($event.data.idPerson.jobAddress);
            this.resultForm.get("profession").setValue($event.data.idPerson.profession);
            this.resultForm.get("grade").setValue($event.data.idPerson.grade);
            this.resultForm.get("telefone").setValue($event.data.idPerson.telefone);
            this.resultForm.get("email").setValue($event.data.idPerson.email);
            //donner fields
            this.resultForm.get("identifNumber").setValue($event.data.identifNumber);
            this.resultForm.get("celFalcif").setValue($event.data.celFalcif);
            this.resultForm.get("kell").setValue($event.data.kell);
            this.resultForm.get("dmHemolisina").setValue($event.data.dmHemolisina);
            this.resultForm.get("phenotype").setValue($event.data.phenotype);
            this.resultForm.get("kell").setValue($event.data.kell);
            this.resultForm.get("dmTypeDonor").setValue($event.data.dmTypeDonor);
            this.resultForm.get("personalBackground").setValue($event.data.personalBackground);
            this.resultForm.get("clinicalExam").setValue($event.data.clinicalExam);
            this.resultForm.get("physicalExam").setValue($event.data.physicalExam);
            this.resultForm.get("status").setValue($event.data.status);
            this.resultForm.get("dmTypeDonor").setValue($event.data.dmTypeDonor);
        }
    }
    /******** ADD  *************** */
    showAddPerson() {
        this.showAddForm = true;
        this.showSmartTable = false;
    }
    convertPersonData() {
        var personModelObject = {
            namePerson: this.resultForm.get("namePerson").value,
            surnamePerson: this.resultForm.get("surnamePerson").value,
            dmBloodCode: this.resultForm.get("dmBloodCode").value,
            dmDocIdent: this.resultForm.get("dmDocIdent").value,
            birthday: this.resultForm.get("birthday").value,
            picturePerson: "picture",
            dmSex: this.resultForm.get("dmSex").value,
            dmHomeAdd: this.resultForm.get("dmHomeAdd").value,
            jobAddress: this.resultForm.get("jobAddress").value,
            profession: this.resultForm.get("profession").value,
            grade: this.resultForm.get("grade").value,
            whoInserted: "Hernani",
            whoUpdated: "Hernani",
            status: "true",
            email: this.resultForm.get("email").value,
            telefone: this.resultForm.get("telefone").value,
        };
        return personModelObject;
    }
    /************** Edit ***********/
    onEdit($event) {
        this.idDonner = $event.data.id;
        if ($event.data.id) {
            this.idDonner = $event.data.id;
            console.log($event.data);
            //person fields
            this.resultForm.get("namePerson").setValue($event.data.idPerson.namePerson);
            this.resultForm.get("surnamePerson").setValue($event.data.idPerson.surnamePerson);
            this.resultForm.get("dmBloodCode").setValue($event.data.idPerson.dmBloodCode);
            this.resultForm.get("dmDocIdent").setValue($event.data.idPerson.dmDocIdent);
            this.resultForm.get("birthday").setValue($event.data.idPerson.birthday);
            this.resultForm.get("dmSex").setValue($event.data.idPerson.dmSex);
            this.resultForm.get("dmHomeAdd").setValue($event.data.idPerson.dmHomeAdd);
            this.resultForm.get("jobAddress").setValue($event.data.idPerson.jobAddress);
            this.resultForm.get("profession").setValue($event.data.idPerson.profession);
            this.resultForm.get("grade").setValue($event.data.idPerson.grade);
            this.resultForm.get("telefone").setValue($event.data.idPerson.telefone);
            this.resultForm.get("email").setValue($event.data.idPerson.email);
            //donner fields
            this.resultForm.get("identifNumber").setValue($event.data.identifNumber);
            this.resultForm.get("celFalcif").setValue($event.data.celFalcif);
            this.resultForm.get("kell").setValue($event.data.kell);
            this.resultForm.get("dmHemolisina").setValue($event.data.dmHemolisina);
            this.resultForm.get("phenotype").setValue($event.data.phenotype);
            this.resultForm.get("kell").setValue($event.data.kell);
            this.resultForm.get("dmTypeDonor").setValue($event.data.dmTypeDonor);
            this.resultForm.get("personalBackground").setValue($event.data.personalBackground);
            this.resultForm.get("clinicalExam").setValue($event.data.clinicalExam);
            this.resultForm.get("physicalExam").setValue($event.data.physicalExam);
            this.resultForm.get("status").setValue($event.data.status);
            this.resultForm.get("dmTypeDonor").setValue($event.data.dmTypeDonor);
        }
        this.showResultForm = true;
        this.showSearchCard = false;
        this.IfEdit = true;
    }
    convertEditFormToModel() {
        var viewModelObject = {
            personDto: this.convertPersonData(),
            kell: this.resultForm.get("kell").value,
            dmHemolisina: this.resultForm.get("dmHemolisina").value,
            celFalcif: this.resultForm.get("celFalcif").value,
            phenotype: this.resultForm.get("phenotype").value,
            dmTypeDonor: this.resultForm.get("dmTypeDonor").value,
            personalBackground: this.resultForm.get("personalBackground").value,
            clinicalExam: this.resultForm.get("clinicalExam").value,
            physicalExam: this.resultForm.get("physicalExam").value,
            whoInserted: "string",
            whoUpdated: "string",
        };
        return viewModelObject;
    }
    editDonner() {
        this.convertEditFormToModel();
        this.donnerService.edit(this.convertEditFormToModel(), this.idDonner, 'bbd6c39a-3c69-497c-8ca6-fab04dd51698').subscribe((data) => {
            console.log(data);
        });
    }
    searchPerson() {
        this.valueToSearch = this.addForm.get("value").value;
        this.showPersonTable = true;
        this.showSearchCard = true;
        this.dialogRef = this.dialogService.open(this.dialogPerson);
        this.personService.getByOne(this.valueToSearch).subscribe((data) => {
            /* this.sourcePerson = data.details; */
            var filtroStatus = data.details[0].filter(function (pesquisa) {
                var list = Boolean(pesquisa.status);
                return list == true;
            });
            this.source.load(filtroStatus);
        });
    }
    closeDonnerTable() {
        this.showPersonTable = false;
        this.showSearchCard = true;
        this.dialogRef.close();
    }
    convertAddFormToModel() {
        var viewModelObject = {
            //Person: this.convertPersonData(),
            kell: this.addForm.get("kell").value,
            dmHemolisina: this.addForm.get("dmHemolisina").value,
            celFalcif: this.addForm.get("celFalcif").value,
            phenotype: this.addForm.get("phenotype").value,
            dmTypeDonor: this.addForm.get("dmTypeDonor").value,
            personalBackground: this.addForm.get("personalBackground").value,
            clinicalExam: this.addForm.get("clinicalExam").value,
            physicalExam: this.addForm.get("physicalExam").value,
            whoUpdated: "Hernani"
        };
        return viewModelObject;
    }
    onPersonSelect($event) {
        if ($event.data.id) {
            this.idPerson = $event.data.id;
            this.personResponse = $event.data;
            this.addForm.get("value").setValue(this.personResponse.namePerson + " " + this.personResponse.surnamePerson);
            this.addForm.get("personalBackground").setValue($event.data.personalBackground);
            this.addForm.get("clinicalExam").setValue($event.data.clinicalExam);
            this.addForm.get("physicalExam").setValue($event.data.physicalExam);
            this.addForm.get("kell").setValue($event.data.kell);
            this.addForm.get("dmHemolisina").setValue($event.data.dmHemolisina);
            this.addForm.get("phenotype").setValue($event.data.phenotype);
        }
        this.dialogRef.close();
    }
    addDonner() {
        console.log(this.idPerson);
        this.convertFormToModel();
        this.donnerService.create(this.convertAddFormToModel(), 'bbd6c39a-3c69-497c-8ca6-fab04dd51698', this.idPerson).subscribe((data) => {
            console.log(data);
        });
    }
    onDelete($event) {
        this.idDonner = $event.data.id;
        this.refreshTable = $event.data;
        this.dialogRef = this.dialogService.open(this.dialogDelete);
    }
    onDeleteConfirm() {
        this.donnerService.changeStatus(this.idDonner).subscribe((data) => {
            this.dialogRef.close();
            this.source.remove(this.refreshTable);
        });
    }
}
BloodDonnerComponent.ɵfac = function BloodDonnerComponent_Factory(t) { return new (t || BloodDonnerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_blood_donnner_DonnerService__WEBPACK_IMPORTED_MODULE_0__.DonnerService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_person_personService__WEBPACK_IMPORTED_MODULE_1__.PersonService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbDialogService)); };
BloodDonnerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: BloodDonnerComponent, selectors: [["ngx-employee"]], viewQuery: function BloodDonnerComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.dialogPerson = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.dialogDelete = _t.first);
    } }, decls: 9, vars: 5, consts: [[3, "formGroup", 4, "ngIf"], [4, "ngIf"], ["accent", "primary", 4, "ngIf"], ["dialogPerson", ""], ["dialogDelete", ""], [3, "formGroup"], ["accent", "primary"], [1, "row"], [1, "col-sm-4"], [1, "form-group"], ["type", "text", "nbInput", "", "formControlName", "namePerson", "placeholder", "Nome"], ["type", "text", "nbInput", "", "formControlName", "surnamePerson", "placeholder", "Apelido"], [1, "onDeleteConfirmcol-sm-4"], ["type", "text", "nbInput", "", "formControlName", "dmBloodCode", "placeholder", "Grupo Sangu\u00EDneo"], ["type", "text", "nbInput", "", "formControlName", "identifNumber", "placeholder", "Num.Identifica\u00E7\u00E3o"], ["type", "text", "nbInput", "", "formControlName", "birthday", "placeholder", "Data de Nascimento"], ["type", "text", "nbInput", "", "formControlName", "dmDocIdent", "placeholder", "Documento de Ident."], ["type", "text", "nbInput", "", "formControlName", "telefone", "placeholder", "Telefone"], ["type", "text", "nbInput", "", "formControlName", "dmSex", "placeholder", "Sexo"], ["type", "text", "nbInput", "", "formControlName", "dmHomeAdd", "placeholder", "Endere\u00E7o"], ["type", "text", "nbInput", "", "formControlName", "jobAddress", "placeholder", "Ender.Trabalho"], ["type", "text", "nbInput", "", "formControlName", "profession", "placeholder", "Profiss\u00E3o"], ["type", "text", "nbInput", "", "formControlName", "grade", "placeholder", "Escolaridade"], ["type", "text", "nbInput", "", "formControlName", "email", "placeholder", "Email"], ["type", "text", "nbInput", "", "formControlName", "celFalcif", "placeholder", "C\u00E9lulas Falsiformes"], ["type", "text", "nbInput", "", "formControlName", "kell", "placeholder", "Kell"], ["type", "text", "nbInput", "", "formControlName", "dmHemolisina", "placeholder", "Hemolisina"], ["type", "text", "nbInput", "", "formControlName", "phenotype", "placeholder", "Profiss\u00E3o"], ["type", "text", "nbInput", "", "formControlName", "dmTypeDonor", "placeholder", "Tipo de Doador"], ["nbInput", "", "formControlName", "personalBackground", "placeholder", "Antecedentes Pessoais", "rows", "3", "cols", "50"], ["nbInput", "", "formControlName", "clinicalExam", "placeholder", "Exame Cl\u00EDnico", "rows", "3", "cols", "50"], ["nbInput", "", "formControlName", "physicalExam", "placeholder", "Exame F\u00EDsico", "rows", "3", "cols", "50"], ["nbButton", "", "title", "button", "size", "small", "type", "button", "status", "danger", 1, "mt-3", "mr-2", 3, "click"], ["icon", "close-outline"], ["nbButton", "", "class", "mt-3 mr-2", "size", "small", "type", "button", "status", "primary", 3, "click", 4, "ngIf"], ["nbButton", "", "size", "small", "type", "button", "status", "primary", 1, "mt-3", "mr-2", 3, "click"], ["nbButton", "", "size", "small", "status", "primary", "type", "button", 3, "click"], [3, "formGroup", "ngSubmit"], ["formGroupName", "search", "nbSpinnerStatus", "info", "nbSpinnerSize", "small", "accent", "primary"], ["for", "identifNumber"], ["type", "text", "id", "identifNumber", "formControlName", "identifNumber", 1, "form-control"], ["nbButton", "", "size", "small", "status", "danger", "type", "button", 1, "mt-3", "mr-2", 3, "click"], ["nbButton", "", "size", "small", "status", "primary", "type", "submit", 1, "mt-3", "mr-2", 3, "click"], [1, "headerList"], ["title", "button", "nbButton", "", "size", "small", "type", "button", "status", "danger", 1, "mt-3", "mr-2", 3, "click"], [3, "settings", "source", "userRowSelect", "edit", "delete"], [1, "form-groupp"], ["type", "text", "nbInput", "", "formControlName", "value", "placeholder", "Nome/Doc.Ident."], ["icon", "search-outline", 3, "click"], ["type", "text", "nbInput", "", "formControlName", "dmHemolisina", "placeholder", "C\u00E9lulas Falsiformes"], ["type", "text", "nbInput", "", "formControlName", "celFalcif", "placeholder", "Hemolisina"], ["type", "text", "nbInput", "", "formControlName", "phenotype", "placeholder", "Fenotipo"], [3, "settings", "source", "userRowSelect"], [2, "font-weight", "bold"], ["nbButton", "", "status", "danger", 3, "click"], ["nbButton", "", "status", "primary", 1, "btn-action-modal", 3, "click"]], template: function BloodDonnerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, BloodDonnerComponent_form_0_Template, 120, 2, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, BloodDonnerComponent_nb_card_1_Template, 19, 1, "nb-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, BloodDonnerComponent_nb_card_2_Template, 8, 2, "nb-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, BloodDonnerComponent_form_3_Template, 60, 1, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, BloodDonnerComponent_form_4_Template, 60, 1, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, BloodDonnerComponent_ng_template_5_Template, 1, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, BloodDonnerComponent_ng_template_7_Template, 13, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showResultForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showSearchCard);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showSmartTable);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showAddOrEditForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showAddForm);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardBodyComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbButtonComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbIconComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupName, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardFooterComponent, ng2_smart_table__WEBPACK_IMPORTED_MODULE_3__.Ng2SmartTableComponent], styles: [".form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.headerList[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.personalData[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  margin-bottom: 15px;\n  font-weight: bold;\n}\n.jobData[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  margin-bottom: 15px;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJsb29kRG9ubmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0VBT0U7QUFFRDtFQUNDLGFBQWE7RUFDYixzQkFBc0I7QUFBeEI7QUFHQztFQUNDLGFBQWM7RUFDZCw4QkFBOEI7QUFBaEM7QUFHQztFQUNDLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQW5CO0FBR0M7RUFDQyxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUFuQiIsImZpbGUiOiJibG9vZERvbm5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEBpbXBvcnQgJy4uLy4uLy4uL0B0aGVtZS9zdHlsZXMvdGhlbWVzJztcclxuXHJcbkBpbmNsdWRlIG5iLWluc3RhbGwtY29tcG9uZW50KCkge1xyXG4gIG5iLWNhcmQge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxuICB9XHJcbn1cclxuICovXHJcblxyXG4gLmZvcm0tZ3JvdXB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gfVxyXG5cclxuIC5oZWFkZXJMaXN0e1xyXG4gIGRpc3BsYXk6ICBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuIH1cclxuXHJcbiAucGVyc29uYWxEYXRhe1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuIH1cclxuXHJcbiAuam9iRGF0YXtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiB9XHJcbiJdfQ== */"] });


/***/ }),

/***/ 76977:
/*!**********************************************************!*\
  !*** ./src/app/pages/blood-donner/bloodDonner.module.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BloodDonnerModule": function() { return /* binding */ BloodDonnerModule; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/theme */ 40465);
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-smart-table */ 98391);
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../@theme/theme.module */ 80268);
/* harmony import */ var _service_employee_employeeService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/employee/employeeService */ 3436);
/* harmony import */ var _bloodDonner_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bloodDonner-routing.module */ 85315);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _bloodDonner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bloodDonner.component */ 61523);








class BloodDonnerModule {
}
BloodDonnerModule.ɵfac = function BloodDonnerModule_Factory(t) { return new (t || BloodDonnerModule)(); };
BloodDonnerModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: BloodDonnerModule });
BloodDonnerModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [_service_employee_employeeService__WEBPACK_IMPORTED_MODULE_1__.EmployeeService], imports: [[
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbButtonModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbTreeGridModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbIconModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbInputModule,
            _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__.ThemeModule,
            ng2_smart_table__WEBPACK_IMPORTED_MODULE_6__.Ng2SmartTableModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _bloodDonner_routing_module__WEBPACK_IMPORTED_MODULE_2__.BloodDonnerRoutingModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](BloodDonnerModule, { declarations: [_bloodDonner_component__WEBPACK_IMPORTED_MODULE_3__.BloodDonnerComponent], imports: [_nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbButtonModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbTreeGridModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbIconModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbInputModule,
        _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__.ThemeModule,
        ng2_smart_table__WEBPACK_IMPORTED_MODULE_6__.Ng2SmartTableModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
        _bloodDonner_routing_module__WEBPACK_IMPORTED_MODULE_2__.BloodDonnerRoutingModule] }); })();


/***/ }),

/***/ 77277:
/*!********************************************************!*\
  !*** ./src/app/service/blood-donnner/DonnerService.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DonnerService": function() { return /* binding */ DonnerService; }
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _defaultService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../defaultService */ 38806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);




class DonnerService extends _defaultService__WEBPACK_IMPORTED_MODULE_0__.DefaultService {
    constructor(http) {
        super('blooddonor/');
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Basic bmFudTpuYW51'
            })
        };
    }
    getDonner() {
        return this.http.get(`${this.url}`, this.httpOptions);
    }
    getDonnerBy(searchDonner) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set("Authorization", "Basic bmFudTpuYW51");
        let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams().append("identifNumber", searchDonner.identifNumber);
        const options = { params: queryParams, headers: headers };
        return this.http.get(`${this.url}opts`, options);
    }
    create(donner, idEmpl, idPerson) {
        return this.http.post(`${this.url}${idEmpl}/${idPerson}`, donner, this.httpOptions);
    }
    findById(id) {
        return this.http.get(`${this.url}${id}`, this.httpOptions);
    }
    edit(donner, idDonner, idEmpl) {
        return this.http.put(`${this.url}${idDonner}/${idEmpl}`, donner, this.httpOptions);
    }
    changeStatus(id) {
        return this.http.put(`${this.url}changestatus/${id}`, null, this.httpOptions);
    }
}
DonnerService.ɵfac = function DonnerService_Factory(t) { return new (t || DonnerService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
DonnerService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: DonnerService, factory: DonnerService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=src_app_pages_blood-donner_bloodDonner_module_ts-es2015.js.map