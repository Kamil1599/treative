(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/flight/flight.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/flight/flight.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<mat-form-field>-->\n<!--  <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">-->\n<!--</mat-form-field>-->\n\n<div class=\" mat-elevation-z8\">\n  <table mat-table [dataSource]=\"dataSource\" multiTemplateDataRows>\n\n    <!--    &lt;!&ndash; ID Column &ndash;&gt;-->\n    <!--    <ng-container matColumnDef=\"id\">-->\n    <!--      <th mat-header-cell *matHeaderCellDef mat-sort-header> ID</th>-->\n    <!--      <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>-->\n    <!--    </ng-container>-->\n\n    <!--    Departure Time Column-->\n    <ng-container matColumnDef=\"departureDateTime\">\n      <th mat-header-cell *matHeaderCellDef> Departure Time</th>\n      <td mat-cell *matCellDef=\"let flight\"> {{flight.departureDateTime | date:'MMM d, y, H:mm'}} </td>\n    </ng-container>\n\n    <!--    Arrival Time Column-->\n    <ng-container matColumnDef=\"arrivalDateTime\">\n      <th mat-header-cell *matHeaderCellDef> Arrival Time</th>\n      <td mat-cell *matCellDef=\"let flight\"> {{flight.arrivalDateTime | date:'MMM d, y, H:mm'}} </td>\n    </ng-container>\n\n    <!-- Number Of Seats Column -->\n    <ng-container matColumnDef=\"numberOfSeats\">\n      <th mat-header-cell *matHeaderCellDef> Number of Seats</th>\n      <td mat-cell *matCellDef=\"let flight\"> {{flight.tourists.length}}/{{flight.numberOfSeats}} </td>\n    </ng-container>\n\n    <!-- Ticket Price Column -->\n    <ng-container matColumnDef=\"ticketPrice\">\n      <th mat-header-cell *matHeaderCellDef> Ticket Price</th>\n      <td mat-cell *matCellDef=\"let flight\"> {{flight.ticketPrice}} </td>\n    </ng-container>\n\n    <!-- Delete Button Column -->\n    <ng-container matColumnDef=\"deleteButton\">\n      <th mat-header-cell *matHeaderCellDef> Delete</th>\n      <td mat-cell class=\"no-borders\" *matCellDef=\"let flight\">\n        <i class=\"material-icons clickable\" (click)=\"deleteFlight(flight)\">\n          delete_forever\n        </i></td>\n    </ng-container>\n\n    <!-- Expanded Details    -->\n    <ng-container matColumnDef=\"expandedDetail\">\n      <td mat-cell *matCellDef=\"let flight\" [attr.colspan]=\"flightColumns.length\">\n        <div class=\"element-detail\"\n             [@detailExpand]=\"flight == expandedElement ? 'expanded' : 'collapsed'\">\n          <div style=\"width: 100%\">\n            <span><b>Tourists saved for this flight</b></span>\n            <div class=\" mat-elevation-z2\">\n              <table mat-table [dataSource]=\"flight.tourists\" multiTemplateDataRows>\n\n                <!--              &lt;!&ndash; ID Column &ndash;&gt;-->\n                <!--              <ng-container matColumnDef=\"id\">-->\n                <!--                <th mat-header-cell *matHeaderCellDef mat-sort-header> ID</th>-->\n                <!--                <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>-->\n                <!--              </ng-container>-->\n\n                <!-- First Name Column -->\n                <ng-container matColumnDef=\"firstName\">\n                  <th mat-header-cell *matHeaderCellDef> First Name</th>\n                  <td mat-cell class=\"no-borders\" *matCellDef=\"let tourist\"> {{tourist.firstName}} </td>\n                  <td mat-footer-cell *matFooterCellDef>\n                    <span><b>Add tourist</b></span>\n                  </td>\n                </ng-container>\n\n                <!-- Last Name Column -->\n                <ng-container matColumnDef=\"lastName\">\n                  <th mat-header-cell *matHeaderCellDef> Last Name</th>\n                  <td mat-cell class=\"no-borders\" *matCellDef=\"let tourist\"> {{tourist.lastName}} </td>\n                  <td mat-footer-cell *matFooterCellDef>\n\n                    <!--  Search Box-->\n                    <mat-form-field>\n                      <input matInput #searchBox id=\"search-box\" placeholder=\"Search\"\n                             (keyup)=\"search(searchBox.value)\"\n                             (focusout)=\"searchBox.value = ''\"\n                             (focusout)=\"searchFocusOut()\"/>\n\n                      <!--                      Search result-->\n                      <div style=\"  background: ghostwhite\">\n                        <mat-option *ngFor=\"let tourist of touristsSearch$ | async\">\n                          <p (click)=\"addTouristToFlight(tourist,flight)\">\n                            <span>{{tourist.firstName}} {{tourist.lastName}}</span>\n                          </p>\n                        </mat-option>\n                      </div>\n                    </mat-form-field>\n                  </td>\n                </ng-container>\n\n                <!-- Last Name Column -->\n                <ng-container matColumnDef=\"gender\">\n                  <th mat-header-cell *matHeaderCellDef> Gender</th>\n                  <td mat-cell class=\"no-borders\" *matCellDef=\"let tourist\"> {{tourist.gender}} </td>\n                  <td mat-footer-cell *matFooterCellDef></td>\n                </ng-container>\n\n                <!-- Last Name Column -->\n                <ng-container matColumnDef=\"dayOfBirth\">\n                  <th mat-header-cell *matHeaderCellDef> Day of Birth</th>\n                  <td mat-cell class=\"no-borders\"\n                      *matCellDef=\"let tourist\"> {{tourist.dayOfBirth | date:'MMM d, y'}} </td>\n                  <td mat-footer-cell *matFooterCellDef></td>\n                </ng-container>\n\n                <!-- Last Name Column -->\n                <ng-container matColumnDef=\"country\">\n                  <th mat-header-cell *matHeaderCellDef> Country</th>\n                  <td mat-cell class=\"no-borders\" *matCellDef=\"let tourist\"> {{tourist.country}} </td>\n                  <td mat-footer-cell *matFooterCellDef></td>\n                </ng-container>\n\n                <!-- Remove Button Column -->\n                <ng-container matColumnDef=\"removeButton\">\n                  <th mat-header-cell *matHeaderCellDef> Remove</th>\n                  <td mat-cell class=\"no-borders\" *matCellDef=\"let tourist\">\n                    <i class=\"material-icons clickable\" (click)=\"removeTouristFormFlight(tourist,flight)\">\n                      cancel\n                    </i></td>\n                  <td mat-footer-cell *matFooterCellDef></td>\n                </ng-container>\n\n                <tr mat-header-row *matHeaderRowDef=\"touristColumns\"></tr>\n                <tr mat-row *matRowDef=\"let row; columns: touristColumns;\"></tr>\n                <tr mat-footer-row *matFooterRowDef=\"touristColumns\"></tr>\n              </table>\n            </div>\n          </div>\n        </div>\n      </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"flightColumns\"></tr>\n    <tr mat-row *matRowDef=\"let flight; columns: flightColumns;\"\n        class=\"example-element-row\"\n        [class.example-expanded-row]=\"expandedElement === flight\"\n        (click)=\"expandedElement = expandedElement === flight ? null : flight\">\n    </tr>\n    <tr mat-row *matRowDef=\"let row; columns: ['expandedDetail']\" class=\"example-detail-row\"></tr>\n  </table>\n\n\n  <!-- New Flight Form -->\n  <form [formGroup]=\"newFlightForm\" [hidden]=\"isFormHidden\">\n    <span>Add New Flight</span>\n    <div class=\"row\">\n\n      <!--  Departure Time Input    -->\n      <mat-form-field class=\"full-width\">\n        <input matInput [owlDateTime]=\"dt1\" [owlDateTimeTrigger]=\"dt1\" placeholder=\"Departure Time\"\n               formControlName=\"departureDateTime\">\n        <owl-date-time #dt1></owl-date-time>\n        <mat-error *ngIf=\"departureDateTime.hasError('required')\">\n          Departure time is required\n        </mat-error>\n      </mat-form-field>\n\n      <!--  Arrival Time Input    -->\n      <mat-form-field class=\"full-width\">\n        <input matInput [owlDateTime]=\"dt2\" [owlDateTimeTrigger]=\"dt2\" placeholder=\"Arrival Time\"\n               formControlName=\"arrivalDateTime\" required>\n        <owl-date-time #dt2></owl-date-time>\n        <mat-error *ngIf=\"arrivalDateTime.hasError('required')\">\n          Arrival time is required\n        </mat-error>\n      </mat-form-field>\n\n      <!--      Numbers Of Seats Input-->\n      <mat-form-field class=\"full-width\">\n        <input matInput placeholder=\"Number of Seats\" formControlName=\"numberOfSeats\" required>\n        <mat-error *ngIf=\"numberOfSeats.hasError('required')\">\n          Number of seats is required\n        </mat-error>\n      </mat-form-field>\n\n      <!--      Ticket Price Input-->\n      <mat-form-field class=\"full-width\">\n        <input matInput placeholder=\"Ticket Price\" formControlName=\"ticketPrice\" required>\n        <span matPrefix>$&nbsp;</span>\n        <span matSuffix>.00</span>\n        <mat-error *ngIf=\"ticketPrice.hasError('required')\">\n          Ticket price is required\n        </mat-error>\n      </mat-form-field>\n    </div>\n  </form>\n\n  <div class=\"button-paginator\">\n    <button class=\"button\" mat-stroked-button [disabled]=\"(!isFormHidden)&&newFlightForm.invalid\"\n            (click)=\"addFlightClicked()\">Add Flight\n    </button>\n    <mat-paginator\n      [pageSizeOptions]=\"pageSizeOptions\"\n      [pageIndex]=\"pageIndex\"\n      [pageSize]=\"pageSize\"\n      [length]=\"totalElements\"\n      (page)=\"changePage($event)\">\n    </mat-paginator>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/main.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/main.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"center\">\n    <button class=\"button\" routerLink=\"flights\" mat-stroked-button>Flights</button>\n    <button class=\"button\" routerLink=\"tourists\" mat-stroked-button>Tourists</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tourist/tourist.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tourist/tourist.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\" mat-elevation-z8\">\r\n  <table mat-table [dataSource]=\"dataSource\" multiTemplateDataRows>\r\n\r\n    <!-- First Name Column -->\r\n    <ng-container matColumnDef=\"firstName\">\r\n      <th mat-header-cell *matHeaderCellDef> First Name</th>\r\n      <td mat-cell *matCellDef=\"let tourist\"> {{tourist.firstName}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Last Name Column -->\r\n    <ng-container matColumnDef=\"lastName\">\r\n      <th mat-header-cell *matHeaderCellDef> Last Name</th>\r\n      <td mat-cell *matCellDef=\"let tourist\"> {{tourist.lastName}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Gender Column -->\r\n    <ng-container matColumnDef=\"gender\">\r\n      <th mat-header-cell *matHeaderCellDef> Gender</th>\r\n      <td mat-cell *matCellDef=\"let tourist\"> {{tourist.gender}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Day of Birth Column -->\r\n    <ng-container matColumnDef=\"dayOfBirth\">\r\n      <th mat-header-cell *matHeaderCellDef> Day of Birth</th>\r\n      <td mat-cell *matCellDef=\"let tourist\"> {{tourist.dayOfBirth | date:'MMM d, y'}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Country Column -->\r\n    <ng-container matColumnDef=\"country\">\r\n      <th mat-header-cell *matHeaderCellDef> Country</th>\r\n      <td mat-cell *matCellDef=\"let tourist\"> {{tourist.country}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Delete Button Column -->\r\n    <ng-container matColumnDef=\"deleteButton\">\r\n      <th mat-header-cell *matHeaderCellDef> Delete</th>\r\n      <td mat-cell *matCellDef=\"let tourist\">\r\n        <i class=\"material-icons clickable\" (click)=\"deleteTourist(tourist)\">\r\n          delete_forever\r\n        </i></td>\r\n    </ng-container>\r\n\r\n    <!-- Expanded Details    -->\r\n    <ng-container matColumnDef=\"expandedDetail\">\r\n      <td mat-cell *matCellDef=\"let tourist\" [attr.colspan]=\"touristColumns.length\">\r\n        <div class=\"element-detail\"\r\n             [@detailExpand]=\"tourist == expandedElement ? 'expanded' : 'collapsed'\">\r\n          <div style=\"width: 100%\">\r\n            <span><b>Tourist's remarks:</b> {{tourist.remarks}}</span>\r\n            <br>\r\n            <span><b>Tourist's flights: </b></span>\r\n            <div class=\" mat-elevation-z2\">\r\n              <table mat-table [dataSource]=\"tourist.flights\" multiTemplateDataRows>\r\n\r\n                <!--    Departure Time Column-->\r\n                <ng-container matColumnDef=\"departureDateTime\">\r\n                  <th mat-header-cell *matHeaderCellDef> Departure Time</th>\r\n                  <td mat-cell *matCellDef=\"let flight\"> {{flight.departureDateTime | date:'MMM d, y, H:mm'}} </td>\r\n                </ng-container>\r\n\r\n                <!--    Arrival Time Column-->\r\n                <ng-container matColumnDef=\"arrivalDateTime\">\r\n                  <th mat-header-cell *matHeaderCellDef> Arrival Time</th>\r\n                  <td mat-cell *matCellDef=\"let flight\"> {{flight.arrivalDateTime | date:'MMM d, y, H:mm'}} </td>\r\n                </ng-container>\r\n\r\n                <!-- Number Of Seats Column -->\r\n                <ng-container matColumnDef=\"numberOfSeats\">\r\n                  <th mat-header-cell *matHeaderCellDef> Number of Seats</th>\r\n                  <td mat-cell *matCellDef=\"let flight\"> {{flight.seatsTaken}}/{{flight.numberOfSeats}} </td>\r\n                </ng-container>\r\n\r\n                <!-- Ticket Price Column -->\r\n                <ng-container matColumnDef=\"ticketPrice\">\r\n                  <th mat-header-cell *matHeaderCellDef> Ticket Price</th>\r\n                  <td mat-cell *matCellDef=\"let flight\"> {{flight.ticketPrice}} </td>\r\n                </ng-container>\r\n\r\n                <!-- Remove Button Column -->\r\n                <ng-container matColumnDef=\"deleteButton\">\r\n                  <th mat-header-cell *matHeaderCellDef> Remove</th>\r\n                  <td mat-cell class=\"no-borders\" *matCellDef=\"let flight\">\r\n                    <i class=\"material-icons clickable\" (click)=\"removeTouristFromFlight(tourist,flight)\">\r\n                      cancel\r\n                    </i></td>\r\n                </ng-container>\r\n\r\n                <tr mat-header-row *matHeaderRowDef=\"flightColumns\"></tr>\r\n                <tr mat-row *matRowDef=\"let row; columns: flightColumns;\"></tr>\r\n                <!--                                <tr mat-footer-row *matFooterRowDef=\"flightColumns\"></tr>-->\r\n              </table>\r\n              <button class=\"button\" mat-stroked-button (click)=\"addFlightButtonClicked()\">Add Flight</button>\r\n\r\n\r\n              <table mat-table [dataSource]=\"allFlights\" [hidden]=\"isAllFlightsTableHidden\" multiTemplateDataRows>\r\n\r\n                <!--    Departure Time Column-->\r\n                <ng-container matColumnDef=\"departureDateTime\">\r\n                  <th mat-header-cell *matHeaderCellDef> Departure Time</th>\r\n                  <td mat-cell *matCellDef=\"let flight\"> {{flight.departureDateTime | date:'MMM d, y, H:mm'}} </td>\r\n                </ng-container>\r\n\r\n                <!--    Arrival Time Column-->\r\n                <ng-container matColumnDef=\"arrivalDateTime\">\r\n                  <th mat-header-cell *matHeaderCellDef> Arrival Time</th>\r\n                  <td mat-cell *matCellDef=\"let flight\"> {{flight.arrivalDateTime | date:'MMM d, y, H:mm'}} </td>\r\n                </ng-container>\r\n\r\n                <!-- Number Of Seats Column -->\r\n                <ng-container matColumnDef=\"numberOfSeats\">\r\n                  <th mat-header-cell *matHeaderCellDef> Number of Seats</th>\r\n                  <td mat-cell *matCellDef=\"let flight\"> {{flight.seatsTaken}}/{{flight.numberOfSeats}} </td>\r\n                </ng-container>\r\n\r\n                <!-- Ticket Price Column -->\r\n                <ng-container matColumnDef=\"ticketPrice\">\r\n                  <th mat-header-cell *matHeaderCellDef> Ticket Price</th>\r\n                  <td mat-cell *matCellDef=\"let flight\"> {{flight.ticketPrice}} </td>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef=\"addFlightButton\">\r\n                  <th mat-header-cell *matHeaderCellDef> Add Flight</th>\r\n                  <td mat-cell class=\"no-borders\" *matCellDef=\"let flight\">\r\n                    <i class=\"material-icons clickable\" (click)=\"addTouristToFlight(tourist,flight)\">\r\n                      add_circle\r\n                    </i></td>\r\n                </ng-container>\r\n\r\n                <tr mat-header-row *matHeaderRowDef=\"addFlightColumns\"></tr>\r\n                <tr mat-row *matRowDef=\"let row; columns: addFlightColumns;\"></tr>\r\n                <!--                                <tr mat-footer-row *matFooterRowDef=\"flightColumns\"></tr>-->\r\n              </table>\r\n\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </td>\r\n    </ng-container>\r\n\r\n    <tr mat-header-row *matHeaderRowDef=\"touristColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let flight; columns: touristColumns;\"\r\n        class=\"example-element-row\"\r\n        [class.example-expanded-row]=\"expandedElement === flight\"\r\n        (click)=\"expandedElement = expandedElement === flight ? null : flight\">\r\n    </tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: ['expandedDetail']\" class=\"example-detail-row\"></tr>\r\n  </table>\r\n\r\n\r\n  <!-- New Tourist Form -->\r\n  <form [formGroup]=\"newTouristForm\" [hidden]=\"isFormHidden\">\r\n    <h4>Add New Tourist</h4>\r\n    <div class=\"row\">\r\n\r\n      <!--  First Name Input    -->\r\n      <mat-form-field class=\"full-width\">\r\n        <input matInput placeholder=\"First Name\" formControlName=\"firstName\">\r\n        <mat-error *ngIf=\"firstName.hasError('required')\">\r\n          First Name is required\r\n        </mat-error>\r\n      </mat-form-field>\r\n\r\n      <!--  Last Name Input    -->\r\n      <mat-form-field class=\"full-width\">\r\n        <input matInput placeholder=\"Last Name\" formControlName=\"lastName\" required>\r\n        <mat-error *ngIf=\"lastName.hasError('required')\">\r\n          Last Name is required\r\n        </mat-error>\r\n      </mat-form-field>\r\n\r\n      <!--      Gender Input-->\r\n      <mat-form-field class=\"full-width\">\r\n        <mat-select formControlName=\"gender\" placeholder=\"Gender\">\r\n          <mat-option *ngFor=\"let gender of genders\" [value]=\"gender\">\r\n            {{gender}}\r\n          </mat-option>\r\n        </mat-select>\r\n        <mat-error *ngIf=\"gender.hasError('required')\">\r\n          Gender is required\r\n        </mat-error>\r\n      </mat-form-field>\r\n\r\n      <!--      Day of Birth Input-->\r\n      <mat-form-field class=\"full-width\">\r\n        <input matInput placeholder=\"Day Of Birth\" [owlDateTime]=\"dt1\" [owlDateTimeTrigger]=\"dt1\"\r\n               formControlName=\"dayOfBirth\" required>\r\n        <owl-date-time [pickerType]=\"'calendar'\" #dt1></owl-date-time>\r\n        <mat-error *ngIf=\"dayOfBirth.hasError('required')\">\r\n          Day of Birth is required\r\n        </mat-error>\r\n      </mat-form-field>\r\n\r\n      <!--      Country Input-->\r\n      <mat-form-field class=\"full-width\">\r\n        <!--        <input matInput placeholder=\"Country\" formControlName=\"country\" required>-->\r\n        <mat-select formControlName=\"country\" placeholder=\"Country\">\r\n          <mat-option *ngFor=\"let country of countryService.countries\" [value]=\"country\">\r\n            {{country}}\r\n          </mat-option>\r\n        </mat-select>\r\n        <mat-error *ngIf=\"country.hasError('required')\">\r\n          Country is required\r\n        </mat-error>\r\n      </mat-form-field>\r\n\r\n      <!--      Remarks Input-->\r\n      <mat-form-field class=\"full-width\">\r\n        <textarea matInput placeholder=\"Remarks\" formControlName=\"remarks\"></textarea>\r\n      </mat-form-field>\r\n    </div>\r\n  </form>\r\n\r\n  <div class=\"button-paginator\">\r\n    <button class=\"button\" mat-stroked-button\r\n            [disabled]=\"(!isFormHidden)&&newTouristForm.invalid\" (click)=\"addTouristClicked()\">\r\n      Add Tourist\r\n    </button>\r\n    <mat-paginator\r\n      [pageSizeOptions]=\"pageSizeOptions\"\r\n      [pageIndex]=\"pageIndex\"\r\n      [pageSize]=\"pageSize\"\r\n      [length]=\"totalElements\"\r\n      (page)=\"changePage($event)\"\r\n    ></mat-paginator>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _flight_flight_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./flight/flight.component */ "./src/app/flight/flight.component.ts");
/* harmony import */ var _tourist_tourist_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tourist/tourist.component */ "./src/app/tourist/tourist.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");






