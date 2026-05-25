import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel
} from "./chunk-PWOYEK6O.js";
import {
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  ColComponent,
  CommonModule,
  DropdownComponent,
  DropdownItemDirective,
  DropdownMenuDirective,
  DropdownToggleDirective,
  FormCheckComponent,
  FormCheckInputDirective,
  FormControlDirective,
  FormLabelDirective,
  ModalBodyComponent,
  ModalComponent,
  ModalFooterComponent,
  ModalHeaderComponent,
  ModalModule,
  ModalTitleDirective,
  NgForOf,
  NgIf,
  RowComponent
} from "./chunk-XWN6YHZC.js";
import {Component, HostListener, setClassMetadata} from "./chunk-XOYR7VWH.js";
import "./chunk-WDMUDEB6.js";

// src/app/views/settings/thresholds/thresholds.component.ts
var arrowFn0 = (ctx, view) => (o) => {
  \u0275\u0275restoreView(view);
  const ctx_r1 = \u0275\u0275nextContext();
  return \u0275\u0275resetView(o.phenomenon === ctx_r1.selectedPhenomenon);
};

function ThresholdsComponent_div_20_div_22_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 55);
    \u0275\u0275listener("click", function ThresholdsComponent_div_20_div_22_div_1_Template_div_click_0_listener($event) {
      const opt_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      ctx_r1.selectMetarCloudQuantity(opt_r4);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const opt_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(opt_r4);
  }
}

function ThresholdsComponent_div_20_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275template(1, ThresholdsComponent_div_20_div_22_div_1_Template, 3, 1, "div", 54);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.cloudQuantityOptions);
  }
}

function ThresholdsComponent_div_20_div_50_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 55);
    \u0275\u0275listener("click", function ThresholdsComponent_div_20_div_50_div_1_Template_div_click_0_listener($event) {
      const opt_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      ctx_r1.selectMetarWeatherIntensity(opt_r6);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const opt_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(opt_r6);
  }
}

function ThresholdsComponent_div_20_div_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275template(1, ThresholdsComponent_div_20_div_50_div_1_Template, 3, 1, "div", 54);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.weatherIntensityOptions);
  }
}

function ThresholdsComponent_div_20_span_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r7, " ");
  }
}

function ThresholdsComponent_div_20_div_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275text(1, "No items selected");
    \u0275\u0275elementEnd();
  }
}

function ThresholdsComponent_div_20_span_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r8, " ");
  }
}

function ThresholdsComponent_div_20_div_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275text(1, "No items selected");
    \u0275\u0275elementEnd();
  }
}

function ThresholdsComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "form", 24, 1);
    \u0275\u0275listener("mousemove", function ThresholdsComponent_div_20_Template_form_mousemove_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onThresholdFieldMouseMove($event));
    });
    \u0275\u0275elementStart(3, "c-row", 14)(4, "c-col", 25)(5, "label", 26);
    \u0275\u0275text(6, "Minimum Visibility (km)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 27);
    \u0275\u0275twoWayListener("ngModelChange", function ThresholdsComponent_div_20_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.metarThresholds.minVisibility, $event) || (ctx_r1.metarThresholds.minVisibility = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keypress", function ThresholdsComponent_div_20_Template_input_keypress_7_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onKeyPress($event, ctx_r1.metarThresholds.minVisibility, true));
    })("ngModelChange", function ThresholdsComponent_div_20_Template_input_ngModelChange_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveThresholds());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "c-col", 25)(9, "label", 28);
    \u0275\u0275text(10, "Minimum Cloud Height (ft)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 29);
    \u0275\u0275twoWayListener("ngModelChange", function ThresholdsComponent_div_20_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.metarThresholds.minCloudHeight, $event) || (ctx_r1.metarThresholds.minCloudHeight = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keypress", function ThresholdsComponent_div_20_Template_input_keypress_11_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onKeyPress($event, ctx_r1.metarThresholds.minCloudHeight, false));
    })("ngModelChange", function ThresholdsComponent_div_20_Template_input_ngModelChange_11_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveThresholds());
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "c-row", 14)(13, "c-col", 25)(14, "label", 30);
    \u0275\u0275text(15, "Maximum Cloud Quantity");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 31)(17, "div", 32);
    \u0275\u0275listener("click", function ThresholdsComponent_div_20_Template_div_click_17_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleMetarCloudQuantityDropdown());
    });
    \u0275\u0275elementStart(18, "span", 33);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 34);
    \u0275\u0275element(21, "i", 35);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(22, ThresholdsComponent_div_20_div_22_Template, 2, 1, "div", 36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "c-col", 25)(24, "label", 37);
    \u0275\u0275text(25, "Minimum Altimeter (hPa)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "input", 38);
    \u0275\u0275twoWayListener("ngModelChange", function ThresholdsComponent_div_20_Template_input_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.metarThresholds.minAltimeter, $event) || (ctx_r1.metarThresholds.minAltimeter = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keypress", function ThresholdsComponent_div_20_Template_input_keypress_26_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onKeyPress($event, ctx_r1.metarThresholds.minAltimeter, false));
    })("ngModelChange", function ThresholdsComponent_div_20_Template_input_ngModelChange_26_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveThresholds());
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "c-row", 14)(28, "c-col", 25)(29, "label", 39);
    \u0275\u0275text(30, "Minimum Temperature (\xB0C)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "input", 40);
    \u0275\u0275twoWayListener("ngModelChange", function ThresholdsComponent_div_20_Template_input_ngModelChange_31_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.metarThresholds.minTemperature, $event) || (ctx_r1.metarThresholds.minTemperature = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keypress", function ThresholdsComponent_div_20_Template_input_keypress_31_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onKeyPress($event, ctx_r1.metarThresholds.minTemperature, false, true));
    })("ngModelChange", function ThresholdsComponent_div_20_Template_input_ngModelChange_31_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveThresholds());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "c-col", 25)(33, "label", 41);
    \u0275\u0275text(34, "Maximum Wind Speed (kt)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "input", 42);
    \u0275\u0275twoWayListener("ngModelChange", function ThresholdsComponent_div_20_Template_input_ngModelChange_35_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.metarThresholds.maxWindSpeed, $event) || (ctx_r1.metarThresholds.maxWindSpeed = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keypress", function ThresholdsComponent_div_20_Template_input_keypress_35_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onKeyPress($event, ctx_r1.metarThresholds.maxWindSpeed, false));
    })("ngModelChange", function ThresholdsComponent_div_20_Template_input_ngModelChange_35_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveThresholds());
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "c-row", 14)(37, "c-col", 25)(38, "label", 43);
    \u0275\u0275text(39, "Maximum Gust Speed (kt)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "input", 44);
    \u0275\u0275twoWayListener("ngModelChange", function ThresholdsComponent_div_20_Template_input_ngModelChange_40_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.metarThresholds.maxGust, $event) || (ctx_r1.metarThresholds.maxGust = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keypress", function ThresholdsComponent_div_20_Template_input_keypress_40_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onKeyPress($event, ctx_r1.metarThresholds.maxGust, false));
    })("ngModelChange", function ThresholdsComponent_div_20_Template_input_ngModelChange_40_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveThresholds());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "c-col", 25)(42, "label", 45);
    \u0275\u0275text(43, "Maximum Weather Intensity");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 31)(45, "div", 32);
    \u0275\u0275listener("click", function ThresholdsComponent_div_20_Template_div_click_45_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleMetarWeatherIntensityDropdown());
    });
    \u0275\u0275elementStart(46, "span", 33);
    \u0275\u0275text(47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "span", 34);
    \u0275\u0275element(49, "i", 35);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(50, ThresholdsComponent_div_20_div_50_Template, 2, 1, "div", 36);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(51, "c-row", 14)(52, "c-col", 25)(53, "label", 46);
    \u0275\u0275text(54, "Cancelling Phenomena");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "div", 47);
    \u0275\u0275listener("click", function ThresholdsComponent_div_20_Template_div_click_55_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openPhenomenaModal("cancelling", "METAR"));
    });
    \u0275\u0275template(56, ThresholdsComponent_div_20_span_56_Template, 2, 1, "span", 16)(57, ThresholdsComponent_div_20_div_57_Template, 2, 0, "div", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "div", 48)(59, "span", 49);
    \u0275\u0275text(60, "Wind Shear");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "c-form-check", 50)(62, "input", 51);
    \u0275\u0275twoWayListener("ngModelChange", function ThresholdsComponent_div_20_Template_input_ngModelChange_62_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.metarThresholds.isWindShear, $event) || (ctx_r1.metarThresholds.isWindShear = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function ThresholdsComponent_div_20_Template_input_change_62_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveThresholds());
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(63, "c-col", 25)(64, "label", 52);
    \u0275\u0275text(65, "Operationally Significant Phenomena");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "div", 47);
    \u0275\u0275listener("click", function ThresholdsComponent_div_20_Template_div_click_66_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openPhenomenaModal("significant", "METAR"));
    });
    \u0275\u0275template(67, ThresholdsComponent_div_20_span_67_Template, 2, 1, "span", 16)(68, ThresholdsComponent_div_20_div_68_Template, 2, 0, "div", 17);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.metarThresholds.minVisibility);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.metarThresholds.minCloudHeight);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", ctx_r1.metarThresholds.maxCloudQuantity || "Select...", " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.metarCloudQuantityDropdownOpen);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.metarThresholds.minAltimeter);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.metarThresholds.minTemperature);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.metarThresholds.maxWindSpeed);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.metarThresholds.maxGust);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx_r1.metarThresholds.maxWeatherIntensity || "Select...", " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.metarWeatherIntensityDropdownOpen);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", ctx_r1.metarThresholds.weatherPhenomenon.cancelling);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.metarThresholds.weatherPhenomenon.cancelling.length === 0);
    \u0275\u0275advance(4);
    \u0275\u0275property("inline", true);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.metarThresholds.isWindShear);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r1.metarThresholds.weatherPhenomenon.operationallySignificant);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.metarThresholds.weatherPhenomenon.operationallySignificant.length === 0);
  }
}

function ThresholdsComponent_span_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 58);
    \u0275\u0275listener("click", function ThresholdsComponent_span_30_Template_button_click_2_listener() {
      const item_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.removePhenomenon(item_r10));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r10 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r10, " ");
  }
}

function ThresholdsComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275text(1, "No items selected");
    \u0275\u0275elementEnd();
  }
}

function ThresholdsComponent_ng_container_37_ng_container_1_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 62);
    \u0275\u0275listener("click", function ThresholdsComponent_ng_container_37_ng_container_1_button_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const opt_r12 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectPhenomenon(opt_r12.phenomenon));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r12 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r1.selectedPhenomenon === opt_r12.phenomenon);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", opt_r12.phenomenon, " ");
  }
}

function ThresholdsComponent_ng_container_37_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ThresholdsComponent_ng_container_37_ng_container_1_button_1_Template, 2, 3, "button", 61);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const opt_r12 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !opt_r12.isStandalone);
  }
}

function ThresholdsComponent_ng_container_37_ng_container_4_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 62);
    \u0275\u0275listener("click", function ThresholdsComponent_ng_container_37_ng_container_4_button_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const opt_r14 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectPhenomenon(opt_r14.phenomenon));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r14 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r1.selectedPhenomenon === opt_r14.phenomenon);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", opt_r14.phenomenon, " ");
  }
}

function ThresholdsComponent_ng_container_37_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ThresholdsComponent_ng_container_37_ng_container_4_button_1_Template, 2, 3, "button", 61);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const opt_r14 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", opt_r14.isStandalone);
  }
}

function ThresholdsComponent_ng_container_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ThresholdsComponent_ng_container_37_ng_container_1_Template, 2, 1, "ng-container", 59);
    \u0275\u0275elementStart(2, "h6", 60);
    \u0275\u0275text(3, "Standalone");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, ThresholdsComponent_ng_container_37_ng_container_4_Template, 2, 1, "ng-container", 59);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.phenomenaOptions);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.phenomenaOptions);
  }
}

function ThresholdsComponent_ng_container_38_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 62);
    \u0275\u0275listener("click", function ThresholdsComponent_ng_container_38_button_1_Template_button_click_0_listener() {
      const opt_r16 = \u0275\u0275restoreView(_r15).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectPhenomenon(opt_r16.phenomenon));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r16 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r1.selectedPhenomenon === opt_r16.phenomenon);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", opt_r16.phenomenon, " ");
  }
}

function ThresholdsComponent_ng_container_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ThresholdsComponent_ng_container_38_button_1_Template, 2, 3, "button", 63);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.sigmetWmoOptions);
  }
}

function ThresholdsComponent_ng_container_39_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 62);
    \u0275\u0275listener("click", function ThresholdsComponent_ng_container_39_button_1_Template_button_click_0_listener() {
      const opt_r18 = \u0275\u0275restoreView(_r17).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectPhenomenon(opt_r18.phenomenon));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r18 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r1.selectedPhenomenon === opt_r18.phenomenon);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", opt_r18.phenomenon, " ");
  }
}

function ThresholdsComponent_ng_container_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ThresholdsComponent_ng_container_39_button_1_Template, 2, 3, "button", 63);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.sigmetPhenomOptions);
  }
}

