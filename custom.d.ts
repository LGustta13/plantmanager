/**
 * Sempre que um arquivo terminar com .png, faz-se o seguinte procedimento
 * safetyArea, usar padding no Android
 */
declare module '*.png' {
    const content: any;
    export default content;
}