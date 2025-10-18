export interface Product {
  id: string;
  name: string;
  description: string;
  category: 'industrial' | 'comercial';
  image: string;
  presentation: string;
  humidity: string;
  brand: string;
  featured?: boolean;
}

export const products: Product[] = [
  // Productos Industriales
  {
    id: 'salina-industrial-fina-yodada',
    name: 'SALINA SAL INDUSTRIAL SECA FINA YODADA',
    description: 'Sal de mar fina yodada para uso en la industria alimentaria.',
    category: 'industrial',
    image: '/assets/products/IMG-20250925-WA0087.jpg',
    presentation: 'Saco de 50Kg (20" x 33" blanco)',
    humidity: 'Max. 0.5%',
    brand: 'SALINA',
    featured: true
  },
  {
    id: 'salina-extra-fina-yodo',
    name: 'SAL INDUSTRIAL SALINA EXTRA FINA CON YODO',
    description: 'Sal de alta solubilidad y pureza, libre de materias extrañas, con mínimo contenido de insolubles. Sus cristales extra finos y uniformes facilitan su dosificación y rápida dilución para la elaboración de salmueras u otras aplicaciones en la industria alimentaria.',
    category: 'industrial',
    image: '/assets/products/SAL INDUSTRIAL SALINA EXTRA FINA CON YODO.jpg',
    presentation: 'Saco de 50 y 25 Kg',
    humidity: 'Max. 0.5%',
    brand: 'SALINA'
  },
  {
    id: 'sal-grano-seco',
    name: 'SAL DE GRANO SECO',
    description: 'Sal de cristales medianos y homogéneos, sin aditivos, higroscópica y soluble en agua. Usada en la industria en general, especialmente en la textil, para obtener colores más intensos y homogéneos. También es usada en las curtidurías como conservante y para restarles humedad a las pieles.',
    category: 'industrial',
    image: '/assets/products/SAL DE GRANO SECO.jpg',
    presentation: 'Saco de 50 y 25 Kg',
    humidity: 'Max. 0.5%',
    brand: 'SALINA'
  },
  {
    id: 'salina-fina-sin-yodo',
    name: 'SAL INDUSTRIAL SALINA FINA SIN YODO',
    description: 'Sal libre de materias extrañas, de granulometría fina y uniforme que facilita su dosificación. No presenta el micronutriente Yodo, por ello es exclusivamente de uso industrial, muy adecuada para optimizar procesos productivos y lograr una mayor eficiencia en equipos y procesos.',
    category: 'industrial',
    image: '/assets/products/IMG-20250925-WA0085.jpg',
    presentation: 'Saco de 50 y 25 Kg',
    humidity: 'Max. 0.5%',
    brand: 'SALINA'
  },
  {
    id: 'salina-para-pesca',
    name: 'SAL INDUSTRIAL SALINA PARA PESCA',
    description: 'Sal libre de materias extrañas, con mínimo contenido de insolubles. En cristales homogéneos que permiten aplicar perfectamente la técnica del salado para conservar al pescado. Utilizada como preservante en la industria pesquera.',
    category: 'industrial',
    image: '/assets/products/SALINA SAL PARA PESCA SECA.jpg',
    presentation: 'Saco de 50 y 25 Kg',
    humidity: 'Max. 0.5%',
    brand: 'SALINA'
  },
  {
    id: 'costenita-para-pesca',
    name: 'SAL COSTEÑITA PARA PESCA',
    description: 'Sal de pesca mediano y homogéneo, higroscópica, libre de materias extrañas y/o contaminantes. Destinada principalmente a la industria pesquera y otros procesos relacionados.',
    category: 'industrial',
    image: '/assets/products/IMG-20250925-WA0093.jpg',
    presentation: 'Saco de 50 y 25 Kg',
    humidity: 'Max. 2.5%',
    brand: 'COSTEÑITA'
  },
  {
    id: 'costenita-en-grano',
    name: 'SAL COSTEÑITA EN GRANO',
    description: 'Sal grano grande higroscópica, húmedo, libre de materias extrañas. Sal que conserva sus características integras de extracción, 100% natural, pasando solo por el proceso de extracción, lavado y estricta limpieza, obteniéndose cristales puros y cristalinos. Usada a nivel industrial, para tratamiento de aguas, hielo y otros procesos industriales en general.',
    category: 'industrial',
    image: '/assets/products/IMG-20250925-WA0096.jpg',
    presentation: 'Saco de 50 y 25 Kg',
    humidity: 'Max. 2.5%',
    brand: 'COSTEÑITA'
  },
  {
    id: 'costenita-industrial-fina',
    name: 'SAL INDUSTRIAL COSTEÑITA FINA',
    description: 'Sal fina, higroscópica y libre de materias extrañas. Sal industrial usada en la elaboración de los concentrados y/o como suplemento mineral que completa el desarrollo de los animales, su granulometría fina permite una mezcla homogénea y rápida disolución.',
    category: 'industrial',
    image: '/assets/products/IMG-20250925-WA0094.jpg',
    presentation: 'Saco de 50 y 25 Kg',
    humidity: 'Max. 2.5%',
    brand: 'COSTEÑITA'
  },
  {
    id: 'bloques-sal-yodada',
    name: 'BLOQUES DE SAL REFINADA YODADA',
    description: 'Bloque de sal 100% Natural, de 10kg y 15 kg, sin adición de químicos, que proporciona a los animales un porcentaje de minerales y oligoelementos que son de gran valor nutricional para la alimentación animal, compensan las deficiencias de sus dietas alimenticias, sobre todo cuando están en régimen de pastoreo o bien cuando han sido sometidos a elevadas producciones.',
    category: 'industrial',
    image: '/assets/products/SAL COSTEÑITA REFINADA YODADA.jpg',
    presentation: '10 Kg. y 15 Kg',
    humidity: 'Max. 2.5%',
    brand: 'COSTEÑITA'
  },
  {
    id: 'costenita-refinada-yodada',
    name: 'SAL COSTEÑITA REFINADA YODADA',
    description: 'Sal refinada y fortificada con el micronutriente yodo, higroscópica y libre de materias extrañas. Usada en la industria alimentaria, en etapas especiales del proceso productivo.',
    category: 'industrial',
    image: '/assets/products/IMG-20250925-WA0091.jpg',
    presentation: 'Saco de 50 y 25 Kg',
    humidity: 'Max. 2.5%',
    brand: 'COSTEÑITA'
  },
  {
    id: 'costenita-uso-industrial',
    name: 'SAL COSTEÑITA PARA USO INDUSTRIAL',
    description: 'Sal grano fino higroscópica, húmedo, libre de materias extrañas. Sal que conserva sus características integras de extracción, 100% natural, pasando solo por el proceso de extracción, lavado y estricta limpieza, obteniéndose cristales puros y cristalinos. Usada para uso industrial.',
    category: 'industrial',
    image: '/assets/products/SAL COSTEÑITA PARA USO INDUSTRIAL.jpg',
    presentation: 'Saco de 50 y 25 Kg',
    humidity: 'Max. 2.5%',
    brand: 'COSTEÑITA'
  },
  {
    id: 'salina-pesca-seca',
    name: 'SALINA SAL PARA PESCA SECA',
    description: 'Sal de mar para uso en la industria alimentaria, específicamente para la conservación de pesca seca.',
    category: 'industrial',
    image: '/assets/products/IMG-20250925-WA0086.jpg',
    presentation: 'Saco de 20" x 33" (blanco), 50 Kg',
    humidity: 'Max. 0.5%',
    brand: 'SALINA'
  },

  // Productos para Consumo Humano
  {
    id: 'sal-de-mesa',
    name: 'SAL DE MESA',
    description: 'Solido blanco, higroscópica, altamente soluble en agua, libre de materias extrañas y fortificada con el micronutriente yodo. Por su granulometría fina se usa en los saleros encima de la mesa facilitando su dosificación en alimentos ya cocidos, permitiendo resaltar el sabor de las comidas.',
    category: 'comercial',
    image: '/assets/products/SALINA SAL YODADA PARA MESA.jpg',
    presentation: 'Bolsa de 1 Kg. - 1/2 Kg',
    humidity: 'Max. 0.02%',
    brand: 'SALINA',
    featured: true
  },
  {
    id: 'sal-de-cocina',
    name: 'SAL DE COCINA',
    description: 'Solido blanco, higroscópica, soluble en agua, libre de materias extrañas y fortificada con el micronutriente yodo. Usada diariamente en la cocina para guisar, cocinar y preparar los alimentos, permitiendo resaltar el sabor de las comidas.',
    category: 'comercial',
    image: '/assets/products/SALINA SAL YODADA PARA COCINA.jpg',
    presentation: 'Bolsa de 1 Kg. - 1/2 Kg',
    humidity: 'Max. 0.02%',
    brand: 'SALINA'
  },
  {
    id: 'sal-parrillera',
    name: 'SAL PARRILLERA',
    description: 'Sal de granulometría grande, presentada en un práctico, hermético y cómodo envase con tapa dosificadora, de uso al lado de la parrilla. Los gruesos cristales permiten dosificar mejor la sal, no sala en exceso y realzar aún más el sabor de las carnes blancas y rojas preparadas en parrilla o al horno, conservando su jugosidad.',
    category: 'comercial',
    image: '/assets/product-placeholder.svg',
    presentation: 'Bolsa/box (1 Kg) y salero cilíndrico',
    humidity: 'Max. 0.02%',
    brand: 'SALINA'
  },
  {
    id: 'sal-salina-gruesa',
    name: 'SAL SALINA GRUESA',
    description: 'Sal de mar de grano grueso, blanco, higroscópica, soluble en agua, libre de contaminantes y materias extrañas, altamente seleccionada, sin aditivos, 100% natural. Presentada en envase salero de 500 gr ergonómico que en su tapa posee un molinillo de fácil manejo manual permitiendo obtener la sal de granulometría al gusto del consumidor; como condimento y usos en general.',
    category: 'comercial',
    image: '/assets/product-placeholder.svg',
    presentation: 'Salero ergonómico de 500g con molinillo',
    humidity: 'Max. 0.02%',
    brand: 'SALINA'
  },
  {
    id: 'sal-salina-fina',
    name: 'SAL SALINA FINA',
    description: 'Sal de mar de granulometría fina, blanco, higroscópica, altamente seleccionada y soluble en agua, fortificada con el micronutriente yodo, libre de contaminantes y materias extrañas. Presentada en envase ergonómico salero de 500 gr. para su fácil dosificación en los alimentos, permitiendo resaltar el sabor de las comidas.',
    category: 'comercial',
    image: '/assets/product-placeholder.svg',
    presentation: 'Salero ergonómico de 500g (y versión pequeña)',
    humidity: 'Max. 0.02%',
    brand: 'SALINA'
  },
  {
    id: 'costenita-mesa',
    name: 'SAL DE MESA Costeñita',
    description: 'Sal fortificada con el micronutriente yodo, higroscópica y libre de materias extrañas. Usada diariamente para sazonar los alimentos, permitiendo resaltar su sabor.',
    category: 'comercial',
    image: '/assets/product-placeholder.svg',
    presentation: 'Bolsa de 1 Kg. - 1/2 Kg',
    humidity: 'Max. 2.5%',
    brand: 'COSTEÑITA'
  },
  {
    id: 'costenita-cocina',
    name: 'SAL DE COCINA Costeñita',
    description: 'Sal fortificada con el micronutriente yodo, higroscópica y libre de materias extrañas. Usada diariamente para preparar los alimentos, permitiendo resaltar su sabor.',
    category: 'comercial',
    image: '/assets/product-placeholder.svg',
    presentation: 'Bolsa de 1 Kg. - 1/2 Kg',
    humidity: 'Max. 2.5%',
    brand: 'COSTEÑITA'
  }
];
