import React from 'react'
import Moissanite from './Moissanite.jpg'
import './Shop.css'
export default function Shop() {
    const [size, setSize] = React.useState('');
    const headCells = [
        {
          imgUrl: 'https://www.linkpicture.com/q/Moissanite-modified.png',
          title: 'Moissanite Diamond',
          body: 'Moissanite has same Hardness as Diamond and is a Diamond Substitute. On astrological basis, it will work same as Diamond.',
          size:['0.60 carat', '0.80 carat', '0.95 carat', '1.0 carat', '1.20 carat', '1.50 carat', '2.00 carat', '2.50 carat', '6.50 carat']
        },
        {
          imgUrl: 'https://www.linkpicture.com/q/Emerald-modified.png',
          title: 'Natural Emerald {Zambian}',
          body: 'Emerald is considered to represent good fortune, youth, balance, growth, peace, and foresight',
          size:['3 carat', '3.5 carat', '4 carat', '4.5 carat', '5 carat', '5.5 carat', '6 carat', '6.5 carat', '7 carat', '7.5 carat', '8 carat', '8.5 carat', '9 carat', '9.5 carat', '10 carat', '10.5 carat', '11 carat', '11.5 carat', '12 carat', '15 carat', '25 carat']
        },
        {
          imgUrl: 'https://www.linkpicture.com/q/Pukhraj-modified.png',
          title: 'Natural Yellow Sapphire {Pukhraj}',
          body: 'Those individuals in whose horoscopes Jupiter is posited in 1st, 2nd, 5th, 9th, and 10th house can wear Yellow Sapphire gemstones for life. Jupiter posited in the 4th house, 7th house and 11th house will also prove auspicious in its period.',
          size:['3 carat', '3.5 carat', '4 carat', '4.5 carat', '5 carat', '5.5 carat', '6 carat', '6.5 carat', '7 carat', '7.5 carat', '8 carat', '8.5 carat', '9 carat', '9.5 carat', '10 carat', '10.5 carat', '11 carat', '11.5 carat', '12 carat', '15 carat']
        },
        {
          imgUrl: 'https://www.linkpicture.com/q/NEELAM-modified.png',
          title: 'Natural Blue Sapphire {Neelam}',
          body: "Wearing the Blue Sapphire provides protection against theft, terror, accidents, and problems caused due to natural calamities like storms, fire etc. Therefore blue sapphire acts like a shield protecting the person from all dangers.",
          size:['3 carat', '3.5 carat', '4 carat', '4.5 carat', '5 carat', '5.5 carat', '6 carat', '6.5 carat', '7 carat', '7.5 carat', '8 carat', '8.5 carat', '9 carat', '9.5 carat', '10 carat', '10.5 carat', '11 carat', '11.5 carat', '12 carat', '15 carat']
        },
        {
          imgUrl: 'https://www.linkpicture.com/q/Ruby-modified.png',
          title: 'Natural Ruby {Africa}',
          body: "It is also thought to boost creativity, spirituality, self-assurance, and wisdom. The stone is linked to the Manipura Chakra, which is located in the body's navel. Wearing this gemstone helps to open this chakra, instils a sense of responsibility in the wearer, and encourages leadership skills.",
          size:['3 carat', '3.5 carat', '4 carat', '4.5 carat', '5 carat', '5.5 carat', '6 carat', '6.5 carat', '7 carat', '7.5 carat', '8 carat', '8.5 carat', '9 carat', '9.5 carat', '10 carat', '10.5 carat', '11 carat', '11.5 carat', '12 carat', '15 carat']
        },
        {
          imgUrl: 'https://www.linkpicture.com/q/Ruby-modified.png',
          title: 'Burma Ruby',
          body: "Wearing the Blue Sapphire provides protection against theft, terror, accidents, and problems caused due to natural calamities like storms, fire etc. Therefore blue sapphire acts like a shield protecting the person from all dangers.",
          size:['3 carat', '3.5 carat', '4 carat', '4.5 carat', '5 carat', '5.5 carat', '6 carat', '6.5 carat', '7 carat', '7.5 carat', '8 carat', '8.5 carat', '9 carat', '9.5 carat', '10 carat', '10.5 carat', '11 carat', '11.5 carat', '12 carat', '15 carat']
        },
        {
          imgUrl: 'https://www.linkpicture.com/q/Ruby-modified.png',
          title: 'Natural Star Ruby',
          body: "Wearing the Blue Sapphire provides protection against theft, terror, accidents, and problems caused due to natural calamities like storms, fire etc. Therefore blue sapphire acts like a shield protecting the person from all dangers.",
          size:['3 carat', '3.5 carat', '4 carat', '4.5 carat', '5 carat', '5.5 carat', '6 carat', '6.5 carat', '7 carat', '7.5 carat', '8 carat', '8.5 carat', '9 carat', '9.5 carat', '10 carat', '10.5 carat', '11 carat', '11.5 carat', '12 carat', '15 carat']
        },
        
        {
          imgUrl: 'https://www.linkpicture.com/q/Sunehla-modified.png',
          title: 'Natural Citrine {Sunehla}',
          body: "Citrine is associated with positivity and optimism, It is the BEST substitute of YELLOW SAPPHIRE, . It's often used to assist in manifesting financial abundance and opportunities. It can also be used to awaken the solar plexus chakra, helping to cultivate confidence and personal power.",
          size:['3 carat', '3.5 carat', '4 carat', '4.5 carat', '5 carat', '5.5 carat', '6 carat', '6.5 carat', '7 carat', '7.5 carat', '8 carat', '8.5 carat', '9 carat', '9.5 carat', '10 carat', '10.5 carat', '11 carat', '11.5 carat', '12 carat', '15 carat']
        },
        
        {
          imgUrl: 'https://www.linkpicture.com/q/Gomed-modified.png',
          title: 'Natural Hessonite {Gomed}',
          body: "Gomed stone helps in healing diseases like cancer, varicose veins, boils, leprosy, clumsiness, intestinal issues, fatigue, blood pressure, and fatigue. It helps to improve mental health, sound gastric, and respiratory systems.",
          size:['3 carat', '3.5 carat', '4 carat', '4.5 carat', '5 carat', '5.5 carat', '6 carat', '6.5 carat', '7 carat', '7.5 carat', '8 carat', '8.5 carat', '9 carat', '9.5 carat', '10 carat', '10.5 carat', '11 carat', '11.5 carat', '12 carat', '15 carat']
        },
        {
          imgUrl: 'https://www.linkpicture.com/q/Amethyst-modified-modified.png',
          title: 'Natural Amethyst',
          body: "Citrine is associated with positivity and optimism, It is the BEST substitute of YELLOW SAPPHIRE, . It's often used to assist in manifesting financial abundance and opportunities. It can also be used to awaken the solar plexus chakra, helping to cultivate confidence and personal power.",
          size:['3 carat', '3.5 carat', '4 carat', '4.5 carat', '5 carat', '5.5 carat', '6 carat', '6.5 carat', '7 carat', '7.5 carat', '8 carat', '8.5 carat', '9 carat', '9.5 carat', '10 carat', '10.5 carat', '11 carat', '11.5 carat', '12 carat', '15 carat']
        },
        
        {
          imgUrl: 'https://www.linkpicture.com/q/Moonga-Capsule-modified.png',
          title: 'Natural Italian Moonga {Capsule}',
          body: "Citrine is associated with positivity and optimism, It is the BEST substitute of YELLOW SAPPHIRE, . It's often used to assist in manifesting financial abundance and opportunities. It can also be used to awaken the solar plexus chakra, helping to cultivate confidence and personal power.",
          size:['3 carat', '3.5 carat', '4 carat', '4.5 carat', '5 carat', '5.5 carat', '6 carat', '6.5 carat', '7 carat', '7.5 carat', '8 carat', '8.5 carat', '9 carat', '9.5 carat', '10 carat', '10.5 carat', '11 carat', '11.5 carat', '12 carat', '15 carat']
        },
        
        {
          imgUrl: 'https://www.linkpicture.com/q/Moonga-Triangle-modified-1_1.png',
          title: 'Natural Italian Moonga {Triangle}',
          body: "Citrine is associated with positivity and optimism, It is the BEST substitute of YELLOW SAPPHIRE, . It's often used to assist in manifesting financial abundance and opportunities. It can also be used to awaken the solar plexus chakra, helping to cultivate confidence and personal power.",
          size:['3 carat', '3.5 carat', '4 carat', '4.5 carat', '5 carat', '5.5 carat', '6 carat', '6.5 carat', '7 carat', '7.5 carat', '8 carat', '8.5 carat', '9 carat', '9.5 carat', '10 carat', '10.5 carat', '11 carat', '11.5 carat', '12 carat', '15 carat']
        },
        {
          imgUrl: 'https://www.linkpicture.com/q/Moonga-Triangle-modified-1_1.png',
          title: 'Natural Italian Moonga {Oval}',
          body: "Citrine is associated with positivity and optimism, It is the BEST substitute of YELLOW SAPPHIRE, . It's often used to assist in manifesting financial abundance and opportunities. It can also be used to awaken the solar plexus chakra, helping to cultivate confidence and personal power.",
          size:['3 carat', '3.5 carat', '4 carat', '4.5 carat', '5 carat', '5.5 carat', '6 carat', '6.5 carat', '7 carat', '7.5 carat', '8 carat', '8.5 carat', '9 carat', '9.5 carat', '10 carat', '10.5 carat', '11 carat', '11.5 carat', '12 carat', '15 carat']
        },
        {
          imgUrl: 'https://www.linkpicture.com/q/Moonga-Triangle-modified-1_1.png',
          title: 'Natural Japanese Moonga ',
          body: "Citrine is associated with positivity and optimism, It is the BEST substitute of YELLOW SAPPHIRE, . It's often used to assist in manifesting financial abundance and opportunities. It can also be used to awaken the solar plexus chakra, helping to cultivate confidence and personal power.",
          size:['3 carat', '3.5 carat', '4 carat', '4.5 carat', '5 carat', '5.5 carat', '6 carat', '6.5 carat', '7 carat', '7.5 carat', '8 carat', '8.5 carat', '9 carat', '9.5 carat', '10 carat', '10.5 carat', '11 carat', '11.5 carat', '12 carat', '15 carat']
        },
        {
          imgUrl: 'https://www.linkpicture.com/q/Opal-modified_1.png',
          title: 'Natural Australian Opal ',
          body: "Citrine is associated with positivity and optimism, It is the BEST substitute of YELLOW SAPPHIRE, . It's often used to assist in manifesting financial abundance and opportunities. It can also be used to awaken the solar plexus chakra, helping to cultivate confidence and personal power.",
          size:['3 carat', '3.5 carat', '4 carat', '4.5 carat', '5 carat', '5.5 carat', '6 carat', '6.5 carat', '7 carat', '7.5 carat', '8 carat', '8.5 carat', '9 carat', '9.5 carat', '10 carat', '10.5 carat', '11 carat', '11.5 carat', '12 carat', '15 carat']
        },
        
        {
          imgUrl: 'https://www.linkpicture.com/q/rudraksha-modified.png',
          title: 'Natural Rudraksha',
          body: "Citrine is associated with positivity and optimism, It is the BEST substitute of YELLOW SAPPHIRE, . It's often used to assist in manifesting financial abundance and opportunities. It can also be used to awaken the solar plexus chakra, helping to cultivate confidence and personal power.",
          size:['1 mukhi','2 mukhi','3 mukhi','4 mukhi','5 mukhi','6 mukhi','7 mukhi','8 mukhi','9 mukhi','10 mukhi','11 mukhi','12 mukhi','13 mukhi','14 mukhi','15 mukhi']
        },
        
        {
          imgUrl: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
          title: "Natural Cat's Eye",
          body: "Citrine is associated with positivity and optimism, It is the BEST substitute of YELLOW SAPPHIRE, . It's often used to assist in manifesting financial abundance and opportunities. It can also be used to awaken the solar plexus chakra, helping to cultivate confidence and personal power.",
          size:['3 carat', '3.5 carat', '4 carat', '4.5 carat', '5 carat', '5.5 carat', '6 carat', '6.5 carat', '7 carat', '7.5 carat', '8 carat', '8.5 carat', '9 carat', '9.5 carat', '10 carat', '10.5 carat', '11 carat', '11.5 carat', '12 carat', '15 carat']
        },
        
        {
          imgUrl: 'https://www.linkpicture.com/q/Tiger-modified.png',
          title: "Natural Tiger Cat's Eye",
          body: "Citrine is associated with positivity and optimism, It is the BEST substitute of YELLOW SAPPHIRE, . It's often used to assist in manifesting financial abundance and opportunities. It can also be used to awaken the solar plexus chakra, helping to cultivate confidence and personal power.",
          size:['3 carat', '3.5 carat', '4 carat', '4.5 carat', '5 carat', '5.5 carat', '6 carat', '6.5 carat', '7 carat', '7.5 carat', '8 carat', '8.5 carat', '9 carat', '9.5 carat', '10 carat', '10.5 carat', '11 carat', '11.5 carat', '12 carat', '15 carat']
        },
        
        {
          imgUrl: 'https://www.linkpicture.com/q/Firoza-iRANI-modified-1.png',
          title: "Natural Irani Firoza",
          body: "Citrine is associated with positivity and optimism, It is the BEST substitute of YELLOW SAPPHIRE, . It's often used to assist in manifesting financial abundance and opportunities. It can also be used to awaken the solar plexus chakra, helping to cultivate confidence and personal power.",
          size:['14 carat']
        },
        {
          imgUrl: 'https://www.linkpicture.com/q/Firoza-Tibetian-modified.png',
          title: "Natural Tibetian Firoza",
          body: "Citrine is associated with positivity and optimism, It is the BEST substitute of YELLOW SAPPHIRE, . It's often used to assist in manifesting financial abundance and opportunities. It can also be used to awaken the solar plexus chakra, helping to cultivate confidence and personal power.",
          size:['3 carat', '3.5 carat', '4 carat', '4.5 carat', '5 carat', '5.5 carat', '6 carat', '6.5 carat', '7 carat', '7.5 carat', '8 carat', '8.5 carat', '9 carat', '9.5 carat', '10 carat', '10.5 carat', '11 carat', '11.5 carat', '12 carat', '15 carat']
        },
        {
          imgUrl: 'https://www.linkpicture.com/q/Lapis-modified.png',
          title: "Natural Lapis Lazuli",
          body: "Citrine is associated with positivity and optimism, It is the BEST substitute of YELLOW SAPPHIRE, . It's often used to assist in manifesting financial abundance and opportunities. It can also be used to awaken the solar plexus chakra, helping to cultivate confidence and personal power.",
          size:['3 carat', '3.5 carat', '4 carat', '4.5 carat', '5 carat', '5.5 carat', '6 carat', '6.5 carat', '7 carat', '7.5 carat', '8 carat', '8.5 carat', '9 carat', '9.5 carat', '10 carat', '10.5 carat', '11 carat', '11.5 carat', '12 carat', '15 carat']
        },
        {
          imgUrl: 'https://www.linkpicture.com/q/tourmaline-modified.png',
          title: "Natural Tourmaline",
          body: "Citrine is associated with positivity and optimism, It is the BEST substitute of YELLOW SAPPHIRE, . It's often used to assist in manifesting financial abundance and opportunities. It can also be used to awaken the solar plexus chakra, helping to cultivate confidence and personal power.",
          size:['3 carat', '3.5 carat', '4 carat', '4.5 carat', '5 carat', '5.5 carat', '6 carat', '6.5 carat', '7 carat', '7.5 carat', '8 carat', '8.5 carat', '9 carat', '9.5 carat', '10 carat', '10.5 carat', '11 carat', '11.5 carat', '12 carat', '15 carat']
        },
        {
          imgUrl: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
          title: "Natural Real Zirconia",
          body: "Citrine is associated with positivity and optimism, It is the BEST substitute of YELLOW SAPPHIRE, . It's often used to assist in manifesting financial abundance and opportunities. It can also be used to awaken the solar plexus chakra, helping to cultivate confidence and personal power.",
          size:['3 carat', '3.5 carat', '4 carat', '4.5 carat', '5 carat', '5.5 carat', '6 carat', '6.5 carat', '7 carat', '7.5 carat', '8 carat', '8.5 carat', '9 carat', '9.5 carat', '10 carat', '10.5 carat', '11 carat', '11.5 carat', '12 carat', '15 carat']
        },
        {
          imgUrl: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
          title: "Zirconia {Jarkan}",
          body: "Citrine is associated with positivity and optimism, It is the BEST substitute of YELLOW SAPPHIRE, . It's often used to assist in manifesting financial abundance and opportunities. It can also be used to awaken the solar plexus chakra, helping to cultivate confidence and personal power.",
          size:['3 carat', '3.5 carat', '4 carat', '4.5 carat', '5 carat', '5.5 carat', '6 carat', '6.5 carat', '7 carat', '7.5 carat', '8 carat', '8.5 carat', '9 carat', '9.5 carat', '10 carat', '10.5 carat', '11 carat', '11.5 carat', '12 carat', '15 carat']
        },
        {
          imgUrl: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
          title: "Natural Moonstone",
          body: "Citrine is associated with positivity and optimism, It is the BEST substitute of YELLOW SAPPHIRE, . It's often used to assist in manifesting financial abundance and opportunities. It can also be used to awaken the solar plexus chakra, helping to cultivate confidence and personal power.",
          size:['3 carat', '3.5 carat', '4 carat', '4.5 carat', '5 carat', '5.5 carat', '6 carat', '6.5 carat', '7 carat', '7.5 carat', '8 carat', '8.5 carat', '9 carat', '9.5 carat', '10 carat', '10.5 carat', '11 carat', '11.5 carat', '12 carat', '15 carat']
        },
        {
          imgUrl: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
          title: "Natural Blue Moonstone",
          body: "Citrine is associated with positivity and optimism, It is the BEST substitute of YELLOW SAPPHIRE, . It's often used to assist in manifesting financial abundance and opportunities. It can also be used to awaken the solar plexus chakra, helping to cultivate confidence and personal power.",
          size:['3 carat', '3.5 carat', '4 carat', '4.5 carat', '5 carat', '5.5 carat', '6 carat', '6.5 carat', '7 carat', '7.5 carat', '8 carat', '8.5 carat', '9 carat', '9.5 carat', '10 carat', '10.5 carat', '11 carat', '11.5 carat', '12 carat', '15 carat']
        },
        {
          imgUrl: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
          title: "Onyx",
          body: "Citrine is associated with positivity and optimism, It is the BEST substitute of YELLOW SAPPHIRE, . It's often used to assist in manifesting financial abundance and opportunities. It can also be used to awaken the solar plexus chakra, helping to cultivate confidence and personal power.",
          size:['3 carat', '3.5 carat', '4 carat', '4.5 carat', '5 carat', '5.5 carat', '6 carat', '6.5 carat', '7 carat', '7.5 carat', '8 carat', '8.5 carat', '9 carat', '9.5 carat', '10 carat', '10.5 carat', '11 carat', '11.5 carat', '12 carat', '15 carat']
        },
        {
          imgUrl: 'https://www.linkpicture.com/q/fresh-modified.png',
          title: "Natural Fresh Water Pearls",
          body: "Citrine is associated with positivity and optimism, It is the BEST substitute of YELLOW SAPPHIRE, . It's often used to assist in manifesting financial abundance and opportunities. It can also be used to awaken the solar plexus chakra, helping to cultivate confidence and personal power.",
          size:['3 carat', '3.5 carat', '4 carat', '4.5 carat', '5 carat', '5.5 carat', '6 carat', '6.5 carat', '7 carat', '7.5 carat', '8 carat', '8.5 carat', '9 carat', '9.5 carat', '10 carat', '10.5 carat', '11 carat', '11.5 carat', '12 carat', '15 carat']
        },
        {
          imgUrl: 'https://www.linkpicture.com/q/salty-modified.png',
          title: "Narural Salty Water Pearls {South Sea}",
          body: "Citrine is associated with positivity and optimism, It is the BEST substitute of YELLOW SAPPHIRE, . It's often used to assist in manifesting financial abundance and opportunities. It can also be used to awaken the solar plexus chakra, helping to cultivate confidence and personal power.",
          size:['3 carat', '3.5 carat', '4 carat', '4.5 carat', '5 carat', '5.5 carat', '6 carat', '6.5 carat', '7 carat', '7.5 carat', '8 carat', '8.5 carat', '9 carat', '9.5 carat', '10 carat', '10.5 carat', '11 carat', '11.5 carat', '12 carat', '15 carat']
        },
        {
          imgUrl: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
          title: "Natural Malachite",
          body: "Citrine is associated with positivity and optimism, It is the BEST substitute of YELLOW SAPPHIRE, . It's often used to assist in manifesting financial abundance and opportunities. It can also be used to awaken the solar plexus chakra, helping to cultivate confidence and personal power.",
          size:['3 carat', '3.5 carat', '4 carat', '4.5 carat', '5 carat', '5.5 carat', '6 carat', '6.5 carat', '7 carat', '7.5 carat', '8 carat', '8.5 carat', '9 carat', '9.5 carat', '10 carat', '10.5 carat', '11 carat', '11.5 carat', '12 carat', '15 carat']
        },
        {
          imgUrl: 'https://www.linkpicture.com/q/aquamarine-modified.png',
          title: "Natural Aquamarine",
          body: "Citrine is associated with positivity and optimism, It is the BEST substitute of YELLOW SAPPHIRE, . It's often used to assist in manifesting financial abundance and opportunities. It can also be used to awaken the solar plexus chakra, helping to cultivate confidence and personal power.",
          size:['3 carat', '3.5 carat', '4 carat', '4.5 carat', '5 carat', '5.5 carat', '6 carat', '6.5 carat', '7 carat', '7.5 carat', '8 carat', '8.5 carat', '9 carat', '9.5 carat', '10 carat', '10.5 carat', '11 carat', '11.5 carat', '12 carat', '15 carat']
        },
        {
          imgUrl: 'https://www.linkpicture.com/q/signetti-modified.png',
          title: "Signetti",
          body: "Citrine is associated with positivity and optimism, It is the BEST substitute of YELLOW SAPPHIRE, . It's often used to assist in manifesting financial abundance and opportunities. It can also be used to awaken the solar plexus chakra, helping to cultivate confidence and personal power.",
          size:['3 carat', '3.5 carat', '4 carat', '4.5 carat', '5 carat', '5.5 carat', '6 carat', '6.5 carat', '7 carat', '7.5 carat', '8 carat', '8.5 carat', '9 carat', '9.5 carat', '10 carat', '10.5 carat', '11 carat', '11.5 carat', '12 carat', '15 carat']
        },
        {
          imgUrl: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
          title: "Natural Red Garnet",
          body: "Citrine is associated with positivity and optimism, It is the BEST substitute of YELLOW SAPPHIRE, . It's often used to assist in manifesting financial abundance and opportunities. It can also be used to awaken the solar plexus chakra, helping to cultivate confidence and personal power.",
          size:['3 carat', '3.5 carat', '4 carat', '4.5 carat', '5 carat', '5.5 carat', '6 carat', '6.5 carat', '7 carat', '7.5 carat', '8 carat', '8.5 carat', '9 carat', '9.5 carat', '10 carat', '10.5 carat', '11 carat', '11.5 carat', '12 carat', '15 carat']
        },
        {
          imgUrl: 'https://www.linkpicture.com/q/amber-modified.png',
          title: "Natural Amber",
          body: "Citrine is associated with positivity and optimism, It is the BEST substitute of YELLOW SAPPHIRE, . It's often used to assist in manifesting financial abundance and opportunities. It can also be used to awaken the solar plexus chakra, helping to cultivate confidence and personal power.",
          size:['3 carat', '3.5 carat', '4 carat', '4.5 carat', '5 carat', '5.5 carat', '6 carat', '6.5 carat', '7 carat', '7.5 carat', '8 carat', '8.5 carat', '9 carat', '9.5 carat', '10 carat', '10.5 carat', '11 carat', '11.5 carat', '12 carat', '15 carat']
        },
        {
          imgUrl: 'https://www.linkpicture.com/q/peridot-modified.png',
          title: "Natural Peridot",
          body: "Citrine is associated with positivity and optimism, It is the BEST substitute of YELLOW SAPPHIRE, . It's often used to assist in manifesting financial abundance and opportunities. It can also be used to awaken the solar plexus chakra, helping to cultivate confidence and personal power.",
          size:['3 carat', '3.5 carat', '4 carat', '4.5 carat', '5 carat', '5.5 carat', '6 carat', '6.5 carat', '7 carat', '7.5 carat', '8 carat', '8.5 carat', '9 carat', '9.5 carat', '10 carat', '10.5 carat', '11 carat', '11.5 carat', '12 carat', '15 carat']
        },
        {
          imgUrl: 'https://www.linkpicture.com/q/carolin-modified.png',
          title: "Natural Carolin",
          body: "Citrine is associated with positivity and optimism, It is the BEST substitute of YELLOW SAPPHIRE, . It's often used to assist in manifesting financial abundance and opportunities. It can also be used to awaken the solar plexus chakra, helping to cultivate confidence and personal power.",
          size:['3 carat', '3.5 carat', '4 carat', '4.5 carat', '5 carat', '5.5 carat', '6 carat', '6.5 carat', '7 carat', '7.5 carat', '8 carat', '8.5 carat', '9 carat', '9.5 carat', '10 carat', '10.5 carat', '11 carat', '11.5 carat', '12 carat', '15 carat']
        },
        {
          imgUrl: 'https://www.linkpicture.com/q/iolite-modified.png',
          title: "Natural Iolite",
          body: "Citrine is associated with positivity and optimism, It is the BEST substitute of YELLOW SAPPHIRE, . It's often used to assist in manifesting financial abundance and opportunities. It can also be used to awaken the solar plexus chakra, helping to cultivate confidence and personal power.",
          size:['3 carat', '3.5 carat', '4 carat', '4.5 carat', '5 carat', '5.5 carat', '6 carat', '6.5 carat', '7 carat', '7.5 carat', '8 carat', '8.5 carat', '9 carat', '9.5 carat', '10 carat', '10.5 carat', '11 carat', '11.5 carat', '12 carat', '15 carat']
        },
        {
          imgUrl: 'https://www.linkpicture.com/q/topaz-modified.png',
          title: "Natural White Topaz",
          body: "Citrine is associated with positivity and optimism, It is the BEST substitute of YELLOW SAPPHIRE, . It's often used to assist in manifesting financial abundance and opportunities. It can also be used to awaken the solar plexus chakra, helping to cultivate confidence and personal power.",
          size:['3 carat', '3.5 carat', '4 carat', '4.5 carat', '5 carat', '5.5 carat', '6 carat', '6.5 carat', '7 carat', '7.5 carat', '8 carat', '8.5 carat', '9 carat', '9.5 carat', '10 carat', '10.5 carat', '11 carat', '11.5 carat', '12 carat', '15 carat']
        },
        {
          imgUrl: 'https://www.linkpicture.com/q/Green-Amethyst-modified.png',
          title: "Natural Green Amethyst",
          body: "Citrine is associated with positivity and optimism, It is the BEST substitute of YELLOW SAPPHIRE, . It's often used to assist in manifesting financial abundance and opportunities. It can also be used to awaken the solar plexus chakra, helping to cultivate confidence and personal power.",
          size:['3 carat', '3.5 carat', '4 carat', '4.5 carat', '5 carat', '5.5 carat', '6 carat', '6.5 carat', '7 carat', '7.5 carat', '8 carat', '8.5 carat', '9 carat', '9.5 carat', '10 carat', '10.5 carat', '11 carat', '11.5 carat', '12 carat', '15 carat']
        },
        {
          imgUrl: 'https://www.linkpicture.com/q/rose-quartz-modified.png',
          title: "Natural Rose Quartz",
          body: "Citrine is associated with positivity and optimism, It is the BEST substitute of YELLOW SAPPHIRE, . It's often used to assist in manifesting financial abundance and opportunities. It can also be used to awaken the solar plexus chakra, helping to cultivate confidence and personal power.",
          size:['3 carat', '3.5 carat', '4 carat', '4.5 carat', '5 carat', '5.5 carat', '6 carat', '6.5 carat', '7 carat', '7.5 carat', '8 carat', '8.5 carat', '9 carat', '9.5 carat', '10 carat', '10.5 carat', '11 carat', '11.5 carat', '12 carat', '15 carat']
        },
        {
          imgUrl: 'https://www.linkpicture.com/q/blue-gilson-modified.png',
          title: "Blue Gilson",
          body: "Citrine is associated with positivity and optimism, It is the BEST substitute of YELLOW SAPPHIRE, . It's often used to assist in manifesting financial abundance and opportunities. It can also be used to awaken the solar plexus chakra, helping to cultivate confidence and personal power.",
          size:['3 carat', '3.5 carat', '4 carat', '4.5 carat', '5 carat', '5.5 carat', '6 carat', '6.5 carat', '7 carat', '7.5 carat', '8 carat', '8.5 carat', '9 carat', '9.5 carat', '10 carat', '10.5 carat', '11 carat', '11.5 carat', '12 carat', '15 carat']
        },
        {
          imgUrl: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
          title: "Yellow Gilson",
          body: "Citrine is associated with positivity and optimism, It is the BEST substitute of YELLOW SAPPHIRE, . It's often used to assist in manifesting financial abundance and opportunities. It can also be used to awaken the solar plexus chakra, helping to cultivate confidence and personal power.",
          size:['3 carat', '3.5 carat', '4 carat', '4.5 carat', '5 carat', '5.5 carat', '6 carat', '6.5 carat', '7 carat', '7.5 carat', '8 carat', '8.5 carat', '9 carat', '9.5 carat', '10 carat', '10.5 carat', '11 carat', '11.5 carat', '12 carat', '15 carat']
        },
        {
          imgUrl: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
          title: "Natural Zehr Mohra",
          body: "Citrine is associated with positivity and optimism, It is the BEST substitute of YELLOW SAPPHIRE, . It's often used to assist in manifesting financial abundance and opportunities. It can also be used to awaken the solar plexus chakra, helping to cultivate confidence and personal power.",
          size:['3 carat', '3.5 carat', '4 carat', '4.5 carat', '5 carat', '5.5 carat', '6 carat', '6.5 carat', '7 carat', '7.5 carat', '8 carat', '8.5 carat', '9 carat', '9.5 carat', '10 carat', '10.5 carat', '11 carat', '11.5 carat', '12 carat', '15 carat']
        },
        
    ]
    return (
        <>
            <div className="container shopContainer">
                <div className="row">
                    {headCells.map((d)=>{return (
                        <div className="col-lg-4 col-md-6 shop1">
                        <img src={d.imgUrl} height="100px" width="100px" />
                        <h4 className="headingShop">{d.title}</h4>
                        <p className='paraShop1'>{d.body}</p>
                        <br />
                        <div class="btn-group btnSize">
                            <select type="button" class="btn btn-secondary" onChange={(e)=>{setSize(e.target.value);console.log(e.target.value)}}>
                                <option value="">size</option>
                                {d?.size?.map((e)=>{return (<option value={e}>{e}</option>)})}
                                </select>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">0.60 carat</a></li>
                                <li><a class="dropdown-item" href="#">0.72 carat</a></li>
                                <li><a class="dropdown-item" href="#">0.95 carat</a></li>
                                <li><a class="dropdown-item" href="#">1 carat</a></li>
                                <li><a class="dropdown-item" href="#">1.2 carat</a></li>
                                <li><a class="dropdown-item" href="#">1.5 carat</a></li>
                                <li><a class="dropdown-item" href="#">2.0 carat</a></li>
                                <li><a class="dropdown-item" href="#">2.5 carat</a></li>
                                <li><a class="dropdown-item" href="#">6.5 carat</a></li>
                                {/* <li><hr class="dropdown-divider" /></li> */}
                                
                            </ul>
                        </div>
                        <br />

                        <a href={'https://wa.me/+918447630530?text= i want to buy this ' + d.title + ' of size ' + size}><button className="btn btn-sm btnShop">Buy</button></a>
                    </div>
                    )})}          
                 </div>
            </div> 
        </>
    )

}
