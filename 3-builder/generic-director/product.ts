export class Product {
    private parts: string[] = [];

    public add(part: string): void {
        this.parts.push(part);
    }

    public listParts(): void {
        console.log(`product parts: ${this.parts.join(", ")}`)
    }
}