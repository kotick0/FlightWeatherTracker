import {AirportService} from "./chunk-CRQQ6BLH.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  MaxLengthValidator,
  NgControlStatus,
  NgModel
} from "./chunk-PWOYEK6O.js";
import {
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  ColComponent,
  CommonModule,
  FormCheckComponent,
  FormCheckInputDirective,
  FormControlDirective,
  NgForOf,
  NgIf,
  RowComponent,
  TableDirective
} from "./chunk-XWN6YHZC.js";
import {Component, setClassMetadata} from "./chunk-XOYR7VWH.js";
import {__objRest, __spreadProps, __spreadValues} from "./chunk-WDMUDEB6.js";

// src/app/views/settings/airports/airports.component.ts
function AirportsComponent_tr_29_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td")(12, "c-form-check");
    \u0275\u0275element(13, "input", 7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td")(15, "button", 8);
    \u0275\u0275listener("click", function AirportsComponent_tr_29_ng_container_3_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r1);
      const airport_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.startEdit(airport_r2));
    });
    \u0275\u0275text(16, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 9);
    \u0275\u0275listener("click", function AirportsComponent_tr_29_ng_container_3_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r1);
      const airport_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.deleteAirport(airport_r2.id));
    });
    \u0275\u0275text(18, "Delete");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const airport_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(airport_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(airport_r2.icao);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(airport_r2.city);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(airport_r2.latitude);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(airport_r2.longitude);
    \u0275\u0275advance(3);
    \u0275\u0275property("checked", airport_r2.isMilitary);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.editingId !== null);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.editingId !== null);
  }
}

function AirportsComponent_tr_29_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "td")(2, "input", 10);
    \u0275\u0275twoWayListener("ngModelChange", function AirportsComponent_tr_29_ng_container_4_Template_input_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.editDraft.name, $event) || (ctx_r2.editDraft.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keypress", function AirportsComponent_tr_29_ng_container_4_Template_input_keypress_2_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onKeyPressNoNumbers($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "td")(4, "input", 11);
    \u0275\u0275twoWayListener("ngModelChange", function AirportsComponent_tr_29_ng_container_4_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.editDraft.icao, $event) || (ctx_r2.editDraft.icao = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keypress", function AirportsComponent_tr_29_ng_container_4_Template_input_keypress_4_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onKeyPressNoNumbers($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "td")(6, "input", 10);
    \u0275\u0275twoWayListener("ngModelChange", function AirportsComponent_tr_29_ng_container_4_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.editDraft.city, $event) || (ctx_r2.editDraft.city = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keypress", function AirportsComponent_tr_29_ng_container_4_Template_input_keypress_6_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onKeyPressNoNumbers($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td")(8, "input", 10);
    \u0275\u0275twoWayListener("ngModelChange", function AirportsComponent_tr_29_ng_container_4_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.editDraft.latitude, $event) || (ctx_r2.editDraft.latitude = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keypress", function AirportsComponent_tr_29_ng_container_4_Template_input_keypress_8_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onKeyPress($event, ctx_r2.editDraft.latitude));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td")(10, "input", 10);
    \u0275\u0275twoWayListener("ngModelChange", function AirportsComponent_tr_29_ng_container_4_Template_input_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.editDraft.longitude, $event) || (ctx_r2.editDraft.longitude = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keypress", function AirportsComponent_tr_29_ng_container_4_Template_input_keypress_10_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onKeyPress($event, ctx_r2.editDraft.longitude));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td")(12, "c-form-check")(13, "input", 12);
    \u0275\u0275twoWayListener("ngModelChange", function AirportsComponent_tr_29_ng_container_4_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.editDraft.isMilitary, $event) || (ctx_r2.editDraft.isMilitary = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "td")(15, "button", 13);
    \u0275\u0275listener("click", function AirportsComponent_tr_29_ng_container_4_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.saveEdit());
    });
    \u0275\u0275text(16, "Save");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 14);
    \u0275\u0275listener("click", function AirportsComponent_tr_29_ng_container_4_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.cancelEdit());
    });
    \u0275\u0275text(18, "Cancel");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("is-invalid", ctx_r2.submitted && !ctx_r2.editDraft.name);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.editDraft.name);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("is-invalid", ctx_r2.submitted && (!ctx_r2.editDraft.icao || ctx_r2.editDraft.icao.length !== 4));
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.editDraft.icao);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("is-invalid", ctx_r2.submitted && !ctx_r2.editDraft.city);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.editDraft.city);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.editDraft.latitude);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.editDraft.longitude);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.editDraft.isMilitary);
  }
}

