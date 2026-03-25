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
    }
];
