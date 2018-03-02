'use strict';
class Response {

    /**
     * Return Error message by error code
     * @param errorCode {string} error code
     * @returns {string} error message
     */
    static getErrorMsg(errorCode) {
        let errorMsgList = {
            '400': 'Bad Request',
            '401': 'Unauthorized',
            '402': 'Payment Required',
            '403': 'Forbidden',
            '404': 'Not Found',
            '405': 'Method Not Allowed',
            '406': 'Not Acceptable',
            '407': 'Proxy Authentication Required',
            '408': 'Request Timeout',
            '409': 'Conflict',
            '415': 'Unsupported Media Type',
            '417': 'Expectation Failed',
            '500': 'Internal Server Error',
            '501': 'Not Implemented',
            '502': 'Bad Gateway',
            '503': 'Service Unavailable'
        };

        return typeof(errorMsgList[errorCode]) != 'undefined' ? errorMsgList[errorCode] : 'Internal Server Error';
    }

    /**
     * Render page
     * @param response {object} http response
     * @param viewPage {string} view page path
     * @param data {object} data
     * @param layout {string} view layout
     */
    static render(response, viewPage, data = {}, layout) {
        let options = {};
        options.data = data;
        if (layout)
            options.layout = layout;

        response.render(viewPage, options);
    }

    /**
     * Render error page
     * @param response {object} http response
     * @param errorCode {string} error code
     * @param error {object} error
     */
    static renderErrorPage(response, errorCode, error) {
        let options = {};
        options.layout = null;
        options.data = {
            errorMessage: this.getErrorMsg(errorCode),
            errorStack: error.stack
        };

        response.status(errorCode);
        response.render('error/errorPage', options);
    }

    static responseApi(response, data) {
        let apiData = {
            'statusCode': '200',
            'data': data
        };

        response.status('200');
        response.json({data: apiData});
    }

    static responseApiError(response, errorCode, errorMsg) {
        let apiData = {
            'errorCode': errorCode,
            'message': errorMsg
        };

        response.status(errorCode);
        response.json({data: apiData});
    }
}

/**
 * @memberOf Response
 * @type {Response}
 */
module.exports = Response;