export default interface SoundConfig {
    name: string;
    src: string[] | string;
    loop?: boolean;
    sprite?: {
        [key: string]: [number, number, boolean];
    };
    onload?: () => void;
}
