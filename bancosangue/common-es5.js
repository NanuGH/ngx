(function () {
  "use strict";

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  (self["webpackChunkngx_admin"] = self["webpackChunkngx_admin"] || []).push([["common"], {
    /***/
    23389:
    /*!********************************************************************!*\
      !*** ./src/app/service/blood-collection.ts/BloodCollectService.ts ***!
      \********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BloodCollectService": function BloodCollectService() {
          return (
            /* binding */
            _BloodCollectService
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

      var _BloodCollectService = /*#__PURE__*/function (_defaultService__WEBP) {
        _inherits(_BloodCollectService, _defaultService__WEBP);

        var _super = _createSuper(_BloodCollectService);

        function _BloodCollectService(http) {
          var _this;

          _classCallCheck(this, _BloodCollectService);

          _this = _super.call(this, 'bloodcollection/');
          _this.http = http;
          _this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
              'Content-Type': 'application/json',
              'Authorization': 'Basic bmFudTpuYW51'
            })
          };
          return _this;
        }

        _createClass(_BloodCollectService, [{
          key: "getBloodColectMultParams",
          value: function getBloodColectMultParams(searchBloodCollect) {
            var headerss = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set("Authorization", "Basic bmFudTpuYW51");
            var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams().append("collectionNumber", searchBloodCollect.collectionNumber).append("insertionDate", searchBloodCollect.insertionDate);
            var queryJustCollectionNumber = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams().append("collectionNumber", searchBloodCollect.collectionNumber);
            var queryJustInsertionDate = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams().append("insertionDate", searchBloodCollect.insertionDate);

            if (searchBloodCollect.collectionNumber != null && searchBloodCollect.insertionDate == null) {
              var options = {
                params: queryJustCollectionNumber,
                headers: headerss
              };
              return this.http.get("".concat(this.url, "getBloodCollectionpts"), options);
            }

            if (searchBloodCollect.collectionNumber != null && searchBloodCollect.insertionDate != null) {
              var _options = {
                params: queryParams,
                headers: headerss
              };
              return this.http.get("".concat(this.url, "getBloodCollectionpts"), _options);
            }

            if (searchBloodCollect.collectionNumber == null && searchBloodCollect.insertionDate != null) {
              var _options2 = {
                params: queryJustInsertionDate,
                headers: headerss
              };
              return this.http.get("".concat(this.url, "getBloodCollectionpts"), _options2);
            }
          }
        }, {
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
          key: "create",
          value: function create(person, idEmpl, idDonner) {
            return this.http.post("".concat(this.url).concat(idEmpl, "/").concat(idDonner), person, this.httpOptions);
          }
        }, {
          key: "edit",
          value: function edit(collection, idCollection, idEmpl) {
            return this.http.put("".concat(this.url, "\n      ").concat(idCollection, "/").concat(idEmpl), collection, this.httpOptions);
          }
        }, {
          key: "findByCollectionNumber",
          value: function findByCollectionNumber(colletNumber) {
            return this.http.get("".concat(this.url, "collection/").concat(colletNumber), this.httpOptions);
          }
        }]);

        return _BloodCollectService;
      }(_defaultService__WEBPACK_IMPORTED_MODULE_0__.DefaultService);

      _BloodCollectService.ɵfac = function BloodCollectService_Factory(t) {
        return new (t || _BloodCollectService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
      };

      _BloodCollectService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: _BloodCollectService,
        factory: _BloodCollectService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    19243:
    /*!*******************************************************!*\
      !*** ./src/app/service/bloodTest/BloodTestService.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BloodTestService": function BloodTestService() {
          return (
            /* binding */
            _BloodTestService
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

      var _BloodTestService = /*#__PURE__*/function (_defaultService__WEBP2) {
        _inherits(_BloodTestService, _defaultService__WEBP2);

        var _super2 = _createSuper(_BloodTestService);

        function _BloodTestService(http) {
          var _this2;

          _classCallCheck(this, _BloodTestService);

          _this2 = _super2.call(this, 'bloodtest/');
          _this2.http = http;
          _this2.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
              'Content-Type': 'application/json',
              'Authorization': 'Basic bmFudTpuYW51'
            })
          };
          return _this2;
        }

        _createClass(_BloodTestService, [{
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
          key: "findByTestNumber",
          value: function findByTestNumber(searchTest) {
            return this.http.get("".concat(this.url, "test/").concat(searchTest.sampleNumber), this.httpOptions);
          }
        }, {
          key: "create",
          value: function create(testModel, idEmp, idSample) {
            return this.http.post("".concat(this.url, "/").concat(idEmp, "/").concat(idSample), testModel, this.httpOptions);
          }
        }]);

        return _BloodTestService;
      }(_defaultService__WEBPACK_IMPORTED_MODULE_0__.DefaultService);

      _BloodTestService.ɵfac = function BloodTestService_Factory(t) {
        return new (t || _BloodTestService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
      };

      _BloodTestService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: _BloodTestService,
        factory: _BloodTestService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    38806:
    /*!*******************************************!*\
      !*** ./src/app/service/defaultService.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DefaultService": function DefaultService() {
          return (
            /* binding */
            _DefaultService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../environments/environment */
      92340); //conecao com api


      var _DefaultService = /*#__PURE__*/_createClass(function _DefaultService(resource) {
        _classCallCheck(this, _DefaultService);

        this.url = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.url).concat(resource);
      });
      /***/

    },

    /***/
    3436:
    /*!*****************************************************!*\
      !*** ./src/app/service/employee/employeeService.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EmployeeService": function EmployeeService() {
          return (
            /* binding */
            _EmployeeService
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

      var _EmployeeService = /*#__PURE__*/function (_defaultService__WEBP3) {
        _inherits(_EmployeeService, _defaultService__WEBP3);

        var _super3 = _createSuper(_EmployeeService);

        function _EmployeeService(http) {
          var _this3;

          _classCallCheck(this, _EmployeeService);

          _this3 = _super3.call(this, "employee/");
          _this3.http = http;
          _this3.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
              "Content-Type": "application/json",
              Authorization: "Basic bmFudTpuYW51"
            })
          };
          return _this3;
        }

        _createClass(_EmployeeService, [{
          key: "getEmployeeMultipleParams",
          value: function getEmployeeMultipleParams(searchEmployee) {
            var headerss = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set("Authorization", "Basic bmFudTpuYW51");
            var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams().append("identifNumber", searchEmployee.identifNumber).append("email", searchEmployee.email);
            var queryJustIdentifNumber = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams().append("identifNumber", searchEmployee.identifNumber);
            var queryJustEmail = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams().append("email", searchEmployee.email);

            if (searchEmployee.identifNumber != null && searchEmployee.email != null) {
              var options = {
                params: queryParams,
                headers: headerss
              };
              return this.http.get("".concat(this.url, "getEmplOpts"), options);
            }

            if (searchEmployee.identifNumber != null && searchEmployee.email == null) {
              var _options3 = {
                params: queryJustIdentifNumber,
                headers: headerss
              };
              return this.http.get("".concat(this.url, "getEmplOpts"), _options3);
            }

            if (searchEmployee.identifNumber == null && searchEmployee.email != null) {
              var _options4 = {
                params: queryJustEmail,
                headers: headerss
              };
              return this.http.get("".concat(this.url, "getEmplOpts"), _options4);
            }

            if (searchEmployee.identifNumber == null && searchEmployee.email == null) {
              var _options5 = {
                headers: headerss
              };
              return this.http.get("".concat(this.url, "getEmplOpts"), _options5);
            }
          }
        }, {
          key: "findById",
          value: function findById(id) {
            return this.http.get("".concat(this.url).concat(id), this.httpOptions);
          }
        }, {
          key: "edit",
          value: function edit(id, employee) {
            return this.http.put("".concat(this.url).concat(id), employee, this.httpOptions);
          }
        }, {
          key: "create",
          value: function create(person, id) {
            return this.http.post("".concat(this.url).concat(id), person, this.httpOptions);
          }
        }, {
          key: "changeStatus",
          value: function changeStatus(id) {
            return this.http.put("".concat(this.url, "changestatus/").concat(id), null, this.httpOptions);
          }
        }]);

        return _EmployeeService;
      }(_defaultService__WEBPACK_IMPORTED_MODULE_0__.DefaultService);

      _EmployeeService.ɵfac = function EmployeeService_Factory(t) {
        return new (t || _EmployeeService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
      };

      _EmployeeService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: _EmployeeService,
        factory: _EmployeeService.ɵfac,
        providedIn: "root"
      });
      /***/
    },

    /***/
    22706:
    /*!*************************************************!*\
      !*** ./src/app/service/person/personService.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PersonService": function PersonService() {
          return (
            /* binding */
            _PersonService
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

      var _PersonService = /*#__PURE__*/function (_defaultService__WEBP4) {
        _inherits(_PersonService, _defaultService__WEBP4);

        var _super4 = _createSuper(_PersonService);

        function _PersonService(http) {
          var _this4;

          _classCallCheck(this, _PersonService);

          _this4 = _super4.call(this, 'person/');
          _this4.http = http;
          _this4.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
              'Content-Type': 'application/json',
              'Authorization': 'Basic bmFudTpuYW51'
            })
          };
          return _this4;
        }

        _createClass(_PersonService, [{
          key: "getPersonMultipleParams",
          value: function getPersonMultipleParams(searchPerson) {
            var headerss = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set('Authorization', 'Basic bmFudTpuYW51');
            var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams().append("namePerson", searchPerson.namePerson).append("surnamePerson", searchPerson.surnamePerson).append("birthday", searchPerson.birthday);
            var queryJustName = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams().append("namePerson", searchPerson.namePerson);
            var queryJustSurname = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams().append("surnamePerson", searchPerson.surnamePerson);
            var queryJustBirthDay = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams().append("birthday", searchPerson.birthday);

            if (searchPerson.namePerson != null && searchPerson.surnamePerson != null && searchPerson.birthday != null) {
              var options = {
                params: queryParams,
                headers: headerss
              };
              return this.http.get("".concat(this.url, "getPersonOpts"), options);
            }

            if (searchPerson.namePerson != null && searchPerson.surnamePerson == null && searchPerson.birthday == null) {
              var _options6 = {
                params: queryJustName,
                headers: headerss
              };
              return this.http.get("".concat(this.url, "getPersonOpts"), _options6);
            }

            if (searchPerson.namePerson == null && searchPerson.surnamePerson != null && searchPerson.birthday == null) {
              var _options7 = {
                params: queryJustSurname,
                headers: headerss
              };
              return this.http.get("".concat(this.url, "getPersonOpts"), _options7);
            }

            if (searchPerson.namePerson == null && searchPerson.surnamePerson == null && searchPerson.birthday != null) {
              var _options8 = {
                params: queryJustBirthDay,
                headers: headerss
              };
              return this.http.get("".concat(this.url, "getPersonOpts"), _options8);
            }

            if (searchPerson.namePerson == null && searchPerson.surnamePerson == null) {
              var _options9 = {
                headers: headerss
              };
              return this.http.get("".concat(this.url, "getPersonOpts"), _options9);
            }
          }
        }, {
          key: "getByOne",
          value: function getByOne(value) {
            var headerss = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set('Authorization', 'Basic bmFudTpuYW51');
            var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams().append("value", value);
            var options = {
              params: queryParams,
              headers: headerss
            };
            return this.http.get("".concat(this.url, "getPersonByOne"), options);
          }
        }, {
          key: "findById",
          value: function findById(id) {
            return this.http.get("".concat(this.url).concat(id), this.httpOptions);
          }
        }, {
          key: "edit",
          value: function edit(id, person) {
            return this.http.put("".concat(this.url).concat(id), person, this.httpOptions);
          }
        }, {
          key: "create",
          value: function create(person) {
            return this.http.post("".concat(this.url), person, this.httpOptions);
          }
        }, {
          key: "changeStatus",
          value: function changeStatus(id) {
            return this.http.put("".concat(this.url, "changestatus/").concat(id), null, this.httpOptions);
          }
        }]);

        return _PersonService;
      }(_defaultService__WEBPACK_IMPORTED_MODULE_0__.DefaultService);

      _PersonService.ɵfac = function PersonService_Factory(t) {
        return new (t || _PersonService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
      };

      _PersonService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: _PersonService,
        factory: _PersonService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    28825:
    /*!*************************************************!*\
      !*** ./src/app/service/sample/SampleService.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SampleService": function SampleService() {
          return (
            /* binding */
            _SampleService
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

      var _SampleService = /*#__PURE__*/function (_defaultService__WEBP5) {
        _inherits(_SampleService, _defaultService__WEBP5);

        var _super5 = _createSuper(_SampleService);

        function _SampleService(http) {
          var _this5;

          _classCallCheck(this, _SampleService);

          _this5 = _super5.call(this, 'sample/');
          _this5.http = http;
          _this5.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
              'Content-Type': 'application/json',
              'Authorization': 'Basic bmFudTpuYW51'
            })
          };
          return _this5;
        }

        _createClass(_SampleService, [{
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
          key: "findBySampleNumber",
          value: function findBySampleNumber(searchSample) {
            return this.http.get("".concat(this.url, "getsample/").concat(searchSample.sampleNumber), this.httpOptions);
          }
        }, {
          key: "create",
          value: function create(sample, idCollect, idEmp) {
            return this.http.post("".concat(this.url).concat(idCollect, "/").concat(idEmp), sample, this.httpOptions);
          }
        }, {
          key: "getAll",
          value: function getAll(type) {
            return this.http.get("".concat(this.url, "stockType/").concat(type), this.httpOptions);
          }
        }]);

        return _SampleService;
      }(_defaultService__WEBPACK_IMPORTED_MODULE_0__.DefaultService);

      _SampleService.ɵfac = function SampleService_Factory(t) {
        return new (t || _SampleService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
      };

      _SampleService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: _SampleService,
        factory: _SampleService.ɵfac,
        providedIn: 'root'
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map