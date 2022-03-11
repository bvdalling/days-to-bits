"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NUMBERS = exports.SHORT = exports.FULL = void 0;
var CONVERT_TO_DECIMAL = function (decimal) {
    return ("00000000" + Number(decimal).toString(2)).slice(-8);
};
exports.FULL = 0;
exports.SHORT = 1;
exports.NUMBERS = 2;
var BIT_DAYS = {
    6: '00000001',
    5: '00000010',
    4: '00000100',
    3: '00001000',
    2: '00010000',
    1: '00100000',
    0: '01000000', // Sunday    => 64
};
var DAYS_TO_BITS = {
    6: 1,
    5: 2,
    4: 4,
    3: 8,
    2: 16,
    1: 32,
    0: 64, // Sunday
};
var STRING_DAYS = {
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
    0: 'Sunday', // Sunday    => 64
};
var STRING_SHORT_DAYS = {
    1: 'Mon',
    2: 'Tue',
    3: 'Wed',
    4: 'Thu',
    5: 'Fri',
    6: 'Sat',
    0: 'Sun', // Sunday    => 64
};
var Bit = {
    // Package an array of day values (0-based) into a decimal
    packDays: function (days) {
        var packed = 0;
        days.forEach(function (day) {
            packed += DAYS_TO_BITS[day];
        });
        return packed;
    },
    // Extract the Day Values from the 
    unpackDays: function (decimal, type) {
        if (type === void 0) { type = exports.NUMBERS; }
        var binary = CONVERT_TO_DECIMAL(decimal);
        var days = [];
        Object.keys(BIT_DAYS).forEach(function (key) {
            var day = CONVERT_TO_DECIMAL(key);
            if (parseInt(BIT_DAYS[key], 2) & parseInt(binary, 2))
                days.push(type === exports.FULL ? STRING_DAYS[parseInt(day, 2)] : type === exports.SHORT ? STRING_SHORT_DAYS[parseInt(day, 2)] : parseInt(day, 2));
        });
        return days;
    }
};
exports.default = Bit;
