import type { Schema, Attribute } from '@strapi/strapi';

export interface NewZoneZone extends Schema.Component {
  collectionName: 'components_new_zone_zones';
  info: {
    displayName: 'Zone';
    icon: 'archive';
  };
  attributes: {};
}

export interface NewDynamic extends Schema.Component {
  collectionName: 'components_new_dynamics';
  info: {
    displayName: 'Dynamic';
    icon: 'cube';
    description: '';
  };
  attributes: {
    DynamicTitle: Attribute.String;
    DynamicDescription: Attribute.Text;
  };
}

export interface Newzone1Zone1 extends Schema.Component {
  collectionName: 'components_newzone1_zone1s';
  info: {
    displayName: 'Zone1';
    icon: 'play';
  };
  attributes: {};
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'new-zone.zone': NewZoneZone;
      'new.dynamic': NewDynamic;
      'newzone1.zone1': Newzone1Zone1;
    }
  }
}
