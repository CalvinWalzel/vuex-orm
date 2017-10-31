import Model from './Model'

export enum Type {
  Attr = 'Attr',
  HasOne = 'HasOne',
  BelongsTo = 'BelongsTo',
  HasMany = 'HasMany',
  HasManyBy = 'HasManyBy'
}

export type Types = Attr | HasOne | BelongsTo | HasMany | HasManyBy

export interface Attr {
  type: Type.Attr
  value: any
  mutator?: Function
}

export interface HasOne {
  type: Type.HasOne
  model: typeof Model | string
  foreignKey: string
  value: any
  polymorphic: boolean
}

export interface BelongsTo {
  type: Type.BelongsTo
  model: typeof Model | string
  foreignKey: string
  value: any
  polymorphic: boolean
}

export interface HasMany {
  type: Type.HasMany
  model: typeof Model | string
  foreignKey: string
  value: any
  polymorphic: boolean
}

export interface HasManyBy {
  type: Type.HasManyBy
  model: typeof Model | string
  foreignKey: string
  otherKey: string
  value: any
  polymorphic: boolean
}

export default class Attributes {
  /**
   * The generic attribute. The given value will be used as default value
   * of the property when instantiating a model.
   */
  static attr (value: any, mutator?: Function): Attr {
    return { type: Type.Attr, value, mutator }
  }

  /**
   * The has one relationship.
   */
  static hasOne (model: typeof Model | string, foreignKey: string, polymorphic: boolean): HasOne {
    return { type: Type.HasOne, model, foreignKey, value: null, polymorphic }
  }

  /**
   * The belongs to relationship.
   */
  static belongsTo(model: typeof Model | string, foreignKey: string, polymorphic: boolean): BelongsTo {
    return { type: Type.BelongsTo, model, foreignKey, value: null, polymorphic }
  }

  /**
   * The has many relationship.
   */
  static hasMany(model: typeof Model | string, foreignKey: string, polymorphic: boolean): HasMany {
    return { type: Type.HasMany, model, foreignKey, value: null, polymorphic }
  }

  /**
   * The has many by relationship.
   */
  static hasManyBy(model: typeof Model | string, foreignKey: string, otherKey: string = 'id', polymorphic: boolean): HasManyBy {
    return { type: Type.HasManyBy, model, foreignKey, otherKey, value: null, polymorphic }
  }

  /**
   * Determin if the given attribute is the type of relationship.
   */
  static isRelation (attr: Types): boolean {
    return attr.type !== Type.Attr
  }
}
