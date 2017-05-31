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
    define(['ApiClient', 'model/DPBuilding', 'model/DPContractDetail', 'model/DPFeature', 'model/DPNote', 'model/DPPrice', 'model/DPReservation', 'model/DPSubscription', 'model/DPUnitQuota', 'model/DPUnitStatus', 'model/DPUnitSubType', 'model/DPUnitType'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DPBuilding'), require('./DPContractDetail'), require('./DPFeature'), require('./DPNote'), require('./DPPrice'), require('./DPReservation'), require('./DPSubscription'), require('./DPUnitQuota'), require('./DPUnitStatus'), require('./DPUnitSubType'), require('./DPUnitType'));
  } else {
    // Browser globals (root is window)
    if (!root.DirectPortalRestApi) {
      root.DirectPortalRestApi = {};
    }
    root.DirectPortalRestApi.DPUnit = factory(root.DirectPortalRestApi.ApiClient, root.DirectPortalRestApi.DPBuilding, root.DirectPortalRestApi.DPContractDetail, root.DirectPortalRestApi.DPFeature, root.DirectPortalRestApi.DPNote, root.DirectPortalRestApi.DPPrice, root.DirectPortalRestApi.DPReservation, root.DirectPortalRestApi.DPSubscription, root.DirectPortalRestApi.DPUnitQuota, root.DirectPortalRestApi.DPUnitStatus, root.DirectPortalRestApi.DPUnitSubType, root.DirectPortalRestApi.DPUnitType);
  }
}(this, function(ApiClient, DPBuilding, DPContractDetail, DPFeature, DPNote, DPPrice, DPReservation, DPSubscription, DPUnitQuota, DPUnitStatus, DPUnitSubType, DPUnitType) {
  'use strict';




  /**
   * The DPUnit model module.
   * @module model/DPUnit
   * @version v1
   */

  /**
   * Constructs a new <code>DPUnit</code>.
   * @alias module:model/DPUnit
   * @class
   */
  var exports = function() {
    var _this = this;






























  };

  /**
   * Constructs a <code>DPUnit</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DPUnit} obj Optional instance to populate.
   * @return {module:model/DPUnit} The populated <code>DPUnit</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('BuildingId')) {
        obj['BuildingId'] = ApiClient.convertToType(data['BuildingId'], 'Number');
      }
      if (data.hasOwnProperty('Building')) {
        obj['Building'] = DPBuilding.constructFromObject(data['Building']);
      }
      if (data.hasOwnProperty('Floor')) {
        obj['Floor'] = ApiClient.convertToType(data['Floor'], 'Number');
      }
      if (data.hasOwnProperty('UnitNumber')) {
        obj['UnitNumber'] = ApiClient.convertToType(data['UnitNumber'], 'String');
      }
      if (data.hasOwnProperty('Features')) {
        obj['Features'] = ApiClient.convertToType(data['Features'], [DPFeature]);
      }
      if (data.hasOwnProperty('ContractDetails')) {
        obj['ContractDetails'] = ApiClient.convertToType(data['ContractDetails'], [DPContractDetail]);
      }
      if (data.hasOwnProperty('Quotas')) {
        obj['Quotas'] = ApiClient.convertToType(data['Quotas'], [DPUnitQuota]);
      }
      if (data.hasOwnProperty('TypeId')) {
        obj['TypeId'] = ApiClient.convertToType(data['TypeId'], 'Number');
      }
      if (data.hasOwnProperty('Type')) {
        obj['Type'] = DPUnitType.constructFromObject(data['Type']);
      }
      if (data.hasOwnProperty('StatusId')) {
        obj['StatusId'] = ApiClient.convertToType(data['StatusId'], 'Number');
      }
      if (data.hasOwnProperty('Status')) {
        obj['Status'] = DPUnitStatus.constructFromObject(data['Status']);
      }
      if (data.hasOwnProperty('SubTypeId')) {
        obj['SubTypeId'] = ApiClient.convertToType(data['SubTypeId'], 'Number');
      }
      if (data.hasOwnProperty('SubType')) {
        obj['SubType'] = DPUnitSubType.constructFromObject(data['SubType']);
      }
      if (data.hasOwnProperty('Size')) {
        obj['Size'] = ApiClient.convertToType(data['Size'], 'Number');
      }
      if (data.hasOwnProperty('SizeRounded')) {
        obj['SizeRounded'] = ApiClient.convertToType(data['SizeRounded'], 'Number');
      }
      if (data.hasOwnProperty('SizeLandOffice')) {
        obj['SizeLandOffice'] = ApiClient.convertToType(data['SizeLandOffice'], 'Number');
      }
      if (data.hasOwnProperty('Prices')) {
        obj['Prices'] = ApiClient.convertToType(data['Prices'], [DPPrice]);
      }
      if (data.hasOwnProperty('Notes')) {
        obj['Notes'] = ApiClient.convertToType(data['Notes'], [DPNote]);
      }
      if (data.hasOwnProperty('ReservationId')) {
        obj['ReservationId'] = ApiClient.convertToType(data['ReservationId'], 'Number');
      }
      if (data.hasOwnProperty('Reservation')) {
        obj['Reservation'] = DPReservation.constructFromObject(data['Reservation']);
      }
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
   * @member {Number} BuildingId
   */
  exports.prototype['BuildingId'] = undefined;
  /**
   * @member {module:model/DPBuilding} Building
   */
  exports.prototype['Building'] = undefined;
  /**
   * @member {Number} Floor
   */
  exports.prototype['Floor'] = undefined;
  /**
   * @member {String} UnitNumber
   */
  exports.prototype['UnitNumber'] = undefined;
  /**
   * @member {Array.<module:model/DPFeature>} Features
   */
  exports.prototype['Features'] = undefined;
  /**
   * @member {Array.<module:model/DPContractDetail>} ContractDetails
   */
  exports.prototype['ContractDetails'] = undefined;
  /**
   * @member {Array.<module:model/DPUnitQuota>} Quotas
   */
  exports.prototype['Quotas'] = undefined;
  /**
   * @member {Number} TypeId
   */
  exports.prototype['TypeId'] = undefined;
  /**
   * @member {module:model/DPUnitType} Type
   */
  exports.prototype['Type'] = undefined;
  /**
   * @member {Number} StatusId
   */
  exports.prototype['StatusId'] = undefined;
  /**
   * @member {module:model/DPUnitStatus} Status
   */
  exports.prototype['Status'] = undefined;
  /**
   * @member {Number} SubTypeId
   */
  exports.prototype['SubTypeId'] = undefined;
  /**
   * @member {module:model/DPUnitSubType} SubType
   */
  exports.prototype['SubType'] = undefined;
  /**
   * @member {Number} Size
   */
  exports.prototype['Size'] = undefined;
  /**
   * @member {Number} SizeRounded
   */
  exports.prototype['SizeRounded'] = undefined;
  /**
   * @member {Number} SizeLandOffice
   */
  exports.prototype['SizeLandOffice'] = undefined;
  /**
   * @member {Array.<module:model/DPPrice>} Prices
   */
  exports.prototype['Prices'] = undefined;
  /**
   * @member {Array.<module:model/DPNote>} Notes
   */
  exports.prototype['Notes'] = undefined;
  /**
   * @member {Number} ReservationId
   */
  exports.prototype['ReservationId'] = undefined;
  /**
   * @member {module:model/DPReservation} Reservation
   */
  exports.prototype['Reservation'] = undefined;
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