const routes = [
    { path: '', component: _main_main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"] },
    { path: 'flights', component: _flight_flight_component__WEBPACK_IMPORTED_MODULE_3__["FlightComponent"] },
    { path: 'tourists', component: _tourist_tourist_component__WEBPACK_IMPORTED_MODULE_4__["TouristComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n  /*opacity:0.8;*/\r\n  /*background-color:#ccc;*/\r\n  position: fixed;\r\n  display: table;\r\n  width: 100%;\r\n  height: 100%;\r\n  top: 0px;\r\n  left: 0px;\r\n  /*z-index:1000;*/\r\n  text-align: center;\r\n}\r\n\r\n.button {\r\n  width: 200px;\r\n  height: 50px;\r\n  margin-right: 8px;\r\n}\r\n\r\n.center {\r\n  margin: 0;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixjQUFjO0VBQ2QsV0FBVztFQUNYLFlBQVk7RUFDWixRQUFRO0VBQ1IsU0FBUztFQUNULGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFFVCx3Q0FBZ0M7VUFBaEMsZ0NBQWdDO0FBQ2xDIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAvKm9wYWNpdHk6MC44OyovXHJcbiAgLypiYWNrZ3JvdW5kLWNvbG9yOiNjY2M7Ki9cclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHRvcDogMHB4O1xyXG4gIGxlZnQ6IDBweDtcclxuICAvKnotaW5kZXg6MTAwMDsqL1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmJ1dHRvbiB7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDhweDtcclxufVxyXG5cclxuLmNlbnRlciB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'ui';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _flight_flight_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./flight/flight.component */ "./src/app/flight/flight.component.ts");
/* harmony import */ var _tourist_tourist_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tourist/tourist.component */ "./src/app/tourist/tourist.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-pick-datetime */ "./node_modules/ng-pick-datetime/picker.js");













let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _flight_flight_component__WEBPACK_IMPORTED_MODULE_5__["FlightComponent"],
            _tourist_tourist_component__WEBPACK_IMPORTED_MODULE_6__["TouristComponent"],
            _main_main_component__WEBPACK_IMPORTED_MODULE_8__["MainComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSortModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatRippleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
            ng_pick_datetime__WEBPACK_IMPORTED_MODULE_12__["OwlDateTimeModule"],
            ng_pick_datetime__WEBPACK_IMPORTED_MODULE_12__["OwlNativeDateTimeModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatOptionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/flight/flight.component.css":
/*!*********************************************!*\
  !*** ./src/app/flight/flight.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-element-detail {\r\n  overflow: hidden;\r\n  display: flex;\r\n}\r\n\r\n.example-element-row {\r\n  border-bottom-width: 0;\r\n}\r\n\r\ntr.example-detail-row {\r\n  height: 0;\r\n}\r\n\r\n.example-element-row:not(.example-expanded-row):hover {\r\n  background: #777;\r\n}\r\n\r\n.example-element-row:not(.example-expanded-row):active {\r\n  background: #efefef;\r\n}\r\n\r\n.example-element-row {\r\n  border-bottom-width: 0;\r\n}\r\n\r\ntable {\r\n  width: 100%;\r\n}\r\n\r\ntr.example-detail-row {\r\n  height: 0;\r\n}\r\n\r\ntr.example-element-row:not(.example-expanded-row):hover {\r\n  background: #777;\r\n}\r\n\r\ntr.example-element-row:not(.example-expanded-row):active {\r\n  background: #efefef;\r\n}\r\n\r\n.example-element-row td {\r\n  border-bottom-width: 0;\r\n}\r\n\r\n.element-detail {\r\n  overflow: hidden;\r\n  display: flex;\r\n}\r\n\r\n.no-borders {\r\n  /*border-bottom-style: none;*/\r\n  /*border-top-style: none;*/\r\n}\r\n\r\n.button-paginator {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.button {\r\n  height: -webkit-max-content;\r\n  height: -moz-max-content;\r\n  height: max-content;\r\n  width: 100px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmxpZ2h0L2ZsaWdodC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFHQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0FBQ2Y7O0FBR0E7RUFDRSw2QkFBNkI7RUFDN0IsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSwyQkFBbUI7RUFBbkIsd0JBQW1CO0VBQW5CLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9mbGlnaHQvZmxpZ2h0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1lbGVtZW50LWRldGFpbCB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1lbGVtZW50LXJvdyB7XHJcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcclxufVxyXG5cclxudHIuZXhhbXBsZS1kZXRhaWwtcm93IHtcclxuICBoZWlnaHQ6IDA7XHJcbn1cclxuXHJcbi5leGFtcGxlLWVsZW1lbnQtcm93Om5vdCguZXhhbXBsZS1leHBhbmRlZC1yb3cpOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjNzc3O1xyXG59XHJcblxyXG4uZXhhbXBsZS1lbGVtZW50LXJvdzpub3QoLmV4YW1wbGUtZXhwYW5kZWQtcm93KTphY3RpdmUge1xyXG4gIGJhY2tncm91bmQ6ICNlZmVmZWY7XHJcbn1cclxuXHJcbi5leGFtcGxlLWVsZW1lbnQtcm93IHtcclxuICBib3JkZXItYm90dG9tLXdpZHRoOiAwO1xyXG59XHJcblxyXG5cclxudGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG50ci5leGFtcGxlLWRldGFpbC1yb3cge1xyXG4gIGhlaWdodDogMDtcclxufVxyXG5cclxudHIuZXhhbXBsZS1lbGVtZW50LXJvdzpub3QoLmV4YW1wbGUtZXhwYW5kZWQtcm93KTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogIzc3NztcclxufVxyXG5cclxudHIuZXhhbXBsZS1lbGVtZW50LXJvdzpub3QoLmV4YW1wbGUtZXhwYW5kZWQtcm93KTphY3RpdmUge1xyXG4gIGJhY2tncm91bmQ6ICNlZmVmZWY7XHJcbn1cclxuXHJcbi5leGFtcGxlLWVsZW1lbnQtcm93IHRkIHtcclxuICBib3JkZXItYm90dG9tLXdpZHRoOiAwO1xyXG59XHJcblxyXG4uZWxlbWVudC1kZXRhaWwge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuXHJcbi5uby1ib3JkZXJzIHtcclxuICAvKmJvcmRlci1ib3R0b20tc3R5bGU6IG5vbmU7Ki9cclxuICAvKmJvcmRlci10b3Atc3R5bGU6IG5vbmU7Ki9cclxufVxyXG5cclxuLmJ1dHRvbi1wYWdpbmF0b3Ige1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gIGhlaWdodDogbWF4LWNvbnRlbnQ7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/flight/flight.component.ts":
/*!********************************************!*\
  !*** ./src/app/flight/flight.component.ts ***!
  \********************************************/
/*! exports provided: FlightComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightComponent", function() { return FlightComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _model_flight__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/flight */ "./src/app/model/flight.ts");
/* harmony import */ var _service_flight_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/flight.service */ "./src/app/service/flight.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _service_tourist_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../service/tourist.service */ "./src/app/service/tourist.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");










let FlightComponent = class FlightComponent {
    constructor(flightService, formBuilder, touristService, snackBar) {
        this.flightService = flightService;
        this.formBuilder = formBuilder;
        this.touristService = touristService;
        this.snackBar = snackBar;
        this.flightColumns = ['departureDateTime', 'arrivalDateTime', 'numberOfSeats', 'ticketPrice', 'deleteButton'];
        this.touristColumns = ['firstName', 'lastName', 'gender', 'dayOfBirth', 'country', 'removeButton'];
        this.newFlight = new _model_flight__WEBPACK_IMPORTED_MODULE_2__["Flight"]();
        this.isFormHidden = true;
        this.pageSizeOptions = [1, 5, 10, 20, 50];
        this.pageIndex = 0;
        this.pageSize = 5;
        this.totalElements = 0;
        this.searchTerms = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
    }
    ngOnInit() {
        this.getFlights();
        this.newFlightForm = this.formBuilder.group({
            departureDateTime: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required
                ]],
            arrivalDateTime: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required
                ]],
            numberOfSeats: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required
                ]],
            ticketPrice: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required
                ]],
        });
        this.newFlightForm.valueChanges.subscribe(form => {
            this.newFlight.departureDateTime = form.departureDateTime;
            this.newFlight.arrivalDateTime = form.arrivalDateTime;
            this.newFlight.numberOfSeats = form.numberOfSeats;
            this.newFlight.ticketPrice = form.ticketPrice;
        });
        this.touristsSearch$ = this.searchTerms.pipe(
        // wait 300ms after each keystroke before considering the term
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(300), 
        // ignore new term if same as previous term
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["distinctUntilChanged"])(), 
        // switch to new search observable each time the term changes
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])((term) => this.touristService.search(term)));
    }
    search(term) {
        this.searchTerms.next(term);
    }
    searchFocusOut() {
        this.search('');
    }
    getFlights() {
        this.flightService.getAllFlightsByPage(this.pageIndex, this.pageSize).subscribe(response => {
            this.totalElements = response.totalElements;
            this.flights = response.content;
            this.dataSource = [...this.flights];
        });
    }
    addFlightClicked() {
        if (this.isFormHidden == true) {
            this.isFormHidden = false;
        }
        else {
            this.addFlight();
        }
    }
    addFlight() {
        this.flightService.addFlight(this.newFlight).subscribe(response => {
            if (this.pageIndex == Math.floor(Math.floor(this.totalElements / this.pageSize))) {
                this.flights.push(response);
                this.dataSource = [...this.flights];
            }
            this.totalElements++;
            this.isFormHidden = true;
            this.newFlightForm.reset();
            this.openSnackBar('New flight added');
        });
    }
    deleteFlight(flight) {
        this.flightService.deleteFlight(flight.id).subscribe(() => {
            this.getFlights();
            this.openSnackBar('Flight deleted');
        });
    }
    removeTouristFormFlight(tourist, flight) {
        this.flightService.removeTouristFromFlight(tourist.id, flight.id).subscribe(() => {
            const index = flight.tourists.indexOf(tourist);
            flight.tourists.splice(index, 1);
            this.flights.find(f => f == flight).tourists = [...flight.tourists];
            this.openSnackBar('Tourist removed from the flight');
        });
    }
    addTouristToFlight(tourist, flight) {
        if (flight.tourists.length == flight.numberOfSeats) {
            window.alert('All seats on this flight are already taken');
        }
        else if (this.includesTourist(tourist, flight)) {
            window.alert('Chosen tourist already is on this flight');
        }
        else {
            this.flightService.addTouristToFlight(tourist.id, flight.id).subscribe(() => {
                flight.tourists.push(tourist);
                this.flights.find(f => f == flight).tourists = [...flight.tourists];
                this.searchTerms.next('');
                this.openSnackBar('Tourist added to the flight');
            });
        }
    }
    includesTourist(tourist, flight) {
        const found = flight.tourists.find(t => t.id == tourist.id);
        return found != undefined;
    }
    openSnackBar(msg) {
        this.snackBar.open(msg, "", {
            duration: 2000,
        });
    }
    changePage(event) {
        this.pageIndex = event.pageIndex;
        this.pageSize = event.pageSize;
        this.getFlights();
    }
    get departureDateTime() {
        return this.newFlightForm.get('departureDateTime');
    }
    get arrivalDateTime() {
        return this.newFlightForm.get('arrivalDateTime');
    }
    get numberOfSeats() {
        return this.newFlightForm.get('numberOfSeats');
    }
    get ticketPrice() {
        return this.newFlightForm.get('ticketPrice');
    }
};
FlightComponent.ctorParameters = () => [
    { type: _service_flight_service__WEBPACK_IMPORTED_MODULE_3__["FlightService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _service_tourist_service__WEBPACK_IMPORTED_MODULE_8__["TouristService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"] }
];
FlightComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-flight',
        template: __webpack_require__(/*! raw-loader!./flight.component.html */ "./node_modules/raw-loader/index.js!./src/app/flight/flight.component.html"),
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('detailExpand', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ height: '0px', minHeight: '0' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ height: '*' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
            ]),
        ],
        styles: [__webpack_require__(/*! ./flight.component.css */ "./src/app/flight/flight.component.css")]
    })
], FlightComponent);



