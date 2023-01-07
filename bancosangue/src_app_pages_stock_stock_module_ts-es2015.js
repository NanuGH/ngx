"use strict";
(self["webpackChunkngx_admin"] = self["webpackChunkngx_admin"] || []).push([["src_app_pages_stock_stock_module_ts"],{

/***/ 35529:
/*!*****************************************************!*\
  !*** ./src/app/pages/stock/stock-routing.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StockRoutingModule": function() { return /* binding */ StockRoutingModule; },
/* harmony export */   "routedComponents": function() { return /* binding */ routedComponents; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _stock_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stock.component */ 23729);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);




const routes = [
    {
        path: '',
        component: _stock_component__WEBPACK_IMPORTED_MODULE_0__.StockComponent,
    },
];
class StockRoutingModule {
}
StockRoutingModule.ɵfac = function StockRoutingModule_Factory(t) { return new (t || StockRoutingModule)(); };
StockRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: StockRoutingModule });
StockRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](StockRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();
const routedComponents = [
    _stock_component__WEBPACK_IMPORTED_MODULE_0__.StockComponent,
];


/***/ }),

/***/ 23729:
/*!************************************************!*\
  !*** ./src/app/pages/stock/stock.component.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StockComponent": function() { return /* binding */ StockComponent; }
/* harmony export */ });
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-smart-table */ 98391);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _service_stock_StockService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../service/stock/StockService */ 6646);
/* harmony import */ var _service_blood_collection_ts_BloodCollectService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/blood-collection.ts/BloodCollectService */ 23389);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/theme */ 40465);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 54364);








