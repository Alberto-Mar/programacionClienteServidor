<?php 
//UD3.2.c Variable con nuestro nombre completo
$contacto = "Alberto Martínez Martínez";

//UD3.2.e Variable loggedIn
$loggedIn = true;

//UD3.3.b Array categorías y campo de fechas en los proyectos
$categorias = [
    'categoria1' => 'El Greco',
    'categoria2' => 'Goya',
    'categoria3' => 'Velazquez',
    'categoria4' => 'Joaquín Sorolla',
    'categoria5' => 'Religioso',
    'categoria6' => 'Mitológico',
    'categoria7' => 'Retrato',
    'categoria8' => 'Histórico',
    'categoria9' => 'Marina',
];

$proyectos = [
    // El Greco
    [
        'clave' => 'proyecto1',
        'titulo' => 'Anunciación',
        'descripcion' => 'El arcángel Gabriel anuncia a la Virgen.',
        'descripcionLarga' => 'El Greco representa la llegada del arcángel Gabriel a María con una intensidad mística y una paleta de colores vibrantes. La escena transmite espiritualidad y dramatismo mediante la verticalidad de las figuras y la luz sobrenatural.',
        'imagen' => 'static\images\anunciacion.jpg',
        'dinero' => 600000,
        'fecha' => '15/03/1596',
        'categoria' => ['categoria1', 'categoria5'] 
    ],
    [
        'clave' => 'proyecto2',
        'titulo' => 'Bautismo',
        'descripcion' => 'Cristo es bautizado en el Jordán.',
        'descripcionLarga' => 'La obra muestra el bautismo de Cristo por San Juan Bautista, con la presencia del Espíritu Santo en forma de paloma. El Greco plasma la escena con figuras alargadas y una atmósfera cargada de espiritualidad.',
        'imagen' => 'static\images\bautismo.jpg',
        'dinero' => 550000,
        'fecha' => '10/07/1600',
        'categoria' => ['categoria1', 'categoria5']
    ],
    [
        'clave' => 'proyecto3',
        'titulo' => 'Crucifixión',
        'descripcion' => 'Escena de la Crucifixión con dramatismo.',
        'descripcionLarga' => 'En esta Crucifixión, El Greco enfatiza el dramatismo del momento mediante la disposición vertical y el uso de colores intensos. La obra busca resaltar el sufrimiento y la trascendencia espiritual del sacrificio de Cristo.',
        'imagen' => 'static\images\crucifixion.jpg',
        'dinero' => 1100000,
        'fecha' => '05/09/1605',
        'categoria' => ['categoria1', 'categoria5']
    ],
    [
        'clave' => 'proyecto4',
        'titulo' => 'Piedad',
        'descripcion' => 'La Piedad.',
        'descripcionLarga' => 'La Piedad de El Greco representa a la Virgen María sosteniendo a Cristo muerto, en una composición que refleja dolor y devoción. El estilo manierista del pintor intensifica la carga emotiva de la escena.',
        'imagen' => 'static\images\piedad.jpg',
        'dinero' => 1900000,
        'fecha' => '25/07/1596',
        'categoria' => ['categoria1', 'categoria5']
    ],
    [
        'clave' => 'proyecto5',
        'titulo' => 'Abrazado a la Cruz',
        'descripcion' => 'Cristo abrazando la Cruz.',
        'descripcionLarga' => 'Cristo aparece aferrado a la Cruz en un gesto de entrega total y amor redentor. El Greco utiliza formas alargadas y expresivas que subrayan la intensidad emocional de la obra.',
        'imagen' => 'static\images\abrazado.jpeg',
        'dinero' => 1200000,
        'fecha' => '07/12/1599',
        'categoria' => ['categoria1', 'categoria5']
    ],
    [
        'clave' => 'proyecto6',
        'titulo' => 'Trinidad',
        'descripcion' => 'Representación de la Trinidad.',
        'descripcionLarga' => 'La obra simboliza el misterio de la Trinidad con una composición que combina majestuosidad y espiritualidad. El Greco utiliza contrastes de luz y color para destacar la unión divina de Padre, Hijo y Espíritu Santo.',
        'imagen' => 'static\images\trinidad.jpeg',
        'dinero' => 1300000,
        'fecha' => '11/02/1600',
        'categoria' => ['categoria1', 'categoria5']
    ],

    // Goya
    [
        'clave' => 'proyecto7',
        'titulo' => 'La Maja Desnuda',
        'descripcion' => 'Retrato femenino icónico de Goya.',
        'descripcionLarga' => 'Esta pintura es uno de los retratos más célebres de Goya, mostrando un desnudo femenino con naturalidad y sin elementos mitológicos que lo justifiquen. Rompe con la tradición y destaca por su sensualidad y realismo.',
        'imagen' => 'static\images\maja_desnuda.jpeg',
        'dinero' => 1800000,
        'fecha' => '01/05/1797',
        'categoria' => ['categoria2', 'categoria7'] 
    ],
    [
        'clave' => 'proyecto8',
        'titulo' => 'Saturno devorando a su hijo',
        'descripcion' => 'Mitología oscura y expresiva.',
        'descripcionLarga' => 'Parte de las Pinturas Negras, esta obra refleja el mito de Saturno devorando a uno de sus hijos por miedo a ser destronado. Con una técnica cruda y expresiva, transmite horror y la angustia existencial del autor.',
        'imagen' => 'static\images\saturno.jpeg',
        'dinero' => 1900000,
        'fecha' => '12/08/1819',
        'categoria' => ['categoria2', 'categoria6'] 
    ],
    [
        'clave' => 'proyecto9',
        'titulo' => 'El 3 de mayo de 1808',
        'descripcion' => 'Muestra la resistencia española contra Napoleón.',
        'descripcionLarga' => 'Este cuadro representa la represión ejercida por las tropas napoleónicas tras el levantamiento del 2 de mayo en Madrid. La obra es un símbolo universal contra la violencia y la guerra, con un fuerte dramatismo en sus personajes.',
        'imagen' => 'static\images\3_mayo_1808.jpeg',
        'dinero' => 2000000,
        'fecha' => '03/05/1814',
        'categoria' => ['categoria2', 'categoria8'] 
    ],

    // Velázquez
    [
        'clave' => 'proyecto10',
        'titulo' => 'Las Meninas',
        'descripcion' => 'Retrato de la familia real española.',
        'descripcionLarga' => 'Obra maestra de Velázquez y de la pintura universal, Las Meninas combina retrato, autorretrato y complejidad espacial. La escena muestra a la infanta Margarita rodeada de su séquito, con el propio Velázquez pintando y los reyes reflejados en un espejo.',
        'imagen' => 'static\images\las_meninas.jpeg',
        'dinero' => 2500000,
        'fecha' => '15/06/1656',
        'categoria' => ['categoria3', 'categoria7'] 
    ],
    [
        'clave' => 'proyecto11',
        'titulo' => 'La rendición de Breda',
        'descripcion' => 'Escena histórica de victoria militar.',
        'descripcionLarga' => 'Conocida como "Las lanzas", esta obra representa la entrega de las llaves de Breda tras la victoria española. Destaca por la nobleza en el trato entre vencedores y vencidos, transmitiendo un mensaje de dignidad y respeto.',
        'imagen' => 'static\images\rendicion_breda.jpeg',
        'dinero' => 2200000,
        'fecha' => '20/04/1635',
        'categoria' => ['categoria3', 'categoria8']
    ],
    [
        'clave' => 'proyecto12',
        'titulo' => 'Retrato del Papa Inocencio X',
        'descripcion' => 'Retrato intenso del pontífice.',
        'descripcionLarga' => 'Este retrato de Inocencio X es célebre por la intensidad psicológica con que Velázquez capta la personalidad del Papa. La fuerza de su mirada y la precisión técnica lo convierten en uno de los retratos más impactantes del Barroco.',
        'imagen' => 'static\images\papa_inocencio.jpeg',
        'dinero' => 2300000,
        'fecha' => '10/12/1650',
        'categoria' => ['categoria3', 'categoria7'] 
    ],

    // Joaquín Sorolla
    [
        'clave' => 'proyecto13',
        'titulo' => 'Paseo a orillas del mar',
        'descripcion' => 'Muestra la luz brillante y el mar.',
        'descripcionLarga' => 'En este cuadro, Sorolla representa a su esposa e hija paseando junto al mar en Valencia. La luz mediterránea y el movimiento de las telas transmiten frescura, alegría y naturalidad.',
        'imagen' => 'static\images\paseo_mar.jpeg',
        'dinero' => 1500000,
        'fecha' => '05/08/1909',
        'categoria' => ['categoria4', 'categoria9']
    ],
    [
        'clave' => 'proyecto14',
        'titulo' => 'Niños en la playa',
        'descripcion' => 'Retrato de niños jugando en la arena.',
        'descripcionLarga' => 'Una de las escenas más tiernas de Sorolla, muestra a varios niños disfrutando de la playa y el agua. La obra refleja la alegría de la infancia bajo la luz vibrante del Mediterráneo.',
        'imagen' => 'static\images\ninos_playa.jpeg',
        'dinero' => 1400000,
        'fecha' => '12/07/1909',
        'categoria' => ['categoria4', 'categoria9']
    ],
    [
        'clave' => 'proyecto15',
        'titulo' => 'Sewing the sail',
        'descripcion' => 'Trabajadores reparando una vela.',
        'descripcionLarga' => 'La pintura muestra a pescadores cosiendo una gran vela blanca. Sorolla combina la fuerza del trabajo manual con la belleza de la luz marina, resaltando los valores del esfuerzo colectivo.',
        'imagen' => 'static\images\sewing_sail.jpeg',
        'dinero' => 1450000,
        'fecha' => '01/09/1896',
        'categoria' => ['categoria4', 'categoria9'] 
    ],
];

?>