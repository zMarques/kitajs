import type { RouteMapper, Use } from '@kitajs/runtime';

/** Hello world rest API endpoint. */
export function get(this: Use<typeof test>) {
  return 'Hello World!';
}

/** Hello world rest API endpoint. */
export function post(this: Use<[typeof test, typeof test2, typeof test3]>) {
  return 'Hello World!';
}

export let test: RouteMapper = function (config) {
  return config;
};
export let test2: RouteMapper = function (config) {
  return config;
};
export let test3: RouteMapper = function (config) {
  return config;
};