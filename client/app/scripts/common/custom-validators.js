"use strict";
var CustomValidators = (function () {
    function CustomValidators() {
    }
    CustomValidators.areEqual = function (group) {
        var values = [];
        // push all values in one array
        for (var controlName in group.controls) {
            if (group.controls.hasOwnProperty(controlName)) {
                values.push(group.controls[controlName].value);
            }
        }
        // compare these values
        for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
            var value = values_1[_i];
            if (value !== values[0]) {
                return {
                    areEqual: {
                        message: value + " not equal " + values[0]
                    }
                };
            }
        }
        return null;
    };
    return CustomValidators;
}());
exports.CustomValidators = CustomValidators;
//# sourceMappingURL=custom-validators.js.map