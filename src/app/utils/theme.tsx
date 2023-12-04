export type ThemeProperty =
    | "--background"
    | "--text"
    | "--text-inactive"
    | "--accent"
    | "font-accent";

export function setThemeProperty(property: ThemeProperty, newValue: string) {
    document.documentElement.style.setProperty(property, newValue);
}
