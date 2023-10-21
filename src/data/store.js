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
    twitter: 'https://www.twitter.com/AutoCar/'
  },

  resentArticles: [
    { 
      id: 1201,
      image: 'news-autocar-1-600x359.jpg',
      data: '06.07.2022',
      title: 'Why is BMW loved?',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum doloremque impedit quo delectus, non magni iusto itaque. Qui, tempora nemo.'
    },
    {
      id: 1202,
      image: 'news-autocar-2-600x359.jpg',
      data: '06.07.2022',
      title: 'How solid is Audi?',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum doloremque impedit quo delectus, non magni iusto itaque. Qui, tempora nemo.'
    },
    {
      id: 1203,
      image: 'news-autocar-6-600x359.jpg',
      data: '06.07.2022',
      title: 'What brand is Skoda?',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum doloremque impedit quo delectus, non magni iusto itaque. Qui, tempora nemo.'
    },
    {
      id: 1204,
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
  ]
  
  
})