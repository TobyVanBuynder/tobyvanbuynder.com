/* Navigation */
export interface INavItem {
    link: string;
    name?: string;
    icon?: string;
}

export const navItems: INavItem[] = [
    { icon: 'home', link: '/' },
    { name: 'Projects', link: '/#shipped-projects' },
    { name: 'Experience', link: '/#work-experience' }
]

/* Grid Items */
interface IShippedProjectGridItem {
    title: string,
    description: string,
    id: number;
}

export const shippedProjectsGridItems: IShippedProjectGridItem[] = [
    {
        title: "Den Store Bagedag",
        description: "Developed in 5 weeks for Danske Spil",
        id: 1
    },
    {
        title: "Maiden Voyage",
        description: "Omnigame's Best-selling game at time of release",
        id: 2
    }
]