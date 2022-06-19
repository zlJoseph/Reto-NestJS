export class Nodo {

    constructor(private data: any, private next: Nodo | null = null) {}

    public getData(): any {
        return this.data;
    }

    public getNext(): Nodo | null {
        return this.next;
    }

    public setNext(next: Nodo | null): void {
        this.next=next;
    }

}