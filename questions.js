const quizData = [
    {
        chapter: 1,
        question: "¿Qué orden principal le dio Dios a Josué tras la muerte de Moisés?",
        options: [
            "Construir un templo en Jerusalén.",
            "Levantarse y cruzar el río Jordán con el pueblo.",
            "Nombrar nuevos reyes para Israel.",
            "Regresar a Egipto para rescatar a los esclavos."
        ],
        correct: 1,
        verseRef: "Josué 1:2",
        verseText: "Mi siervo Moisés ha muerto; ahora, pues, levántate y pasa este Jordán, tú y todo este pueblo, a la tierra que yo les doy a los hijos de Israel."
    },
    {
        chapter: 1,
        question: "¿Cuántos días dio Josué a los oficiales del pueblo para preparar comida antes de cruzar el Jordán?",
        options: [
            "Tres días.",
            "Siete días.",
            "Un día.",
            "Catorce días."
        ],
        correct: 0,
        verseRef: "Josué 1:11",
        verseText: "Pasad por en medio del campamento y mandad al pueblo, diciendo: Preparaos comida, porque dentro de tres días pasaréis el Jordán..."
    },
    {
        chapter: 2,
        question: "¿A la casa de quién entraron a hospedarse los dos espías al llegar a Jericó?",
        options: [
            "Del rey de Jericó.",
            "De una viuda llamada Rut.",
            "De una ramera llamada Rahab.",
            "Del sacerdote de la ciudad."
        ],
        correct: 2,
        verseRef: "Josué 2:1",
        verseText: "...fueron, y entraron en casa de una ramera que se llamaba Rahab, y posaron allí."
    },
    {
        chapter: 2,
        question: "¿Con qué ataron la ventana de Rahab para identificar su casa y que fuera salva?",
        options: [
            "Un cordón de grana (rojo).",
            "Un trozo de lino blanco.",
            "Un hilo de oro.",
            "Una cuerda de cáñamo oscuro."
        ],
        correct: 0,
        verseRef: "Josué 2:18",
        verseText: "he aquí, cuando nosotros entremos en la tierra, tú atarás este cordón de grana a la ventana por la cual nos descolgaste..."
    },
    {
        chapter: 3,
        question: "¿Qué debían hacer los sacerdotes que llevaban el arca del pacto al llegar al Jordán?",
        options: [
            "Detenerse firmes dentro del agua del río.",
            "Lanzar piedras al río para abrirlo.",
            "Cantar a gran voz durante tres días.",
            "Construir una balsa de madera."
        ],
        correct: 0,
        verseRef: "Josué 3:8",
        verseText: "Tú, pues, mandarás a los sacerdotes que llevan el arca del pacto, diciendo: Cuando lleguéis a la orilla del agua del Jordán, pararéis en el Jordán."
    },
    {
        chapter: 3,
        question: "¿A qué distancia aproximada debía mantenerse el pueblo del arca del pacto mientras caminaban?",
        options: [
            "Cien codos.",
            "Dos mil codos.",
            "Cinco mil codos.",
            "Cincuenta codos."
        ],
        correct: 1,
        verseRef: "Josué 3:4",
        verseText: "para que sepáis el camino por donde habéis de ir; por cuanto vosotros no habéis pasado antes de ahora por este camino. Pero entre vosotros y ella haya distancia como de dos mil codos..."
    },
    {
        chapter: 3,
        question: "¿Qué pasaría en cuanto los pies de los sacerdotes que llevaban el arca tocaran el agua del Jordán?",
        options: [
            "El río se secaría completamente desde su nacimiento.",
            "Las aguas se dividirían y se detendrían en un montón.",
            "El agua se volvería dulce como la miel.",
            "Aparecería un puente de plata sobre el río."
        ],
        correct: 1,
        verseRef: "Josué 3:13",
        verseText: "Y cuando las plantas de los pies de los sacerdotes que llevan el arca de Jehová... se asienten en las aguas del Jordán, las aguas del Jordán se dividirán; porque las aguas que vienen de arriba se detendrán en un montón."
    },
    {
        chapter: 4,
        question: "¿Qué utilizaron para construir un monumento conmemorativo que recordarían para siempre?",
        options: [
            "Doce espadas de los enemigos derrotados.",
            "Doce piedras sacadas de en medio del río Jordán.",
            "Un pilar de bronce fundido.",
            "Madera tallada del monte Líbano."
        ],
        correct: 1,
        verseRef: "Josué 4:3",
        verseText: "y mandadles, diciendo: Tomad de aquí de en medio del Jordán, del lugar donde están firmes los pies de los sacerdotes, doce piedras..."
    },
    {
        chapter: 4,
        question: "¿Qué hicieron con las 12 piedras que sacaron del Jordán?",
        options: [
            "Las usaron como armas.",
            "Las tiraron al desierto.",
            "Las erigieron en Gilgal.",
            "Las llevaron a Moisés."
        ],
        correct: 2,
        verseRef: "Josué 4:20",
        verseText: "Y Josué erigió en Gilgal las doce piedras que habían traído del Jordán."
    },
    {
        chapter: 5,
        question: "¿A quién se encontró Josué cerca de Jericó con una espada desenvainada?",
        options: [
            "Al Príncipe del ejército de Jehová.",
            "Al rey de los amorreos disfrazado.",
            "Al fantasma de Moisés.",
            "Al gigante Og de Basán."
        ],
        correct: 0,
        verseRef: "Josué 5:13-14",
        verseText: "...he aquí un varón que estaba delante de él, el cual tenía una espada desenvainada en su mano... Él respondió: No; mas como Príncipe del ejército de Jehová he venido ahora."
    },
    {
        chapter: 5,
        question: "¿Qué comida comió el pueblo el día después de la Pascua, lo cual hizo cesar el maná?",
        options: [
            "Carne de codorniz.",
            "Fruto de la tierra (pan sin levadura y espigas nuevas tostadas).",
            "Miel del peñasco.",
            "Uvas de Hebrón."
        ],
        correct: 1,
        verseRef: "Josué 5:11-12",
        verseText: "Y al otro día de la pascua comieron del fruto de la tierra, los panes sin levadura, y en el mismo día espigas nuevas tostadas. Y el maná cesó el día siguiente..."
    },
    {
        chapter: 6,
        question: "¿Qué condición divina tenía la ciudad de Jericó al ser conquistada?",
        options: [
            "Sería reedificada inmediatamente como capital.",
            "Todos sus habitantes serían hechos esclavos.",
            "Sería anatema a Jehová (consagrada a la destrucción).",
            "Sería entregada a la tribu de Rubén."
        ],
        correct: 2,
        verseRef: "Josué 6:17",
        verseText: "Y será la ciudad anatema a Jehová, con todas las cosas que están en ella; solamente Rahab la ramera vivirá..."
    },
    {
        chapter: 6,
        question: "¿Cuántas veces en total rodearon los israelitas la ciudad de Jericó antes de que los muros cayeran?",
        options: [
            "Siete veces.",
            "Trece veces.",
            "Seis veces.",
            "Una vez."
        ],
        correct: 1,
        verseRef: "Josué 6:3-4, 15",
        verseText: "Rodearéis, pues, la ciudad todos los hombres de guerra, yendo alrededor de la ciudad una vez; y esto haréis durante seis días... al séptimo día daréis siete vueltas..."
    },
    {
        chapter: 6,
        question: "¿Qué instrucción especial se dio a los israelitas sobre el séptimo día al rodear Jericó?",
        options: [
            "Rodear la ciudad siete veces y los sacerdotes tocarían las bocinas.",
            "No rodear la ciudad, solo orar.",
            "Entrar a la ciudad inmediatamente sin tocar bocinas.",
            "Cantar un salmo de David."
        ],
        correct: 0,
        verseRef: "Josué 6:4",
        verseText: "...y el séptimo día daréis siete vueltas a la ciudad, y los sacerdotes tocarán las bocinas."
    },
    {
        chapter: 7,
        question: "¿Quién pecó tomando del anatema, causando la derrota de Israel en Hai?",
        options: [
            "Caleb hijo de Jefoné.",
            "Eleazar el sacerdote.",
            "Acán hijo de Carmi.",
            "Otoniel."
        ],
        correct: 2,
        verseRef: "Josué 7:1",
        verseText: "Pero los hijos de Israel cometieron una prevaricación en cuanto al anatema; porque Acán hijo de Carmi... tomó del anatema; y la ira de Jehová se encendió..."
    },
    {
        chapter: 7,
        question: "¿Qué castigo recibió Acán por haber tomado del anatema?",
        options: [
            "Fue vendido como esclavo.",
            "Fue desterrado al desierto.",
            "Fue apedreado y quemado en el valle de Acor.",
            "Fue puesto en prisión."
        ],
        correct: 2,
        verseRef: "Josué 7:25",
        verseText: "Y le dijo Josué: ¿Por qué nos has turbado? Túrbete Jehová en este día. Y todos los israelitas los apedrearon, y los quemaron después de apedrearlos."
    },
    {
        chapter: 7,
        question: "¿Qué objeto tomó Acán, entre otras cosas, del botín de Jericó?",
        options: [
            "Un manto babilónico muy bueno.",
            "Una espada de hierro cananeo.",
            "La corona de oro del rey de Jericó.",
            "Dos caballos de guerra."
        ],
        correct: 0,
        verseRef: "Josué 7:21",
        verseText: "Pues vi entre los despojos un manto babilónico muy bueno, y doscientos siclos de plata, y un lingote de oro de peso de cincuenta siclos... y tomé..."
    },
    {
        chapter: 8,
        question: "¿Qué táctica militar principal utilizaron para vencer a la ciudad de Hai en el segundo intento?",
        options: [
            "Tocar trompetas hasta que cayeran los muros.",
            "Hacer un pacto de paz falso.",
            "Una emboscada nocturna escondida detrás de la ciudad.",
            "Lanzar fuego desde los montes cercanos."
        ],
        correct: 2,
        verseRef: "Josué 8:2",
        verseText: "Harás a Hai y a su rey como hiciste a Jericó y a su rey... pondrás emboscada a la ciudad detrás de ella."
    },
    {
        chapter: 8,
        question: "¿Qué construyó Josué en el monte Ebal después de la victoria sobre Hai?",
        options: [
            "Un altar de piedras enteras sobre las cuales nadie había alzado hierro.",
            "Un templo a Jehová.",
            "Un muro de protección.",
            "Una estatua conmemorativa de bronce."
        ],
        correct: 0,
        verseRef: "Josué 8:30-31",
        verseText: "Entonces Josué edificó un altar a Jehová Dios de Israel en el monte Ebal... un altar de piedras enteras sobre las cuales nadie alzó hierro..."
    },
    {
        chapter: 8,
        question: "¿Cuántos hombres escogió Josué para enviar de noche a poner la emboscada detrás de la ciudad de Hai?",
        options: [
            "Tres mil hombres.",
            "Treinta mil hombres.",
            "Quinientos hombres.",
            "Mil hombres."
        ],
        correct: 1,
        verseRef: "Josué 8:3",
        verseText: "Y se levantó Josué y toda la gente de guerra, para subir contra Hai; y escogió Josué treinta mil hombres fuertes, los cuales envió de noche."
    },
    {
        chapter: 9,
        question: "¿Qué pueblo usó astucia fingiendo venir de lejos con pan mohoso para hacer un pacto de paz?",
        options: [
            "Los filisteos.",
            "Los gabaonitas.",
            "Los jebuseos.",
            "Los edomitas."
        ],
        correct: 1,
        verseRef: "Josué 9:3-5",
        verseText: "Mas los moradores de Gabaón... usaron de astucia; pues fueron y se fingieron embajadores... y todo el pan de su provisión era seco y mohoso."
    },
    {
        chapter: 9,
        question: "¿Cómo resolvieron Josué y los príncipes de Israel el problema con los gabaonitas sin romper el juramento que habían hecho?",
        options: [
            "Los enviaron de vuelta a su tierra original.",
            "Los mataron secretamente durante la noche.",
            "Los constituyeron leñadores y aguadores para la congregación.",
            "Los forzaron a pagar un gran tributo en oro y plata."
        ],
        correct: 2,
        verseRef: "Josué 9:27",
        verseText: "Y Josué los destinó aquel día a ser leñadores y aguadores para la congregación, y para el altar de Jehová..."
    },
    {
        chapter: 10,
        question: "¿Qué milagro astronómico ocurrió por petición de Josué durante la batalla contra los cinco reyes?",
        options: [
            "El sol y la luna se detuvieron.",
            "Una lluvia de estrellas fugaces destruyó la ciudad.",
            "Hubo un eclipse que oscureció la tierra tres días.",
            "La luna se volvió de color sangre."
        ],
        correct: 0,
        verseRef: "Josué 10:12-13",
        verseText: "...dijo en presencia de los israelitas: Sol, detente en Gabaón; y tú, luna, en el valle de Ajalón. Y el sol se detuvo y la luna se paró..."
    },
    {
        chapter: 10,
        question: "¿En dónde se escondieron los cinco reyes amorreos que huían de Josué?",
        options: [
            "En una pirámide.",
            "En una cueva en Maceda.",
            "En un bosque del Líbano.",
            "En un templo cananeo."
        ],
        correct: 1,
        verseRef: "Josué 10:16",
        verseText: "Pero los cinco reyes huyeron, y se escondieron en una cueva en Maceda."
    },
    {
        chapter: 10,
        question: "¿Qué hicieron con los cinco reyes amorreos capturados en la cueva de Maceda antes de ejecutarlos?",
        options: [
            "Los obligaron a renunciar a sus tronos verbalmente.",
            "Los capitanes de Israel pusieron sus pies sobre los cuellos de ellos.",
            "Fueron paseados atados por todo el campamento.",
            "Fueron crucificados en cinco árboles por la mañana."
        ],
        correct: 1,
        verseRef: "Josué 10:24",
        verseText: "...Josué llamó a todos los varones de Israel, y dijo a los principales de la gente de guerra que habían venido con él: Acercaos, y poned vuestros pies sobre los cuellos de estos reyes..."
    },
    {
        chapter: 10,
        question: "¿Sobre qué ciudad hizo Josué detenerse el sol, según su oración a Jehová?",
        options: [
            "Sobre Jericó.",
            "Sobre Gabaón.",
            "Sobre el valle de Ajalón.",
            "Sobre Hebrón."
        ],
        correct: 1,
        verseRef: "Josué 10:12",
        verseText: "...dijo en presencia de los israelitas: Sol, detente en Gabaón; y tú, luna, en el valle de Ajalón..."
    },
    {
        chapter: 11,
        question: "¿Qué hizo Josué con los caballos y carros de guerra de la coalición enemiga del norte?",
        options: [
            "Los tomó para formar el primer ejército montado de Israel.",
            "Se los vendió a los egipcios.",
            "Los consagró para el tabernáculo de Dios.",
            "Desjarretó los caballos y quemó los carros en el fuego."
        ],
        correct: 3,
        verseRef: "Josué 11:9",
        verseText: "Y Josué hizo con ellos como Jehová le había mandado: desjarretó sus caballos, y sus carros quemó a fuego."
    },
    {
        chapter: 11,
        question: "¿Quién era el rey de Hazor que convocó a la coalición del norte para pelear contra Israel en las aguas de Merom?",
        options: [
            "Adonisedec.",
            "Jabín.",
            "Og.",
            "Sehón."
        ],
        correct: 1,
        verseRef: "Josué 11:1",
        verseText: "Cuando oyó esto Jabín rey de Hazor, envió mensaje a Jobab rey de Madón, al rey de Simrón, al rey de Acsaf..."
    },
    {
        chapter: 12,
        question: "Según el resumen oficial, ¿a cuántos reyes en total derrotó Josué al occidente del Jordán?",
        options: [
            "Doce reyes.",
            "Veinte reyes.",
            "Treinta y un reyes.",
            "Cuarenta reyes."
        ],
        correct: 2,
        verseRef: "Josué 12:24",
        verseText: "el rey de Tirsa, uno; todos los reyes, treinta y uno."
    },
    {
        chapter: 13,
        question: "¿Cuál era la verdadera heredad de la tribu de Leví, ya que no recibieron territorio?",
        options: [
            "El oro y la plata de Jericó.",
            "Los prisioneros de guerra.",
            "Jehová Dios de Israel (los sacrificios).",
            "Las mejores tierras de Egipto."
        ],
        correct: 2,
        verseRef: "Josué 13:33",
        verseText: "Mas a la tribu de Leví no dio Moisés heredad; Jehová Dios de Israel es la heredad de ellos, como él les había dicho."
    },
    {
        chapter: 14,
        question: "¿Qué edad tenía el valiente Caleb cuando pidió que le dieran el monte donde vivían gigantes?",
        options: [
            "Cuarenta años.",
            "Sesenta y cinco años.",
            "Ochenta y cinco años.",
            "Cien años."
        ],
        correct: 2,
        verseRef: "Josué 14:10",
        verseText: "Ahora bien, Jehová me ha hecho vivir... estos cuarenta y cinco años, desde el tiempo que Jehová habló estas palabras a Moisés... y ahora, he aquí, hoy soy de edad de ochenta y cinco años."
    },
    {
        chapter: 14,
        question: "¿Cuál fue la razón principal que dio Caleb para pedir Hebrón como su heredad?",
        options: [
            "Porque era su recompensa por ser sumo sacerdote.",
            "Porque había seguido cumplidamente a Jehová Dios.",
            "Porque era el más joven de Israel.",
            "Porque era amigo íntimo de Josué."
        ],
        correct: 1,
        verseRef: "Josué 14:14",
        verseText: "Por tanto, Hebrón vino a ser heredad de Caleb hijo de Jefoné cenezeo, hasta hoy, por cuanto había seguido cumplidamente a Jehová Dios de Israel."
    },
    {
        chapter: 14,
        question: "¿De qué tribu era Caleb, el cual pidió el monte de Hebrón como heredad?",
        options: [
            "Tribu de Benjamín.",
            "Tribu de Leví.",
            "Tribu de Efraín.",
            "Tribu de Judá."
        ],
        correct: 3,
        verseRef: "Josué 14:6",
        verseText: "Y los hijos de Judá vinieron a Josué en Gilgal; y Caleb, hijo de Jefoné cenezeo, le dijo..."
    },
    {
        chapter: 15,
        question: "¿A qué pueblo habitante de Jerusalén no pudo expulsar la tribu de Judá?",
        options: [
            "A los filisteos.",
            "A los jebuseos.",
            "A los heteos.",
            "A los madianitas."
        ],
        correct: 1,
        verseRef: "Josué 15:63",
        verseText: "Mas a los jebuseos que habitaban en Jerusalén, los hijos de Judá no pudieron arrojarlos; antes quedó el jebuseo en Jerusalén con los hijos de Judá..."
    },
    {
        chapter: 16,
        question: "¿Qué hicieron los hijos de Efraín con los cananeos de la ciudad de Gezer al no poder expulsarlos?",
        options: [
            "Los hicieron reyes sobre ellos.",
            "Hicieron una alianza de sangre.",
            "Los hicieron tributarios (trabajos forzados).",
            "Huyeron de esa ciudad."
        ],
        correct: 2,
        verseRef: "Josué 16:10",
        verseText: "Pero no arrojaron al cananeo que habitaba en Gezer; antes quedó el cananeo en medio de Efraín, hasta hoy, y fue hecho tributario."
    },
    {
        chapter: 17,
        question: "¿Quiénes reclamaron su herencia legal basándose en que su padre murió sin dejar hijos varones?",
        options: [
            "Las hijas de Zelofehad.",
            "Las esposas de los sacerdotes.",
            "Las viudas de Hai.",
            "Las hermanas de Caleb."
        ],
        correct: 0,
        verseRef: "Josué 17:3-4",
        verseText: "Pero Zelofehad... no tuvo hijos sino hijas... Y ellas vinieron delante del sacerdote Eleazar y de Josué... diciendo: Jehová mandó a Moisés que nos diese heredad entre nuestros hermanos."
    },
    {
        chapter: 18,
        question: "¿En qué ciudad se reunió la congregación para levantar el tabernáculo de reunión?",
        options: [
            "En Jerusalén.",
            "En Gilgal.",
            "En Silo.",
            "En Bet-el."
        ],
        correct: 2,
        verseRef: "Josué 18:1",
        verseText: "Toda la congregación de los hijos de Israel se reunió en Silo, y erigieron allí el tabernáculo de reunión, después que la tierra les fue sometida."
    },
    {
        chapter: 19,
        question: "¿Qué ciudad pidió Josué como su heredad personal después de repartir toda la tierra?",
        options: [
            "Jericó.",
            "Hebrón.",
            "Siquem.",
            "Timnat-sera."
        ],
        correct: 3,
        verseRef: "Josué 19:50",
        verseText: "Según la palabra de Jehová, le dieron la ciudad que él pidió, Timnat-sera, en el monte de Efraín; y él reedificó la ciudad y habitó en ella."
    },
    {
        chapter: 20,
        question: "¿Para quiénes estaban destinadas las 'ciudades de refugio' establecidas por Dios?",
        options: [
            "Para esconder tesoros de guerra.",
            "Para el homicida que matara a alguien por accidente.",
            "Para las viudas y huérfanos de Israel.",
            "Para los sacerdotes y levitas únicamente."
        ],
        correct: 1,
        verseRef: "Josué 20:2-3",
        verseText: "Habla a los hijos de Israel y diles: Señalaos las ciudades de refugio... para que huya allí el homicida que matare a alguno por accidente y no a sabiendas."
    },
    {
        chapter: 20,
        question: "¿Quién debía juzgar al homicida que se refugiaba en una ciudad de refugio hasta que compareciera ante la congregación?",
        options: [
            "El juez del lugar o el sumo sacerdote.",
            "Los ancianos de aquella ciudad.",
            "Solamente Josué.",
            "No había juicio, era libre directamente."
        ],
        correct: 1,
        verseRef: "Josué 20:4",
        verseText: "Y el que se acogiere a alguna de aquellas ciudades, se presentará a la puerta de la ciudad, y expondrá sus razones en oídos de los ancianos de aquella ciudad..."
    }
];
