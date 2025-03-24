const listings = [
    {
        category: "hebergement",
        title: "Hôtel Le Soleil du Matin",
        price: 128,
        currency: "€",
        rating: 5,
        img: "/images/hebergements/hotel_le_soleil.webp",
        most_Popular: true
    },
    {
        category: "hebergement",
        title: "Au coeur de l'eau Chanbre d'hôtes",
        price: 71,
        currency: "€",
        rating: 4,
        img: "/images/hebergements/au_coeur_de_leau.webp",
        most_Popular: true
    },
    {
        category: "hebergement",
        title: "Hôtel Tout Bleu et Blanc",
        price: 68,
        currency: "€",
        rating: 4,
        img: "/images/hebergements/hotel_tout_bleu.webp",
        most_Popular: true
    },
    {
        category: "hebergement",
        title: "Auberge de la Cannebière",     
        price: 25,
        currency: "€",
        rating: 4,
        img: "/images/hebergements/auberge_la_cannebiere.webp",
        most_Popular: false
    },
    {
        category: "hebergement",
        title: "Hôtel du port",       
        price: 52,
        currency: "€",
        rating: 5,
        img: "/images/hebergements/hotel_du_port.webp",
        most_Popular: false
    },
    {
        category: "hebergement",
        title: "Hôtel Les Mouettes",       
        price: 76,
        currency: "€",
        rating: 4,
        img: "/images/hebergements/hotel_les_mouette.webp",
        most_Popular: false
    },
    {
        category: "hebergement",
        title: "Hôtel de la Mer",      
        price: 46,
        currency: "€",
        rating: 3,
        img: "/images/hebergements/hotel_de_la_mer.webp",
        most_Popular: false
    },
    {
        category: "hebergement",
        title: "Auberge le Panier",     
        price: 23,
        currency: "€",
        rating: 4,
        img: "/images/hebergements/auberge_le_panier.webp",
        most_Popular: false
    },
    {
        category: "hebergement",
        title: "Hôtel chez Amina",     
        price: 96,
        currency: "€",
        rating: 5,
        img: "/images/hebergements/hotel_chez_amina.webp",
        most_Popular: false
    },
    {
        category: "activite",
        title: "Vieux Port",     
        price: "",
        currency: "",
        rating: 0,
        img: "/images/activites/vieux_port.webp",
        most_Popular: false
    },
    {
        category: "activite",
        title: "Fort de Pomègues",     
        price:"",
        currency: "",
        rating: 0,
        img: "/images/activites/fort_de_pomegues.webp",
        most_Popular: false
    },
    {
        category: "activite",
        title: "Iles de Frioul",     
        price: "",
        currency: "€",
        rating: 0,
        img: "/images/activites/iles_du_frioul.webp",
        most_Popular: false
    },
    {
        category: "activite",
        title: "Parc National des Calanques",     
        price: "",
        currency: "",
        rating: 0,
        img: "/images/activites/parc_national_calanques.webp",
        most_Popular: false
    },
    {
        category: "activite",
        title: "Notre-Dame-de-la-Garde",     
        price: "",
        currency: "",
        rating: 0,
        img: "/images/activites/notre_dame_de_la_garde.webp",
        most_Popular: false
    },
    {
        category: "activite",
        title: "Parc Longchamp",     
        price: "",
        currency: "",
        rating: 0,
        img: "/images/activites/parc_longchamp.webp",
        most_Popular: false
    }
]

const tags = [
    {
        icon: "fa-solid fa-money-bill-wave",
        title: "Économique"
    },
    {
        icon: "fa-solid fa-child-reaching",
        title: "Familial"
    },
    {
        icon: "fa-solid fa-heart",
        title: "Romantique"
    },
    {
        icon: "fa-solid fa-dog",
        title: "Animaux domestique"
    }
]

const footer =[
    {
        title:"A propos", 
        links :[
            "Fonctionnement du site", 
            "Conditions générales de vente", 
            "Données et confidentialité"
        ]
    },
    {
        title:"Nos hébergements", 
        links :[
            "Charte qualité", 
            "Soumettre votre hôtel"
        ]
    },
    {
        title:"Assistance", 
        links :[
            "Centre d'aide", 
            "Nous contacter"
        ]
    },
]
export {listings, tags, footer}