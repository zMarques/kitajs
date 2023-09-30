import assert from 'node:assert';
import test, { describe } from 'node:test';
import path from 'path';
import { parseRoutes } from '../runner';

describe('Hello World', async () => {
  const { kita } = await parseRoutes(__dirname);

  test('generates hello world', () => {
    assert.equal(kita.providers.size, 0);
    assert.equal(kita.routes.size, 1);

    const route = kita.routes.get('getIndex');

    assert.ok(route);
    assert.deepStrictEqual(route, {
      url: '/',
      controllerMethod: 'get',
      method: 'GET',
      controllerName: 'IndexController',
      controllerPath: path.resolve(__dirname, 'routes/index.ts'),
      controllerPrettyPath: 'test/hello-world/routes/index.ts:4:1',
      parameters: [{ value: 'req.headers["x-name"]' }],
      schema: {
        operationId: 'getIndex',
        response: { default: { type: 'string' } },
        headers: {
          type: 'object',
          properties: { 'x-name': { type: 'string' } },
          required: [],
          additionalProperties: undefined
        }
      }
    });
  });
});