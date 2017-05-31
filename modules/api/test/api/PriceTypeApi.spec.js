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
    instance = new DirectPortalRestApi.PriceTypeApi();
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

  describe('PriceTypeApi', function() {
    describe('apiPriceTypeActivateByIdGet', function() {
      it('should call apiPriceTypeActivateByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiPriceTypeActivateByIdGet
        //instance.apiPriceTypeActivateByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiPriceTypeActiveGet', function() {
      it('should call apiPriceTypeActiveGet successfully', function(done) {
        //uncomment below and update the code to test apiPriceTypeActiveGet
        //instance.apiPriceTypeActiveGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiPriceTypeByIdGet', function() {
      it('should call apiPriceTypeByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiPriceTypeByIdGet
        //instance.apiPriceTypeByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiPriceTypeByNameByIdGet', function() {
      it('should call apiPriceTypeByNameByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiPriceTypeByNameByIdGet
        //instance.apiPriceTypeByNameByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiPriceTypeByNamePost', function() {
      it('should call apiPriceTypeByNamePost successfully', function(done) {
        //uncomment below and update the code to test apiPriceTypeByNamePost
        //instance.apiPriceTypeByNamePost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiPriceTypeContactAddressesByIdGet', function() {
      it('should call apiPriceTypeContactAddressesByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiPriceTypeContactAddressesByIdGet
        //instance.apiPriceTypeContactAddressesByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiPriceTypeContactAddressesByIdPost', function() {
      it('should call apiPriceTypeContactAddressesByIdPost successfully', function(done) {
        //uncomment below and update the code to test apiPriceTypeContactAddressesByIdPost
        //instance.apiPriceTypeContactAddressesByIdPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiPriceTypeContactDetailsByIdGet', function() {
      it('should call apiPriceTypeContactDetailsByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiPriceTypeContactDetailsByIdGet
        //instance.apiPriceTypeContactDetailsByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiPriceTypeContactDetailsByIdPost', function() {
      it('should call apiPriceTypeContactDetailsByIdPost successfully', function(done) {
        //uncomment below and update the code to test apiPriceTypeContactDetailsByIdPost
        //instance.apiPriceTypeContactDetailsByIdPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiPriceTypeDeactivateByIdGet', function() {
      it('should call apiPriceTypeDeactivateByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiPriceTypeDeactivateByIdGet
        //instance.apiPriceTypeDeactivateByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiPriceTypeGet', function() {
      it('should call apiPriceTypeGet successfully', function(done) {
        //uncomment below and update the code to test apiPriceTypeGet
        //instance.apiPriceTypeGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiPriceTypeNotesByIdGet', function() {
      it('should call apiPriceTypeNotesByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiPriceTypeNotesByIdGet
        //instance.apiPriceTypeNotesByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiPriceTypePost', function() {
      it('should call apiPriceTypePost successfully', function(done) {
        //uncomment below and update the code to test apiPriceTypePost
        //instance.apiPriceTypePost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiPriceTypePut', function() {
      it('should call apiPriceTypePut successfully', function(done) {
        //uncomment below and update the code to test apiPriceTypePut
        //instance.apiPriceTypePut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiPriceTypeRelationshipsByIdGet', function() {
      it('should call apiPriceTypeRelationshipsByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiPriceTypeRelationshipsByIdGet
        //instance.apiPriceTypeRelationshipsByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiPriceTypeSetAsDefaultByIdGet', function() {
      it('should call apiPriceTypeSetAsDefaultByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiPriceTypeSetAsDefaultByIdGet
        //instance.apiPriceTypeSetAsDefaultByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiPriceTypeTranslationsByIdGet', function() {
      it('should call apiPriceTypeTranslationsByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiPriceTypeTranslationsByIdGet
        //instance.apiPriceTypeTranslationsByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));