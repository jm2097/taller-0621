export const html = (raw: string): Element => {
    const parser = new DOMParser();

    const parsed = parser.parseFromString(raw, 'text/html')
        .body
        .firstElementChild!;

    return parsed;
}