(function () {
  "use strict";

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkngx_admin"] = self["webpackChunkngx_admin"] || []).push([["src_app_pages_bloodTest_bloodTest_module_ts"], {
    /***/
    98301:
    /*!*************************************************************!*\
      !*** ./src/app/pages/bloodTest/bloodTest-routing.module.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BloodTestRoutingModule": function BloodTestRoutingModule() {
          return (
            /* binding */
            _BloodTestRoutingModule
          );
        },

        /* harmony export */
        "routedComponents": function routedComponents() {
          return (
            /* binding */
            _routedComponents
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _bloodTest_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./bloodTest.component */
      62906);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var routes = [{
        path: '',
        component: _bloodTest_component__WEBPACK_IMPORTED_MODULE_0__.BloodTestComponent
      }];

      var _BloodTestRoutingModule = /*#__PURE__*/_createClass(function _BloodTestRoutingModule() {
        _classCallCheck(this, _BloodTestRoutingModule);
      });

      _BloodTestRoutingModule.ɵfac = function BloodTestRoutingModule_Factory(t) {
        return new (t || _BloodTestRoutingModule)();
      };

      _BloodTestRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _BloodTestRoutingModule
      });
      _BloodTestRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_BloodTestRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
        });
      })();

      var _routedComponents = [_bloodTest_component__WEBPACK_IMPORTED_MODULE_0__.BloodTestComponent];
      /***/
    },

    /***/
    62906:
    /*!********************************************************!*\
      !*** ./src/app/pages/bloodTest/bloodTest.component.ts ***!
      \********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BloodTestComponent": function BloodTestComponent() {
          return (
            /* binding */
            _BloodTestComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var ng2_smart_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ng2-smart-table */
      98391);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _service_blood_collection_ts_BloodCollectService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../service/blood-collection.ts/BloodCollectService */
      23389);
      /* harmony import */


      var _service_person_personService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../service/person/personService */
      22706);
      /* harmony import */


      var _service_sample_SampleService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../service/sample/SampleService */
      28825);
      /* harmony import */


      var _service_bloodTest_BloodTestService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../service/bloodTest/BloodTestService */
      19243);
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @nebular/theme */
      40465);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      54364);

      var _c0 = ["dialogDelete"];
      var _c1 = ["dialogPerson"];

      function BloodTestComponent_form_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "form", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "nb-card", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "nb-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Detalhes da An\xE1lise:");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "nb-card-body");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "N\xBA An\xE1lise");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "AgHBs:");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "hcv");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "HIV 1 e 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](25, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "VDRL");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](30, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "G.Sangu\xEDneo");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](35, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, "Conclus\xE3o");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](40, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42, "Detalhes Amostra");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47, "N\xBA Amostra");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](48, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52, "Validade");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](53, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](55, "Detalhes do Funcion\xE1rio:");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](60, "Nome:");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](61, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](62, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](65, "N\xBA Ident.");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](66, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BloodTestComponent_form_0_Template_button_click_67_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r9.closeDetails();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](68, "nb-icon", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r0.resultForm);
        }
      }

      function BloodTestComponent_nb_card_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nb-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "form", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function BloodTestComponent_nb_card_1_Template_form_ngSubmit_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r11.onSearchFormSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "nb-card", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "nb-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BloodTestComponent_nb_card_1_Template_button_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r13.showAddBloodCollect();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, " Nova An\xE1lise ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "nb-card-body");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "label", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "N\xFAmero An\xE1lise");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "input", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "nb-card-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BloodTestComponent_nb_card_1_Template_button_click_14_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r14.clearSearchForm();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, " Limpar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BloodTestComponent_nb_card_1_Template_button_click_16_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r15.onSearchFormSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, " Pesquisar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r1.searchForm);
        }
      }

      function BloodTestComponent_nb_card_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nb-card", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "nb-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " AN\xC1LISE: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BloodTestComponent_nb_card_2_Template_button_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r17);

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r16.closeResult();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "nb-icon", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "nb-card-body");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "ng2-smart-table", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("userRowSelect", function BloodTestComponent_nb_card_2_Template_ng2_smart_table_userRowSelect_7_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r17);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r18.onTestSelect($event);
          })("edit", function BloodTestComponent_nb_card_2_Template_ng2_smart_table_edit_7_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r17);

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r19.onEdit($event);
          })("delete", function BloodTestComponent_nb_card_2_Template_ng2_smart_table_delete_7_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r17);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r20.onDelete($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("settings", ctx_r2.settings)("source", ctx_r2.source);
        }
      }

      function BloodTestComponent_form_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "form", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "nb-card", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "nb-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Nova Amostra:");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "nb-card-body");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "N\xFAmero de Colheita:");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "input", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "nb-icon", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BloodTestComponent_form_3_Template_nb_icon_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r22);

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r21.searchSample();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Validade:");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "N\xBA Amostra:");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "input", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BloodTestComponent_form_3_Template_button_click_23_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r22);

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r23.closeAddForm();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](24, "nb-icon", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "button", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BloodTestComponent_form_3_Template_button_click_25_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r22);

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r24.addCollect();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, " Salvar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r3.addForm);
        }
      }

      function BloodTestComponent_ng_template_4_nb_card_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nb-card", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "nb-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " COLHEITAS: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BloodTestComponent_ng_template_4_nb_card_0_Template_button_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r29);

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

            return ctx_r28.closeDonnerTable();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "nb-icon", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "nb-card-body");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "ng2-smart-table", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("userRowSelect", function BloodTestComponent_ng_template_4_nb_card_0_Template_ng2_smart_table_userRowSelect_7_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r29);

            var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

            return ctx_r30.onCollectSelect($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("settings", ctx_r27.settingsCollection)("source", ctx_r27.sourceCollection);
        }
      }

      function BloodTestComponent_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, BloodTestComponent_ng_template_4_nb_card_0_Template, 8, 2, "nb-card", 2);
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r5.showdonnerTable);
        }
      }

      function BloodTestComponent_ng_template_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nb-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "nb-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "ELIMINAR ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "nb-card-body");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, " Tens certeza que deseja excluir? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "span", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, " ? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "nb-card-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "button", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BloodTestComponent_ng_template_6_Template_button_click_9_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r34);

            var ref_r32 = restoredCtx.dialogRef;
            return ref_r32.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Cancelar");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "button", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BloodTestComponent_ng_template_6_Template_button_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r34);

            var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r35.onDeleteConfirm();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, " Excluir ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var data_r31 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", data_r31, "");
        }
      }

      function BloodTestComponent_form_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "form", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "nb-card", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "nb-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Editar Doa\xE7\xE3o:");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "nb-card-body");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Validade:");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "N\xBA Amostra:");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BloodTestComponent_form_8_Template_button_click_16_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r37);

            var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r36.closeEditForm();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "nb-icon", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "button", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BloodTestComponent_form_8_Template_button_click_18_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r37);

            var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r38.editCollect();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, " Salvar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r8.editForm);
        }
      }

      var _BloodTestComponent = /*#__PURE__*/function () {
        function _BloodTestComponent(formBuilder, bloodCollectService, personService, sampleService, bloodService, bloodtestService, dialogService) {
          _classCallCheck(this, _BloodTestComponent);

          this.formBuilder = formBuilder;
          this.bloodCollectService = bloodCollectService;
          this.personService = personService;
          this.sampleService = sampleService;
          this.bloodService = bloodService;
          this.bloodtestService = bloodtestService;
          this.dialogService = dialogService;
          this.showSearchCard = true;
          this.showResultForm = false;
          this.showEditForm = false;
          this.showAddForm = false;
          this.showSmartTable = false;
          this.showdonnerTable = false;
          this.source = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_5__.LocalDataSource();
          this.sourceCollection = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_5__.LocalDataSource();
          this.resultForm = this.formBuilder.group({
            //Blood Test
            testNumber: [""],
            aghbs: [""],
            hcv: [""],
            hiv: [""],
            vdrl: [""],
            bloodType: [""],
            dmConclusion: [""],
            //Sample
            sampleNumber: [""],
            expirationDate: [""],
            //Employee
            nameEmployee: [""],
            identifNumber: [""]
          }); /////    SMART TABLE     //////////

          this.settings = {
            noDataMessage: "Sem Dados",
            mode: 'external',
            actions: {
              columnTitle: 'Ações',
              add: false
            },
            add: {
              addButtonContent: '<i class="nb-plus"></i>',
              createButtonContent: '<i class="nb-checkmark"></i>',
              cancelButtonContent: '<i class="nb-close"></i>'
            },
            edit: {
              editButtonContent: '<i class="nb-edit"></i>',
              saveButtonContent: '<i class="nb-checkmark"></i>',
              cancelButtonContent: '<i class="nb-close"></i>' //confirmSave: true

            },
            "delete": {
              deleteButtonContent: '<i class="nb-trash"></i>',
              confirmDelete: true
            },
            columns: {
              testNumber: {
                title: 'Nº Análise',
                type: 'string'
              },
              namePerson: {
                title: 'Doador',
                type: 'string',
                valuePrepareFunction: function valuePrepareFunction(cell, row) {
                  return row.idSample.idCollection.idPerson.namePerson + ' ' + row.idSample.idCollection.idPerson.surnamePerson;
                }
              },
              surnamePerson: {
                title: 'Funcionário',
                type: 'string',
                valuePrepareFunction: function valuePrepareFunction(cell, row) {
                  return row.idSample.idEmployee.identifNumber;
                }
              },
              dmBloodCode: {
                title: 'G. Sanguíneo',
                type: 'string',
                valuePrepareFunction: function valuePrepareFunction(cell, row) {
                  return row.idSample.idCollection.bloodType;
                }
              },
              insertionDate: {
                title: 'Data Inserção',
                type: 'string'
              }
            }
          };
          this.addForm = this.formBuilder.group({
            expirationDate: [""],
            sampleNumber: [""],
            value: [""]
          });
          /************** Edit ***********/

          this.editForm = this.formBuilder.group({
            expirationDate: ["as"],
            sampleNumber: ["asd"]
          });
          this.settingsCollection = {
            noDataMessage: "Sem Dados",
            mode: 'external',
            actions: {
              columnTitle: 'Ações',
              add: false
            },
            add: {
              addButtonContent: '<i class="nb-plus"></i>',
              createButtonContent: '<i class="nb-checkmark"></i>',
              cancelButtonContent: '<i class="nb-close"></i>'
            },
            edit: {
              editButtonContent: '<i class="nb-edit"></i>',
              saveButtonContent: '<i class="nb-checkmark"></i>',
              cancelButtonContent: '<i class="nb-close"></i>' //confirmSave: true

            },
            "delete": {
              deleteButtonContent: '<i class="nb-trash"></i>',
              confirmDelete: true
            },
            columns: {
              collectionNumber: {
                title: 'Nº Colheita',
                type: 'string'
              },
              namePerson: {
                title: 'Doador',
                type: 'string',
                valuePrepareFunction: function valuePrepareFunction(cell, row) {
                  return row.idPerson.namePerson + ' ' + row.idPerson.surnamePerson;
                }
              },
              bloodType: {
                title: 'G. Sanguíneo',
                type: 'string'
              }
            }
          };
        }

        _createClass(_BloodTestComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loadForms();
          }
        }, {
          key: "loadForms",
          value: function loadForms() {
            this.searchForm = this.formBuilder.group({
              search: this.formBuilder.group({
                testNumber: ["v0chiq"] //insertionDate: ["2022-11-07"]

              })
            });
          }
        }, {
          key: "searchGroup",
          get: function get() {
            return this.searchForm.get("search");
          }
          /*********** CLOSE FORMS */

        }, {
          key: "closeResult",
          value: function closeResult() {
            this.showSmartTable = false;
          }
        }, {
          key: "closeEditForm",
          value: function closeEditForm() {
            this.showEditForm = false;
          }
        }, {
          key: "closeDetails",
          value: function closeDetails() {
            this.showResultForm = false;
            this.showSearchCard = true;
          }
        }, {
          key: "closeAddForm",
          value: function closeAddForm() {
            this.showAddForm = false;
            this.addForm.reset();
            this.showSearchCard = true;
          } ////////        GET  with Params        ///////

        }, {
          key: "convertFormToModel",
          value: function convertFormToModel() {
            var viewModelObject = {
              sampleNumber: this.searchGroup.get("testNumber").value //insertionDate: this.searchGroup.get("insertionDate").value,

            };
            return viewModelObject;
          }
        }, {
          key: "onSearchFormSubmit",
          value: function onSearchFormSubmit() {
            var _this = this;

            this.showSmartTable = true;
            this.bloodtestService.findByTestNumber(this.convertFormToModel()).subscribe(function (data) {
              /* var filtroStatus = data.details[0].filter(
                function (pesquisa) {
                  var list = String(pesquisa.status)
                  return list == "true";
                }
              );
              this.source.load(filtroStatus); */
              _this.source.load(data.details);
            });
            this.showAddForm = false;
          }
        }, {
          key: "clearSearchForm",
          value: function clearSearchForm() {
            this.searchForm.reset();
          }
          /******** Get BY ID - Details */

        }, {
          key: "onTestSelect",
          value: function onTestSelect($event) {
            var _this2 = this;

            this.showResultForm = true;
            this.showSearchCard = false;

            if ($event.data.id) {
              this.idTest = $event.data.id;
              this.bloodtestService.findById(this.idTest).subscribe(function (data) {
                _this2.testResponse = data.details[0]; //blood collection fields

                _this2.resultForm.get("testNumber").setValue($event.data.testNumber);

                _this2.resultForm.get("aghbs").setValue($event.data.aghbs);

                _this2.resultForm.get("hcv").setValue($event.data.hcv);

                _this2.resultForm.get("hiv").setValue($event.data.hiv);

                _this2.resultForm.get("vdrl").setValue($event.data.vdrl);

                _this2.resultForm.get("bloodType").setValue($event.data.idSample.idCollection.bloodType);

                _this2.resultForm.get("dmConclusion").setValue($event.data.dmConclusion); //sample fields


                _this2.resultForm.get("sampleNumber").setValue($event.data.idSample.sampleNumber);

                _this2.resultForm.get("expirationDate").setValue($event.data.idSample.idCollection.expirationDate); //employee fields


                _this2.resultForm.get("nameEmployee").setValue($event.data.idEmployee.idPerson.namePerson + " " + $event.data.idEmployee.idPerson.surnamePerson);

                _this2.resultForm.get("identifNumber").setValue($event.data.idEmployee.identifNumber);
              });
            }
          }
          /******** ADD  *************** */

        }, {
          key: "showAddBloodCollect",
          value: function showAddBloodCollect() {
            this.showAddForm = true;
            this.showSmartTable = false;
          }
        }, {
          key: "convertAddFormToModel",
          value: function convertAddFormToModel() {
            var viewModelObject = {
              expirationDate: this.addForm.get("expirationDate").value,
              sampleNumber: this.addForm.get("sampleNumber").value
            };
            return viewModelObject;
          }
        }, {
          key: "onCollectSelect",
          value: function onCollectSelect($event) {
            if ($event.data.id) {
              this.idCollection = $event.data.id;
              this.collectResponse = $event.data;
              this.addForm.get("value").setValue(this.collectResponse.collectionNumber);
              this.addForm.get("expirationDate").setValue($event.data.expirationDate);
            }

            this.dialogRef.close();
          }
        }, {
          key: "addCollect",
          value: function addCollect() {
            this.convertFormToModel();
            this.sampleService.create(this.convertAddFormToModel(), this.idCollection, 'bbd6c39a-3c69-497c-8ca6-fab04dd51698').subscribe(function (data) {
              console.log(data);
            });
          }
        }, {
          key: "onDelete",
          value: function onDelete($event) {
            this.idTest = $event.data.id;
            this.refreshTable = $event.data;
            this.dialogRef = this.dialogService.open(this.dialogDelete);
          }
        }, {
          key: "onDeleteConfirm",
          value: function onDeleteConfirm() {
            var _this3 = this;

            this.bloodCollectService.changeStatus(this.idTest).subscribe(function (data) {
              _this3.dialogRef.close();

              _this3.source.remove(_this3.refreshTable);
            });
          }
        }, {
          key: "searchSample",
          value: function searchSample() {
            var _this4 = this;

            this.valueToSearch = this.addForm.get("value").value;
            this.showdonnerTable = true;
            this.showSearchCard = false;
            this.dialogRef = this.dialogService.open(this.dialogPerson);
            this.bloodCollectService.findByCollectionNumber(this.valueToSearch).subscribe(function (data) {
              _this4.sourceCollection = data.details;
            });
          }
        }, {
          key: "closeDonnerTable",
          value: function closeDonnerTable() {
            this.showdonnerTable = false;
            this.showSearchCard = true;
            this.dialogRef.close();
          }
        }]);

        return _BloodTestComponent;
      }();

      _BloodTestComponent.ɵfac = function BloodTestComponent_Factory(t) {
        return new (t || _BloodTestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_service_blood_collection_ts_BloodCollectService__WEBPACK_IMPORTED_MODULE_0__.BloodCollectService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_service_person_personService__WEBPACK_IMPORTED_MODULE_1__.PersonService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_service_sample_SampleService__WEBPACK_IMPORTED_MODULE_2__.SampleService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_service_blood_collection_ts_BloodCollectService__WEBPACK_IMPORTED_MODULE_0__.BloodCollectService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_service_bloodTest_BloodTestService__WEBPACK_IMPORTED_MODULE_3__.BloodTestService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbDialogService));
      };

      _BloodTestComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: _BloodTestComponent,
        selectors: [["ngx-stock"]],
        viewQuery: function BloodTestComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c1, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.dialogDelete = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.dialogPerson = _t.first);
          }
        },
        decls: 9,
        vars: 5,
        consts: [[3, "formGroup", 4, "ngIf"], [4, "ngIf"], ["accent", "primary", 4, "ngIf"], ["dialogPerson", ""], ["dialogDelete", ""], [3, "formGroup"], ["accent", "primary"], [1, "row"], [1, "col-sm-4"], [1, "form-group"], ["type", "text", "nbInput", "", "formControlName", "testNumber", "placeholder", "N\xFAmero"], ["type", "text", "nbInput", "", "formControlName", "aghbs", "placeholder", "aghbs"], ["type", "text", "nbInput", "", "formControlName", "hcv", "placeholder", "hcv"], ["type", "text", "nbInput", "", "formControlName", "hiv", "placeholder", "hiv"], ["type", "text", "nbInput", "", "formControlName", "vdrl", "placeholder", "vdrl"], ["type", "text", "nbInput", "", "formControlName", "bloodType", "placeholder", "G.Sangu\xEDneo"], ["type", "text", "nbInput", "", "formControlName", "dmConclusion", "placeholder", "Conclus\xE3o"], ["type", "text", "nbInput", "", "formControlName", "sampleNumber", "placeholder", "N\xBA Amostra"], ["type", "text", "nbInput", "", "formControlName", "expirationDate", "placeholder", "Validade"], ["type", "text", "nbInput", "", "formControlName", "nameEmployee", "placeholder", "Nome"], ["type", "text", "nbInput", "", "formControlName", "identifNumber", "placeholder", "Num.Identifica\xE7\xE3o "], ["title", "button", "nbButton", "", "size", "small", "type", "button", "status", "danger", 1, "mt-3", "mr-2", 3, "click"], ["icon", "close-outline"], [3, "formGroup", "ngSubmit"], ["formGroupName", "search", "nbSpinnerStatus", "info", "nbSpinnerSize", "small", "accent", "primary"], ["nbButton", "", "size", "small", "status", "primary", "type", "button", 3, "click"], ["for", "testNumber"], ["type", "text", "id", "testNumber", "formControlName", "testNumber", 1, "form-control"], ["nbButton", "", "size", "small", "status", "danger", "type", "button", 1, "mt-3", "mr-2", 3, "click"], ["nbButton", "", "size", "small", "status", "primary", "type", "submit", 1, "mt-3", "mr-2", 3, "click"], [1, "headerList"], [3, "settings", "source", "userRowSelect", "edit", "delete"], [1, "form-groupp"], ["type", "text", "nbInput", "", "formControlName", "value"], ["icon", "search-outline", 3, "click"], ["type", "text", "nbInput", "", "formControlName", "sampleNumber", "placeholder", "Quantidade"], ["nbButton", "", "size", "small", "type", "button", "status", "primary", 1, "mt-3", "mr-2", 3, "click"], [3, "settings", "source", "userRowSelect"], [2, "font-weight", "bold"], ["nbButton", "", "status", "danger", 3, "click"], ["nbButton", "", "status", "primary", 1, "btn-action-modal", 3, "click"]],
        template: function BloodTestComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, BloodTestComponent_form_0_Template, 69, 1, "form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, BloodTestComponent_nb_card_1_Template, 18, 1, "nb-card", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, BloodTestComponent_nb_card_2_Template, 8, 2, "nb-card", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, BloodTestComponent_form_3_Template, 27, 1, "form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, BloodTestComponent_ng_template_4_Template, 1, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, BloodTestComponent_ng_template_6_Template, 13, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, BloodTestComponent_form_8_Template, 20, 1, "form", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showResultForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showSearchCard);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showSmartTable);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showAddForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showEditForm);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbCardHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbCardBodyComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbButtonComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbIconComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupName, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbCardFooterComponent, ng2_smart_table__WEBPACK_IMPORTED_MODULE_5__.Ng2SmartTableComponent],
        styles: [".form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.headerList[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.personalData[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  margin-bottom: 15px;\n  font-weight: bold;\n}\n.jobData[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  margin-bottom: 15px;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJsb29kVGVzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztFQU9FO0FBRUQ7RUFDQyxhQUFhO0VBQ2Isc0JBQXNCO0FBQXhCO0FBR0M7RUFDQyxhQUFjO0VBQ2QsOEJBQThCO0FBQWhDO0FBR0M7RUFDQyxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUFuQjtBQUdDO0VBQ0MsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFBbkIiLCJmaWxlIjoiYmxvb2RUZXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQGltcG9ydCAnLi4vLi4vLi4vQHRoZW1lL3N0eWxlcy90aGVtZXMnO1xyXG5cclxuQGluY2x1ZGUgbmItaW5zdGFsbC1jb21wb25lbnQoKSB7XHJcbiAgbmItY2FyZCB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xyXG4gIH1cclxufVxyXG4gKi9cclxuXHJcbiAuZm9ybS1ncm91cHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiB9XHJcblxyXG4gLmhlYWRlckxpc3R7XHJcbiAgZGlzcGxheTogIGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gfVxyXG5cclxuIC5wZXJzb25hbERhdGF7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gfVxyXG5cclxuIC5qb2JEYXRhe1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuIH1cclxuIl19 */"]
      });
      /***/
    },

    /***/
    30186:
    /*!*****************************************************!*\
      !*** ./src/app/pages/bloodTest/bloodTest.module.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BloodTestModule": function BloodTestModule() {
          return (
            /* binding */
            _BloodTestModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @nebular/theme */
      40465);
      /* harmony import */


      var ng2_smart_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ng2-smart-table */
      98391);
      /* harmony import */


      var _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../@theme/theme.module */
      80268);
      /* harmony import */


      var _service_bloodTest_BloodTestService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../service/bloodTest/BloodTestService */
      19243);
      /* harmony import */


      var _bloodTest_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./bloodTest-routing.module */
      98301);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _bloodTest_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./bloodTest.component */
      62906);

      var _BloodTestModule = /*#__PURE__*/_createClass(function _BloodTestModule() {
        _classCallCheck(this, _BloodTestModule);
      });

      _BloodTestModule.ɵfac = function BloodTestModule_Factory(t) {
        return new (t || _BloodTestModule)();
      };

      _BloodTestModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: _BloodTestModule
      });
      _BloodTestModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        providers: [_service_bloodTest_BloodTestService__WEBPACK_IMPORTED_MODULE_1__.BloodTestService],
        imports: [[_nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbButtonModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbTreeGridModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbIconModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbInputModule, _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__.ThemeModule, ng2_smart_table__WEBPACK_IMPORTED_MODULE_6__.Ng2SmartTableModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _bloodTest_routing_module__WEBPACK_IMPORTED_MODULE_2__.BloodTestRoutingModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](_BloodTestModule, {
          declarations: [_bloodTest_component__WEBPACK_IMPORTED_MODULE_3__.BloodTestComponent],
          imports: [_nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbButtonModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbTreeGridModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbIconModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbInputModule, _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__.ThemeModule, ng2_smart_table__WEBPACK_IMPORTED_MODULE_6__.Ng2SmartTableModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _bloodTest_routing_module__WEBPACK_IMPORTED_MODULE_2__.BloodTestRoutingModule]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=src_app_pages_bloodTest_bloodTest_module_ts-es5.js.map