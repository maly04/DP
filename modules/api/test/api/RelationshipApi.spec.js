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
    instance = new DirectPortalRestApi.RelationshipApi();
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

  describe('RelationshipApi', function() {
    describe('apiRelationshipActivateByIdGet', function() {
      it('should call apiRelationshipActivateByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiRelationshipActivateByIdGet
        //instance.apiRelationshipActivateByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiRelationshipActiveGet', function() {
      it('should call apiRelationshipActiveGet successfully', function(done) {
        //uncomment below and update the code to test apiRelationshipActiveGet
        //instance.apiRelationshipActiveGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiRelationshipByIdGet', function() {
      it('should call apiRelationshipByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiRelationshipByIdGet
        //instance.apiRelationshipByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiRelationshipByNameByIdGet', function() {
      it('should call apiRelationshipByNameByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiRelationshipByNameByIdGet
        //instance.apiRelationshipByNameByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiRelationshipByNamePost', function() {
      it('should call apiRelationshipByNamePost successfully', function(done) {
        //uncomment below and update the code to test apiRelationshipByNamePost
        //instance.apiRelationshipByNamePost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiRelationshipContactAddressesByIdGet', function() {
      it('should call apiRelationshipContactAddressesByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiRelationshipContactAddressesByIdGet
        //instance.apiRelationshipContactAddressesByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiRelationshipContactAddressesByIdPost', function() {
      it('should call apiRelationshipContactAddressesByIdPost successfully', function(done) {
        //uncomment below and update the code to test apiRelationshipContactAddressesByIdPost
        //instance.apiRelationshipContactAddressesByIdPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiRelationshipContactDetailsByIdGet', function() {
      it('should call apiRelationshipContactDetailsByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiRelationshipContactDetailsByIdGet
        //instance.apiRelationshipContactDetailsByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiRelationshipContactDetailsByIdPost', function() {
      it('should call apiRelationshipContactDetailsByIdPost successfully', function(done) {
        //uncomment below and update the code to test apiRelationshipContactDetailsByIdPost
        //instance.apiRelationshipContactDetailsByIdPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiRelationshipDeactivateByIdGet', function() {
      it('should call apiRelationshipDeactivateByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiRelationshipDeactivateByIdGet
        //instance.apiRelationshipDeactivateByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiRelationshipGet', function() {
      it('should call apiRelationshipGet successfully', function(done) {
        //uncomment below and update the code to test apiRelationshipGet
        //instance.apiRelationshipGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiRelationshipNotesByIdGet', function() {
      it('should call apiRelationshipNotesByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiRelationshipNotesByIdGet
        //instance.apiRelationshipNotesByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiRelationshipPost', function() {
      it('should call apiRelationshipPost successfully', function(done) {
        //uncomment below and update the code to test apiRelationshipPost
        //instance.apiRelationshipPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiRelationshipPut', function() {
      it('should call apiRelationshipPut successfully', function(done) {
        //uncomment below and update the code to test apiRelationshipPut
        //instance.apiRelationshipPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiRelationshipRelationshipsByIdGet', function() {
      it('should call apiRelationshipRelationshipsByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiRelationshipRelationshipsByIdGet
        //instance.apiRelationshipRelationshipsByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiRelationshipSetAsDefaultByIdGet', function() {
      it('should call apiRelationshipSetAsDefaultByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiRelationshipSetAsDefaultByIdGet
        //instance.apiRelationshipSetAsDefaultByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiRelationshipTranslationsByIdGet', function() {
      it('should call apiRelationshipTranslationsByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiRelationshipTranslationsByIdGet
        //instance.apiRelationshipTranslationsByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
