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
    instance = new DirectPortalRestApi.DPPerson();
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

  describe('DPPerson', function() {
    it('should create an instance of DPPerson', function() {
      // uncomment below and update the code to test DPPerson
      //var instane = new DirectPortalRestApi.DPPerson();
      //expect(instance).to.be.a(DirectPortalRestApi.DPPerson);
    });

    it('should have the property prefixId (base name: "PrefixId")', function() {
      // uncomment below and update the code to test the property prefixId
      //var instane = new DirectPortalRestApi.DPPerson();
      //expect(instance).to.be();
    });

    it('should have the property prefix (base name: "Prefix")', function() {
      // uncomment below and update the code to test the property prefix
      //var instane = new DirectPortalRestApi.DPPerson();
      //expect(instance).to.be();
    });

    it('should have the property firstName (base name: "FirstName")', function() {
      // uncomment below and update the code to test the property firstName
      //var instane = new DirectPortalRestApi.DPPerson();
      //expect(instance).to.be();
    });

    it('should have the property lastName (base name: "LastName")', function() {
      // uncomment below and update the code to test the property lastName
      //var instane = new DirectPortalRestApi.DPPerson();
      //expect(instance).to.be();
    });

    it('should have the property occupation (base name: "Occupation")', function() {
      // uncomment below and update the code to test the property occupation
      //var instane = new DirectPortalRestApi.DPPerson();
      //expect(instance).to.be();
    });

    it('should have the property passportNumber (base name: "PassportNumber")', function() {
      // uncomment below and update the code to test the property passportNumber
      //var instane = new DirectPortalRestApi.DPPerson();
      //expect(instance).to.be();
    });

    it('should have the property passportIssuedFrom (base name: "PassportIssuedFrom")', function() {
      // uncomment below and update the code to test the property passportIssuedFrom
      //var instane = new DirectPortalRestApi.DPPerson();
      //expect(instance).to.be();
    });

    it('should have the property passportExpiryDate (base name: "PassportExpiryDate")', function() {
      // uncomment below and update the code to test the property passportExpiryDate
      //var instane = new DirectPortalRestApi.DPPerson();
      //expect(instance).to.be();
    });

    it('should have the property passportIssueDate (base name: "PassportIssueDate")', function() {
      // uncomment below and update the code to test the property passportIssueDate
      //var instane = new DirectPortalRestApi.DPPerson();
      //expect(instance).to.be();
    });

    it('should have the property dateOfBirth (base name: "DateOfBirth")', function() {
      // uncomment below and update the code to test the property dateOfBirth
      //var instane = new DirectPortalRestApi.DPPerson();
      //expect(instance).to.be();
    });

    it('should have the property organizationUnits (base name: "OrganizationUnits")', function() {
      // uncomment below and update the code to test the property organizationUnits
      //var instane = new DirectPortalRestApi.DPPerson();
      //expect(instance).to.be();
    });

    it('should have the property contactAddresses (base name: "ContactAddresses")', function() {
      // uncomment below and update the code to test the property contactAddresses
      //var instane = new DirectPortalRestApi.DPPerson();
      //expect(instance).to.be();
    });

    it('should have the property contactDetails (base name: "ContactDetails")', function() {
      // uncomment below and update the code to test the property contactDetails
      //var instane = new DirectPortalRestApi.DPPerson();
      //expect(instance).to.be();
    });

    it('should have the property nationalityId (base name: "NationalityId")', function() {
      // uncomment below and update the code to test the property nationalityId
      //var instane = new DirectPortalRestApi.DPPerson();
      //expect(instance).to.be();
    });

    it('should have the property nationality (base name: "Nationality")', function() {
      // uncomment below and update the code to test the property nationality
      //var instane = new DirectPortalRestApi.DPPerson();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "Type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new DirectPortalRestApi.DPPerson();
      //expect(instance).to.be();
    });

    it('should have the property typeId (base name: "TypeId")', function() {
      // uncomment below and update the code to test the property typeId
      //var instane = new DirectPortalRestApi.DPPerson();
      //expect(instance).to.be();
    });

    it('should have the property relationships (base name: "Relationships")', function() {
      // uncomment below and update the code to test the property relationships
      //var instane = new DirectPortalRestApi.DPPerson();
      //expect(instance).to.be();
    });

    it('should have the property translations (base name: "Translations")', function() {
      // uncomment below and update the code to test the property translations
      //var instane = new DirectPortalRestApi.DPPerson();
      //expect(instance).to.be();
    });

    it('should have the property ID (base name: "ID")', function() {
      // uncomment below and update the code to test the property ID
      //var instane = new DirectPortalRestApi.DPPerson();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "Name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new DirectPortalRestApi.DPPerson();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "Description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new DirectPortalRestApi.DPPerson();
      //expect(instance).to.be();
    });

    it('should have the property active (base name: "Active")', function() {
      // uncomment below and update the code to test the property active
      //var instane = new DirectPortalRestApi.DPPerson();
      //expect(instance).to.be();
    });

    it('should have the property _default (base name: "Default")', function() {
      // uncomment below and update the code to test the property _default
      //var instane = new DirectPortalRestApi.DPPerson();
      //expect(instance).to.be();
    });

    it('should have the property migrationID (base name: "MigrationID")', function() {
      // uncomment below and update the code to test the property migrationID
      //var instane = new DirectPortalRestApi.DPPerson();
      //expect(instance).to.be();
    });

    it('should have the property color (base name: "Color")', function() {
      // uncomment below and update the code to test the property color
      //var instane = new DirectPortalRestApi.DPPerson();
      //expect(instance).to.be();
    });

    it('should have the property subscriptionID (base name: "SubscriptionID")', function() {
      // uncomment below and update the code to test the property subscriptionID
      //var instane = new DirectPortalRestApi.DPPerson();
      //expect(instance).to.be();
    });

    it('should have the property subscription (base name: "Subscription")', function() {
      // uncomment below and update the code to test the property subscription
      //var instane = new DirectPortalRestApi.DPPerson();
      //expect(instance).to.be();
    });

  });

}));