/***/ }),

/***/ "./src/app/main/main.component.css":
/*!*****************************************!*\
  !*** ./src/app/main/main.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n  position: fixed;\r\n  width: 100%;\r\n  height: 100%;\r\n  top: 0px;\r\n  left: 0px;\r\n  text-align: center;\r\n}\r\n\r\n.button {\r\n  width: 250px;\r\n  height: 50px;\r\n  margin-right: 8px;\r\n  font-size: medium;\r\n}\r\n\r\n.center {\r\n  margin: 0;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7RUFDWixRQUFRO0VBQ1IsU0FBUztFQUNULGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFFVCx3Q0FBZ0M7VUFBaEMsZ0NBQWdDO0FBQ2xDIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHRvcDogMHB4O1xyXG4gIGxlZnQ6IDBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gIHdpZHRoOiAyNTBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgZm9udC1zaXplOiBtZWRpdW07XHJcbn1cclxuXHJcbi5jZW50ZXIge1xyXG4gIG1hcmdpbjogMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MainComponent = class MainComponent {
    constructor() {
    }
    ngOnInit() {
    }
};
MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main',
        template: __webpack_require__(/*! raw-loader!./main.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/main.component.html"),
        styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/main/main.component.css")]
    })
], MainComponent);



/***/ }),

