# Unit-Testing-React
Created with CodeSandbox

## Introducción

De esta manera puedes testear tus componentes concretamente, crear test unitarios para poder validar la funcionalidad y el comportamiento de tus componentes desarrollados con React.

Los test unitarios no te pueden garantizar que tus aplicaciones o componentes estén completamente libres de errores pero sí te ayudarán a testear aquellas partes que principalmente te importan para analizar que tus componentes se comporten de la forma que tú esperas.

Además Cuando agregues nuevas funcionalidades dentro de tus componentes tú vas a validar si alguno de el nuevo Código que has incluido no está rompiendo el comportamiento de tus componentes ya que estar testeando y probando cada uno de los diferentes comportamientos a mano sería una tarea repetitiva y muy costosa en términos de tiempo.

Por lo tanto al correr tus test unitarios vas a garantizar que todas esas funciones que has probado estén funcionando como se espera y que no estés teniendo alguna regresión.

Vamos a aprender **Jest** para poder crear y correr nuestras pruebas unitarias.

**Jest** fue creado originalmente por el equipo de desarrollo de Facebook y mantenida actualmente por la comunidad open source.

Comenzó como un framework para crear test directamente o enfocadas para React pero ahora es completamente agnóstico y puedes crear tus test prácticamente para cualquier proyecto desarrollado con JavaScript.

Esta herramienta es muy rápida tenemos un feedback instantáneo y podemos generar un seguimiento muy rápido de los test que estamos probando.

Este tiene algunas características muy interesantes que vamos a ver, cómo los reportes de cobertura y los snapshot, para poder validar el árbol de elementos que tenemos dentro de nuestros componentes.

Algo muy interesante de esta herramienta es que no requiere ningún tipo de configuración y como vamos a estar utilizando **create react app**, prácticamente esto ya lo incluye de forma nativa.

Jest ha tomado una fuerza increíble y está siendo usado por grandes empresas como Facebook Twitter airbnb y Spotify sólo por mencionar algunas.

Pero este curso también vamos a aprender a utilizar en **ENZYME**.

**Jest** la herramienta que vamos a utilizar para crear nuestros test y con la cual vamos a correr esos test.

y por otro lado **ENZYME** nos va a ayudar a poder montar nuestros componentes creados con React dentro de la memoria para poder generar esos diferentes test. 

Vamos a iniciar desde cero completamente.

Vamos a aprender a testear algunos tipos de datos primitivos como strings, números, booleanos, undefine. Eventualmente pasamos hacia Arrays y objetos.

Es muy importante que primero aprendas muy bien a realizar pruebas hacia los diferentes tipos de datos para que eventualmente puedas aterrizar o transportar ese conocimiento. Pero creando test unitarios para tus componentes.
