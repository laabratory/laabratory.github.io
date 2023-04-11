const isDark = () => {
    return localStorage.theme === "dark" || window.matchMedia('(prefers-color-scheme: dark)').matches
}

if (isDark()) document.documentElement.classList.add('dark')