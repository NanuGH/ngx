"use strict";
(self["webpackChunkngx_admin"] = self["webpackChunkngx_admin"] || []).push([["common"],{

/***/ 23389:
/*!********************************************************************!*\
  !*** ./src/app/service/blood-collection.ts/BloodCollectService.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BloodCollectService": function() { return /* binding */ BloodCollectService; }
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _defaultService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../defaultService */ 38806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);




class BloodCollectService extends _defaultService__WEBPACK_IMPORTED_MODULE_0__.DefaultService {
    constructor(http) {
        super('bloodcollection/');
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Basic bmFudTpuYW51'
            })
        };
    }
    getBloodColectMultParams(searchBloodCollect) {
        const headerss = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set("Authorization", "Basic bmFudTpuYW51");
        let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams().append("collectionNumber", searchBloodCollect.collectionNumber)
            .append("insertionDate", searchBloodCollect.insertionDate);
        let queryJustCollectionNumber = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams().append("collectionNumber", searchBloodCollect.collectionNumber);
        let queryJustInsertionDate = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams().append("insertionDate", searchBloodCollect.insertionDate);
        if (searchBloodCollect.collectionNumber != null && searchBloodCollect.insertionDate == null) {
            const options = { params: queryJustCollectionNumber, headers: headerss };
            return this.http.get(`${this.url}getBloodCollectionpts`, options);
        }
        if (searchBloodCollect.collectionNumber != null && searchBloodCollect.insertionDate != null) {
            const options = { params: queryParams, headers: headerss };
            return this.http.get(`${this.url}getBloodCollectionpts`, options);
        }
        if (searchBloodCollect.collectionNumber == null && searchBloodCollect.insertionDate != null) {
            const options = { params: queryJustInsertionDate, headers: headerss };
            return this.http.get(`${this.url}getBloodCollectionpts`, options);
        }
    }
    findById(id) {
        return this.http.get(`${this.url}${id}`, this.httpOptions);
    }
    changeStatus(id) {
        return this.http.put(`${this.url}changestatus/${id}`, null, this.httpOptions);
    }
    create(person, idEmpl, idDonner) {
        return this.http.post(`${this.url}${idEmpl}/${idDonner}`, person, this.httpOptions);
    }
    edit(collection, idCollection, idEmpl) {
        return this.http.put(`${this.url}
      ${idCollection}/${idEmpl}`, collection, this.httpOptions);
    }
    findByCollectionNumber(colletNumber) {
        return this.http.get(`${this.url}collection/${colletNumber}`, this.httpOptions);
    }
}
BloodCollectService.ɵfac = function BloodCollectService_Factory(t) { return new (t || BloodCollectService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
BloodCollectService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: BloodCollectService, factory: BloodCollectService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 19243:
/*!*******************************************************!*\
  !*** ./src/app/service/bloodTest/BloodTestService.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BloodTestService": function() { return /* binding */ BloodTestService; }
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _defaultService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../defaultService */ 38806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);




