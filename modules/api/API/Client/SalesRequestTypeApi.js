/**
 * @fileoverview AUTOMATICALLY GENERATED service for API.Client.SalesRequestTypeApi.
 * Do not edit this file by hand or your changes will be lost next time it is
 * generated.
 *
 * The Direct Portal REST API
 * Version: v1
 * Generated by: io.swagger.codegen.languages.JavascriptClosureAngularClientCodegen
 */
/**
 * @license Use under Direct Portal License
 * http://wwww.direct-portal.com
 */

goog.provide('API.Client.SalesRequestTypeApi');

goog.require('API.Client.DPContactAddress');
goog.require('API.Client.DPContactDetail');
goog.require('API.Client.DPSalesRequestType');

/**
 * @constructor
 * @param {!angular.$http} $http
 * @param {!Object} $httpParamSerializer
 * @param {!angular.$injector} $injector
 * @struct
 */
API.Client.SalesRequestTypeApi = function($http, $httpParamSerializer, $injector) {
  /** @private {!string} */
  this.basePath_ = $injector.has('SalesRequestTypeApiBasePath') ?
                   /** @type {!string} */ ($injector.get('SalesRequestTypeApiBasePath')) :
                   'https://localhost/';

  /** @private {!Object<string, string>} */
  this.defaultHeaders_ = $injector.has('SalesRequestTypeApiDefaultHeaders') ?
                   /** @type {!Object<string, string>} */ (
                       $injector.get('SalesRequestTypeApiDefaultHeaders')) :
                   {};

  /** @private {!angular.$http} */
  this.http_ = $http;

  /** @package {!Object} */
  this.httpParamSerializer = $injector.get('$httpParamSerializer');
}
API.Client.SalesRequestTypeApi.$inject = ['$http', '$httpParamSerializer', '$injector'];

/**
 * 
 * 
 * @param {!number} id 
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise}
 */
API.Client.SalesRequestTypeApi.prototype.apiSalesRequestTypeActivateByIdGet = function(id, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/api/SalesRequestType/Activate/{id}'
      .replace('{' + 'id' + '}', String(id));

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  // verify required parameter 'id' is set
  if (!id) {
    throw new Error('Missing required parameter id when calling apiSalesRequestTypeActivateByIdGet');
  }
  /** @type {!Object} */
  var httpRequestParams = {
    method: 'GET',
    url: path,
    json: true,
            params: queryParameters,
    headers: headerParams
  };

  if (opt_extraHttpRequestParams) {
    httpRequestParams = angular.extend(httpRequestParams, opt_extraHttpRequestParams);
  }

  return (/** @type {?} */ (this.http_))(httpRequestParams);
}

/**
 * 
 * 
 * @param {!number=} opt_skip 
 * @param {!number=} opt_take 
 * @param {!string=} opt_fields 
 * @param {!string=} opt_include 
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise}
 */
API.Client.SalesRequestTypeApi.prototype.apiSalesRequestTypeActiveGet = function(opt_skip, opt_take, opt_fields, opt_include, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/api/SalesRequestType/Active';

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  if (opt_skip !== undefined) {
    queryParameters['skip'] = opt_skip;
  }

  if (opt_take !== undefined) {
    queryParameters['take'] = opt_take;
  }

  if (opt_fields !== undefined) {
    queryParameters['fields'] = opt_fields;
  }

  if (opt_include !== undefined) {
    queryParameters['include'] = opt_include;
  }

  /** @type {!Object} */
  var httpRequestParams = {
    method: 'GET',
    url: path,
    json: true,
            params: queryParameters,
    headers: headerParams
  };

  if (opt_extraHttpRequestParams) {
    httpRequestParams = angular.extend(httpRequestParams, opt_extraHttpRequestParams);
  }

  return (/** @type {?} */ (this.http_))(httpRequestParams);
}

/**
 * 
 * 
 * @param {!number} id 
 * @param {!number=} opt_skip 
 * @param {!number=} opt_take 
 * @param {!string=} opt_fields 
 * @param {!string=} opt_include 
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise}
 */
