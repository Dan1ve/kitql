/* eslint-disable */
/**
 * This file was generated by 'vite-plugin-kit-routes'
 *
 *      >> DO NOT EDIT THIS FILE MANUALLY <<
 */

/**
 * PAGES
 */
const PAGES = {
	'/': `/`
};

/**
 * SERVERS
 */
const SERVERS = {};

/**
 * ACTIONS
 */
const ACTIONS = {};

/**
 * LINKS
 */
const LINKS = {
	twitter_jycouet: `https://twitter.com/jycouet`,
	github_kitql: `https://github.com/jycouet/kitql`,
	github_remult: `https://github.com/jycouet/kitql`
};

/**
 * Append search params to a string
 */
const appendSp = (sp?: Record<string, string | number | undefined>, prefix: '?' | '&' = '?') => {
	if (sp === undefined) return '';
	const mapping = Object.entries(sp)
		.filter((c) => c[1] !== undefined)
		.map((c) => [c[0], String(c[1])]);

	const formated = new URLSearchParams(mapping).toString();
	if (formated) {
		return `${prefix}${formated}`;
	}
	return '';
};

/**
 * get the current search params
 *
 * Could be use like this:
 * ```
 * route("/cities", { page: 2 }, { ...currentSP() })
 * ```
 */
export const currentSp = () => {
	const params = new URLSearchParams(window.location.search);
	const record: Record<string, string> = {};
	for (const [key, value] of params.entries()) {
		record[key] = value;
	}
	return record;
};

// route function helpers
type NonFunctionKeys<T> = { [K in keyof T]: T[K] extends Function ? never : K }[keyof T];
type FunctionKeys<T> = { [K in keyof T]: T[K] extends Function ? K : never }[keyof T];
type FunctionParams<T> = T extends (...args: infer P) => any ? P : never;

const AllObjs = { ...PAGES, ...ACTIONS, ...SERVERS, ...LINKS };
type AllTypes = typeof AllObjs;

/**
 * To be used like this:
 * ```ts
 * import { route } from './ROUTES'
 *
 * route('site_id', { id: 1 })
 * ```
 */
export function route<T extends FunctionKeys<AllTypes>>(
	key: T,
	...params: FunctionParams<AllTypes[T]>
): string;
export function route<T extends NonFunctionKeys<AllTypes>>(key: T): string;
export function route<T extends keyof AllTypes>(key: T, ...params: any[]): string {
	if ((AllObjs[key] as any) instanceof Function) {
		const element = (AllObjs as any)[key] as (...args: any[]) => string;
		return element(...params);
	} else {
		return AllObjs[key] as string;
	}
}

/**
 * Add this type as a generic of the vite plugin `kitRoutes<KIT_ROUTES>`.
 *
 * Full example:
 * ```ts
 * import type { KIT_ROUTES } from './ROUTES'
 * import { kitRoutes } from 'vite-plugin-kit-routes'
 *
 * kitRoutes<KIT_ROUTES>({
 *  PAGES: {
 *    // here, key of object will be typed!
 *  }
 * })
 * ```
 */
export type KIT_ROUTES = {
	PAGES: { '/': never };
	SERVERS: Record<string, never>;
	ACTIONS: Record<string, never>;
	LINKS: { twitter_jycouet: never; github_kitql: never; github_remult: never };
	Params: Record<string, never>;
};
