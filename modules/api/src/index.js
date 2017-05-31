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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/DPApproval', 'model/DPBuilding', 'model/DPBuildingPhase', 'model/DPBuildingStatus', 'model/DPBuildingStatusType', 'model/DPComplex', 'model/DPContactAddress', 'model/DPContactAddressType', 'model/DPContactDetail', 'model/DPContactDetailType', 'model/DPContactViewModel', 'model/DPContactsViewModel', 'model/DPContract', 'model/DPContractDetail', 'model/DPContractDetailType', 'model/DPCountry', 'model/DPCreateUserViewModel', 'model/DPDeveloper', 'model/DPDocument', 'model/DPDocumentType', 'model/DPEntityType', 'model/DPFeature', 'model/DPFeatureType', 'model/DPLanguage', 'model/DPNationality', 'model/DPNote', 'model/DPNotification', 'model/DPOrganizationUnit', 'model/DPOrganizationUnitStatus', 'model/DPOrganizationUnitType', 'model/DPOwnershipType', 'model/DPPayment', 'model/DPPaymentMethod', 'model/DPPaymentPart', 'model/DPPaymentType', 'model/DPPermission', 'model/DPPerson', 'model/DPPersonPrefix', 'model/DPPersonType', 'model/DPPost', 'model/DPPostType', 'model/DPPrice', 'model/DPPriceListItemViewModel', 'model/DPPriceType', 'model/DPQuota', 'model/DPRelationship', 'model/DPRelationshipType', 'model/DPReservation', 'model/DPReservationType', 'model/DPRule', 'model/DPSale', 'model/DPSaleStatus', 'model/DPSaleStatusType', 'model/DPSalesRequest', 'model/DPSalesRequestType', 'model/DPSubscription', 'model/DPTranslation', 'model/DPUnit', 'model/DPUnitQuota', 'model/DPUnitStatus', 'model/DPUnitSubType', 'model/DPUnitType', 'model/IFormFile', 'api/ApprovalApi', 'api/BuildingApi', 'api/BuildingPhaseApi', 'api/BuildingStatusApi', 'api/BuildingStatusTypeApi', 'api/ComplexApi', 'api/ContactAddressApi', 'api/ContactAddressTypeApi', 'api/ContactDetailApi', 'api/ContactDetailTypeApi', 'api/ContractApi', 'api/ContractDetailApi', 'api/ContractDetailTypeApi', 'api/CountryApi', 'api/DPDocumentsModuleServiceApi', 'api/DPEmailServiceApi', 'api/DPMatrixModuleServiceApi', 'api/DPMetadataServiceApi', 'api/DPPhoneBookModuleServiceApi', 'api/DPPriceListModuleServiceApi', 'api/DPSearchModuleServiceApi', 'api/DPTranslationsServiceApi', 'api/DPUsersServiceApi', 'api/DeveloperApi', 'api/DocumentApi', 'api/DocumentTypeApi', 'api/EntityTypeApi', 'api/FeatureApi', 'api/FeatureTypeApi', 'api/LanguageApi', 'api/NationalityApi', 'api/NoteApi', 'api/NotificationApi', 'api/OrganizationUnitApi', 'api/OrganizationUnitStatusApi', 'api/OwnershipTypeApi', 'api/PaymentApi', 'api/PaymentMethodApi', 'api/PaymentPartApi', 'api/PaymentTypeApi', 'api/PermissionApi', 'api/PersonApi', 'api/PersonPrefixApi', 'api/PostApi', 'api/PostTypeApi', 'api/PriceApi', 'api/PriceTypeApi', 'api/QuotaApi', 'api/RelationshipApi', 'api/RelationshipTypeApi', 'api/ReservationApi', 'api/ReservationTypeApi', 'api/RuleApi', 'api/SaleApi', 'api/SaleStatusApi', 'api/SaleStatusTypeApi', 'api/SalesRequestApi', 'api/SalesRequestTypeApi', 'api/SubscriptionApi', 'api/TranslationApi', 'api/UnitApi', 'api/UnitStatusApi', 'api/UnitSubTypeApi', 'api/UnitTypeApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/DPApproval'), require('./model/DPBuilding'), require('./model/DPBuildingPhase'), require('./model/DPBuildingStatus'), require('./model/DPBuildingStatusType'), require('./model/DPComplex'), require('./model/DPContactAddress'), require('./model/DPContactAddressType'), require('./model/DPContactDetail'), require('./model/DPContactDetailType'), require('./model/DPContactViewModel'), require('./model/DPContactsViewModel'), require('./model/DPContract'), require('./model/DPContractDetail'), require('./model/DPContractDetailType'), require('./model/DPCountry'), require('./model/DPCreateUserViewModel'), require('./model/DPDeveloper'), require('./model/DPDocument'), require('./model/DPDocumentType'), require('./model/DPEntityType'), require('./model/DPFeature'), require('./model/DPFeatureType'), require('./model/DPLanguage'), require('./model/DPNationality'), require('./model/DPNote'), require('./model/DPNotification'), require('./model/DPOrganizationUnit'), require('./model/DPOrganizationUnitStatus'), require('./model/DPOrganizationUnitType'), require('./model/DPOwnershipType'), require('./model/DPPayment'), require('./model/DPPaymentMethod'), require('./model/DPPaymentPart'), require('./model/DPPaymentType'), require('./model/DPPermission'), require('./model/DPPerson'), require('./model/DPPersonPrefix'), require('./model/DPPersonType'), require('./model/DPPost'), require('./model/DPPostType'), require('./model/DPPrice'), require('./model/DPPriceListItemViewModel'), require('./model/DPPriceType'), require('./model/DPQuota'), require('./model/DPRelationship'), require('./model/DPRelationshipType'), require('./model/DPReservation'), require('./model/DPReservationType'), require('./model/DPRule'), require('./model/DPSale'), require('./model/DPSaleStatus'), require('./model/DPSaleStatusType'), require('./model/DPSalesRequest'), require('./model/DPSalesRequestType'), require('./model/DPSubscription'), require('./model/DPTranslation'), require('./model/DPUnit'), require('./model/DPUnitQuota'), require('./model/DPUnitStatus'), require('./model/DPUnitSubType'), require('./model/DPUnitType'), require('./model/IFormFile'), require('./api/ApprovalApi'), require('./api/BuildingApi'), require('./api/BuildingPhaseApi'), require('./api/BuildingStatusApi'), require('./api/BuildingStatusTypeApi'), require('./api/ComplexApi'), require('./api/ContactAddressApi'), require('./api/ContactAddressTypeApi'), require('./api/ContactDetailApi'), require('./api/ContactDetailTypeApi'), require('./api/ContractApi'), require('./api/ContractDetailApi'), require('./api/ContractDetailTypeApi'), require('./api/CountryApi'), require('./api/DPDocumentsModuleServiceApi'), require('./api/DPEmailServiceApi'), require('./api/DPMatrixModuleServiceApi'), require('./api/DPMetadataServiceApi'), require('./api/DPPhoneBookModuleServiceApi'), require('./api/DPPriceListModuleServiceApi'), require('./api/DPSearchModuleServiceApi'), require('./api/DPTranslationsServiceApi'), require('./api/DPUsersServiceApi'), require('./api/DeveloperApi'), require('./api/DocumentApi'), require('./api/DocumentTypeApi'), require('./api/EntityTypeApi'), require('./api/FeatureApi'), require('./api/FeatureTypeApi'), require('./api/LanguageApi'), require('./api/NationalityApi'), require('./api/NoteApi'), require('./api/NotificationApi'), require('./api/OrganizationUnitApi'), require('./api/OrganizationUnitStatusApi'), require('./api/OwnershipTypeApi'), require('./api/PaymentApi'), require('./api/PaymentMethodApi'), require('./api/PaymentPartApi'), require('./api/PaymentTypeApi'), require('./api/PermissionApi'), require('./api/PersonApi'), require('./api/PersonPrefixApi'), require('./api/PostApi'), require('./api/PostTypeApi'), require('./api/PriceApi'), require('./api/PriceTypeApi'), require('./api/QuotaApi'), require('./api/RelationshipApi'), require('./api/RelationshipTypeApi'), require('./api/ReservationApi'), require('./api/ReservationTypeApi'), require('./api/RuleApi'), require('./api/SaleApi'), require('./api/SaleStatusApi'), require('./api/SaleStatusTypeApi'), require('./api/SalesRequestApi'), require('./api/SalesRequestTypeApi'), require('./api/SubscriptionApi'), require('./api/TranslationApi'), require('./api/UnitApi'), require('./api/UnitStatusApi'), require('./api/UnitSubTypeApi'), require('./api/UnitTypeApi'));
  }
}(function(ApiClient, DPApproval, DPBuilding, DPBuildingPhase, DPBuildingStatus, DPBuildingStatusType, DPComplex, DPContactAddress, DPContactAddressType, DPContactDetail, DPContactDetailType, DPContactViewModel, DPContactsViewModel, DPContract, DPContractDetail, DPContractDetailType, DPCountry, DPCreateUserViewModel, DPDeveloper, DPDocument, DPDocumentType, DPEntityType, DPFeature, DPFeatureType, DPLanguage, DPNationality, DPNote, DPNotification, DPOrganizationUnit, DPOrganizationUnitStatus, DPOrganizationUnitType, DPOwnershipType, DPPayment, DPPaymentMethod, DPPaymentPart, DPPaymentType, DPPermission, DPPerson, DPPersonPrefix, DPPersonType, DPPost, DPPostType, DPPrice, DPPriceListItemViewModel, DPPriceType, DPQuota, DPRelationship, DPRelationshipType, DPReservation, DPReservationType, DPRule, DPSale, DPSaleStatus, DPSaleStatusType, DPSalesRequest, DPSalesRequestType, DPSubscription, DPTranslation, DPUnit, DPUnitQuota, DPUnitStatus, DPUnitSubType, DPUnitType, IFormFile, ApprovalApi, BuildingApi, BuildingPhaseApi, BuildingStatusApi, BuildingStatusTypeApi, ComplexApi, ContactAddressApi, ContactAddressTypeApi, ContactDetailApi, ContactDetailTypeApi, ContractApi, ContractDetailApi, ContractDetailTypeApi, CountryApi, DPDocumentsModuleServiceApi, DPEmailServiceApi, DPMatrixModuleServiceApi, DPMetadataServiceApi, DPPhoneBookModuleServiceApi, DPPriceListModuleServiceApi, DPSearchModuleServiceApi, DPTranslationsServiceApi, DPUsersServiceApi, DeveloperApi, DocumentApi, DocumentTypeApi, EntityTypeApi, FeatureApi, FeatureTypeApi, LanguageApi, NationalityApi, NoteApi, NotificationApi, OrganizationUnitApi, OrganizationUnitStatusApi, OwnershipTypeApi, PaymentApi, PaymentMethodApi, PaymentPartApi, PaymentTypeApi, PermissionApi, PersonApi, PersonPrefixApi, PostApi, PostTypeApi, PriceApi, PriceTypeApi, QuotaApi, RelationshipApi, RelationshipTypeApi, ReservationApi, ReservationTypeApi, RuleApi, SaleApi, SaleStatusApi, SaleStatusTypeApi, SalesRequestApi, SalesRequestTypeApi, SubscriptionApi, TranslationApi, UnitApi, UnitStatusApi, UnitSubTypeApi, UnitTypeApi) {
  'use strict';

  /**
   * The_Direct_Portal_REST_API.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var DirectPortalRestApi = require('index'); // See note below*.
   * var xxxSvc = new DirectPortalRestApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new DirectPortalRestApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new DirectPortalRestApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new DirectPortalRestApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version v1
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The DPApproval model constructor.
     * @property {module:model/DPApproval}
     */
    DPApproval: DPApproval,
    /**
     * The DPBuilding model constructor.
     * @property {module:model/DPBuilding}
     */
    DPBuilding: DPBuilding,
    /**
     * The DPBuildingPhase model constructor.
     * @property {module:model/DPBuildingPhase}
     */
    DPBuildingPhase: DPBuildingPhase,
    /**
     * The DPBuildingStatus model constructor.
     * @property {module:model/DPBuildingStatus}
     */
    DPBuildingStatus: DPBuildingStatus,
    /**
     * The DPBuildingStatusType model constructor.
     * @property {module:model/DPBuildingStatusType}
     */
    DPBuildingStatusType: DPBuildingStatusType,
    /**
     * The DPComplex model constructor.
     * @property {module:model/DPComplex}
     */
    DPComplex: DPComplex,
    /**
     * The DPContactAddress model constructor.
     * @property {module:model/DPContactAddress}
     */
    DPContactAddress: DPContactAddress,
    /**
     * The DPContactAddressType model constructor.
     * @property {module:model/DPContactAddressType}
     */
    DPContactAddressType: DPContactAddressType,
    /**
     * The DPContactDetail model constructor.
     * @property {module:model/DPContactDetail}
     */
    DPContactDetail: DPContactDetail,
    /**
     * The DPContactDetailType model constructor.
     * @property {module:model/DPContactDetailType}
     */
    DPContactDetailType: DPContactDetailType,
    /**
     * The DPContactViewModel model constructor.
     * @property {module:model/DPContactViewModel}
     */
    DPContactViewModel: DPContactViewModel,
    /**
     * The DPContactsViewModel model constructor.
     * @property {module:model/DPContactsViewModel}
     */
    DPContactsViewModel: DPContactsViewModel,
    /**
     * The DPContract model constructor.
     * @property {module:model/DPContract}
     */
    DPContract: DPContract,
    /**
     * The DPContractDetail model constructor.
     * @property {module:model/DPContractDetail}
     */
    DPContractDetail: DPContractDetail,
    /**
     * The DPContractDetailType model constructor.
     * @property {module:model/DPContractDetailType}
     */
    DPContractDetailType: DPContractDetailType,
    /**
     * The DPCountry model constructor.
     * @property {module:model/DPCountry}
     */
    DPCountry: DPCountry,
    /**
     * The DPCreateUserViewModel model constructor.
     * @property {module:model/DPCreateUserViewModel}
     */
    DPCreateUserViewModel: DPCreateUserViewModel,
    /**
     * The DPDeveloper model constructor.
     * @property {module:model/DPDeveloper}
     */
    DPDeveloper: DPDeveloper,
    /**
     * The DPDocument model constructor.
     * @property {module:model/DPDocument}
     */
    DPDocument: DPDocument,
    /**
     * The DPDocumentType model constructor.
     * @property {module:model/DPDocumentType}
     */
    DPDocumentType: DPDocumentType,
    /**
     * The DPEntityType model constructor.
     * @property {module:model/DPEntityType}
     */
    DPEntityType: DPEntityType,
    /**
     * The DPFeature model constructor.
     * @property {module:model/DPFeature}
     */
    DPFeature: DPFeature,
    /**
     * The DPFeatureType model constructor.
     * @property {module:model/DPFeatureType}
     */
    DPFeatureType: DPFeatureType,
    /**
     * The DPLanguage model constructor.
     * @property {module:model/DPLanguage}
     */
    DPLanguage: DPLanguage,
    /**
     * The DPNationality model constructor.
     * @property {module:model/DPNationality}
     */
    DPNationality: DPNationality,
    /**
     * The DPNote model constructor.
     * @property {module:model/DPNote}
     */
    DPNote: DPNote,
    /**
     * The DPNotification model constructor.
     * @property {module:model/DPNotification}
     */
    DPNotification: DPNotification,
    /**
     * The DPOrganizationUnit model constructor.
     * @property {module:model/DPOrganizationUnit}
     */
    DPOrganizationUnit: DPOrganizationUnit,
    /**
     * The DPOrganizationUnitStatus model constructor.
     * @property {module:model/DPOrganizationUnitStatus}
     */
    DPOrganizationUnitStatus: DPOrganizationUnitStatus,
    /**
     * The DPOrganizationUnitType model constructor.
     * @property {module:model/DPOrganizationUnitType}
     */
    DPOrganizationUnitType: DPOrganizationUnitType,
    /**
     * The DPOwnershipType model constructor.
     * @property {module:model/DPOwnershipType}
     */
    DPOwnershipType: DPOwnershipType,
    /**
     * The DPPayment model constructor.
     * @property {module:model/DPPayment}
     */
    DPPayment: DPPayment,
    /**
     * The DPPaymentMethod model constructor.
     * @property {module:model/DPPaymentMethod}
     */
    DPPaymentMethod: DPPaymentMethod,
    /**
     * The DPPaymentPart model constructor.
     * @property {module:model/DPPaymentPart}
     */
    DPPaymentPart: DPPaymentPart,
    /**
     * The DPPaymentType model constructor.
     * @property {module:model/DPPaymentType}
     */
    DPPaymentType: DPPaymentType,
    /**
     * The DPPermission model constructor.
     * @property {module:model/DPPermission}
     */
    DPPermission: DPPermission,
    /**
     * The DPPerson model constructor.
     * @property {module:model/DPPerson}
     */
    DPPerson: DPPerson,
    /**
     * The DPPersonPrefix model constructor.
     * @property {module:model/DPPersonPrefix}
     */
    DPPersonPrefix: DPPersonPrefix,
    /**
     * The DPPersonType model constructor.
     * @property {module:model/DPPersonType}
     */
    DPPersonType: DPPersonType,
    /**
     * The DPPost model constructor.
     * @property {module:model/DPPost}
     */
    DPPost: DPPost,
    /**
     * The DPPostType model constructor.
     * @property {module:model/DPPostType}
     */
    DPPostType: DPPostType,
    /**
     * The DPPrice model constructor.
     * @property {module:model/DPPrice}
     */
    DPPrice: DPPrice,
    /**
     * The DPPriceListItemViewModel model constructor.
     * @property {module:model/DPPriceListItemViewModel}
     */
    DPPriceListItemViewModel: DPPriceListItemViewModel,
    /**
     * The DPPriceType model constructor.
     * @property {module:model/DPPriceType}
     */
    DPPriceType: DPPriceType,
    /**
     * The DPQuota model constructor.
     * @property {module:model/DPQuota}
     */
    DPQuota: DPQuota,
    /**
     * The DPRelationship model constructor.
     * @property {module:model/DPRelationship}
     */
    DPRelationship: DPRelationship,
    /**
     * The DPRelationshipType model constructor.
     * @property {module:model/DPRelationshipType}
     */
    DPRelationshipType: DPRelationshipType,
    /**
     * The DPReservation model constructor.
     * @property {module:model/DPReservation}
     */
    DPReservation: DPReservation,
    /**
     * The DPReservationType model constructor.
     * @property {module:model/DPReservationType}
     */
    DPReservationType: DPReservationType,
    /**
     * The DPRule model constructor.
     * @property {module:model/DPRule}
     */
    DPRule: DPRule,
    /**
     * The DPSale model constructor.
     * @property {module:model/DPSale}
     */
    DPSale: DPSale,
    /**
     * The DPSaleStatus model constructor.
     * @property {module:model/DPSaleStatus}
     */
    DPSaleStatus: DPSaleStatus,
    /**
     * The DPSaleStatusType model constructor.
     * @property {module:model/DPSaleStatusType}
     */
    DPSaleStatusType: DPSaleStatusType,
    /**
     * The DPSalesRequest model constructor.
     * @property {module:model/DPSalesRequest}
     */
    DPSalesRequest: DPSalesRequest,
    /**
     * The DPSalesRequestType model constructor.
     * @property {module:model/DPSalesRequestType}
     */
    DPSalesRequestType: DPSalesRequestType,
    /**
     * The DPSubscription model constructor.
     * @property {module:model/DPSubscription}
     */
    DPSubscription: DPSubscription,
    /**
     * The DPTranslation model constructor.
     * @property {module:model/DPTranslation}
     */
    DPTranslation: DPTranslation,
    /**
     * The DPUnit model constructor.
     * @property {module:model/DPUnit}
     */
    DPUnit: DPUnit,
    /**
     * The DPUnitQuota model constructor.
     * @property {module:model/DPUnitQuota}
     */
    DPUnitQuota: DPUnitQuota,
    /**
     * The DPUnitStatus model constructor.
     * @property {module:model/DPUnitStatus}
     */
    DPUnitStatus: DPUnitStatus,
    /**
     * The DPUnitSubType model constructor.
     * @property {module:model/DPUnitSubType}
     */
    DPUnitSubType: DPUnitSubType,
    /**
     * The DPUnitType model constructor.
     * @property {module:model/DPUnitType}
     */
    DPUnitType: DPUnitType,
    /**
     * The IFormFile model constructor.
     * @property {module:model/IFormFile}
     */
    IFormFile: IFormFile,
    /**
     * The ApprovalApi service constructor.
     * @property {module:api/ApprovalApi}
     */
    ApprovalApi: ApprovalApi,
    /**
     * The BuildingApi service constructor.
     * @property {module:api/BuildingApi}
     */
    BuildingApi: BuildingApi,
    /**
     * The BuildingPhaseApi service constructor.
     * @property {module:api/BuildingPhaseApi}
     */
    BuildingPhaseApi: BuildingPhaseApi,
    /**
     * The BuildingStatusApi service constructor.
     * @property {module:api/BuildingStatusApi}
     */
    BuildingStatusApi: BuildingStatusApi,
    /**
     * The BuildingStatusTypeApi service constructor.
     * @property {module:api/BuildingStatusTypeApi}
     */
    BuildingStatusTypeApi: BuildingStatusTypeApi,
    /**
     * The ComplexApi service constructor.
     * @property {module:api/ComplexApi}
     */
    ComplexApi: ComplexApi,
    /**
     * The ContactAddressApi service constructor.
     * @property {module:api/ContactAddressApi}
     */
    ContactAddressApi: ContactAddressApi,
    /**
     * The ContactAddressTypeApi service constructor.
     * @property {module:api/ContactAddressTypeApi}
     */
    ContactAddressTypeApi: ContactAddressTypeApi,
    /**
     * The ContactDetailApi service constructor.
     * @property {module:api/ContactDetailApi}
     */
    ContactDetailApi: ContactDetailApi,
    /**
     * The ContactDetailTypeApi service constructor.
     * @property {module:api/ContactDetailTypeApi}
     */
    ContactDetailTypeApi: ContactDetailTypeApi,
    /**
     * The ContractApi service constructor.
     * @property {module:api/ContractApi}
     */
    ContractApi: ContractApi,
    /**
     * The ContractDetailApi service constructor.
     * @property {module:api/ContractDetailApi}
     */
    ContractDetailApi: ContractDetailApi,
    /**
     * The ContractDetailTypeApi service constructor.
     * @property {module:api/ContractDetailTypeApi}
     */
    ContractDetailTypeApi: ContractDetailTypeApi,
    /**
     * The CountryApi service constructor.
     * @property {module:api/CountryApi}
     */
    CountryApi: CountryApi,
    /**
     * The DPDocumentsModuleServiceApi service constructor.
     * @property {module:api/DPDocumentsModuleServiceApi}
     */
    DPDocumentsModuleServiceApi: DPDocumentsModuleServiceApi,
    /**
     * The DPEmailServiceApi service constructor.
     * @property {module:api/DPEmailServiceApi}
     */
    DPEmailServiceApi: DPEmailServiceApi,
    /**
     * The DPMatrixModuleServiceApi service constructor.
     * @property {module:api/DPMatrixModuleServiceApi}
     */
    DPMatrixModuleServiceApi: DPMatrixModuleServiceApi,
    /**
     * The DPMetadataServiceApi service constructor.
     * @property {module:api/DPMetadataServiceApi}
     */
    DPMetadataServiceApi: DPMetadataServiceApi,
    /**
     * The DPPhoneBookModuleServiceApi service constructor.
     * @property {module:api/DPPhoneBookModuleServiceApi}
     */
    DPPhoneBookModuleServiceApi: DPPhoneBookModuleServiceApi,
    /**
     * The DPPriceListModuleServiceApi service constructor.
     * @property {module:api/DPPriceListModuleServiceApi}
     */
    DPPriceListModuleServiceApi: DPPriceListModuleServiceApi,
    /**
     * The DPSearchModuleServiceApi service constructor.
     * @property {module:api/DPSearchModuleServiceApi}
     */
    DPSearchModuleServiceApi: DPSearchModuleServiceApi,
    /**
     * The DPTranslationsServiceApi service constructor.
     * @property {module:api/DPTranslationsServiceApi}
     */
    DPTranslationsServiceApi: DPTranslationsServiceApi,
    /**
     * The DPUsersServiceApi service constructor.
     * @property {module:api/DPUsersServiceApi}
     */
    DPUsersServiceApi: DPUsersServiceApi,
    /**
     * The DeveloperApi service constructor.
     * @property {module:api/DeveloperApi}
     */
    DeveloperApi: DeveloperApi,
    /**
     * The DocumentApi service constructor.
     * @property {module:api/DocumentApi}
     */
    DocumentApi: DocumentApi,
    /**
     * The DocumentTypeApi service constructor.
     * @property {module:api/DocumentTypeApi}
     */
    DocumentTypeApi: DocumentTypeApi,
    /**
     * The EntityTypeApi service constructor.
     * @property {module:api/EntityTypeApi}
     */
    EntityTypeApi: EntityTypeApi,
    /**
     * The FeatureApi service constructor.
     * @property {module:api/FeatureApi}
     */
    FeatureApi: FeatureApi,
    /**
     * The FeatureTypeApi service constructor.
     * @property {module:api/FeatureTypeApi}
     */
    FeatureTypeApi: FeatureTypeApi,
    /**
     * The LanguageApi service constructor.
     * @property {module:api/LanguageApi}
     */
    LanguageApi: LanguageApi,
    /**
     * The NationalityApi service constructor.
     * @property {module:api/NationalityApi}
     */
    NationalityApi: NationalityApi,
    /**
     * The NoteApi service constructor.
     * @property {module:api/NoteApi}
     */
    NoteApi: NoteApi,
    /**
     * The NotificationApi service constructor.
     * @property {module:api/NotificationApi}
     */
    NotificationApi: NotificationApi,
    /**
     * The OrganizationUnitApi service constructor.
     * @property {module:api/OrganizationUnitApi}
     */
    OrganizationUnitApi: OrganizationUnitApi,
    /**
     * The OrganizationUnitStatusApi service constructor.
     * @property {module:api/OrganizationUnitStatusApi}
     */
    OrganizationUnitStatusApi: OrganizationUnitStatusApi,
    /**
     * The OwnershipTypeApi service constructor.
     * @property {module:api/OwnershipTypeApi}
     */
    OwnershipTypeApi: OwnershipTypeApi,
    /**
     * The PaymentApi service constructor.
     * @property {module:api/PaymentApi}
     */
    PaymentApi: PaymentApi,
    /**
     * The PaymentMethodApi service constructor.
     * @property {module:api/PaymentMethodApi}
     */
    PaymentMethodApi: PaymentMethodApi,
    /**
     * The PaymentPartApi service constructor.
     * @property {module:api/PaymentPartApi}
     */
    PaymentPartApi: PaymentPartApi,
    /**
     * The PaymentTypeApi service constructor.
     * @property {module:api/PaymentTypeApi}
     */
    PaymentTypeApi: PaymentTypeApi,
    /**
     * The PermissionApi service constructor.
     * @property {module:api/PermissionApi}
     */
    PermissionApi: PermissionApi,
    /**
     * The PersonApi service constructor.
     * @property {module:api/PersonApi}
     */
    PersonApi: PersonApi,
    /**
     * The PersonPrefixApi service constructor.
     * @property {module:api/PersonPrefixApi}
     */
    PersonPrefixApi: PersonPrefixApi,
    /**
     * The PostApi service constructor.
     * @property {module:api/PostApi}
     */
    PostApi: PostApi,
    /**
     * The PostTypeApi service constructor.
     * @property {module:api/PostTypeApi}
     */
    PostTypeApi: PostTypeApi,
    /**
     * The PriceApi service constructor.
     * @property {module:api/PriceApi}
     */
    PriceApi: PriceApi,
    /**
     * The PriceTypeApi service constructor.
     * @property {module:api/PriceTypeApi}
     */
    PriceTypeApi: PriceTypeApi,
    /**
     * The QuotaApi service constructor.
     * @property {module:api/QuotaApi}
     */
    QuotaApi: QuotaApi,
    /**
     * The RelationshipApi service constructor.
     * @property {module:api/RelationshipApi}
     */
    RelationshipApi: RelationshipApi,
    /**
     * The RelationshipTypeApi service constructor.
     * @property {module:api/RelationshipTypeApi}
     */
    RelationshipTypeApi: RelationshipTypeApi,
    /**
     * The ReservationApi service constructor.
     * @property {module:api/ReservationApi}
     */
    ReservationApi: ReservationApi,
    /**
     * The ReservationTypeApi service constructor.
     * @property {module:api/ReservationTypeApi}
     */
    ReservationTypeApi: ReservationTypeApi,
    /**
     * The RuleApi service constructor.
     * @property {module:api/RuleApi}
     */
    RuleApi: RuleApi,
    /**
     * The SaleApi service constructor.
     * @property {module:api/SaleApi}
     */
    SaleApi: SaleApi,
    /**
     * The SaleStatusApi service constructor.
     * @property {module:api/SaleStatusApi}
     */
    SaleStatusApi: SaleStatusApi,
    /**
     * The SaleStatusTypeApi service constructor.
     * @property {module:api/SaleStatusTypeApi}
     */
    SaleStatusTypeApi: SaleStatusTypeApi,
    /**
     * The SalesRequestApi service constructor.
     * @property {module:api/SalesRequestApi}
     */
    SalesRequestApi: SalesRequestApi,
    /**
     * The SalesRequestTypeApi service constructor.
     * @property {module:api/SalesRequestTypeApi}
     */
    SalesRequestTypeApi: SalesRequestTypeApi,
    /**
     * The SubscriptionApi service constructor.
     * @property {module:api/SubscriptionApi}
     */
    SubscriptionApi: SubscriptionApi,
    /**
     * The TranslationApi service constructor.
     * @property {module:api/TranslationApi}
     */
    TranslationApi: TranslationApi,
    /**
     * The UnitApi service constructor.
     * @property {module:api/UnitApi}
     */
    UnitApi: UnitApi,
    /**
     * The UnitStatusApi service constructor.
     * @property {module:api/UnitStatusApi}
     */
    UnitStatusApi: UnitStatusApi,
    /**
     * The UnitSubTypeApi service constructor.
     * @property {module:api/UnitSubTypeApi}
     */
    UnitSubTypeApi: UnitSubTypeApi,
    /**
     * The UnitTypeApi service constructor.
     * @property {module:api/UnitTypeApi}
     */
    UnitTypeApi: UnitTypeApi
  };

  return exports;
}));