const _c0 = ["dialogDelete"];
const _c1 = ["dialogPerson"];
function StockComponent_form_0_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "nb-card", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "nb-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Detalhes:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "nb-card-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Detalhes da Colheita:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "N\u00FAmero:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Quantidade:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Data Inser\u00E7\u00E3o");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Validade");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Detalhes do Doador:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Nome:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Doc. Identifica\u00E7\u00E3o");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "Email:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](45, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "Detalhes do Funcion\u00E1rio:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "Nome:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](53, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "N\u00BA Ident.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](58, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function StockComponent_form_0_Template_button_click_59_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r8.closeDetails(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](60, "nb-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r0.resultForm);
} }
function StockComponent_nb_card_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "nb-card");
} }
function StockComponent_nb_card_2_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nb-card", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "nb-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " STOCK QUARENTENA: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function StockComponent_nb_card_2_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r10.AddForm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " Nova Entrada ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "nb-card-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ng2-smart-table", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("userRowSelect", function StockComponent_nb_card_2_Template_ng2_smart_table_userRowSelect_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r12.onStockSelect($event); })("edit", function StockComponent_nb_card_2_Template_ng2_smart_table_edit_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r13.onEdit($event); })("delete", function StockComponent_nb_card_2_Template_ng2_smart_table_delete_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r14.onDelete($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("settings", ctx_r2.settings)("source", ctx_r2.source);
} }
function StockComponent_form_3_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "nb-card", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "nb-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Nova Inser\u00E7\u00E3o:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "nb-card-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "N\u00BA Colheita:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "nb-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function StockComponent_form_3_Template_nb_icon_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r15.searchCollection(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function StockComponent_form_3_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r17.closeAddForm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "nb-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function StockComponent_form_3_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r18.addStock(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, " Salvar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r3.addForm);
} }
function StockComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nb-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "nb-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "ELIMINAR ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "nb-card-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Tens certeza que deseja excluir? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " ? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "nb-card-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function StockComponent_ng_template_4_Template_button_click_9_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r22); const ref_r20 = restoredCtx.dialogRef; return ref_r20.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Cancelar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function StockComponent_ng_template_4_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r22); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r23.onDeleteConfirm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " Excluir ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", data_r19, "");
} }
function StockComponent_ng_template_6_nb_card_0_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nb-card", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "nb-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " COLHEITAS: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function StockComponent_ng_template_6_nb_card_0_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r27.closeCollectionTable(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "nb-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "nb-card-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ng2-smart-table", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("userRowSelect", function StockComponent_ng_template_6_nb_card_0_Template_ng2_smart_table_userRowSelect_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r28); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r29.onCollectSelect($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("settings", ctx_r26.settingsCollection)("source", ctx_r26.sourceCollections);
} }
function StockComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, StockComponent_ng_template_6_nb_card_0_Template, 8, 2, "nb-card", 2);
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r7.showCollections);
} }
class StockComponent {
    constructor(formBuilder, stockService, bloodCollService, dialogService) {
        this.formBuilder = formBuilder;
        this.stockService = stockService;
        this.bloodCollService = bloodCollService;
        this.dialogService = dialogService;
        this.showSearchCard = true;
        this.showResultForm = false;
        this.showAddOrEditForm = false;
        this.showSmartTable = true;
        this.showAddForm = false;
        this.showCollections = false;
        this.source = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_3__.LocalDataSource();
        this.sourceCollections = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_3__.LocalDataSource();
        this.resultForm = this.formBuilder.group({
            //Blood Collection
            collectionNumber: [""], qtdde: [""], insertionDate: [""], expirationDate: [""],
            //Donner
            nameDonner: [""], surnameDonner: [""], dmDocIdent: [""], telefone: [""],
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
                insertionDate: {
                    title: 'Data Inserção',
                    type: 'string',
                },
                expirationDate: {
                    title: 'Validade',
                    type: 'string',
                },
                collectionNumber: {
                    title: 'Colheita',
                    type: 'string',
                    valuePrepareFunction: (cell, row) => { return row.collection.collectionNumber; }
                },
                namePerson: {
                    title: 'Doador',
                    type: 'string',
                    valuePrepareFunction: (cell, row) => {
                        return row.collection.idPerson.namePerson + ' '
                            + row.collection.idPerson.surnamePerson;
                    }
                },
                dmBloodCode: {
                    title: 'G. Sanguíneo',
                    type: 'string',
                    valuePrepareFunction: (cell, row) => { return row.collection.idPerson.dmBloodCode; }
                },
                surnamePerson: {
                    title: 'Funcionário',
                    type: 'string',
                    valuePrepareFunction: (cell, row) => { return row.collection.idEmployee.identifNumber; }
                },
            },
        };
        this.addForm = this.formBuilder.group({
            value: [""]
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
                bloodType: {
                    title: 'G. Sanguíneo',
                    type: 'string',
                },
                insertionDate: {
                    title: 'Data Colheita',
                    type: 'string',
                },
            },
        };
    }
    ngOnInit() {
        this.loadForms();
        this.getAll();
    }
    loadForms() {
        this.searchForm = this.formBuilder.group({
            search: this.formBuilder.group({
                collectionNumber: [""]
            }),
        });
    }
    convertFormToModel() {
        var viewModelObject = {
            collectionNumber: this.searchGroup.get("collectionNumber").value,
        };
        return viewModelObject;
    }
    get searchGroup() {
        return this.searchForm.get("search");
    }
    /*********** CLOSE FORMS */
    closeResult() {
        this.showSmartTable = false;
    }
    closeAddForm() {
        this.showAddForm = false;
    }
    closeDetails() {
        this.showResultForm = false;
        this.showSearchCard = true;
    }
    ////////        GET  ALL Stock        ///////
    getAll() {
        this.stockService.getAll("p")
            .subscribe((data) => {
            this.source.load(data.details[0]);
        });
    }
    ////////        GET  with Params        ///////
    convertCollectioSearch() {
        var collectionModel = {
            collectionNumber: this.searchGroup.get("collectionNumber").value,
        };
        return collectionModel;
    }
    onSearchFormSubmit() {
        this.convertCollectioSearch();
        this.showSmartTable = true;
        this.stockService.findByCollectionNumber(this.convertCollectioSearch())
            .subscribe((data) => {
            this.source.load(data.details);
        });
    }
    clearSearchForm() {
        this.searchForm.reset();
    }
    /******** Get BY ID - Details */
    onStockSelect($event) {
        this.showResultForm = true;
        this.showSearchCard = false;
        if ($event.data.id) {
            this.idStock = $event.data.id;
            //blood collection fields
            this.resultForm.get("collectionNumber").setValue($event.data.collection.collectionNumber);
            this.resultForm.get("qtdde").setValue($event.data.collection.qtdde);
            this.resultForm.get("insertionDate").setValue($event.data.insertionDate);
            this.resultForm.get("expirationDate").setValue($event.data.expirationDate);
            //donner fields
            this.resultForm.get("nameDonner").setValue($event.data.collection.idPerson.namePerson + " "
                + $event.data.collection.idPerson.surnamePerson);
            this.resultForm.get("dmDocIdent").setValue($event.data.collection.idPerson.dmDocIdent);
            this.resultForm.get("telefone").setValue($event.data.collection.idPerson.telefone);
            //employee fields
            this.resultForm.get("nameEmployee").setValue($event.data.collection.idEmployee.idPerson.namePerson + " "
                + $event.data.collection.idEmployee.idPerson.surnamePerson);
            this.resultForm.get("identifNumber").setValue($event.data.collection.idEmployee.identifNumber);
        }
    }
    /******** ADD  *************** */
    AddForm() {
        this.showAddForm = true;
    }
    convertAddForm() {
        var viewModelObject = {
            expirationDate: "",
            dmCodeStockType: "",
            whoInserted: "",
            whoUpdated: "",
            status: ""
        };
        return viewModelObject;
    }
    onCollectSelect($event) {
        if ($event.data.id) {
            this.idCollect = $event.data.id;
            this.collectResponse = $event.data;
            this.addForm.get("value").setValue(this.collectResponse.collectionNumber);
        }
        this.dialogRef.close();
    }
    addStock() {
        this.convertAddForm();
        this.stockService.create(this.convertAddForm(), this.idCollect, 'bbd6c39a-3c69-497c-8ca6-fab04dd51698').subscribe((data) => {
            console.log(data);
        });
    }
    onDelete($event) {
        /*  this.idBloodCollect = $event.data.id;
         this.dialogRef = this.dialogService.open(this.dialogDelete); */
    }
    searchCollection() {
        this.valueToSearch = this.addForm.get("value").value;
        this.showCollections = true;
        this.showSearchCard = false;
        this.dialogRef = this.dialogService.open(this.dialogPerson);
        this.bloodCollService.findByCollectionNumber(this.valueToSearch).subscribe((data) => {
            this.sourceCollections = data.details;
        });
    }
    closeCollectionTable() {
        this.showCollections = false;
        this.showSearchCard = true;
        this.dialogRef.close();
    }
}
StockComponent.ɵfac = function StockComponent_Factory(t) { return new (t || StockComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_stock_StockService__WEBPACK_IMPORTED_MODULE_0__.StockService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_blood_collection_ts_BloodCollectService__WEBPACK_IMPORTED_MODULE_1__.BloodCollectService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbDialogService)); };
StockComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: StockComponent, selectors: [["ngx-stock"]], viewQuery: function StockComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.dialogDelete = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.dialogPerson = _t.first);
    } }, decls: 8, vars: 4, consts: [[3, "formGroup", 4, "ngIf"], [4, "ngIf"], ["accent", "primary", 4, "ngIf"], ["dialogDelete", ""], ["dialogPerson", ""], [3, "formGroup"], ["accent", "primary"], [1, "row"], [1, "col-sm-4"], [1, "form-group"], ["type", "text", "nbInput", "", "formControlName", "collectionNumber", "placeholder", "N\u00FAmero"], ["type", "text", "nbInput", "", "formControlName", "qtdde", "placeholder", "Quantidade"], ["type", "text", "nbInput", "", "formControlName", "insertionDate", "placeholder", "Externo"], ["type", "text", "nbInput", "", "formControlName", "expirationDate", "placeholder", "Externo"], ["type", "text", "nbInput", "", "formControlName", "nameDonner", "placeholder", "Nome"], ["type", "text", "nbInput", "", "formControlName", "dmDocIdent", "placeholder", "Num.Identifica\u00E7\u00E3o "], ["type", "text", "nbInput", "", "formControlName", "telefone", "placeholder", "Email"], ["type", "text", "nbInput", "", "formControlName", "nameEmployee", "placeholder", "Nome"], ["type", "text", "nbInput", "", "formControlName", "identifNumber", "placeholder", "Num.Identifica\u00E7\u00E3o "], ["nbButton", "", "title", "button", "size", "small", "type", "button", "status", "danger", 1, "mt-3", "mr-2", 3, "click"], ["icon", "close-outline"], [1, "headerList"], ["nbButton", "", "size", "small", "status", "primary", "type", "button", 3, "click"], [3, "settings", "source", "userRowSelect", "edit", "delete"], [1, "form-groupp"], ["type", "text", "nbInput", "", "formControlName", "value"], ["icon", "search-outline", 3, "click"], ["nbButton", "", "size", "small", "type", "button", "status", "primary", 1, "mt-3", "mr-2", 3, "click"], [2, "font-weight", "bold"], ["nbButton", "", "status", "danger", 3, "click"], ["nbButton", "", "status", "primary", 1, "btn-action-modal", 3, "click"], ["title", "button", "nbButton", "", "size", "small", "type", "button", "status", "danger", 1, "mt-3", "mr-2", 3, "click"], [3, "settings", "source", "userRowSelect"]], template: function StockComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, StockComponent_form_0_Template, 61, 1, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, StockComponent_nb_card_1_Template, 1, 0, "nb-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, StockComponent_nb_card_2_Template, 8, 2, "nb-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, StockComponent_form_3_Template, 16, 1, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, StockComponent_ng_template_4_Template, 13, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, StockComponent_ng_template_6_Template, 1, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showResultForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showSearchCard);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showSmartTable);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showAddForm);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardBodyComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbButtonComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbIconComponent, ng2_smart_table__WEBPACK_IMPORTED_MODULE_3__.Ng2SmartTableComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardFooterComponent], styles: [".form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.headerList[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.personalData[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  margin-bottom: 15px;\n  font-weight: bold;\n}\n.jobData[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  margin-bottom: 15px;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b2NrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0VBT0U7QUFFRDtFQUNDLGFBQWE7RUFDYixzQkFBc0I7QUFBeEI7QUFHQztFQUNDLGFBQWM7RUFDZCw4QkFBOEI7QUFBaEM7QUFHQztFQUNDLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQW5CO0FBR0M7RUFDQyxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUFuQiIsImZpbGUiOiJzdG9jay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEBpbXBvcnQgJy4uLy4uLy4uL0B0aGVtZS9zdHlsZXMvdGhlbWVzJztcclxuXHJcbkBpbmNsdWRlIG5iLWluc3RhbGwtY29tcG9uZW50KCkge1xyXG4gIG5iLWNhcmQge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxuICB9XHJcbn1cclxuICovXHJcblxyXG4gLmZvcm0tZ3JvdXB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gfVxyXG5cclxuIC5oZWFkZXJMaXN0e1xyXG4gIGRpc3BsYXk6ICBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuIH1cclxuXHJcbiAucGVyc29uYWxEYXRhe1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuIH1cclxuXHJcbiAuam9iRGF0YXtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiB9XHJcbiJdfQ== */"] });