/***/ "./src/app/model/flight.ts":
/*!*********************************!*\
  !*** ./src/app/model/flight.ts ***!
  \*********************************/
/*! exports provided: Flight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Flight", function() { return Flight; });
class Flight {
}


/***/ }),

/***/ "./src/app/model/tourist.ts":
/*!**********************************!*\
  !*** ./src/app/model/tourist.ts ***!
  \**********************************/
/*! exports provided: Tourist */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tourist", function() { return Tourist; });
class Tourist {
}


/***/ }),

/***/ "./src/app/service/country.service.ts":
/*!********************************************!*\
  !*** ./src/app/service/country.service.ts ***!
  \********************************************/
/*! exports provided: CountryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryService", function() { return CountryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CountryService = class CountryService {
    constructor() {
        this.countries = [
            "Afghanistan",
            "Åland Islands",
            "Albania",
            "Algeria",
            "American Samoa",
            "Andorra",
            "Angola",
            "Anguilla",
            "Antarctica",
            "Antigua and Barbuda",
            "Argentina",
            "Armenia",
            "Aruba",
            "Australia",
            "Austria",
            "Azerbaijan",
            "Bahamas",
            "Bahrain",
            "Bangladesh",
            "Barbados",
            "Belarus",
            "Belgium",
            "Belize",
            "Benin",
            "Bermuda",
            "Bhutan",
            "Bolivia",
            "Bonaire, Sint Eustatius and Saba",
            "Bosnia and Herzegovina",
            "Botswana",
            "Bouvet Island",
            "Brazil",
            "British Indian Ocean Territory",
            "Brunei Darussalam",
            "Bulgaria",
            "Burkina Faso",
            "Burundi",
            "Cambodia",
            "Cameroon",
            "Canada",
            "Cape Verde",
            "Cayman Islands",
            "Central African Republic",
            "Chad",
            "Chile",
            "China",
            "Christmas Island",
            "Cocos (Keeling) Islands",
            "Colombia",
            "Comoros",
            "Congo",
            "Congo, The Democratic Republic of the",
            "Cook Islands",
            "Costa Rica",
            "Côte d'Ivoire",
            "Croatia",
            "Cuba",
            "Curaçao",
            "Cyprus",
            "Czech Republic",
            "Denmark",
            "Djibouti",
            "Dominica",
            "Dominican Republic",
            "Ecuador",
            "Egypt",
            "El Salvador",
            "Equatorial Guinea",
            "Eritrea",
            "Estonia",
            "Ethiopia",
            "Falkland Islands (Malvinas)",
            "Faroe Islands",
            "Fiji",
            "Finland",
            "France",
            "French Guiana",
            "French Polynesia",
            "French Southern Territories",
            "Gabon",
            "Gambia",
            "Georgia",
            "Germany",
            "Ghana",
            "Gibraltar",
            "Greece",
            "Greenland",
            "Grenada",
            "Guadeloupe",
            "Guam",
            "Guatemala",
            "Guernsey",
            "Guinea",
            "Guinea-Bissau",
            "Guyana",
            "Haiti",
            "Heard Island and McDonald Islands",
            "Holy See (Vatican City State)",
            "Honduras",
            "Hong Kong",
            "Hungary",
            "Iceland",
            "India",
            "Indonesia",
            "Iran, Islamic Republic of",
            "Iraq",
            "Ireland",
            "Isle of Man",
            "Israel",
            "Italy",
            "Jamaica",
            "Japan",
            "Jersey",
            "Jordan",
            "Kazakhstan",
            "Kenya",
            "Kiribati",
            "Korea, Democratic People's Republic of",
            "Korea, Republic of",
            "Kuwait",
            "Kyrgyzstan",
            "Lao People's Democratic Republic",
            "Latvia",
            "Lebanon",
            "Lesotho",
            "Liberia",
            "Libya",
            "Liechtenstein",
            "Lithuania",
            "Luxembourg",
            "Macao",
            "Macedonia, Republic Of",
            "Madagascar",
            "Malawi",
            "Malaysia",
            "Maldives",
            "Mali",
            "Malta",
            "Marshall Islands",
            "Martinique",
            "Mauritania",
            "Mauritius",
            "Mayotte",
            "Mexico",
            "Micronesia, Federated States of",
            "Moldova, Republic of",
            "Monaco",
            "Mongolia",
            "Montenegro",
            "Montserrat",
            "Morocco",
            "Mozambique",
            "Myanmar",
            "Namibia",
            "Nauru",
            "Nepal",
            "Netherlands",
            "New Caledonia",
            "New Zealand",
            "Nicaragua",
            "Niger",
            "Nigeria",
            "Niue",
            "Norfolk Island",
            "Northern Mariana Islands",
            "Norway",
            "Oman",
            "Pakistan",
            "Palau",
            "Palestinian Territory, Occupied",
            "Panama",
            "Papua New Guinea",
            "Paraguay",
            "Peru",
            "Philippines",
            "Pitcairn",
            "Poland",
            "Portugal",
            "Puerto Rico",
            "Qatar",
            "Reunion",
            "Romania",
            "Russian Federation",
            "Rwanda",
            "Saint Barthélemy",
            "Saint Helena, Ascension and Tristan da Cunha",
            "Saint Kitts and Nevis",
            "Saint Lucia",
            "Saint Martin (French Part)",
            "Saint Pierre and Miquelon",
            "Saint Vincent and the Grenadines",
            "Samoa",
            "San Marino",
            "Sao Tome and Principe",
            "Saudi Arabia",
            "Senegal",
            "Serbia",
            "Seychelles",
            "Sierra Leone",
            "Singapore",
            "Sint Maarten (Dutch Part)",
            "Slovakia",
            "Slovenia",
            "Solomon Islands",
            "Somalia",
            "South Africa",
            "South Georgia and the South Sandwich Islands",
            "South Sudan",
            "Spain",
            "Sri Lanka",
            "Sudan",
            "Suriname",
            "Svalbard and Jan Mayen",
            "Swaziland",
            "Sweden",
            "Switzerland",
            "Syrian Arab Republic",
            "Taiwan",
            "Tajikistan",
            "Tanzania, United Republic of",
            "Thailand",
            "Timor-Leste",
            "Togo",
            "Tokelau",
            "Tonga",
            "Trinidad and Tobago",
            "Tunisia",
            "Turkey",
            "Turkmenistan",
            "Turks and Caicos Islands",
            "Tuvalu",
            "Uganda",
            "Ukraine",
            "United Arab Emirates",
            "United Kingdom",
            "United States",
            "United States Minor Outlying Islands",
            "Uruguay",
            "Uzbekistan",
            "Vanuatu",
            "Venezuela",
            "Viet Nam",
            "Virgin Islands, British",
            "Virgin Islands, U.S.",
            "Wallis and Futuna",
            "Western Sahara",
            "Yemen",
            "Zambia",
            "Zimbabwe"
        ];
    }
};
CountryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CountryService);



/***/ }),

