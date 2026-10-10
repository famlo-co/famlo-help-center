/**
 * DNS providers for "Connect your own domain", most-used first.
 *
 * Every link is to the provider's own help site and was opened and checked on
 * the date in `checked`. When a provider moves a page, the link-checking step
 * in the release process should catch it; replace the URL here, nowhere else.
 */

export type Registrar = {
  id: string;
  name: string;
  /** Optional short note beside the name, e.g. "Also Google Domains". */
  hostNote?: string;
  /** Where DNS settings live, in the provider's own words. */
  where: string;
  /** Provider-specific things that trip people up. Plain sentences. */
  tips: string[];
  links: {label: string; url: string}[];
};

export const checked = '2026-10-10';

// Filled from the verified registrar research by the domain guide's writer.
export const registrars: Registrar[] = [];