function ThresholdsComponent_div_43_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 62);
    \u0275\u0275listener("click", function ThresholdsComponent_div_43_button_2_Template_button_click_0_listener() {
      const desc_r20 = \u0275\u0275restoreView(_r19).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addCombination(desc_r20));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const desc_r20 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", desc_r20 === "(none)" || desc_r20 === ctx_r1.selectedPhenomenon ? ctx_r1.selectedPhenomenon : desc_r20 + "_" + ctx_r1.selectedPhenomenon, " ");
  }
}

function ThresholdsComponent_div_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 64);
    \u0275\u0275template(2, ThresholdsComponent_div_43_button_2_Template, 2, 1, "button", 65);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", (tmp_2_0 = (ctx_r1.currentModalThresholdType === "METAR" || ctx_r1.currentModalThresholdType === "TAF" ? ctx_r1.phenomenaOptions : ctx_r1.currentModalThresholdType === "SIGMET_WMO" ? ctx_r1.sigmetWmoOptions : ctx_r1.sigmetPhenomOptions).find(\u0275\u0275arrowFunction(1, arrowFn0, ctx))) == null ? null : tmp_2_0.descriptives);
  }
}

function ThresholdsComponent_ng_template_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66);
    \u0275\u0275text(1, "Please select a phenomenon first");
    \u0275\u0275elementEnd();
  }
}

function ThresholdsComponent_div_49_div_22_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 55);
    \u0275\u0275listener("click", function ThresholdsComponent_div_49_div_22_div_1_Template_div_click_0_listener($event) {
      const opt_r23 = \u0275\u0275restoreView(_r22).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      ctx_r1.selectTafCloudQuantity(opt_r23);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const opt_r23 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(opt_r23);
  }
}

function ThresholdsComponent_div_49_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275template(1, ThresholdsComponent_div_49_div_22_div_1_Template, 3, 1, "div", 54);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.cloudQuantityOptions);
  }
}

function ThresholdsComponent_div_49_div_32_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 55);
    \u0275\u0275listener("click", function ThresholdsComponent_div_49_div_32_div_1_Template_div_click_0_listener($event) {
      const opt_r25 = \u0275\u0275restoreView(_r24).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      ctx_r1.selectTafTempoCloudType(opt_r25);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const opt_r25 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(opt_r25);
  }
}

function ThresholdsComponent_div_49_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275template(1, ThresholdsComponent_div_49_div_32_div_1_Template, 3, 1, "div", 54);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.tempoCloudTypeOptions);
  }
}

function ThresholdsComponent_div_49_span_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r26 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r26, " ");
  }
}

function ThresholdsComponent_div_49_div_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275text(1, " No items selected");
    \u0275\u0275elementEnd();
  }
}

function ThresholdsComponent_div_49_span_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r27 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r27, " ");
  }
}

function ThresholdsComponent_div_49_div_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275text(1, "No items selected");
    \u0275\u0275elementEnd();
  }
}

function ThresholdsComponent_div_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "form", null, 2)(3, "c-row", 14)(4, "c-col", 25)(5, "label", 67);
    \u0275\u0275text(6, "Minimum Visibility (km)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 68);
    \u0275\u0275twoWayListener("ngModelChange", function ThresholdsComponent_div_49_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.tafThresholds.minVisibility, $event) || (ctx_r1.tafThresholds.minVisibility = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keypress", function ThresholdsComponent_div_49_Template_input_keypress_7_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onKeyPress($event, ctx_r1.tafThresholds.minVisibility, true));
    })("ngModelChange", function ThresholdsComponent_div_49_Template_input_ngModelChange_7_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveThresholds());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "c-col", 25)(9, "label", 69);
    \u0275\u0275text(10, "Minimum Cloud Height (ft)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 70);
    \u0275\u0275twoWayListener("ngModelChange", function ThresholdsComponent_div_49_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.tafThresholds.minCloudHeight, $event) || (ctx_r1.tafThresholds.minCloudHeight = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keypress", function ThresholdsComponent_div_49_Template_input_keypress_11_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onKeyPress($event, ctx_r1.tafThresholds.minCloudHeight, false));
    })("ngModelChange", function ThresholdsComponent_div_49_Template_input_ngModelChange_11_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveThresholds());
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "c-row", 14)(13, "c-col", 25)(14, "label", 71);
    \u0275\u0275text(15, "Maximum Cloud Quantity");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 31)(17, "div", 32);
    \u0275\u0275listener("click", function ThresholdsComponent_div_49_Template_div_click_17_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleTafCloudQuantityDropdown());
    });
    \u0275\u0275elementStart(18, "span", 33);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 34);
    \u0275\u0275element(21, "i", 35);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(22, ThresholdsComponent_div_49_div_22_Template, 2, 1, "div", 36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "c-col", 25)(24, "label", 72);
    \u0275\u0275text(25, "Cancelling TEMPO Cloud Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 31)(27, "div", 32);
    \u0275\u0275listener("click", function ThresholdsComponent_div_49_Template_div_click_27_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleTafTempoCloudTypeDropdown());
    });
    \u0275\u0275elementStart(28, "span", 33);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span", 34);
    \u0275\u0275element(31, "i", 35);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(32, ThresholdsComponent_div_49_div_32_Template, 2, 1, "div", 36);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "c-row", 14)(34, "c-col", 25)(35, "label", 73);
    \u0275\u0275text(36, "Maximum Wind Speed (kt)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "input", 74);
    \u0275\u0275twoWayListener("ngModelChange", function ThresholdsComponent_div_49_Template_input_ngModelChange_37_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.tafThresholds.maxWindSpeed, $event) || (ctx_r1.tafThresholds.maxWindSpeed = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keypress", function ThresholdsComponent_div_49_Template_input_keypress_37_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onKeyPress($event, ctx_r1.tafThresholds.maxWindSpeed, false));
    })("ngModelChange", function ThresholdsComponent_div_49_Template_input_ngModelChange_37_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveThresholds());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "c-col", 25)(39, "label", 75);
    \u0275\u0275text(40, "Maximum Gust Speed (kt)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "input", 76);
    \u0275\u0275twoWayListener("ngModelChange", function ThresholdsComponent_div_49_Template_input_ngModelChange_41_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.tafThresholds.maxGust, $event) || (ctx_r1.tafThresholds.maxGust = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keypress", function ThresholdsComponent_div_49_Template_input_keypress_41_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onKeyPress($event, ctx_r1.tafThresholds.maxGust, false));
    })("ngModelChange", function ThresholdsComponent_div_49_Template_input_ngModelChange_41_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveThresholds());
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(42, "c-row", 14)(43, "c-col", 25)(44, "label", 77);
    \u0275\u0275text(45, "Minimum TEMPO Probability (%)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "input", 78);
    \u0275\u0275twoWayListener("ngModelChange", function ThresholdsComponent_div_49_Template_input_ngModelChange_46_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.tafThresholds.minTempoProbability, $event) || (ctx_r1.tafThresholds.minTempoProbability = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keypress", function ThresholdsComponent_div_49_Template_input_keypress_46_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onKeyPress($event, ctx_r1.tafThresholds.minTempoProbability, false));
    })("ngModelChange", function ThresholdsComponent_div_49_Template_input_ngModelChange_46_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveThresholds());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "c-col", 25)(48, "label", 79);
    \u0275\u0275text(49, "Operationally Significant Phenomena");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "div", 47);
    \u0275\u0275listener("click", function ThresholdsComponent_div_49_Template_div_click_50_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openPhenomenaModal("significant", "TAF"));
    });
    \u0275\u0275template(51, ThresholdsComponent_div_49_span_51_Template, 2, 1, "span", 16)(52, ThresholdsComponent_div_49_div_52_Template, 2, 0, "div", 17);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(53, "c-row", 14)(54, "c-col", 25)(55, "label", 80);
    \u0275\u0275text(56, "Cancelling Phenomena");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "div", 47);
    \u0275\u0275listener("click", function ThresholdsComponent_div_49_Template_div_click_57_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openPhenomenaModal("cancelling", "TAF"));
    });
    \u0275\u0275template(58, ThresholdsComponent_div_49_span_58_Template, 2, 1, "span", 16)(59, ThresholdsComponent_div_49_div_59_Template, 2, 0, "div", 17);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.tafThresholds.minVisibility);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.tafThresholds.minCloudHeight);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", ctx_r1.tafThresholds.maxCloudQuantity || "Select...", " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.tafCloudQuantityDropdownOpen);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx_r1.tafThresholds.cancellingTempoCloudType || "Select...", " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.tafTempoCloudTypeDropdownOpen);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.tafThresholds.maxWindSpeed);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.tafThresholds.maxGust);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.tafThresholds.minTempoProbability);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r1.tafThresholds.weatherConditions.operationallySignificant);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.tafThresholds.weatherConditions.operationallySignificant.length === 0);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", ctx_r1.tafThresholds.weatherConditions.cancelling);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.tafThresholds.weatherConditions.cancelling.length === 0);
  }
}

function ThresholdsComponent_div_50_div_22_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 55);
    \u0275\u0275listener("click", function ThresholdsComponent_div_50_div_22_div_1_Template_div_click_0_listener($event) {
      const opt_r30 = \u0275\u0275restoreView(_r29).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      ctx_r1.selectIntensity(opt_r30);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const opt_r30 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(opt_r30);
  }
}

function ThresholdsComponent_div_50_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275template(1, ThresholdsComponent_div_50_div_22_div_1_Template, 3, 1, "div", 54);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.intensityOptions);
  }
}

function ThresholdsComponent_div_50_div_32_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 91);
    \u0275\u0275listener("click", function ThresholdsComponent_div_50_div_32_div_1_Template_div_click_0_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "c-form-check", 92)(4, "input", 93);
    \u0275\u0275listener("change", function ThresholdsComponent_div_50_div_32_div_1_Template_input_change_4_listener() {
      const opt_r32 = \u0275\u0275restoreView(_r31).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleWmoSignificant(opt_r32.phenomenon));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const opt_r32 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(opt_r32.phenomenon);
    \u0275\u0275advance();
    \u0275\u0275property("inline", true);
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r1.sigmetThresholds.WMO.operationallySignificant.includes(opt_r32.phenomenon));
  }
}

function ThresholdsComponent_div_50_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275template(1, ThresholdsComponent_div_50_div_32_div_1_Template, 5, 3, "div", 90);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.sigmetWmoOptions);
  }
}

function ThresholdsComponent_div_50_div_43_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 91);
    \u0275\u0275listener("click", function ThresholdsComponent_div_50_div_43_div_1_Template_div_click_0_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "c-form-check", 92)(4, "input", 93);
    \u0275\u0275listener("change", function ThresholdsComponent_div_50_div_43_div_1_Template_input_change_4_listener() {
      const opt_r34 = \u0275\u0275restoreView(_r33).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleWmoCancelling(opt_r34.phenomenon));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const opt_r34 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(opt_r34.phenomenon);
    \u0275\u0275advance();
    \u0275\u0275property("inline", true);
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r1.sigmetThresholds.WMO.cancelling.includes(opt_r34.phenomenon));
  }
}

function ThresholdsComponent_div_50_div_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275template(1, ThresholdsComponent_div_50_div_43_div_1_Template, 5, 3, "div", 90);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.sigmetWmoOptions);
  }
}

function ThresholdsComponent_div_50_div_53_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 91);
    \u0275\u0275listener("click", function ThresholdsComponent_div_50_div_53_div_1_Template_div_click_0_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "c-form-check", 92)(4, "input", 93);
    \u0275\u0275listener("change", function ThresholdsComponent_div_50_div_53_div_1_Template_input_change_4_listener() {
      const opt_r36 = \u0275\u0275restoreView(_r35).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.togglePhenomSignificant(opt_r36.phenomenon));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const opt_r36 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(opt_r36.phenomenon);
    \u0275\u0275advance();
    \u0275\u0275property("inline", true);
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r1.sigmetThresholds.phenomenon.operationallySignificant.includes(opt_r36.phenomenon));
  }
}

function ThresholdsComponent_div_50_div_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275template(1, ThresholdsComponent_div_50_div_53_div_1_Template, 5, 3, "div", 90);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.sigmetPhenomOptions);
  }
}

function ThresholdsComponent_div_50_div_64_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 91);
    \u0275\u0275listener("click", function ThresholdsComponent_div_50_div_64_div_1_Template_div_click_0_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "c-form-check", 92)(4, "input", 93);
    \u0275\u0275listener("change", function ThresholdsComponent_div_50_div_64_div_1_Template_input_change_4_listener() {
      const opt_r38 = \u0275\u0275restoreView(_r37).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.togglePhenomCancelling(opt_r38.phenomenon));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const opt_r38 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(opt_r38.phenomenon);
    \u0275\u0275advance();
    \u0275\u0275property("inline", true);
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r1.sigmetThresholds.phenomenon.cancelling.includes(opt_r38.phenomenon));
  }
}

function ThresholdsComponent_div_50_div_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275template(1, ThresholdsComponent_div_50_div_64_div_1_Template, 5, 3, "div", 90);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.sigmetPhenomOptions);
  }
}