/***/ "./src/app/service/flight.service.ts":
/*!*******************************************!*\
  !*** ./src/app/service/flight.service.ts ***!
  \*******************************************/
/*! exports provided: FlightService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightService", function() { return FlightService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let FlightService = class FlightService {
    constructor(http) {
        this.http = http;
        this.flightUrl = "/api/flights";
    }
    getAllFlightsByPage(index, size) {
        const url = `${this.flightUrl}?page=${index}&size=${size}`;
        return this.http.get(url);
    }
    getAllFlights() {
        return this.http.get(`${this.flightUrl}/all`);
    }
    addFlight(flight) {
        return this.http.post(this.flightUrl, flight);
    }
    deleteFlight(id) {
        const url = `${this.flightUrl}/${id}`;
        return this.http.delete(url);
    }
    addTouristToFlight(touristId, flightId) {
        const url = `${this.flightUrl}/${touristId}/${flightId}`;
        return this.http.post(url, null);
    }
    removeTouristFromFlight(touristId, flightId) {
        const url = `${this.flightUrl}/${touristId}/${flightId}`;
        return this.http.delete(url);
    }
};
FlightService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
FlightService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], FlightService);



/***/ }),

/***/ "./src/app/service/tourist.service.ts":
/*!********************************************!*\
  !*** ./src/app/service/tourist.service.ts ***!
  \********************************************/
