import type { KitaConfig } from './config';
import type { Schema } from '@kitajs/ts-json-schema-generator';
import type { Route } from './route';

/**
 * This class is used to store all the data read from all codes.
 *
 * A abstract syntax tree created f
 */
export class KitaAST {
  constructor(
    /** the kita config helps the generation */
    readonly config: KitaConfig,

    /** All generated routes */
    readonly routes: Route[] = [],

    /** All generated schemas */
    readonly schemas: Schema[] = [],

    /** All needed imports */
    readonly imports: string[] = []
  ) {}

  /** Adds a import if not already added. */
  addImport(importPath: string) {
    if (!this.imports.includes(importPath)) {
      this.imports.push(importPath);
    }
  }
}