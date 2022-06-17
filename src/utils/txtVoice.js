import * as functions from './functions';

// ---------------------------------- TUTO ----------------------------------
export const txtTuto = [
    {
        txt:"Nous sommes au centre du Kiosque du Jardin Public de Rodez. Avant de débuter le jeu de piste, nous allons appréhender le fonctionnement de l'application. Notre petit Saleugos va vous aider !",
        sec:-1
    }
];

// ---------------------------------- MUSEUM ----------------------------------
export const txtMuseum1 = [
    {
        txt: "Ce monument en acier Corten vous intrigue, vous décidez d'entrer à l'intérieur.",
        sec: functions.calculateSec("Ce monument en acier Corten vous intrigue, vous décidez d'entrer à l'intérieur.")
    },
    {
        txt: "En vous balandant tranquillement dans le musée de salle en salle, vous appréciez de plus en plus les oeuvres du ruthénois Pierre Soulages et sa maîtrise du noir.",
        sec: functions.calculateSec("En vous balandant tranquillement dans le musée de salle en salle, vous appréciez de plus en plus les oeuvres du ruthénois Pierre Soulages et sa maîtrise du noir.")
    },
    {
        txt: "Seulement, une fois arrivé dans la salle des vitraux de Conques, quelque chose vous interpelle.",
        sec: functions.calculateSec("Seulement, une fois arrivé dans la salle des vitraux de Conques, quelque chose vous interpelle.")
    },
    {
        txt: "Des lettres s'inscrivent dans le verre que Pierre Soulages a utilisé pour les vitraux. Vous pouvez alors lire une phrase.",
        sec: functions.calculateSec("Des lettres s'inscrivent dans le verre que Pierre Soulages a utilisé pour les vitraux. Vous pouvez alors lire une phrase.")
    },
    {
        txt: "\"La clé est là, depuis toujours.\"",
        sec: functions.calculateSec("\"La clé est là, depuis toujours.\"")+1
    },
    {
        txt: "A la lecture de ces mots, vos pensées deviennent instantanément floues et une hallucination vous apparaît...",
        sec: functions.calculateSec("A la lecture de ces mots, vos pensées deviennent instantanément floues et une hallucination vous apparaît...")
    }
];

export const txtMuseum2 = [
    {
        txt:"Vous vous trouvez alors à l'intérieur de la majestueuse Cathédrale de Rodez.",
        sec:functions.calculateSec("Vous vous trouvez alors à l'intérieur de la majestueuse Cathédrale de Rodez.")
    },
    {
        txt:"Vous êtes aux côtés de Pierre Soulages qui a pour mission de créer de nouveaux vitraux pour l'édifice situé dans le coeur historique de la ville.",
        sec:functions.calculateSec("Vous êtes aux côtés de Pierre Soulages qui a pour mission de créer de nouveaux vitraux pour l'édifice situé dans le coeur historique de la ville.")
    },
    {
        txt:"Il vient de découvrir dans de vieilles archives datant de plus de 500 ans enfouies dans les sous-sols, un mystérieux ouvrage à propos des... vitraux !",
        sec:functions.calculateSec("Il vient de découvrir dans de vieilles archives datant de plus de 500 ans enfouies dans les sous-sols, un mystérieux ouvrage à propos des... vitraux !")
    },
    {
        txt:"Il est écrit, d'une plume plus ancienne encore que la Cathédrale elle-même, \"Seul un ingrédient permet de réaliser des vitraux parfaits, un seul, c'est ...\".",
        sec:functions.calculateSec("Il est écrit, d'une plume plus ancienne encore que la Cathédrale elle-même, \"Seul un ingrédient permet de réaliser des vitraux parfaits, un seul, c'est ...\".")
    },
    {
        txt:"La page est arrachée ! Il ferme le livre dans lequel sont marquées ces inscriptions et tout s'arrête.",
        sec:functions.calculateSec("La page est arrachée ! Il ferme le livre dans lequel sont marquées ces inscriptions et tout s'arrête.La page est arrachée ! Il ferme le livre dans lequel sont marquées ces inscriptions et tout s'arrête.")
    },
    {
        txt:"Vous sortez tout à coup de votre rêve conscient et un sentiment vous envahit, comme une évidence  : vous devez vous mettre à la recherche de ce mystérieux ingrédient. Sans plus attendre.",
        sec:functions.calculateSec("Vous sortez tout à coup de votre rêve conscient et un sentiment vous envahit, comme une évidence  : vous devez vous mettre à la recherche de ce mystérieux ingrédient. Sans plus attendre.")
    }
]

