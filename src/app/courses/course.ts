export interface Course {
    id: number | null;
    name: string;
    code: string;
    teacher?: string;
    tags?: string[];
    startDate: string;
    price: number;
    description: string;
    starRating: number;
    imageUrl: string;
}
