import { saluda, getId, despide } from "./String";

describe("Pruebas de Strings", () => {
  // podemos guardar el resutado de la función para utilizarlo más facil en multiples lugares
  const saludaFn = saluda("Stiven");
  const getIdFn = getId();

  test("Probando la funcion Saluda", () => {
    // verifica si un string coincida con un patrón (Regex)
    expect(saludaFn).toMatch(new RegExp("Hola soy"));
    // en otras palabras verifica si el texto existe dentro del string

    // podemos validar si dentro del string existe algún digito con \d
    expect(saludaFn).toMatch(/\d/);
  });

  test('Probando la funcion getId', () => {
    // espero que contenga dos digitos, un guion, y 3 digitos
    expect(getIdFn).toMatch(/\d{2}-\d{3}/);
  });

  test('Probando la funcion despide', () => {
    // no debería de esperar que exista el patrón 
    expect(despide()).not.toMatch('bye.');
  })
});
