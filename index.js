// population of africa 1287269147
var africaPop = 1287269147;
var AmountInput = /** @class */ (function () {
    function AmountInput() {
        this.amount = 0;
    }
    AmountInput.prototype.showTooltip = function () {
        setTimeout(function () {
        }, 2500);
    };
    AmountInput.prototype.formatMillion = function () {
        return this.amount / 1000000 + 'M';
    };
    AmountInput.MAX_ALLOWED = 99999999;
    return AmountInput;
}());