API.Client.SalesRequestTypeApi.prototype.apiSalesRequestTypeByIdGet = function(id, opt_skip, opt_take, opt_fields, opt_include, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/api/SalesRequestType/{id}'
      .replace('{' + 'id' + '}', String(id));

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  // verify required parameter 'id' is set
  if (!id) {
    throw new Error('Missing required parameter id when calling apiSalesRequestTypeByIdGet');
  }
  if (opt_skip !== undefined) {
    queryParameters['skip'] = opt_skip;
  }

  if (opt_take !== undefined) {
    queryParameters['take'] = opt_take;
  }

  if (opt_fields !== undefined) {
    queryParameters['fields'] = opt_fields;
  }

  if (opt_include !== undefined) {
    queryParameters['include'] = opt_include;
  }

  /** @type {!Object} */
  var httpRequestParams = {
    method: 'GET',
    url: path,
    json: true,
            params: queryParameters,
    headers: headerParams
  };

  if (opt_extraHttpRequestParams) {
    httpRequestParams = angular.extend(httpRequestParams, opt_extraHttpRequestParams);
  }

  return (/** @type {?} */ (this.http_))(httpRequestParams);
}

/**
 * 
 * 
 * @param {!string} id 
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise}
 */
API.Client.SalesRequestTypeApi.prototype.apiSalesRequestTypeByNameByIdGet = function(id, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/api/SalesRequestType/ByName/{id}'
      .replace('{' + 'id' + '}', String(id));

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  // verify required parameter 'id' is set
  if (!id) {
    throw new Error('Missing required parameter id when calling apiSalesRequestTypeByNameByIdGet');
  }
  /** @type {!Object} */
  var httpRequestParams = {
    method: 'GET',
    url: path,
    json: true,
            params: queryParameters,
    headers: headerParams
  };

  if (opt_extraHttpRequestParams) {
    httpRequestParams = angular.extend(httpRequestParams, opt_extraHttpRequestParams);
  }

  return (/** @type {?} */ (this.http_))(httpRequestParams);
}

/**
 * 
 * 
 * @param {!DPSalesRequestType=} opt_value 
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise}
 */
API.Client.SalesRequestTypeApi.prototype.apiSalesRequestTypeByNamePost = function(opt_value, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/api/SalesRequestType/ByName';

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  /** @type {!Object} */
  var httpRequestParams = {
    method: 'POST',
    url: path,
    json: true,
    data: opt_value,
        params: queryParameters,
    headers: headerParams
  };

  if (opt_extraHttpRequestParams) {
    httpRequestParams = angular.extend(httpRequestParams, opt_extraHttpRequestParams);
  }

  return (/** @type {?} */ (this.http_))(httpRequestParams);
}

/**
 * 
 * 
 * @param {!number} id 
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise}
 */
API.Client.SalesRequestTypeApi.prototype.apiSalesRequestTypeContactAddressesByIdGet = function(id, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/api/SalesRequestType/ContactAddresses/{id}'
      .replace('{' + 'id' + '}', String(id));

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  // verify required parameter 'id' is set
  if (!id) {
    throw new Error('Missing required parameter id when calling apiSalesRequestTypeContactAddressesByIdGet');
  }
  /** @type {!Object} */
  var httpRequestParams = {
    method: 'GET',
    url: path,
    json: true,
            params: queryParameters,
    headers: headerParams
  };

  if (opt_extraHttpRequestParams) {
    httpRequestParams = angular.extend(httpRequestParams, opt_extraHttpRequestParams);
  }

  return (/** @type {?} */ (this.http_))(httpRequestParams);
}

/**
 * 
 * 
 * @param {!number} id 
 * @param {!Array<!API.Client.DPContactAddress>=} opt_model 
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise}
 */
API.Client.SalesRequestTypeApi.prototype.apiSalesRequestTypeContactAddressesByIdPost = function(id, opt_model, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/api/SalesRequestType/ContactAddresses/{id}'
      .replace('{' + 'id' + '}', String(id));

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  // verify required parameter 'id' is set
  if (!id) {
    throw new Error('Missing required parameter id when calling apiSalesRequestTypeContactAddressesByIdPost');
  }
  /** @type {!Object} */
  var httpRequestParams = {
    method: 'POST',
    url: path,
    json: true,
    data: opt_model,
        params: queryParameters,
    headers: headerParams
  };

  if (opt_extraHttpRequestParams) {
    httpRequestParams = angular.extend(httpRequestParams, opt_extraHttpRequestParams);
  }

  return (/** @type {?} */ (this.http_))(httpRequestParams);
}

