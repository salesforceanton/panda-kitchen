import malatan from '../assests/malatan.webp';
import spicy_shrimp from '../assests/spicy_shrimp.webp';
import dumplings_soup from '../assests/dumpshlips_soup.webp';
import fried_noodles from '../assests/fried_noodles.webp';

export const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Fried noodles with fried pork',
        weight: 500,
        description:
            'Noodles, pork loin, cabbage, onion, carrots, garlic moss',
        price: 11.99,
        imageSrc: fried_noodles
    },
    {
        id: 'm2',
        name: 'Spicy shrimp and squid',
        weight: 450,
        description: 'Shrimp, squid, black mushrooms, celery, lotus root, fried tofu',
        price: 13.99,
        imageSrc: spicy_shrimp
    },
    {
        id: 'm3',
        name: 'Dumplings with soup',
        weight: 600,
        description: 'Dumplings with pork and cabbage. Cucumber, tomatoes, seaweed, dried shrimp',
        price: 10.99,
        imageSrc: dumplings_soup
    },
    {
        id: 'm4',
        name: 'Ma La Tan with soup',
        weight: 800,
        description:
            'Enoki mushroom, black mushroom, tofu, Chinese mushroom, fried tofu, Chinese meatballs, noodles',
        price: 17.99,
        imageSrc: malatan
    },
];