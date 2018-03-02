'use strict';
module.exports = {
    /**
     * Validate integer
     * @param {object} model model
     * @param {object} property property of model
     * @param {object} options options of model
     * @methodOf helpers.modelValidator
     */
    integer: function (model, property, options) {
        if (typeof(model[property]()) != "undefined") {
            var value = parseInt(model[property](), 10);
            if (isNaN(value)) {
                model.addError(property, options.message);
            }
        }
    }
};