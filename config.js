var config = {
    style: 'mapbox://styles/mapbox/streets-v12',
    accessToken: 'pk.eyJ1IjoibXJndWF0bm8iLCJhIjoiY2xlbGh2bW5vMHZrZDNxbjR2ajRxdnd3OCJ9.Aj5fI1VF5Adu1XJ51z9sOw',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    footer: 'Step Up Consulting – Ideas that serve. Service that works. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'The Creative Village',
            image: 'https://drive.google.com/uc?export=view&id=1aUyoVrDDZA4EK072xl7xyDbS3eVrPDZc',
            description: 'The Creative Village is a sustainable, viable space that creates a platform for the attraction and development of a creative class in industries with low-level technology, mainly in the fields of culture and art. It is reliant on eco-oriented processes involving local lifestyles, a clean environment and necessary equipment. This village provides equal benefit to a rural community, its creative class and the consumer of rural creative products. Wealth creation in such villages (Soares da Silva, D., Figueiredo, E., C Eus-ebio, C., & Maria Joao Carneiro, M., 2016) comes from the products of the creative class. These products are complementary to the essential activities of the village (traditional village industry and so forth).',
            location: {
                center: [124.1637, 9.9],
                zoom: 9.8,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Tarsier Sanctuary',
            image: 'https://drive.google.com/uc?export=view&id=14tnFL9fUfeGFR3OSAPkvMtWCKNEca27R',
            description: 'The Philippine Tarsier Sanctuary is an eco-tourism destination located in Corella, Bohol. It is where you can see and visit the smallest primates that are mostly found in Southeast Asia — tarsiers.',
            location: {
                center: [123.9504995, 9.6898966],
                zoom: 14,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Sipatan Twin Hanging Bridge',
            image: 'https://drive.google.com/uc?export=view&id=1FvSDTTpcMDvtH0d1QzKC5vMpvwmGavGv',
            description: 'Traditionally built with only bamboo, the once single bridge that was constructed to cross the Sipatan river is now made of steel cables and has doubled to sustain the foot traffic from tourists and locals who pass by them. It spans a length of 40 meters and a height of 20 meters, with a deck bridge of woven bamboo slats and a great view of the Sipatan river below. Although both bridges are secure, they still are prone to shaking from the weight of passers-by, which will heighten the fun for adrenaline junkies.',
            location: {
                center: [124.0479524, 9.675339],
                zoom: 14,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Loboc Musical Tradition and Heritage',
            image: 'https://drive.google.com/uc?export=view&id=1PCCdlUVh-8hEyYKWKYacUzxhViDKnEKW',
            description: 'The municipality of Loboc had always been known for its musical heritage. Musicians from Loboc had been recognized and invited to perform within and outside Bohol Province. However, the municipal government observed the decreasing number of musicians in Loboc. In a bid to revive the municipality’s musical heritage, the Loboc Music Program was launched to provide free education to the youth to encourage them to take up music as a profession. The program offers alternative sources of livelihood while promoting youth development for its constituency.',
            location: {
                center: [124.0246558, 9.6377256],
                zoom: 14,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fifth-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Loom Weaving',
            image: 'https://drive.google.com/uc?export=view&id=1Nve9Zh6I3AyCjAx-FQC0pjwqEsL2hWi8',
            description: 'Funded by the municipality of Albur, a weaving shed made of bamboo with zinc roofing was built in Basacdacu housing 20 looms made by local carpenters. This is now the Center wherein the buri cloth is produced. The weavers are extended financial help from the Self-Employment Assistant Program (SEAP) of the Social Welfare Program. Such funds are used in buying the “spears of young buri leaves which is obtained from the town of Inabanga.',
            location: {
                center: [123.9550687, 9.647299],
                zoom: 14,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'sixth-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Baclayon Art Museum',
            image: 'https://drive.google.com/uc?export=view&id=1Pq4YWABYnzLyDotYtzbVkw7dhGHAhVWY',
            description: 'Housed inside the old convent adjacent to the church is the museum, which displays religious artifacts during the Spanish colonial period.  Among its collections are are vestments, Latin hymnals with carabao skin covers and sheepskin pages, images and statues of saints, ceremonial artifacts and paintings by local artist Liberato Gatchalian.',
            location: {
                center: [123.9132011, 9.6229055],
                zoom: 17,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'seventh-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Loay, coz why not?',
            image: 'https://drive.google.com/uc?export=view&id=1pbH2EwP4HC44tUxl1iDnWf26d-kjHi5j',
            description: 'The Clarin Ancestral House dates back to 1840. Traditional Filipino-Spanish in design with long slanting roofs covered with nipa leaves, it is a typical one big square house with a coral stone foundation, rough-hewn wooden posts, wooden walls and floors of wide hardwood planks and a receiving hall with a high vaulted ceiling. Although the ceiling beams are in urgent need of repair being damaged by termites, the whole house is relatively in good condition.',
            location: {
                center: [124.0107708, 9.6006407],
                zoom: 17,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'additional-chapter',
            alignment: 'fully',
            hidden: false,
            title: '',
            image: 'https://drive.google.com/uc?export=view&id=1BIXydAKKNOGi396iDUN-l69Z4Q9bcUMz',
            description: '',
            location: {
                center: [124.1637, 9.9],
                zoom: 9.8,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'eight-identifier',
            alignment: 'right',
            hidden: false,
            title: 'The Abatan Community',
            image: 'https://drive.google.com/uc?export=view&id=1jgHpZE4LYlPdsMtR7cKkdkVd0CTVQb82',
            description: 'Board a local banca boat to visit the five ancient communities who live along the Abatan river in Bohol.During the tour, you’ll also get to see the local nipa weaving, which is used to make roofing in the villages. Further upstream is another community whose livelihood is bamboo furniture making and basket weaving. You’ll even get a chance to try traditional weaving with help from the skilled women in the village. The real highlight though is the cultural performance, where locals from the different communities tell their story through dance, depicting their daily routines and traditions.',
            location: {
                center: [123.87380, 9.72568],
                zoom: 14,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'ninth-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Cambuhat Oyster Farm',
            image: 'https://drive.google.com/uc?export=view&id=1iocBzPerFNxDCWk8DX7cUB4ar87vpMQq',
            description: 'The Cambuhat Oyster farm is situated in the municipality of Buenavista, Bohol. It is part of an eco-friendly tourism enterprise by the Cambuhat Enterprise Development & Fisheries Association (CEDFA). Tourists get to see how Oysters are planted and harvested and also learn about Mangroves’preservation in this tour.',
            location: {
                center: [124.10014, 10.06201],
                zoom: 15,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: true,
            title: 'The Creative Village',
            location: {
                center: [124.1637, 9.9],
                zoom: 9.8,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
    ]
};