class BloodTestService extends _defaultService__WEBPACK_IMPORTED_MODULE_0__.DefaultService {
    constructor(http) {
        super('bloodtest/');
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
    findByTestNumber(searchTest) {
        return this.http.get(`${this.url}test/${searchTest.sampleNumber}`, this.httpOptions);
    }
    create(testModel, idEmp, idSample) {
        return this.http.post(`${this.url}/${idEmp}/${idSample}`, testModel, this.httpOptions);
    }
}
BloodTestService.ɵfac = function BloodTestService_Factory(t) { return new (t || BloodTestService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
BloodTestService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: BloodTestService, factory: BloodTestService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 38806:
/*!*******************************************!*\
  !*** ./src/app/service/defaultService.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultService": function() { return /* binding */ DefaultService; }
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 92340);

//conecao com api
class DefaultService {
    constructor(resource) {
        this.url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.url}${resource}`;
    }
}


/***/ }),

/***/ 3436:
/*!*****************************************************!*\
  !*** ./src/app/service/employee/employeeService.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeeService": function() { return /* binding */ EmployeeService; }
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _defaultService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../defaultService */ 38806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);




class EmployeeService extends _defaultService__WEBPACK_IMPORTED_MODULE_0__.DefaultService {
    constructor(http) {
        super("employee/");
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                "Content-Type": "application/json",
                Authorization: "Basic bmFudTpuYW51",
            }),
        };
    }
    getEmployeeMultipleParams(searchEmployee) {
        const headerss = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set("Authorization", "Basic bmFudTpuYW51");
        let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams().append("identifNumber", searchEmployee.identifNumber)
            .append("email", searchEmployee.email);
        let queryJustIdentifNumber = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams().append("identifNumber", searchEmployee.identifNumber);
        let queryJustEmail = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams().append("email", searchEmployee.email);
        if (searchEmployee.identifNumber != null && searchEmployee.email != null) {
            const options = { params: queryParams, headers: headerss };
            return this.http.get(`${this.url}getEmplOpts`, options);
        }
        if (searchEmployee.identifNumber != null && searchEmployee.email == null) {
            const options = { params: queryJustIdentifNumber, headers: headerss };
            return this.http.get(`${this.url}getEmplOpts`, options);
        }
        if (searchEmployee.identifNumber == null && searchEmployee.email != null) {
            const options = { params: queryJustEmail, headers: headerss };
            return this.http.get(`${this.url}getEmplOpts`, options);
        }
        if (searchEmployee.identifNumber == null && searchEmployee.email == null) {
            const options = { headers: headerss };
            return this.http.get(`${this.url}getEmplOpts`, options);
        }
    }
    findById(id) {
        return this.http.get(`${this.url}${id}`, this.httpOptions);
    }
    edit(id, employee) {
        return this.http.put(`${this.url}${id}`, employee, this.httpOptions);
    }
    create(person, id) {
        return this.http.post(`${this.url}${id}`, person, this.httpOptions);
    }
    changeStatus(id) {
        return this.http.put(`${this.url}changestatus/${id}`, null, this.httpOptions);
    }
}
EmployeeService.ɵfac = function EmployeeService_Factory(t) { return new (t || EmployeeService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
EmployeeService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: EmployeeService, factory: EmployeeService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 22706:
/*!*************************************************!*\
  !*** ./src/app/service/person/personService.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PersonService": function() { return /* binding */ PersonService; }
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _defaultService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../defaultService */ 38806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);




class PersonService extends _defaultService__WEBPACK_IMPORTED_MODULE_0__.DefaultService {
    constructor(http) {
        super('person/');
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Basic bmFudTpuYW51'
            })
        };
    }
    getPersonMultipleParams(searchPerson) {
        const headerss = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set('Authorization', 'Basic bmFudTpuYW51');
        let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams().append("namePerson", searchPerson.namePerson)
            .append("surnamePerson", searchPerson.surnamePerson)
            .append("birthday", searchPerson.birthday);
        let queryJustName = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams().append("namePerson", searchPerson.namePerson);
        let queryJustSurname = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams().append("surnamePerson", searchPerson.surnamePerson);
        let queryJustBirthDay = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams().append("birthday", searchPerson.birthday);
        if (searchPerson.namePerson != null && searchPerson.surnamePerson != null && searchPerson.birthday != null) {
            const options = { params: queryParams, headers: headerss };
            return this.http.get(`${this.url}getPersonOpts`, options);
        }
        if (searchPerson.namePerson != null && searchPerson.surnamePerson == null && searchPerson.birthday == null) {
            const options = { params: queryJustName, headers: headerss };
            return this.http.get(`${this.url}getPersonOpts`, options);
        }
        if (searchPerson.namePerson == null && searchPerson.surnamePerson != null && searchPerson.birthday == null) {
            const options = { params: queryJustSurname, headers: headerss };
            return this.http.get(`${this.url}getPersonOpts`, options);
        }
        if (searchPerson.namePerson == null && searchPerson.surnamePerson == null && searchPerson.birthday != null) {
            const options = { params: queryJustBirthDay, headers: headerss };
            return this.http.get(`${this.url}getPersonOpts`, options);
        }
        if (searchPerson.namePerson == null && searchPerson.surnamePerson == null) {
            const options = { headers: headerss };
            return this.http.get(`${this.url}getPersonOpts`, options);
        }
    }
    getByOne(value) {
        const headerss = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set('Authorization', 'Basic bmFudTpuYW51');
        let queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams().append("value", value);
        const options = { params: queryParams, headers: headerss };
        return this.http.get(`${this.url}getPersonByOne`, options);
    }
    findById(id) {
        return this.http.get(`${this.url}${id}`, this.httpOptions);
    }
    edit(id, person) {
        return this.http.put(`${this.url}${id}`, person, this.httpOptions);
    }
    create(person) {
        return this.http.post(`${this.url}`, person, this.httpOptions);
    }
    changeStatus(id) {
        return this.http.put(`${this.url}changestatus/${id}`, null, this.httpOptions);
    }
}
PersonService.ɵfac = function PersonService_Factory(t) { return new (t || PersonService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
PersonService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: PersonService, factory: PersonService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 28825:
/*!*************************************************!*\
  !*** ./src/app/service/sample/SampleService.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SampleService": function() { return /* binding */ SampleService; }
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _defaultService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../defaultService */ 38806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);




class SampleService extends _defaultService__WEBPACK_IMPORTED_MODULE_0__.DefaultService {
    constructor(http) {
        super('sample/');
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
    findBySampleNumber(searchSample) {
        return this.http.get(`${this.url}getsample/${searchSample.sampleNumber}`, this.httpOptions);
    }
    create(sample, idCollect, idEmp) {
        return this.http.post(`${this.url}${idCollect}/${idEmp}`, sample, this.httpOptions);
    }
    getAll(type) {
        return this.http.get(`${this.url}stockType/${type}`, this.httpOptions);
    }
}
SampleService.ɵfac = function SampleService_Factory(t) { return new (t || SampleService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
SampleService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: SampleService, factory: SampleService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map