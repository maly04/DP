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
    instance = new DirectPortalRestApi.OwnershipTypeApi();
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

  describe('OwnershipTypeApi', function() {
    describe('apiOwnershipTypeActivateByIdGet', function() {
      it('should call apiOwnershipTypeActivateByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiOwnershipTypeActivateByIdGet
        //instance.apiOwnershipTypeActivateByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiOwnershipTypeActiveGet', function() {
      it('should call apiOwnershipTypeActiveGet successfully', function(done) {
        //uncomment below and update the code to test apiOwnershipTypeActiveGet
        //instance.apiOwnershipTypeActiveGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiOwnershipTypeByIdGet', function() {
      it('should call apiOwnershipTypeByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiOwnershipTypeByIdGet
        //instance.apiOwnershipTypeByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiOwnershipTypeByNameByIdGet', function() {
      it('should call apiOwnershipTypeByNameByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiOwnershipTypeByNameByIdGet
        //instance.apiOwnershipTypeByNameByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiOwnershipTypeByNamePost', function() {
      it('should call apiOwnershipTypeByNamePost successfully', function(done) {
        //uncomment below and update the code to test apiOwnershipTypeByNamePost
        //instance.apiOwnershipTypeByNamePost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiOwnershipTypeContactAddressesByIdGet', function() {
      it('should call apiOwnershipTypeContactAddressesByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiOwnershipTypeContactAddressesByIdGet
        //instance.apiOwnershipTypeContactAddressesByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiOwnershipTypeContactAddressesByIdPost', function() {
      it('should call apiOwnershipTypeContactAddressesByIdPost successfully', function(done) {
        //uncomment below and update the code to test apiOwnershipTypeContactAddressesByIdPost
        //instance.apiOwnershipTypeContactAddressesByIdPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiOwnershipTypeContactDetailsByIdGet', function() {
      it('should call apiOwnershipTypeContactDetailsByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiOwnershipTypeContactDetailsByIdGet
        //instance.apiOwnershipTypeContactDetailsByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiOwnershipTypeContactDetailsByIdPost', function() {
      it('should call apiOwnershipTypeContactDetailsByIdPost successfully', function(done) {
        //uncomment below and update the code to test apiOwnershipTypeContactDetailsByIdPost
        //instance.apiOwnershipTypeContactDetailsByIdPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiOwnershipTypeDeactivateByIdGet', function() {
      it('should call apiOwnershipTypeDeactivateByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiOwnershipTypeDeactivateByIdGet
        //instance.apiOwnershipTypeDeactivateByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiOwnershipTypeGet', function() {
      it('should call apiOwnershipTypeGet successfully', function(done) {
        //uncomment below and update the code to test apiOwnershipTypeGet
        //instance.apiOwnershipTypeGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiOwnershipTypeNotesByIdGet', function() {
      it('should call apiOwnershipTypeNotesByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiOwnershipTypeNotesByIdGet
        //instance.apiOwnershipTypeNotesByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiOwnershipTypePost', function() {
      it('should call apiOwnershipTypePost successfully', function(done) {
        //uncomment below and update the code to test apiOwnershipTypePost
        //instance.apiOwnershipTypePost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiOwnershipTypePut', function() {
      it('should call apiOwnershipTypePut successfully', function(done) {
        //uncomment below and update the code to test apiOwnershipTypePut
        //instance.apiOwnershipTypePut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiOwnershipTypeRelationshipsByIdGet', function() {
      it('should call apiOwnershipTypeRelationshipsByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiOwnershipTypeRelationshipsByIdGet
        //instance.apiOwnershipTypeRelationshipsByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiOwnershipTypeSetAsDefaultByIdGet', function() {
      it('should call apiOwnershipTypeSetAsDefaultByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiOwnershipTypeSetAsDefaultByIdGet
        //instance.apiOwnershipTypeSetAsDefaultByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiOwnershipTypeTranslationsByIdGet', function() {
      it('should call apiOwnershipTypeTranslationsByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiOwnershipTypeTranslationsByIdGet
        //instance.apiOwnershipTypeTranslationsByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
