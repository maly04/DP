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
    instance = new DirectPortalRestApi.SaleStatusApi();
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

  describe('SaleStatusApi', function() {
    describe('apiSaleStatusActivateByIdGet', function() {
      it('should call apiSaleStatusActivateByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiSaleStatusActivateByIdGet
        //instance.apiSaleStatusActivateByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiSaleStatusActiveGet', function() {
      it('should call apiSaleStatusActiveGet successfully', function(done) {
        //uncomment below and update the code to test apiSaleStatusActiveGet
        //instance.apiSaleStatusActiveGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiSaleStatusByIdGet', function() {
      it('should call apiSaleStatusByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiSaleStatusByIdGet
        //instance.apiSaleStatusByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiSaleStatusByNameByIdGet', function() {
      it('should call apiSaleStatusByNameByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiSaleStatusByNameByIdGet
        //instance.apiSaleStatusByNameByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiSaleStatusByNamePost', function() {
      it('should call apiSaleStatusByNamePost successfully', function(done) {
        //uncomment below and update the code to test apiSaleStatusByNamePost
        //instance.apiSaleStatusByNamePost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiSaleStatusContactAddressesByIdGet', function() {
      it('should call apiSaleStatusContactAddressesByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiSaleStatusContactAddressesByIdGet
        //instance.apiSaleStatusContactAddressesByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiSaleStatusContactAddressesByIdPost', function() {
      it('should call apiSaleStatusContactAddressesByIdPost successfully', function(done) {
        //uncomment below and update the code to test apiSaleStatusContactAddressesByIdPost
        //instance.apiSaleStatusContactAddressesByIdPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiSaleStatusContactDetailsByIdGet', function() {
      it('should call apiSaleStatusContactDetailsByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiSaleStatusContactDetailsByIdGet
        //instance.apiSaleStatusContactDetailsByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiSaleStatusContactDetailsByIdPost', function() {
      it('should call apiSaleStatusContactDetailsByIdPost successfully', function(done) {
        //uncomment below and update the code to test apiSaleStatusContactDetailsByIdPost
        //instance.apiSaleStatusContactDetailsByIdPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiSaleStatusDeactivateByIdGet', function() {
      it('should call apiSaleStatusDeactivateByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiSaleStatusDeactivateByIdGet
        //instance.apiSaleStatusDeactivateByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiSaleStatusGet', function() {
      it('should call apiSaleStatusGet successfully', function(done) {
        //uncomment below and update the code to test apiSaleStatusGet
        //instance.apiSaleStatusGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiSaleStatusNotesByIdGet', function() {
      it('should call apiSaleStatusNotesByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiSaleStatusNotesByIdGet
        //instance.apiSaleStatusNotesByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiSaleStatusPost', function() {
      it('should call apiSaleStatusPost successfully', function(done) {
        //uncomment below and update the code to test apiSaleStatusPost
        //instance.apiSaleStatusPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiSaleStatusPut', function() {
      it('should call apiSaleStatusPut successfully', function(done) {
        //uncomment below and update the code to test apiSaleStatusPut
        //instance.apiSaleStatusPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiSaleStatusRelationshipsByIdGet', function() {
      it('should call apiSaleStatusRelationshipsByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiSaleStatusRelationshipsByIdGet
        //instance.apiSaleStatusRelationshipsByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiSaleStatusSetAsDefaultByIdGet', function() {
      it('should call apiSaleStatusSetAsDefaultByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiSaleStatusSetAsDefaultByIdGet
        //instance.apiSaleStatusSetAsDefaultByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiSaleStatusTranslationsByIdGet', function() {
      it('should call apiSaleStatusTranslationsByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiSaleStatusTranslationsByIdGet
        //instance.apiSaleStatusTranslationsByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
