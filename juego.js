/* Escape del Colegio — JavaScript vanilla, compatible con GitHub Pages.
   No usa librerías, servidores ni rutas externas. */
"use strict";

const BANCO = {"3":{"Matemáticas":[{"q":"¿Cuánto es 8 + 5?","a":["13","14","12","15"],"c":0},{"q":"¿Cuánto es 17 − 9?","a":["8","9","10","7"],"c":0},{"q":"¿Cuánto es 2 × 4?","a":["8","6","10","12"],"c":0},{"q":"¿Cuánto es 5 × 3?","a":["15","12","18","10"],"c":0},{"q":"¿Cuánto es 4 × 10?","a":["40","30","14","50"],"c":0},{"q":"¿Cuánto es 12 ÷ 3?","a":["9","3","4","6"],"c":2},{"q":"¿Qué número viene después del 29?","a":["30","31","39","28"],"c":0},{"q":"¿Cuál número es mayor: 27, 32, 19 o 25?","a":["32","25","19","27"],"c":0},{"q":"¿Cuántas decenas hay en 50?","a":["50","2","5","10"],"c":2},{"q":"¿Cuántos lados tiene un triángulo?","a":["5","2","3","4"],"c":2},{"q":"¿Cuántos lados tiene un rectángulo?","a":["6","5","3","4"],"c":3},{"q":"¿Cuál es la mitad de 10?","a":["4","5","2","10"],"c":1},{"q":"¿Cuántos minutos tiene una hora?","a":["60","100","24","30"],"c":0},{"q":"¿Cuántos centímetros tiene un metro?","a":["10","1000","100","50"],"c":2},{"q":"¿Cuánto es 9 + 10?","a":["21","19","20","18"],"c":1},{"q":"¿Cuánto es 30 − 12?","a":["16","22","20","18"],"c":3},{"q":"¿Qué número sigue: 2, 4, 6, __?","a":["10","9","8","7"],"c":2},{"q":"¿Qué figura no tiene esquinas?","a":["Rectángulo","Cuadrado","Círculo","Triángulo"],"c":2},{"q":"Hay 3 bolsas con 2 manzanas cada una. ¿Cuántas manzanas hay?","a":["9","8","5","6"],"c":3},{"q":"¿Cuál número es par?","a":["14","17","15","13"],"c":0}],"Lenguaje":[{"q":"¿Cuál es el nombre de una persona?","a":["azul","mesa","correr","Ana"],"c":3},{"q":"¿Cuál palabra nombra una acción?","a":["Saltar","pelota","verde","amable"],"c":0},{"q":"¿Con qué letra empieza oso?","a":["A","S","E","O"],"c":3},{"q":"¿Cuál es el plural de libro?","a":["libritos","Libros","libroes","libres"],"c":1},{"q":"¿Qué signo va al final de una pregunta?","a":[",",".","?","!"],"c":2},{"q":"¿Cuál palabra rima con ratón?","a":["perro","luna","Camión","casa"],"c":2},{"q":"¿Cuál es un saludo?","a":["Buenos días","Gracias","Por favor","Hasta luego"],"c":0},{"q":"¿Cuál palabra nombra un animal?","a":["correr","amarillo","suave","Gato"],"c":3},{"q":"¿Qué palabra significa lo contrario de grande?","a":["Pequeño","ancho","alto","largo"],"c":0},{"q":"¿Cuántas sílabas tiene casa?","a":["1","3","4","2"],"c":3},{"q":"¿Cuál palabra describe algo bonito?","a":["mesa","saltar","Hermoso","escuela"],"c":2},{"q":"¿Cuál palabra dice algo que ya pasó?","a":["Jugó","jugar","juega","jugará"],"c":0},{"q":"¿Cuál palabra nombra un lugar?","a":["rápido","cantar","Escuela","dulce"],"c":2},{"q":"¿Cuál oración está completa?","a":["Duerme el.","Gato el.","El en casa.","El gato duerme."],"c":3},{"q":"¿Cuál es el diminutivo de perro?","a":["Perrito","perrote","perrero","perros"],"c":0},{"q":"¿Cómo empieza el nombre de un país?","a":["Con mayúscula","Con punto","Con coma","Con número"],"c":0},{"q":"¿Qué signos usamos para escribir ¡Qué bonito!?","a":[", y ;","¿ y ?","¡ y !",". y :"],"c":2},{"q":"¿Qué tipo de texto cuenta una historia inventada?","a":["Lista","Recibo","Cuento","Horario"],"c":2},{"q":"¿Cuál palabra significa casi lo mismo que feliz?","a":["Cansado","Contento","Triste","Enojado"],"c":1},{"q":"¿Qué ponemos al final de una oración que cuenta algo?","a":["Punto","Guion","Dos puntos","Coma"],"c":0}],"Ciencias":[{"q":"¿Qué parte del cuerpo usamos para respirar?","a":["Manos","Pulmones","Rodillas","Estómago"],"c":1},{"q":"¿Qué necesitan las plantas para crecer?","a":["Humo","Plástico","Juguetes","Agua y luz"],"c":3},{"q":"¿Qué nos da luz durante el día?","a":["El Sol","La Luna","Una piedra","Una nube"],"c":0},{"q":"¿En qué estado está el hielo?","a":["Sólido","Blando","Líquido","Gaseoso"],"c":0},{"q":"¿Cuál de estos animales es mamífero?","a":["Mariposa","Pez","Perro","Gallina"],"c":2},{"q":"¿Qué sentido usamos para escuchar?","a":["Oído","Gusto","Vista","Olfato"],"c":0},{"q":"¿Qué parte de la planta toma agua del suelo?","a":["Flor","Semilla","Fruto","Raíz"],"c":3},{"q":"¿Qué debemos hacer antes de comer?","a":["No lavarnos","Tocar la basura","Jugar con tierra","Lavarnos las manos"],"c":3},{"q":"¿Qué bebemos para calmar la sed?","a":["Aceite","Jabón","Agua","Arena"],"c":2},{"q":"¿Cuál animal nace de un huevo?","a":["Gato","Tortuga","Perro","Vaca"],"c":1},{"q":"¿Qué usamos para cepillarnos los dientes?","a":["Cepillo dental","Cuchara","Peine","Regla"],"c":0},{"q":"¿Qué parte del cuerpo bombea la sangre?","a":["Estómago","Corazón","Codo","Pulmón"],"c":1},{"q":"¿Cuál de estos es un recurso natural?","a":["Juguete","Cuaderno","Agua","Plástico"],"c":2},{"q":"¿Qué aparece a veces en el cielo después de la lluvia?","a":["Lámpara","Cometa de papel","Semáforo","Arcoíris"],"c":3},{"q":"¿Qué animal come plantas?","a":["León","Tigre","Águila","Vaca"],"c":3},{"q":"¿Dónde debemos poner la basura?","a":["En la calle","En el río","En el basurero","En el patio de otra casa"],"c":2},{"q":"¿Qué parte del cuerpo usamos para pensar?","a":["Mano","Cerebro","Rodilla","Pie"],"c":1},{"q":"¿Con qué parte vemos?","a":["Ojos","Lengua","Nariz","Oídos"],"c":0},{"q":"¿Cuál animal vive en el agua?","a":["Gallina","Caballo","Conejo","Pez"],"c":3},{"q":"¿Qué hacemos para cuidar una planta?","a":["Pisar sus hojas","Taparla con plástico","Regarla","Arrancarla"],"c":2}],"Estudios Sociales":[{"q":"¿En qué país vivimos si estamos en San Salvador?","a":["Honduras","El Salvador","Guatemala","Nicaragua"],"c":1},{"q":"¿Cuál es la capital de El Salvador?","a":["San Miguel","La Unión","Santa Ana","San Salvador"],"c":3},{"q":"¿Qué símbolo tiene colores y representa a un país?","a":["El semáforo","La bandera","El cuaderno","La regla"],"c":1},{"q":"¿Quién dirige una alcaldía?","a":["Médico","Bombero","Alcalde o alcaldesa","Maestro"],"c":2},{"q":"¿Qué océano está junto a la costa de El Salvador?","a":["Ártico","Atlántico","Pacífico","Índico"],"c":2},{"q":"¿Qué hacemos antes de cruzar una calle?","a":["Jugamos en la calle","Miramos a ambos lados","Cerramos los ojos","Corremos sin mirar"],"c":1},{"q":"¿Dónde encontramos las reglas de la escuela?","a":["En un cuento","En el reglamento escolar","En un mapa","En una receta"],"c":1},{"q":"¿Cuál es un servicio que usa la comunidad?","a":["Un videojuego","Recolección de basura","Un juguete","Una mochila"],"c":1},{"q":"¿Qué celebramos el 15 de septiembre?","a":["El Día del Trabajo","El Año Nuevo","La Navidad","La Independencia"],"c":3},{"q":"¿Qué muestra un mapa?","a":["Lugares","Canciones","Sabores","Animales solamente"],"c":0},{"q":"¿Cuál es una buena responsabilidad de un estudiante?","a":["Botar basura","Respetar y estudiar","Interrumpir la clase","Dañar los pupitres"],"c":1},{"q":"¿Qué transporte viaja por rieles?","a":["Tren","Lancha","Bicicleta","Avión"],"c":0},{"q":"¿Cuál puede ser una tradición de una comunidad?","a":["Una señal de alto","Una fiesta local","Una tarea de matemática","Una computadora"],"c":1},{"q":"¿Qué hacemos cuando el semáforo está en rojo?","a":["Nos detenemos","Corremos","Jugamos","Cruzamos rápido"],"c":0},{"q":"¿Qué representa un globo terráqueo?","a":["La Tierra","Una escuela","La Luna solamente","Una ciudad"],"c":0},{"q":"¿Cuál es un derecho de los niños?","a":["No jugar nunca","Dejar la escuela","Recibir educación","Trabajar todo el día"],"c":2},{"q":"¿Quién ayuda a apagar incendios?","a":["Cartero","Carpintero","Bombero o bombera","Panadero"],"c":2},{"q":"¿Qué significa convivir en paz?","a":["No compartir nunca","Pelear por todo","Gritar a todos","Tratar a otros con respeto"],"c":3},{"q":"¿Cuál trabajo suele hacerse en el campo?","a":["Vender boletos de cine","Manejar un avión","Reparar una computadora","Cultivar maíz"],"c":3},{"q":"¿Qué debemos cuidar en nuestra comunidad?","a":["Las paredes rayadas","Las plantas arrancadas","Parques y calles","La basura en el río"],"c":2}]},"4":{"Matemáticas":[{"q":"¿Cuánto es 100 + 50?","a":["150","250","160","140"],"c":0},{"q":"¿Cuánto es 230 − 30?","a":["260","200","190","210"],"c":1},{"q":"¿Cuánto es 6 × 4?","a":["26","20","28","24"],"c":3},{"q":"¿Cuánto es 7 × 5?","a":["30","35","45","40"],"c":1},{"q":"¿Cuánto es 40 ÷ 5?","a":["15","10","8","5"],"c":2},{"q":"¿Cuál es la mitad de 20?","a":["10","5","20","15"],"c":0},{"q":"¿Qué fracción muestra una de cuatro partes iguales?","a":["4/1","3/4","1/2","1/4"],"c":3},{"q":"¿Cuánto es 3/8 + 2/8?","a":["5/8","1/8","5/16","6/8"],"c":0},{"q":"¿Cuál es el perímetro de un cuadrado con lados de 3 cm?","a":["9 cm","6 cm","15 cm","12 cm"],"c":3},{"q":"¿Cuántos centímetros tiene un metro?","a":["10","100","50","1000"],"c":1},{"q":"¿Cuántos minutos hay en 2 horas?","a":["60","120","200","90"],"c":1},{"q":"Un lápiz cuesta $3. Pagas $5. ¿Cuánto recibes de cambio?","a":["$3","$1","$8","$2"],"c":3},{"q":"¿Qué número sigue: 5, 10, 15, __?","a":["25","20","18","30"],"c":1},{"q":"¿Cuánto vale el 4 en el número 246?","a":["20","4","400","40"],"c":3},{"q":"¿Cuántos grados tiene una esquina cuadrada?","a":["180","360","45","90"],"c":3},{"q":"¿Cuál es el área de un rectángulo de 4 cm por 3 cm?","a":["24 cm²","12 cm²","14 cm²","7 cm²"],"c":1},{"q":"¿Cuál número es par?","a":["35","41","23","26"],"c":3},{"q":"¿Cuánto es 72 ÷ 8?","a":["7","8","6","9"],"c":3},{"q":"¿Qué número representa siete décimos?","a":["0,07","0,7","70","7,0"],"c":1},{"q":"¿Cuánto es 900 + 100?","a":["900","1100","1000","990"],"c":2}],"Lenguaje":[{"q":"¿Quién realiza la acción en “Luis lee un libro”?","a":["lee","libro","Luis","un"],"c":2},{"q":"¿Cuál es la acción en “Marta canta”?","a":["La","Canta","Coro","Marta"],"c":1},{"q":"¿Qué signo usamos para hacer una pregunta?","a":["¿ y ?","¡ y !",", y .",": y ;"],"c":0},{"q":"¿Cuál palabra significa casi lo mismo que rápido?","a":["Veloz","Pequeño","Lento","Lejos"],"c":0},{"q":"¿Cuál es el plural de lápiz?","a":["Lápizes","Lápices","Lápizs","Lápice"],"c":1},{"q":"¿Qué signo usamos para separar palabras en una lista?","a":["Guion","Signo de pregunta","Punto final","Coma"],"c":3},{"q":"¿Cuál es un pronombre personal?","a":["Verde","Cantar","Casa","Ella"],"c":3},{"q":"¿Qué parte de un cuento nos presenta a los personajes?","a":["El inicio","La portada","El final","El título solamente"],"c":0},{"q":"¿Cuál oración habla del futuro?","a":["Hoy visito a mi abuela.","Mi abuela vive aquí.","Mañana visitaré a mi abuela.","Ayer visité a mi abuela."],"c":2},{"q":"¿Qué palabra significa lo contrario de generoso?","a":["Egoísta","Alegre","Amable","Bondadoso"],"c":0},{"q":"¿Qué es una fábula?","a":["Un mapa","Una lista de compras","Una noticia del clima","Un cuento que deja una enseñanza"],"c":3},{"q":"¿Qué palabra lleva tilde?","a":["Café","Mesa","Casa","Pato"],"c":0},{"q":"¿Cuál oración está en pasado?","a":["Ayer jugué fútbol.","Mañana jugaré fútbol.","Hoy juego fútbol.","Me gusta el fútbol."],"c":0},{"q":"¿Qué se escribe al final de una carta?","a":["Un mapa","Una lista de números","Una despedida","Una pregunta al azar"],"c":2},{"q":"¿Para qué sirve el título de un texto?","a":["Para contar el final siempre","Para decir de qué trata","Para separar sílabas","Para poner la fecha"],"c":1},{"q":"¿Qué palabra describe a una flor?","a":["Mesa","Bonita","Correr","Ayer"],"c":1},{"q":"¿Cuál es una oración completa?","a":["Los en patio.","Juegan los en.","Los niños juegan.","Niños los."],"c":2},{"q":"¿Qué palabra nombra una persona?","a":["Rápido","Saltar","Azul","Maestra"],"c":3},{"q":"¿Qué hacemos al leer un resumen?","a":["Leemos las ideas principales","Buscamos solo dibujos","Contamos las páginas","Leemos cada palabra al revés"],"c":0},{"q":"¿Qué palabra indica que algo ocurrió antes?","a":["Pronto","Ayer","Después","Mañana"],"c":1}],"Ciencias":[{"q":"¿Qué planeta es el hogar de las personas?","a":["La Tierra","Venus","Júpiter","Marte"],"c":0},{"q":"¿Qué gas toman las plantas del aire para crecer?","a":["Humo","Helio","Dióxido de carbono","Vapor de jabón"],"c":2},{"q":"¿Qué pasa con el hielo cuando se calienta?","a":["Se derrite","Se convierte en piedra","Se vuelve madera","Desaparece para siempre"],"c":0},{"q":"¿Qué órgano usamos para respirar?","a":["Corazón","Riñones","Pulmones","Estómago"],"c":2},{"q":"¿Qué fuerza hace que las cosas caigan al suelo?","a":["Calor","Gravedad","Sonido","Luz"],"c":1},{"q":"¿Cuál de estos animales tiene columna vertebral?","a":["Mariposa","Caracol","Perro","Lombriz"],"c":2},{"q":"¿Cuál fuente de energía viene del Sol?","a":["Carbón","Energía solar","Leña","Gasolina"],"c":1},{"q":"¿Qué función tiene la raíz de una planta?","a":["Produce piedras","Absorbe agua","Sostiene las flores en el aire","Hace semillas solamente"],"c":1},{"q":"¿Qué objeto se puede separar con un colador?","a":["Jugo mezclado con agua","Sal disuelta en agua","Agua mezclada con azúcar","Piedras mezcladas con arena"],"c":3},{"q":"¿Qué suele caer de las nubes cuando llueve?","a":["Agua","Aceite","Hojas de papel","Arena"],"c":0},{"q":"¿Qué animal nace de un huevo?","a":["Vaca","Perro","Gato","Gallina"],"c":3},{"q":"¿Qué hábito ayuda a no enfermarnos?","a":["Comer sin lavar frutas","No dormir","Lavarnos las manos","Compartir el cepillo dental"],"c":2},{"q":"¿Qué órgano nos ayuda a pensar?","a":["Rodilla","Codo","Cerebro","Pie"],"c":2},{"q":"¿Qué vemos cuando un objeto bloquea la luz?","a":["Una nube","Un sonido","Un arcoíris siempre","Una sombra"],"c":3},{"q":"¿Qué instrumento usamos para medir la temperatura?","a":["Reloj","Balanza","Termómetro","Regla"],"c":2},{"q":"¿Cuál es un lugar donde viven plantas y animales?","a":["Carretera","Cuaderno","Bosque","Armario"],"c":2},{"q":"¿Qué hacemos para ahorrar agua?","a":["Jugar con la manguera","Llenar la tina sin usarla","Cerrar la llave","Dejarla abierta"],"c":2},{"q":"¿Qué parte del cuerpo ayuda a movernos junto con los músculos?","a":["Uñas","Huesos","Dientes","Cabello"],"c":1},{"q":"¿Qué estado tiene el agua que bebemos normalmente?","a":["Sólido","Polvo","Gaseoso","Líquido"],"c":3},{"q":"¿Qué material podemos reciclar si está limpio?","a":["Comida podrida","Humo","Papel","Agua sucia"],"c":2}],"Estudios Sociales":[{"q":"¿Qué es un municipio?","a":["Un océano","Un territorio con una alcaldía","Una escuela solamente","Un planeta"],"c":1},{"q":"¿Qué océano está junto a El Salvador?","a":["Pacífico","Índico","Ártico","Atlántico"],"c":0},{"q":"¿Qué país está al oeste de El Salvador?","a":["Costa Rica","Honduras","Nicaragua","Guatemala"],"c":3},{"q":"¿Qué país está al este de El Salvador?","a":["Belice","México","Honduras","Guatemala"],"c":2},{"q":"¿Para qué sirve una brújula?","a":["Para medir la lluvia","Para pesar objetos","Para ver la hora","Para encontrar direcciones"],"c":3},{"q":"¿Qué es una comunidad?","a":["Una montaña","Personas que viven en un mismo lugar","Una sola casa vacía","Un tipo de mapa"],"c":1},{"q":"¿Cuál trabajo produce alimentos en el campo?","a":["Transporte","Agricultura","Medicina","Enseñanza"],"c":1},{"q":"¿Qué hacemos al votar?","a":["Cruzamos la calle","Leemos un cuento","Compramos comida","Elegimos representantes"],"c":3},{"q":"¿Qué institución ayuda a crear leyes en el país?","a":["Escuela","Parque","Asamblea Legislativa","Hospital"],"c":2},{"q":"¿Qué puntos ayudan a encontrar direcciones?","a":["Arriba, abajo y centro","Grande y pequeño","Norte, sur, este y oeste","Día y noche"],"c":2},{"q":"¿Cuál es un ejemplo de patrimonio cultural?","a":["Una regla","Una botella vacía","Un semáforo","Una danza tradicional"],"c":3},{"q":"¿Qué hacemos durante un sismo si estamos dentro de un edificio?","a":["Usamos el ascensor","Empujamos a otros","Nos acercamos a las ventanas","Nos protegemos y seguimos las indicaciones"],"c":3},{"q":"¿Qué es un derecho?","a":["Un juego","Un castigo","Una tarea de casa","Algo que protege y corresponde a las personas"],"c":3},{"q":"¿Cuál es una responsabilidad en la comunidad?","a":["Tirar basura","Respetar las reglas","Romper las señales","Dañar los parques"],"c":1},{"q":"¿Qué trabajo pertenece a una fábrica?","a":["Hacer zapatos","Pescar en el mar","Cuidar un jardín","Cultivar frijoles"],"c":0},{"q":"¿Qué nos dice la escala de un mapa?","a":["La edad de las personas","El color del cielo","La distancia entre lugares","El nombre de una calle solamente"],"c":2},{"q":"¿Por qué conviene informarse antes de votar?","a":["Para elegir con más conocimiento","Para no escuchar propuestas","Para votar más rápido","Para elegir al azar"],"c":0},{"q":"¿Qué nos ayuda a conocer cómo era antes un lugar?","a":["Fotos antiguas","Una receta","Una pelota","Un semáforo"],"c":0},{"q":"¿Qué podemos hacer para resolver un desacuerdo?","a":["Romper algo","Empujar","Hablar y escuchar","Gritar más fuerte"],"c":2},{"q":"¿Qué significa cuidar la naturaleza?","a":["Proteger plantas, animales y agua","Ensuciar los ríos","Cortar todos los árboles","Dejar basura en el parque"],"c":0}]},"5":{"Matemáticas":[{"q":"¿Cuánto es 300 + 200?","a":["500","700","600","400"],"c":0},{"q":"¿Cuánto es 700 − 250?","a":["450","350","550","650"],"c":0},{"q":"¿Cuánto es 8 × 7?","a":["54","48","64","56"],"c":3},{"q":"¿Cuánto es 63 ÷ 7?","a":["8","9","7","6"],"c":1},{"q":"¿Cuánto es 1/2 + 1/2?","a":["1/2","1/4","1","2"],"c":2},{"q":"¿Cuánto es 1/4 de 20?","a":["10","5","4","15"],"c":1},{"q":"¿Qué número decimal representa tres décimos?","a":["0,3","3,0","0,03","30"],"c":0},{"q":"¿Cuál es el área de un rectángulo de 6 cm por 4 cm?","a":["20 cm²","24 cm²","10 cm²","28 cm²"],"c":1},{"q":"¿Cuál es el perímetro de un cuadrado con lados de 5 cm?","a":["10 cm","25 cm","15 cm","20 cm"],"c":3},{"q":"¿Cuántos metros hay en un kilómetro?","a":["10","1000","500","100"],"c":1},{"q":"¿Cuánto es el 10 % de $50?","a":["$5","$15","$10","$25"],"c":0},{"q":"¿Cuántos minutos hay en una hora y media?","a":["60","90","80","120"],"c":1},{"q":"¿Cuánto es 2,5 + 1,5?","a":["5","4","3","4,5"],"c":1},{"q":"¿Cuál número es mayor: 2,5 o 2,05?","a":["2,05","Ninguno","2,5","Son iguales"],"c":2},{"q":"¿Cuántos grados suman los ángulos de un triángulo?","a":["90","360","180","100"],"c":2},{"q":"¿Cuánto es 12 × 3?","a":["42","24","36","30"],"c":2},{"q":"¿Cuánto es 144 ÷ 12?","a":["12","10","14","11"],"c":0},{"q":"¿Cuál es el promedio de 4, 6 y 8?","a":["4","6","18","8"],"c":1},{"q":"¿Qué número sigue: 4, 8, 12, __?","a":["20","16","18","14"],"c":1},{"q":"Una libreta cuesta $2. ¿Cuánto cuestan 3 libretas?","a":["$6","$3","$8","$5"],"c":0}],"Lenguaje":[{"q":"¿De qué trata principalmente un texto?","a":["Del color de las letras","Del número de páginas","De su idea principal","De la última palabra"],"c":2},{"q":"¿Cuál palabra significa casi lo mismo que alegre?","a":["Feliz","Lejos","Cansado","Enojado"],"c":0},{"q":"¿Qué palabra significa lo contrario de lleno?","a":["Vacío","Grande","Alto","Pesado"],"c":0},{"q":"¿Cuál oración tiene mayúscula al inicio?","a":["hace sol Hoy.","Hoy Hace sol.","hoy hace sol.","Hoy hace sol."],"c":3},{"q":"¿Cuál palabra nombra una acción?","a":["Cuaderno","Amable","Azul","Escribir"],"c":3},{"q":"¿Qué palabra es un pronombre?","a":["Escuela","Bonito","Nosotros","Cantar"],"c":2},{"q":"¿Qué información suele tener una noticia?","a":["Una canción solamente","Una lista de compras","Un hecho que ocurrió","Una receta imaginaria"],"c":2},{"q":"¿Qué es una biografía?","a":["La historia de la vida de una persona","Un cuento de magia","Un mapa","Una lista de animales"],"c":0},{"q":"¿Cuál palabra lleva tilde?","a":["Árbol","Mesa","Casa","Luna"],"c":0},{"q":"¿Qué significa escaso?","a":["Que hay mucho","Que es muy grande","Que es muy rápido","Que hay poco"],"c":3},{"q":"¿Qué es una opinión?","a":["Una fecha","Un dato que siempre se puede medir","El título de un libro","Lo que una persona piensa"],"c":3},{"q":"¿Qué palabra usamos para hablar de nosotros y otra persona?","a":["Yo","Nosotros","Ellos","Ella"],"c":1},{"q":"¿Cuál oración hace una pregunta?","a":["Hoy traje mi cuaderno.","Mi cuaderno es azul.","Guarda tu cuaderno.","¿Dónde está mi cuaderno?"],"c":3},{"q":"¿Qué signo usamos al final de una oración que cuenta algo?","a":["Guion","Punto","Coma","Paréntesis"],"c":1},{"q":"¿Qué significa leer con atención y sacar una conclusión?","a":["Mirar solo el título","Entender pistas del texto","Leer al revés","Contar las letras"],"c":1},{"q":"¿Cuál palabra es un verbo en infinitivo?","a":["Comer","Come","Comerá","Comió"],"c":0},{"q":"¿Qué frase describe un viento fuerte?","a":["El sol es un viento.","El viento soplaba con fuerza.","La mesa soplaba.","El viento es una ventana."],"c":1},{"q":"¿Qué ayuda a que una exposición se entienda?","a":["Hablar claro y en orden","Hablar muy bajo","Cambiar de tema a cada rato","Leer sin hacer pausas"],"c":0},{"q":"¿Dónde buscamos información confiable para una tarea?","a":["En un anuncio sin autor","En cualquier mensaje anónimo","En un libro o sitio educativo","En un rumor"],"c":2},{"q":"¿Por qué revisamos un texto antes de entregarlo?","a":["Para borrar todas las ideas","Para cambiar el tema","Para corregir errores","Para hacerlo más confuso"],"c":2}],"Ciencias":[{"q":"¿Qué hacen las plantas para fabricar su alimento?","a":["Comen tierra","Usan luz, agua y aire","Beben leche","Caminan al sol"],"c":1},{"q":"¿Qué órgano impulsa la sangre por el cuerpo?","a":["Estómago","Cerebro","Pulmón","Corazón"],"c":3},{"q":"¿Qué sistema nos ayuda a respirar?","a":["Sistema óseo","Sistema muscular","Sistema digestivo","Sistema respiratorio"],"c":3},{"q":"¿Qué planeta es famoso por sus anillos?","a":["Saturno","Venus","Marte","Mercurio"],"c":0},{"q":"¿Qué parte del cuerpo absorbe muchos nutrientes de los alimentos?","a":["Cabello","Uñas","Intestino delgado","Rodilla"],"c":2},{"q":"¿Qué es una cadena alimentaria?","a":["Una fila de plantas iguales","Un menú de restaurante","Quién se alimenta de quién en la naturaleza","Una cadena de metal"],"c":2},{"q":"¿Cuál es un ejemplo de adaptación de un animal?","a":["El pelaje grueso del oso en lugares fríos","Un pez que vive en un árbol seco","Un pájaro que no tiene plumas nunca","Una roca que cambia de lugar"],"c":0},{"q":"¿Qué mezcla podemos ver como una sola cosa uniforme?","a":["Frijoles con arroz","Arena con hojas","Agua con piedras grandes","Agua con sal disuelta"],"c":3},{"q":"¿Qué puede pasar si se talan muchos árboles?","a":["Hay más bosques","Los animales pierden lugares donde vivir","Los ríos se convierten en caminos","El aire desaparece de inmediato"],"c":1},{"q":"¿Qué usamos para medir la masa de una fruta?","a":["Regla","Termómetro","Reloj","Balanza"],"c":3},{"q":"¿Qué pasa cuando el vapor de agua se enfría?","a":["Se convierte en gotitas","Se convierte en arena","Se vuelve fuego","Desaparece para siempre"],"c":0},{"q":"¿Qué protege el cerebro?","a":["Costillas","Manos","Rodillas","Cráneo"],"c":3},{"q":"¿Cuál de estos seres es un microorganismo?","a":["Mariposa","Bacteria","Árbol","Perro"],"c":1},{"q":"¿Qué planeta es el hogar de las personas?","a":["Mercurio","Neptuno","Júpiter","La Tierra"],"c":3},{"q":"¿Qué debemos hacer con una botella para producir menos basura?","a":["Enterrarla en el parque","Reutilizarla o reciclarla","Dejarla en la calle","Tirarla al río"],"c":1},{"q":"¿Qué necesitamos para que haya vida y podamos beber?","a":["Pintura","Jabón","Agua limpia","Gasolina"],"c":2},{"q":"¿Cuál es una fuente de energía limpia que viene del Sol?","a":["Carbón","Panel solar","Gasolina","Leña"],"c":1},{"q":"¿Qué movimiento de la Tierra produce el día y la noche?","a":["Gira sobre su eje","Cambia de tamaño","Viaja alrededor de la Luna","Se detiene por la noche"],"c":0},{"q":"¿Cuál animal puede ser parte de una cadena alimentaria del campo?","a":["Pelota","Lápiz","Saltamontes","Silla"],"c":2},{"q":"¿Qué hacemos para cuidar el aire?","a":["Dejar el auto encendido","Usar menos humo y cuidar los árboles","Prender fuego a hojas","Quemar basura"],"c":1}],"Estudios Sociales":[{"q":"¿Qué estudia la geografía?","a":["Las partes de una planta","Las operaciones de sumar","Las palabras de un cuento","Los lugares y cómo son"],"c":3},{"q":"¿Qué muestra una línea de tiempo?","a":["El orden de los hechos","La temperatura del día","Los caminos de una ciudad","El tamaño de un país"],"c":0},{"q":"¿Quién dirige el gobierno y pone en práctica sus planes?","a":["El Órgano Ejecutivo","El hospital","La alcaldía de otro país","El equipo de fútbol"],"c":0},{"q":"¿Quién ayuda a resolver problemas usando las leyes?","a":["El mercado","El Órgano Judicial","La escuela","El parque"],"c":1},{"q":"¿Qué significa migrar?","a":["Mudarse de un lugar a otro","Viajar solo por una hora","Cambiar de escuela por un día","Cambiar de ropa"],"c":0},{"q":"¿Por qué algunas personas se mudan a otro lugar?","a":["Para buscar trabajo o estar seguras","Para cambiar el clima","Para cambiar el nombre del país","Para mover una montaña"],"c":0},{"q":"¿Qué significa cuidar los recursos para el futuro?","a":["Usarlos con responsabilidad","Ensuciar el agua","Cortar todos los árboles","Gastarlos todos hoy"],"c":0},{"q":"¿Cuál trabajo ofrece un servicio a otras personas?","a":["Cultivar maíz","Enseñar","Pescar","Sacar piedra de una mina"],"c":1},{"q":"¿Qué puede ser una fuente para conocer el pasado?","a":["Un juguete nuevo","Una carta antigua","Una señal de tránsito","Una fruta"],"c":1},{"q":"¿Para qué sirve un censo?","a":["Para elegir un equipo","Para conocer cuántas personas viven en un lugar","Para medir la lluvia","Para contar los árboles de un bosque solamente"],"c":1},{"q":"¿Cuál es un deber de las personas en la comunidad?","a":["Tirar basura en la calle","Respetar las reglas","Dañar los espacios públicos","Impedir que otros hablen"],"c":1},{"q":"¿Qué forma parte de la identidad cultural de una comunidad?","a":["El tamaño de una mesa","La marca de un teléfono","Sus costumbres y tradiciones","El color de cada zapato"],"c":2},{"q":"¿Qué puede causar una inundación?","a":["Una brisa suave","Una noche sin nubes","Un día soleado","Lluvias intensas"],"c":3},{"q":"¿Qué ayuda a prepararnos para una emergencia?","a":["Conocer las salidas y seguir indicaciones","Esconder las señales","Bloquear las puertas","Ignorar las alertas"],"c":0},{"q":"¿Qué nos ayuda a saber distancias en un mapa?","a":["La escala","El título","La leyenda del cuento","El color del papel"],"c":0},{"q":"¿Cómo puede la comunidad resolver un problema local?","a":["Esperar que nadie lo note","Pelear entre vecinos","Conversar y colaborar","Dañar los espacios"],"c":2},{"q":"¿Cuál trabajo produce alimentos cultivando la tierra?","a":["Medicina","Enseñanza","Transporte","Agricultura"],"c":3},{"q":"¿Qué es la Constitución de un país?","a":["Una lista de compras","Un mapa de carreteras","Un libro de cuentos","Un conjunto de reglas principales del país"],"c":3},{"q":"¿Qué ayuda a mantener la paz?","a":["No respetar turnos","Pelear para ganar","Escuchar y resolver problemas hablando","Burlarse de los demás"],"c":2},{"q":"¿Cómo protegemos un lugar histórico?","a":["Rompemos sus partes","Lo cuidamos y no lo dañamos","Escribimos en sus paredes","Nos llevamos sus objetos"],"c":1}]}};

