import type { Schema, Attribute } from '@strapi/strapi';

export interface BlockActivite extends Schema.Component {
  collectionName: 'components_block_activite';
  info: {
    displayName: 'Activit\u00E9';
    icon: 'angle-double-down';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.String;
    content: Attribute.RichText;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'block.activite': BlockActivite;
    }
  }
}