/**
 * 
 * 
 * @param {!number} id 
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise}
 */
API.Client.SalesRequestTypeApi.prototype.apiSalesRequestTypeContactDetailsByIdGet = function(id, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/api/SalesRequestType/ContactDetails/{id}'
      .replace('{' + 'id' + '}', String(id));

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  // verify required parameter 'id' is set
  if (!id) {
    throw new Error('Missing required parameter id when calling apiSalesRequestTypeContactDetailsByIdGet');
  }
  /** @type {!Object} */
  var httpRequestParams = {
    method: 'GET',
    url: path,
    json: true,
            params: queryParameters,
    headers: headerParams
  };

  if (opt_extraHttpRequestParams) {
    httpRequestParams = angular.extend(httpRequestParams, opt_extraHttpRequestParams);
  }

  return (/** @type {?} */ (this.http_))(httpRequestParams);
}

/**
 * 
 * 
 * @param {!number} id 
 * @param {!Array<!API.Client.DPContactDetail>=} opt_model 
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise}
 */
API.Client.SalesRequestTypeApi.prototype.apiSalesRequestTypeContactDetailsByIdPost = function(id, opt_model, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/api/SalesRequestType/ContactDetails/{id}'
      .replace('{' + 'id' + '}', String(id));

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  // verify required parameter 'id' is set
  if (!id) {
    throw new Error('Missing required parameter id when calling apiSalesRequestTypeContactDetailsByIdPost');
  }
  /** @type {!Object} */
  var httpRequestParams = {
    method: 'POST',
    url: path,
    json: true,
    data: opt_model,
        params: queryParameters,
    headers: headerParams
  };

  if (opt_extraHttpRequestParams) {
    httpRequestParams = angular.extend(httpRequestParams, opt_extraHttpRequestParams);
  }

  return (/** @type {?} */ (this.http_))(httpRequestParams);
}

/**
 * 
 * 
 * @param {!number} id 
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise}
 */
API.Client.SalesRequestTypeApi.prototype.apiSalesRequestTypeDeactivateByIdGet = function(id, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/api/SalesRequestType/Deactivate/{id}'
      .replace('{' + 'id' + '}', String(id));

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  // verify required parameter 'id' is set
  if (!id) {
    throw new Error('Missing required parameter id when calling apiSalesRequestTypeDeactivateByIdGet');
  }
  /** @type {!Object} */
  var httpRequestParams = {
    method: 'GET',
    url: path,
    json: true,
            params: queryParameters,
    headers: headerParams
  };

  if (opt_extraHttpRequestParams) {
    httpRequestParams = angular.extend(httpRequestParams, opt_extraHttpRequestParams);
  }

  return (/** @type {?} */ (this.http_))(httpRequestParams);
}

/**
 * 
 * 
 * @param {!number=} opt_skip 
 * @param {!number=} opt_take 
 * @param {!string=} opt_fields 
 * @param {!string=} opt_include 
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise}
 */
API.Client.SalesRequestTypeApi.prototype.apiSalesRequestTypeGet = function(opt_skip, opt_take, opt_fields, opt_include, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/api/SalesRequestType';

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  if (opt_skip !== undefined) {
    queryParameters['skip'] = opt_skip;
  }

  if (opt_take !== undefined) {
    queryParameters['take'] = opt_take;
  }

  if (opt_fields !== undefined) {
    queryParameters['fields'] = opt_fields;
  }

  if (opt_include !== undefined) {
    queryParameters['include'] = opt_include;
  }

  /** @type {!Object} */
  var httpRequestParams = {
    method: 'GET',
    url: path,
    json: true,
            params: queryParameters,
    headers: headerParams
  };

  if (opt_extraHttpRequestParams) {
    httpRequestParams = angular.extend(httpRequestParams, opt_extraHttpRequestParams);
  }

  return (/** @type {?} */ (this.http_))(httpRequestParams);
}

/**
 * 
 * 
 * @param {!number} id 
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise}
 */
API.Client.SalesRequestTypeApi.prototype.apiSalesRequestTypeNotesByIdGet = function(id, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/api/SalesRequestType/Notes/{id}'
      .replace('{' + 'id' + '}', String(id));

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  // verify required parameter 'id' is set
  if (!id) {
    throw new Error('Missing required parameter id when calling apiSalesRequestTypeNotesByIdGet');
  }
  /** @type {!Object} */
  var httpRequestParams = {
    method: 'GET',
    url: path,
    json: true,
            params: queryParameters,
    headers: headerParams
  };

  if (opt_extraHttpRequestParams) {
    httpRequestParams = angular.extend(httpRequestParams, opt_extraHttpRequestParams);
  }

  return (/** @type {?} */ (this.http_))(httpRequestParams);
}

