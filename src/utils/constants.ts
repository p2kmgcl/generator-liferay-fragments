import path from 'path';

export const ADD_DEPLOYMENT_DESCRIPTOR_VAR = 'addDeploymentDescriptor';
export const COLLECTION_DESCRIPTION_DEFAULT = '';
export const COLLECTION_DESCRIPTION_VAR = 'collectionDescription';
export const COLLECTION_NAME_VAR = 'collectionName';
export const COLLECTION_SLUG_VAR = 'collectionSlug';
export const DATA_LFR_SUPPORTED = 'dataLfrSupported';
export const DATA_LFR_SUPPORTED_MIN_VERSION = '7.3.3';
export const DEPLOYMENT_DESCRIPTOR_COMPANY_VAR = 'companyWebId';
export const DEPLOYMENT_DESCRIPTOR_GROUP_VAR = 'groupKey';
export const FRAGMENT_COLLECTION_SLUG_MESSAGE = 'Choose a collection';
export const FRAGMENT_COLLECTION_SLUG_VAR = 'fragmentCollectionSlug';
export const FRAGMENT_COMPOSITION_NAME_VAR = 'fragmentCompositionName';
export const FRAGMENT_NAME_MESSAGE = 'Fragment name (required)';
export const FRAGMENT_NAME_VAR = 'fragmentName';
export const FRAGMENT_SLUG_VAR = 'fragmentSlug';
export const FRAGMENT_TYPE_DEFAULT = 'section';
export const FRAGMENT_TYPE_MESSAGE = 'Fragment type';
export const FRAGMENT_TYPE_VAR = 'fragmentType';
export const IMPORT_WATCH_VAR = 'watch';
export const MIN_LIFERAY_VERSION_SAMPLE = '7.2.0';
export const MIN_LIFERAY_VERSION_VAR = 'minLiferayVersion';
export const NEW_COLLECTION_MESSAGE = '+ New collection';
export const NEW_COLLECTION_SHORT = '(new)';
export const NEW_COLLECTION_VALUE = '__NEW_COLLECTION_VALUE__';

export const BUNDLER_OUTPUT_DIR = path.join(
  'build',
  'liferay-npm-bundler-output'
);

export const FRAGMENT_IMPORT_STATUS = {
  IMPORTED: 'imported',
  IMPORTED_DRAFT: 'imported-draft',
  INVALID: 'invalid',
};

export const FRAGMENT_NAME_NON_EMPTY_ERROR_MESSAGE =
  'Fragment name must not be empty';

export const FRAGMENTS_PORTLET_ID =
  'com_liferay_fragment_web_portlet_FragmentPortlet';

export const FRAGMENT_TYPE_OPTIONS = [
  { name: 'Section', value: 'section' },
  { name: 'Component', value: 'component' },
];

export const MIN_LIFERAY_VERSION_MESSAGE =
  'Minimum liferay version you want fragments to be compatible with (e.g. 7.3.0)';

export const MIN_LIFERAY_VERSION_MESSAGE_ERROR_MESSAGE =
  'Introduce a valid version';

export const PAGE_TEMPLATE_IMPORT_STATUS = {
  IMPORTED: 'imported',
  IGNORED: 'ignored',
  INVALID: 'invalid',
};

export const PORTLET_FILE_REPOSITORY =
  'com.liferay.portal.repository.portletrepository.PortletRepository';