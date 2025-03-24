const tours = [
    {
      image: "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/3b/88/43.jpg",
      title: "Golden Triangle Tour - Delhi",
      location: "Delhi",
      totalDay: 5,
      cities: ["Delhi(2N)", "Agra(1N)", "Jaipur(2N)"],
      cost: 75000,
      highlight: [
        "Visit Taj Mahal",
        "Qutub Minar Tour",
        "Amber Fort in Jaipur",
        "City Palace",
        "Fatehpur Sikri"
      ]
    },
    {
      image: "https://www.keralatourism.org/images/microsites/kochi/kochi-1024x768.jpg",
      title: "Backwaters of Kerala - Kochi",
      location: "Kochi",
      totalDay: 7,
      cities: ["Kochi(1N)", "Munnar(2N)", "Thekkady(1N)", "Alleppey(2N)"],
      cost: 85000,
      highlight: [
        "Houseboat Stay in Alleppey",
        "Tea Plantations in Munnar",
        "Periyar Wildlife Sanctuary",
        "Kathakali Dance Performance",
        "Spice Garden Tour"
      ]
    },
    {
      image: "https://www.incredibleindia.gov.in/content/dam/incredible-india/images/trips/rajasthan/jaipur/a-royal-jaipur-escapade/amber-fort-jaipur-rajasthan-tri-iter-day1.jpg",
      title: "Rajasthan Royal Experience - Jaipur",
      location: "Jaipur",
      totalDay: 8,
      cities: ["Jaipur(2N)", "Jodhpur(2N)", "Udaipur(2N)", "Pushkar(1N)"],
      cost: 110000,
      highlight: [
        "Hawa Mahal",
        "Mehrangarh Fort",
        "Lake Pichola",
        "Pushkar Camel Fair",
        "City Palace Udaipur"
      ],
    },
    {
      image: "https://www.indiasinvitation.com/wp-content/uploads/2023/04/ghats-.jpeg",
      title: "Spiritual Journey - Varanasi",
      location: "Varanasi",
      totalDay: 4,
      cities: ["Varanasi(3N)", "Sarnath(1N)"],
      cost: 50000,
      highlight: [
        "Ganga Aarti at Dashashwamedh Ghat",
        "Sarnath Buddhist Stupas",
        "Boat Ride on Ganges",
        "Kashi Vishwanath Temple",
        "Local Street Food Tour"
      ]
    },
    {
      image: "https://www.agoda.com/wp-content/uploads/2024/07/Goa-India.jpg",
      title: "Goa Beach Escape - Goa",
      location: "Goa",
      totalDay: 5,
      cities: ["North Goa(2N)", "South Goa(2N)"],
      cost: 60000,
      highlight: [
        "Calangute Beach",
        "Dudhsagar Falls",
        "Fort Aguada",
        "Anjuna Flea Market",
        "Seafood Dinner Cruise"
      ]
    },
    {
      image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/351327693.jpg?k=321a062dbca0adc3d513a4cad85f9a235f1d027e720ce36ab4ecafd97eee1c42&o=&hp=1",
      title: "Himalayan Adventure - Manali",
      location: "Manali",
      totalDay: 6,
      cities: ["Manali(3N)", "Solang Valley(1N)", "Rohtang Pass(1N)", "Kasol(1N)"],
      cost: 70000,
      highlight: [
        "Rohtang Pass Snow Point",
        "Solang Valley Adventure Sports",
        "Hidimba Devi Temple",
        "Parvati Valley Trek",
        "Hot Springs at Manikaran"
      ]
    },
    {
      image: "https://www.shutterstock.com/image-photo/beautiful-view-colorful-gopura-hindu-600nw-510248776.jpg",
      title: "Cultural Heritage of Tamil Nadu - Chennai",
      location: "Chennai",
      totalDay: 7,
      cities: ["Chennai(2N)", "Mahabalipuram(1N)", "Pondicherry(2N)", "Tanjore(1N)"],
      cost: 80000,
      highlight: [
        "Marina Beach",
        "Mahabalipuram Shore Temple",
        "Auroville Ashram",
        "Brihadeeswara Temple",
        "French Colony in Pondicherry"
      ]
    },
    {
      image: "https://res.cloudinary.com/enchanting/image/upload/v1/artemis-mdm/places/d6916705-8d97-4a14-adba-c4c460781ad2.jpg",
      title: "Wildlife Safari - Ranthambore",
      location: "Ranthambore",
      totalDay: 4,
      cities: ["Ranthambore(3N)"],
      cost: 55000,
      highlight: [
        "Ranthambore National Park Safari",
        "Tiger Spotting",
        "Ranthambore Fort",
        "Bird Watching",
        "Local Village Tour"
      ]
    },
    {
      image: "https://www.bruisedpassports.com/wp-content/uploads/2016/07/Leh-Ladakh-Road-Trip-India-Itinerary-Planning-150.jpg",
      title: "Ladakh Road Trip - Leh",
      location: "Leh",
      totalDay: 8,
      cities: ["Leh(3N)", "Nubra Valley(2N)", "Pangong Lake(2N)"],
      cost: 120000,
      highlight: [
        "Pangong Lake Camping",
        "Nubra Valley Camel Ride",
        "Magnetic Hill",
        "Leh Palace",
        "Khardung La Pass"
      ]
    },
    {
      image: "https://www.andamantourism.org/wp-content/uploads/2019/09/port-blair.jpg",
      title: "Andaman Island Getaway - Port Blair",
      location: "Port Blair",
      totalDay: 6,
      cities: ["Port Blair(2N)", "Havelock Island(3N)"],
      cost: 95000,
      highlight: [
        "Cellular Jail Light Show",
        "Radhanagar Beach",
        "Scuba Diving at Havelock",
        "Ross Island Tour",
        "Elephant Beach Snorkeling"
      ]
    },
    {
      image : "https://img.veenaworld.com/group-tours/india/jammu-and-kashmir/jkhlp/jkhlp-bnn-JKHLP-2952023.jpg",
      title : "Highlights of Kashmir - Pune",
      location : "Pune",
      totalDay : 6,
      cities : ["Srinagar(1N)","Pahalgam(1N)","Srinagar(3N)","Gulmarg"], 
      cost : 90000,
      highlight : ["Srinagar Houseboat Stay","Avantipur ruins","Walk & Click tour of Betaab valley","Kashmiri Cricket Bat Factory","Gondola ride at Gulmarg","Shikara and Speed boat ride at Dal Lake","Kashmiri gardens - Shalimar & Nishat Bagh"]
    }
  ];

  
  export default tours;