import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Course } from './../courses/course';

export class CourseData implements InMemoryDbService {

    createDb() {
        const courses: Course[] = [
            {
                'id': 1,
                'name': 'Leaf Rake',
                'code': 'GDN-0011',
                'startDate': 'March 19, 2017',
                'description': 'Leaf rake with 48-inch wooden handle.',
                'price': 19.95,
                'starRating': 3.2,
                'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png',
                'category': 'Garden',
                'tags': ['rake', 'leaf', 'yard', 'home']
            },
            {
                'id': 2,
                'name': 'Garden Cart',
                'code': 'GDN-0023',
                'startDate': 'March 18, 2017',
                'description': '15 gallon capacity rolling garden cart',
                'price': 32.99,
                'starRating': 4.2,
                'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png',
                'category': 'Garden'
            },
            {
                'id': 5,
                'name': 'Hammer',
                'code': 'TBX-0048',
                'startDate': 'May 21, 2017',
                'description': 'Curved claw steel hammer',
                'price': 8.9,
                'starRating': 4.8,
                'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png',
                'category': 'Toolbox',
                'tags': ['tools', 'hammer', 'construction']
            },
            {
                'id': 8,
                'name': 'Saw',
                'code': 'TBX-0022',
                'startDate': 'May 15, 2017',
                'description': '15-inch steel blade hand saw',
                'price': 11.55,
                'starRating': 3.7,
                'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png',
                'category': 'Toolbox',
            },
            {
                'id': 10,
                'name': 'Video Game Controller',
                'code': 'GMG-0042',
                'startDate': 'October 15, 2017',
                'description': 'Standard two-button video game controller',
                'price': 35.95,
                'starRating': 4.6,
                'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png',
                'category': 'Gaming',
            }
        ];
        return { courses };
    }
}
