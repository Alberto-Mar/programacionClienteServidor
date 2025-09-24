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
    'categoria4' => 'Joaquín Sorolla ',

];

//UD3.3.a Arrays de proyectos
$proyectos = [
    // El Greco
    [
        'clave' => 'proyecto1',
        'titulo' => 'Anunciación',
        'descripcion' => 'El arcángel Gabriel anuncia a la Virgen.',
        'imagen' => 'static\images\anunciacion.jpg',
        'dinero' => 600000,
        'fecha' => '15/03/1596',
        'categoria' => ['categoria1']
    ],
    [
        'clave' => 'proyecto2',
        'titulo' => 'Bautismo',
        'descripcion' => 'Cristo es bautizado en el Jordán.',
        'imagen' => 'static\images\bautismo.jpg',
        'dinero' => 550000,
        'fecha' => '10/07/1600',
        'categoria' => ['categoria1']
    ],
    [
        'clave' => 'proyecto3',
        'titulo' => 'Crucifixión',
        'descripcion' => 'Escena de la Crucifixión con dramatismo.',
        'imagen' => 'static\images\crucifixion.jpg',
        'dinero' => 1100000,
        'fecha' => '05/09/1605',
        'categoria' => ['categoria1']
    ],
    [
        'clave' => 'proyecto4',
        'titulo' => 'Piedad',
        'descripcion' => 'La Piedad.',
        'imagen' => 'static\images\piedad.jpg',
        'dinero' => 1900000,
        'fecha' => '25/07/1596',
        'categoria' => ['categoria1']
    ],
    [
        'clave' => 'proyecto5',
        'titulo' => 'Abrazado a la Cruz',
        'descripcion' => 'Cristo abrazando la Cruz.',
        'imagen' => 'static\images\abrazado.jpeg',
        'dinero' => 1200000,
        'fecha' => '07/12/1599',
        'categoria' => ['categoria1']
    ],
    [
        'clave' => 'proyecto6',
        'titulo' => 'Trinidad',
        'descripcion' => 'Representación de la Trinidad.',
        'imagen' => 'static\images\trinidad.jpeg',
        'dinero' => 1300000,
        'fecha' => '11/02/1600',
        'categoria' => ['categoria1']
    ],

    // Goya
    [
        'clave' => 'proyecto7',
        'titulo' => 'La Maja Desnuda',
        'descripcion' => 'Retrato femenino icónico de Goya.',
        'imagen' => 'static\images\maja_desnuda.jpeg',
        'dinero' => 1800000,
        'fecha' => '01/05/1797',
        'categoria' => ['categoria2']
    ],
    [
        'clave' => 'proyecto8',
        'titulo' => 'Saturno devorando a su hijo',
        'descripcion' => 'Mitología oscura y expresiva.',
        'imagen' => 'static\images\saturno.jpeg',
        'dinero' => 1900000,
        'fecha' => '12/08/1819',
        'categoria' => ['categoria2']
    ],
    [
        'clave' => 'proyecto9',
        'titulo' => 'El 3 de mayo de 1808',
        'descripcion' => 'Muestra la resistencia española contra Napoleón.',
        'imagen' => 'static\images\3_mayo_1808.jpeg',
        'dinero' => 2000000,
        'fecha' => '03/05/1814',
        'categoria' => ['categoria2']
    ],

    // Velázquez
    [
        'clave' => 'proyecto10',
        'titulo' => 'Las Meninas',
        'descripcion' => 'Retrato de la familia real española.',
        'imagen' => 'static\images\las_meninas.jpeg',
        'dinero' => 2500000,
        'fecha' => '15/06/1656',
        'categoria' => ['categoria3']
    ],
    [
        'clave' => 'proyecto11',
        'titulo' => 'La rendición de Breda',
        'descripcion' => 'Escena histórica de victoria militar.',
        'imagen' => 'static\images\rendicion_breda.jpeg',
        'dinero' => 2200000,
        'fecha' => '20/04/1635',
        'categoria' => ['categoria3']
    ],
    [
        'clave' => 'proyecto12',
        'titulo' => 'Retrato del Papa Inocencio X',
        'descripcion' => 'Retrato intenso del pontífice.',
        'imagen' => 'static\images\papa_inocencio.jpeg',
        'dinero' => 2300000,
        'fecha' => '10/12/1650',
        'categoria' => ['categoria3']
    ],

    // Joaquín Sorolla
    [
        'clave' => 'proyecto13',
        'titulo' => 'Paseo a orillas del mar',
        'descripcion' => 'Muestra la luz brillante y el mar.',
        'imagen' => 'static\images\paseo_mar.jpeg',
        'dinero' => 1500000,
        'fecha' => '05/08/1909',
        'categoria' => ['categoria4']
    ],
    [
        'clave' => 'proyecto14',
        'titulo' => 'Niños en la playa',
        'descripcion' => 'Retrato de niños jugando en la arena.',
        'imagen' => 'static\images\ninos_playa.jpeg',
        'dinero' => 1400000,
        'fecha' => '12/07/1909',
        'categoria' => ['categoria4']
    ],
    [
        'clave' => 'proyecto15',
        'titulo' => 'Sewing the sail',
        'descripcion' => 'Trabajadores reparando una vela.',
        'imagen' => 'static\images\sewing_sail.jpeg',
        'dinero' => 1450000,
        'fecha' => '01/09/1896',
        'categoria' => ['categoria4']
    ],
];
?>