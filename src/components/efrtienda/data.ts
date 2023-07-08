import { IMenuOption } from "../shared/navbar/data"

export const URL_PRODUCTS = 'https://strapi-demo-cq3k.onrender.com/api/products?populate=*'
export const URL_CATEGORIES = 'https://strapi-demo-cq3k.onrender.com/api/categories?populate=*'

export const CURRENCIES = {
  pen: {
    code: 'PEN',
    symbol: 'S/.'
  },
  usd: {
    code: 'USD',
    symbol: 'US$'
  }
}

export const whatsappData = {
  phone: '51965077459',
  msg: ``
}

export const aboutDetails = [
    {
      item: '1',
      title: 'Experiencia',
      detail: 'Somos profesionales con más de 22 años de experiencia en implantar soluciones tecnológicas acorde a las necesidades de nuestros clientes.'
    },
    {
      item: '2',
      title: 'Tecnología',
      detail: 'A la vanguardia en el desarrollo e integración de productos y soluciones de captura automatizada de información mediante: códigos de barra, códigos QR, biometría para asistencia y acceso, inventarios patrimoniales y de almacén, identificación, video vigilancia y desarrollo a la medida mobile, web ó PC.'
    },
    {
      item: '3',
      title: 'Soluciones',
      detail: 'Brindamos soluciones comerciales y servicios para:',
      detailItems: [
        'Controlar la asistencia de su personal',
        'Inventario de sus activos fijos, bienes muebles y almacenes',
        'Software para gestión de sus Activos Fijos',
        'Controlar el acceso del personal y video vigilancia',
        'Equipos para punto de venta',
        'Desarrollo de Software a Medida',
      ]
    },
  
  ]


  export const navigationMenu:IMenuOption[] = [
    {
      name: 'Productos',
      href: '/pokemon',
      title: 'Productos',
      description: 'Listado de pokemones y sus habilidades',
      detail:'Obtiene datos de la Api PokeApi',
      image:'pokemon1.png',
      isProject:false,
      childs: [
        {
          title:'Pistolas',
          href: '/pokemon'
        },
        {
          title:'Relojes',
          href: '/pokemons/list-serv/'
        },
      ]
    },
    {
      name: 'About',
      href: '#about',
      title: 'About',
      description: 'Listado de Lanzamientos de SpaceX',
      detail:'Obtiene datos de su Api pública.',
      image:'spacex4.jpg',
      isProject:true,
    },
  ]
