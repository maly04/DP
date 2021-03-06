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
    instance = new DirectPortalRestApi.SaleStatusTypeApi();
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

  describe('SaleStatusTypeApi', function() {
    describe('apiSaleStatusTypeActivateByIdGet', function() {
      it('should call apiSaleStatusTypeActivateByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiSaleStatusTypeActivateByIdGet
        //instance.apiSaleStatusTypeActivateByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiSaleStatusTypeActiveGet', function() {
      it('should call apiSaleStatusTypeActiveGet successfully', function(done) {
        //uncomment below and update the code to test apiSaleStatusTypeActiveGet
        //instance.apiSaleStatusTypeActiveGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiSaleStatusTypeByIdGet', function() {
      it('should call apiSaleStatusTypeByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiSaleStatusTypeByIdGet
        //instance.apiSaleStatusTypeByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiSaleStatusTypeByNameByIdGet', function() {
      it('should call apiSaleStatusTypeByNameByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiSaleStatusTypeByNameByIdGet
        //instance.apiSaleStatusTypeByNameByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiSaleStatusTypeByNamePost', function() {
      it('should call apiSaleStatusTypeByNamePost successfully', function(done) {
        //uncomment below and update the code to test apiSaleStatusTypeByNamePost
        //instance.apiSaleStatusTypeByNamePost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiSaleStatusTypeContactAddressesByIdGet', function() {
      it('should call apiSaleStatusTypeContactAddressesByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiSaleStatusTypeContactAddressesByIdGet
        //instance.apiSaleStatusTypeContactAddressesByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiSaleStatusTypeContactAddressesByIdPost', function() {
      it('should call apiSaleStatusTypeContactAddressesByIdPost successfully', function(done) {
        //uncomment below and update the code to test apiSaleStatusTypeContactAddressesByIdPost
        //instance.apiSaleStatusTypeContactAddressesByIdPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiSaleStatusTypeContactDetailsByIdGet', function() {
      it('should call apiSaleStatusTypeContactDetailsByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiSaleStatusTypeContactDetailsByIdGet
        //instance.apiSaleStatusTypeContactDetailsByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiSaleStatusTypeContactDetailsByIdPost', function() {
      it('should call apiSaleStatusTypeContactDetailsByIdPost successfully', function(done) {
        //uncomment below and update the code to test apiSaleStatusTypeContactDetailsByIdPost
        //instance.apiSaleStatusTypeContactDetailsByIdPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiSaleStatusTypeDeactivateByIdGet', function() {
      it('should call apiSaleStatusTypeDeactivateByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiSaleStatusTypeDeactivateByIdGet
        //instance.apiSaleStatusTypeDeactivateByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiSaleStatusTypeGet', function() {
      it('should call apiSaleStatusTypeGet successfully', function(done) {
        //uncomment below and update the code to test apiSaleStatusTypeGet
        //instance.apiSaleStatusTypeGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiSaleStatusTypeNotesByIdGet', function() {
      it('should call apiSaleStatusTypeNotesByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiSaleStatusTypeNotesByIdGet
        //instance.apiSaleStatusTypeNotesByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiSaleStatusTypePost', function() {
      it('should call apiSaleStatusTypePost successfully', function(done) {
        //uncomment below and update the code to test apiSaleStatusTypePost
        //instance.apiSaleStatusTypePost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiSaleStatusTypePut', function() {
      it('should call apiSaleStatusTypePut successfully', function(done) {
        //uncomment below and update the code to test apiSaleStatusTypePut
        //instance.apiSaleStatusTypePut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiSaleStatusTypeRelationshipsByIdGet', function() {
      it('should call apiSaleStatusTypeRelationshipsByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiSaleStatusTypeRelationshipsByIdGet
        //instance.apiSaleStatusTypeRelationshipsByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiSaleStatusTypeSetAsDefaultByIdGet', function() {
      it('should call apiSaleStatusTypeSetAsDefaultByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiSaleStatusTypeSetAsDefaultByIdGet
        //instance.apiSaleStatusTypeSetAsDefaultByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiSaleStatusTypeTranslationsByIdGet', function() {
      it('should call apiSaleStatusTypeTranslationsByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiSaleStatusTypeTranslationsByIdGet
        //instance.apiSaleStatusTypeTranslationsByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
