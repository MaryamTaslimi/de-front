const navigation = [
    {name: 'سرمایه‌گذاران', href: '#'},
    {name: 'سرمایه‌پذیر', href: '#'},
    {name: 'شراکت استراتژیک', href: '#'},
]

export default function Header({transparent}) {
    return (
        <header className = {transparent ? "" : "bg-white"}>
            <nav className = "px-6 sm:px-20" aria-label = "Top">
                <div
                    className = "w-full py-4 flex items-center justify-between border-b border-accent lg:border-none">
                    <div className = "flex space-x-20 items-center z-10">
                        <a href = "#" className = "ml-10">
                            <span className = "sr-only">مرکز فناوری دنیای اقتصاد</span>
                            <img
                                className = "h-12 w-auto"
                                src = "/logo.png"
                                alt = ""
                            />
                        </a>
                        {navigation.map((link) => (
                            <a key = {link.name} href = {link.href}
                               className = {"text-base font-extralight" + transparent ? "text-white" : "text-primary"}>
                                {link.name}
                            </a>
                        ))}
                    </div>
                    <div className="z-10">
                        <a
                            href = "#"
                            className = "z-10 inline-block bg-accent py-2 px-10 border border-transparent rounded-md text-base font-extralight text-black hover:bg-opacity-75"
                        >
                            همکاری با ما </a>
                    </div>
                </div>
            </nav>
        </header>
    )
}
