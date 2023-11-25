/**
 * This file was generated by 'vite-plugin-kit-routes'
 *
 *      >> DO NOT EDIT THIS FILE MANUALLY <<
 */

export const PAGES = {
	'/': `/`
};

export const SERVERS = {};

export const ACTIONS = {};

export const LINKS = {
	twitter_jycouet: `https:/twitter.com/jycouet`,
	github_kitql: `https:/github.com/jycouet/kitql`,
	github_remult: `https:/github.com/jycouet/kitql`
};

const appendSp = (sp?: Record<string, string | number | undefined>) => {
	if (sp === undefined) return '';
	const mapping = Object.entries(sp)
		.filter((c) => c[1] !== undefined)
		.map((c) => [c[0], String(c[1])]);

	const formated = new URLSearchParams(mapping).toString();
	if (formated) {
		return `?${formated}`;
	}
	return '';
};

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
 *    // here, "paths" it will be typed!
 *  }
 * })
 * ```
 */
export type KIT_ROUTES = {
	PAGES: { '/': never };
	SERVERS: {};
	ACTIONS: {};
	LINKS: { twitter_jycouet: never; github_kitql: never; github_remult: never };
	Params: {};
};