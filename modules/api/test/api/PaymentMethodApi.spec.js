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
    instance = new DirectPortalRestApi.PaymentMethodApi();
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

  describe('PaymentMethodApi', function() {
    describe('apiPaymentMethodActivateByIdGet', function() {
      it('should call apiPaymentMethodActivateByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiPaymentMethodActivateByIdGet
        //instance.apiPaymentMethodActivateByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiPaymentMethodActiveGet', function() {
      it('should call apiPaymentMethodActiveGet successfully', function(done) {
        //uncomment below and update the code to test apiPaymentMethodActiveGet
        //instance.apiPaymentMethodActiveGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiPaymentMethodByIdGet', function() {
      it('should call apiPaymentMethodByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiPaymentMethodByIdGet
        //instance.apiPaymentMethodByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiPaymentMethodByNameByIdGet', function() {
      it('should call apiPaymentMethodByNameByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiPaymentMethodByNameByIdGet
        //instance.apiPaymentMethodByNameByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiPaymentMethodByNamePost', function() {
      it('should call apiPaymentMethodByNamePost successfully', function(done) {
        //uncomment below and update the code to test apiPaymentMethodByNamePost
        //instance.apiPaymentMethodByNamePost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiPaymentMethodContactAddressesByIdGet', function() {
      it('should call apiPaymentMethodContactAddressesByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiPaymentMethodContactAddressesByIdGet
        //instance.apiPaymentMethodContactAddressesByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiPaymentMethodContactAddressesByIdPost', function() {
      it('should call apiPaymentMethodContactAddressesByIdPost successfully', function(done) {
        //uncomment below and update the code to test apiPaymentMethodContactAddressesByIdPost
        //instance.apiPaymentMethodContactAddressesByIdPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiPaymentMethodContactDetailsByIdGet', function() {
      it('should call apiPaymentMethodContactDetailsByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiPaymentMethodContactDetailsByIdGet
        //instance.apiPaymentMethodContactDetailsByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiPaymentMethodContactDetailsByIdPost', function() {
      it('should call apiPaymentMethodContactDetailsByIdPost successfully', function(done) {
        //uncomment below and update the code to test apiPaymentMethodContactDetailsByIdPost
        //instance.apiPaymentMethodContactDetailsByIdPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiPaymentMethodDeactivateByIdGet', function() {
      it('should call apiPaymentMethodDeactivateByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiPaymentMethodDeactivateByIdGet
        //instance.apiPaymentMethodDeactivateByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiPaymentMethodGet', function() {
      it('should call apiPaymentMethodGet successfully', function(done) {
        //uncomment below and update the code to test apiPaymentMethodGet
        //instance.apiPaymentMethodGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiPaymentMethodNotesByIdGet', function() {
      it('should call apiPaymentMethodNotesByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiPaymentMethodNotesByIdGet
        //instance.apiPaymentMethodNotesByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiPaymentMethodPost', function() {
      it('should call apiPaymentMethodPost successfully', function(done) {
        //uncomment below and update the code to test apiPaymentMethodPost
        //instance.apiPaymentMethodPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiPaymentMethodPut', function() {
      it('should call apiPaymentMethodPut successfully', function(done) {
        //uncomment below and update the code to test apiPaymentMethodPut
        //instance.apiPaymentMethodPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiPaymentMethodRelationshipsByIdGet', function() {
      it('should call apiPaymentMethodRelationshipsByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiPaymentMethodRelationshipsByIdGet
        //instance.apiPaymentMethodRelationshipsByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiPaymentMethodSetAsDefaultByIdGet', function() {
      it('should call apiPaymentMethodSetAsDefaultByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiPaymentMethodSetAsDefaultByIdGet
        //instance.apiPaymentMethodSetAsDefaultByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiPaymentMethodTranslationsByIdGet', function() {
      it('should call apiPaymentMethodTranslationsByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiPaymentMethodTranslationsByIdGet
        //instance.apiPaymentMethodTranslationsByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
