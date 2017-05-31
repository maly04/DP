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
    instance = new DirectPortalRestApi.BuildingPhaseApi();
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

  describe('BuildingPhaseApi', function() {
    describe('apiBuildingPhaseActivateByIdGet', function() {
      it('should call apiBuildingPhaseActivateByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiBuildingPhaseActivateByIdGet
        //instance.apiBuildingPhaseActivateByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiBuildingPhaseActiveGet', function() {
      it('should call apiBuildingPhaseActiveGet successfully', function(done) {
        //uncomment below and update the code to test apiBuildingPhaseActiveGet
        //instance.apiBuildingPhaseActiveGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiBuildingPhaseByIdGet', function() {
      it('should call apiBuildingPhaseByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiBuildingPhaseByIdGet
        //instance.apiBuildingPhaseByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiBuildingPhaseByNameByIdGet', function() {
      it('should call apiBuildingPhaseByNameByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiBuildingPhaseByNameByIdGet
        //instance.apiBuildingPhaseByNameByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiBuildingPhaseByNamePost', function() {
      it('should call apiBuildingPhaseByNamePost successfully', function(done) {
        //uncomment below and update the code to test apiBuildingPhaseByNamePost
        //instance.apiBuildingPhaseByNamePost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiBuildingPhaseContactAddressesByIdGet', function() {
      it('should call apiBuildingPhaseContactAddressesByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiBuildingPhaseContactAddressesByIdGet
        //instance.apiBuildingPhaseContactAddressesByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiBuildingPhaseContactAddressesByIdPost', function() {
      it('should call apiBuildingPhaseContactAddressesByIdPost successfully', function(done) {
        //uncomment below and update the code to test apiBuildingPhaseContactAddressesByIdPost
        //instance.apiBuildingPhaseContactAddressesByIdPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiBuildingPhaseContactDetailsByIdGet', function() {
      it('should call apiBuildingPhaseContactDetailsByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiBuildingPhaseContactDetailsByIdGet
        //instance.apiBuildingPhaseContactDetailsByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiBuildingPhaseContactDetailsByIdPost', function() {
      it('should call apiBuildingPhaseContactDetailsByIdPost successfully', function(done) {
        //uncomment below and update the code to test apiBuildingPhaseContactDetailsByIdPost
        //instance.apiBuildingPhaseContactDetailsByIdPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiBuildingPhaseDeactivateByIdGet', function() {
      it('should call apiBuildingPhaseDeactivateByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiBuildingPhaseDeactivateByIdGet
        //instance.apiBuildingPhaseDeactivateByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiBuildingPhaseGet', function() {
      it('should call apiBuildingPhaseGet successfully', function(done) {
        //uncomment below and update the code to test apiBuildingPhaseGet
        //instance.apiBuildingPhaseGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiBuildingPhaseNotesByIdGet', function() {
      it('should call apiBuildingPhaseNotesByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiBuildingPhaseNotesByIdGet
        //instance.apiBuildingPhaseNotesByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiBuildingPhasePost', function() {
      it('should call apiBuildingPhasePost successfully', function(done) {
        //uncomment below and update the code to test apiBuildingPhasePost
        //instance.apiBuildingPhasePost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiBuildingPhasePut', function() {
      it('should call apiBuildingPhasePut successfully', function(done) {
        //uncomment below and update the code to test apiBuildingPhasePut
        //instance.apiBuildingPhasePut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiBuildingPhaseRelationshipsByIdGet', function() {
      it('should call apiBuildingPhaseRelationshipsByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiBuildingPhaseRelationshipsByIdGet
        //instance.apiBuildingPhaseRelationshipsByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiBuildingPhaseSetAsDefaultByIdGet', function() {
      it('should call apiBuildingPhaseSetAsDefaultByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiBuildingPhaseSetAsDefaultByIdGet
        //instance.apiBuildingPhaseSetAsDefaultByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiBuildingPhaseTranslationsByIdGet', function() {
      it('should call apiBuildingPhaseTranslationsByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiBuildingPhaseTranslationsByIdGet
        //instance.apiBuildingPhaseTranslationsByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
