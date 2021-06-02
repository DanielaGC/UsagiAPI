
declare module 'usagiapi' {
    export class UsagiAPIClient {
        url: string;
        _request(routerName: string): Promise<string>;
        dance(): Promise<string>;
        feed(): Promise<string>;
        hug(): Promise<string>;
        kiss(): Promise<string>;
        pat(): Promise<string>;
        poke(): Promise<string>;
        slap(): Promise<string>;
        tickle(): Promise<string>;
    }
}
