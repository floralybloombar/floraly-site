/*
  LE JOURNAL FLORALY — liste des articles

  Pour ajouter un article : copiez un bloc { ... } complet, collez-le à la suite
  (sans oublier la virgule entre deux blocs) et modifiez le contenu.

  - slug  : nom de l'article dans l'adresse (lettres minuscules, chiffres et tirets, sans accents).
            Exemple : "le-petit-secret-de-floraly"  ->  floraly-site.vercel.app/#journal/le-petit-secret-de-floraly
  - date  : (facultatif) au format AAAA-MM-JJ. Si vous en mettez, les articles les plus récents s'affichent en premier
            et la date apparaît sur le site. Sans date, les articles restent dans l'ordre de ce fichier.
  - image : (facultatif) chemin d'une image, par exemple "assets/mon-article.jpg". Retirez la ligne s'il n'y en a pas.
  - fr / en : titre (title), courte description (desc) et texte (body).
  - body  : un paragraphe par ligne entre guillemets.
            Une ligne qui commence par "## " devient un titre de section.
            Une ligne qui commence par "### " devient un sous-titre.
            Une ligne qui commence par "> " devient une citation.
*/
window.FLORALY_JOURNAL = [
  {
    slug: "idees-pour-vos-evenements",
    fr: {
      title: "Des idées pour vos événements avec Floraly",
      desc: "Des idées créatives pour intégrer une expérience florale à vos mariages, célébrations, événements corporatifs et autres moments importants.",
      body: [
        "## Mariage",
        "### 1. Le bouquet des invités",
        "Chaque invité choisit une fleur et la dépose dans un vase commun afin de créer un bouquet collectif pour les nouveaux mariés.",
        "Une façon simple de créer un souvenir qui rassemble toutes les personnes présentes autour du couple.",
        "### 2. Le bouquet du marié pour la mariée",
        "Et si le marié créait lui-même le bouquet de sa mariée?",
        "Il choisit les fleurs et compose son bouquet avant de lui offrir. Une façon symbolique de créer le premier bouquet qu’il lui offre en tant que mari.",

        "## Gender Reveal",
        "### 1. Bleu ou rose?",
        "Deux vases, deux couleurs et une prédiction.",
        "Chaque invité choisit une fleur et la dépose dans le vase correspondant à son choix : bleu ou rose. À la fin de l’activité, les futurs parents repartent avec deux bouquets représentant les prédictions de leurs proches.",
        "### 2. Le bouquet pour bébé",
        "Chaque invité choisit une fleur représentant un souhait pour le futur bébé : amour, douceur, bonheur, force, etc.",
        "Toutes les fleurs sont ensuite réunies pour créer un bouquet symbolique à offrir aux futurs parents.",

        "## Baby Shower",
        "### 1. Le bouquet à son image",
        "Les invitées choisissent chacune une fleur qui représente une facette de la future maman : sa personnalité, une qualité, un souvenir ou une petite anecdote. Elles écrivent sur un ruban cette facette, puis attachent le ruban sur la fleur.",
        "La future maman découvre ensuite les fleurs une par une et tente de deviner quelle invitée a écrit le mot sur le ruban.",
        "Les fleurs sont ensuite réunies pour former son bouquet.",
        "### 2. Le mois de naissance",
        "Le bar à fleurs est personnalisé selon la couleur du mois de naissance prévu. Chaque invitée, ainsi que la future maman, crée son petit bouquet en l’honneur du bébé.",

        "## Anniversaire",
        "### 1. Une fleur, un souvenir",
        "Chaque invité choisit une fleur qui lui rappelle un souvenir vécu avec la personne célébrée.",
        "Chaque personne peut ensuite se filmer quelques secondes pour expliquer pourquoi elle a choisi cette fleur et raconter le souvenir qui lui est associé.",
        "À la fin, la personne fêtée reçoit le bouquet ainsi qu’une compilation des petits messages et souvenirs de ses proches.",
        "### 2. Composition DIY",
        "Chaque invité apporte un bouquet d’une sorte de fleur qui représente la personne célébrée. Ils remplissent le bar à fleurs. Ensuite, les invités et la personne fêtée créent leur bouquet avec toutes les fleurs qu’ils ont apportées.",

        "## Fiançailles",
        "### Team Bride vs Team Groom",
        "Deux vases, deux équipes.",
        "Chaque invité choisit son camp et ajoute une fleur au vase de son équipe.",
        "À la fin de l’activité, les futurs mariés doivent deviner quel bouquet a été créé par quelle équipe.",

        "## Événement corporatif",
        "### Les fleurs qui nous représentent",
        "Chaque fleur peut représenter une valeur, une qualité ou un élément associé à l’entreprise : créativité, collaboration, confiance, leadership, etc.",
        "Les participants choisissent les fleurs qui représentent le mieux ce qu’ils souhaitent apporter à l’équipe ou ce qu’ils associent à l’entreprise. Toutes les fleurs sont ensuite réunies pour créer un arrangement collectif.",
        "L’activité peut être adaptée aux couleurs et à l’image de marque de l’entreprise et fonctionner pour un team building, un événement client, un lancement ou une célébration corporative.",

        "## Dîner entre amis",
        "### La fleur qui te représente",
        "Chaque personne choisit une fleur qui lui ressemble.",
        "À la fin, toutes les fleurs sont réunies dans un bouquet collectif qui représente le groupe."
      ]
    },
    en: {
      title: "Ideas for Your Events with Floraly",
      desc: "Creative ideas for bringing a floral experience to your weddings, celebrations, corporate events and other special moments.",
      body: [
        "## Wedding",
        "### 1. The Guests’ Bouquet",
        "Each guest chooses a flower and places it in a shared vase to create a collective bouquet for the newlyweds.",
        "A simple way to create a keepsake that brings everyone present together around the couple.",
        "### 2. The Groom’s Bouquet for the Bride",
        "What if the groom made his bride’s bouquet himself?",
        "He chooses the flowers and arranges his bouquet before presenting it to her. A symbolic way to create the first bouquet he gives her as her husband.",

        "## Gender Reveal",
        "### 1. Blue or Pink?",
        "Two vases, two colours and one prediction.",
        "Each guest chooses a flower and places it in the vase that matches their guess: blue or pink. At the end of the activity, the parents-to-be go home with two bouquets representing their loved ones’ predictions.",
        "### 2. The Bouquet for Baby",
        "Each guest chooses a flower that stands for a wish for the future baby: love, gentleness, happiness, strength and more.",
        "All the flowers are then brought together to create a symbolic bouquet to present to the parents-to-be.",

        "## Baby Shower",
        "### 1. A Bouquet in Her Image",
        "Each guest chooses a flower that represents a facet of the mom-to-be: her personality, a quality, a memory or a little anecdote. They write that facet on a ribbon, then tie the ribbon to the flower.",
        "The mom-to-be then discovers the flowers one by one and tries to guess which guest wrote the note on the ribbon.",
        "The flowers are then brought together to form her bouquet.",
        "### 2. The Birth Month",
        "The flower bar is customized with the colour of the expected birth month. Each guest, along with the mom-to-be, creates a little bouquet in honour of the baby.",

        "## Birthday",
        "### 1. One Flower, One Memory",
        "Each guest chooses a flower that reminds them of a memory they shared with the guest of honour.",
        "Each person can then film themselves for a few seconds to explain why they chose that flower and tell the memory that goes with it.",
        "At the end, the guest of honour receives the bouquet along with a compilation of the little messages and memories from their loved ones.",
        "### 2. DIY Arrangement",
        "Each guest brings a bunch of one type of flower that represents the guest of honour. Together they fill the flower bar. Then the guests and the guest of honour create their own bouquets with all the flowers that were brought.",

        "## Engagement Party",
        "### Team Bride vs Team Groom",
        "Two vases, two teams.",
        "Each guest picks a side and adds a flower to their team’s vase.",
        "At the end of the activity, the couple-to-be must guess which bouquet was created by which team.",

        "## Corporate Event",
        "### The Flowers That Represent Us",
        "Each flower can represent a value, a quality or an element associated with the company: creativity, collaboration, trust, leadership and more.",
        "Participants choose the flowers that best represent what they want to bring to the team or what they associate with the company. All the flowers are then brought together to create a collective arrangement.",
        "The activity can be adapted to the company’s colours and branding, and works for team building, client events, launches or corporate celebrations.",

        "## Dinner with Friends",
        "### The Flower That Represents You",
        "Each person chooses a flower that resembles them.",
        "At the end, all the flowers are brought together in a collective bouquet that represents the group."
      ]
    }
  },
  {
    slug: "le-petit-secret-de-floraly",
    fr: {
      title: "Le petit secret de Floraly",
      desc: "Nos conseils simples pour prendre soin de vos fleurs et les garder fraîches et éclatantes plus longtemps.",
      body: [
        "De la préparation des tiges au choix de l’emplacement de votre bouquet, quelques petits gestes peuvent faire toute la différence.",
        "Découvrez les conseils de Floraly pour prolonger la durée de vie de vos fleurs et profiter de votre bouquet le plus longtemps possible.",
        "## Préparer ses fleurs",
        "Avant de placer vos fleurs dans l’eau, recoupez les tiges en biais avec un outil propre et retirez les feuilles qui se retrouveraient sous le niveau de l’eau.",
        "## Une eau propre, des fleurs heureuses",
        "Changez régulièrement l’eau de votre vase et profitez-en pour nettoyer rapidement le contenant. Une eau propre aide à garder vos fleurs fraîches plus longtemps.",
        "## Le bon emplacement",
        "Évitez de placer votre bouquet en plein soleil, près d’une source de chaleur ou dans un endroit soumis à de grandes variations de température.",
        "Un endroit frais, lumineux et à l’abri du soleil direct sera idéal.",
        "## Prenez soin de votre bouquet",
        "Retirez les fleurs fanées au fur et à mesure afin de laisser les autres fleurs continuer à s’épanouir.",
        "Et surtout, prenez le temps de profiter de votre bouquet."
      ]
    },
    en: {
      title: "Floraly’s Little Secret",
      desc: "Our simple tips for caring for your flowers and keeping them fresh and vibrant for longer.",
      body: [
        "From trimming the stems to choosing where to put your bouquet, a few small gestures can make all the difference.",
        "Discover Floraly’s tips for extending the life of your flowers and enjoying your bouquet for as long as possible.",
        "## Prepare Your Flowers",
        "Before placing your flowers in water, trim the stems at an angle with a clean tool and remove any leaves that would sit below the waterline.",
        "## Clean Water, Happy Flowers",
        "Change the water in your vase regularly and take the opportunity to give the container a quick clean. Clean water helps keep your flowers fresh for longer.",
        "## The Right Spot",
        "Avoid placing your bouquet in direct sunlight, near a heat source or in a spot with big temperature swings.",
        "A cool, bright place out of direct sun is ideal.",
        "## Take Care of Your Bouquet",
        "Remove wilted flowers as you go so the others can keep blooming.",
        "And above all, take the time to enjoy your bouquet."
      ]
    }
  },
  {
    slug: "creer-son-bouquet",
    fr: {
      title: "Créer son bouquet : le petit guide Floraly",
      desc: "Quelques conseils pour choisir ses fleurs, harmoniser les couleurs et créer un bouquet qui vous ressemble.",
      body: [
        "Créer un bouquet ne demande pas nécessairement d’être fleuriste. Avec quelques principes simples, il est possible de créer une composition harmonieuse et personnalisée.",
        "## Commencer par une palette de couleurs",
        "Choisissez d’abord deux ou trois couleurs principales. Vous pouvez opter pour des teintes similaires pour un résultat doux et harmonieux ou jouer avec des couleurs contrastées pour créer davantage de caractère.",
        "## Choisir une fleur principale",
        "Commencez avec une ou deux fleurs qui attirent naturellement le regard. Elles donneront une direction à votre bouquet.",
        "Ajoutez ensuite des fleurs secondaires et de la verdure pour créer du volume et de la profondeur.",
        "## Jouer avec les formes et les textures",
        "Un bouquet intéressant combine différentes formes et textures.",
        "Associez des fleurs rondes et généreuses à des fleurs plus délicates, des petites fleurs et quelques éléments de verdure pour créer un résultat naturel et équilibré.",
        "## Créer du mouvement",
        "Évitez de placer toutes les fleurs exactement au même niveau. Certaines peuvent être légèrement plus hautes ou plus basses afin de donner du mouvement et un aspect plus naturel à votre bouquet.",
        "## Laisser parler votre personnalité",
        "Il n’existe pas une seule bonne façon de créer un bouquet.",
        "Choisissez des fleurs que vous aimez, des couleurs qui vous ressemblent et laissez votre créativité faire le reste.",
        "Après tout, chez Floraly, les plus beaux bouquets sont ceux qui racontent quelque chose de vous."
      ]
    },
    en: {
      title: "Creating Your Bouquet: The Floraly Mini Guide",
      desc: "A few tips for choosing your flowers, harmonizing colours and creating a bouquet that looks like you.",
      body: [
        "Creating a bouquet doesn’t require being a florist. With a few simple principles, you can create a harmonious, personalized arrangement.",
        "## Start with a Colour Palette",
        "First, choose two or three main colours. You can go for similar shades for a soft, harmonious result, or play with contrasting colours for more character.",
        "## Choose a Focal Flower",
        "Start with one or two flowers that naturally catch the eye. They’ll give your bouquet its direction.",
        "Then add secondary flowers and greenery to create volume and depth.",
        "## Play with Shapes and Textures",
        "An interesting bouquet combines different shapes and textures.",
        "Pair round, generous blooms with more delicate flowers, small flowers and a few sprigs of greenery for a natural, balanced result.",
        "## Create Movement",
        "Avoid placing all the flowers at exactly the same level. Some can sit slightly higher or lower to give your bouquet movement and a more natural look.",
        "## Let Your Personality Shine",
        "There’s no single right way to make a bouquet.",
        "Choose flowers you love and colours that feel like you, and let your creativity do the rest.",
        "After all, at Floraly, the most beautiful bouquets are the ones that tell something about you."
      ]
    }
  }
];
