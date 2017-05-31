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
    instance = new DirectPortalRestApi.NoteApi();
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

  describe('NoteApi', function() {
    describe('apiNoteActivateByIdGet', function() {
      it('should call apiNoteActivateByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiNoteActivateByIdGet
        //instance.apiNoteActivateByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiNoteActiveGet', function() {
      it('should call apiNoteActiveGet successfully', function(done) {
        //uncomment below and update the code to test apiNoteActiveGet
        //instance.apiNoteActiveGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiNoteByIdGet', function() {
      it('should call apiNoteByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiNoteByIdGet
        //instance.apiNoteByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiNoteByNameByIdGet', function() {
      it('should call apiNoteByNameByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiNoteByNameByIdGet
        //instance.apiNoteByNameByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiNoteByNamePost', function() {
      it('should call apiNoteByNamePost successfully', function(done) {
        //uncomment below and update the code to test apiNoteByNamePost
        //instance.apiNoteByNamePost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiNoteContactAddressesByIdGet', function() {
      it('should call apiNoteContactAddressesByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiNoteContactAddressesByIdGet
        //instance.apiNoteContactAddressesByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiNoteContactAddressesByIdPost', function() {
      it('should call apiNoteContactAddressesByIdPost successfully', function(done) {
        //uncomment below and update the code to test apiNoteContactAddressesByIdPost
        //instance.apiNoteContactAddressesByIdPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiNoteContactDetailsByIdGet', function() {
      it('should call apiNoteContactDetailsByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiNoteContactDetailsByIdGet
        //instance.apiNoteContactDetailsByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiNoteContactDetailsByIdPost', function() {
      it('should call apiNoteContactDetailsByIdPost successfully', function(done) {
        //uncomment below and update the code to test apiNoteContactDetailsByIdPost
        //instance.apiNoteContactDetailsByIdPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiNoteDeactivateByIdGet', function() {
      it('should call apiNoteDeactivateByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiNoteDeactivateByIdGet
        //instance.apiNoteDeactivateByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiNoteGet', function() {
      it('should call apiNoteGet successfully', function(done) {
        //uncomment below and update the code to test apiNoteGet
        //instance.apiNoteGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiNoteNotesByIdGet', function() {
      it('should call apiNoteNotesByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiNoteNotesByIdGet
        //instance.apiNoteNotesByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiNotePost', function() {
      it('should call apiNotePost successfully', function(done) {
        //uncomment below and update the code to test apiNotePost
        //instance.apiNotePost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiNotePut', function() {
      it('should call apiNotePut successfully', function(done) {
        //uncomment below and update the code to test apiNotePut
        //instance.apiNotePut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiNoteRelationshipsByIdGet', function() {
      it('should call apiNoteRelationshipsByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiNoteRelationshipsByIdGet
        //instance.apiNoteRelationshipsByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiNoteSetAsDefaultByIdGet', function() {
      it('should call apiNoteSetAsDefaultByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiNoteSetAsDefaultByIdGet
        //instance.apiNoteSetAsDefaultByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiNoteTranslationsByIdGet', function() {
      it('should call apiNoteTranslationsByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiNoteTranslationsByIdGet
        //instance.apiNoteTranslationsByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
