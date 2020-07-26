/*
  MÉTODOS  GLOBALES:
  afterAll(fn, timeout)
  afterEach(fn, timeout)
  beforeAll(fn, timeout)
  beforeEach(fn, timeout)
  describe(name, fn)                      // Más utilizado
  describe.each(table)(name, fn, timeout)
  describe.only(name, fn)
  describe.only.each(table)(name, fn)
  describe.skip(name, fn)
  describe.skip.each(table)(name, fn)
  test(name, fn, timeout)                 // Más utilizado
  test.each(table)(name, fn, timeout)
  test.only(name, fn, timeout)
  test.only.each(table)(name, fn)
  test.skip(name, fn)
  test.skip.each(table)(name, fn)
  test.todo(name)

  Adicionalmente a estos, tenemos Métodos para poder 
  realizar los test, realizar comparaciones y en general
  dar sentido a nuestros test:

  expect(value)
  expect.extend(matchers)
  expect.anything()
  expect.any(constructor)
  expect.arrayContaining(array)
  expect.assertions(number)
  expect.hasAssertions()
  expect.not.arrayContaining(array)
  expect.not.objectContaining(object)
  expect.not.stringContaining(string)
  expect.not.stringMatching(string | regexp)
  expect.objectContaining(object)
  expect.stringContaining(string)
  expect.stringMatching(string | regexp)
  expect.addSnapshotSerializer(serializer)
  .not
  .resolves
  .rejects
  .toBe(value)
  .toHaveBeenCalled()
  .toHaveBeenCalledTimes(number)
  .toHaveBeenCalledWith(arg1, arg2, ...)
  .toHaveBeenLastCalledWith(arg1, arg2, ...)
  .toHaveBeenNthCalledWith(nthCall, arg1, arg2, ....)
  .toHaveReturned()
  .toHaveReturnedTimes(number)
  .toHaveReturnedWith(value)
  .toHaveLastReturnedWith(value)
  .toHaveNthReturnedWith(nthCall, value)
  .toHaveLength(number)
  .toHaveProperty(pathLlave, valor?)
  .toBeCloseTo(número, númeroDigitos?)
  .toBeDefined()
  .toBeFalsy()
  .toBeGreaterThan(número)
  .toBeGreaterThanOrEqual(número)
  .toBeLessThan(número)
  .toBeLessThanOrEqual(número)
  .toBeInstanceOf(Class)
  .toBeNull()
  .toBeTruthy()
  .toBeUndefined()
  .toBeNaN()
  .toContain(item)
  .toContainEqual(item)
  .toEqual(value)
  .toMatch(regexpOrString)
  .toMatchObject(object)
  .toMatchSnapshot(propertyMatchers?, hint?)
  .toMatchInlineSnapshot(propertyMatchers?, inlineSnapshot)
  .toStrictEqual(value)
  .toThrow(error?)
  .toThrowErrorMatchingSnapshot(hint?)
  .toThrowErrorMatchingInlineSnapshot(inlineSnapshot)
*/

// describe permite agrupar pruebas
// recibe el nombre del grupo de pruebas
describe('Grupo de pruebas de ejemplo', () =>{

  // Dentro de describe ponemos tener multiples pruebas
  test("Una prueba unitaria de algo", () => {
    // el valor en expect tiene que ser el mismo que en toBe, para que la prueba llegue a pasar.
    // esperamos que el valor sea 5, y estamos recibiendo 10.
    expect(10).toBe(10)
  });

  test('Segunda prueba de números', () => {
    expect(10).toBe(10)
  })
})