/*! exports provided: TouristService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TouristService", function() { return TouristService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let TouristService = class TouristService {
    constructor(http) {
        this.http = http;
        this.touristUrl = "/api/tourists";
    }
    getAllTouristsByPage(index, size) {
        const url = `${this.touristUrl}?page=${index}&size=${size}`;
        return this.http.get(url);
    }
    addTourist(tourist) {
        return this.http.post(this.touristUrl, tourist);
    }
    deleteTourist(id) {
        const url = `${this.touristUrl}/${id}`;
        return this.http.delete(url);
    }
    search(term) {
        if (term.length != 0) {
            const url = `${this.touristUrl}/search/${term}`;
            return this.http.get(url);
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]);
        }
    }
};
TouristService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
TouristService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TouristService);



/***/ }),

/***/ "./src/app/tourist/tourist.component.css":
/*!***********************************************!*\
  !*** ./src/app/tourist/tourist.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*table {*/\r\n/*  width: 100%;*/\r\n/*}*/\r\n/*.mat-form-field {*/\r\n/*  font-size: 14px;*/\r\n/*  width: 100%;*/\r\n/*}*/\r\n/*td, th {*/\r\n/*  width: 25%;*/\r\n/*}*/\r\n/*.example-element-detail {*/\r\n/*  overflow: hidden;*/\r\n/*  display: flex;*/\r\n/*}*/\r\n/*.example-element-row td {*/\r\n/*  border-bottom-width: 0;*/\r\n/*}*/\r\n/*.example-detail-row {*/\r\n/*  height: 0;*/\r\n/*}*/\r\n/*.example-container {*/\r\n/*  display: flex;*/\r\n/*  flex-direction: column;*/\r\n/*  max-height: 500px;*/\r\n/*  min-width: 300px;*/\r\n/*}*/\r\n/*.mat-table {*/\r\n/*  overflow: auto;*/\r\n/*  max-height: 500px;*/\r\n/*}*/\r\n/*.element-row {*/\r\n/*  position: relative;*/\r\n/*}*/\r\n/*.element-row:not(.expanded) {*/\r\n/*  cursor: pointer;*/\r\n/*}*/\r\n/*.element-row:not(.expanded):hover {*/\r\n/*  background: #f5f5f5;*/\r\n/*}*/\r\n/*.element-row.expanded {*/\r\n/*  border-bottom-color: transparent;*/\r\n/*}*/\r\n.example-element-detail {\r\n  overflow: hidden;\r\n  display: flex;\r\n}\r\n.example-element-row {\r\n  border-bottom-width: 0;\r\n}\r\ntr.example-detail-row {\r\n  height: 0;\r\n}\r\n.example-element-row:not(.example-expanded-row):hover {\r\n  background: #777;\r\n}\r\n.example-element-row:not(.example-expanded-row):active {\r\n  background: #efefef;\r\n}\r\n.example-element-row {\r\n  border-bottom-width: 0;\r\n}\r\ntable {\r\n  width: 100%;\r\n}\r\ntr.example-detail-row {\r\n  height: 0;\r\n}\r\ntr.example-element-row:not(.example-expanded-row):hover {\r\n  background: #777;\r\n}\r\ntr.example-element-row:not(.example-expanded-row):active {\r\n  background: #efefef;\r\n}\r\n.example-element-row td {\r\n  border-bottom-width: 0;\r\n}\r\n.element-detail {\r\n  overflow: hidden;\r\n  display: flex;\r\n}\r\n.button-paginator {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG91cmlzdC90b3VyaXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsVUFBVTtBQUNWLGlCQUFpQjtBQUNqQixJQUFJO0FBRUosb0JBQW9CO0FBQ3BCLHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakIsSUFBSTtBQUVKLFdBQVc7QUFDWCxnQkFBZ0I7QUFDaEIsSUFBSTtBQUNKLDRCQUE0QjtBQUM1QixzQkFBc0I7QUFDdEIsbUJBQW1CO0FBQ25CLElBQUk7QUFDSiw0QkFBNEI7QUFDNUIsNEJBQTRCO0FBQzVCLElBQUk7QUFDSix3QkFBd0I7QUFDeEIsZUFBZTtBQUNmLElBQUk7QUFHSix1QkFBdUI7QUFDdkIsbUJBQW1CO0FBQ25CLDRCQUE0QjtBQUM1Qix1QkFBdUI7QUFDdkIsc0JBQXNCO0FBQ3RCLElBQUk7QUFFSixlQUFlO0FBQ2Ysb0JBQW9CO0FBQ3BCLHVCQUF1QjtBQUN2QixJQUFJO0FBRUosaUJBQWlCO0FBQ2pCLHdCQUF3QjtBQUN4QixJQUFJO0FBRUosZ0NBQWdDO0FBQ2hDLHFCQUFxQjtBQUNyQixJQUFJO0FBRUosc0NBQXNDO0FBQ3RDLHlCQUF5QjtBQUN6QixJQUFJO0FBRUosMEJBQTBCO0FBQzFCLHNDQUFzQztBQUN0QyxJQUFJO0FBRUo7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtBQUNmO0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7QUFFQTtFQUNFLFNBQVM7QUFDWDtBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7QUFFQTtFQUNFLHNCQUFzQjtBQUN4QjtBQUdBO0VBQ0UsV0FBVztBQUNiO0FBRUE7RUFDRSxTQUFTO0FBQ1g7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0FBQ2Y7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvdG91cmlzdC90b3VyaXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKnRhYmxlIHsqL1xyXG4vKiAgd2lkdGg6IDEwMCU7Ki9cclxuLyp9Ki9cclxuXHJcbi8qLm1hdC1mb3JtLWZpZWxkIHsqL1xyXG4vKiAgZm9udC1zaXplOiAxNHB4OyovXHJcbi8qICB3aWR0aDogMTAwJTsqL1xyXG4vKn0qL1xyXG5cclxuLyp0ZCwgdGggeyovXHJcbi8qICB3aWR0aDogMjUlOyovXHJcbi8qfSovXHJcbi8qLmV4YW1wbGUtZWxlbWVudC1kZXRhaWwgeyovXHJcbi8qICBvdmVyZmxvdzogaGlkZGVuOyovXHJcbi8qICBkaXNwbGF5OiBmbGV4OyovXHJcbi8qfSovXHJcbi8qLmV4YW1wbGUtZWxlbWVudC1yb3cgdGQgeyovXHJcbi8qICBib3JkZXItYm90dG9tLXdpZHRoOiAwOyovXHJcbi8qfSovXHJcbi8qLmV4YW1wbGUtZGV0YWlsLXJvdyB7Ki9cclxuLyogIGhlaWdodDogMDsqL1xyXG4vKn0qL1xyXG5cclxuXHJcbi8qLmV4YW1wbGUtY29udGFpbmVyIHsqL1xyXG4vKiAgZGlzcGxheTogZmxleDsqL1xyXG4vKiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsqL1xyXG4vKiAgbWF4LWhlaWdodDogNTAwcHg7Ki9cclxuLyogIG1pbi13aWR0aDogMzAwcHg7Ki9cclxuLyp9Ki9cclxuXHJcbi8qLm1hdC10YWJsZSB7Ki9cclxuLyogIG92ZXJmbG93OiBhdXRvOyovXHJcbi8qICBtYXgtaGVpZ2h0OiA1MDBweDsqL1xyXG4vKn0qL1xyXG5cclxuLyouZWxlbWVudC1yb3cgeyovXHJcbi8qICBwb3NpdGlvbjogcmVsYXRpdmU7Ki9cclxuLyp9Ki9cclxuXHJcbi8qLmVsZW1lbnQtcm93Om5vdCguZXhwYW5kZWQpIHsqL1xyXG4vKiAgY3Vyc29yOiBwb2ludGVyOyovXHJcbi8qfSovXHJcblxyXG4vKi5lbGVtZW50LXJvdzpub3QoLmV4cGFuZGVkKTpob3ZlciB7Ki9cclxuLyogIGJhY2tncm91bmQ6ICNmNWY1ZjU7Ki9cclxuLyp9Ki9cclxuXHJcbi8qLmVsZW1lbnQtcm93LmV4cGFuZGVkIHsqL1xyXG4vKiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7Ki9cclxuLyp9Ki9cclxuXHJcbi5leGFtcGxlLWVsZW1lbnQtZGV0YWlsIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5leGFtcGxlLWVsZW1lbnQtcm93IHtcclxuICBib3JkZXItYm90dG9tLXdpZHRoOiAwO1xyXG59XHJcblxyXG50ci5leGFtcGxlLWRldGFpbC1yb3cge1xyXG4gIGhlaWdodDogMDtcclxufVxyXG5cclxuLmV4YW1wbGUtZWxlbWVudC1yb3c6bm90KC5leGFtcGxlLWV4cGFuZGVkLXJvdyk6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICM3Nzc7XHJcbn1cclxuXHJcbi5leGFtcGxlLWVsZW1lbnQtcm93Om5vdCguZXhhbXBsZS1leHBhbmRlZC1yb3cpOmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZDogI2VmZWZlZjtcclxufVxyXG5cclxuLmV4YW1wbGUtZWxlbWVudC1yb3cge1xyXG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XHJcbn1cclxuXHJcblxyXG50YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbnRyLmV4YW1wbGUtZGV0YWlsLXJvdyB7XHJcbiAgaGVpZ2h0OiAwO1xyXG59XHJcblxyXG50ci5leGFtcGxlLWVsZW1lbnQtcm93Om5vdCguZXhhbXBsZS1leHBhbmRlZC1yb3cpOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjNzc3O1xyXG59XHJcblxyXG50ci5leGFtcGxlLWVsZW1lbnQtcm93Om5vdCguZXhhbXBsZS1leHBhbmRlZC1yb3cpOmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZDogI2VmZWZlZjtcclxufVxyXG5cclxuLmV4YW1wbGUtZWxlbWVudC1yb3cgdGQge1xyXG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XHJcbn1cclxuXHJcbi5lbGVtZW50LWRldGFpbCB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uYnV0dG9uLXBhZ2luYXRvciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/tourist/tourist.component.ts":
/*!**********************************************!*\
  !*** ./src/app/tourist/tourist.component.ts ***!
  \**********************************************/
/*! exports provided: TouristComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TouristComponent", function() { return TouristComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_tourist_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/tourist.service */ "./src/app/service/tourist.service.ts");
/* harmony import */ var _model_tourist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/tourist */ "./src/app/model/tourist.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _service_country_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../service/country.service */ "./src/app/service/country.service.ts");
/* harmony import */ var _service_flight_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../service/flight.service */ "./src/app/service/flight.service.ts");









