
declare module 'usagiapi' {
    export class UsagiAPIClient {
        url: 'https://usagiapi.danielagc.repl.co/api/'
        async dance(): Promise<string>;
        async feed(): Promise<string>;
        async hug(): Promise<string>;
        async kiss(): Promise<string>;
        async pat(): Promise<string>;
        async poke(): Promise<string>;
        async slap(): Promise<string>;
        async tickle(): Promise<string>;
    }
}