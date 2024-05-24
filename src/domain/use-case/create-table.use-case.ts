

export interface CreateTableUseCase {
    execute: (option: CreateTableOptions) => string;
}

export interface CreateTableOptions {
    base: number;
    limit: number;
}

export class CreateTable implements CreateTableUseCase {
    constructor(
        /**DI - Dependicy Injection */
    ){}

    execute({ base, limit = 5 }: CreateTableOptions){
        let outputMessage = '';
        for (let i = 1; i <= limit; i++) {
            outputMessage += `${base} x ${i} = ${base*i}\n`;
        }
        return outputMessage;
    }
}