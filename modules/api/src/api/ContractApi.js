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
    define(['ApiClient', 'model/DPContactAddress', 'model/DPContactDetail', 'model/DPContract'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/DPContactAddress'), require('../model/DPContactDetail'), require('../model/DPContract'));
  } else {
    // Browser globals (root is window)
    if (!root.DirectPortalRestApi) {
      root.DirectPortalRestApi = {};
    }
    root.DirectPortalRestApi.ContractApi = factory(root.DirectPortalRestApi.ApiClient, root.DirectPortalRestApi.DPContactAddress, root.DirectPortalRestApi.DPContactDetail, root.DirectPortalRestApi.DPContract);
  }
}(this, function(ApiClient, DPContactAddress, DPContactDetail, DPContract) {
  'use strict';

  /**
   * Contract service.
   * @module api/ContractApi
   * @version v1
   */

  /**
   * Constructs a new ContractApi. 
   * @alias module:api/ContractApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the apiContractActivateByIdGet operation.
     * @callback module:api/ContractApi~apiContractActivateByIdGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id 
     * @param {module:api/ContractApi~apiContractActivateByIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.apiContractActivateByIdGet = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling apiContractActivateByIdGet");
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
        '/api/Contract/Activate/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the apiContractActiveGet operation.
     * @callback module:api/ContractApi~apiContractActiveGetCallback
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
     * @param {module:api/ContractApi~apiContractActiveGetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.apiContractActiveGet = function(opts, callback) {
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
        '/api/Contract/Active', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the apiContractByIdGet operation.
     * @callback module:api/ContractApi~apiContractByIdGetCallback
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
     * @param {module:api/ContractApi~apiContractByIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.apiContractByIdGet = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling apiContractByIdGet");
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
        '/api/Contract/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the apiContractByNameByIdGet operation.
     * @callback module:api/ContractApi~apiContractByNameByIdGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} id 
     * @param {module:api/ContractApi~apiContractByNameByIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.apiContractByNameByIdGet = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling apiContractByNameByIdGet");
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
        '/api/Contract/ByName/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the apiContractByNamePost operation.
     * @callback module:api/ContractApi~apiContractByNamePostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/DPContract} opts.value 
     * @param {module:api/ContractApi~apiContractByNamePostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.apiContractByNamePost = function(opts, callback) {
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
        '/api/Contract/ByName', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the apiContractContactAddressesByIdGet operation.
     * @callback module:api/ContractApi~apiContractContactAddressesByIdGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id 
     * @param {module:api/ContractApi~apiContractContactAddressesByIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.apiContractContactAddressesByIdGet = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling apiContractContactAddressesByIdGet");
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
        '/api/Contract/ContactAddresses/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the apiContractContactAddressesByIdPost operation.
     * @callback module:api/ContractApi~apiContractContactAddressesByIdPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id 
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/DPContactAddress>} opts.model 
     * @param {module:api/ContractApi~apiContractContactAddressesByIdPostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.apiContractContactAddressesByIdPost = function(id, opts, callback) {
      opts = opts || {};
      var postBody = opts['model'];

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling apiContractContactAddressesByIdPost");
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
        '/api/Contract/ContactAddresses/{id}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the apiContractContactDetailsByIdGet operation.
     * @callback module:api/ContractApi~apiContractContactDetailsByIdGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id 
     * @param {module:api/ContractApi~apiContractContactDetailsByIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.apiContractContactDetailsByIdGet = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling apiContractContactDetailsByIdGet");
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
        '/api/Contract/ContactDetails/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the apiContractContactDetailsByIdPost operation.
     * @callback module:api/ContractApi~apiContractContactDetailsByIdPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id 
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/DPContactDetail>} opts.model 
     * @param {module:api/ContractApi~apiContractContactDetailsByIdPostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.apiContractContactDetailsByIdPost = function(id, opts, callback) {
      opts = opts || {};
      var postBody = opts['model'];

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling apiContractContactDetailsByIdPost");
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
        '/api/Contract/ContactDetails/{id}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the apiContractDeactivateByIdGet operation.
     * @callback module:api/ContractApi~apiContractDeactivateByIdGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id 
     * @param {module:api/ContractApi~apiContractDeactivateByIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.apiContractDeactivateByIdGet = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling apiContractDeactivateByIdGet");
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
        '/api/Contract/Deactivate/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the apiContractGet operation.
     * @callback module:api/ContractApi~apiContractGetCallback
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
     * @param {module:api/ContractApi~apiContractGetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.apiContractGet = function(opts, callback) {
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
        '/api/Contract', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the apiContractNotesByIdGet operation.
     * @callback module:api/ContractApi~apiContractNotesByIdGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id 
     * @param {module:api/ContractApi~apiContractNotesByIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.apiContractNotesByIdGet = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling apiContractNotesByIdGet");
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
        '/api/Contract/Notes/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the apiContractPost operation.
     * @callback module:api/ContractApi~apiContractPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/DPContract} opts.value 
     * @param {module:api/ContractApi~apiContractPostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.apiContractPost = function(opts, callback) {
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
        '/api/Contract', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the apiContractPut operation.
     * @callback module:api/ContractApi~apiContractPutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/DPContract} opts.value 
     * @param {module:api/ContractApi~apiContractPutCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.apiContractPut = function(opts, callback) {
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
        '/api/Contract', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the apiContractRelationshipsByIdGet operation.
     * @callback module:api/ContractApi~apiContractRelationshipsByIdGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id 
     * @param {module:api/ContractApi~apiContractRelationshipsByIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.apiContractRelationshipsByIdGet = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling apiContractRelationshipsByIdGet");
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
        '/api/Contract/Relationships/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the apiContractSetAsDefaultByIdGet operation.
     * @callback module:api/ContractApi~apiContractSetAsDefaultByIdGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id 
     * @param {module:api/ContractApi~apiContractSetAsDefaultByIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.apiContractSetAsDefaultByIdGet = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling apiContractSetAsDefaultByIdGet");
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
        '/api/Contract/SetAsDefault/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the apiContractTranslationsByIdGet operation.
     * @callback module:api/ContractApi~apiContractTranslationsByIdGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id 
     * @param {module:api/ContractApi~apiContractTranslationsByIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.apiContractTranslationsByIdGet = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling apiContractTranslationsByIdGet");
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
        '/api/Contract/Translations/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));