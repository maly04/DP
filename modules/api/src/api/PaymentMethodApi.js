/**
 * Direct Portal REST API
 * The Direct Portal REST API
 *
 * OpenAPI spec version: v1
 * Contact: info@direct-portal.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/DPContactAddress', 'model/DPContactDetail', 'model/DPPaymentMethod'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/DPContactAddress'), require('../model/DPContactDetail'), require('../model/DPPaymentMethod'));
  } else {
    // Browser globals (root is window)
    if (!root.DirectPortalRestApi) {
      root.DirectPortalRestApi = {};
    }
    root.DirectPortalRestApi.PaymentMethodApi = factory(root.DirectPortalRestApi.ApiClient, root.DirectPortalRestApi.DPContactAddress, root.DirectPortalRestApi.DPContactDetail, root.DirectPortalRestApi.DPPaymentMethod);
  }
}(this, function(ApiClient, DPContactAddress, DPContactDetail, DPPaymentMethod) {
  'use strict';

  /**
   * PaymentMethod service.
   * @module api/PaymentMethodApi
   * @version v1
   */

  /**
   * Constructs a new PaymentMethodApi. 
   * @alias module:api/PaymentMethodApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the apiPaymentMethodActivateByIdGet operation.
     * @callback module:api/PaymentMethodApi~apiPaymentMethodActivateByIdGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id 
     * @param {module:api/PaymentMethodApi~apiPaymentMethodActivateByIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.apiPaymentMethodActivateByIdGet = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling apiPaymentMethodActivateByIdGet");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/PaymentMethod/Activate/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the apiPaymentMethodActiveGet operation.
     * @callback module:api/PaymentMethodApi~apiPaymentMethodActiveGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {Number} opts.skip 
     * @param {Number} opts.take 
     * @param {String} opts.fields 
     * @param {String} opts.include 
     * @param {module:api/PaymentMethodApi~apiPaymentMethodActiveGetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.apiPaymentMethodActiveGet = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'skip': opts['skip'],
        'take': opts['take'],
        'fields': opts['fields'],
        'include': opts['include']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/PaymentMethod/Active', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the apiPaymentMethodByIdGet operation.
     * @callback module:api/PaymentMethodApi~apiPaymentMethodByIdGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.skip 
     * @param {Number} opts.take 
     * @param {String} opts.fields 
     * @param {String} opts.include 
     * @param {module:api/PaymentMethodApi~apiPaymentMethodByIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.apiPaymentMethodByIdGet = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling apiPaymentMethodByIdGet");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'skip': opts['skip'],
        'take': opts['take'],
        'fields': opts['fields'],
        'include': opts['include']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/PaymentMethod/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the apiPaymentMethodByNameByIdGet operation.
     * @callback module:api/PaymentMethodApi~apiPaymentMethodByNameByIdGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} id 
     * @param {module:api/PaymentMethodApi~apiPaymentMethodByNameByIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.apiPaymentMethodByNameByIdGet = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling apiPaymentMethodByNameByIdGet");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/PaymentMethod/ByName/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the apiPaymentMethodByNamePost operation.
     * @callback module:api/PaymentMethodApi~apiPaymentMethodByNamePostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/DPPaymentMethod} opts.value 
     * @param {module:api/PaymentMethodApi~apiPaymentMethodByNamePostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.apiPaymentMethodByNamePost = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['value'];


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json', 'text/json', 'application/json-patch+json'];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/PaymentMethod/ByName', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the apiPaymentMethodContactAddressesByIdGet operation.
     * @callback module:api/PaymentMethodApi~apiPaymentMethodContactAddressesByIdGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id 
     * @param {module:api/PaymentMethodApi~apiPaymentMethodContactAddressesByIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.apiPaymentMethodContactAddressesByIdGet = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling apiPaymentMethodContactAddressesByIdGet");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/PaymentMethod/ContactAddresses/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the apiPaymentMethodContactAddressesByIdPost operation.
     * @callback module:api/PaymentMethodApi~apiPaymentMethodContactAddressesByIdPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id 
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/DPContactAddress>} opts.model 
     * @param {module:api/PaymentMethodApi~apiPaymentMethodContactAddressesByIdPostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.apiPaymentMethodContactAddressesByIdPost = function(id, opts, callback) {
      opts = opts || {};
      var postBody = opts['model'];

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling apiPaymentMethodContactAddressesByIdPost");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json', 'text/json', 'application/json-patch+json'];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/PaymentMethod/ContactAddresses/{id}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the apiPaymentMethodContactDetailsByIdGet operation.
     * @callback module:api/PaymentMethodApi~apiPaymentMethodContactDetailsByIdGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id 
     * @param {module:api/PaymentMethodApi~apiPaymentMethodContactDetailsByIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.apiPaymentMethodContactDetailsByIdGet = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling apiPaymentMethodContactDetailsByIdGet");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/PaymentMethod/ContactDetails/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the apiPaymentMethodContactDetailsByIdPost operation.
     * @callback module:api/PaymentMethodApi~apiPaymentMethodContactDetailsByIdPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id 
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/DPContactDetail>} opts.model 
     * @param {module:api/PaymentMethodApi~apiPaymentMethodContactDetailsByIdPostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.apiPaymentMethodContactDetailsByIdPost = function(id, opts, callback) {
      opts = opts || {};
      var postBody = opts['model'];

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling apiPaymentMethodContactDetailsByIdPost");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json', 'text/json', 'application/json-patch+json'];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/PaymentMethod/ContactDetails/{id}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the apiPaymentMethodDeactivateByIdGet operation.
     * @callback module:api/PaymentMethodApi~apiPaymentMethodDeactivateByIdGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id 
     * @param {module:api/PaymentMethodApi~apiPaymentMethodDeactivateByIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.apiPaymentMethodDeactivateByIdGet = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling apiPaymentMethodDeactivateByIdGet");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/PaymentMethod/Deactivate/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the apiPaymentMethodGet operation.
     * @callback module:api/PaymentMethodApi~apiPaymentMethodGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {Number} opts.skip 
     * @param {Number} opts.take 
     * @param {String} opts.fields 
     * @param {String} opts.include 
     * @param {module:api/PaymentMethodApi~apiPaymentMethodGetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.apiPaymentMethodGet = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'skip': opts['skip'],
        'take': opts['take'],
        'fields': opts['fields'],
        'include': opts['include']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/PaymentMethod', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the apiPaymentMethodNotesByIdGet operation.
     * @callback module:api/PaymentMethodApi~apiPaymentMethodNotesByIdGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id 
     * @param {module:api/PaymentMethodApi~apiPaymentMethodNotesByIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.apiPaymentMethodNotesByIdGet = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling apiPaymentMethodNotesByIdGet");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/PaymentMethod/Notes/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the apiPaymentMethodPost operation.
     * @callback module:api/PaymentMethodApi~apiPaymentMethodPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/DPPaymentMethod} opts.value 
     * @param {module:api/PaymentMethodApi~apiPaymentMethodPostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.apiPaymentMethodPost = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['value'];


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json', 'text/json', 'application/json-patch+json'];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/PaymentMethod', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the apiPaymentMethodPut operation.
     * @callback module:api/PaymentMethodApi~apiPaymentMethodPutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/DPPaymentMethod} opts.value 
     * @param {module:api/PaymentMethodApi~apiPaymentMethodPutCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.apiPaymentMethodPut = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['value'];


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json', 'text/json', 'application/json-patch+json'];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/PaymentMethod', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the apiPaymentMethodRelationshipsByIdGet operation.
     * @callback module:api/PaymentMethodApi~apiPaymentMethodRelationshipsByIdGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id 
     * @param {module:api/PaymentMethodApi~apiPaymentMethodRelationshipsByIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.apiPaymentMethodRelationshipsByIdGet = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling apiPaymentMethodRelationshipsByIdGet");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/PaymentMethod/Relationships/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the apiPaymentMethodSetAsDefaultByIdGet operation.
     * @callback module:api/PaymentMethodApi~apiPaymentMethodSetAsDefaultByIdGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id 
     * @param {module:api/PaymentMethodApi~apiPaymentMethodSetAsDefaultByIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.apiPaymentMethodSetAsDefaultByIdGet = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling apiPaymentMethodSetAsDefaultByIdGet");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/PaymentMethod/SetAsDefault/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the apiPaymentMethodTranslationsByIdGet operation.
     * @callback module:api/PaymentMethodApi~apiPaymentMethodTranslationsByIdGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id 
     * @param {module:api/PaymentMethodApi~apiPaymentMethodTranslationsByIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.apiPaymentMethodTranslationsByIdGet = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling apiPaymentMethodTranslationsByIdGet");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/PaymentMethod/Translations/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
