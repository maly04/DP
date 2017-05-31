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
    instance = new DirectPortalRestApi.ContractDetailApi();
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

  describe('ContractDetailApi', function() {
    describe('apiContractDetailActivateByIdGet', function() {
      it('should call apiContractDetailActivateByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiContractDetailActivateByIdGet
        //instance.apiContractDetailActivateByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiContractDetailActiveGet', function() {
      it('should call apiContractDetailActiveGet successfully', function(done) {
        //uncomment below and update the code to test apiContractDetailActiveGet
        //instance.apiContractDetailActiveGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiContractDetailByIdGet', function() {
      it('should call apiContractDetailByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiContractDetailByIdGet
        //instance.apiContractDetailByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiContractDetailByNameByIdGet', function() {
      it('should call apiContractDetailByNameByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiContractDetailByNameByIdGet
        //instance.apiContractDetailByNameByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiContractDetailByNamePost', function() {
      it('should call apiContractDetailByNamePost successfully', function(done) {
        //uncomment below and update the code to test apiContractDetailByNamePost
        //instance.apiContractDetailByNamePost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiContractDetailContactAddressesByIdGet', function() {
      it('should call apiContractDetailContactAddressesByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiContractDetailContactAddressesByIdGet
        //instance.apiContractDetailContactAddressesByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiContractDetailContactAddressesByIdPost', function() {
      it('should call apiContractDetailContactAddressesByIdPost successfully', function(done) {
        //uncomment below and update the code to test apiContractDetailContactAddressesByIdPost
        //instance.apiContractDetailContactAddressesByIdPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiContractDetailContactDetailsByIdGet', function() {
      it('should call apiContractDetailContactDetailsByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiContractDetailContactDetailsByIdGet
        //instance.apiContractDetailContactDetailsByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiContractDetailContactDetailsByIdPost', function() {
      it('should call apiContractDetailContactDetailsByIdPost successfully', function(done) {
        //uncomment below and update the code to test apiContractDetailContactDetailsByIdPost
        //instance.apiContractDetailContactDetailsByIdPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiContractDetailDeactivateByIdGet', function() {
      it('should call apiContractDetailDeactivateByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiContractDetailDeactivateByIdGet
        //instance.apiContractDetailDeactivateByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiContractDetailGet', function() {
      it('should call apiContractDetailGet successfully', function(done) {
        //uncomment below and update the code to test apiContractDetailGet
        //instance.apiContractDetailGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiContractDetailNotesByIdGet', function() {
      it('should call apiContractDetailNotesByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiContractDetailNotesByIdGet
        //instance.apiContractDetailNotesByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiContractDetailPost', function() {
      it('should call apiContractDetailPost successfully', function(done) {
        //uncomment below and update the code to test apiContractDetailPost
        //instance.apiContractDetailPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiContractDetailPut', function() {
      it('should call apiContractDetailPut successfully', function(done) {
        //uncomment below and update the code to test apiContractDetailPut
        //instance.apiContractDetailPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiContractDetailRelationshipsByIdGet', function() {
      it('should call apiContractDetailRelationshipsByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiContractDetailRelationshipsByIdGet
        //instance.apiContractDetailRelationshipsByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiContractDetailSetAsDefaultByIdGet', function() {
      it('should call apiContractDetailSetAsDefaultByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiContractDetailSetAsDefaultByIdGet
        //instance.apiContractDetailSetAsDefaultByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiContractDetailTranslationsByIdGet', function() {
      it('should call apiContractDetailTranslationsByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiContractDetailTranslationsByIdGet
        //instance.apiContractDetailTranslationsByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