function ThresholdsComponent_div_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "form", null, 3)(3, "c-row", 14)(4, "c-col", 25)(5, "label", 81);
    \u0275\u0275text(6, "Minimum Flight Level");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 82);
    \u0275\u0275twoWayListener("ngModelChange", function ThresholdsComponent_div_50_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r28);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.sigmetThresholds.minFlightLevel, $event) || (ctx_r1.sigmetThresholds.minFlightLevel = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keypress", function ThresholdsComponent_div_50_Template_input_keypress_7_listener($event) {
      \u0275\u0275restoreView(_r28);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onKeyPress($event, ctx_r1.sigmetThresholds.minFlightLevel, false));
    })("ngModelChange", function ThresholdsComponent_div_50_Template_input_ngModelChange_7_listener() {
      \u0275\u0275restoreView(_r28);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveThresholds());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "c-col", 25)(9, "label", 83);
    \u0275\u0275text(10, "Maximum Flight Level");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 84);
    \u0275\u0275twoWayListener("ngModelChange", function ThresholdsComponent_div_50_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r28);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.sigmetThresholds.maxFlightLevel, $event) || (ctx_r1.sigmetThresholds.maxFlightLevel = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keypress", function ThresholdsComponent_div_50_Template_input_keypress_11_listener($event) {
      \u0275\u0275restoreView(_r28);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onKeyPress($event, ctx_r1.sigmetThresholds.maxFlightLevel, false));
    })("ngModelChange", function ThresholdsComponent_div_50_Template_input_ngModelChange_11_listener() {
      \u0275\u0275restoreView(_r28);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveThresholds());
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "c-row", 14)(13, "c-col", 25)(14, "label", 85);
    \u0275\u0275text(15, "Maximum Intensity");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 31)(17, "div", 32);
    \u0275\u0275listener("click", function ThresholdsComponent_div_50_Template_div_click_17_listener() {
      \u0275\u0275restoreView(_r28);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleIntensityDropdown());
    });
    \u0275\u0275elementStart(18, "span", 33);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 34);
    \u0275\u0275element(21, "i", 35);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(22, ThresholdsComponent_div_50_div_22_Template, 2, 1, "div", 36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "c-col", 25)(24, "label", 86);
    \u0275\u0275text(25, "WMO Operationally Significant");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 31)(27, "div", 32);
    \u0275\u0275listener("click", function ThresholdsComponent_div_50_Template_div_click_27_listener() {
      \u0275\u0275restoreView(_r28);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleSigmetDropdown("wmoSignificant"));
    });
    \u0275\u0275elementStart(28, "span", 33);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span", 34);
    \u0275\u0275element(31, "i", 35);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(32, ThresholdsComponent_div_50_div_32_Template, 2, 1, "div", 36);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "c-row", 14)(34, "c-col", 25)(35, "label", 87);
    \u0275\u0275text(36, "WMO Cancelling");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 31)(38, "div", 32);
    \u0275\u0275listener("click", function ThresholdsComponent_div_50_Template_div_click_38_listener() {
      \u0275\u0275restoreView(_r28);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleSigmetDropdown("wmoCancelling"));
    });
    \u0275\u0275elementStart(39, "span", 33);
    \u0275\u0275text(40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "span", 34);
    \u0275\u0275element(42, "i", 35);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(43, ThresholdsComponent_div_50_div_43_Template, 2, 1, "div", 36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "c-col", 25)(45, "label", 88);
    \u0275\u0275text(46, "Phenomenon Operationally Significant");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "div", 31)(48, "div", 32);
    \u0275\u0275listener("click", function ThresholdsComponent_div_50_Template_div_click_48_listener() {
      \u0275\u0275restoreView(_r28);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleSigmetDropdown("phenomSignificant"));
    });
    \u0275\u0275elementStart(49, "span", 33);
    \u0275\u0275text(50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "span", 34);
    \u0275\u0275element(52, "i", 35);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(53, ThresholdsComponent_div_50_div_53_Template, 2, 1, "div", 36);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(54, "c-row", 14)(55, "c-col", 25)(56, "label", 89);
    \u0275\u0275text(57, "Phenomenon Cancelling");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "div", 31)(59, "div", 32);
    \u0275\u0275listener("click", function ThresholdsComponent_div_50_Template_div_click_59_listener() {
      \u0275\u0275restoreView(_r28);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleSigmetDropdown("phenomCancelling"));
    });
    \u0275\u0275elementStart(60, "span", 33);
    \u0275\u0275text(61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "span", 34);
    \u0275\u0275element(63, "i", 35);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(64, ThresholdsComponent_div_50_div_64_Template, 2, 1, "div", 36);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.sigmetThresholds.minFlightLevel);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.sigmetThresholds.maxFlightLevel);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", ctx_r1.sigmetThresholds.maxIntensity || "Select...", " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.intensityDropdownOpen);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx_r1.sigmetThresholds.WMO.operationallySignificant.length ? ctx_r1.sigmetThresholds.WMO.operationallySignificant.join(", ") : "Select...", " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.wmoSignificantDropdownOpen);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", ctx_r1.sigmetThresholds.WMO.cancelling.length ? ctx_r1.sigmetThresholds.WMO.cancelling.join(", ") : "Select...", " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.wmoCancellingDropdownOpen);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx_r1.sigmetThresholds.phenomenon.operationallySignificant.length ? ctx_r1.sigmetThresholds.phenomenon.operationallySignificant.join(", ") : "Select...", " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.phenomSignificantDropdownOpen);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", ctx_r1.sigmetThresholds.phenomenon.cancelling.length ? ctx_r1.sigmetThresholds.phenomenon.cancelling.join(", ") : "Select...", " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.phenomCancellingDropdownOpen);
  }
}

