export const setIsDarkOrLight = (mode) => {
    if (mode) {
        localStorage.theme = "dark"
        document.documentElement.classList.add("dark")
    } else {
        localStorage.theme = "light"
        document.documentElement.classList.remove("dark")
    }
}

export const isDark = () => {
    return localStorage.theme !== "light" && (localStorage.theme === "dark" && window.matchMedia('(prefers-color-scheme: dark)').matches)
}

export const unsetIsDarkOrLight = () => {
    localStorage.removeItem('theme')
    if (isDark()) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
}