document.addEventListener("DOMContentLoaded", () => {
  const $ = (id) => document.getElementById(id);
  const canvas = $("juego");
  const ctx = canvas.getContext("2d");
  const el = {
    inicio:$("pantallaInicio"), personalizador:$("personalizador"), juego:$("pantallaJuego"), grado:$("grado"),
    comenzar:$("btnComenzar"), pausar:$("btnPausar"), reiniciar:$("btnReiniciar"),
    volver:$("btnInicio"), puntos:$("puntos"), llaves:$("llaves"),
    gradoActual:$("gradoActual"), estado:$("estado"), interactuar:$("btnInteractuar"),
    modal:$("modalPregunta"), materia:$("materia"), materiaIcon:$("materiaIcon"),
    progreso:$("progreso"), pregunta:$("pregunta"), respuestas:$("respuestas"),
    resultado:$("resultado"), explicacion:$("explicacion"), siguiente:$("btnSiguiente"), barra:$("barraProgreso"),
    cerrarQuiz:$("btnCerrarQuiz"), modalMensaje:$("modalMensaje"),
    mensajeTitulo:$("mensajeTitulo"), mensajeTexto:$("mensajeTexto"),
    mensajeEmoji:$("mensajeEmoji"), cerrarMensaje:$("btnCerrarMensaje"),
    sonido:$("btnSonido"), nombreAventurero:$("nombreAventurero"),
    avatarPreview:$("avatarPreview"), sorpresa:$("btnSorpresa"),
    restablecerAvatar:$("btnRestablecerAvatar")
  };

  const salones = [
    {id:"Matemáticas",label:"MATEMÁTICAS",icon:"➗",x:160,y:155,w:240,h:155,color:"#49c6ff"},
    {id:"Lenguaje",label:"LENGUAJE",icon:"📖",x:560,y:155,w:240,h:155,color:"#b29aff"},
    {id:"Ciencias",label:"CIENCIAS",icon:"🧪",x:160,y:390,w:240,h:155,color:"#47e0ad"},
    {id:"Estudios Sociales",label:"ESTUDIOS SOCIALES",icon:"🌎",x:560,y:390,w:240,h:155,color:"#ffd166"}
  ];
  const icons={"Matemáticas":"➗","Lenguaje":"📖","Ciencias":"🧪","Estudios Sociales":"🌎"};
  const keys = new Set();
  const PROFILE_KEY="escape-colegio-personaje-v1";
  const DEFAULT_AVATAR={nombre:"Aventurero",piel:"#d99564",peinado:"corto",cabello:"#513323",camisa:"#2677c8",pantalon:"#344363",mochila:"#ef8d32",accesorio:"ninguno"};
  const AVATAR_CATEGORIES=[
    {field:"piel",group:"opcionesPiel",type:"color",options:[
      {name:"Durazno",value:"#f5d0ad"},{name:"Arena",value:"#edbc8e"},{name:"Canela",value:"#d99564"},{name:"Miel",value:"#b87450"},{name:"Cacao",value:"#8b563d"},{name:"Café",value:"#60402f"}
    ]},
    {field:"peinado",group:"opcionesPeinado",type:"label",options:[
      {name:"Corto",value:"corto",icon:"✂️"},{name:"Rizado",value:"rizado",icon:"🌀"},{name:"Largo",value:"largo",icon:"〰️"},{name:"Coletas",value:"coletas",icon:"🎀"},{name:"Picos",value:"picos",icon:"⚡"},{name:"Trenzas",value:"trenzas",icon:"🪢"}
    ]},
    {field:"cabello",group:"opcionesCabello",type:"color",options:[
      {name:"Castaño",value:"#513323"},{name:"Chocolate",value:"#34221a"},{name:"Negro",value:"#20202a"},{name:"Rubio",value:"#e6bd55"},{name:"Pelirrojo",value:"#b94f2b"},{name:"Violeta",value:"#8d61bd"},{name:"Azul",value:"#428bc2"},{name:"Rosa",value:"#d66e9d"}
    ]},
    {field:"camisa",group:"opcionesCamisa",type:"color",options:[
      {name:"Azul",value:"#2677c8"},{name:"Rojo",value:"#e75b56"},{name:"Verde",value:"#34a878"},{name:"Violeta",value:"#8c64ce"},{name:"Amarillo",value:"#e5ae35"},{name:"Turquesa",value:"#26a9ad"},{name:"Rosa",value:"#d9639a"},{name:"Naranja",value:"#e98237"}
    ]},
    {field:"pantalon",group:"opcionesPantalon",type:"color",options:[
      {name:"Marino",value:"#344363"},{name:"Índigo",value:"#454a9c"},{name:"Café",value:"#745237"},{name:"Verde",value:"#347653"},{name:"Gris",value:"#626e7e"},{name:"Morado",value:"#704b91"}
    ]},
    {field:"mochila",group:"opcionesMochila",type:"color",options:[
      {name:"Naranja",value:"#ef8d32"},{name:"Roja",value:"#d94d53"},{name:"Azul",value:"#3488e0"},{name:"Verde",value:"#30a875"},{name:"Violeta",value:"#9463d0"},{name:"Rosa",value:"#e16b9b"},{name:"Amarilla",value:"#e8bd3e"},{name:"Turquesa",value:"#31afaf"}
    ]},
    {field:"accesorio",group:"opcionesAccesorio",type:"accessory",options:[
      {name:"Ninguno",value:"ninguno",icon:"🙂"},{name:"Lentes",value:"lentes",icon:"🤓"},{name:"Corona",value:"corona",icon:"👑"},{name:"Gorra",value:"gorra",icon:"🧢"},{name:"Audífonos",value:"audifonos",icon:"🎧"},{name:"Moño",value:"mono",icon:"🎀"},{name:"Estrella",value:"estrella",icon:"⭐"},{name:"Flor",value:"flor",icon:"🌼"}
    ]}
  ];
  function loadAvatar(){
    try{
      const saved=JSON.parse(localStorage.getItem(PROFILE_KEY));
      const avatar={...DEFAULT_AVATAR};
      if(saved&&typeof saved==="object"){
        for(const category of AVATAR_CATEGORIES){
          if(category.options.some(option=>option.value===saved[category.field]))avatar[category.field]=saved[category.field];
        }
        if(typeof saved.nombre==="string")avatar.nombre=saved.nombre.replace(/[<>]/g,"").trim().slice(0,18)||DEFAULT_AVATAR.nombre;
      }
      return avatar;
    }catch(_){return {...DEFAULT_AVATAR};}
  }
  const state = {
    grade:"3", score:0, collected:new Set(), done:new Set(), paused:false,
    x:480,y:340,speed:3.1, quiz:null, quizIndex:0, quizCorrect:0, currentRoom:null,
    answerSelected:null, started:false, hasSavedGame:false,
    muted:false, audio:null, musicTimer:null, musicStarting:false, musicStep:0, animation:0, lastTime:0, avatar:loadAvatar()
  };
  const playerRadius=14;
  const clamp=(n,min,max)=>Math.max(min,Math.min(max,n));
  const SAVE_KEY="escape-colegio-progreso-v1";

  function saveAvatar(){
    try{localStorage.setItem(PROFILE_KEY,JSON.stringify(state.avatar));}catch(_){say("No se pudo guardar el diseño en este navegador.");}
  }
  function updateAvatarPreview(){
    const preview=el.avatarPreview.getContext("2d");
    preview.clearRect(0,0,el.avatarPreview.width,el.avatarPreview.height);
    drawStudent(preview,110,106,state.avatar,2.6,false,0);
  }
  function renderAvatarChoices(){
    for(const category of AVATAR_CATEGORIES){
      const group=$(category.group);
      for(const option of category.options){
        const button=document.createElement("button");
        button.type="button";
        button.className=`choice-chip${category.type==="color"?" color-choice":category.type==="accessory"?" accessory-choice":""}`;
        button.dataset.value=option.value;
        button.setAttribute("aria-label",option.name);
        button.setAttribute("aria-pressed",String(state.avatar[category.field]===option.value));
        button.title=option.name;
        if(category.type==="color"){
          const dot=document.createElement("span");
          dot.className="color-dot";
          dot.style.setProperty("--swatch",option.value);
          dot.setAttribute("aria-hidden","true");
          button.append(dot);
        }else if(category.type==="accessory"){
          const icon=document.createElement("span");
          icon.className="accessory-icon";
          icon.textContent=option.icon;
          icon.setAttribute("aria-hidden","true");
          button.append(icon,document.createTextNode(option.name));
        }else{
          button.append(document.createTextNode(`${option.icon} ${option.name}`));
        }
        button.addEventListener("click",()=>{
          state.avatar[category.field]=option.value;
          saveAvatar();
          updateAvatarEditor();
        });
        group.append(button);
      }
    }
    el.nombreAventurero.value=state.avatar.nombre;
    el.nombreAventurero.addEventListener("input",()=>{
      state.avatar.nombre=el.nombreAventurero.value.replace(/[<>]/g,"").trim().slice(0,18)||DEFAULT_AVATAR.nombre;
      saveAvatar();
      updateAvatarEditor();
    });
    el.sorpresa.addEventListener("click",()=>{
      for(const category of AVATAR_CATEGORIES){
        const option=category.options[Math.floor(Math.random()*category.options.length)];
        state.avatar[category.field]=option.value;
      }
      saveAvatar();
      updateAvatarEditor();
    });
    el.restablecerAvatar.addEventListener("click",()=>{
      state.avatar={...DEFAULT_AVATAR};
      saveAvatar();
      updateAvatarEditor();
    });
    updateAvatarEditor();
  }
  function updateAvatarEditor(){
    for(const category of AVATAR_CATEGORIES){
      const group=$(category.group);
      group.querySelectorAll("button").forEach(button=>{
        button.setAttribute("aria-pressed",String(button.dataset.value===state.avatar[category.field]));
      });
    }
    updateAvatarPreview();
  }
  renderAvatarChoices();

  function loadSavedGame(){
    try{
      const saved=JSON.parse(localStorage.getItem(SAVE_KEY));
      return saved&&saved.version===1&&["3","4","5"].includes(saved.grade)?saved:null;
    }catch(_){return null;}
  }
  function saveGame(){
    if(!state.started)return;
    const saved={version:1,grade:state.grade,score:state.score,collected:[...state.collected],done:[...state.done],x:state.x,y:state.y,quiz:null};
    if(state.quiz&&state.currentRoom){
      const bank=BANCO[state.grade][state.currentRoom.id];
      saved.quiz={roomId:state.currentRoom.id,questionIndexes:state.quiz.questions.map(q=>bank.indexOf(q)),index:state.quizIndex,correct:state.quizCorrect,answerSelected:state.answerSelected};
    }
    try{localStorage.setItem(SAVE_KEY,JSON.stringify(saved));}catch(_){say("No se pudo guardar el avance en este navegador.");}
  }
  function restoreSavedGame(saved){
    if(!saved)return;
    state.grade=saved.grade;
    state.score=Number.isFinite(saved.score)?Math.max(0,Math.floor(saved.score)):0;
    const roomIds=salones.map(r=>r.id);
    state.collected=new Set(Array.isArray(saved.collected)?saved.collected.filter(id=>roomIds.includes(id)):[]);
    state.done=new Set(Array.isArray(saved.done)?saved.done.filter(id=>roomIds.includes(id)):[]);
    state.x=Number.isFinite(saved.x)?clamp(saved.x,42,918):480;
    state.y=Number.isFinite(saved.y)?clamp(saved.y,42,598):340;
    if(collides(state.x,state.y)){state.x=480;state.y=340;}
    state.started=true;state.hasSavedGame=true;
    const quizSave=saved.quiz;
    if(quizSave&&Array.isArray(quizSave.questionIndexes)){
      const room=salones.find(r=>r.id===quizSave.roomId);
      const bank=room&&BANCO[state.grade][room.id];
      const validIndexes=quizSave.questionIndexes.filter(i=>Number.isInteger(i)&&i>=0&&i<bank?.length);
      if(room&&validIndexes.length===5){
        state.currentRoom=room;
        state.quiz={room,questions:validIndexes.map(i=>bank[i])};
        state.quizIndex=clamp(Number.isInteger(quizSave.index)?quizSave.index:0,0,4);
        state.quizCorrect=clamp(Number.isInteger(quizSave.correct)?quizSave.correct:0,0,5);
        state.answerSelected=Number.isInteger(quizSave.answerSelected)&&quizSave.answerSelected>=0&&quizSave.answerSelected<4?quizSave.answerSelected:null;
      }
    }
    el.grado.value=state.grade;el.comenzar.textContent="Continuar aventura";
  }
  restoreSavedGame(loadSavedGame());

  function explainAnswer(question,subject,answer){
    const q=question.toLowerCase();
    if(subject==="Matemáticas"){
      const fractionSum=q.match(/(\d+)\/(\d+)\s*\+\s*(\d+)\/(\d+)/);
      if(fractionSum&&fractionSum[2]===fractionSum[4]){
        const parts=Number(fractionSum[1])+Number(fractionSum[3]);
        return parts===Number(fractionSum[2])?"Dos mitades forman un entero completo.":`Como las fracciones tienen el mismo denominador, sumamos las partes de arriba y dejamos igual las de abajo: ${parts} partes de ${fractionSum[2]}.`;
      }
      if(!/\d+\/\d+/.test(q)){
        const m=q.match(/(\d+(?:[.,]\d+)?)\s*([+−×÷])\s*(\d+(?:[.,]\d+)?)/);
        if(m){
          const a=Number(m[1].replace(",",".")),b=Number(m[3].replace(",","."));
          const value=m[2]==="+"?a+b:m[2]==="−"?a-b:m[2]==="×"?a*b:a/b;
          return `${m[2]==="+"?"Sumamos":m[2]==="−"?"Restamos":m[2]==="×"?"Multiplicamos":"Dividimos"} ${m[1]} ${m[2]} ${m[3]}: el resultado es ${Number.isInteger(value)?value:String(value).replace(".",",")}.`;
        }
      }
      if(/mitad/.test(q))return "La mitad se obtiene al repartir una cantidad en dos partes iguales.";
      if(/1\/4|cuarto|cuatro partes/.test(q))return "Un cuarto es una de cuatro partes iguales.";
      if(/fracci/.test(q))return "Una fracción muestra partes iguales de un entero.";
      if(/decenas/.test(q))return "Una decena equivale a 10 unidades; contamos de diez en diez.";
      if(/mayor|menor/.test(q))return "Comparamos los números por su valor: primero miramos las centenas, luego las decenas y las unidades.";
      if(/lados tiene/.test(q))return "Podemos contar los lados rectos de la figura para saber cuántos tiene.";
      if(/perímetro/.test(q))return "El perímetro se obtiene sumando las longitudes de todos los lados.";
      if(/área/.test(q))return "El área de un rectángulo se calcula multiplicando el largo por el ancho.";
      if(/minutos|hora/.test(q))return "Una hora tiene 60 minutos; para hallar más tiempo, multiplicamos por la cantidad de horas.";
      if(/centímetros|metro|kilómetro/.test(q))return "Las unidades de longitud nos ayudan a medir distancias: 1 metro tiene 100 centímetros y 1 kilómetro tiene 1000 metros.";
      if(/décimos|decimal/.test(q))return "En un número decimal, la primera cifra después de la coma representa los décimos.";
      if(/10 %|por ciento/.test(q))return "El 10 % es una de diez partes iguales de una cantidad.";
      if(/promedio/.test(q))return "Para hallar el promedio, sumamos los números y dividimos entre cuántos números hay.";
      if(/triángulo.*ángulos|ángulos.*triángulo/.test(q))return "Los tres ángulos interiores de un triángulo suman 180 grados.";
      if(/par/.test(q))return "Un número par se puede repartir en grupos de dos sin que sobre ninguno.";
      if(/sigue|número viene después/.test(q))return "Mira cuánto aumenta cada número y continúa el mismo patrón.";
      if(/bolsas|libretas|cuestan/.test(q))return "Cuando varios grupos tienen la misma cantidad, podemos multiplicar para contar el total.";
      return `Puedes comprobarlo resolviendo el ejercicio paso a paso. La respuesta es ${answer}.`;
    }
    if(subject==="Lenguaje"){
      if(/nombre de una persona|nombra una persona|nombra un animal|nombra un lugar|nombra una acción/.test(q))return "Las palabras que nombran personas, animales, lugares o cosas son sustantivos; las que nombran acciones son verbos.";
      if(/acción|verbo/.test(q))return "Los verbos nombran acciones, como saltar, cantar o escribir.";
      if(/adjetivo|describe/.test(q))return "Los adjetivos describen cómo es una persona, un animal o una cosa.";
      if(/plural/.test(q))return "El plural se usa cuando hablamos de más de una persona, animal o cosa.";
      if(/pregunta/.test(q))return "En español, las preguntas llevan ¿ al comienzo y ? al final.";
      if(/¡ y !|exclamación/.test(q))return "Las exclamaciones llevan ¡ al comienzo y ! al final para expresar emoción.";
      if(/rima/.test(q))return "Dos palabras riman cuando sus sonidos finales se parecen.";
      if(/sílabas/.test(q))return "Las sílabas son los grupos de sonidos en que podemos separar una palabra al pronunciarla.";
      if(/ya pasó|pasado|ayer/.test(q))return "Un verbo en pasado cuenta una acción que ya ocurrió.";
      if(/futuro|mañana/.test(q))return "Un verbo en futuro cuenta algo que ocurrirá después.";
      if(/oración completa/.test(q))return "Una oración completa comunica una idea y ordena sus palabras para que tengan sentido.";
      if(/diminutivo/.test(q))return "Un diminutivo expresa que algo es pequeño o querido; a menudo termina en -ito o -ita.";
      if(/mayúscula/.test(q)||/nombre de un país/.test(q))return "Empezamos las oraciones con mayúscula y también escribimos con mayúscula los nombres propios.";
      if(/contrario|antónimo/.test(q))return "Un antónimo es una palabra que significa lo contrario de otra.";
      if(/casi lo mismo|sinónimo/.test(q))return "Un sinónimo tiene un significado igual o parecido al de otra palabra.";
      if(/cuento|historia inventada|fábula/.test(q))return "Un cuento narra una historia; una fábula además suele dejar una enseñanza.";
      if(/idea principal|de qué trata/.test(q))return "La idea principal cuenta lo más importante del texto.";
      if(/noticia/.test(q))return "Una noticia informa sobre un hecho que ocurrió.";
      if(/biografía/.test(q))return "Una biografía cuenta la vida de una persona.";
      if(/pronombre/.test(q)||/nosotros/.test(q))return "Los pronombres pueden reemplazar el nombre de una persona o grupo, como yo, ella o nosotros.";
      if(/título/.test(q))return "El título anuncia el tema del texto y ayuda a saber de qué tratará.";
      if(/resumen/.test(q))return "Un resumen presenta las ideas principales con pocas palabras.";
      if(/revisamos un texto|revisar un texto/.test(q))return "Revisar permite encontrar errores y mejorar lo que escribimos.";
      return "Lee la oración completa y fíjate en el significado de cada palabra.";
    }
    if(subject==="Ciencias"){
      if(/gas.*plantas|plantas.*aire/.test(q))return "Las plantas toman dióxido de carbono del aire y, con agua y luz, fabrican su alimento.";
      if(/respirar|respiratorio/.test(q))return "Los pulmones reciben el oxígeno del aire que nuestro cuerpo necesita.";
      if(/plantas.*crecer|planta.*crecer|plantas.*fabricar alimento|raíces|raíz|toma agua/.test(q))return "Las plantas necesitan agua y luz; las raíces absorben agua del suelo.";
      if(/sol|luz durante el día|energía solar|panel solar/.test(q))return "El Sol nos da luz y su energía puede transformarse en electricidad con paneles solares.";
      if(/hielo|se derrite|estado/.test(q))return "El hielo es agua sólida; al calentarse, se derrite y pasa a ser líquida.";
      if(/mamífero/.test(q))return "Los mamíferos nacen de su madre y toman leche cuando son pequeños.";
      if(/sentido|escuchar|vemos/.test(q))return "Los oídos nos permiten escuchar y los ojos nos permiten ver.";
      if(/antes de comer|manos/.test(q))return "Lavarnos las manos ayuda a quitar microbios y evita que lleguen a la comida.";
      if(/huevo/.test(q))return "Las gallinas y las tortugas son animales que nacen de huevos.";
      if(/dientes/.test(q))return "Cepillarnos los dientes ayuda a mantenerlos limpios y sanos.";
      if(/corazón|sangre/.test(q))return "El corazón bombea sangre para que circule por todo el cuerpo.";
      if(/recurso natural|agua limpia|agua\?/.test(q))return "Un recurso natural viene de la naturaleza, como el agua, el aire y el suelo.";
      if(/arcoíris/.test(q))return "Un arcoíris aparece cuando la luz del Sol atraviesa pequeñas gotas de agua.";
      if(/come plantas|herbívoro/.test(q))return "Los animales herbívoros se alimentan de plantas.";
      if(/basura|reciclar|recicla|reutilizar/.test(q))return "Separar, reutilizar y reciclar residuos ayuda a mantener limpio el ambiente.";
      if(/pensar|cerebro/.test(q))return "El cerebro nos ayuda a pensar, aprender y controlar muchas funciones del cuerpo.";
      if(/gravedad|caigan al suelo/.test(q))return "La gravedad atrae los objetos hacia la Tierra.";
      if(/columna vertebral|huesos/.test(q))return "Los animales vertebrados tienen huesos y una columna que sostiene su cuerpo.";
      if(/filtro|colador/.test(q))return "Un filtro o colador deja pasar el líquido y retiene las partículas sólidas.";
      if(/mezcla.*uniforme|una sola cosa/.test(q))return "En una mezcla uniforme, sus partes quedan repartidas y no se distinguen a simple vista.";
      if(/temperatura|termómetro/.test(q))return "El termómetro sirve para medir qué tan caliente o frío está algo.";
      if(/bosque|ecosistema|viven plantas y animales/.test(q))return "Un ecosistema es un lugar donde viven plantas y animales y se relacionan con su entorno.";
      if(/ahorrar agua|cuidar el aire|cuidar la naturaleza|árboles/.test(q))return "Cuidar el agua, el aire y los árboles protege a las personas, plantas y animales.";
      if(/saturno|anillos/.test(q))return "Saturno es un planeta conocido por los anillos que lo rodean.";
      if(/nutrientes|intestino/.test(q))return "El intestino absorbe nutrientes de los alimentos para que el cuerpo los use.";
      if(/agua.*gotitas|vapor.*enfría/.test(q))return "Cuando el vapor se enfría, se condensa y forma pequeñas gotas de agua.";
      if(/cráneo|cerebro/.test(q))return "El cráneo es un conjunto de huesos que protege el cerebro.";
      if(/día y la noche|sobre su eje/.test(q))return "La Tierra gira sobre su eje; la parte que mira al Sol tiene día y la otra tiene noche.";
      return `En ciencias observamos cómo funciona la naturaleza y nuestro cuerpo. La respuesta es ${answer}.`;
    }
    if(/capital/.test(q))return "La capital es la ciudad principal donde se encuentran muchas instituciones del gobierno.";
    if(/bandera|símbolo/.test(q))return "La bandera es un símbolo que representa a un país.";
    if(/océano|pacífico/.test(q))return "El Salvador tiene costa junto al océano Pacífico.";
    if(/mapa|escala/.test(q))return "Un mapa representa lugares; su escala ayuda a comparar distancias reales.";
    if(/brújula|direcciones|puntos/.test(q))return "La brújula ayuda a orientarnos usando direcciones como norte, sur, este y oeste.";
    if(/comunidad|municipio|alcald/.test(q))return "La alcaldía atiende asuntos y servicios del municipio y su comunidad.";
    if(/semáforo|calle/.test(q))return "Para cruzar con seguridad, miramos a ambos lados y respetamos las señales de tránsito.";
    if(/derecho/.test(q))return "Los derechos protegen a las personas; la educación es un derecho de la niñez.";
    if(/responsabilidad|deber/.test(q))return "Cumplir responsabilidades y respetar reglas ayuda a que la comunidad conviva mejor.";
    if(/independencia|15 de septiembre/.test(q))return "El 15 de septiembre se conmemora la Independencia de Centroamérica.";
    if(/sismo/.test(q))return "Durante un sismo buscamos un lugar seguro y seguimos las indicaciones de los adultos.";
    if(/historia|pasado|carta antigua/.test(q))return "Las fotos, cartas y objetos antiguos pueden darnos pistas sobre el pasado.";
    if(/tradición|cultural|costumbres/.test(q))return "Las tradiciones y costumbres forman parte de la cultura de una comunidad.";
    if(/naturaleza|árboles|ambiente/.test(q))return "Cuidar la naturaleza significa proteger el agua, las plantas y los animales.";
    if(/migrar|mudarse/.test(q))return "Migrar significa trasladarse de un lugar a otro para vivir.";
    if(/votar/.test(q))return "Votar permite que las personas elijan a quienes las representarán.";
    if(/constitución|reglas principales/.test(q))return "La Constitución reúne las reglas principales para organizar el país y proteger derechos.";
    if(/censo/.test(q))return "Un censo reúne información sobre las personas que viven en un lugar.";
    if(/conversar|hablando|escuchar/.test(q))return "Escuchar y conversar ayuda a resolver desacuerdos sin pelear.";
    return `Las personas se organizan para vivir y colaborar en comunidad. La respuesta es ${answer}.`;
  }

  function getAudioContext(){
    if(state.muted)return null;
    try{
      const AudioContextClass=window.AudioContext||window.webkitAudioContext;
      if(!AudioContextClass)return null;
      if(!state.audio||state.audio.state==="closed")state.audio=new AudioContextClass();
      return state.audio;
    }catch(_){return null;}
  }
  function playBell(freq=550,duration=.24,volume=.045){
    const audio=getAudioContext();
    if(!audio)return;
    const play=()=>{
      if(state.muted)return;
      try{
      const now=audio.currentTime;
      [[1,volume],[2.4,volume*.18]].forEach(([ratio,level])=>{
        const osc=audio.createOscillator(),gain=audio.createGain();
        osc.type="sine";osc.frequency.setValueAtTime(freq*ratio,now);
        gain.gain.setValueAtTime(level,now);gain.gain.exponentialRampToValueAtTime(.001,now+duration);
        osc.connect(gain);gain.connect(audio.destination);osc.start(now);osc.stop(now+duration);
      });
      }catch(_){}
    };
    if(audio.state!=="running"){audio.resume().then(play).catch(()=>{});return;}
    play();
  }
  function playSequence(notes,interval=125,duration=.35,volume=.045){
    notes.forEach((note,index)=>window.setTimeout(()=>playBell(note,duration,volume),index*interval));
  }
  function playCorrectSound(){playSequence([659,880],115,.32,.04);}
  function playWrongSound(){playBell(294,.2,.018);}
  function playKeySound(){playSequence([523,659,784,1047],105,.42,.045);}
  function playVictorySound(){playSequence([523,659,784,1047,880,1047,1319],175,.62,.05);}
  function stopMusic(){
    if(state.musicTimer!==null){window.clearInterval(state.musicTimer);state.musicTimer=null;}
  }
  function startMusic(){
    if(state.muted||state.musicTimer!==null||state.musicStarting||el.juego.classList.contains("hidden")||state.paused||state.quiz||!el.modalMensaje.classList.contains("hidden"))return;
    const audio=getAudioContext();
    if(!audio)return;
    if(audio.state!=="running"){
      state.musicStarting=true;
      audio.resume().then(()=>{state.musicStarting=false;startMusic();}).catch(()=>{state.musicStarting=false;});
      return;
    }
    const melody=[523,659,784,659,587,698,880,698,523,659,784,988,880,784,659,587];
    const bass=[262,262,294,294];
    const playNextNote=()=>{
      const index=state.musicStep++%melody.length;
      playBell(melody[index],.42,.03);
      if(index%4===0)playBell(bass[Math.floor(index/4)%bass.length],.55,.012);
    };
    playNextNote();
    state.musicTimer=window.setInterval(playNextNote,560);
  }
  function say(text){el.estado.textContent=text;}
  function updateHUD(){
    el.puntos.textContent=state.score;
    el.llaves.textContent=`${state.collected.size} / 4`;
    el.gradoActual.textContent=`${state.grade}.º`;
    salones.forEach(r=>{
      const item=$(`key-${r.id}`);
      if(item){item.classList.toggle("obtained",state.collected.has(r.id));item.querySelector("b").textContent=state.collected.has(r.id)?"🔓":"🔒";}
    });
    saveGame();
  }
  function startGame(){
    const continuing=state.hasSavedGame&&el.grado.value===state.grade;
    if(state.hasSavedGame&&!continuing){
      if(!window.confirm("Empezar con otro grado reemplazará el avance guardado. ¿Quieres continuar?"))return;
      state.hasSavedGame=false;
    }
    if(continuing){
      state.hasSavedGame=false;
    }else{
      state.grade=el.grado.value;state.score=0;state.collected.clear();state.done.clear();
      state.x=480;state.y=340;state.quiz=null;state.currentRoom=null;state.answerSelected=null;
    }
    state.started=true;state.paused=false;
    el.pausar.textContent="⏸ Pausar";
    el.inicio.classList.add("hidden");el.personalizador.classList.add("hidden");el.juego.classList.remove("hidden");
    el.modal.classList.add("hidden");el.modalMensaje.classList.add("hidden");
    if(state.quiz){
      const savedAnswer=state.answerSelected;
      state.currentRoom=state.quiz.room;renderQuestion();
      if(savedAnswer!==null)showAnswerResult(savedAnswer);
      el.modal.classList.remove("hidden");
    }
    updateHUD();say(`${state.avatar.nombre}, explora el colegio. Acércate a un salón y pulsa Interactuar.`);
    startMusic();
    draw();
  }
  function resetGame(){state.hasSavedGame=false;startGame();}
  function roomAtPlayer(){
    return salones.find(r=>state.x>=r.x-15&&state.x<=r.x+r.w+15&&state.y>=r.y-15&&state.y<=r.y+r.h+15);
  }
  function nearestRoom(){
    let best=null,dist=Infinity;
    for(const r of salones){
      const cx=r.x+r.w/2,cy=r.y+r.h/2,d=Math.hypot(state.x-cx,state.y-cy);
      if(d<dist){best=r;dist=d;}
    }
    return dist<100?best:null;
  }
  function collides(nx,ny){
    if(nx<42||nx>918||ny<42||ny>598)return true;
    for(const r of salones){
      const inside=nx>r.x-playerRadius&&nx<r.x+r.w+playerRadius&&ny>r.y-playerRadius&&ny<r.y+r.h+playerRadius;
      if(inside)return true;
    }
    // outer walls and a few interior planters; corridors stay open
    return false;
  }
  function move(dx,dy){
    if(state.paused||!el.modal.classList.contains("hidden")||el.inicio.classList.contains("hidden")===false)return;
    const nx=state.x+dx,ny=state.y+dy;
    if(!collides(nx,state.y))state.x=nx;
    if(!collides(state.x,ny))state.y=ny;
    if(dx||dy)draw();
  }
  function updateMovement(dt=1000/60){
    if(state.paused||!el.modal.classList.contains("hidden")||!el.modalMensaje.classList.contains("hidden"))return;
    let dx=0,dy=0;
    if(keys.has("ArrowUp")||keys.has("w"))dy-=1;
    if(keys.has("ArrowDown")||keys.has("s"))dy+=1;
    if(keys.has("ArrowLeft")||keys.has("a"))dx-=1;
    if(keys.has("ArrowRight")||keys.has("d"))dx+=1;
    if(dx||dy){const m=Math.hypot(dx,dy),frameScale=dt/(1000/60);move(dx/m*state.speed*frameScale,dy/m*state.speed*frameScale);}
  }
  function roundedRect(c,x,y,w,h,r,fill,stroke){
    c.beginPath();c.roundRect(x,y,w,h,r);if(fill){c.fillStyle=fill;c.fill()}if(stroke){c.strokeStyle=stroke;c.stroke()}
  }
  function drawTree(x,y,scale=1){
    ctx.save();ctx.translate(x,y);ctx.scale(scale,scale);
    ctx.fillStyle="#76502f";ctx.fillRect(-5,4,10,22);
    ctx.fillStyle="#2c8748";ctx.beginPath();ctx.arc(0,-3,19,0,Math.PI*2);ctx.fill();
    ctx.fillStyle="#3da95a";ctx.beginPath();ctx.arc(-8,-10,12,0,Math.PI*2);ctx.fill();
    ctx.fillStyle="#65c96c";ctx.beginPath();ctx.arc(7,-12,8,0,Math.PI*2);ctx.fill();
    ctx.restore();
  }
  function drawBench(x,y){
    ctx.save();ctx.fillStyle="#80512e";ctx.fillRect(x-20,y-7,40,14);ctx.fillStyle="#c78a4d";ctx.fillRect(x-20,y-9,40,5);
    ctx.fillStyle="#51402e";ctx.fillRect(x-15,y+7,4,8);ctx.fillRect(x+11,y+7,4,8);ctx.restore();
  }
  function drawStudent(c,x,y,look,scale=1,moving=false,step=0){
    c.save();c.translate(x,y);c.scale(scale,scale);
    c.fillStyle="rgba(18,40,25,.25)";c.beginPath();c.ellipse(0,13,16,7,0,0,Math.PI*2);c.fill();
    c.strokeStyle=look.pantalon;c.lineWidth=5;c.lineCap="round";
    c.beginPath();c.moveTo(-5,5);c.lineTo(-6+step,14);c.moveTo(5,5);c.lineTo(6-step,14);c.stroke();
    roundedRect(c,-12+step,11,10,5,2,look.pantalon);
    roundedRect(c,2-step,11,10,5,2,look.pantalon);
    roundedRect(c,-12,-7,5,12,2,look.mochila);
    c.strokeStyle=look.piel;c.lineWidth=4;c.beginPath();c.moveTo(-8,-5);c.lineTo(-12-step*.4,3);c.moveTo(8,-5);c.lineTo(12+step*.4,3);c.stroke();
    roundedRect(c,-9,-9,18,18,5,look.camisa);
    c.fillStyle="#f4f7ff";c.fillRect(-2,-7,4,11);
    roundedRect(c,-3,-13,6,6,2,look.piel);
    c.fillStyle=look.piel;c.beginPath();c.ellipse(0,-17,9,10,0,0,Math.PI*2);c.fill();
    drawStudentHair(c,look);
    c.fillStyle="#2c2630";c.beginPath();c.arc(-3,-16,1,0,Math.PI*2);c.arc(3,-16,1,0,Math.PI*2);c.fill();
    c.strokeStyle="#9b4f40";c.lineWidth=1.2;c.beginPath();c.moveTo(-2,-12);c.quadraticCurveTo(0,-10,2,-12);c.stroke();
    drawStudentAccessory(c,look.accesorio);
    c.restore();
  }
  function drawStudentHair(c,look){
    const color=look.cabello;
    c.fillStyle=color;
    if(look.peinado==="largo"){
      c.beginPath();c.ellipse(-7,-12,4,11,-.12,0,Math.PI*2);c.ellipse(7,-12,4,11,.12,0,Math.PI*2);c.fill();
    }else if(look.peinado==="coletas"){
      c.beginPath();c.arc(-9,-23,4,0,Math.PI*2);c.arc(9,-23,4,0,Math.PI*2);c.fill();
      c.beginPath();c.ellipse(-10,-17,2.5,7,0,0,Math.PI*2);c.ellipse(10,-17,2.5,7,0,0,Math.PI*2);c.fill();
    }else if(look.peinado==="trenzas"){
      c.beginPath();c.ellipse(-8,-13,3,8,-.15,0,Math.PI*2);c.ellipse(8,-13,3,8,.15,0,Math.PI*2);c.fill();
    }
    if(look.peinado==="picos"){
      c.beginPath();c.moveTo(-9,-18);c.lineTo(-10,-24);c.lineTo(-5,-21);c.lineTo(-2,-28);c.lineTo(1,-22);c.lineTo(6,-27);c.lineTo(7,-21);c.lineTo(10,-23);c.lineTo(9,-16);c.quadraticCurveTo(0,-13,-9,-16);c.closePath();c.fill();
    }else{
      c.beginPath();c.arc(0,-20,9,Math.PI,Math.PI*2);c.lineTo(9,-17);c.quadraticCurveTo(4,-14,1,-17);c.lineTo(-8,-15);c.closePath();c.fill();
      if(look.peinado==="rizado"){
        for(const [cx,cy,r] of [[-7,-22,3.3],[-3,-26,3.4],[2,-26,3.4],[7,-22,3.3]]){c.beginPath();c.arc(cx,cy,r,0,Math.PI*2);c.fill();}
      }
      if(look.peinado==="trenzas"){
        c.strokeStyle=color;c.lineWidth=2;c.beginPath();c.moveTo(-9,-18);c.lineTo(-10,-14);c.lineTo(-8,-12);c.lineTo(-10,-10);c.moveTo(9,-18);c.lineTo(10,-14);c.lineTo(8,-12);c.lineTo(10,-10);c.stroke();
      }
    }
  }
  function drawStudentAccessory(c,accessory){
    if(accessory==="ninguno")return;
    if(accessory==="lentes"){
      c.strokeStyle="#27324a";c.lineWidth=1.4;c.beginPath();c.arc(-3.4,-16,2.3,0,Math.PI*2);c.arc(3.4,-16,2.3,0,Math.PI*2);c.moveTo(-1.1,-16);c.lineTo(1.1,-16);c.stroke();return;
    }
    const icons={corona:"👑",gorra:"🧢",audifonos:"🎧",mono:"🎀",estrella:"⭐",flor:"🌼"};
    c.font="11px system-ui";c.textAlign="center";c.textBaseline="middle";c.fillText(icons[accessory]||"",0,-28);
  }
  function draw(){
    const W=canvas.width,H=canvas.height;
    ctx.clearRect(0,0,W,H);
    // jardín escolar luminoso
    const grass=ctx.createLinearGradient(0,0,W,H);grass.addColorStop(0,"#a9e69b");grass.addColorStop(.55,"#82d77f");grass.addColorStop(1,"#65c66d");
    ctx.fillStyle=grass;ctx.fillRect(0,0,W,H);
    // textura suave de césped
    for(let i=0;i<220;i++){const x=(i*97)%W,y=(i*53)%H;ctx.strokeStyle=i%2?"#5ab86755":"#e0f7b455";ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x+3,y-5);ctx.stroke();}
    // límite exterior del recinto
    roundedRect(ctx,14,14,W-28,H-28,18,"#91d983","#e7f8c5");
    // senderos principales de adoquín
    roundedRect(ctx,425,28,110,584,8,"#e7c995","#cba56f");
    roundedRect(ctx,35,320,890,54,8,"#e7c995","#cba56f");
    // líneas del camino
    ctx.strokeStyle="#c9a46f88";ctx.lineWidth=1;
    for(let y=40;y<610;y+=24){ctx.beginPath();ctx.moveTo(430,y);ctx.lineTo(530,y);ctx.stroke();}
    for(let x=45;x<920;x+=32){ctx.beginPath();ctx.moveTo(x,326);ctx.lineTo(x,368);ctx.stroke();}
    // macizos de flores
    [[90,285],[865,285],[90,405],[865,405],[350,95],[610,95],[350,570],[610,570]].forEach(([x,y],i)=>{
      ctx.fillStyle="#4da95c";ctx.beginPath();ctx.ellipse(x,y,26,15,0,0,Math.PI*2);ctx.fill();
      for(let j=0;j<5;j++){ctx.fillStyle=["#f6a4cf","#fff0a3","#bda9ff"][j%3];ctx.beginPath();ctx.arc(x-15+j*7,y-2+(j%2)*6,3,0,Math.PI*2);ctx.fill();}
    });
    // árboles y bancas
    [[55,65,.9],[135,65,.8],[805,65,.8],[900,65,.9],[55,565,.9],[135,570,.8],[805,570,.8],[900,565,.9],[375,270,.65],[585,270,.65],[375,430,.65],[585,430,.65]].forEach(a=>drawTree(...a));
    drawBench(245,105);drawBench(715,105);drawBench(245,565);drawBench(715,565);
    // colegio: cuatro edificios con techo, ventanas y puerta
    salones.forEach((r,i)=>{
      const got=state.collected.has(r.id),near=nearestRoom()?.id===r.id;
      ctx.save();
      // sombra del edificio
      roundedRect(ctx,r.x-3,r.y+5,r.w+6,r.h+2,10,"#3f874a55");
      // paredes
      roundedRect(ctx,r.x,r.y,r.w,r.h,8,got?"#d8f2c7":"#fff0d0",got?"#2c9a65":"#b87d4c");
      // techo rojo y borde
      roundedRect(ctx,r.x-5,r.y-8,r.w+10,35,8,got?"#2e9c6b":"#d65b45","#a74436");
      ctx.fillStyle="#f28b62";ctx.fillRect(r.x+8,r.y+16,r.w-16,4);
      // ventanas
      for(let wx=r.x+18;wx<r.x+r.w-15;wx+=43){
        roundedRect(ctx,wx,r.y+42,25,27,3,"#8ed9f5","#4b8db4");ctx.fillStyle="#e8fbff";ctx.fillRect(wx+11,r.y+43,2,25);ctx.fillRect(wx+1,r.y+54,23,2);
      }
      // puerta
      roundedRect(ctx,r.x+r.w/2-15,r.y+r.h-38,30,38,4,"#8b5a3b","#69402d");ctx.fillStyle="#f4c46f";ctx.beginPath();ctx.arc(r.x+r.w/2+8,r.y+r.h-19,2,0,Math.PI*2);ctx.fill();
      // letrero del salón
      roundedRect(ctx,r.x+25,r.y+76,r.w-50,29,7,got?"#d0ffe4":"#fffdf3",got?"#2e9c6b":"#e1b783");
      ctx.font="900 13px system-ui";ctx.textAlign="center";ctx.fillStyle=got?"#14784c":"#8c4c35";ctx.fillText(r.label,r.x+r.w/2,r.y+95);
      ctx.font="bold 10px system-ui";ctx.fillStyle="#5d6c50";ctx.fillText(got?"✓ LLAVE CONSEGUIDA":state.done.has(r.id)?"RETO COMPLETADO":"RETO EDUCATIVO",r.x+r.w/2,r.y+122);
      if(near){roundedRect(ctx,r.x+r.w/2-55,r.y+r.h+8,110,23,8,"#075b43","#d2ffe5");ctx.font="bold 10px system-ui";ctx.fillStyle="#fff";ctx.fillText("PULSA INTERACTUAR",r.x+r.w/2,r.y+r.h+23);}
      ctx.restore();
    });
    // entrada y portón de salida
    roundedRect(ctx,418,580,124,34,7,state.collected.size===4?"#13885f":"#596a58",state.collected.size===4?"#d8ffe8":"#e9f4d8");
    ctx.fillStyle="#fff";ctx.font="900 13px system-ui";ctx.textAlign="center";ctx.fillText(state.collected.size===4?"¡SALIDA ABIERTA!":"SALIDA 🔒",480,602);
    // estudiante de cuerpo completo
    const moving=keys.size>0,step=moving?Math.sin(state.animation*.45)*4:0;
    drawStudent(ctx,state.x,state.y,state.avatar,1,moving,step);
    // etiqueta de ayuda
    const near=nearestRoom();
    if(near&&!state.paused&&el.modal.classList.contains("hidden")){
      roundedRect(ctx,295,24,370,30,10,"#164d37e8","#e1ffe3");ctx.font="bold 12px system-ui";ctx.fillStyle="#fff";ctx.textAlign="center";ctx.fillText(`Acércate a ${near.label} y pulsa INTERACTUAR`,480,43);
    }
    if(state.paused){ctx.fillStyle="#14251dcc";ctx.fillRect(14,14,W-28,H-28);ctx.font="900 36px system-ui";ctx.fillStyle="#fff";ctx.textAlign="center";ctx.fillText("JUEGO EN PAUSA",480,315);}
  }
  function openRoom(){
    if(state.paused||!el.modal.classList.contains("hidden"))return;
    if(state.x>415&&state.x<545&&state.y>545){
      if(state.collected.size===4){playVictorySound();showMessage("🏆","¡ESCAPASTE DEL COLEGIO!","¡Lo lograste! Conseguiste las cuatro llaves y completaste la aventura con "+state.score+" puntos.");return;}
      say(`Te faltan ${4-state.collected.size} llave(s). Visita los salones para conseguirlas.`);playWrongSound();return;
    }
    const r=nearestRoom();
    if(!r){say("Acércate a uno de los cuatro salones para comenzar su reto.");return;}
    if(state.collected.has(r.id)){say(`Ya conseguiste la llave de ${r.id}. ¡Visita otro salón!`);return;}
    state.currentRoom=r;
    const all=(BANCO[state.grade]&&BANCO[state.grade][r.id])||[];
    if(all.length<5){showMessage("⚠️","No se encontraron preguntas","Revisa el contenido de juego.js. El banco de preguntas no está completo.");return;}
    const chosen=[...all].sort(()=>Math.random()-.5).slice(0,5);
    state.quiz={room:r,questions:chosen};
    state.quizIndex=0;state.quizCorrect=0;
    stopMusic();
    renderQuestion();
    el.modal.classList.remove("hidden");
    saveGame();
  }
  function renderQuestion(){
    const q=state.quiz.questions[state.quizIndex];
    el.materia.textContent=state.currentRoom.id;
    el.materiaIcon.textContent=icons[state.currentRoom.id];
    el.progreso.textContent=`Pregunta ${state.quizIndex+1} de ${state.quiz.questions.length}`;
    el.barra.style.width=`${state.quizIndex/state.quiz.questions.length*100}%`;
    el.pregunta.textContent=q.q;
    el.respuestas.replaceChildren();
    el.resultado.textContent="";
    el.resultado.className="feedback";
    el.explicacion.textContent="";el.explicacion.classList.add("hidden");
    state.answerSelected=null;
    el.siguiente.disabled=true;
    el.siguiente.textContent=state.quizIndex===state.quiz.questions.length-1?"Terminar reto ✓":"Siguiente pregunta →";
    q.a.forEach((answer,index)=>{
      const b=document.createElement("button");b.type="button";b.className="answer-btn";
      const letter=document.createElement("span");letter.className="letter";letter.textContent=String.fromCharCode(65+index);
      const label=document.createElement("span");label.textContent=answer;b.append(letter,label);
      b.addEventListener("click",()=>chooseAnswer(index));el.respuestas.append(b);
    });
  }
  function showAnswerResult(index){
    const q=state.quiz.questions[state.quizIndex];
    state.answerSelected=index;
    [...el.respuestas.querySelectorAll("button")].forEach((b,i)=>{
      b.disabled=true;if(i===q.c)b.classList.add("correct");
    });
    if(index===q.c){
      el.resultado.textContent="¡Correcto! +10 puntos. 🎉";el.resultado.className="feedback good";
    }else{
      el.respuestas.querySelectorAll("button")[index].classList.add("wrong");
      el.resultado.textContent=`La respuesta correcta es: ${q.a[q.c]}.`;el.resultado.className="feedback bad";
    }
    el.explicacion.textContent=explainAnswer(q.q,state.currentRoom.id,q.a[q.c]);
    el.explicacion.classList.remove("hidden");
    el.siguiente.disabled=false;
    el.barra.style.width=`${(state.quizIndex+1)/state.quiz.questions.length*100}%`;
  }
  function chooseAnswer(index){
    if(!state.quiz||!el.siguiente.disabled)return;
    const q=state.quiz.questions[state.quizIndex];
    if(index===q.c){
      state.quizCorrect++;state.score+=10;playCorrectSound();
    }else{
      playWrongSound();
    }
    state.answerSelected=index;showAnswerResult(index);updateHUD();
  }
  function nextQuestion(){
    if(!state.quiz||el.siguiente.disabled)return;
    if(state.quizIndex<state.quiz.questions.length-1){state.quizIndex++;renderQuestion();saveGame();return;}
    const room=state.currentRoom,correct=state.quizCorrect;
    el.modal.classList.add("hidden");state.quiz=null;
    if(correct>=3){
      state.collected.add(room.id);state.done.add(room.id);state.score+=25;
      say(`¡Reto superado! Conseguiste la llave de ${room.id}. +25 puntos extra.`);
      playKeySound();
      celebrateKey();
      showMessage("🗝️","¡Llave conseguida!",`Respondiste correctamente ${correct} de 5 preguntas de ${room.id}. Ganaste una llave y 25 puntos extra.`);
    }else{
      say(`Necesitas 3 respuestas correctas para conseguir la llave de ${room.id}. ¡Puedes intentarlo otra vez!`);
      showMessage("📚","¡Sigue practicando!",`Tuviste ${correct} de 5 respuestas correctas. Necesitas al menos 3 para ganar esta llave. ¡Intenta otra vez!`);
    }
    updateHUD();draw();
  }
  function closeQuiz(){
    el.modal.classList.add("hidden");state.quiz=null;state.currentRoom=null;state.answerSelected=null;
    say("Reto cerrado. Puedes volver a intentarlo.");saveGame();startMusic();
  }
  function showMessage(emoji,title,message){
    stopMusic();
    el.mensajeEmoji.textContent=emoji;el.mensajeTitulo.textContent=title;el.mensajeTexto.textContent=message;
    el.modalMensaje.classList.remove("hidden");
  }
  function celebrateKey(){
    if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;
    const burst=document.createElement("div");
    burst.className="celebration-burst";
    burst.setAttribute("aria-hidden","true");
    const colors=["#ffd166","#50d7ff","#36dfad","#ff718b","#9b8cff","#ffffff"];
    for(let i=0;i<34;i++){
      const piece=document.createElement("span");
      piece.style.left=`${Math.random()*100}%`;
      piece.style.backgroundColor=colors[i%colors.length];
      piece.style.setProperty("--drift",`${Math.round(Math.random()*150-75)}px`);
      piece.style.animationDelay=`${Math.random()*.35}s`;
      burst.append(piece);
    }
    document.body.append(burst);
    window.setTimeout(()=>burst.remove(),2300);
  }
  function closeMessage(){el.modalMensaje.classList.add("hidden");startMusic();draw();}
  function togglePause(){
    if(!el.juego.classList.contains("hidden")&&el.modal.classList.contains("hidden")&&el.modalMensaje.classList.contains("hidden")){
      state.paused=!state.paused;el.pausar.textContent=state.paused?"▶ Continuar":"⏸ Pausar";say(state.paused?"Juego pausado.":"¡Sigue explorando!");
      if(state.paused)stopMusic();else startMusic();
      draw();
    }
  }
  // Keyboard movement
  document.addEventListener("keydown",e=>{
    if(e.target.matches("input,textarea,select"))return;
    const k=e.key.length===1?e.key.toLowerCase():e.key;
    if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(k))e.preventDefault();
    if(k==="Escape"){
      if(!el.modal.classList.contains("hidden"))closeQuiz();
      else if(!el.modalMensaje.classList.contains("hidden"))closeMessage();
      else togglePause();
    }
    keys.add(k);
    if(k==="Enter"&&!el.juego.classList.contains("hidden")&&el.modal.classList.contains("hidden"))openRoom();
  });
  document.addEventListener("keyup",e=>keys.delete(e.key.length===1?e.key.toLowerCase():e.key));
  window.addEventListener("blur",()=>keys.clear());
  // Mobile buttons: hold to move
  document.querySelectorAll("[data-dir]").forEach(btn=>{
    const direction=btn.dataset.dir;
    const delta={up:[0,-1],down:[0,1],left:[-1,0],right:[1,0]}[direction];
    let interval=null;
    const begin=e=>{e.preventDefault();keys.add(({up:"ArrowUp",down:"ArrowDown",left:"ArrowLeft",right:"ArrowRight"})[direction]);move(delta[0]*state.speed*1.5,delta[1]*state.speed*1.5);};
    const end=()=>keys.delete(({up:"ArrowUp",down:"ArrowDown",left:"ArrowLeft",right:"ArrowRight"})[direction]);
    btn.addEventListener("pointerdown",begin);btn.addEventListener("pointerup",end);btn.addEventListener("pointercancel",end);btn.addEventListener("pointerleave",end);
  });
  el.comenzar.addEventListener("click",startGame);
  el.grado.addEventListener("change",()=>{
    el.comenzar.textContent=state.hasSavedGame&&el.grado.value===state.grade?"Continuar aventura":state.hasSavedGame?"Comenzar nueva aventura":"Comenzar aventura";
  });
  el.reiniciar.addEventListener("click",resetGame);
  el.volver.addEventListener("click",()=>{
    stopMusic();
    el.juego.classList.add("hidden");el.inicio.classList.remove("hidden");el.personalizador.classList.remove("hidden");state.paused=false;
    if(state.started){state.hasSavedGame=true;el.grado.value=state.grade;el.grado.disabled=false;el.comenzar.textContent="Continuar aventura";saveGame();}
  });
  el.interactuar.addEventListener("click",openRoom);
  el.pausar.addEventListener("click",togglePause);
  el.siguiente.addEventListener("click",nextQuestion);
  el.cerrarQuiz.addEventListener("click",closeQuiz);
  el.cerrarMensaje.addEventListener("click",closeMessage);
  function updateSoundButton(){
    el.sonido.textContent=state.muted?"🔇 Sonido":"🔊 Sonido";
    el.sonido.title=state.muted?"Activar música y efectos":"Silenciar música y efectos";
    el.sonido.setAttribute("aria-pressed",String(!state.muted));
  }
  updateSoundButton();
  el.sonido.addEventListener("click",()=>{
    state.muted=!state.muted;
    updateSoundButton();
    if(state.muted)stopMusic();
    else{
      playBell(659,.28,.04);
      startMusic();
    }
  });
  // Scale movement consistently with elapsed frame time.
  function loop(now){
    const dt=Math.min(32,now-(state.lastTime||now));state.lastTime=now;
    if(!el.juego.classList.contains("hidden") && !state.paused && !state.quiz && el.modalMensaje.classList.contains("hidden")) updateMovement(dt);
    state.animation++;requestAnimationFrame(loop);
  }
  // Canvas map pointer can be used to move toward a tapped point.
  canvas.addEventListener("pointerdown",e=>{
    if(state.paused||!el.modal.classList.contains("hidden"))return;
    const rect=canvas.getBoundingClientRect();
    const tx=(e.clientX-rect.left)*canvas.width/rect.width,ty=(e.clientY-rect.top)*canvas.height/rect.height;
    // Tap room center as a simple assist, movement still obeys walls.
    const r=salones.find(room=>tx>=room.x&&tx<=room.x+room.w&&ty>=room.y&&ty<=room.y+room.h);
    if(r){state.x=clamp(r.x+r.w/2,42,918);state.y=clamp(r.y<320?r.y+r.h+playerRadius+8:r.y-playerRadius-8,42,598);say(`Estás cerca de ${r.id}. Pulsa Interactuar.`);draw();}
  });
  window.addEventListener("pagehide",()=>{saveGame();stopMusic();});
  document.addEventListener("visibilitychange",()=>{if(document.hidden)stopMusic();else startMusic();});
  updateHUD();draw();requestAnimationFrame(loop);
});
