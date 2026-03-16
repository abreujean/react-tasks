export type * from './auth';
export type * from './navigation';
export type * from './ui';
export type * from './task';

import type { route as routeFn } from 'ziggy-js';
import type { Auth } from './auth';

declare global {
    var route: typeof routeFn;
}

export type SharedData = {
    name: string;
    auth: Auth;
    sidebarOpen: boolean;
    [key: string]: unknown;
};

export interface BreadcrumbItem {
    title: string;
    href: string;
}