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
    instance = new DirectPortalRestApi.UnitTypeApi();
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

  describe('UnitTypeApi', function() {
    describe('apiUnitTypeActivateByIdGet', function() {
      it('should call apiUnitTypeActivateByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiUnitTypeActivateByIdGet
        //instance.apiUnitTypeActivateByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiUnitTypeActiveGet', function() {
      it('should call apiUnitTypeActiveGet successfully', function(done) {
        //uncomment below and update the code to test apiUnitTypeActiveGet
        //instance.apiUnitTypeActiveGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiUnitTypeByIdGet', function() {
      it('should call apiUnitTypeByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiUnitTypeByIdGet
        //instance.apiUnitTypeByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiUnitTypeByNameByIdGet', function() {
      it('should call apiUnitTypeByNameByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiUnitTypeByNameByIdGet
        //instance.apiUnitTypeByNameByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiUnitTypeByNamePost', function() {
      it('should call apiUnitTypeByNamePost successfully', function(done) {
        //uncomment below and update the code to test apiUnitTypeByNamePost
        //instance.apiUnitTypeByNamePost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiUnitTypeContactAddressesByIdGet', function() {
      it('should call apiUnitTypeContactAddressesByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiUnitTypeContactAddressesByIdGet
        //instance.apiUnitTypeContactAddressesByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiUnitTypeContactAddressesByIdPost', function() {
      it('should call apiUnitTypeContactAddressesByIdPost successfully', function(done) {
        //uncomment below and update the code to test apiUnitTypeContactAddressesByIdPost
        //instance.apiUnitTypeContactAddressesByIdPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiUnitTypeContactDetailsByIdGet', function() {
      it('should call apiUnitTypeContactDetailsByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiUnitTypeContactDetailsByIdGet
        //instance.apiUnitTypeContactDetailsByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiUnitTypeContactDetailsByIdPost', function() {
      it('should call apiUnitTypeContactDetailsByIdPost successfully', function(done) {
        //uncomment below and update the code to test apiUnitTypeContactDetailsByIdPost
        //instance.apiUnitTypeContactDetailsByIdPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiUnitTypeDeactivateByIdGet', function() {
      it('should call apiUnitTypeDeactivateByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiUnitTypeDeactivateByIdGet
        //instance.apiUnitTypeDeactivateByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiUnitTypeGet', function() {
      it('should call apiUnitTypeGet successfully', function(done) {
        //uncomment below and update the code to test apiUnitTypeGet
        //instance.apiUnitTypeGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiUnitTypeNotesByIdGet', function() {
      it('should call apiUnitTypeNotesByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiUnitTypeNotesByIdGet
        //instance.apiUnitTypeNotesByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiUnitTypePost', function() {
      it('should call apiUnitTypePost successfully', function(done) {
        //uncomment below and update the code to test apiUnitTypePost
        //instance.apiUnitTypePost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiUnitTypePut', function() {
      it('should call apiUnitTypePut successfully', function(done) {
        //uncomment below and update the code to test apiUnitTypePut
        //instance.apiUnitTypePut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiUnitTypeRelationshipsByIdGet', function() {
      it('should call apiUnitTypeRelationshipsByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiUnitTypeRelationshipsByIdGet
        //instance.apiUnitTypeRelationshipsByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiUnitTypeSetAsDefaultByIdGet', function() {
      it('should call apiUnitTypeSetAsDefaultByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiUnitTypeSetAsDefaultByIdGet
        //instance.apiUnitTypeSetAsDefaultByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiUnitTypeTranslationsByIdGet', function() {
      it('should call apiUnitTypeTranslationsByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiUnitTypeTranslationsByIdGet
        //instance.apiUnitTypeTranslationsByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
