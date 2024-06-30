/* Navigation */
export interface INavItem {
    link: string
    name?: string
    icon?: string
}

export const navItems: INavItem[] = [
    { icon: 'home', link: '/' },
    { name: 'Projects', link: '/#shipped-projects' },
    { name: 'Experience', link: '/#work-experience' }
]

/* Shipped projects */
export interface IShippedProject {
    id: number
    title: string
    description: string
    year: number
}

export const shippedProjects: IShippedProject[] = [
    {
        id: 1,
        title: "Maiden Voyage",
        description: "Omnigame's best-selling game of that year",
        year: 2021
    },
    {
        id: 2,
        title: "Den Store Bagedag",
        description: "Developed in 5 weeks for Danske Spil",
        year: 2021
    }
]

/* Recent projects */
export interface IRecentProject {
    id: number
    title: string
    description: string
    image: string
    link: string
    techIcons: string[]
}
export const recentProjects: IRecentProject[] = [
    {
        id: 2,
        title: "K-Means Clustering Algorithm Demo",
        description: "",
        image: "",
        link: "",
        techIcons: ["unity", "c#"]
    }
]