function AirportsComponent_tr_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, AirportsComponent_tr_29_ng_container_3_Template, 19, 8, "ng-container", 6)(4, AirportsComponent_tr_29_ng_container_4_Template, 19, 12, "ng-container", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const airport_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(airport_r2.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.editingId !== airport_r2.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.editingId === airport_r2.id && ctx_r2.editDraft);
  }
}

function AirportsComponent_tr_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 15);
    \u0275\u0275text(2, "No airports configured");
    \u0275\u0275elementEnd()();
  }
}

var NEW_AIRPORT_TEMP_ID = 0;
var AirportsComponent = class _AirportsComponent {
  constructor(airportService) {
    this.airportService = airportService;
    this.airports = [];
    this.editingId = null;
    this.editDraft = null;
    this.isAdding = false;
    this.submitted = false;
  }

  ngOnInit() {
    this.loadAirports();
  }

  loadAirports() {
    this.airportService.getAll().subscribe({
      next: (data) => {
        this.airports = this.sortById(data);
      },
      error: (err) => {
        console.error("Failed to load airports", err);
      }
    });
  }

  startEdit(airport) {
    this.submitted = false;
    this.editingId = airport.id;
    this.editDraft = __spreadValues({}, airport);
  }

  saveEdit() {
    this.submitted = true;
    if (!this.editDraft) {
      return;
    }
    if (!this.editDraft.name || !this.editDraft.icao || this.editDraft.icao.length !== 4 || !this.editDraft.city) {
      return;
    }
    const airportData = __spreadProps(__spreadValues({}, this.editDraft), {
      latitude: Number(this.editDraft.latitude),
      longitude: Number(this.editDraft.longitude)
    });
    if (this.isAdding) {
      const _a = airportData, {id: _id} = _a, createData = __objRest(_a, ["id"]);
      this.airportService.create(createData).subscribe({
        next: () => {
          this.loadAirports();
          this.resetEditState();
        },
        error: (err) => {
          console.error("Failed to create airport", err);
        }
      });
      return;
    }
    this.airportService.update(airportData.id, airportData).subscribe({
      next: () => {
        this.loadAirports();
        this.resetEditState();
      },
      error: (err) => {
        console.error("Failed to update airport", err);
      }
    });
  }

  sortById(airports) {
    return [...airports].sort((a, b) => a.id - b.id);
  }

  resetEditState() {
    this.editingId = null;
    this.editDraft = null;
    this.isAdding = false;
    this.submitted = false;
  }

  cancelEdit() {
    this.submitted = false;
    if (this.isAdding && this.editingId !== null) {
      this.airports = this.airports.filter((a) => a.id !== this.editingId);
    }
    this.resetEditState();
  }

  deleteAirport(id) {
    if (id === NEW_AIRPORT_TEMP_ID) {
      return;
    }
    this.airportService.delete(id).subscribe({
      next: () => {
        this.loadAirports();
      },
      error: (err) => {
        console.error("Failed to delete airport", err);
      }
    });
  }

  onKeyPressNoNumbers(event) {
    const charCode = event.charCode;
    if (charCode >= 48 && charCode <= 57) {
      event.preventDefault();
      return false;
    }
    return true;
  }

  onKeyPress(event, currentValue) {
    const charCode = event.charCode;
    const char = String.fromCharCode(charCode);
    const valueStr = String(currentValue ?? "");
    if (charCode >= 48 && charCode <= 57) {
      return true;
    }
    if (char === "-") {
      const selectionStart = event.target.selectionStart;
      if (selectionStart === 0 && !valueStr.includes("-")) {
        return true;
      }
      event.preventDefault();
      return false;
    }
    if (char === ".") {
      if (valueStr.includes(".")) {
        event.preventDefault();
        return false;
      }
      const selectionStart = event.target.selectionStart;
      if (selectionStart !== null && selectionStart > 0 && valueStr[selectionStart - 1] === ".") {
        event.preventDefault();
        return false;
      }
      return true;
    }
    event.preventDefault();
    return false;
  }

  addAirport() {
    if (this.editingId !== null) {
      return;
    }
    this.isAdding = true;
    const newAirport = {
      id: NEW_AIRPORT_TEMP_ID,
      name: "",
      icao: "",
      city: "",
      latitude: 0,
      longitude: 0,
      isMilitary: false
    };
    this.airports.unshift(newAirport);
    this.startEdit(newAirport);
  }

  static {
    this.\u0275fac = function AirportsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AirportsComponent)(\u0275\u0275directiveInject(AirportService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _AirportsComponent,
      selectors: [["app-airports"]],
      decls: 31,
      vars: 3,
      consts: [["xs", "12"], [1, "mb-4"], [1, "d-flex", "justify-content-between", "align-items-center"], ["cButton", "", "color", "primary", "size", "sm", 3, "click", "disabled"], ["cTable", "", "hover", "", "responsive", ""], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["cFormCheckInput", "", "type", "checkbox", "disabled", "", 2, "opacity", "1", "border-color", "#8a93a2", 3, "checked"], ["cButton", "", "color", "info", "variant", "ghost", "size", "sm", 3, "click", "disabled"], ["cButton", "", "color", "danger", "variant", "ghost", "size", "sm", 3, "click", "disabled"], ["cFormControl", "", "size", "sm", "type", "text", 3, "ngModelChange", "keypress", "ngModel"], ["cFormControl", "", "size", "sm", "type", "text", "maxlength", "4", 3, "ngModelChange", "keypress", "ngModel"], ["cFormCheckInput", "", "type", "checkbox", 2, "border-color", "#8a93a2", 3, "ngModelChange", "ngModel"], ["cButton", "", "color", "success", "variant", "ghost", "size", "sm", 3, "click"], ["cButton", "", "color", "secondary", "variant", "ghost", "size", "sm", 3, "click"], ["colspan", "8", 1, "text-center"]],
      template: function AirportsComponent_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275elementStart(0, "c-row")(1, "c-col", 0)(2, "c-card", 1)(3, "c-card-header", 2)(4, "strong");
          \u0275\u0275text(5, "Airports List");
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(6, "button", 3);
          \u0275\u0275listener("click", function AirportsComponent_Template_button_click_6_listener() {
            return ctx.addAirport();
          });
          \u0275\u0275text(7, "Add New Airport");
          \u0275\u0275elementEnd()();
          \u0275\u0275elementStart(8, "c-card-body")(9, "table", 4)(10, "thead")(11, "tr")(12, "th");
          \u0275\u0275text(13, "ID");
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(14, "th");
          \u0275\u0275text(15, "Name");
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(16, "th");
          \u0275\u0275text(17, "ICAO");
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(18, "th");
          \u0275\u0275text(19, "City");
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(20, "th");
          \u0275\u0275text(21, "Latitude");
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(22, "th");
          \u0275\u0275text(23, "Longitude");
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(24, "th");
          \u0275\u0275text(25, "Military");
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(26, "th");
          \u0275\u0275text(27, "Actions");
          \u0275\u0275elementEnd()()();
          \u0275\u0275elementStart(28, "tbody");
          \u0275\u0275template(29, AirportsComponent_tr_29_Template, 5, 3, "tr", 5)(30, AirportsComponent_tr_30_Template, 3, 0, "tr", 6);
          \u0275\u0275elementEnd()()()()()();
        }
        if (rf & 2) {
          \u0275\u0275advance(6);
          \u0275\u0275property("disabled", ctx.editingId !== null);
          \u0275\u0275advance(23);
          \u0275\u0275property("ngForOf", ctx.airports);
          \u0275\u0275advance();
          \u0275\u0275property("ngIf", ctx.airports.length === 0);
        }
      },
      dependencies: [
        CommonModule,
        NgForOf,
        NgIf,
        FormsModule,
        DefaultValueAccessor,
        CheckboxControlValueAccessor,
        NgControlStatus,
        MaxLengthValidator,
        NgModel,
        CardComponent,
        CardHeaderComponent,
        CardBodyComponent,
        RowComponent,
        ColComponent,
        TableDirective,
        ButtonDirective,
        FormControlDirective,
        FormCheckComponent,
        FormCheckInputDirective
      ],
      styles: ["\n.is-invalid[_ngcontent-%COMP%] {\n  background-image: none !important;\n  padding-right: 0.75rem !important;\n}\n/*# sourceMappingURL=airports.component.css.map */"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AirportsComponent, [{
    type: Component,
    args: [{
      selector: "app-airports",
      imports: [
        CommonModule,
        FormsModule,
        CardComponent,
        CardHeaderComponent,
        CardBodyComponent,
        RowComponent,
        ColComponent,
        TableDirective,
        ButtonDirective,
        FormControlDirective,
        FormCheckComponent,
        FormCheckInputDirective
      ],
      template: '<c-row>\n  <c-col xs="12">\n    <c-card class="mb-4">\n      <c-card-header class="d-flex justify-content-between align-items-center">\n        <strong>Airports List</strong>\n        <button cButton color="primary" size="sm" (click)="addAirport()" [disabled]="editingId !== null">Add New Airport</button>\n      </c-card-header>\n      <c-card-body>\n        <table cTable hover responsive>\n          <thead>\n            <tr>\n              <th>ID</th>\n              <th>Name</th>\n              <th>ICAO</th>\n              <th>City</th>\n              <th>Latitude</th>\n              <th>Longitude</th>\n              <th>Military</th>\n              <th>Actions</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor="let airport of airports">\n              <td>{{ airport.id }}</td>\n\n              <ng-container *ngIf="editingId !== airport.id">\n                <td>{{ airport.name }}</td>\n                <td>{{ airport.icao }}</td>\n                <td>{{ airport.city }}</td>\n                <td>{{ airport.latitude }}</td>\n                <td>{{ airport.longitude }}</td>\n                <td>\n                  <c-form-check>\n                    <input cFormCheckInput type="checkbox" [checked]="airport.isMilitary" disabled style="opacity: 1; border-color: #8a93a2;" />\n                  </c-form-check>\n                </td>\n                <td>\n                  <button cButton color="info" variant="ghost" size="sm" (click)="startEdit(airport)" [disabled]="editingId !== null">Edit</button>\n                  <button cButton color="danger" variant="ghost" size="sm" (click)="deleteAirport(airport.id)" [disabled]="editingId !== null">Delete</button>\n                </td>\n              </ng-container>\n\n              <ng-container *ngIf="editingId === airport.id && editDraft">\n                <td><input cFormControl size="sm" type="text" [(ngModel)]="editDraft.name" (keypress)="onKeyPressNoNumbers($event)" [class.is-invalid]="submitted && !editDraft.name" /></td>\n                <td><input cFormControl size="sm" type="text" [(ngModel)]="editDraft.icao" maxlength="4" (keypress)="onKeyPressNoNumbers($event)" [class.is-invalid]="submitted && (!editDraft.icao || editDraft.icao.length !== 4)" /></td>\n                <td><input cFormControl size="sm" type="text" [(ngModel)]="editDraft.city" (keypress)="onKeyPressNoNumbers($event)" [class.is-invalid]="submitted && !editDraft.city" /></td>\n                <td><input cFormControl size="sm" type="text" [(ngModel)]="editDraft.latitude" (keypress)="onKeyPress($event, editDraft.latitude)" /></td>\n                <td><input cFormControl size="sm" type="text" [(ngModel)]="editDraft.longitude" (keypress)="onKeyPress($event, editDraft.longitude)" /></td>\n                <td>\n                  <c-form-check>\n                    <input cFormCheckInput type="checkbox" [(ngModel)]="editDraft.isMilitary" style="border-color: #8a93a2;" />\n                  </c-form-check>\n                </td>\n                <td>\n                  <button cButton color="success" variant="ghost" size="sm" (click)="saveEdit()">Save</button>\n                  <button cButton color="secondary" variant="ghost" size="sm" (click)="cancelEdit()">Cancel</button>\n                </td>\n              </ng-container>\n            </tr>\n            <tr *ngIf="airports.length === 0">\n              <td colspan="8" class="text-center">No airports configured</td>\n            </tr>\n          </tbody>\n        </table>\n      </c-card-body>\n    </c-card>\n  </c-col>\n</c-row>\n',
      styles: ["/* src/app/views/settings/airports/airports.component.scss */\n.is-invalid {\n  background-image: none !important;\n  padding-right: 0.75rem !important;\n}\n/*# sourceMappingURL=airports.component.css.map */\n"]
    }]
  }], () => [{type: AirportService}], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AirportsComponent, {
    className: "AirportsComponent",
    filePath: "src/app/views/settings/airports/airports.component.ts",
    lineNumber: 29
  });
})();
export {
  AirportsComponent
};
//# sourceMappingURL=chunk-IG2BOGBQ.js.map
