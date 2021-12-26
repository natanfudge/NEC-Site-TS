import {Key, typedKeys} from "crash-parser/src/util/Utils";
import {Rect} from "./Gui";

export function removeSuffix(str: string, suffix: string): string {
    return str.endsWith(suffix) ? str.slice(0, str.length - suffix.length) : str;
}

export function objectMap<V, R>(object: Record<string, V>, mapFn: (key: string, value: V, index: number) => R): R[] {
    return typedKeys(object).map((key, index) => mapFn(key, object[key], index), {});
}

export function objectFilter<V>(object: Record<string, V>, filter: (key: string, value: V) => boolean): Record<string, V> {
    const newObj: Record<string, V> = {};
    for (const key in object) {
        const value = object[key];
        if (filter(key, object[key])) newObj[key] = value;
    }
    return newObj;
}

export function indexOfOrThrow<T>(arr: T[], element: T): number {
    const index = arr.indexOf(element);
    if (index === -1) throw new Error(`The element '${element}' doesn't exist in the array: ${arr}`)
    return index;
}


export function withoutKey<K extends Key, V, RK extends Key>(record: Record<K, V>, key: RK): Omit<Record<K, V>, RK> {
    if (!(key in record)) return record;
    const {[key]: value, ...otherProps} = record;
    return otherProps;
}


export function coercePreferMin(num: number, bounds: { min: number, max: number }): number {
    // Opinionated preferral of min over max
    if (bounds.min > bounds.max) return bounds.min;
    if (num < bounds.min) {
        return bounds.min;
    } else if (num > bounds.max) {
        return bounds.max
    } else {
        return num;
    }
}

export interface Cookie {
    name: string
    value: string
    expires: Date
    // path: string
}

export function setCookie(cookie: Cookie) {
    document.cookie = `${cookie.name}=${encodeURIComponent(cookie.value)};expires=${cookie.expires.toUTCString()};path=${window.location.pathname}`
}

export function getCookieValue(name: string): string | undefined {
    const cookies = document.cookie.split("; ");
    const targetCookie = cookies.find(row => row.startsWith(name + "="))
    if (targetCookie === undefined) return undefined;
    const [key, value] = targetCookie.split("=")
    return value;
}

export function getDocumentRelativeRect(element?: Element | null): Rect { // crossbrowser version
    if (element === undefined || element === null) return {left: 0, top: 0, width: 0, height: 0}
    const box = element.getBoundingClientRect();
    return {
        top: box.top + window.scrollY,
        left: box.left + window.scrollX,
        width: box.width,
        height: box.height
    }
}

// export function isPortrait(): boolean {
//     return window.innerWidth < window.innerHeight;
// }