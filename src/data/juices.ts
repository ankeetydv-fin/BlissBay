export interface JuiceProduct {
  id: string;
  name: string;
  emoji: string;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  ingredients: string[];
  nutritionalInfo: {
    calories: string;
    sugar: string;
    fiber: string;
    protein: string;
    vitamins: string[];
  };
  price: string;
  image: string;
  blogContent: {
    title: string;
    content: string[];
  };
}

export const juices: JuiceProduct[] = [
  {
    id: 'mango-juice',
    name: 'Mango Juice',
    emoji: '🥭',
    shortDescription: 'Boosts immunity, improves digestion',
    fullDescription: 'Our premium Mango Juice is made from hand-picked, ripe Alphonso mangoes, known as the "King of Mangoes". Each bottle is packed with the tropical sweetness and aromatic flavor that only the finest mangoes can deliver.',
    benefits: [
      'Boosts immunity with high vitamin C content',
      'Improves digestion and gut health',
      'Rich in vitamins A & C for skin and eye health',
      'Contains antioxidants that fight free radicals',
      'Provides natural energy boost'
    ],
    ingredients: [
      'Fresh Alphonso mangoes',
      'Filtered water',
      'A hint of organic honey (optional)'
    ],
    nutritionalInfo: {
      calories: '120 kcal per serving',
      sugar: '24g (natural sugars)',
      fiber: '2g',
      protein: '1g',
      vitamins: ['Vitamin A', 'Vitamin C', 'Vitamin E', 'Vitamin K']
    },
    price: '₹199',
    image: '/images/juices/mango-juice.jpg',
    blogContent: {
      title: 'The Miraculous Health Benefits of Mango Juice',
      content: [
        'Mangoes have been cultivated in India for over 4,000 years and are often referred to as the "King of Fruits". The Alphonso variety, which we use in our premium mango juice, is particularly prized for its sweet flavor and smooth texture.',
        'Beyond its delicious taste, mango juice offers numerous health benefits. The high vitamin C content boosts your immune system, helping your body fight off infections and illnesses. A single serving of our mango juice provides over 60% of your daily vitamin C requirement.',
        'Mangoes are also rich in vitamin A, which is essential for maintaining healthy vision, skin, and mucous membranes. The fiber content in mangoes supports digestive health by promoting regular bowel movements and preventing constipation.',
        'The antioxidants present in mangoes, including quercetin, fisetin, isoquercitrin, astragalin, and methylgallat, help protect your cells against damage from free radicals. These compounds have been linked to a reduced risk of certain cancers and heart disease.',
        'At Bliss Bay, we ensure that our mango juice retains all these nutritional benefits by using a gentle cold-pressing technique that preserves the vitamins, minerals, and enzymes naturally present in the fruit. We never add artificial sweeteners, preservatives, or colorings – just pure, natural goodness in every sip.'
      ]
    }
  },
  {
    id: 'sugarcane-juice',
    name: 'Sugarcane Juice',
    emoji: '🍹',
    shortDescription: 'Detoxifies, enhances liver function',
    fullDescription: 'Our Sugarcane Juice is freshly extracted from organic sugarcane stalks, offering a naturally sweet taste with numerous health benefits. Each bottle delivers pure refreshment with a boost of natural minerals and electrolytes.',
    benefits: [
      'Detoxifies the body and flushes out toxins',
      'Enhances liver function and health',
      'Provides instant energy and hydration',
      'Rich in iron, calcium, potassium, and magnesium',
      'Helps in fighting fevers and infections'
    ],
    ingredients: [
      'Organic sugarcane',
      'A hint of ginger',
      'Fresh lime (optional)'
    ],
    nutritionalInfo: {
      calories: '180 kcal per serving',
      sugar: '30g (natural sugars)',
      fiber: '0.5g',
      protein: '0.2g',
      vitamins: ['Vitamin B1', 'Vitamin B2', 'Vitamin B3', 'Vitamin B6']
    },
    price: '₹149',
    image: '/images/juices/sugarcane-juice.jpg',
    blogContent: {
      title: 'Sugarcane Juice: Nature\'s Energy Drink',
      content: [
        'Sugarcane juice has been a traditional natural refreshment in India for centuries. It\'s not just a sweet treat but a powerhouse of nutrition that offers numerous health benefits, especially during hot summer days.',
        'Unlike processed sugars, the natural sweetness of sugarcane comes packaged with essential nutrients. It\'s rich in iron, calcium, potassium, magnesium, manganese, and vitamins A, B-complex, and C. This makes it an excellent energy booster without the crash that comes with artificial energy drinks.',
        'One of the most celebrated benefits of sugarcane juice is its ability to support liver health. It\'s known to be one of the most effective natural treatments for jaundice and liver-related issues. The alkaline nature of sugarcane juice helps maintain the body\'s pH balance and improves the functioning of the liver.',
        'For those looking to detoxify their system, sugarcane juice works as a natural diuretic that helps flush out toxins from the body. Its high concentration of calcium, magnesium, potassium, iron, and manganese works to strengthen the body and boost immunity.',
        'At Bliss Bay, we extract our sugarcane juice using traditional methods to preserve its natural flavor and nutritional content. We carefully select organic sugarcane stalks and add a hint of ginger for that extra zing. For those who prefer a tangy twist, we offer a variation with a splash of fresh lime juice. Each bottle is prepared fresh and delivered straight to your doorstep to ensure you enjoy the purest form of this amazing natural elixir.'
      ]
    }
  },
  {
    id: 'pomegranate-juice',
    name: 'Pomegranate Juice',
    emoji: '🍎',
    shortDescription: 'Rich in antioxidants, supports heart health',
    fullDescription: 'Our Pomegranate Juice is extracted from carefully selected, ripe pomegranates, ensuring a perfect balance of sweetness and tanginess. Packed with powerful antioxidants, each bottle offers a ruby-red elixir that\'s as nutritious as it is delicious.',
    benefits: [
      'Loaded with potent antioxidants that fight inflammation',
      'Supports heart health by improving blood flow',
      'Helps lower blood pressure and cholesterol',
      'May help prevent certain types of cancer',
      'Improves memory and brain function'
    ],
    ingredients: [
      'Fresh pomegranates',
      'A hint of beetroot for extra antioxidants (optional)'
    ],
    nutritionalInfo: {
      calories: '140 kcal per serving',
      sugar: '32g (natural sugars)',
      fiber: '0.2g',
      protein: '0.4g',
      vitamins: ['Vitamin C', 'Vitamin K', 'Folate', 'Potassium']
    },
    price: '₹249',
    image: '/images/juices/pomegranate-juice.jpg',
    blogContent: {
      title: 'Pomegranate: The Ancient Fruit with Modern Health Benefits',
      content: [
        'Pomegranate has been revered as a symbol of health, fertility, and eternal life across many cultures for thousands of years. Modern science is now confirming what ancient wisdom has long suggested – that this ruby-red fruit is one of nature\'s most powerful health elixirs.',
        'What makes pomegranate juice special is its exceptionally high concentration of antioxidants. In fact, pomegranate juice contains three times more antioxidants than green tea or red wine. These antioxidants, primarily in the form of punicalagins and punicic acid, help fight free radicals in the body and reduce inflammation, which is at the root of many chronic diseases.',
        'Heart health is perhaps the most well-studied benefit of pomegranate juice. Regular consumption has been shown to improve blood flow, lower blood pressure, and reduce LDL (bad) cholesterol oxidation. Some studies suggest that drinking pomegranate juice daily can reduce arterial plaque and improve overall cardiovascular health.',
        'Beyond heart health, pomegranate juice shows promising effects on brain function. Research indicates it may help protect against Alzheimer\'s disease and improve memory. The anti-inflammatory effects may also help in conditions like rheumatoid arthritis and joint pain.',
        'At Bliss Bay, we cold-press whole pomegranates, including the membrane surrounding the arils, as this is where many of the powerful polyphenols are concentrated. Our minimally processed juice retains the maximum nutritional benefits, delivering a tart-sweet flavor that\'s refreshing and invigorating. For an extra antioxidant boost, we offer a variation with a hint of beetroot, creating a nutritional powerhouse in a bottle.'
      ]
    }
  },
  {
    id: 'orange-juice',
    name: 'Orange Juice',
    emoji: '🍊',
    shortDescription: 'High in vitamin C, boosts skin glow',
    fullDescription: 'Our Orange Juice is freshly squeezed from premium, sun-ripened oranges. Each bottle captures the bright, zesty flavor and delivers a powerful dose of vitamin C for immunity and skin health.',
    benefits: [
      'High in vitamin C for stronger immunity',
      'Boosts collagen production for glowing skin',
      'Provides natural hydration and energy',
      'Rich in antioxidants that fight cellular damage',
      'Supports heart health and reduces inflammation'
    ],
    ingredients: [
      'Fresh oranges',
      'A hint of ginger (optional)'
    ],
    nutritionalInfo: {
      calories: '110 kcal per serving',
      sugar: '22g (natural sugars)',
      fiber: '0.5g',
      protein: '1.7g',
      vitamins: ['Vitamin C', 'Vitamin A', 'Folate', 'Potassium']
    },
    price: '₹179',
    image: '/images/juices/orange-juice.jpg',
    blogContent: {
      title: 'Orange Juice: Your Daily Dose of Sunshine and Wellness',
      content: [
        'There\'s something inherently cheerful about a glass of fresh orange juice – perhaps it\'s the vibrant color, the refreshing taste, or simply the association with sunny mornings. Beyond its mood-lifting properties, orange juice offers a wide array of health benefits that make it a staple in wellness routines worldwide.',
        'Vitamin C is the star nutrient in orange juice, with a single serving providing more than 100% of your daily requirement. This essential vitamin plays a crucial role in immune function, helping your body fight off infections and recover more quickly from illness. It\'s particularly beneficial during cold and flu season or when you\'re feeling run down.',
        'The vitamin C in orange juice also contributes significantly to skin health by stimulating collagen production. Collagen is the protein responsible for skin elasticity and firmness. Regular consumption of orange juice can help give your skin a natural, healthy glow and may even help reduce signs of aging over time.',
        'Orange juice contains flavonoids, particularly hesperidin, which has been linked to improved heart health. These compounds help reduce inflammation and oxidative stress, potentially lowering the risk of heart disease. The potassium content in orange juice also supports heart function by helping regulate blood pressure.',
        'At Bliss Bay, we cold-press our oranges immediately after harvesting to preserve maximum nutritional value. Our extraction process includes some of the pulp, which contains beneficial fiber and additional nutrients. For those who enjoy a bit of zing, we offer a variation with a hint of fresh ginger, which not only adds a pleasant warmth but also contributes additional anti-inflammatory properties.'
      ]
    }
  },
  {
    id: 'watermelon-juice',
    name: 'Watermelon Juice',
    emoji: '🍉',
    shortDescription: 'Keeps you hydrated, flushes out toxins',
    fullDescription: 'Our Watermelon Juice is a refreshing blend of juicy watermelon with a hint of mint. This hydrating drink is perfect for hot summer days and post-workout recovery, offering natural electrolytes and essential nutrients.',
    benefits: [
      'Keeps you hydrated with high water content',
      'Helps flush out toxins and cleanse the system',
      'Improves metabolism and digestion',
      'Contains lycopene, a powerful antioxidant',
      'Reduces muscle soreness after exercise'
    ],
    ingredients: [
      'Fresh watermelon',
      'A hint of mint',
      'A dash of lime (optional)'
    ],
    nutritionalInfo: {
      calories: '85 kcal per serving',
      sugar: '18g (natural sugars)',
      fiber: '0.6g',
      protein: '1.1g',
      vitamins: ['Vitamin C', 'Vitamin A', 'Lycopene', 'Citrulline']
    },
    price: '₹159',
    image: '/images/juices/watermelon-juice.jpg',
    blogContent: {
      title: 'Watermelon Juice: Nature\'s Sports Drink',
      content: [
        'Watermelon juice might be summer\'s most refreshing secret weapon for health and hydration. This delightful drink is over 90% water, making it nature\'s perfect solution for staying hydrated during hot weather or after physical activity.',
        'What sets watermelon juice apart from plain water is its rich nutritional profile. It contains natural electrolytes like potassium and magnesium that help restore what your body loses through sweat. These minerals play a crucial role in maintaining proper muscle function and preventing cramps, making watermelon juice an excellent natural alternative to commercial sports drinks.',
        'One of the standout compounds in watermelon is citrulline, an amino acid that may help improve exercise performance and reduce muscle soreness. Studies suggest that citrulline can help relax blood vessels and improve circulation, potentially enhancing oxygen and nutrient delivery to muscles during and after exercise.',
        'Watermelon is also one of the richest plant sources of lycopene, a powerful antioxidant that gives the fruit its red color. Lycopene has been associated with heart health, sun protection, and reduced risk of certain types of cancer. Interestingly, the body absorbs lycopene more efficiently from juiced watermelon than from the whole fruit.',
        'At Bliss Bay, we press whole, ripe watermelons including the nutrient-rich white rind just beneath the green exterior, where much of the citrulline is concentrated. We add a hint of fresh mint for a cooling effect and offer a variation with a splash of lime for those who enjoy a citrusy twist. Our watermelon juice is minimally processed to retain all the natural goodness, making it the perfect refreshment for a hot day or a post-workout treat.'
      ]
    }
  },
  {
    id: 'amla-juice',
    name: 'Amla Juice',
    emoji: '🍏',
    shortDescription: 'Improves digestion, strengthens hair',
    fullDescription: 'Our Amla Juice is crafted from fresh Indian gooseberries, one of nature\'s richest sources of vitamin C. This immunity-boosting elixir offers a tangy taste with incredible health benefits for digestion, hair, skin, and overall wellness.',
    benefits: [
      'Improves digestion and metabolism',
      'Strengthens hair roots and reduces hair fall',
      'Powerhouse of vitamin C for immunity',
      'Helps control blood sugar levels',
      'Natural blood purifier and detoxifier'
    ],
    ingredients: [
      'Fresh amla (Indian gooseberry)',
      'A hint of honey',
      'Ginger (optional)'
    ],
    nutritionalInfo: {
      calories: '65 kcal per serving',
      sugar: '10g (natural sugars)',
      fiber: '3g',
      protein: '0.9g',
      vitamins: ['Vitamin C', 'Vitamin A', 'Iron', 'Calcium']
    },
    price: '₹189',
    image: '/images/juices/amla-juice.jpg',
    blogContent: {
      title: 'Amla Juice: The Ancient Indian Superfood Elixir',
      content: [
        'Amla, or Indian gooseberry, has been revered in Ayurvedic medicine for over 5,000 years as a rejuvenating superfood. Often called the "fruit of immortality," amla contains one of the highest concentrations of vitamin C found in any natural food – about 20 times more than an orange!',
        'What makes amla juice particularly special is that its nutritional benefits remain stable even when processed. The vitamin C in amla is bound to tannins that protect it from heat and light degradation, allowing for better preservation of its potent properties. This unique characteristic means that amla juice remains effective as a health supplement even after storage.',
        'Digestive health is one of the primary benefits of amla juice. Regular consumption helps stimulate the secretion of digestive enzymes, improving nutrient absorption and regulating bowel movements. Its high fiber content makes it an excellent remedy for constipation and other digestive issues.',
        'For hair and skin health, amla is considered a miracle fruit. Its high vitamin C content is essential for collagen production, which maintains skin elasticity and prevents premature aging. For hair, amla strengthens follicles, reduces hair fall, prevents premature graying, and adds natural shine. This is why amla oil and amla-based hair treatments have been used in India for centuries.',
        'At Bliss Bay, we prepare our amla juice using a traditional cold extraction method that preserves maximum nutrients. The natural tanginess of amla is balanced with a touch of organic honey, making it more palatable without compromising its health benefits. For those who prefer an extra immunity boost, we offer a variation with a hint of ginger that adds a warming quality perfect for seasonal changes or when feeling under the weather.'
      ]
    }
  }
];

export const getJuiceById = (id: string): JuiceProduct | undefined => {
  return juices.find(juice => juice.id === id);
}; 