/**
 * 
 * 
 * @param {!DPSalesRequestType=} opt_value 
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise}
 */
API.Client.SalesRequestTypeApi.prototype.apiSalesRequestTypePost = function(opt_value, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/api/SalesRequestType';

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  /** @type {!Object} */
  var httpRequestParams = {
    method: 'POST',
    url: path,
    json: true,
    data: opt_value,
        params: queryParameters,
    headers: headerParams
  };

  if (opt_extraHttpRequestParams) {
    httpRequestParams = angular.extend(httpRequestParams, opt_extraHttpRequestParams);
  }

  return (/** @type {?} */ (this.http_))(httpRequestParams);
}

/**
 * 
 * 
 * @param {!DPSalesRequestType=} opt_value 
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise}
 */
API.Client.SalesRequestTypeApi.prototype.apiSalesRequestTypePut = function(opt_value, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/api/SalesRequestType';

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  /** @type {!Object} */
  var httpRequestParams = {
    method: 'PUT',
    url: path,
    json: true,
    data: opt_value,
        params: queryParameters,
    headers: headerParams
  };

  if (opt_extraHttpRequestParams) {
    httpRequestParams = angular.extend(httpRequestParams, opt_extraHttpRequestParams);
  }

  return (/** @type {?} */ (this.http_))(httpRequestParams);
}

/**
 * 
 * 
 * @param {!number} id 
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise}
 */
API.Client.SalesRequestTypeApi.prototype.apiSalesRequestTypeRelationshipsByIdGet = function(id, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/api/SalesRequestType/Relationships/{id}'
      .replace('{' + 'id' + '}', String(id));

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  // verify required parameter 'id' is set
  if (!id) {
    throw new Error('Missing required parameter id when calling apiSalesRequestTypeRelationshipsByIdGet');
  }
  /** @type {!Object} */
  var httpRequestParams = {
    method: 'GET',
    url: path,
    json: true,
            params: queryParameters,
    headers: headerParams
  };

  if (opt_extraHttpRequestParams) {
    httpRequestParams = angular.extend(httpRequestParams, opt_extraHttpRequestParams);
  }

  return (/** @type {?} */ (this.http_))(httpRequestParams);
}

/**
 * 
 * 
 * @param {!number} id 
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise}
 */
API.Client.SalesRequestTypeApi.prototype.apiSalesRequestTypeSetAsDefaultByIdGet = function(id, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/api/SalesRequestType/SetAsDefault/{id}'
      .replace('{' + 'id' + '}', String(id));

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  // verify required parameter 'id' is set
  if (!id) {
    throw new Error('Missing required parameter id when calling apiSalesRequestTypeSetAsDefaultByIdGet');
  }
  /** @type {!Object} */
  var httpRequestParams = {
    method: 'GET',
    url: path,
    json: true,
            params: queryParameters,
    headers: headerParams
  };

  if (opt_extraHttpRequestParams) {
    httpRequestParams = angular.extend(httpRequestParams, opt_extraHttpRequestParams);
  }

  return (/** @type {?} */ (this.http_))(httpRequestParams);
}

/**
 * 
 * 
 * @param {!number} id 
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise}
 */
API.Client.SalesRequestTypeApi.prototype.apiSalesRequestTypeTranslationsByIdGet = function(id, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/api/SalesRequestType/Translations/{id}'
      .replace('{' + 'id' + '}', String(id));

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  // verify required parameter 'id' is set
  if (!id) {
    throw new Error('Missing required parameter id when calling apiSalesRequestTypeTranslationsByIdGet');
  }
  /** @type {!Object} */
  var httpRequestParams = {
    method: 'GET',
    url: path,
    json: true,
            params: queryParameters,
    headers: headerParams
  };

  if (opt_extraHttpRequestParams) {
    httpRequestParams = angular.extend(httpRequestParams, opt_extraHttpRequestParams);
  }

  return (/** @type {?} */ (this.http_))(httpRequestParams);
}