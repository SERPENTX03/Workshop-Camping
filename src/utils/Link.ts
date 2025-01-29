type NavLink = {
    href: string,
    label: string,
}

export const links: NavLink[] = [
    { href: "/", label: "Home" },
    { href: "/profile", label: "Profile" },
    { href: "/favorits", label: "Favorits" },
    { href: "/camp", label: "Camp" },
    { href: "/camp/create", label: "Create Landmark" },
]