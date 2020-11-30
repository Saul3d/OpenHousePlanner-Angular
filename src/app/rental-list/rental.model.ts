export interface Rental {
    id:number;
    street: string;
    city: string;
    state: string;
    zip: number;
    bedrooms: number;
    bath: number;
    sqft: number;
    hasTenants: boolean;
    isActive: boolean;
    imgUrl: string;
}