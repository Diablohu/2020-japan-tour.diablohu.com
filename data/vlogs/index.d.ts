export interface VLog {
    orig: string;
    thumbnail: string;
    title: string;
    date: string;
    day: number;
    sort: 0;
    links: {
        [site: string]: string;
    };
}

const vlogs: VLog[];

export default vlogs;
