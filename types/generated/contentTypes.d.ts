import type { Schema, Attribute } from '@strapi/strapi';

export interface AdminPermission extends Schema.CollectionType {
  collectionName: 'admin_permissions';
  info: {
    name: 'Permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    subject: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    properties: Attribute.JSON & Attribute.DefaultTo<{}>;
    conditions: Attribute.JSON & Attribute.DefaultTo<[]>;
    role: Attribute.Relation<'admin::permission', 'manyToOne', 'admin::role'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminUser extends Schema.CollectionType {
  collectionName: 'admin_users';
  info: {
    name: 'User';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    firstname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    username: Attribute.String;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    registrationToken: Attribute.String & Attribute.Private;
    isActive: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    roles: Attribute.Relation<'admin::user', 'manyToMany', 'admin::role'> &
      Attribute.Private;
    blocked: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>;
    preferedLanguage: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminRole extends Schema.CollectionType {
  collectionName: 'admin_roles';
  info: {
    name: 'Role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    code: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String;
    users: Attribute.Relation<'admin::role', 'manyToMany', 'admin::user'>;
    permissions: Attribute.Relation<
      'admin::role',
      'oneToMany',
      'admin::permission'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminApiToken extends Schema.CollectionType {
  collectionName: 'strapi_api_tokens';
  info: {
    name: 'Api Token';
    singularName: 'api-token';
    pluralName: 'api-tokens';
    displayName: 'Api Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    type: Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Attribute.Required &
      Attribute.DefaultTo<'read-only'>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::api-token',
      'oneToMany',
      'admin::api-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_api_token_permissions';
  info: {
    name: 'API Token Permission';
    description: '';
    singularName: 'api-token-permission';
    pluralName: 'api-token-permissions';
    displayName: 'API Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::api-token-permission',
      'manyToOne',
      'admin::api-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferToken extends Schema.CollectionType {
  collectionName: 'strapi_transfer_tokens';
  info: {
    name: 'Transfer Token';
    singularName: 'transfer-token';
    pluralName: 'transfer-tokens';
    displayName: 'Transfer Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::transfer-token',
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    name: 'Transfer Token Permission';
    description: '';
    singularName: 'transfer-token-permission';
    pluralName: 'transfer-token-permissions';
    displayName: 'Transfer Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::transfer-token-permission',
      'manyToOne',
      'admin::transfer-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFile extends Schema.CollectionType {
  collectionName: 'files';
  info: {
    singularName: 'file';
    pluralName: 'files';
    displayName: 'File';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    alternativeText: Attribute.String;
    caption: Attribute.String;
    width: Attribute.Integer;
    height: Attribute.Integer;
    formats: Attribute.JSON;
    hash: Attribute.String & Attribute.Required;
    ext: Attribute.String;
    mime: Attribute.String & Attribute.Required;
    size: Attribute.Decimal & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    previewUrl: Attribute.String;
    provider: Attribute.String & Attribute.Required;
    provider_metadata: Attribute.JSON;
    related: Attribute.Relation<'plugin::upload.file', 'morphToMany'>;
    folder: Attribute.Relation<
      'plugin::upload.file',
      'manyToOne',
      'plugin::upload.folder'
    > &
      Attribute.Private;
    folderPath: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFolder extends Schema.CollectionType {
  collectionName: 'upload_folders';
  info: {
    singularName: 'folder';
    pluralName: 'folders';
    displayName: 'Folder';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    pathId: Attribute.Integer & Attribute.Required & Attribute.Unique;
    parent: Attribute.Relation<
      'plugin::upload.folder',
      'manyToOne',
      'plugin::upload.folder'
    >;
    children: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.folder'
    >;
    files: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.file'
    >;
    path: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginExpoNotificationsExponotification
  extends Schema.CollectionType {
  collectionName: 'exponotifications';
  info: {
    singularName: 'exponotification';
    pluralName: 'exponotifications';
    displayName: 'Expo notification';
  };
  options: {
    draftAndPublish: false;
    comment: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: true;
    };
    'content-type-builder': {
      visible: 'false';
    };
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    subtitle: Attribute.String;
    data: Attribute.JSON;
    receivers: Attribute.JSON;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::expo-notifications.exponotification',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::expo-notifications.exponotification',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Schema.CollectionType {
  collectionName: 'up_permissions';
  info: {
    name: 'permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String & Attribute.Required;
    role: Attribute.Relation<
      'plugin::users-permissions.permission',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole extends Schema.CollectionType {
  collectionName: 'up_roles';
  info: {
    name: 'role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    description: Attribute.String;
    type: Attribute.String & Attribute.Unique;
    permissions: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    users: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsUser extends Schema.CollectionType {
  collectionName: 'up_users';
  info: {
    name: 'user';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    username: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Attribute.String;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    confirmationToken: Attribute.String & Attribute.Private;
    confirmed: Attribute.Boolean & Attribute.DefaultTo<false>;
    blocked: Attribute.Boolean & Attribute.DefaultTo<false>;
    role: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    type_d_evenements: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToMany',
      'api::type-evenement.type-evenement'
    >;
    expoPushToken: Attribute.String;
    commissions: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToMany',
      'api::commission.commission'
    >;
    Bureau: Attribute.Boolean & Attribute.DefaultTo<false>;
    CA: Attribute.Boolean & Attribute.DefaultTo<false>;
    AG: Attribute.Boolean & Attribute.DefaultTo<true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginStrapiNewsletterNewsletter
  extends Schema.CollectionType {
  collectionName: 'newsletters';
  info: {
    singularName: 'newsletter';
    pluralName: 'newsletters';
    displayName: 'Newsletter';
  };
  options: {
    draftAndPublish: false;
    comment: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    subject: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::strapi-newsletter.newsletter',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::strapi-newsletter.newsletter',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginStrapiNewsletterSubscribedUser
  extends Schema.CollectionType {
  collectionName: 'subscribed_user';
  info: {
    singularName: 'subscribed-user';
    pluralName: 'subscribed-users';
    displayName: 'Subscribed Users';
  };
  options: {
    draftAndPublish: false;
    comment: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    email: Attribute.Email & Attribute.Required & Attribute.Unique;
    provider: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::strapi-newsletter.subscribed-user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::strapi-newsletter.subscribed-user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginI18NLocale extends Schema.CollectionType {
  collectionName: 'i18n_locale';
  info: {
    singularName: 'locale';
    pluralName: 'locales';
    collectionName: 'locales';
    displayName: 'Locale';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.SetMinMax<{
        min: 1;
        max: 50;
      }>;
    code: Attribute.String & Attribute.Unique;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiAnnuairePrestaAnnuairePresta extends Schema.CollectionType {
  collectionName: 'annuaire_prestas';
  info: {
    singularName: 'annuaire-presta';
    pluralName: 'annuaire-prestas';
    displayName: 'Annuaire presta';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String & Attribute.Required & Attribute.Unique;
    telephone: Attribute.String;
    linkedin: Attribute.String;
    webSite: Attribute.String;
    email_presta: Attribute.String;
    pays: Attribute.String &
      Attribute.CustomField<'plugin::country-select.country'>;
    expertise_blockchain: Attribute.JSON &
      Attribute.CustomField<
        'plugin::multi-select.multi-select',
        [
          'Conseil - strat\u00E9gie',
          'D\u00E9veloppement technique',
          'Formation & acculturation'
        ]
      >;
    expertise_metaverse: Attribute.JSON &
      Attribute.CustomField<
        'plugin::multi-select.multi-select',
        [
          'Conseil - strat\u00E9gie',
          'Cr\u00E9ation campagne marketing',
          'Cr\u00E9ation avatar',
          'Achat m\u00E9dia in-game',
          'Business Model & Mon\u00E9tisation',
          'M\u00E9ta-commerce',
          'Expertise immobilier virtuel',
          "Cr\u00E9ation d'\u00E9v\u00E8nements virtuels",
          'Gamification',
          "Cr\u00E9ation d'exp\u00E9riences immersives",
          'Formation / acculturation'
        ]
      >;
    expertise_dao: Attribute.JSON &
      Attribute.CustomField<
        'plugin::multi-select.multi-select',
        [
          'Conseil - strat\u00E9gie',
          'D\u00E9veloppement technique',
          'Formation & acculturation'
        ]
      >;
    expertise_tokenisation: Attribute.JSON &
      Attribute.CustomField<
        'plugin::multi-select.multi-select',
        [
          'Conseil - strat\u00E9gie',
          'D\u00E9veloppement technique',
          'Cr\u00E9ation communaut\u00E9',
          'Solution technique - \u00E9diteur',
          'Formation & acculturation'
        ]
      >;
    ssii_editeur: Attribute.JSON &
      Attribute.CustomField<
        'plugin::multi-select.multi-select',
        [
          "Dev sur mesure d'univers 3D",
          'Dev sur mesure de jeux',
          'Dev sur mesure eCommerce',
          'Solution 3D',
          'Solution AR/VRIMIX',
          'Solution DAO'
        ]
      >;
    expertise_nft: Attribute.JSON &
      Attribute.CustomField<
        'plugin::multi-select.multi-select',
        [
          'Conseil - strat\u00E9gie',
          'Cr\u00E9ation graphique',
          'D\u00E9veloppement technique',
          'Cr\u00E9ation communaut\u00E9 - m\u00E9diatisation - promotion',
          'Solution technique - \u00E9diteur',
          'Conseil NFT immobilier',
          'Galerie virtuelle',
          'Minting',
          'Formation & acculturation',
          'Cr\u00E9ation de jumeaux num\u00E9riques'
        ]
      >;
    ville: Attribute.String;
    notes: Attribute.RichText;
    flag_Metaverse: Attribute.Boolean;
    flag_NFT: Attribute.Boolean;
    flag_Token: Attribute.Boolean;
    flag_DAO: Attribute.Boolean;
    flag_Blockchain: Attribute.Boolean;
    flag_SSII: Attribute.Boolean;
    status: Attribute.String;
    cas_clients: Attribute.Text;
    validation: Attribute.String;
    objectID: Attribute.String;
    logo: Attribute.Media;
    taille_entreprise: Attribute.Enumeration<
      [
        'Un(e) seul(e) salari\u00E9(e)',
        'De 2 \u00E0 10 salari\u00E9s',
        'De 11 \u00E0 50 salari\u00E9s',
        'De 51 \u00E0 100 salari\u00E9s',
        'Plus de 100 salari\u00E9s'
      ]
    >;
    email_contact: Attribute.Email;
    expertises: Attribute.JSON &
      Attribute.CustomField<
        'plugin::multi-select.multi-select',
        [
          'M\u00E9taverse',
          'NFT',
          'Tokenisation',
          'DAO',
          'Blockchain',
          'SSII - \u00C9diteur'
        ]
      >;
    multi_pays: Attribute.JSON &
      Attribute.CustomField<
        'plugin::multi-select.multi-select',
        [
          'France:FR',
          'Australie:AU',
          'Br\u00E9sil:BR',
          'Canada:CA',
          'Chine:CN',
          'Argentine:AR',
          'Allemagne:DE',
          'Inde:IN',
          'Indon\u00E9sie:ID',
          'Italie:IT',
          'Japon:JP',
          'Mexique:MX',
          'Pays-Bas:NL',
          'Pologne:PL',
          'Russie:RU',
          'Arabie saoudite:SA',
          'Afrique du Sud:ZA',
          'Cor\u00E9e du Sud:KR',
          'Espagne:ES',
          'Su\u00E8de:SE',
          'Suisse:CH',
          'Turquie:TR',
          'Royaume-Uni:GB',
          '\u00C9tats-Unis:US',
          'Autriche:AT',
          'Belgique:BE',
          'Bulgarie:BG',
          'Chypre:CY',
          'Croatie:HR',
          'Danemark:DK',
          'Estonie:EE',
          'Finlande:FI',
          'Gr\u00E8ce:GR',
          'Hongrie:HU',
          'Irlande:IE',
          'Lettonie:LV',
          'Lituanie:LT',
          'Luxembourg:LU',
          'Malte:MT',
          'Pologne:PL',
          'Portugal:PT',
          'Roumanie:RO',
          'Slovaquie:SK',
          'Slov\u00E9nie:SI'
        ]
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::annuaire-presta.annuaire-presta',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::annuaire-presta.annuaire-presta',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCommissionCommission extends Schema.CollectionType {
  collectionName: 'commissions';
  info: {
    singularName: 'commission';
    pluralName: 'commissions';
    displayName: 'Commission';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    title: Attribute.String & Attribute.Required & Attribute.Unique;
    description: Attribute.Text;
    membres: Attribute.Relation<
      'api::commission.commission',
      'manyToMany',
      'plugin::users-permissions.user'
    >;
    posts: Attribute.Relation<
      'api::commission.commission',
      'oneToMany',
      'api::post.post'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::commission.commission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::commission.commission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiEmploiRepereEmploiRepere extends Schema.CollectionType {
  collectionName: 'emploi_reperes';
  info: {
    singularName: 'emploi-repere';
    pluralName: 'emploi-reperes';
    displayName: 'Emploi rep\u00E8re';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.RichText;
    metier: Attribute.Relation<
      'api::emploi-repere.emploi-repere',
      'manyToOne',
      'api::metier.metier'
    >;
    image: Attribute.Media;
    Blocks: Attribute.DynamicZone<['block.activite']>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::emploi-repere.emploi-repere',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::emploi-repere.emploi-repere',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiEvenementEvenement extends Schema.CollectionType {
  collectionName: 'evenements';
  info: {
    singularName: 'evenement';
    pluralName: 'evenements';
    displayName: '\u00C9v\u00E9nements';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    title: Attribute.String & Attribute.Required & Attribute.Unique;
    slug: Attribute.UID<'api::evenement.evenement', 'title'>;
    date: Attribute.DateTime;
    content: Attribute.RichText;
    description: Attribute.Text;
    type_d_evenement: Attribute.Relation<
      'api::evenement.evenement',
      'manyToOne',
      'api::type-evenement.type-evenement'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::evenement.evenement',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::evenement.evenement',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiFamilleDeMetierFamilleDeMetier
  extends Schema.CollectionType {
  collectionName: 'famille_de_metiers';
  info: {
    singularName: 'famille-de-metier';
    pluralName: 'famille-de-metiers';
    displayName: 'Famille de m\u00E9tier';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    content: Attribute.RichText;
    metiers: Attribute.Relation<
      'api::famille-de-metier.famille-de-metier',
      'oneToMany',
      'api::metier.metier'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::famille-de-metier.famille-de-metier',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::famille-de-metier.famille-de-metier',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiMetierMetier extends Schema.CollectionType {
  collectionName: 'metiers';
  info: {
    singularName: 'metier';
    pluralName: 'metiers';
    displayName: 'M\u00E9tier';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.RichText;
    emploi_reperes: Attribute.Relation<
      'api::metier.metier',
      'oneToMany',
      'api::emploi-repere.emploi-repere'
    >;
    famille_de_metier: Attribute.Relation<
      'api::metier.metier',
      'manyToOne',
      'api::famille-de-metier.famille-de-metier'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::metier.metier',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::metier.metier',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPostPost extends Schema.CollectionType {
  collectionName: 'posts';
  info: {
    singularName: 'post';
    pluralName: 'posts';
    displayName: 'Post';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String & Attribute.Required & Attribute.Unique;
    description: Attribute.Text;
    documents: Attribute.Media;
    image: Attribute.Media;
    commission: Attribute.Relation<
      'api::post.post',
      'manyToOne',
      'api::commission.commission'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::post.post', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::post.post', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiTypeEvenementTypeEvenement extends Schema.CollectionType {
  collectionName: 'types_evenement';
  info: {
    singularName: 'type-evenement';
    pluralName: 'types-evenement';
    displayName: "Type d'\u00E9v\u00E9nement";
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    title: Attribute.String & Attribute.Required & Attribute.Unique;
    slug: Attribute.UID<'api::type-evenement.type-evenement', 'title'>;
    content: Attribute.RichText;
    evenements: Attribute.Relation<
      'api::type-evenement.type-evenement',
      'oneToMany',
      'api::evenement.evenement'
    >;
    users: Attribute.Relation<
      'api::type-evenement.type-evenement',
      'manyToMany',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::type-evenement.type-evenement',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::type-evenement.type-evenement',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiVideosIntervenantVideosIntervenant
  extends Schema.CollectionType {
  collectionName: 'videos_intervenants';
  info: {
    singularName: 'videos-intervenant';
    pluralName: 'videos-intervenants';
    displayName: 'Videos - intervenant';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    description: Attribute.RichText;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::videos-intervenant.videos-intervenant',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::videos-intervenant.videos-intervenant',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiVideosMetierVideosMetier extends Schema.CollectionType {
  collectionName: 'videos_metiers';
  info: {
    singularName: 'videos-metier';
    pluralName: 'videos-metiers';
    displayName: 'Videos - metier';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::videos-metier.videos-metier',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::videos-metier.videos-metier',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

declare module '@strapi/strapi' {
  export module Shared {
    export interface ContentTypes {
      'admin::permission': AdminPermission;
      'admin::user': AdminUser;
      'admin::role': AdminRole;
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::expo-notifications.exponotification': PluginExpoNotificationsExponotification;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
      'plugin::strapi-newsletter.newsletter': PluginStrapiNewsletterNewsletter;
      'plugin::strapi-newsletter.subscribed-user': PluginStrapiNewsletterSubscribedUser;
      'plugin::i18n.locale': PluginI18NLocale;
      'api::annuaire-presta.annuaire-presta': ApiAnnuairePrestaAnnuairePresta;
      'api::commission.commission': ApiCommissionCommission;
      'api::emploi-repere.emploi-repere': ApiEmploiRepereEmploiRepere;
      'api::evenement.evenement': ApiEvenementEvenement;
      'api::famille-de-metier.famille-de-metier': ApiFamilleDeMetierFamilleDeMetier;
      'api::metier.metier': ApiMetierMetier;
      'api::post.post': ApiPostPost;
      'api::type-evenement.type-evenement': ApiTypeEvenementTypeEvenement;
      'api::videos-intervenant.videos-intervenant': ApiVideosIntervenantVideosIntervenant;
      'api::videos-metier.videos-metier': ApiVideosMetierVideosMetier;
    }
  }
}
