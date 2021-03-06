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
    define(['ApiClient', 'model/DPContactAddress', 'model/DPContactDetail', 'model/DPNationality', 'model/DPOrganizationUnit', 'model/DPPersonPrefix', 'model/DPPersonType', 'model/DPRelationship', 'model/DPSubscription', 'model/DPTranslation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DPContactAddress'), require('./DPContactDetail'), require('./DPNationality'), require('./DPOrganizationUnit'), require('./DPPersonPrefix'), require('./DPPersonType'), require('./DPRelationship'), require('./DPSubscription'), require('./DPTranslation'));
  } else {
    // Browser globals (root is window)
    if (!root.DirectPortalRestApi) {
      root.DirectPortalRestApi = {};
    }
    root.DirectPortalRestApi.DPPerson = factory(root.DirectPortalRestApi.ApiClient, root.DirectPortalRestApi.DPContactAddress, root.DirectPortalRestApi.DPContactDetail, root.DirectPortalRestApi.DPNationality, root.DirectPortalRestApi.DPOrganizationUnit, root.DirectPortalRestApi.DPPersonPrefix, root.DirectPortalRestApi.DPPersonType, root.DirectPortalRestApi.DPRelationship, root.DirectPortalRestApi.DPSubscription, root.DirectPortalRestApi.DPTranslation);
  }
}(this, function(ApiClient, DPContactAddress, DPContactDetail, DPNationality, DPOrganizationUnit, DPPersonPrefix, DPPersonType, DPRelationship, DPSubscription, DPTranslation) {
  'use strict';




  /**
   * The DPPerson model module.
   * @module model/DPPerson
   * @version v1
   */

  /**
   * Constructs a new <code>DPPerson</code>.
   * @alias module:model/DPPerson
   * @class
   */
  var exports = function() {
    var _this = this;





























  };

  /**
   * Constructs a <code>DPPerson</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DPPerson} obj Optional instance to populate.
   * @return {module:model/DPPerson} The populated <code>DPPerson</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('PrefixId')) {
        obj['PrefixId'] = ApiClient.convertToType(data['PrefixId'], 'Number');
      }
      if (data.hasOwnProperty('Prefix')) {
        obj['Prefix'] = DPPersonPrefix.constructFromObject(data['Prefix']);
      }
      if (data.hasOwnProperty('FirstName')) {
        obj['FirstName'] = ApiClient.convertToType(data['FirstName'], 'String');
      }
      if (data.hasOwnProperty('LastName')) {
        obj['LastName'] = ApiClient.convertToType(data['LastName'], 'String');
      }
      if (data.hasOwnProperty('Occupation')) {
        obj['Occupation'] = ApiClient.convertToType(data['Occupation'], 'String');
      }
      if (data.hasOwnProperty('PassportNumber')) {
        obj['PassportNumber'] = ApiClient.convertToType(data['PassportNumber'], 'String');
      }
      if (data.hasOwnProperty('PassportIssuedFrom')) {
        obj['PassportIssuedFrom'] = ApiClient.convertToType(data['PassportIssuedFrom'], 'String');
      }
      if (data.hasOwnProperty('PassportExpiryDate')) {
        obj['PassportExpiryDate'] = ApiClient.convertToType(data['PassportExpiryDate'], 'Date');
      }
      if (data.hasOwnProperty('PassportIssueDate')) {
        obj['PassportIssueDate'] = ApiClient.convertToType(data['PassportIssueDate'], 'Date');
      }
      if (data.hasOwnProperty('DateOfBirth')) {
        obj['DateOfBirth'] = ApiClient.convertToType(data['DateOfBirth'], 'Date');
      }
      if (data.hasOwnProperty('OrganizationUnits')) {
        obj['OrganizationUnits'] = ApiClient.convertToType(data['OrganizationUnits'], [DPOrganizationUnit]);
      }
      if (data.hasOwnProperty('ContactAddresses')) {
        obj['ContactAddresses'] = ApiClient.convertToType(data['ContactAddresses'], [DPContactAddress]);
      }
      if (data.hasOwnProperty('ContactDetails')) {
        obj['ContactDetails'] = ApiClient.convertToType(data['ContactDetails'], [DPContactDetail]);
      }
      if (data.hasOwnProperty('NationalityId')) {
        obj['NationalityId'] = ApiClient.convertToType(data['NationalityId'], 'Number');
      }
      if (data.hasOwnProperty('Nationality')) {
        obj['Nationality'] = DPNationality.constructFromObject(data['Nationality']);
      }
      if (data.hasOwnProperty('Type')) {
        obj['Type'] = DPPersonType.constructFromObject(data['Type']);
      }
      if (data.hasOwnProperty('TypeId')) {
        obj['TypeId'] = ApiClient.convertToType(data['TypeId'], 'Number');
      }
      if (data.hasOwnProperty('Relationships')) {
        obj['Relationships'] = ApiClient.convertToType(data['Relationships'], [DPRelationship]);
      }
      if (data.hasOwnProperty('Translations')) {
        obj['Translations'] = ApiClient.convertToType(data['Translations'], [DPTranslation]);
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
   * @member {Number} PrefixId
   */
  exports.prototype['PrefixId'] = undefined;
  /**
   * @member {module:model/DPPersonPrefix} Prefix
   */
  exports.prototype['Prefix'] = undefined;
  /**
   * @member {String} FirstName
   */
  exports.prototype['FirstName'] = undefined;
  /**
   * @member {String} LastName
   */
  exports.prototype['LastName'] = undefined;
  /**
   * @member {String} Occupation
   */
  exports.prototype['Occupation'] = undefined;
  /**
   * @member {String} PassportNumber
   */
  exports.prototype['PassportNumber'] = undefined;
  /**
   * @member {String} PassportIssuedFrom
   */
  exports.prototype['PassportIssuedFrom'] = undefined;
  /**
   * @member {Date} PassportExpiryDate
   */
  exports.prototype['PassportExpiryDate'] = undefined;
  /**
   * @member {Date} PassportIssueDate
   */
  exports.prototype['PassportIssueDate'] = undefined;
  /**
   * @member {Date} DateOfBirth
   */
  exports.prototype['DateOfBirth'] = undefined;
  /**
   * @member {Array.<module:model/DPOrganizationUnit>} OrganizationUnits
   */
  exports.prototype['OrganizationUnits'] = undefined;
  /**
   * @member {Array.<module:model/DPContactAddress>} ContactAddresses
   */
  exports.prototype['ContactAddresses'] = undefined;
  /**
   * @member {Array.<module:model/DPContactDetail>} ContactDetails
   */
  exports.prototype['ContactDetails'] = undefined;
  /**
   * @member {Number} NationalityId
   */
  exports.prototype['NationalityId'] = undefined;
  /**
   * @member {module:model/DPNationality} Nationality
   */
  exports.prototype['Nationality'] = undefined;
  /**
   * @member {module:model/DPPersonType} Type
   */
  exports.prototype['Type'] = undefined;
  /**
   * @member {Number} TypeId
   */
  exports.prototype['TypeId'] = undefined;
  /**
   * @member {Array.<module:model/DPRelationship>} Relationships
   */
  exports.prototype['Relationships'] = undefined;
  /**
   * @member {Array.<module:model/DPTranslation>} Translations
   */
  exports.prototype['Translations'] = undefined;
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


