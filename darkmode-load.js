if (localStorage.theme !== "light" && (localStorage.theme === "dark" || window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
}