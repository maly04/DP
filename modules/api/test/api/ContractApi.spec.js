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
    instance = new DirectPortalRestApi.ContractApi();
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

  describe('ContractApi', function() {
    describe('apiContractActivateByIdGet', function() {
      it('should call apiContractActivateByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiContractActivateByIdGet
        //instance.apiContractActivateByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiContractActiveGet', function() {
      it('should call apiContractActiveGet successfully', function(done) {
        //uncomment below and update the code to test apiContractActiveGet
        //instance.apiContractActiveGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiContractByIdGet', function() {
      it('should call apiContractByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiContractByIdGet
        //instance.apiContractByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiContractByNameByIdGet', function() {
      it('should call apiContractByNameByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiContractByNameByIdGet
        //instance.apiContractByNameByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiContractByNamePost', function() {
      it('should call apiContractByNamePost successfully', function(done) {
        //uncomment below and update the code to test apiContractByNamePost
        //instance.apiContractByNamePost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiContractContactAddressesByIdGet', function() {
      it('should call apiContractContactAddressesByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiContractContactAddressesByIdGet
        //instance.apiContractContactAddressesByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiContractContactAddressesByIdPost', function() {
      it('should call apiContractContactAddressesByIdPost successfully', function(done) {
        //uncomment below and update the code to test apiContractContactAddressesByIdPost
        //instance.apiContractContactAddressesByIdPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiContractContactDetailsByIdGet', function() {
      it('should call apiContractContactDetailsByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiContractContactDetailsByIdGet
        //instance.apiContractContactDetailsByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiContractContactDetailsByIdPost', function() {
      it('should call apiContractContactDetailsByIdPost successfully', function(done) {
        //uncomment below and update the code to test apiContractContactDetailsByIdPost
        //instance.apiContractContactDetailsByIdPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiContractDeactivateByIdGet', function() {
      it('should call apiContractDeactivateByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiContractDeactivateByIdGet
        //instance.apiContractDeactivateByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiContractGet', function() {
      it('should call apiContractGet successfully', function(done) {
        //uncomment below and update the code to test apiContractGet
        //instance.apiContractGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiContractNotesByIdGet', function() {
      it('should call apiContractNotesByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiContractNotesByIdGet
        //instance.apiContractNotesByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiContractPost', function() {
      it('should call apiContractPost successfully', function(done) {
        //uncomment below and update the code to test apiContractPost
        //instance.apiContractPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiContractPut', function() {
      it('should call apiContractPut successfully', function(done) {
        //uncomment below and update the code to test apiContractPut
        //instance.apiContractPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiContractRelationshipsByIdGet', function() {
      it('should call apiContractRelationshipsByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiContractRelationshipsByIdGet
        //instance.apiContractRelationshipsByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiContractSetAsDefaultByIdGet', function() {
      it('should call apiContractSetAsDefaultByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiContractSetAsDefaultByIdGet
        //instance.apiContractSetAsDefaultByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiContractTranslationsByIdGet', function() {
      it('should call apiContractTranslationsByIdGet successfully', function(done) {
        //uncomment below and update the code to test apiContractTranslationsByIdGet
        //instance.apiContractTranslationsByIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