/***/ }),

/***/ 86706:
/*!*********************************************!*\
  !*** ./src/app/pages/stock/stock.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BloodCollectModule": function() { return /* binding */ BloodCollectModule; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/theme */ 40465);
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-smart-table */ 98391);
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../@theme/theme.module */ 80268);
/* harmony import */ var _service_person_personService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/person/personService */ 22706);
/* harmony import */ var _stock_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stock-routing.module */ 35529);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _stock_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stock.component */ 23729);








class BloodCollectModule {
}
BloodCollectModule.ɵfac = function BloodCollectModule_Factory(t) { return new (t || BloodCollectModule)(); };
BloodCollectModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: BloodCollectModule });
BloodCollectModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [_service_person_personService__WEBPACK_IMPORTED_MODULE_1__.PersonService], imports: [[
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbButtonModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbTreeGridModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbIconModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbInputModule,
            _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__.ThemeModule,
            ng2_smart_table__WEBPACK_IMPORTED_MODULE_6__.Ng2SmartTableModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _stock_routing_module__WEBPACK_IMPORTED_MODULE_2__.StockRoutingModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](BloodCollectModule, { declarations: [_stock_component__WEBPACK_IMPORTED_MODULE_3__.StockComponent], imports: [_nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbButtonModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbTreeGridModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbIconModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbInputModule,
        _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__.ThemeModule,
        ng2_smart_table__WEBPACK_IMPORTED_MODULE_6__.Ng2SmartTableModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
        _stock_routing_module__WEBPACK_IMPORTED_MODULE_2__.StockRoutingModule] }); })();


/***/ }),

/***/ 6646:
/*!***********************************************!*\
  !*** ./src/app/service/stock/StockService.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StockService": function() { return /* binding */ StockService; }
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _defaultService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../defaultService */ 38806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);




class StockService extends _defaultService__WEBPACK_IMPORTED_MODULE_0__.DefaultService {
    constructor(http) {
        super('stock/');
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
    findByCollectionNumber(searchStock) {
        return this.http.get(`${this.url}getStockOpts/${searchStock.collectionNumber}`, this.httpOptions);
    }
    create(stock, idCollect, idEmp) {
        return this.http.post(`${this.url}${idCollect}/${idEmp}`, stock, this.httpOptions);
    }
    getAll(type) {
        return this.http.get(`${this.url}stockType/${type}`, this.httpOptions);
    }
}
StockService.ɵfac = function StockService_Factory(t) { return new (t || StockService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
StockService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: StockService, factory: StockService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=src_app_pages_stock_stock_module_ts-es2015.js.map