export const txtMuseum3 = [
    {
        txt:"Vous devez vous demander comment cela est-il possible ? De la magie ? Des esprits ? Quelqu'un vous a drogué ? Le mystère reste entier.",
        sec:-1
    }
]

// ---------------------------------- PIERRE ----------------------------------
export const txtPierre1 = [
    {
        txt:"Vous entrez chez Pierre Soulages : il ne vit plus ici depuis ses 18 ans, à l'époque, l'hopital et la prison en face de chez lui étaient encore fonctionnels.",
        sec:functions.calculateSec("Vous entrez chez Pierre Soulages : il ne vit plus ici depuis ses 18 ans, à l'époque, l'hopital et la prison en face de chez lui étaient encore fonctionnels.")
    },
    {
        txt:"Explorez la maison, vous y trouverez sûrement quelque chose d'intéressant !",
        sec:-1
    }
];

export const txtPierre2 = [
    {
        txt:"Vous avez trouvé un coffre dans le grenier de la maison. Il semble dater de plusieurs dizaines d'années. Mais impossible de l'ouvrir...",
        sec:-1
    }
]

// ---------------------------------- FABIE ----------------------------------
export const txtFabie1 = [
    {
        txt:"Vous voilà devant la statue de François Fabié, située à l'arrière de l'actuel Palais de Justice. Des inscriptions sont lisibles de part et d'autre du monument.",
        sec:-1
    }
];

export const txtFabie2 = [
    {
        txt:"Arriverez-vous à déchiffrer les indices que Pierre Soulages vous a laissé ?",
        sec:-1
    }
];

// ---------------------------------- AMANS ----------------------------------
export const txtAmans = [
    {
        txt:"Vous êtes arrivé devant l'Eglise Saint-Amans, la plus ancienne de la ville ! Faites le tour du bâtiment pour trouver des indices utiles pour notre aventure !",
        sec:-1
    }
]

// ---------------------------------- ARMAGNAC ----------------------------------
export const txtArmagnac = [
    {
        txt:"Vous vous tenez place de l'Olmet, devant la Maison d’Armagnac, bâtiment qui date de la Renaissance.",
        sec:functions.calculateSec("Vous vous tenez place de l'Olmet, devant la Maison d’Armagnac, bâtiment qui date de la Renaissance.")
    },
    {
        txt:"Prenez le temps de contempler le moindre recoin de cet édifice. Chaque détail compte.",
        sec:-1
    }
];

// ---------------------------------- VESTIGES ----------------------------------
export const txtVestiges = [
    {
        txt:"Descendez dans les vestiges et lisez attentivement les inscriptions. Trouvez le point commun entre ce lieu et le monument majeur de Rodez et vous pourrez continuer l'aventure.",
        sec:functions.calculateSec("Descendez dans les vestiges et lisez attentivement les inscriptions. Trouvez le point commun entre ce lieu et le monument majeur de Rodez et vous pourrez continuer l'aventure.")
    },
    {
        txt:" Bon courage.",
        sec:-1
    }
];

// ---------------------------------- MAZEL ----------------------------------
export const txtMazel = [
    {
        txt:"Tu y es ! Une image va apparaître, rends toi à cet emplacement précis et analyse la bien. La réponse à l'énigme est peut-être là !",
        sec:-1
    }
]