// products.js - Master Catalog List

const productsData = [
  {
    id: 1,
    name: "Amla Idli Podi",
    tamilName: "",
    price: 90,
    weight: "100g",
    tag: "VEG", // "VEG" or "NON-VEG"
    category: "Podi", // <--- Added category
    image: "photos/amla_idli_podi.png",
    usage: [
      "Always use a clean, dry spoon.",
      "Keep top layer submerged in oil.",
      "Store in a cool dry place. Refrigerate once opened."
    ],
    pairings: "Delicious with Idly, Dosa, Chapathi, Hot Curd Rice & Biryani.",
    ingredients: "Garlic, Refined Oil, Ginger-Garlic Paste, Onion-Tomato Paste, Red Chilli Powder, Tamarind Puree, Turmeric, Asafoetida, Mustard, Cumin, Fenugreek, Citric Acid, Salt."
  },
  {
    id: 2,
    name: "Avarampoo Podi",
    tamilName: "",
    price: 180,
    weight: "100g",
    tag: "VEG",
    category: "Podi",
    image: "photos/avarampoo_podi.png",
    usage: [
      "Avoid damp utensils to prevent moisture.",
      "Keep tightly closed in a cool, dark kitchen cabinet."
    ],
    pairings: "Piping hot steamed rice with ghee, Sambar Rice, or crisp Dosa.",
    ingredients: "Raw Mango Chunks, Cold-Pressed Mustard Oil, Red Chilli Powder, Mustard Seeds, Fenugreek, Asafoetida, Salt."
  },
  {
    id: 3,
    name: "Karuppu Kavuni Rice Health Mix",
    tamilName: "சிக்கன் ஊறுகாய்",
    price: 230,
    weight: "250g",
    tag: "VEG",
    category: "Podi",
    image: "photos/karuppu_kavuni_rice_health_mix.png",
    usage: [
      "Keep refrigerated after opening for max freshness.",
      "Ensure zero water contact inside the jar."
    ],
    pairings: "Jeera Rice, Naan, Parottas, Curd Rice, or eaten directly as an appetizer.",
    ingredients: "Fresh Boneless Farm Chicken, Hand-ground Garam Masala, Ginger-Garlic, Gingelly Oil, Lemon Juice, Chilli Flakes."
  },
  {
    id: 4,
    name: "Karuveppilai Podi",
    tamilName: "இட்லி மிளகாய் பொடி",
    price: 90,
    weight: "100g",
    tag: "VEG",
    category: "Podi",
    image: "photos/karuveppilai_podi.png",
    usage: [
      "Mix with warm Gingelly Oil or melted Ghee.",
      "Keep jar sealed to preserve roasted aroma."
    ],
    pairings: "Hot Idlis, Soft Dosa, Uthappam, or sprinkled inside Parathas.",
    ingredients: "Roasted Urad Dal, Chana Dal, Dry Red Chillies, Sesame Seeds, Asafoetida, Curry Leaves, Salt."
  },

{
    id: 5,
    name: "Mudakathan Podi",
    tamilName: "இட்லி மிளகாய் பொடி",
    price: 150,
    weight: "200g",
    tag: "VEG",
    category: "Podi",
    image: "photos/mudakathan_podi.png",
    usage: [
      "Mix with warm Gingelly Oil or melted Ghee.",
      "Keep jar sealed to preserve roasted aroma."
    ],
    pairings: "Hot Idlis, Soft Dosa, Uthappam, or sprinkled inside Parathas.",
    ingredients: "Roasted Urad Dal, Chana Dal, Dry Red Chillies, Sesame Seeds, Asafoetida, Curry Leaves, Salt."
  },

  {
    id: 6,
    name: "Murunkai Podi",
    tamilName: "இட்லி மிளகாய் பொடி",
    price: 150,
    weight: "200g",
    tag: "VEG",
    category: "Podi",
    image: "photos/murunkai_podi.png",
    usage: [
      "Mix with warm Gingelly Oil or melted Ghee.",
      "Keep jar sealed to preserve roasted aroma."
    ],
    pairings: "Hot Idlis, Soft Dosa, Uthappam, or sprinkled inside Parathas.",
    ingredients: "Roasted Urad Dal, Chana Dal, Dry Red Chillies, Sesame Seeds, Asafoetida, Curry Leaves, Salt."
  },

    {
    id: 7,
    name: "Paruppu Podi",
    tamilName: "இட்லி மிளகாய் பொடி",
    price: 150,
    weight: "200g",
    tag: "VEG",
    category: "Podi",
    image: "photos/paruppu_podi.png",
    usage: [
      "Mix with warm Gingelly Oil or melted Ghee.",
      "Keep jar sealed to preserve roasted aroma."
    ],
    pairings: "Hot Idlis, Soft Dosa, Uthappam, or sprinkled inside Parathas.",
    ingredients: "Roasted Urad Dal, Chana Dal, Dry Red Chillies, Sesame Seeds, Asafoetida, Curry Leaves, Salt."
  },
    {
    id: 8,
    name: "Pirandai Podi",
    tamilName: "இட்லி மிளகாய் பொடி",
    price: 150,
    weight: "200g",
    tag: "VEG",
    category: "Podi",
    image: "photos/pirandai_podi.png",
    usage: [
      "Mix with warm Gingelly Oil or melted Ghee.",
      "Keep jar sealed to preserve roasted aroma."
    ],
    pairings: "Hot Idlis, Soft Dosa, Uthappam, or sprinkled inside Parathas.",
    ingredients: "Roasted Urad Dal, Chana Dal, Dry Red Chillies, Sesame Seeds, Asafoetida, Curry Leaves, Salt."
  },
{
    id: 9,
    name: "Thoothcalai Podi",
    tamilName: "இட்லி மிளகாய் பொடி",
    price: 150,
    weight: "200g",
    tag: "VEG",
    category: "Podi",
    image: "photos/thoothcalai_podi.png",
    usage: [
      "Mix with warm Gingelly Oil or melted Ghee.",
      "Keep jar sealed to preserve roasted aroma."
    ],
    pairings: "Hot Idlis, Soft Dosa, Uthappam, or sprinkled inside Parathas.",
    ingredients: "Roasted Urad Dal, Chana Dal, Dry Red Chillies, Sesame Seeds, Asafoetida, Curry Leaves, Salt."
  },

{
    id: 10,
    name: "Ulundhu Kanji Mix",
    tamilName: "இட்லி மிளகாய் பொடி",
    price: 150,
    weight: "200g",
    tag: "VEG",
    category: "Podi",
    image: "photos/ulundhu_kanji_mix.png",
    usage: [
      "Mix with warm Gingelly Oil or melted Ghee.",
      "Keep jar sealed to preserve roasted aroma."
    ],
    pairings: "Hot Idlis, Soft Dosa, Uthappam, or sprinkled inside Parathas.",
    ingredients: "Roasted Urad Dal, Chana Dal, Dry Red Chillies, Sesame Seeds, Asafoetida, Curry Leaves, Salt."
  },

  {
    id: 11,
    name: "Vallarai Podi",
    tamilName: "இட்லி மிளகாய் பொடி",
    price: 150,
    weight: "200g",
    tag: "VEG",
    category: "Podi",
    image: "photos/vallarai_podi.png",
    usage: [
      "Mix with warm Gingelly Oil or melted Ghee.",
      "Keep jar sealed to preserve roasted aroma."
    ],
    pairings: "Hot Idlis, Soft Dosa, Uthappam, or sprinkled inside Parathas.",
    ingredients: "Roasted Urad Dal, Chana Dal, Dry Red Chillies, Sesame Seeds, Asafoetida, Curry Leaves, Salt."
  },

   {
    id: 12,
    name: "Vathanatyanan Podi",
    tamilName: "இட்லி மிளகாய் பொடி",
    price: 150,
    weight: "200g",
    tag: "VEG",
    category: "Podi",
    image: "photos/vathanatyanan_podi.png",
    usage: [
      "Mix with warm Gingelly Oil or melted Ghee.",
      "Keep jar sealed to preserve roasted aroma."
    ],
    pairings: "Hot Idlis, Soft Dosa, Uthappam, or sprinkled inside Parathas.",
    ingredients: "Roasted Urad Dal, Chana Dal, Dry Red Chillies, Sesame Seeds, Asafoetida, Curry Leaves, Salt."
  },

   {
    id: 13,
    name: "Citron Pickle",
    tamilName: "இட்லி மிளகாய் பொடி",
    price: 150,
    weight: "200g",
    tag: "VEG",
    category: "Pickle",
    image: "photos/citron_pickle.png",
    usage: [
      "Mix with warm Gingelly Oil or melted Ghee.",
      "Keep jar sealed to preserve roasted aroma."
    ],
    pairings: "Hot Idlis, Soft Dosa, Uthappam, or sprinkled inside Parathas.",
    ingredients: "Roasted Urad Dal, Chana Dal, Dry Red Chillies, Sesame Seeds, Asafoetida, Curry Leaves, Salt."
  },

    {
    id: 14,
    name: "Garlic Pickle",
    tamilName: "இட்லி மிளகாய் பொடி",
    price: 150,
    weight: "200g",
    tag: "VEG",
    category: "Pickle",
    image: "photos/garlic_pickle.png",
    usage: [
      "Mix with warm Gingelly Oil or melted Ghee.",
      "Keep jar sealed to preserve roasted aroma."
    ],
    pairings: "Hot Idlis, Soft Dosa, Uthappam, or sprinkled inside Parathas.",
    ingredients: "Roasted Urad Dal, Chana Dal, Dry Red Chillies, Sesame Seeds, Asafoetida, Curry Leaves, Salt."
  },

    {
    id: 15,
    name: "Prawn Pickle",
    tamilName: "இட்லி மிளகாய் பொடி",
    price: 150,
    weight: "200g",
    tag: "NON-VEG",
    category: "Pickle",
    image: "photos/prawn_pickle.png",
    usage: [
      "Mix with warm Gingelly Oil or melted Ghee.",
      "Keep jar sealed to preserve roasted aroma."
    ],
    pairings: "Hot Idlis, Soft Dosa, Uthappam, or sprinkled inside Parathas.",
    ingredients: "Roasted Urad Dal, Chana Dal, Dry Red Chillies, Sesame Seeds, Asafoetida, Curry Leaves, Salt."
  },

];
