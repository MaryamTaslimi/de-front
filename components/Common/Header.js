import Link from "next/link";

const navigation = [
    {name: 'سرمایه‌گذاران', href: 'investor'},
    {name: 'شراکت استراتژیک', href: '/partnership'},
    {name: 'سرمایه‌پذیر', href: '/startup'},
    {name: 'درباره ما', href: '/about-us'},
]

export default function Header({transparent}) {
    return (
        <header className = {transparent ? "" : "bg-white"}>
            <nav className = "px-6 sm:px-20" aria-label = "Top">
                <div
                    className = "w-full py-4 flex items-center justify-between border-b border-accent lg:border-none">
                    <div className = "flex space-x-20 items-center z-10">
                        <Link href = "/">
                            <a className = "ml-10">
                                <span className = "sr-only">مرکز فناوری دنیای اقتصاد</span>
                                <img
                                    className = "h-12 w-auto"
                                    src = "/common/logo-text.png"
                                    alt = ""
                                />
                            </a>
                        </Link>

                        {navigation.map((link) => (
                            <a key = {link.name} href = {link.href}
                               className = {"text-base font-light" + transparent ? "text-white" : "text-primary"}>
                                {link.name}
                            </a>
                        ))}
                    </div>
                    <div className = "z-10">
                        <a
                            href = "#form"
                            className = "z-10 inline-block bg-accent py-2 px-10 border border-transparent rounded-sm text-base font-extra text-black hover:bg-opacity-75"
                        >
                            همکاری با ما </a>
                    </div>
                </div>
            </nav>
        </header>
    )
}
