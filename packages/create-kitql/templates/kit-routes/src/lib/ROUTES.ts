/**
 * This file was generated by 'vite-plugin-kit-routes'
 *
 *      >> DO NOT EDIT THIS FILE MANUALLY <<
 */

export const PAGES = {
	'/': `/`,
	'/about': `/about`,
	'/your-face': `/your-face`
};

export const SERVERS = {};

export const ACTIONS = {};

export const LINKS = {
	twitter: `https:/twitter.com/jycouet`,
	github: `https:/github.com/jycouet/kitql`,
	github_avatar: (params: { author: string | number }) => {
		return `https:/avatars.githubusercontent.com/${params.author}`;
	},
	gravatar: (params: { str: string | number; s?: number; d?: 'retro' | 'identicon' }) => {
		params.s = params.s ?? 75;
		params.d = params.d ?? 'identicon';
		return `https:/www.gravatar.com/avatar/${params.str}${appendSp({ s: params.s, d: params.d })}`;
	}
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
	PAGES: { '/': never; '/about': never; '/your-face': never };
	SERVERS: {};
	ACTIONS: {};
	LINKS: { twitter: never; github: never; github_avatar: 'author'; gravatar: 'str' };
	Params: { author: never; str: never; s: never; d: never };
};