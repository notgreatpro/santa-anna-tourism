// A single clickable link — every nav item and every mega-menu link is one of these
export interface NavLink {
    label: string;
    href: string;
}

// One column inside a mega-menu dropdown (e.g. "Nature & Bike Life")
export interface MegaMenuColumn {
 title: string;
 links: NavLink[]; //an array (list) of NavLink objects
}

// A top-level nav item, like "Things To Do" or "Neighborhoods"
export interface NavItem {
    label: string;
    href: string;
    columns?: MegaMenuColumn[];
}