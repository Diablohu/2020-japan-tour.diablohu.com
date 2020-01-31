export interface VLog {
    orig: string;
    thumbnail: string;
    title: string;
    date: string;
    links: {
        [site: string]: string;
    };
}

const vlogs: VLog[];

export default vlogs;
