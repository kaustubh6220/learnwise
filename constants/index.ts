export const headerLinks = [
    {
      label: 'Home',
      route: '/',
    },
    {
      label: 'Ask',
      route: '/ask',
    },
    {
      label: 'History',
      route: '/history',
    },
    {
      label: 'Credits',
      route: '/credits',
    },
    {
      label: 'My Profile',
      route: '/profile',
    },
  ]
  
  export const eventDefaultValues = {
    title: '',
    description: '',
    location: '',
    imageUrl: '',
    startDateTime: new Date(),
    endDateTime: new Date(),
    categoryId: '',
    price: '',
    isFree: false,
    url: '',
  }