var ThresholdsComponent = class _ThresholdsComponent {
  constructor() {
    this.selectedThresholdType = "METAR";
    this.metarThresholds = {
      minVisibility: 0.8,
      minCloudHeight: 200,
      maxCloudQuantity: "BKN",
      isWindShear: true,
      minTemperature: 4,
      minAltimeter: 950,
      maxWindSpeed: 40,
      maxGust: 45,
      weatherPhenomenon: {
        cancelling: ["THUNDERSTORM", "FREEZING_RAIN", "FREEZING_DRIZZLE", "FUNNEL_CLOUD", "SQUALL", "HAIL"],
        operationallySignificant: ["SNOW", "FOG", "RAIN_SNOW", "BLOWING_SNOW"]
      },
      maxWeatherIntensity: "HEAVY"
    };
    this.tafThresholds = {
      minVisibility: 0.8,
      minCloudHeight: 200,
      maxCloudQuantity: "BKN",
      cancellingTempoCloudType: "CB",
      maxWindSpeed: 40,
      maxGust: 45,
      minTempoProbability: 40,
      weatherConditions: {
        cancelling: [
          "THUNDERSTORM",
          "FREEZING_RAIN",
          "FREEZING_DRIZZLE",
          "FUNNEL_CLOUD",
          "SQUALL",
          "HAIL"
        ],
        operationallySignificant: [
          "SNOW",
          "FOG",
          "RAIN_SNOW",
          "BLOWING_SNOW"
        ]
      }
    };
    this.sigmetThresholds = {
      WMO: {
        cancelling: ["WV", "WC"],
        operationallySignificant: ["WS"]
      },
      phenomenon: {
        cancelling: ["VA", "TC", "RDOACT_CLD"],
        operationallySignificant: ["MTW", "TURB", "ICE", "TS", "DS", "SS"]
      },
      maxIntensity: "INTSF",
      minFlightLevel: 30,
      maxFlightLevel: 450
    };
    this.phenomenaOptions = [
      {phenomenon: "DRIZZLE", descriptives: ["DRIZZLE", "FREEZING"]},
      {phenomenon: "RAIN", descriptives: ["RAIN", "FREEZING", "SHOWERS", "THUNDERSTORM"]},
      {phenomenon: "SNOW", descriptives: ["SNOW", "DRIFTING", "BLOWING", "SHOWERS", "THUNDERSTORM"]},
      {phenomenon: "SNOW_GRAINS", descriptives: ["SNOW_GRAINS"]},
      {phenomenon: "ICE_CRYSTALS", descriptives: ["ICE_CRYSTALS"]},
      {phenomenon: "ICE_PELLETS", descriptives: ["ICE_PELLETS", "SHOWERS", "THUNDERSTORM"]},
      {phenomenon: "HAIL", descriptives: ["HAIL", "SHOWERS", "THUNDERSTORM"]},
      {phenomenon: "SMALL_HAIL", descriptives: ["SMALL_HAIL", "SHOWERS", "THUNDERSTORM"]},
      {phenomenon: "UNKNOWN_PRECIP", descriptives: ["UNKNOWN_PRECIP", "FREEZING"]},
      {phenomenon: "FOG", descriptives: ["FOG", "SHALLOW", "PATCHES", "PARTIAL", "FREEZING"]},
      {phenomenon: "DUST", descriptives: ["DUST", "DRIFTING", "BLOWING"]},
      {phenomenon: "SAND", descriptives: ["SAND", "DRIFTING", "BLOWING"]},
      {phenomenon: "SPRAY", descriptives: ["SPRAY", "BLOWING"]},
      {phenomenon: "MIST", descriptives: ["(none)"], isStandalone: true},
      {phenomenon: "SMOKE", descriptives: ["(none)"], isStandalone: true},
      {phenomenon: "VOLCANIC_ASH", descriptives: ["(none)"], isStandalone: true},
      {phenomenon: "HAZE", descriptives: ["(none)"], isStandalone: true},
      {phenomenon: "DUST_WHIRLS", descriptives: ["(none)"], isStandalone: true},
      {phenomenon: "SAND_WHIRLS", descriptives: ["(none)"], isStandalone: true},
      {phenomenon: "SQUALL", descriptives: ["(none)"], isStandalone: true},
      {phenomenon: "FUNNEL_CLOUD", descriptives: ["(none)"], isStandalone: true},
      {phenomenon: "TORNADO", descriptives: ["(none)"], isStandalone: true},
      {phenomenon: "WATERSPOUT", descriptives: ["(none)"], isStandalone: true},
      {phenomenon: "SANDSTORM", descriptives: ["(none)"], isStandalone: true},
      {phenomenon: "DUSTSTORM", descriptives: ["(none)"], isStandalone: true},
      {phenomenon: "THUNDERSTORM", descriptives: ["(none)"], isStandalone: true}
    ];
    this.sigmetWmoOptions = [
      {phenomenon: "WV", descriptives: ["(none)"]},
      {phenomenon: "WC", descriptives: ["(none)"]},
      {phenomenon: "WS", descriptives: ["(none)"]}
    ];
    this.sigmetPhenomOptions = [
      {phenomenon: "VA", descriptives: ["(none)"]},
      {phenomenon: "TC", descriptives: ["(none)"]},
      {phenomenon: "RDOACT_CLD", descriptives: ["(none)"]},
      {phenomenon: "MTW", descriptives: ["(none)"]},
      {phenomenon: "TURB", descriptives: ["(none)"]},
      {phenomenon: "ICE", descriptives: ["(none)"]},
      {phenomenon: "TS", descriptives: ["(none)"]},
      {phenomenon: "DS", descriptives: ["(none)"]},
      {phenomenon: "SS", descriptives: ["(none)"]}
    ];
    this.showPhenomenaModal = false;
    this.currentPhenomenaList = [];
    this.selectedPhenomenon = null;
    this.currentPhenomenaType = "cancelling";
    this.currentModalThresholdType = "METAR";
    this.wmoCancellingDropdownOpen = false;
    this.wmoSignificantDropdownOpen = false;
    this.phenomCancellingDropdownOpen = false;
    this.phenomSignificantDropdownOpen = false;
    this.intensityDropdownOpen = false;
    this.metarCloudQuantityDropdownOpen = false;
    this.metarWeatherIntensityDropdownOpen = false;
    this.tafCloudQuantityDropdownOpen = false;
    this.tafTempoCloudTypeDropdownOpen = false;
    this.intensityOptions = ["INTSF", "WKN", "NC"];
    this.cloudQuantityOptions = ["FEW", "SCT", "BKN", "OVC"];
    this.weatherIntensityOptions = ["HEAVY", "LIGHT"];
    this.tempoCloudTypeOptions = ["CB", "TCU"];
  }

  toggleSigmetDropdown(dropdown) {
    const shouldOpen = !this.getSigmetDropdownState(dropdown);
    this.wmoCancellingDropdownOpen = false;
    this.wmoSignificantDropdownOpen = false;
    this.phenomCancellingDropdownOpen = false;
    this.phenomSignificantDropdownOpen = false;
    this.intensityDropdownOpen = false;
    if (shouldOpen) {
      this.setSigmetDropdownState(dropdown, true);
    }
  }

  toggleIntensityDropdown() {
    this.intensityDropdownOpen = !this.intensityDropdownOpen;
    this.wmoCancellingDropdownOpen = false;
    this.wmoSignificantDropdownOpen = false;
    this.phenomCancellingDropdownOpen = false;
    this.phenomSignificantDropdownOpen = false;
  }

  selectIntensity(value) {
    this.sigmetThresholds.maxIntensity = value;
    this.intensityDropdownOpen = false;
    this.saveThresholds();
  }

  toggleMetarCloudQuantityDropdown() {
    this.metarCloudQuantityDropdownOpen = !this.metarCloudQuantityDropdownOpen;
    this.metarWeatherIntensityDropdownOpen = false;
  }

  selectMetarCloudQuantity(value) {
    this.metarThresholds.maxCloudQuantity = value;
    this.metarCloudQuantityDropdownOpen = false;
    this.saveThresholds();
  }

  toggleMetarWeatherIntensityDropdown() {
    this.metarWeatherIntensityDropdownOpen = !this.metarWeatherIntensityDropdownOpen;
    this.metarCloudQuantityDropdownOpen = false;
  }

  selectMetarWeatherIntensity(value) {
    this.metarThresholds.maxWeatherIntensity = value;
    this.metarWeatherIntensityDropdownOpen = false;
    this.saveThresholds();
  }

  toggleTafCloudQuantityDropdown() {
    this.tafCloudQuantityDropdownOpen = !this.tafCloudQuantityDropdownOpen;
    this.tafTempoCloudTypeDropdownOpen = false;
  }

  selectTafCloudQuantity(value) {
    this.tafThresholds.maxCloudQuantity = value;
    this.tafCloudQuantityDropdownOpen = false;
    this.saveThresholds();
  }

  toggleTafTempoCloudTypeDropdown() {
    this.tafTempoCloudTypeDropdownOpen = !this.tafTempoCloudTypeDropdownOpen;
    this.tafCloudQuantityDropdownOpen = false;
  }

  selectTafTempoCloudType(value) {
    this.tafThresholds.cancellingTempoCloudType = value;
    this.tafTempoCloudTypeDropdownOpen = false;
    this.saveThresholds();
  }

  getSigmetDropdownState(dropdown) {
    switch (dropdown) {
      case "wmoCancelling":
        return this.wmoCancellingDropdownOpen;
      case "wmoSignificant":
        return this.wmoSignificantDropdownOpen;
      case "phenomCancelling":
        return this.phenomCancellingDropdownOpen;
      case "phenomSignificant":
        return this.phenomSignificantDropdownOpen;
    }
  }

  setSigmetDropdownState(dropdown, isOpen) {
    switch (dropdown) {
      case "wmoCancelling":
        this.wmoCancellingDropdownOpen = isOpen;
        break;
      case "wmoSignificant":
        this.wmoSignificantDropdownOpen = isOpen;
        break;
      case "phenomCancelling":
        this.phenomCancellingDropdownOpen = isOpen;
        break;
      case "phenomSignificant":
        this.phenomSignificantDropdownOpen = isOpen;
        break;
    }
  }

  openPhenomenaModal(type, thresholdType = "METAR") {
    this.currentPhenomenaType = type;
    this.currentModalThresholdType = thresholdType;
    if (thresholdType === "METAR") {
      this.currentPhenomenaList = type === "cancelling" ? [...this.metarThresholds.weatherPhenomenon.cancelling] : [...this.metarThresholds.weatherPhenomenon.operationallySignificant];
    } else if (thresholdType === "TAF") {
      this.currentPhenomenaList = type === "cancelling" ? [...this.tafThresholds.weatherConditions.cancelling] : [...this.tafThresholds.weatherConditions.operationallySignificant];
    } else if (thresholdType === "SIGMET_WMO") {
      this.currentPhenomenaList = type === "cancelling" ? [...this.sigmetThresholds.WMO.cancelling] : [...this.sigmetThresholds.WMO.operationallySignificant];
    } else if (thresholdType === "SIGMET_PHENOM") {
      this.currentPhenomenaList = type === "cancelling" ? [...this.sigmetThresholds.phenomenon.cancelling] : [...this.sigmetThresholds.phenomenon.operationallySignificant];
    }
    this.selectedPhenomenon = null;
    this.showPhenomenaModal = true;
  }

  selectPhenomenon(p) {
    const options = this.currentModalThresholdType === "METAR" || this.currentModalThresholdType === "TAF" ? this.phenomenaOptions : this.currentModalThresholdType === "SIGMET_WMO" ? this.sigmetWmoOptions : this.sigmetPhenomOptions;
    const opt = options.find((o) => o.phenomenon === p);
    if (opt && opt.descriptives.length === 1 && (opt.descriptives[0] === "(none)" || opt.descriptives[0] === p)) {
      this.selectedPhenomenon = p;
      this.addCombination(opt.descriptives[0]);
    } else {
      this.selectedPhenomenon = p;
    }
  }

  addCombination(descriptive) {
    if (!this.selectedPhenomenon)
      return;
    let value = "";
    if (descriptive === "(none)" || descriptive === this.selectedPhenomenon) {
      value = this.selectedPhenomenon;
    } else {
      value = `${descriptive}_${this.selectedPhenomenon}`;
    }
    if (!this.currentPhenomenaList.includes(value)) {
      this.currentPhenomenaList.push(value);
      this.updateMetarPhenomena();
    }
    this.selectedPhenomenon = null;
  }

  removePhenomenon(item) {
    this.currentPhenomenaList = this.currentPhenomenaList.filter((i) => i !== item);
    this.updateMetarPhenomena();
  }

  updateMetarPhenomena() {
    if (this.currentModalThresholdType === "METAR") {
      if (this.currentPhenomenaType === "cancelling") {
        this.metarThresholds.weatherPhenomenon.cancelling = [...this.currentPhenomenaList];
      } else {
        this.metarThresholds.weatherPhenomenon.operationallySignificant = [...this.currentPhenomenaList];
      }
    } else if (this.currentModalThresholdType === "TAF") {
      if (this.currentPhenomenaType === "cancelling") {
        this.tafThresholds.weatherConditions.cancelling = [...this.currentPhenomenaList];
      } else {
        this.tafThresholds.weatherConditions.operationallySignificant = [...this.currentPhenomenaList];
      }
    } else if (this.currentModalThresholdType === "SIGMET_WMO") {
      if (this.currentPhenomenaType === "cancelling") {
        this.sigmetThresholds.WMO.cancelling = [...this.currentPhenomenaList];
      } else {
        this.sigmetThresholds.WMO.operationallySignificant = [...this.currentPhenomenaList];
      }
    } else if (this.currentModalThresholdType === "SIGMET_PHENOM") {
      if (this.currentPhenomenaType === "cancelling") {
        this.sigmetThresholds.phenomenon.cancelling = [...this.currentPhenomenaList];
      } else {
        this.sigmetThresholds.phenomenon.operationallySignificant = [...this.currentPhenomenaList];
      }
    }
    this.saveThresholds();
  }

  closePhenomenaModal() {
    this.showPhenomenaModal = false;
  }

  ngOnInit() {
  }

  onDocumentClick(event) {
    const target = event.target;
    if (target.closest(".dropdown-multiselect"))
      return;
    this.wmoCancellingDropdownOpen = false;
    this.wmoSignificantDropdownOpen = false;
    this.phenomCancellingDropdownOpen = false;
    this.phenomSignificantDropdownOpen = false;
    this.intensityDropdownOpen = false;
    this.metarCloudQuantityDropdownOpen = false;
    this.metarWeatherIntensityDropdownOpen = false;
    this.tafCloudQuantityDropdownOpen = false;
    this.tafTempoCloudTypeDropdownOpen = false;
  }

  setThresholdType(type) {
    this.selectedThresholdType = type;
  }

  onThresholdFieldMouseMove(event) {
    const target = event.target;
    const field = target.closest(".form-control, .form-select, div.border.rounded.cursor-pointer");
    if (!field) {
      return;
    }
    const rect = field.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width * 100;
    const y = (event.clientY - rect.top) / rect.height * 100;
    field.style.setProperty("--threshold-hover-x", `${x}%`);
    field.style.setProperty("--threshold-hover-y", `${y}%`);
  }

  onKeyPress(event, currentValue, allowDecimal = true, allowNegative = false) {
    const charCode = event.charCode;
    const char = String.fromCharCode(charCode);
    const valueStr = String(currentValue || "");
    if (charCode >= 48 && charCode <= 57) {
      return true;
    }
    if (allowNegative && char === "-") {
      const selectionStart = event.target.selectionStart;
      if (selectionStart === 0 && !valueStr.includes("-")) {
        return true;
      }
      event.preventDefault();
      return false;
    }
    if (allowDecimal && char === ".") {
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

  onFocusOut(event) {
    const target = event.relatedTarget;
    if (!target || !this.isDescendant(target)) {
      this.saveThresholds();
    }
  }

  beforeUnload(event) {
    this.saveThresholds();
  }

  ngOnDestroy() {
    this.saveThresholds();
  }

  isDescendant(target) {
    let parent = target.parentElement;
    while (parent) {
      if (parent.tagName.toLowerCase() === "app-thresholds") {
        return true;
      }
      parent = parent.parentElement;
    }
    return false;
  }

  saveThresholds() {
    console.log("Saving thresholds:", {
      metar: this.metarThresholds,
      taf: this.tafThresholds,
      sigmet: this.sigmetThresholds
    });
  }

  // Toggle selection for WMO Cancelling
  toggleWmoCancelling(phenomenon) {
    const idx = this.sigmetThresholds.WMO.cancelling.indexOf(phenomenon);
    if (idx > -1) {
      this.sigmetThresholds.WMO.cancelling.splice(idx, 1);
    } else {
      this.sigmetThresholds.WMO.cancelling.push(phenomenon);
    }
    this.saveThresholds();
  }

  // Toggle selection for WMO Operationally Significant
  toggleWmoSignificant(phenomenon) {
    const idx = this.sigmetThresholds.WMO.operationallySignificant.indexOf(phenomenon);
    if (idx > -1) {
      this.sigmetThresholds.WMO.operationallySignificant.splice(idx, 1);
    } else {
      this.sigmetThresholds.WMO.operationallySignificant.push(phenomenon);
    }
    this.saveThresholds();
  }

  // Toggle selection for Phenomenon Cancelling
  togglePhenomCancelling(phenomenon) {
    const idx = this.sigmetThresholds.phenomenon.cancelling.indexOf(phenomenon);
    if (idx > -1) {
      this.sigmetThresholds.phenomenon.cancelling.splice(idx, 1);
    } else {
      this.sigmetThresholds.phenomenon.cancelling.push(phenomenon);
    }
    this.saveThresholds();
  }

  // Toggle selection for Phenomenon Operationally Significant
  togglePhenomSignificant(phenomenon) {
    const idx = this.sigmetThresholds.phenomenon.operationallySignificant.indexOf(phenomenon);
    if (idx > -1) {
      this.sigmetThresholds.phenomenon.operationallySignificant.splice(idx, 1);
    } else {
      this.sigmetThresholds.phenomenon.operationallySignificant.push(phenomenon);
    }
    this.saveThresholds();
  }

  static {
    this.\u0275fac = function ThresholdsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ThresholdsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _ThresholdsComponent,
      selectors: [["app-thresholds"]],
      hostBindings: function ThresholdsComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("click", function ThresholdsComponent_click_HostBindingHandler($event) {
            return ctx.onDocumentClick($event);
          }, \u0275\u0275resolveDocument)("focusout", function ThresholdsComponent_focusout_HostBindingHandler($event) {
            return ctx.onFocusOut($event);
          })("beforeunload", function ThresholdsComponent_beforeunload_HostBindingHandler($event) {
            return ctx.beforeUnload($event);
          }, \u0275\u0275resolveWindow);
        }
      },
      decls: 51,
      vars: 13,
      consts: [["noPhenom", ""], ["metarForm", "ngForm"], ["tafForm", "ngForm"], ["sigmetForm", "ngForm"], ["xs", "12"], [1, "mb-4"], [1, "d-flex", "justify-content-between", "align-items-center"], ["variant", "btn-group"], ["cButton", "", "cDropdownToggle", "", "color", "secondary", "size", "sm", "variant", "outline"], ["cDropdownMenu", "", "placement", "bottom-start"], ["cDropdownItem", "", 3, "click"], [4, "ngIf"], ["size", "lg", "alignment", "center", 3, "visibleChange", "visible"], ["cModalTitle", ""], [1, "mb-3"], [1, "p-2", "border", "rounded", "bg-body", "min-vh-10"], ["class", "badge bg-primary me-2 mb-2 p-2", 4, "ngFor", "ngForOf"], ["class", "text-muted", 4, "ngIf"], [1, "row"], [1, "col-md-6", "border-end"], [1, "list-group", 2, "max-height", "300px", "overflow-y", "auto"], [1, "col-md-6"], [4, "ngIf", "ngIfElse"], ["cButton", "", "color", "secondary", 3, "click"], [3, "mousemove"], ["md", "6"], ["cLabel", "", "for", "minVisibility"], ["cFormControl", "", "id", "minVisibility", "name", "minVisibility", "type", "text", 3, "ngModelChange", "keypress", "ngModel"], ["cLabel", "", "for", "minCloudHeight"], ["cFormControl", "", "id", "minCloudHeight", "name", "minCloudHeight", "type", "text", 3, "ngModelChange", "keypress", "ngModel"], ["cLabel", "", "for", "maxCloudQuantity"], [1, "dropdown-multiselect", "position-relative"], ["tabindex", "0", 1, "form-select", "bg-body", "d-flex", "align-items-center", 3, "click"], [1, "flex-grow-1", "text-truncate"], [1, "ms-2"], [1, "bi", "bi-caret-down-fill"], ["class", "dropdown-menu w-100 mt-1 show", "style", "max-height:200px;overflow:auto;z-index:1050;", 4, "ngIf"], ["cLabel", "", "for", "minAltimeter"], ["cFormControl", "", "id", "minAltimeter", "name", "minAltimeter", "type", "text", 3, "ngModelChange", "keypress", "ngModel"], ["cLabel", "", "for", "minTemperature"], ["cFormControl", "", "id", "minTemperature", "name", "minTemperature", "type", "text", 3, "ngModelChange", "keypress", "ngModel"], ["cLabel", "", "for", "maxWindSpeed"], ["cFormControl", "", "id", "maxWindSpeed", "name", "maxWindSpeed", "type", "text", 3, "ngModelChange", "keypress", "ngModel"], ["cLabel", "", "for", "maxGust"], ["cFormControl", "", "id", "maxGust", "name", "maxGust", "type", "text", 3, "ngModelChange", "keypress", "ngModel"], ["cLabel", "", "for", "maxWeatherIntensity"], ["cLabel", "", "for", "cancellingPhenomena"], [1, "p-2", "border", "rounded", "bg-body", "min-vh-10", "cursor-pointer", 2, "cursor", "pointer", 3, "click"], [1, "d-flex", "align-items-center", "mt-3"], [1, "me-2"], [1, "mb-0", 3, "inline"], ["cFormCheckInput", "", "id", "isWindShear", "name", "isWindShear", "type", "checkbox", 2, "border-color", "#8a93a2", 3, "ngModelChange", "change", "ngModel"], ["cLabel", "", "for", "opSignificantPhenomena"], [1, "dropdown-menu", "w-100", "mt-1", "show", 2, "max-height", "200px", "overflow", "auto", "z-index", "1050"], ["class", "dropdown-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "dropdown-item", 3, "click"], [1, "badge", "bg-primary", "me-2", "mb-2", "p-2"], [1, "text-muted"], ["type", "button", 1, "btn-close", "btn-close-white", "ms-2", 2, "font-size", "0.5rem", 3, "click"], [4, "ngFor", "ngForOf"], [1, "mt-2", "mb-2", 2, "font-size", "0.98rem", "pointer-events", "none"], ["type", "button", "class", "list-group-item list-group-item-action", 3, "active", "click", 4, "ngIf"], ["type", "button", 1, "list-group-item", "list-group-item-action", 3, "click"], ["type", "button", "class", "list-group-item list-group-item-action", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "list-group"], ["type", "button", "class", "list-group-item list-group-item-action", 3, "click", 4, "ngFor", "ngForOf"], [1, "text-muted", "p-3", "text-center"], ["cLabel", "", "for", "tafMinVisibility"], ["cFormControl", "", "id", "tafMinVisibility", "name", "tafMinVisibility", "type", "text", 3, "ngModelChange", "keypress", "ngModel"], ["cLabel", "", "for", "tafMinCloudHeight"], ["cFormControl", "", "id", "tafMinCloudHeight", "name", "tafMinCloudHeight", "type", "text", 3, "ngModelChange", "keypress", "ngModel"], ["cLabel", "", "for", "tafMaxCloudQuantity"], ["cLabel", "", "for", "tafCancellingTempoCloudType"], ["cLabel", "", "for", "tafMaxWindSpeed"], ["cFormControl", "", "id", "tafMaxWindSpeed", "name", "tafMaxWindSpeed", "type", "text", 3, "ngModelChange", "keypress", "ngModel"], ["cLabel", "", "for", "tafMaxGust"], ["cFormControl", "", "id", "tafMaxGust", "name", "tafMaxGust", "type", "text", 3, "ngModelChange", "keypress", "ngModel"], ["cLabel", "", "for", "tafMinTempoProbability"], ["cFormControl", "", "id", "tafMinTempoProbability", "name", "tafMinTempoProbability", "type", "text", 3, "ngModelChange", "keypress", "ngModel"], ["cLabel", "", "for", "tafOpSignificantPhenomena"], ["cLabel", "", "for", "tafCancellingPhenomena"], ["cLabel", "", "for", "minFlightLevel"], ["cFormControl", "", "id", "minFlightLevel", "name", "minFlightLevel", "type", "text", 3, "ngModelChange", "keypress", "ngModel"], ["cLabel", "", "for", "maxFlightLevel"], ["cFormControl", "", "id", "maxFlightLevel", "name", "maxFlightLevel", "type", "text", 3, "ngModelChange", "keypress", "ngModel"], ["cLabel", "", "for", "sigmetMaxIntensity"], ["cLabel", "", "for", "sigmetWmoSignificant"], ["cLabel", "", "for", "sigmetWmoCancelling"], ["cLabel", "", "for", "sigmetPhenomSignificant"], ["cLabel", "", "for", "sigmetPhenomCancelling"], ["class", "dropdown-item d-flex justify-content-between align-items-center", 3, "click", 4, "ngFor", "ngForOf"], [1, "dropdown-item", "d-flex", "justify-content-between", "align-items-center", 3, "click"], [1, "mb-0", "ms-2", 3, "inline"], ["cFormCheckInput", "", "type", "checkbox", 2, "border-color", "#8a93a2", 3, "change", "checked"]],
      template: function ThresholdsComponent_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275elementStart(0, "c-row")(1, "c-col", 4)(2, "c-card", 5)(3, "c-card-header", 6)(4, "strong");
          \u0275\u0275text(5, "Thresholds Configuration");
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(6, "c-dropdown", 7)(7, "button", 8);
          \u0275\u0275text(8);
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(9, "ul", 9)(10, "li")(11, "button", 10);
          \u0275\u0275listener("click", function ThresholdsComponent_Template_button_click_11_listener() {
            return ctx.setThresholdType("METAR");
          });
          \u0275\u0275text(12, "METAR");
          \u0275\u0275elementEnd()();
          \u0275\u0275elementStart(13, "li")(14, "button", 10);
          \u0275\u0275listener("click", function ThresholdsComponent_Template_button_click_14_listener() {
            return ctx.setThresholdType("TAF");
          });
          \u0275\u0275text(15, "TAF");
          \u0275\u0275elementEnd()();
          \u0275\u0275elementStart(16, "li")(17, "button", 10);
          \u0275\u0275listener("click", function ThresholdsComponent_Template_button_click_17_listener() {
            return ctx.setThresholdType("SIGMET");
          });
          \u0275\u0275text(18, "SIGMET");
          \u0275\u0275elementEnd()()()()();
          \u0275\u0275elementStart(19, "c-card-body");
          \u0275\u0275template(20, ThresholdsComponent_div_20_Template, 69, 16, "div", 11);
          \u0275\u0275elementStart(21, "c-modal", 12);
          \u0275\u0275listener("visibleChange", function ThresholdsComponent_Template_c_modal_visibleChange_21_listener($event) {
            return ctx.showPhenomenaModal = $event;
          });
          \u0275\u0275elementStart(22, "c-modal-header")(23, "h5", 13);
          \u0275\u0275text(24);
          \u0275\u0275elementEnd()();
          \u0275\u0275elementStart(25, "c-modal-body")(26, "div", 14)(27, "h6");
          \u0275\u0275text(28, "Current Selection:");
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(29, "div", 15);
          \u0275\u0275template(30, ThresholdsComponent_span_30_Template, 3, 1, "span", 16)(31, ThresholdsComponent_div_31_Template, 2, 0, "div", 17);
          \u0275\u0275elementEnd()();
          \u0275\u0275elementStart(32, "div", 18)(33, "div", 19)(34, "h6");
          \u0275\u0275text(35, "Select Phenomenon");
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(36, "div", 20);
          \u0275\u0275template(37, ThresholdsComponent_ng_container_37_Template, 5, 2, "ng-container", 11)(38, ThresholdsComponent_ng_container_38_Template, 2, 1, "ng-container", 11)(39, ThresholdsComponent_ng_container_39_Template, 2, 1, "ng-container", 11);
          \u0275\u0275elementEnd()();
          \u0275\u0275elementStart(40, "div", 21)(41, "h6");
          \u0275\u0275text(42, "Select Descriptive");
          \u0275\u0275elementEnd();
          \u0275\u0275template(43, ThresholdsComponent_div_43_Template, 3, 2, "div", 22)(44, ThresholdsComponent_ng_template_44_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
          \u0275\u0275elementEnd()()();
          \u0275\u0275elementStart(46, "c-modal-footer")(47, "button", 23);
          \u0275\u0275listener("click", function ThresholdsComponent_Template_button_click_47_listener() {
            return ctx.closePhenomenaModal();
          });
          \u0275\u0275text(48, "Close");
          \u0275\u0275elementEnd()()();
          \u0275\u0275template(49, ThresholdsComponent_div_49_Template, 60, 13, "div", 11)(50, ThresholdsComponent_div_50_Template, 65, 12, "div", 11);
          \u0275\u0275elementEnd()()()();
        }
        if (rf & 2) {
          const noPhenom_r39 = \u0275\u0275reference(45);
          \u0275\u0275advance(8);
          \u0275\u0275textInterpolate1(" ", ctx.selectedThresholdType, " ");
          \u0275\u0275advance(12);
          \u0275\u0275property("ngIf", ctx.selectedThresholdType === "METAR");
          \u0275\u0275advance();
          \u0275\u0275property("visible", ctx.showPhenomenaModal);
          \u0275\u0275advance(3);
          \u0275\u0275textInterpolate1("", ctx.currentPhenomenaType === "cancelling" ? "Cancelling" : "Operationally Significant", " Phenomena");
          \u0275\u0275advance(6);
          \u0275\u0275property("ngForOf", ctx.currentPhenomenaList);
          \u0275\u0275advance();
          \u0275\u0275property("ngIf", ctx.currentPhenomenaList.length === 0);
          \u0275\u0275advance(6);
          \u0275\u0275property("ngIf", ctx.currentModalThresholdType === "METAR" || ctx.currentModalThresholdType === "TAF");
          \u0275\u0275advance();
          \u0275\u0275property("ngIf", ctx.currentModalThresholdType === "SIGMET_WMO");
          \u0275\u0275advance();
          \u0275\u0275property("ngIf", ctx.currentModalThresholdType === "SIGMET_PHENOM");
          \u0275\u0275advance(4);
          \u0275\u0275property("ngIf", ctx.selectedPhenomenon)("ngIfElse", noPhenom_r39);
          \u0275\u0275advance(6);
          \u0275\u0275property("ngIf", ctx.selectedThresholdType === "TAF");
          \u0275\u0275advance();
          \u0275\u0275property("ngIf", ctx.selectedThresholdType === "SIGMET");
        }
      },
      dependencies: [
        CommonModule,
        NgForOf,
        NgIf,
        FormsModule,
        \u0275NgNoValidate,
        DefaultValueAccessor,
        CheckboxControlValueAccessor,
        NgControlStatus,
        NgControlStatusGroup,
        NgModel,
        NgForm,
        CardComponent,
        CardHeaderComponent,
        CardBodyComponent,
        RowComponent,
        ColComponent,
        DropdownComponent,
        DropdownToggleDirective,
        DropdownMenuDirective,
        DropdownItemDirective,
        ButtonDirective,
        FormControlDirective,
        FormLabelDirective,
        FormCheckComponent,
        FormCheckInputDirective,
        ModalModule,
        ModalBodyComponent,
        ModalComponent,
        ModalFooterComponent,
        ModalHeaderComponent,
        ModalTitleDirective
      ],
      styles: ['\n@property --threshold-border-fill { syntax: "<percentage>"; inherits: false; initial-value: 0%; }\n.btn-close[_ngcontent-%COMP%]:focus {\n  box-shadow: none !important;\n  outline: none !important;\n}\nform[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%], \nform[_ngcontent-%COMP%]   div.border.rounded.cursor-pointer[_ngcontent-%COMP%] {\n  --threshold-hover-x: 50%;\n  --threshold-hover-y: 50%;\n  --threshold-border-fill: 0%;\n  border: 1px solid transparent;\n  background: linear-gradient(var(--cui-body-bg), var(--cui-body-bg)) padding-box, linear-gradient(var(--cui-border-color), var(--cui-border-color)) border-box;\n  background-clip: padding-box, border-box;\n  transition: box-shadow 0.15s ease-in-out;\n}\nform[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: 0;\n  border-color: rgb(171.5, 170.5, 234.5);\n  box-shadow: 0 0 0 0.25rem rgba(88, 86, 214, 0.25);\n  background: linear-gradient(var(--cui-body-bg), var(--cui-body-bg)) padding-box, linear-gradient(rgb(171.5, 170.5, 234.5), rgb(171.5, 170.5, 234.5)) border-box;\n  background-clip: padding-box, border-box;\n  transition: box-shadow 0.15s ease-in-out;\n}\nform[_ngcontent-%COMP%]   div.border.rounded.cursor-pointer[_ngcontent-%COMP%]:focus {\n  outline: 0;\n  box-shadow: none;\n}\nform[_ngcontent-%COMP%]   .form-control.threshold-field-hovering[_ngcontent-%COMP%] {\n  --threshold-border-fill: 150%;\n  border-color: transparent;\n  box-shadow: none;\n  background:\n    linear-gradient(var(--cui-body-bg), var(--cui-body-bg)) padding-box,\n    radial-gradient(\n      circle at var(--threshold-hover-x) var(--threshold-hover-y),\n      #fff 0%,\n      #fff var(--threshold-border-fill),\n      var(--cui-border-color) calc(var(--threshold-border-fill) + 1%),\n      var(--cui-border-color) 100%) border-box;\n  background-clip: padding-box, border-box;\n  transition: --threshold-border-fill 1.6s ease-out, box-shadow 0.15s ease-in-out;\n}\nform[_ngcontent-%COMP%]   div.border.rounded.cursor-pointer.threshold-field-hovering[_ngcontent-%COMP%] {\n  --threshold-border-fill: 150%;\n  background:\n    linear-gradient(var(--cui-body-bg), var(--cui-body-bg)) padding-box,\n    radial-gradient(\n      circle at var(--threshold-hover-x) var(--threshold-hover-y),\n      #fff 0%,\n      #fff var(--threshold-border-fill),\n      var(--cui-border-color) calc(var(--threshold-border-fill) + 1%),\n      var(--cui-border-color) 100%) border-box;\n  background-clip: padding-box, border-box;\n  transition: --threshold-border-fill 1.6s ease-out, box-shadow 0.15s ease-in-out;\n}\nform[_ngcontent-%COMP%]   select.form-select[_ngcontent-%COMP%] {\n  border-color: var(--cui-border-color);\n  background-color: var(--cui-body-bg);\n  color: var(--cui-body-color);\n  box-shadow: none;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\nform[_ngcontent-%COMP%]   select.form-select[_ngcontent-%COMP%]:hover {\n  border-color: var(--cui-border-color) !important;\n}\nform[_ngcontent-%COMP%]   select.form-select.threshold-field-hovering[_ngcontent-%COMP%] {\n  border-color: var(--cui-border-color) !important;\n  box-shadow: none;\n}\nform[_ngcontent-%COMP%]   select.form-select[_ngcontent-%COMP%]:focus {\n  outline: 0;\n  border-color: rgb(171.5, 170.5, 234.5) !important;\n  box-shadow: 0 0 0 0.25rem rgba(88, 86, 214, 0.25) !important;\n}\n.dropdown-multiselect[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%] {\n  --threshold-hover-x: 50%;\n  --threshold-hover-y: 50%;\n  --threshold-border-fill: 0%;\n  cursor: pointer;\n  min-height: 38px;\n  display: flex;\n  align-items: center;\n  padding-right: 2.5rem;\n  position: relative;\n  color: var(--cui-body-color);\n  border: 1px solid transparent;\n  border-radius: 0.375rem;\n  box-shadow: none;\n  background-image:\n    var(--cui-form-select-bg-img),\n    linear-gradient(var(--cui-body-bg), var(--cui-body-bg)),\n    linear-gradient(var(--cui-border-color), var(--cui-border-color));\n  background-position:\n    right 0.75rem center,\n    0 0,\n    0 0;\n  background-size:\n    16px 12px,\n    auto,\n    auto;\n  background-repeat: no-repeat;\n  background-origin:\n    padding-box,\n    padding-box,\n    border-box;\n  background-clip:\n    padding-box,\n    padding-box,\n    border-box;\n  transition: box-shadow 0.15s ease-in-out;\n}\n.dropdown-multiselect[_ngcontent-%COMP%]   .form-select.threshold-field-hovering[_ngcontent-%COMP%] {\n  --threshold-border-fill: 150%;\n  background-image:\n    var(--cui-form-select-bg-img),\n    linear-gradient(var(--cui-body-bg), var(--cui-body-bg)),\n    radial-gradient(\n      circle at var(--threshold-hover-x) var(--threshold-hover-y),\n      #fff 0%,\n      #fff var(--threshold-border-fill),\n      var(--cui-border-color) calc(var(--threshold-border-fill) + 1%),\n      var(--cui-border-color) 100%);\n  background-position:\n    right 0.75rem center,\n    0 0,\n    0 0;\n  background-size:\n    16px 12px,\n    auto,\n    auto;\n  background-repeat: no-repeat;\n  background-origin:\n    padding-box,\n    padding-box,\n    border-box;\n  background-clip:\n    padding-box,\n    padding-box,\n    border-box;\n  transition: --threshold-border-fill 1.05s ease-out, box-shadow 0.15s ease-in-out;\n}\n.dropdown-multiselect[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%]:focus {\n  outline: 0;\n  border-color: rgb(171.5, 170.5, 234.5) !important;\n  box-shadow: 0 0 0 0.25rem rgba(88, 86, 214, 0.25) !important;\n}\n.dropdown-multiselect[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  border-radius: 0.375rem;\n  box-shadow: none;\n  padding: 0.25rem 0;\n  animation: _ngcontent-%COMP%_fadeIn 0.25s ease-out;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(-8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.dropdown-multiselect[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n  min-width: 0;\n  padding-right: 2rem;\n}\n.dropdown-multiselect[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]   .ms-2[_ngcontent-%COMP%] {\n  margin-left: 1.5rem !important;\n  color: #198754;\n  font-weight: bold;\n}\n.dropdown-multiselect[_ngcontent-%COMP%]   .dropdown-item.active[_ngcontent-%COMP%], \n.dropdown-multiselect[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:active {\n  background-color: #9091c6;\n  color: #212529;\n}\n.dropdown-multiselect[_ngcontent-%COMP%]   .bi-caret-down-fill[_ngcontent-%COMP%] {\n  display: none;\n}\n.dropdown-multiselect[_ngcontent-%COMP%]   .dropdown-item.d-flex.justify-content-between.align-items-center[_ngcontent-%COMP%] {\n  position: relative;\n  padding-right: 0;\n  padding-left: 0.75rem;\n}\n.dropdown-multiselect[_ngcontent-%COMP%]   .dropdown-item.d-flex.justify-content-between.align-items-center.active[_ngcontent-%COMP%], \n.dropdown-multiselect[_ngcontent-%COMP%]   .dropdown-item.d-flex.justify-content-between.align-items-center[_ngcontent-%COMP%]:active {\n  background-color: transparent;\n  color: inherit;\n}\n.dropdown-multiselect[_ngcontent-%COMP%]   .dropdown-item.d-flex.justify-content-between.align-items-center[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: block;\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  padding-right: 2rem;\n}\n.dropdown-multiselect[_ngcontent-%COMP%]   .dropdown-item.d-flex.justify-content-between.align-items-center[_ngcontent-%COMP%]   c-form-check[_ngcontent-%COMP%], \n.dropdown-multiselect[_ngcontent-%COMP%]   .dropdown-item.d-flex.justify-content-between.align-items-center[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0.75rem;\n  top: 50%;\n  transform: translateY(-50%);\n  margin: 0;\n  padding: 0.25rem 0;\n}\n.dropdown-multiselect[_ngcontent-%COMP%]   .dropdown-item.d-flex.justify-content-between.align-items-center[_ngcontent-%COMP%]   c-form-check[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%], \n.dropdown-multiselect[_ngcontent-%COMP%]   .dropdown-item.d-flex.justify-content-between.align-items-center[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%], \n.dropdown-multiselect[_ngcontent-%COMP%]   .dropdown-item.d-flex.justify-content-between.align-items-center[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%] {\n  margin-right: 0;\n  margin-left: 0.25rem;\n}\n/*# sourceMappingURL=thresholds.component.css.map */']
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ThresholdsComponent, [{
    type: Component,
    args: [{
      selector: "app-thresholds",
      standalone: true,
      imports: [
        CommonModule,
        FormsModule,
        CardComponent,
        CardHeaderComponent,
        CardBodyComponent,
        RowComponent,
        ColComponent,
        DropdownComponent,
        DropdownToggleDirective,
        DropdownMenuDirective,
        DropdownItemDirective,
        ButtonDirective,
        FormControlDirective,
        FormLabelDirective,
        FormCheckComponent,
        FormCheckInputDirective,
        ModalModule
      ],
      template: `<c-row>
  <c-col xs="12">
    <c-card class="mb-4">
      <c-card-header class="d-flex justify-content-between align-items-center">
        <strong>Thresholds Configuration</strong>
        <c-dropdown variant="btn-group">
          <button cButton cDropdownToggle color="secondary" size="sm" variant="outline">
            {{ selectedThresholdType }}
          </button>
          <ul cDropdownMenu placement="bottom-start">
            <li><button cDropdownItem (click)="setThresholdType('METAR')">METAR</button></li>
            <li><button cDropdownItem (click)="setThresholdType('TAF')">TAF</button></li>
            <li><button cDropdownItem (click)="setThresholdType('SIGMET')">SIGMET</button></li>
          </ul>
        </c-dropdown>
      </c-card-header>
      <c-card-body>
        <div *ngIf="selectedThresholdType === 'METAR'">
  <form #metarForm="ngForm" (mousemove)="onThresholdFieldMouseMove($event)">
    <c-row class="mb-3">
      <c-col md="6">
                <label cLabel for="minVisibility">Minimum Visibility (km)</label>
                <input cFormControl id="minVisibility" name="minVisibility" type="text"
                  [(ngModel)]="metarThresholds.minVisibility"
                  (keypress)="onKeyPress($event, metarThresholds.minVisibility, true)"
                  (ngModelChange)="saveThresholds()" />
              </c-col>
              <c-col md="6">
                <label cLabel for="minCloudHeight">Minimum Cloud Height (ft)</label>
                <input cFormControl id="minCloudHeight" name="minCloudHeight" type="text"
                  [(ngModel)]="metarThresholds.minCloudHeight"
                  (keypress)="onKeyPress($event, metarThresholds.minCloudHeight, false)"
                  (ngModelChange)="saveThresholds()" />
              </c-col>
            </c-row>

            <c-row class="mb-3">
              <c-col md="6">
                <label cLabel for="maxCloudQuantity">Maximum Cloud Quantity</label>
                <div class="dropdown-multiselect position-relative">
                  <div class="form-select bg-body d-flex align-items-center" (click)="toggleMetarCloudQuantityDropdown()" tabindex="0">
                    <span class="flex-grow-1 text-truncate">
                      {{ metarThresholds.maxCloudQuantity || 'Select...' }}
                    </span>
                    <span class="ms-2"><i class="bi bi-caret-down-fill"></i></span>
                  </div>
                  <div class="dropdown-menu w-100 mt-1 show" *ngIf="metarCloudQuantityDropdownOpen" style="max-height:200px;overflow:auto;z-index:1050;">
                    <div class="dropdown-item" *ngFor="let opt of cloudQuantityOptions" (click)="selectMetarCloudQuantity(opt); $event.stopPropagation();">
                      <span>{{ opt }}</span>
                    </div>
                  </div>
                </div>
              </c-col>
              <c-col md="6">
                <label cLabel for="minAltimeter">Minimum Altimeter (hPa)</label>
                <input cFormControl id="minAltimeter" name="minAltimeter" type="text"
                  [(ngModel)]="metarThresholds.minAltimeter"
                  (keypress)="onKeyPress($event, metarThresholds.minAltimeter, false)"
                  (ngModelChange)="saveThresholds()" />
              </c-col>
            </c-row>

            <c-row class="mb-3">
              <c-col md="6">
                <label cLabel for="minTemperature">Minimum Temperature (\xB0C)</label>
                <input cFormControl id="minTemperature" name="minTemperature" type="text"
                  [(ngModel)]="metarThresholds.minTemperature"
                  (keypress)="onKeyPress($event, metarThresholds.minTemperature, false, true)"
                  (ngModelChange)="saveThresholds()" />
              </c-col>
              <c-col md="6">
                <label cLabel for="maxWindSpeed">Maximum Wind Speed (kt)</label>
                <input cFormControl id="maxWindSpeed" name="maxWindSpeed" type="text"
                  [(ngModel)]="metarThresholds.maxWindSpeed"
                  (keypress)="onKeyPress($event, metarThresholds.maxWindSpeed, false)"
                  (ngModelChange)="saveThresholds()" />
              </c-col>
            </c-row>

            <c-row class="mb-3">
              <c-col md="6">
                <label cLabel for="maxGust">Maximum Gust Speed (kt)</label>
                <input cFormControl id="maxGust" name="maxGust" type="text" [(ngModel)]="metarThresholds.maxGust"
                  (keypress)="onKeyPress($event, metarThresholds.maxGust, false)" (ngModelChange)="saveThresholds()" />
              </c-col>
              <c-col md="6">
                <label cLabel for="maxWeatherIntensity">Maximum Weather Intensity</label>
                <div class="dropdown-multiselect position-relative">
                  <div class="form-select bg-body d-flex align-items-center" (click)="toggleMetarWeatherIntensityDropdown()" tabindex="0">
                    <span class="flex-grow-1 text-truncate">
                      {{ metarThresholds.maxWeatherIntensity || 'Select...' }}
                    </span>
                    <span class="ms-2"><i class="bi bi-caret-down-fill"></i></span>
                  </div>
                  <div class="dropdown-menu w-100 mt-1 show" *ngIf="metarWeatherIntensityDropdownOpen" style="max-height:200px;overflow:auto;z-index:1050;">
                    <div class="dropdown-item" *ngFor="let opt of weatherIntensityOptions" (click)="selectMetarWeatherIntensity(opt); $event.stopPropagation();">
                      <span>{{ opt }}</span>
                    </div>
                  </div>
                </div>
              </c-col>
            </c-row>

            <c-row class="mb-3">
              <c-col md="6">
                <label cLabel for="cancellingPhenomena">Cancelling Phenomena</label>
                <div class="p-2 border rounded bg-body min-vh-10 cursor-pointer" style="cursor: pointer;"
                  (click)="openPhenomenaModal('cancelling', 'METAR')">
                  <span *ngFor="let item of metarThresholds.weatherPhenomenon.cancelling"
                    class="badge bg-primary me-2 mb-2 p-2">
                    {{ item }}
                  </span>
                  <div *ngIf="metarThresholds.weatherPhenomenon.cancelling.length === 0" class="text-muted">No items
                    selected</div>
                </div>
                <div class="d-flex align-items-center mt-3">
                  <span class="me-2">Wind Shear</span>
                  <c-form-check [inline]="true" class="mb-0">
                    <input cFormCheckInput id="isWindShear" name="isWindShear" type="checkbox"
                      [(ngModel)]="metarThresholds.isWindShear" (change)="saveThresholds()" style="border-color: #8a93a2;" />
                  </c-form-check>
                </div>
              </c-col>
              <c-col md="6">
                <label cLabel for="opSignificantPhenomena">Operationally Significant Phenomena</label>
                <div class="p-2 border rounded bg-body min-vh-10 cursor-pointer" style="cursor: pointer;"
                  (click)="openPhenomenaModal('significant', 'METAR')">
                  <span *ngFor="let item of metarThresholds.weatherPhenomenon.operationallySignificant"
                    class="badge bg-primary me-2 mb-2 p-2">
                    {{ item }}
                  </span>
                  <div *ngIf="metarThresholds.weatherPhenomenon.operationallySignificant.length === 0"
                    class="text-muted">No items selected</div>
                </div>
              </c-col>
            </c-row>
          </form>
        </div>

        <c-modal [visible]="showPhenomenaModal" (visibleChange)="showPhenomenaModal = $event" size="lg"
          alignment="center">
          <c-modal-header>
            <h5 cModalTitle>{{ currentPhenomenaType === 'cancelling' ? 'Cancelling' : 'Operationally Significant' }}
              Phenomena</h5>
          </c-modal-header>
          <c-modal-body>
            <div class="mb-3">
              <h6>Current Selection:</h6>
              <div class="p-2 border rounded bg-body min-vh-10">
                <span *ngFor="let item of currentPhenomenaList" class="badge bg-primary me-2 mb-2 p-2">
                  {{ item }}
                  <button type="button" class="btn-close btn-close-white ms-2" style="font-size: 0.5rem;"
                    (click)="removePhenomenon(item)"></button>
                </span>
                <div *ngIf="currentPhenomenaList.length === 0" class="text-muted">No items selected</div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-6 border-end">
                <h6>Select Phenomenon</h6>
                <div class="list-group" style="max-height: 300px; overflow-y: auto;">

                  <ng-container *ngIf="currentModalThresholdType === 'METAR' || currentModalThresholdType === 'TAF'">
                    <ng-container *ngFor="let opt of phenomenaOptions">
                      <button *ngIf="!opt.isStandalone"
                        type="button" class="list-group-item list-group-item-action"
                        [class.active]="selectedPhenomenon === opt.phenomenon" (click)="selectPhenomenon(opt.phenomenon)">
                        {{ opt.phenomenon }}
                      </button>
                    </ng-container>

                    <h6 class="mt-2 mb-2" style="font-size: 0.98rem; pointer-events: none;">Standalone</h6>

                    <ng-container *ngFor="let opt of phenomenaOptions">
                      <button *ngIf="opt.isStandalone"
                        type="button" class="list-group-item list-group-item-action"
                        [class.active]="selectedPhenomenon === opt.phenomenon" (click)="selectPhenomenon(opt.phenomenon)">
                        {{ opt.phenomenon }}
                      </button>
                    </ng-container>
                  </ng-container>

                  <ng-container *ngIf="currentModalThresholdType === 'SIGMET_WMO'">
                    <button *ngFor="let opt of sigmetWmoOptions" type="button" class="list-group-item list-group-item-action"
                      [class.active]="selectedPhenomenon === opt.phenomenon" (click)="selectPhenomenon(opt.phenomenon)">
                      {{ opt.phenomenon }}
                    </button>
                  </ng-container>

                  <ng-container *ngIf="currentModalThresholdType === 'SIGMET_PHENOM'">
                    <button *ngFor="let opt of sigmetPhenomOptions" type="button" class="list-group-item list-group-item-action"
                      [class.active]="selectedPhenomenon === opt.phenomenon" (click)="selectPhenomenon(opt.phenomenon)">
                      {{ opt.phenomenon }}
                    </button>
                  </ng-container>

                </div>
              </div>
              <div class="col-md-6">
                <h6>Select Descriptive</h6>
                <div *ngIf="selectedPhenomenon; else noPhenom">
                  <div class="list-group">
                    <button
                      *ngFor="let desc of (currentModalThresholdType === 'METAR' || currentModalThresholdType === 'TAF' ? phenomenaOptions : (currentModalThresholdType === 'SIGMET_WMO' ? sigmetWmoOptions : sigmetPhenomOptions)).find(o => o.phenomenon === selectedPhenomenon)?.descriptives"
                      type="button" class="list-group-item list-group-item-action" (click)="addCombination(desc)">
                      {{ (desc === '(none)' || desc === selectedPhenomenon) ? selectedPhenomenon : desc + '_' + selectedPhenomenon }}
                    </button>
                  </div>
                </div>
                <ng-template #noPhenom>
                  <div class="text-muted p-3 text-center">Please select a phenomenon first</div>
                </ng-template>
              </div>
            </div>
          </c-modal-body>
          <c-modal-footer>
            <button (click)="closePhenomenaModal()" cButton color="secondary">Close</button>
          </c-modal-footer>
        </c-modal>

        <div *ngIf="selectedThresholdType === 'TAF'">
          <form #tafForm="ngForm">
            <c-row class="mb-3">
              <c-col md="6">
                <label cLabel for="tafMinVisibility">Minimum Visibility (km)</label>
                <input cFormControl id="tafMinVisibility" name="tafMinVisibility" type="text"
                  [(ngModel)]="tafThresholds.minVisibility"
                  (keypress)="onKeyPress($event, tafThresholds.minVisibility, true)"
                  (ngModelChange)="saveThresholds()" />
              </c-col>
              <c-col md="6">
                <label cLabel for="tafMinCloudHeight">Minimum Cloud Height (ft)</label>
                <input cFormControl id="tafMinCloudHeight" name="tafMinCloudHeight" type="text"
                  [(ngModel)]="tafThresholds.minCloudHeight"
                  (keypress)="onKeyPress($event, tafThresholds.minCloudHeight, false)"
                  (ngModelChange)="saveThresholds()" />
              </c-col>
            </c-row>

            <c-row class="mb-3">
              <c-col md="6">
                <label cLabel for="tafMaxCloudQuantity">Maximum Cloud Quantity</label>
                <div class="dropdown-multiselect position-relative">
                  <div class="form-select bg-body d-flex align-items-center" (click)="toggleTafCloudQuantityDropdown()" tabindex="0">
                    <span class="flex-grow-1 text-truncate">
                      {{ tafThresholds.maxCloudQuantity || 'Select...' }}
                    </span>
                    <span class="ms-2"><i class="bi bi-caret-down-fill"></i></span>
                  </div>
                  <div class="dropdown-menu w-100 mt-1 show" *ngIf="tafCloudQuantityDropdownOpen" style="max-height:200px;overflow:auto;z-index:1050;">
                    <div class="dropdown-item" *ngFor="let opt of cloudQuantityOptions" (click)="selectTafCloudQuantity(opt); $event.stopPropagation();">
                      <span>{{ opt }}</span>
                    </div>
                  </div>
                </div>
              </c-col>
              <c-col md="6">
                <label cLabel for="tafCancellingTempoCloudType">Cancelling TEMPO Cloud Type</label>
                <div class="dropdown-multiselect position-relative">
                  <div class="form-select bg-body d-flex align-items-center" (click)="toggleTafTempoCloudTypeDropdown()" tabindex="0">
                    <span class="flex-grow-1 text-truncate">
                      {{ tafThresholds.cancellingTempoCloudType || 'Select...' }}
                    </span>
                    <span class="ms-2"><i class="bi bi-caret-down-fill"></i></span>
                  </div>
                  <div class="dropdown-menu w-100 mt-1 show" *ngIf="tafTempoCloudTypeDropdownOpen" style="max-height:200px;overflow:auto;z-index:1050;">
                    <div class="dropdown-item" *ngFor="let opt of tempoCloudTypeOptions" (click)="selectTafTempoCloudType(opt); $event.stopPropagation();">
                      <span>{{ opt }}</span>
                    </div>
                  </div>
                </div>
              </c-col>
            </c-row>

            <c-row class="mb-3">
              <c-col md="6">
                <label cLabel for="tafMaxWindSpeed">Maximum Wind Speed (kt)</label>
                <input cFormControl id="tafMaxWindSpeed" name="tafMaxWindSpeed" type="text"
                  [(ngModel)]="tafThresholds.maxWindSpeed"
                  (keypress)="onKeyPress($event, tafThresholds.maxWindSpeed, false)"
                  (ngModelChange)="saveThresholds()" />
              </c-col>
              <c-col md="6">
                <label cLabel for="tafMaxGust">Maximum Gust Speed (kt)</label>
                <input cFormControl id="tafMaxGust" name="tafMaxGust" type="text" [(ngModel)]="tafThresholds.maxGust"
                  (keypress)="onKeyPress($event, tafThresholds.maxGust, false)" (ngModelChange)="saveThresholds()" />
              </c-col>
            </c-row>

            <c-row class="mb-3">
              <c-col md="6">
                <label cLabel for="tafMinTempoProbability">Minimum TEMPO Probability (%)</label>
                <input cFormControl id="tafMinTempoProbability" name="tafMinTempoProbability" type="text"
                  [(ngModel)]="tafThresholds.minTempoProbability"
                  (keypress)="onKeyPress($event, tafThresholds.minTempoProbability, false)"
                  (ngModelChange)="saveThresholds()" />
              </c-col>
              <c-col md="6">
                <label cLabel for="tafOpSignificantPhenomena">Operationally Significant Phenomena</label>
                <div class="p-2 border rounded bg-body min-vh-10 cursor-pointer" style="cursor: pointer;"
                  (click)="openPhenomenaModal('significant', 'TAF')">
                  <span *ngFor="let item of tafThresholds.weatherConditions.operationallySignificant"
                    class="badge bg-primary me-2 mb-2 p-2">
                    {{ item }}
                  </span>
                  <div *ngIf="tafThresholds.weatherConditions.operationallySignificant.length === 0" class="text-muted">
                    No items selected</div>
                </div>
              </c-col>
            </c-row>

            <c-row class="mb-3">
              <c-col md="6">
                <label cLabel for="tafCancellingPhenomena">Cancelling Phenomena</label>
                <div class="p-2 border rounded bg-body min-vh-10 cursor-pointer" style="cursor: pointer;"
                  (click)="openPhenomenaModal('cancelling', 'TAF')">
                  <span *ngFor="let item of tafThresholds.weatherConditions.cancelling"
                    class="badge bg-primary me-2 mb-2 p-2">
                    {{ item }}
                  </span>
                  <div *ngIf="tafThresholds.weatherConditions.cancelling.length === 0" class="text-muted">No items
                    selected</div>
                </div>
              </c-col>
            </c-row>
          </form>
        </div>

        <div *ngIf="selectedThresholdType === 'SIGMET'">
          <form #sigmetForm="ngForm">
            <c-row class="mb-3">
              <c-col md="6">
                <label cLabel for="minFlightLevel">Minimum Flight Level</label>
                <input cFormControl id="minFlightLevel" name="minFlightLevel" type="text"
                  [(ngModel)]="sigmetThresholds.minFlightLevel"
                  (keypress)="onKeyPress($event, sigmetThresholds.minFlightLevel, false)"
                  (ngModelChange)="saveThresholds()" />
              </c-col>
              <c-col md="6">
                <label cLabel for="maxFlightLevel">Maximum Flight Level</label>
                <input cFormControl id="maxFlightLevel" name="maxFlightLevel" type="text"
                  [(ngModel)]="sigmetThresholds.maxFlightLevel"
                  (keypress)="onKeyPress($event, sigmetThresholds.maxFlightLevel, false)"
                  (ngModelChange)="saveThresholds()" />
              </c-col>
            </c-row>

            <c-row class="mb-3">
              <c-col md="6">
                <label cLabel for="sigmetMaxIntensity">Maximum Intensity</label>
                <div class="dropdown-multiselect position-relative">
                  <div class="form-select bg-body d-flex align-items-center" (click)="toggleIntensityDropdown()" tabindex="0">
                    <span class="flex-grow-1 text-truncate">
                      {{ sigmetThresholds.maxIntensity || 'Select...' }}
                    </span>
                    <span class="ms-2"><i class="bi bi-caret-down-fill"></i></span>
                  </div>
                  <div class="dropdown-menu w-100 mt-1 show" *ngIf="intensityDropdownOpen" style="max-height:200px;overflow:auto;z-index:1050;">
                    <div class="dropdown-item" *ngFor="let opt of intensityOptions" (click)="selectIntensity(opt); $event.stopPropagation();">
                      <span>{{ opt }}</span>
                    </div>
                  </div>
                </div>
              </c-col>
              <c-col md="6">
                <label cLabel for="sigmetWmoSignificant">WMO Operationally Significant</label>
                <div class="dropdown-multiselect position-relative">
                  <div class="form-select bg-body d-flex align-items-center" (click)="toggleSigmetDropdown('wmoSignificant')" tabindex="0">
                    <span class="flex-grow-1 text-truncate">
                      {{ sigmetThresholds.WMO.operationallySignificant.length ? sigmetThresholds.WMO.operationallySignificant.join(', ') : 'Select...' }}
                    </span>
                    <span class="ms-2"><i class="bi bi-caret-down-fill"></i></span>
                  </div>
                  <div class="dropdown-menu w-100 mt-1 show" *ngIf="wmoSignificantDropdownOpen" style="max-height:200px;overflow:auto;z-index:1050;">
                    <div class="dropdown-item d-flex justify-content-between align-items-center" *ngFor="let opt of sigmetWmoOptions" (click)="$event.stopPropagation();">
                      <span>{{ opt.phenomenon }}</span>
                      <c-form-check [inline]="true" class="mb-0 ms-2">
                        <input cFormCheckInput type="checkbox" [checked]="sigmetThresholds.WMO.operationallySignificant.includes(opt.phenomenon)" (change)="toggleWmoSignificant(opt.phenomenon)" style="border-color: #8a93a2;" />
                      </c-form-check>
                    </div>
                  </div>
                </div>
              </c-col>
            </c-row>

            <c-row class="mb-3">
              <c-col md="6">
                <label cLabel for="sigmetWmoCancelling">WMO Cancelling</label>
                <div class="dropdown-multiselect position-relative">
                  <div class="form-select bg-body d-flex align-items-center" (click)="toggleSigmetDropdown('wmoCancelling')" tabindex="0">
                    <span class="flex-grow-1 text-truncate">
                      {{ sigmetThresholds.WMO.cancelling.length ? sigmetThresholds.WMO.cancelling.join(', ') : 'Select...' }}
                    </span>
                    <span class="ms-2"><i class="bi bi-caret-down-fill"></i></span>
                  </div>
                  <div class="dropdown-menu w-100 mt-1 show" *ngIf="wmoCancellingDropdownOpen" style="max-height:200px;overflow:auto;z-index:1050;">
                    <div class="dropdown-item d-flex justify-content-between align-items-center" *ngFor="let opt of sigmetWmoOptions" (click)="$event.stopPropagation();">
                      <span>{{ opt.phenomenon }}</span>
                      <c-form-check [inline]="true" class="mb-0 ms-2">
                        <input cFormCheckInput type="checkbox" [checked]="sigmetThresholds.WMO.cancelling.includes(opt.phenomenon)" (change)="toggleWmoCancelling(opt.phenomenon)" style="border-color: #8a93a2;" />
                      </c-form-check>
                    </div>
                  </div>
                </div>
              </c-col>
              <c-col md="6">
                <label cLabel for="sigmetPhenomSignificant">Phenomenon Operationally Significant</label>
                <div class="dropdown-multiselect position-relative">
                  <div class="form-select bg-body d-flex align-items-center" (click)="toggleSigmetDropdown('phenomSignificant')" tabindex="0">
                    <span class="flex-grow-1 text-truncate">
                      {{ sigmetThresholds.phenomenon.operationallySignificant.length ? sigmetThresholds.phenomenon.operationallySignificant.join(', ') : 'Select...' }}
                    </span>
                    <span class="ms-2"><i class="bi bi-caret-down-fill"></i></span>
                  </div>
                  <div class="dropdown-menu w-100 mt-1 show" *ngIf="phenomSignificantDropdownOpen" style="max-height:200px;overflow:auto;z-index:1050;">
                    <div class="dropdown-item d-flex justify-content-between align-items-center" *ngFor="let opt of sigmetPhenomOptions" (click)="$event.stopPropagation();">
                      <span>{{ opt.phenomenon }}</span>
                      <c-form-check [inline]="true" class="mb-0 ms-2">
                        <input cFormCheckInput type="checkbox" [checked]="sigmetThresholds.phenomenon.operationallySignificant.includes(opt.phenomenon)" (change)="togglePhenomSignificant(opt.phenomenon)" style="border-color: #8a93a2;" />
                      </c-form-check>
                    </div>
                  </div>
                </div>
              </c-col>
            </c-row>

            <c-row class="mb-3">
              <c-col md="6">
                <label cLabel for="sigmetPhenomCancelling">Phenomenon Cancelling</label>
                <div class="dropdown-multiselect position-relative">
                  <div class="form-select bg-body d-flex align-items-center" (click)="toggleSigmetDropdown('phenomCancelling')" tabindex="0">
                    <span class="flex-grow-1 text-truncate">
                      {{ sigmetThresholds.phenomenon.cancelling.length ? sigmetThresholds.phenomenon.cancelling.join(', ') : 'Select...' }}
                    </span>
                    <span class="ms-2"><i class="bi bi-caret-down-fill"></i></span>
                  </div>
                  <div class="dropdown-menu w-100 mt-1 show" *ngIf="phenomCancellingDropdownOpen" style="max-height:200px;overflow:auto;z-index:1050;">
                    <div class="dropdown-item d-flex justify-content-between align-items-center" *ngFor="let opt of sigmetPhenomOptions" (click)="$event.stopPropagation();">
                      <span>{{ opt.phenomenon }}</span>
                      <c-form-check [inline]="true" class="mb-0 ms-2">
                        <input cFormCheckInput type="checkbox" [checked]="sigmetThresholds.phenomenon.cancelling.includes(opt.phenomenon)" (change)="togglePhenomCancelling(opt.phenomenon)" style="border-color: #8a93a2;" />
                      </c-form-check>
                    </div>
                  </div>
                </div>
              </c-col>
            </c-row>
          </form>
        </div>
      </c-card-body>
    </c-card>
  </c-col>
</c-row>
`,
      styles: ['/* src/app/views/settings/thresholds/thresholds.component.scss */\n@property --threshold-border-fill { syntax: "<percentage>"; inherits: false; initial-value: 0%; }\n.btn-close:focus {\n  box-shadow: none !important;\n  outline: none !important;\n}\nform .form-control,\nform div.border.rounded.cursor-pointer {\n  --threshold-hover-x: 50%;\n  --threshold-hover-y: 50%;\n  --threshold-border-fill: 0%;\n  border: 1px solid transparent;\n  background: linear-gradient(var(--cui-body-bg), var(--cui-body-bg)) padding-box, linear-gradient(var(--cui-border-color), var(--cui-border-color)) border-box;\n  background-clip: padding-box, border-box;\n  transition: box-shadow 0.15s ease-in-out;\n}\nform .form-control:focus {\n  outline: 0;\n  border-color: rgb(171.5, 170.5, 234.5);\n  box-shadow: 0 0 0 0.25rem rgba(88, 86, 214, 0.25);\n  background: linear-gradient(var(--cui-body-bg), var(--cui-body-bg)) padding-box, linear-gradient(rgb(171.5, 170.5, 234.5), rgb(171.5, 170.5, 234.5)) border-box;\n  background-clip: padding-box, border-box;\n  transition: box-shadow 0.15s ease-in-out;\n}\nform div.border.rounded.cursor-pointer:focus {\n  outline: 0;\n  box-shadow: none;\n}\nform .form-control.threshold-field-hovering {\n  --threshold-border-fill: 150%;\n  border-color: transparent;\n  box-shadow: none;\n  background:\n    linear-gradient(var(--cui-body-bg), var(--cui-body-bg)) padding-box,\n    radial-gradient(\n      circle at var(--threshold-hover-x) var(--threshold-hover-y),\n      #fff 0%,\n      #fff var(--threshold-border-fill),\n      var(--cui-border-color) calc(var(--threshold-border-fill) + 1%),\n      var(--cui-border-color) 100%) border-box;\n  background-clip: padding-box, border-box;\n  transition: --threshold-border-fill 1.6s ease-out, box-shadow 0.15s ease-in-out;\n}\nform div.border.rounded.cursor-pointer.threshold-field-hovering {\n  --threshold-border-fill: 150%;\n  background:\n    linear-gradient(var(--cui-body-bg), var(--cui-body-bg)) padding-box,\n    radial-gradient(\n      circle at var(--threshold-hover-x) var(--threshold-hover-y),\n      #fff 0%,\n      #fff var(--threshold-border-fill),\n      var(--cui-border-color) calc(var(--threshold-border-fill) + 1%),\n      var(--cui-border-color) 100%) border-box;\n  background-clip: padding-box, border-box;\n  transition: --threshold-border-fill 1.6s ease-out, box-shadow 0.15s ease-in-out;\n}\nform select.form-select {\n  border-color: var(--cui-border-color);\n  background-color: var(--cui-body-bg);\n  color: var(--cui-body-color);\n  box-shadow: none;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\nform select.form-select:hover {\n  border-color: var(--cui-border-color) !important;\n}\nform select.form-select.threshold-field-hovering {\n  border-color: var(--cui-border-color) !important;\n  box-shadow: none;\n}\nform select.form-select:focus {\n  outline: 0;\n  border-color: rgb(171.5, 170.5, 234.5) !important;\n  box-shadow: 0 0 0 0.25rem rgba(88, 86, 214, 0.25) !important;\n}\n.dropdown-multiselect .form-select {\n  --threshold-hover-x: 50%;\n  --threshold-hover-y: 50%;\n  --threshold-border-fill: 0%;\n  cursor: pointer;\n  min-height: 38px;\n  display: flex;\n  align-items: center;\n  padding-right: 2.5rem;\n  position: relative;\n  color: var(--cui-body-color);\n  border: 1px solid transparent;\n  border-radius: 0.375rem;\n  box-shadow: none;\n  background-image:\n    var(--cui-form-select-bg-img),\n    linear-gradient(var(--cui-body-bg), var(--cui-body-bg)),\n    linear-gradient(var(--cui-border-color), var(--cui-border-color));\n  background-position:\n    right 0.75rem center,\n    0 0,\n    0 0;\n  background-size:\n    16px 12px,\n    auto,\n    auto;\n  background-repeat: no-repeat;\n  background-origin:\n    padding-box,\n    padding-box,\n    border-box;\n  background-clip:\n    padding-box,\n    padding-box,\n    border-box;\n  transition: box-shadow 0.15s ease-in-out;\n}\n.dropdown-multiselect .form-select.threshold-field-hovering {\n  --threshold-border-fill: 150%;\n  background-image:\n    var(--cui-form-select-bg-img),\n    linear-gradient(var(--cui-body-bg), var(--cui-body-bg)),\n    radial-gradient(\n      circle at var(--threshold-hover-x) var(--threshold-hover-y),\n      #fff 0%,\n      #fff var(--threshold-border-fill),\n      var(--cui-border-color) calc(var(--threshold-border-fill) + 1%),\n      var(--cui-border-color) 100%);\n  background-position:\n    right 0.75rem center,\n    0 0,\n    0 0;\n  background-size:\n    16px 12px,\n    auto,\n    auto;\n  background-repeat: no-repeat;\n  background-origin:\n    padding-box,\n    padding-box,\n    border-box;\n  background-clip:\n    padding-box,\n    padding-box,\n    border-box;\n  transition: --threshold-border-fill 1.05s ease-out, box-shadow 0.15s ease-in-out;\n}\n.dropdown-multiselect .form-select:focus {\n  outline: 0;\n  border-color: rgb(171.5, 170.5, 234.5) !important;\n  box-shadow: 0 0 0 0.25rem rgba(88, 86, 214, 0.25) !important;\n}\n.dropdown-multiselect .dropdown-menu {\n  border-radius: 0.375rem;\n  box-shadow: none;\n  padding: 0.25rem 0;\n  animation: fadeIn 0.25s ease-out;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(-8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.dropdown-multiselect .dropdown-item {\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n  min-width: 0;\n  padding-right: 2rem;\n}\n.dropdown-multiselect .dropdown-item .ms-2 {\n  margin-left: 1.5rem !important;\n  color: #198754;\n  font-weight: bold;\n}\n.dropdown-multiselect .dropdown-item.active,\n.dropdown-multiselect .dropdown-item:active {\n  background-color: #9091c6;\n  color: #212529;\n}\n.dropdown-multiselect .bi-caret-down-fill {\n  display: none;\n}\n.dropdown-multiselect .dropdown-item.d-flex.justify-content-between.align-items-center {\n  position: relative;\n  padding-right: 0;\n  padding-left: 0.75rem;\n}\n.dropdown-multiselect .dropdown-item.d-flex.justify-content-between.align-items-center.active,\n.dropdown-multiselect .dropdown-item.d-flex.justify-content-between.align-items-center:active {\n  background-color: transparent;\n  color: inherit;\n}\n.dropdown-multiselect .dropdown-item.d-flex.justify-content-between.align-items-center > span {\n  display: block;\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  padding-right: 2rem;\n}\n.dropdown-multiselect .dropdown-item.d-flex.justify-content-between.align-items-center c-form-check,\n.dropdown-multiselect .dropdown-item.d-flex.justify-content-between.align-items-center .form-check {\n  position: absolute;\n  right: 0.75rem;\n  top: 50%;\n  transform: translateY(-50%);\n  margin: 0;\n  padding: 0.25rem 0;\n}\n.dropdown-multiselect .dropdown-item.d-flex.justify-content-between.align-items-center c-form-check .form-check-input,\n.dropdown-multiselect .dropdown-item.d-flex.justify-content-between.align-items-center .form-check .form-check-input,\n.dropdown-multiselect .dropdown-item.d-flex.justify-content-between.align-items-center .form-check-input {\n  margin-right: 0;\n  margin-left: 0.25rem;\n}\n/*# sourceMappingURL=thresholds.component.css.map */\n']
    }]
  }], null, {
    onDocumentClick: [{
      type: HostListener,
      args: ["document:click", ["$event"]]
    }], onFocusOut: [{
      type: HostListener,
      args: ["focusout", ["$event"]]
    }], beforeUnload: [{
      type: HostListener,
      args: ["window:beforeunload", ["$event"]]
    }]
  });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ThresholdsComponent, {
    className: "ThresholdsComponent",
    filePath: "src/app/views/settings/thresholds/thresholds.component.ts",
    lineNumber: 84
  });
})();
export {
  ThresholdsComponent
};
//# sourceMappingURL=chunk-WOQHFT6H.js.map
