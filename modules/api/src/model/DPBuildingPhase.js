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
    define(['ApiClient', 'model/DPSubscription'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DPSubscription'));
  } else {
    // Browser globals (root is window)
    if (!root.DirectPortalRestApi) {
      root.DirectPortalRestApi = {};
    }
    root.DirectPortalRestApi.DPBuildingPhase = factory(root.DirectPortalRestApi.ApiClient, root.DirectPortalRestApi.DPSubscription);
  }
}(this, function(ApiClient, DPSubscription) {
  'use strict';




  /**
   * The DPBuildingPhase model module.
   * @module model/DPBuildingPhase
   * @version v1
   */

  /**
   * Constructs a new <code>DPBuildingPhase</code>.
   * @alias module:model/DPBuildingPhase
   * @class
   */
  var exports = function() {
    var _this = this;










  };

  /**
   * Constructs a <code>DPBuildingPhase</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DPBuildingPhase} obj Optional instance to populate.
   * @return {module:model/DPBuildingPhase} The populated <code>DPBuildingPhase</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ID')) {
        obj['ID'] = ApiClient.convertToType(data['ID'], 'Number');
      }
      if (data.hasOwnProperty('Name')) {
        obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
      }
      if (data.hasOwnProperty('Description')) {
        obj['Description'] = ApiClient.convertToType(data['Description'], 'String');
      }
      if (data.hasOwnProperty('Active')) {
        obj['Active'] = ApiClient.convertToType(data['Active'], 'Boolean');
      }
      if (data.hasOwnProperty('Default')) {
        obj['Default'] = ApiClient.convertToType(data['Default'], 'Boolean');
      }
      if (data.hasOwnProperty('MigrationID')) {
        obj['MigrationID'] = ApiClient.convertToType(data['MigrationID'], 'String');
      }
      if (data.hasOwnProperty('Color')) {
        obj['Color'] = ApiClient.convertToType(data['Color'], 'String');
      }
      if (data.hasOwnProperty('SubscriptionID')) {
        obj['SubscriptionID'] = ApiClient.convertToType(data['SubscriptionID'], 'Number');
      }
      if (data.hasOwnProperty('Subscription')) {
        obj['Subscription'] = DPSubscription.constructFromObject(data['Subscription']);
      }
    }
    return obj;
  }

  /**
   * @member {Number} ID
   */
  exports.prototype['ID'] = undefined;
  /**
   * @member {String} Name
   */
  exports.prototype['Name'] = undefined;
  /**
   * @member {String} Description
   */
  exports.prototype['Description'] = undefined;
  /**
   * @member {Boolean} Active
   */
  exports.prototype['Active'] = undefined;
  /**
   * @member {Boolean} Default
   */
  exports.prototype['Default'] = undefined;
  /**
   * @member {String} MigrationID
   */
  exports.prototype['MigrationID'] = undefined;
  /**
   * @member {String} Color
   */
  exports.prototype['Color'] = undefined;
  /**
   * @member {Number} SubscriptionID
   */
  exports.prototype['SubscriptionID'] = undefined;
  /**
   * @member {module:model/DPSubscription} Subscription
   */
  exports.prototype['Subscription'] = undefined;



  return exports;
}));


