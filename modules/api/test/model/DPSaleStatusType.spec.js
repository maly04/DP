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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.DirectPortalRestApi);
  }
}(this, function(expect, DirectPortalRestApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new DirectPortalRestApi.DPSaleStatusType();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('DPSaleStatusType', function() {
    it('should create an instance of DPSaleStatusType', function() {
      // uncomment below and update the code to test DPSaleStatusType
      //var instane = new DirectPortalRestApi.DPSaleStatusType();
      //expect(instance).to.be.a(DirectPortalRestApi.DPSaleStatusType);
    });

    it('should have the property unitStatusId (base name: "UnitStatusId")', function() {
      // uncomment below and update the code to test the property unitStatusId
      //var instane = new DirectPortalRestApi.DPSaleStatusType();
      //expect(instance).to.be();
    });

    it('should have the property unitStatus (base name: "UnitStatus")', function() {
      // uncomment below and update the code to test the property unitStatus
      //var instane = new DirectPortalRestApi.DPSaleStatusType();
      //expect(instance).to.be();
    });

    it('should have the property ID (base name: "ID")', function() {
      // uncomment below and update the code to test the property ID
      //var instane = new DirectPortalRestApi.DPSaleStatusType();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "Name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new DirectPortalRestApi.DPSaleStatusType();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "Description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new DirectPortalRestApi.DPSaleStatusType();
      //expect(instance).to.be();
    });

    it('should have the property active (base name: "Active")', function() {
      // uncomment below and update the code to test the property active
      //var instane = new DirectPortalRestApi.DPSaleStatusType();
      //expect(instance).to.be();
    });

    it('should have the property _default (base name: "Default")', function() {
      // uncomment below and update the code to test the property _default
      //var instane = new DirectPortalRestApi.DPSaleStatusType();
      //expect(instance).to.be();
    });

    it('should have the property migrationID (base name: "MigrationID")', function() {
      // uncomment below and update the code to test the property migrationID
      //var instane = new DirectPortalRestApi.DPSaleStatusType();
      //expect(instance).to.be();
    });

    it('should have the property color (base name: "Color")', function() {
      // uncomment below and update the code to test the property color
      //var instane = new DirectPortalRestApi.DPSaleStatusType();
      //expect(instance).to.be();
    });

    it('should have the property subscriptionID (base name: "SubscriptionID")', function() {
      // uncomment below and update the code to test the property subscriptionID
      //var instane = new DirectPortalRestApi.DPSaleStatusType();
      //expect(instance).to.be();
    });

    it('should have the property subscription (base name: "Subscription")', function() {
      // uncomment below and update the code to test the property subscription
      //var instane = new DirectPortalRestApi.DPSaleStatusType();
      //expect(instance).to.be();
    });

  });

}));