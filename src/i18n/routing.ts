import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';
 
export const routing = defineRouting({
  locales: ['hi', 'en', 'ja'],
  defaultLocale: 'hi'
});
 
export const {Link, redirect, usePathname, useRouter, getPathname} =
  createNavigation(routing);
