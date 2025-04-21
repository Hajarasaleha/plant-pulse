const sampleProducts = [
  {
    "title": "Organic Urea Fertilizer",
    "price": 450,
    "description": "Boost your crop yield with this nitrogen-rich organic urea.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf7fTUU7PJPu2K2I-JD39FuDDdj613RrDv8A&s",
    "category": "fertilizers"
  },
  {
    "title": "DAP Fertilizer Pack",
    "price": 520,
    "description": "Di-Ammonium Phosphate for quick root development.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf7fTUU7PJPu2K2I-JD39FuDDdj613RrDv8A&s",
    "category": "fertilizers"
  },
  {
    "title": "Compost Manure",
    "price": 300,
    "description": "Pure organic compost made from plant waste and cow dung.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf7fTUU7PJPu2K2I-JD39FuDDdj613RrDv8A&s",
    "category": "fertilizers"
  },
  {
    "title": "Potash Fertilizer",
    "price": 490,
    "description": "Improves fruit quality and enhances plant resistance.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf7fTUU7PJPu2K2I-JD39FuDDdj613RrDv8A&s",
    "category": "fertilizers"
  },
  {
    "title": "Bio-Fertilizer Kit",
    "price": 350,
    "description": "Contains nitrogen-fixing bacteria for soil enrichment.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf7fTUU7PJPu2K2I-JD39FuDDdj613RrDv8A&s",
    "category": "fertilizers"
  },
  {
    "title": "Tomato Hybrid Seeds",
    "price": 150,
    "description": "High-yield tomato seeds for early and strong harvest.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBiob4fD1m7zXgg8imyPs-Lk9sCv2qZt262g&s",
    "category": "seeds"
  },
  {
    "title": "Okra Seeds Pack",
    "price": 130,
    "description": "Premium okra seeds ideal for summer sowing.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBiob4fD1m7zXgg8imyPs-Lk9sCv2qZt262g&s",
    "category": "seeds"
  },
  {
    "title": "Wheat Seeds - Organic",
    "price": 220,
    "description": "100% natural and non-GMO wheat seeds.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBiob4fD1m7zXgg8imyPs-Lk9sCv2qZt262g&s",
    "category": "seeds"
  },
  {
    "title": "Chilli Seeds",
    "price": 160,
    "description": "Spicy hybrid chili seeds for home and commercial use.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBiob4fD1m7zXgg8imyPs-Lk9sCv2qZt262g&s",
    "category": "seeds"
  },
  {
    "title": "Sunflower Seeds",
    "price": 140,
    "description": "Fast-germinating, drought-resistant sunflower seeds.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBiob4fD1m7zXgg8imyPs-Lk9sCv2qZt262g&s",
    "category": "seeds"
  },
  {
    "title": "Money Plant",
    "price": 250,
    "description": "Easy-to-grow indoor plant that brings luck.",
    "image": "https://rukminim2.flixcart.com/image/850/1000/kh0vonk0/plant-sapling/2/t/g/rsplantoj-226-1-ojorey-original-imafx4yyhhvpma9x.jpeg?q=90&crop=false",
    "category": "plants"
  },
  {
    "title": "Tulsi (Holy Basil) Plant",
    "price": 180,
    "description": "Aromatic and medicinal plant with religious importance.",
    "image": "https://rukminim2.flixcart.com/image/850/1000/kh0vonk0/plant-sapling/2/t/g/rsplantoj-226-1-ojorey-original-imafx4yyhhvpma9x.jpeg?q=90&crop=false",
    "category": "plants"
  },
  {
    "title": "Aloe Vera Plant",
    "price": 200,
    "description": "Multipurpose plant with medicinal and skincare use.",
    "image": "https://rukminim2.flixcart.com/image/850/1000/kh0vonk0/plant-sapling/2/t/g/rsplantoj-226-1-ojorey-original-imafx4yyhhvpma9x.jpeg?q=90&crop=false",
    "category": "plants"
  },
  {
    "title": "Mango Sapling",
    "price": 300,
    "description": "Grafted mango tree that bears fruit in 2 years.",
    "image": "https://rukminim2.flixcart.com/image/850/1000/kh0vonk0/plant-sapling/2/t/g/rsplantoj-226-1-ojorey-original-imafx4yyhhvpma9x.jpeg?q=90&crop=false",
    "category": "plants"
  },
  {
    "title": "Guava Sapling",
    "price": 270,
    "description": "Healthy guava plant ready for transplanting.",
    "image": "https://rukminim2.flixcart.com/image/850/1000/kh0vonk0/plant-sapling/2/t/g/rsplantoj-226-1-ojorey-original-imafx4yyhhvpma9x.jpeg?q=90&crop=false",
    "category": "plants"
  },
  {
    "title": "Hand Hoe",
    "price": 110,
    "description": "Durable steel hand hoe for removing weeds and tilling.",
    "image": "https://i.pinimg.com/736x/66/99/46/66994662c12bebbcd777f72c89955b8a.jpg",
    "category": "agricultural tools"
  },
  {
    "title": "Garden Trowel",
    "price": 90,
    "description": "Handheld trowel ideal for digging and planting.",
    "image": "https://i.pinimg.com/736x/66/99/46/66994662c12bebbcd777f72c89955b8a.jpg",
    "category": "agricultural tools"
  },
  {
    "title": "Iron Spade",
    "price": 350,
    "description": "Heavy-duty spade for digging and turning soil.",
    "image": "https://i.pinimg.com/736x/66/99/46/66994662c12bebbcd777f72c89955b8a.jpg",
    "category": "agricultural tools"
  },
  {
    "title": "Weeder Tool",
    "price": 220,
    "description": "Efficient weeder tool for rice and vegetable farming.",
    "image": "https://i.pinimg.com/736x/66/99/46/66994662c12bebbcd777f72c89955b8a.jpg",
    "category": "agricultural tools"
  },
  {
    "title": "Garden Rake",
    "price": 260,
    "description": "Helps in leveling and removing debris from the soil.",
    "image": "https://i.pinimg.com/736x/66/99/46/66994662c12bebbcd777f72c89955b8a.jpg",
    "category": "agricultural tools"
  },
  {
    "title": "Drip Irrigation Kit",
    "price": 1200,
    "description": "Complete kit for 50 plants with pipes and nozzles.",
    "image": "https://5.imimg.com/data5/SELLER/Default/2021/4/ZO/OQ/AH/62502862/garden-equipment-500x500.jpg",
    "category": "irrigation tools"
  },
  {
    "title": "Manual Watering Can",
    "price": 150,
    "description": "Plastic watering can with 5-liter capacity.",
    "image": "https://5.imimg.com/data5/SELLER/Default/2021/4/ZO/OQ/AH/62502862/garden-equipment-500x500.jpg",
    "category": "irrigation tools"
  },
  {
    "title": "Sprinkler Head Set",
    "price": 320,
    "description": "Rotating head sprinkler set for uniform water spray.",
    "image": "https://5.imimg.com/data5/SELLER/Default/2021/4/ZO/OQ/AH/62502862/garden-equipment-500x500.jpg",
    "category": "irrigation tools"
  },
  {
    "title": "Irrigation Timer",
    "price": 450,
    "description": "Automatic timer for scheduled irrigation cycles.",
    "image": "https://5.imimg.com/data5/SELLER/Default/2021/4/ZO/OQ/AH/62502862/garden-equipment-500x500.jpg",
    "category": "irrigation tools"
  },
  {
    "title": "Neem Cake Fertilizer",
    "price": 380,
    "description": "Eco-friendly pest control and soil conditioner.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf7fTUU7PJPu2K2I-JD39FuDDdj613RrDv8A&s",
    "category": "fertilizers"
  },
  {
    "title": "Bone Meal Organic Fertilizer",
    "price": 420,
    "description": "Phosphorus-rich fertilizer for flowering plants.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf7fTUU7PJPu2K2I-JD39FuDDdj613RrDv8A&s",
    "category": "fertilizers"
  },
  {
    "title": "Groundnut Cake",
    "price": 320,
    "description": "Rich in nitrogen and organic matter.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf7fTUU7PJPu2K2I-JD39FuDDdj613RrDv8A&s",
    "category": "fertilizers"
  },
  {
    "title": "Papaya Seeds",
    "price": 200,
    "description": "High-quality, fast-germinating hybrid seeds.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBiob4fD1m7zXgg8imyPs-Lk9sCv2qZt262g&s",
    "category": "seeds"
  },
  {
    "title": "Brinjal Seeds",
    "price": 140,
    "description": "Round brinjal seeds suitable for all soils.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBiob4fD1m7zXgg8imyPs-Lk9sCv2qZt262g&s",
    "category": "seeds"
  },
  {
    "title": "Curry Leaf Plant",
    "price": 210,
    "description": "Aromatic leaf plant used in Indian cooking.",
    "image": "https://rukminim2.flixcart.com/image/850/1000/kh0vonk0/plant-sapling/2/t/g/rsplantoj-226-1-ojorey-original-imafx4yyhhvpma9x.jpeg?q=90&crop=false",
    "category": "plants"
  },
  {
    "title": "Lemon Sapling",
    "price": 260,
    "description": "Grafted lemon plant suitable for containers.",
    "image": "https://rukminim2.flixcart.com/image/850/1000/kh0vonk0/plant-sapling/2/t/g/rsplantoj-226-1-ojorey-original-imafx4yyhhvpma9x.jpeg?q=90&crop=false",
    "category": "plants"
  },
  {
    "title": "Watering Hose",
    "price": 550,
    "description": "Flexible and durable hose for garden watering.",
    "image": "https://5.imimg.com/data5/SELLER/Default/2021/4/ZO/OQ/AH/62502862/garden-equipment-500x500.jpg",
    "category": "irrigation tools"
  },
  {
    "title": "Seedling Tray",
    "price": 160,
    "description": "Reusable plastic tray for seed germination.",
    "image": "https://i.pinimg.com/736x/66/99/46/66994662c12bebbcd777f72c89955b8a.jpg",
    "category": "agricultural tools"
  },
  {
    "title": "Mini Cultivator Tool",
    "price": 180,
    "description": "Handheld tool for loosening soil in pots.",
    "image": "https://i.pinimg.com/736x/66/99/46/66994662c12bebbcd777f72c89955b8a.jpg",
    "category": "agricultural tools"
  },
  {
    "title": "Bottle Gourd Seeds",
    "price": 170,
    "description": "Quick-growing seeds ideal for summer sowing.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBiob4fD1m7zXgg8imyPs-Lk9sCv2qZt262g&s",
    "category": "seeds"
  },
  {
    "title": "Pumpkin Seeds",
    "price": 190,
    "description": "Rich in vitamins and easy to grow.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBiob4fD1m7zXgg8imyPs-Lk9sCv2qZt262g&s",
    "category": "seeds"
  },
  {
    "title": "Rose Plant",
    "price": 280,
    "description": "Beautiful red rose plant for garden or pot.",
    "image": "https://rukminim2.flixcart.com/image/850/1000/kh0vonk0/plant-sapling/2/t/g/rsplantoj-226-1-ojorey-original-imafx4yyhhvpma9x.jpeg?q=90&crop=false",
    "category": "plants"
  },
  {
    "title": "Spinach Seeds",
    "price": 110,
    "description": "Nutritious leafy green, fast to harvest.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBiob4fD1m7zXgg8imyPs-Lk9sCv2qZt262g&s",
    "category": "seeds"
  },
  {
    "title": "PVC Garden Sprayer",
    "price": 390,
    "description": "Manual sprayer for pest control and watering.",
    "image": "https://5.imimg.com/data5/SELLER/Default/2021/4/ZO/OQ/AH/62502862/garden-equipment-500x500.jpg",
    "category": "irrigation tools"
  }
];

module.exports = { data: sampleProducts };