let TouristComponent = class TouristComponent {
    constructor(touristService, formBuilder, countryService, flightService, snackBar) {
        this.touristService = touristService;
        this.formBuilder = formBuilder;
        this.countryService = countryService;
        this.flightService = flightService;
        this.snackBar = snackBar;
        this.touristColumns = ['firstName', 'lastName', 'gender', 'dayOfBirth', 'country', 'deleteButton'];
        this.flightColumns = ['departureDateTime', 'arrivalDateTime', 'numberOfSeats', 'ticketPrice', 'deleteButton'];
        this.addFlightColumns = ['departureDateTime', 'arrivalDateTime', 'numberOfSeats', 'ticketPrice', 'addFlightButton'];
        this.isAllFlightsTableHidden = true;
        this.pageSizeOptions = [1, 5, 10, 20, 50];
        this.pageIndex = 0;
        this.pageSize = 5;
        this.totalElements = 0;
        this.isFormHidden = true;
        this.genders = ['MALE', 'FEMALE'];
        this.newTourist = new _model_tourist__WEBPACK_IMPORTED_MODULE_3__["Tourist"]();
    }
    ngOnInit() {
        this.getTourists();
        this.newTouristForm = this.formBuilder.group({
            firstName: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required
                ]],
            lastName: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required
                ]],
            dayOfBirth: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required
                ]],
            gender: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required
                ]],
            country: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required
                ]],
            remarks: ['', []],
        });
        this.newTouristForm.valueChanges.subscribe(form => {
            this.newTourist.firstName = form.firstName;
            this.newTourist.lastName = form.lastName;
            this.newTourist.dayOfBirth = form.dayOfBirth;
            this.newTourist.gender = form.gender;
            this.newTourist.country = form.country;
            this.newTourist.remarks = form.remarks;
        });
    }
    getTourists() {
        this.touristService.getAllTouristsByPage(this.pageIndex, this.pageSize).subscribe(response => {
            this.totalElements = response.totalElements;
            this.tourists = response.content;
            this.dataSource = [...this.tourists];
        });
    }
    changePage(event) {
        this.pageIndex = event.pageIndex;
        this.pageSize = event.pageSize;
        this.getTourists();
    }
    addTouristClicked() {
        if (this.isFormHidden == true) {
            this.isFormHidden = false;
        }
        else {
            this.addTourist();
        }
    }
    deleteTourist(tourist) {
        this.touristService.deleteTourist(tourist.id).subscribe(() => {
            this.getTourists();
            this.openSnackBar("Tourist deleted");
        });
    }
    addTourist() {
        this.touristService.addTourist(this.newTourist).subscribe(response => {
            if (this.pageIndex == Math.floor(Math.floor(this.totalElements / this.pageSize))) {
                this.tourists.push(response);
                this.dataSource = [...this.tourists];
            }
            this.totalElements++;
            this.isFormHidden = true;
            this.newTouristForm.reset();
            this.openSnackBar("New tourist added");
        });
    }
    addFlightButtonClicked() {
        if (this.isAllFlightsTableHidden == true) {
            this.isAllFlightsTableHidden = false;
            this.flightService.getAllFlights().subscribe(response => {
                this.allFlights = response;
                this.isAllFlightsTableHidden = false;
            });
        }
        else {
            this.isAllFlightsTableHidden = true;
        }
    }
    removeTouristFromFlight(tourist, flight) {
        this.flightService.removeTouristFromFlight(tourist.id, flight.id).subscribe(() => {
            const index = tourist.flights.indexOf(flight);
            tourist.flights.splice(index, 1);
            this.tourists.find(t => t == tourist).flights = [...tourist.flights];
            this.openSnackBar("Tourist removed from the flight");
        });
    }
    addTouristToFlight(tourist, flight) {
        if (flight.seatsTaken == flight.numberOfSeats) {
            window.alert('All seats on this flight are already taken');
        }
        else if (this.includesTourist(tourist, flight)) {
            window.alert('Tourist is already on this flight');
        }
        else {
            this.flightService.addTouristToFlight(tourist.id, flight.id).subscribe(() => {
                flight.seatsTaken = flight.seatsTaken + 1;
                tourist.flights.push(flight);
                this.tourists.find(t => t == tourist).flights = [...tourist.flights];
                this.isAllFlightsTableHidden = true;
                this.openSnackBar("Tourist added to the flight");
            });
        }
    }
    openSnackBar(msg) {
        this.snackBar.open(msg, "", {
            duration: 2000,
        });
    }
    includesTourist(tourist, flight) {
        const found = tourist.flights.find(f => f.id == flight.id);
        return found != undefined;
    }
    get firstName() {
        return this.newTouristForm.get('firstName');
    }
    get lastName() {
        return this.newTouristForm.get('lastName');
    }
    get gender() {
        return this.newTouristForm.get('gender');
    }
    get dayOfBirth() {
        return this.newTouristForm.get('dayOfBirth');
    }
    get country() {
        return this.newTouristForm.get('country');
    }
    get remarks() {
        return this.newTouristForm.get('remarks');
    }
};
TouristComponent.ctorParameters = () => [
    { type: _service_tourist_service__WEBPACK_IMPORTED_MODULE_2__["TouristService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: _service_country_service__WEBPACK_IMPORTED_MODULE_7__["CountryService"] },
    { type: _service_flight_service__WEBPACK_IMPORTED_MODULE_8__["FlightService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }
];
TouristComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tourist',
        template: __webpack_require__(/*! raw-loader!./tourist.component.html */ "./node_modules/raw-loader/index.js!./src/app/tourist/tourist.component.html"),
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('detailExpand', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ height: '0px', minHeight: '0' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ height: '*' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
            ]),
        ],
        styles: [__webpack_require__(/*! ./tourist.component.css */ "./src/app/tourist/tourist.component.css")]
    })
], TouristComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Programowanie\Projekty\treative\src\main\ui\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map