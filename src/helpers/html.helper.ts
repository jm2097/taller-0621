export const html = (raw: string | TemplateStringsArray): Element => {
    const parser = new DOMParser();

    const parsed = parser.parseFromString(raw.toString(), 'text/html')
        .body
        .firstElementChild!;

    return parsed;
}