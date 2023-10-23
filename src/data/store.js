import { reactive } from "vue";

export const store = reactive ({
  autoCar: {
    logo: '../assets/logo/logo-autocar11.png',
    logoFooter: '../assets/logo/logo-footer-autocar11.png',
    address: 'New Jersey, USA',
    phone: '+1(234)567 89 10',
    email: 'example@example.com',
    facebook: 'https://www.facebook.com/AutoCar/',
    instagram: 'https://www.instagram.com/AutoCar/',
    twitter: 'https://www.twitter.com/AutoCar/',
  },

  slider: [
    {
      id: 1101,
      image: 'slider-autocar-5.jpg',
      title: 'Buy And Sell Your Car At Its Value',
      text: 'Find the right price and dealer.',
    },

    {
      id: 1102,
      image: 'slider-autocar-6.jpg',
      title: 'Buy And Sell Your Car At Its Value2',
      text: 'Find the right price and dealer2.',
    }
  ],

  allCategory: ['Cabrio', 'Coupe', 'Hatchback', 'Pick Up', 'Sedan', 'SUV'],


  modelCars: [
    {
      id: 1201,
      brand: 'BMW',
      model: 'M9',
      category: 'Cabrio',
      fuel: 'Electric',
      transmission: 'Auto',
      status: 'km-0',
      price: '34.000',
      img: 'bmw-8-series-convertible-technical-data-sp-desktop-400x300.jpg',
    },
    {
      id: 1202,
      brand: 'BMW',
      model: 'M8',
      category: 'Cabrio',
      fuel: 'Diesel',
      transmission: 'Manual',
      status: 'Used',
      price: '34.000',
      img: 'bmw88-400x300.jpg',
    },
    {
      id: 1203,
      brand: 'BMW',
      model: '4',
      category: 'Cabrio',
      fuel: 'Gasoline',
      transmission: 'Auto',
      status: 'Used',
      price: '34.000',
      img: 'bmw442-400x300.jpg',
    },
    {
      id: 1204,
      brand: 'Seat',
      model: 'Ibiza',
      category: 'Hatchback',
      fuel: 'Electric',
      transmission: 'Manual',
      status: 'km-o',
      price: '27.000',
      img: 'yeni-ibiza-2-400x300.jpg',
    },
    {
      id: 1205,
      brand: 'Seat',
      model: 'Arona',
      category: 'SUV',
      fuel: 'Gasoline',
      transmission: 'Auto',
      status: 'New',
      price: '68.000',
      img: 'makyajli-2022-seat-arona-1-400x300.jpg',
    },
    {
      id: 1206,
      brand: 'Volkswagen',
      model: 'Talgo',
      category: 'SUV',
      fuel: 'Electric',
      transmission: 'Auto',
      status: 'Used',
      price: '52.000',
      img: 'vw-taigo3832-400x300.jpg',
    },
    {
      id: 1207,
      brand: 'Volkswagen',
      model: 'T-Cross',
      category: 'SUV',
      fuel: 'Diesel',
      transmission: 'Manual',
      status: 'Used',
      price: '47.000',
      img: '2019-vw-t-cross-400x300.jpg',
    },
    {
      id: 1208,
      brand: 'Volkswagen',
      model: 'Passat',
      category: 'Sedan',
      fuel: 'Diesel',
      transmission: 'Auto',
      status: 'New',
      price: '32.000',
      img: 'volkswagen-passat-1280x720-1-400x300.jpg',
    }
  ],


  resentArticles: [
    { 
      id: 1301,
      image: 'news-autocar-1-600x359.jpg',
      data: '06.07.2022',
      title: 'Why is BMW loved?',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum doloremque impedit quo delectus, non magni iusto itaque. Qui, tempora nemo.'
    },
    {
      id: 1302,
      image: 'news-autocar-2-600x359.jpg',
      data: '06.07.2022',
      title: 'How solid is Audi?',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum doloremque impedit quo delectus, non magni iusto itaque. Qui, tempora nemo.'
    },
    {
      id: 1303,
      image: 'news-autocar-6-600x359.jpg',
      data: '06.07.2022',
      title: 'What brand is Skoda?',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum doloremque impedit quo delectus, non magni iusto itaque. Qui, tempora nemo.'
    },
    {
      id: 1304,
      image: 'news-autocar-5-600x359.jpg',
      data: '06.07.2022',
      title: 'Is the Auris diesel',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum doloremque impedit quo delectus, non magni iusto itaque. Qui, tempora nemo.'
    }
  ],

  CustomerAutoCar: [
    {
      name: 'Adam',
      photo: 'man1.png',
      text: 'We are a gallery vehicle dealer. Before we met this site, our sales werw sluggish'
    },
    {
      name: 'Cristian',
      photo: 'testimonial2-1.png',
      text: 'One of the quality websites I apply to rent a car. There are hundreds of different tools.'
    },
    {
      name: 'Robert',
      photo: 'man2.png',
      text: 'I was trying to sell my car. And I put it here and sold it for more than it was worth.'
    },
    {
      name: 'Elizabeth',
      photo: 'testimonial4-1.png',
      text: 'A fast and reliable vehicle selling site. Rare quality website with hundreds of model vehicles.'
    }
  ],

  brand: [],
  fuelType: [],
  status: [],
  



  
})