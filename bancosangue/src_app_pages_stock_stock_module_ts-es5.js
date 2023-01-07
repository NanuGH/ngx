(function () {
  "use strict";

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkngx_admin"] = self["webpackChunkngx_admin"] || []).push([["src_app_pages_stock_stock_module_ts"], {
    /***/
    35529:
    /*!*****************************************************!*\
      !*** ./src/app/pages/stock/stock-routing.module.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "StockRoutingModule": function StockRoutingModule() {
          return (
            /* binding */
            _StockRoutingModule
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


      var _stock_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./stock.component */
      23729);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var routes = [{
        path: '',
        component: _stock_component__WEBPACK_IMPORTED_MODULE_0__.StockComponent
      }];

      var _StockRoutingModule = /*#__PURE__*/_createClass(function _StockRoutingModule() {
        _classCallCheck(this, _StockRoutingModule);
      });

      _StockRoutingModule.ɵfac = function StockRoutingModule_Factory(t) {
        return new (t || _StockRoutingModule)();
      };

      _StockRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _StockRoutingModule
      });
      _StockRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_StockRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
        });
      })();

      var _routedComponents = [_stock_component__WEBPACK_IMPORTED_MODULE_0__.StockComponent];
      /***/
    },

    /***/
    23729:
    /*!************************************************!*\
      !*** ./src/app/pages/stock/stock.component.ts ***!
      \************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "StockComponent": function StockComponent() {
          return (
            /* binding */
            _StockComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var ng2_smart_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ng2-smart-table */
      98391);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _service_stock_StockService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../service/stock/StockService */
      6646);
      /* harmony import */


      var _service_blood_collection_ts_BloodCollectService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../service/blood-collection.ts/BloodCollectService */
      23389);
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @nebular/theme */
      40465);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      54364);

      var _c0 = ["dialogDelete"];
      var _c1 = ["dialogPerson"];

      function StockComponent_form_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

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

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "N\xFAmero:");

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

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Data Inser\xE7\xE3o");

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

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Doc. Identifica\xE7\xE3o");

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

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "Detalhes do Funcion\xE1rio:");

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

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "N\xBA Ident.");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](58, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function StockComponent_form_0_Template_button_click_59_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r8.closeDetails();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](60, "nb-icon", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r0.resultForm);
        }
      }

      function StockComponent_nb_card_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "nb-card");
        }
      }

      function StockComponent_nb_card_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nb-card", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "nb-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " STOCK QUARENTENA: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function StockComponent_nb_card_2_Template_button_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r10.AddForm();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " Nova Entrada ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "nb-card-body");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ng2-smart-table", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("userRowSelect", function StockComponent_nb_card_2_Template_ng2_smart_table_userRowSelect_7_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r12.onStockSelect($event);
          })("edit", function StockComponent_nb_card_2_Template_ng2_smart_table_edit_7_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r13.onEdit($event);
          })("delete", function StockComponent_nb_card_2_Template_ng2_smart_table_delete_7_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r14.onDelete($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("settings", ctx_r2.settings)("source", ctx_r2.source);
        }
      }

      function StockComponent_form_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "nb-card", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "nb-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Nova Inser\xE7\xE3o:");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "nb-card-body");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "N\xBA Colheita:");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "input", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "nb-icon", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function StockComponent_form_3_Template_nb_icon_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r15.searchCollection();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function StockComponent_form_3_Template_button_click_12_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r17.closeAddForm();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "nb-icon", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function StockComponent_form_3_Template_button_click_14_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r18.addStock();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, " Salvar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r3.addForm);
        }
      }

      function StockComponent_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

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

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function StockComponent_ng_template_4_Template_button_click_9_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r22);

            var ref_r20 = restoredCtx.dialogRef;
            return ref_r20.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Cancelar");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "button", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function StockComponent_ng_template_4_Template_button_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r22);

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r23.onDeleteConfirm();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " Excluir ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var data_r19 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", data_r19, "");
        }
      }

      function StockComponent_ng_template_6_nb_card_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nb-card", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "nb-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " COLHEITAS: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function StockComponent_ng_template_6_nb_card_0_Template_button_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r28);

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r27.closeCollectionTable();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "nb-icon", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "nb-card-body");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ng2-smart-table", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("userRowSelect", function StockComponent_ng_template_6_nb_card_0_Template_ng2_smart_table_userRowSelect_7_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r28);

            var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r29.onCollectSelect($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("settings", ctx_r26.settingsCollection)("source", ctx_r26.sourceCollections);
        }
      }

      function StockComponent_ng_template_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, StockComponent_ng_template_6_nb_card_0_Template, 8, 2, "nb-card", 2);
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r7.showCollections);
        }
      }

      var _StockComponent = /*#__PURE__*/function () {
        function _StockComponent(formBuilder, stockService, bloodCollService, dialogService) {
          _classCallCheck(this, _StockComponent);

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
            collectionNumber: [""],
            qtdde: [""],
            insertionDate: [""],
            expirationDate: [""],
            //Donner
            nameDonner: [""],
            surnameDonner: [""],
            dmDocIdent: [""],
            telefone: [""],
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
              insertionDate: {
                title: 'Data Inserção',
                type: 'string'
              },
              expirationDate: {
                title: 'Validade',
                type: 'string'
              },
              collectionNumber: {
                title: 'Colheita',
                type: 'string',
                valuePrepareFunction: function valuePrepareFunction(cell, row) {
                  return row.collection.collectionNumber;
                }
              },
              namePerson: {
                title: 'Doador',
                type: 'string',
                valuePrepareFunction: function valuePrepareFunction(cell, row) {
                  return row.collection.idPerson.namePerson + ' ' + row.collection.idPerson.surnamePerson;
                }
              },
              dmBloodCode: {
                title: 'G. Sanguíneo',
                type: 'string',
                valuePrepareFunction: function valuePrepareFunction(cell, row) {
                  return row.collection.idPerson.dmBloodCode;
                }
              },
              surnamePerson: {
                title: 'Funcionário',
                type: 'string',
                valuePrepareFunction: function valuePrepareFunction(cell, row) {
                  return row.collection.idEmployee.identifNumber;
                }
              }
            }
          };
          this.addForm = this.formBuilder.group({
            value: [""]
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
              bloodType: {
                title: 'G. Sanguíneo',
                type: 'string'
              },
              insertionDate: {
                title: 'Data Colheita',
                type: 'string'
              }
            }
          };
        }

        _createClass(_StockComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loadForms();
            this.getAll();
          }
        }, {
          key: "loadForms",
          value: function loadForms() {
            this.searchForm = this.formBuilder.group({
              search: this.formBuilder.group({
                collectionNumber: [""]
              })
            });
          }
        }, {
          key: "convertFormToModel",
          value: function convertFormToModel() {
            var viewModelObject = {
              collectionNumber: this.searchGroup.get("collectionNumber").value
            };
            return viewModelObject;
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
          key: "closeAddForm",
          value: function closeAddForm() {
            this.showAddForm = false;
          }
        }, {
          key: "closeDetails",
          value: function closeDetails() {
            this.showResultForm = false;
            this.showSearchCard = true;
          } ////////        GET  ALL Stock        ///////

        }, {
          key: "getAll",
          value: function getAll() {
            var _this = this;

            this.stockService.getAll("p").subscribe(function (data) {
              _this.source.load(data.details[0]);
            });
          } ////////        GET  with Params        ///////

        }, {
          key: "convertCollectioSearch",
          value: function convertCollectioSearch() {
            var collectionModel = {
              collectionNumber: this.searchGroup.get("collectionNumber").value
            };
            return collectionModel;
          }
        }, {
          key: "onSearchFormSubmit",
          value: function onSearchFormSubmit() {
            var _this2 = this;

            this.convertCollectioSearch();
            this.showSmartTable = true;
            this.stockService.findByCollectionNumber(this.convertCollectioSearch()).subscribe(function (data) {
              _this2.source.load(data.details);
            });
          }
        }, {
          key: "clearSearchForm",
          value: function clearSearchForm() {
            this.searchForm.reset();
          }
          /******** Get BY ID - Details */

        }, {
          key: "onStockSelect",
          value: function onStockSelect($event) {
            this.showResultForm = true;
            this.showSearchCard = false;

            if ($event.data.id) {
              this.idStock = $event.data.id; //blood collection fields

              this.resultForm.get("collectionNumber").setValue($event.data.collection.collectionNumber);
              this.resultForm.get("qtdde").setValue($event.data.collection.qtdde);
              this.resultForm.get("insertionDate").setValue($event.data.insertionDate);
              this.resultForm.get("expirationDate").setValue($event.data.expirationDate); //donner fields

              this.resultForm.get("nameDonner").setValue($event.data.collection.idPerson.namePerson + " " + $event.data.collection.idPerson.surnamePerson);
              this.resultForm.get("dmDocIdent").setValue($event.data.collection.idPerson.dmDocIdent);
              this.resultForm.get("telefone").setValue($event.data.collection.idPerson.telefone); //employee fields

              this.resultForm.get("nameEmployee").setValue($event.data.collection.idEmployee.idPerson.namePerson + " " + $event.data.collection.idEmployee.idPerson.surnamePerson);
              this.resultForm.get("identifNumber").setValue($event.data.collection.idEmployee.identifNumber);
            }
          }
          /******** ADD  *************** */

        }, {
          key: "AddForm",
          value: function AddForm() {
            this.showAddForm = true;
          }
        }, {
          key: "convertAddForm",
          value: function convertAddForm() {
            var viewModelObject = {
              expirationDate: "",
              dmCodeStockType: "",
              whoInserted: "",
              whoUpdated: "",
              status: ""
            };
            return viewModelObject;
          }
        }, {
          key: "onCollectSelect",
          value: function onCollectSelect($event) {
            if ($event.data.id) {
              this.idCollect = $event.data.id;
              this.collectResponse = $event.data;
              this.addForm.get("value").setValue(this.collectResponse.collectionNumber);
            }

            this.dialogRef.close();
          }
        }, {
          key: "addStock",
          value: function addStock() {
            this.convertAddForm();
            this.stockService.create(this.convertAddForm(), this.idCollect, 'bbd6c39a-3c69-497c-8ca6-fab04dd51698').subscribe(function (data) {
              console.log(data);
            });
          }
        }, {
          key: "onDelete",
          value: function onDelete($event) {
            /*  this.idBloodCollect = $event.data.id;
             this.dialogRef = this.dialogService.open(this.dialogDelete); */
          }
        }, {
          key: "searchCollection",
          value: function searchCollection() {
            var _this3 = this;

            this.valueToSearch = this.addForm.get("value").value;
            this.showCollections = true;
            this.showSearchCard = false;
            this.dialogRef = this.dialogService.open(this.dialogPerson);
            this.bloodCollService.findByCollectionNumber(this.valueToSearch).subscribe(function (data) {
              _this3.sourceCollections = data.details;
            });
          }
        }, {
          key: "closeCollectionTable",
          value: function closeCollectionTable() {
            this.showCollections = false;
            this.showSearchCard = true;
            this.dialogRef.close();
          }
        }]);

        return _StockComponent;
      }();

      _StockComponent.ɵfac = function StockComponent_Factory(t) {
        return new (t || _StockComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_stock_StockService__WEBPACK_IMPORTED_MODULE_0__.StockService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_blood_collection_ts_BloodCollectService__WEBPACK_IMPORTED_MODULE_1__.BloodCollectService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbDialogService));
      };

      _StockComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _StockComponent,
        selectors: [["ngx-stock"]],
        viewQuery: function StockComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.dialogDelete = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.dialogPerson = _t.first);
          }
        },
        decls: 8,
        vars: 4,
        consts: [[3, "formGroup", 4, "ngIf"], [4, "ngIf"], ["accent", "primary", 4, "ngIf"], ["dialogDelete", ""], ["dialogPerson", ""], [3, "formGroup"], ["accent", "primary"], [1, "row"], [1, "col-sm-4"], [1, "form-group"], ["type", "text", "nbInput", "", "formControlName", "collectionNumber", "placeholder", "N\xFAmero"], ["type", "text", "nbInput", "", "formControlName", "qtdde", "placeholder", "Quantidade"], ["type", "text", "nbInput", "", "formControlName", "insertionDate", "placeholder", "Externo"], ["type", "text", "nbInput", "", "formControlName", "expirationDate", "placeholder", "Externo"], ["type", "text", "nbInput", "", "formControlName", "nameDonner", "placeholder", "Nome"], ["type", "text", "nbInput", "", "formControlName", "dmDocIdent", "placeholder", "Num.Identifica\xE7\xE3o "], ["type", "text", "nbInput", "", "formControlName", "telefone", "placeholder", "Email"], ["type", "text", "nbInput", "", "formControlName", "nameEmployee", "placeholder", "Nome"], ["type", "text", "nbInput", "", "formControlName", "identifNumber", "placeholder", "Num.Identifica\xE7\xE3o "], ["nbButton", "", "title", "button", "size", "small", "type", "button", "status", "danger", 1, "mt-3", "mr-2", 3, "click"], ["icon", "close-outline"], [1, "headerList"], ["nbButton", "", "size", "small", "status", "primary", "type", "button", 3, "click"], [3, "settings", "source", "userRowSelect", "edit", "delete"], [1, "form-groupp"], ["type", "text", "nbInput", "", "formControlName", "value"], ["icon", "search-outline", 3, "click"], ["nbButton", "", "size", "small", "type", "button", "status", "primary", 1, "mt-3", "mr-2", 3, "click"], [2, "font-weight", "bold"], ["nbButton", "", "status", "danger", 3, "click"], ["nbButton", "", "status", "primary", 1, "btn-action-modal", 3, "click"], ["title", "button", "nbButton", "", "size", "small", "type", "button", "status", "danger", 1, "mt-3", "mr-2", 3, "click"], [3, "settings", "source", "userRowSelect"]],
        template: function StockComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, StockComponent_form_0_Template, 61, 1, "form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, StockComponent_nb_card_1_Template, 1, 0, "nb-card", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, StockComponent_nb_card_2_Template, 8, 2, "nb-card", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, StockComponent_form_3_Template, 16, 1, "form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, StockComponent_ng_template_4_Template, 13, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, StockComponent_ng_template_6_Template, 1, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showResultForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showSearchCard);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showSmartTable);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showAddForm);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardBodyComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbButtonComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbIconComponent, ng2_smart_table__WEBPACK_IMPORTED_MODULE_3__.Ng2SmartTableComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardFooterComponent],
        styles: [".form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.headerList[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.personalData[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  margin-bottom: 15px;\n  font-weight: bold;\n}\n.jobData[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  margin-bottom: 15px;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b2NrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0VBT0U7QUFFRDtFQUNDLGFBQWE7RUFDYixzQkFBc0I7QUFBeEI7QUFHQztFQUNDLGFBQWM7RUFDZCw4QkFBOEI7QUFBaEM7QUFHQztFQUNDLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQW5CO0FBR0M7RUFDQyxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUFuQiIsImZpbGUiOiJzdG9jay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEBpbXBvcnQgJy4uLy4uLy4uL0B0aGVtZS9zdHlsZXMvdGhlbWVzJztcclxuXHJcbkBpbmNsdWRlIG5iLWluc3RhbGwtY29tcG9uZW50KCkge1xyXG4gIG5iLWNhcmQge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxuICB9XHJcbn1cclxuICovXHJcblxyXG4gLmZvcm0tZ3JvdXB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gfVxyXG5cclxuIC5oZWFkZXJMaXN0e1xyXG4gIGRpc3BsYXk6ICBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuIH1cclxuXHJcbiAucGVyc29uYWxEYXRhe1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuIH1cclxuXHJcbiAuam9iRGF0YXtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiB9XHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    86706:
    /*!*********************************************!*\
      !*** ./src/app/pages/stock/stock.module.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BloodCollectModule": function BloodCollectModule() {
          return (
            /* binding */
            _BloodCollectModule
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


      var _service_person_personService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../service/person/personService */
      22706);
      /* harmony import */


      var _stock_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./stock-routing.module */
      35529);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _stock_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./stock.component */
      23729);

      var _BloodCollectModule = /*#__PURE__*/_createClass(function _BloodCollectModule() {
        _classCallCheck(this, _BloodCollectModule);
      });

      _BloodCollectModule.ɵfac = function BloodCollectModule_Factory(t) {
        return new (t || _BloodCollectModule)();
      };

      _BloodCollectModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: _BloodCollectModule
      });
      _BloodCollectModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        providers: [_service_person_personService__WEBPACK_IMPORTED_MODULE_1__.PersonService],
        imports: [[_nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbButtonModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbTreeGridModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbIconModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbInputModule, _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__.ThemeModule, ng2_smart_table__WEBPACK_IMPORTED_MODULE_6__.Ng2SmartTableModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _stock_routing_module__WEBPACK_IMPORTED_MODULE_2__.StockRoutingModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](_BloodCollectModule, {
          declarations: [_stock_component__WEBPACK_IMPORTED_MODULE_3__.StockComponent],
          imports: [_nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbButtonModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbTreeGridModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbIconModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbInputModule, _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__.ThemeModule, ng2_smart_table__WEBPACK_IMPORTED_MODULE_6__.Ng2SmartTableModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _stock_routing_module__WEBPACK_IMPORTED_MODULE_2__.StockRoutingModule]
        });
      })();
      /***/

    },

    /***/
    6646:
    /*!***********************************************!*\
      !*** ./src/app/service/stock/StockService.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "StockService": function StockService() {
          return (
            /* binding */
            _StockService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      53882);
      /* harmony import */


      var _defaultService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../defaultService */
      38806);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _StockService = /*#__PURE__*/function (_defaultService__WEBP) {
        _inherits(_StockService, _defaultService__WEBP);

        var _super = _createSuper(_StockService);

        function _StockService(http) {
          var _this4;

          _classCallCheck(this, _StockService);

          _this4 = _super.call(this, 'stock/');
          _this4.http = http;
          _this4.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
              'Content-Type': 'application/json',
              'Authorization': 'Basic bmFudTpuYW51'
            })
          };
          return _this4;
        }

        _createClass(_StockService, [{
          key: "findById",
          value: function findById(id) {
            return this.http.get("".concat(this.url).concat(id), this.httpOptions);
          }
        }, {
          key: "changeStatus",
          value: function changeStatus(id) {
            return this.http.put("".concat(this.url, "changestatus/").concat(id), null, this.httpOptions);
          }
        }, {
          key: "findByCollectionNumber",
          value: function findByCollectionNumber(searchStock) {
            return this.http.get("".concat(this.url, "getStockOpts/").concat(searchStock.collectionNumber), this.httpOptions);
          }
        }, {
          key: "create",
          value: function create(stock, idCollect, idEmp) {
            return this.http.post("".concat(this.url).concat(idCollect, "/").concat(idEmp), stock, this.httpOptions);
          }
        }, {
          key: "getAll",
          value: function getAll(type) {
            return this.http.get("".concat(this.url, "stockType/").concat(type), this.httpOptions);
          }
        }]);

        return _StockService;
      }(_defaultService__WEBPACK_IMPORTED_MODULE_0__.DefaultService);

      _StockService.ɵfac = function StockService_Factory(t) {
        return new (t || _StockService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
      };

      _StockService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: _StockService,
        factory: _StockService.ɵfac,
        providedIn: 'root'
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_stock_stock_module_ts-es5.js.map