export interface ZookimonAttack {
    name: string;
    power: number;
}

export interface ZookimonType {
    name: string;
    foregroundImage: string;
    backgroundImage: string;
    attacks: ZookimonAttack[]
}
