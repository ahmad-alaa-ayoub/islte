export interface Product {
  id: string;
  name: string;
  logo: string;
  description: string;

}

export const productsData: Product[] = [
  {
    id: 'jireh',
    name: '',
    logo: new URL('../public/JIREH.jpg', import.meta.url).href,
    description: 'JIREH INDUSTRIES designs and manufactures manual and automated scanners to assist with non-destructive testing in the oil & gas, power generation, and aerospace industries. The company was established in 1981 as a manufacturer of custom automated equipment. JIREH provides 3 Years Warranty on all scanners & Parts.',

  },

  {
    id: 'durr-ndt',
    name: '',
    logo: new URL('../public/DUR.jpg', import.meta.url).href,
    description: 'DÜRR NDT provides ultra-high resolution computed radiography (CR) scanners, new flat panel technology, tailor-made digital imaging software solutions and also X-ray film processors for mobile use plus DÜRR NDT’s unique ‘green’ X-ray chemistry.',
  },
  {
    id: 'balteau',
    name: '',
    logo: new URL('../public/BALTEAU.jpg', import.meta.url).href,
    description: 'BALTEAU NDT is a company based and established in BELGIUM since 1906. The first company to reach 200, 300 and 400 kV in the past, Balteau has today brought to the industry new standards that are consciously Safety oriented to allow users to operate equipment safer and easier.',
  },
  {
    id: 'vallen-systeme',
    name: '',
    logo: new URL('../public/Vallen-Logo.png', import.meta.url).href,
    description: 'Vallen Systeme that is the fascination of an internationally successful Acoustic Emission (AE) system provider and technology leader, connected with the culture and tradition of a German-based company.',

  },
  {
    id: 'rohmann',
    name: '',
    logo: new URL('../public/ROHMANN.jpg', import.meta.url).href,
    description: 'For more than 40 years we have been developing, producing and marketing eddy current instruments and systems for testing that are in use around the world today in crack, heat-treatment, positive material identification, and grinding burn tests. Testing solutions for every problem and every need. Made in the USA and Germany.',
  },
  {
    id: 'mitcorp',
    name: '',
    logo: new URL('../public/MITCORP.jpg', import.meta.url).href,
    description: 'MITCORP supports nondestructive testing with engineering services and equipment.',
  },
  {
    id: 'gb-inspection',
    name: '',
    logo: new URL('../public/GB.jpg', import.meta.url).href,
    description: 'GB Inspection Systems (GBIS) is a leading UK manufacturer and designer of ultrasonic probes and accessories. GB Inspection Systems offers a complete range of standard ultrasonic probes and accessories covering virtually all industry segments and applications. Our full range of transducers is manufactured and tested in-house according to the latest industry standards',
  },
  {
    id: 'wohler',
    name: '',
    logo: new URL('../public/WOHLER.jpg', import.meta.url).href,
    description: 'We are a technically oriented, family owned company operating on an international basis. We develop, produce and market innovative measuring, inspection and cleaning equipment. We place the highest priority on ensuring our products are tailored to the requirements of our customers.',
  },
  {
    id: 'johnson-allen',
    name: '',
    logo: new URL('../public/JOHNSON.jpg', import.meta.url).href,
    description: 'Johnson & Allen are a British manufacturer of Magnetic Particle Inspection (MPI) and Dye Penetrant Inspection (DPI) Equipment for Non-Destructive Testing (NDT). We design and manufacture standard and bespoke systems including dye penetrant lines, MPI bench units and power packs, handheld UV lights, magnetic yokes and an extensive range of magnetic particle and dye penetrant consumable products including; White contrast paints, magnetic inks, dye penetrants and developers.',
  },
  {
    id: 'echo',
    name: '',
    logo: new URL('../public/ECHO.jpg', import.meta.url).href,
    description: `Echo Ultrasonics combine generations of knowledge and experience in ultrasound, metallurgy, manufacturing technology and packaging experience with superior customer interaction and support to facilitate optimal ultrasound non-destructive testing throughout the world. Echo ultrasonics provides different models of couplants like:
- Coulpant solutions for low to intermediate temperature
- Phased Array Couplants
- Powder Ultrasonic Couplants
- High Temperature Ultrasonic Couplants
- Fluid Couplant Solutions for AUT & Robotic Inspections`,
  },
  {
    id: 'spectro',
    name: '',
    logo: new URL('../public/Spectro_UV_transparent_logo.avif', import.meta.url).href,
    description: `At Spectro-UV, our mission is simple yet vital: to make the world a safer place through our industry-leading ultraviolet (UV) products. Whether it's non-destructive testing (NDT), lab and life sciences, forensic investigations, or aerospace applications, our high-quality UV technologies set the standard across a wide range of critical industries.`,
  },
  {
    id: '3e-ndt',
    name: '',
    logo: new URL('../public/logo4.png', import.meta.url).href,
    description: 'Since 1972, 3E has proudly operated as a family-owned business dedicated to supporting Non-Destructive Testing (NDT) professionals across a wide range of industries worldwide. Our success is built on a strong commitment to customer service, deep industry expertise, and one of the largest inventories of NDT equipment, accessories, and consumables in the market. We\'ve earned the trust of countless companies by serving not just as a supplier-but as a true partner. At 3E, our Sales Representatives are experienced NDT professionals ready to help you find the right products and solutions for your most demanding inspection challenges. Behind the scenes, our operations team is focused on fast, accurate fulfillment to help minimize your downtime. We understand you have options when it comes to NDT. That\'s why we go above and beyond to deliver a world-class customer experience-every time.',
  },
  {
    id: 'danatronics',
    name: '',
    logo: new URL('../public/logo.jpg', import.meta.url).href,
    description: 'Danatronics Corporation is a high technology company specializing in the field of Non-Destructive Testing (NDT). Danatronics combines the experience of more than 75 years of NDT know-how in the areas of Ultrasonic transducers, thickness gages and flaw detectors as well as offerings in video inspection equipment. Our staff combines the talents of key personnel who have invented, developed, marketed and sold Ultrasonic NDT electronics on a global basis for the last four decades.',
  }
  ,
  {
    id: 'dolphitech',
    name: 'Dolphitech',
    logo: new URL('../public/Picture1.png', import.meta.url).href,
    description: `Our drive is to deliver a cutting edge inspection platform. As one of the leading NDT companies, we strive to deliver technology to support our customers to assure the reliability and integrity of their equipment, investments, and assets. Our technology is used for multiple materials in a broad spectrum of applications across numerous industries including heavy industry, aerospace, energy (including wind), marine, automotive and defence.`
  }
  ,
  {
    id: 'Ekoscan',
    name: 'Ekoscan',
    logo: new URL('../public/EKOSCAN.jpg', import.meta.url).href,
    description: `Backed by a team of specialists (PhDs, MScs, BScs, 50+ engineering group) in electronics, probes, robotics, ultrasound, eddy-current, signal processing, and software engineering, EKOSCAN combines over 40 years of expertise in the NDT industry. Innovation is placed at the core of its mission, ensuring products are not only technologically advanced but also intuitive and effective in the field.`
  },
  {
    id: 'proceq',
    name: 'Proceq',
    logo: new URL('../public/PROCEQ.png', import.meta.url).href,
    description: `Screening Eagle Technologies provides a technology platform for intelligent inspection of the built environment. The company was created through the merger of Dreamlab in Singapore and Proceq in Switzerland with a mission to protect the built world with software, sensors and data. Screening Eagle's full-stack inspection solution combines intuitive software and powerful portable sensors to deliver reliable data for construction and asset maintenance decisions. Powered by data from intelligent and autonomous inspection, Screening Eagle is on a steep growth path to realize its vision of predictive healthcare that extends asset life and increases long-term value for asset owners.`
  },
  {
    id: 'fuji',
    name: 'FUJI FILM',
    logo: new URL('../public/fuji.png', import.meta.url).href,
    description: `Fujifilm is known as the world's largest photographic and imaging company . Based on wide-ranging technological expertise, Fujifilm pursues innovation in many areas, with the goal of enhancing the quality of life. Fujifilm provides the high quality Industrial X-ray films to assure the quality in various production sectors.`
  }
];
