
## Enunciado
El ejercicio consiste en desarrollar una página web con un listado de personajes de Harry Potter, que
podemos filtrar por el nombre del personaje. Vamos a usar React para realizarlo.


## Listado de Personajes 

En primer lugar, vamos a realizar una web con el listado de personajes de Harry Potter. Para eso, vamos a
utilizar el servicio de https://hp-api.herokuapp.com/ que nos devuelve información sobre los personajes de
Harry Potter filtrados por la casa a la que pertenece

## Filtrado de Personajes 

a segunda parte consiste en poder buscarlos
por nombre. Para eso, añadimos un input a la interfaz, de forma que al ir escribiendo un nombre queden
en la interfaz solo los personajes cuyo nombre contiene las letras escritas.

## Filtrado por Casa

Ahora que ya tenemos el listado de personajes en pantalla, y filtrado por nombre la siguiente parte consiste
en poder buscarlos por casa. Para eso, añadimos un select a la interfaz, de forma que al seleccionar una
casa queden en la interfaz solo los personajes cuya casa es la seleccionada.

## Componentes del listado de Personajes

-Componente para el filtro de nombre.
-Componente para el listado.
-Componente para la tarjeta de cada personaje del listado.
-Componente para el detalle de cada personaje.

## Detalle del Personaje 

 Al hacer clic sobre la tarjeta de un personaje, su información
aparecerá a pantalla completa. Para hacer esto usaremos rutas y React Router DOM. En la pantalla de detalle aparecerá además de la foto, nombre, la casa a la que pertenece , si está vivo o muerto, género,
especie y los nombres alternativos en caso de que los tenga.

