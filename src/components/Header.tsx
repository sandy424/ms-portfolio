export default function Header() {
    return(
        <header className="flex items-center justify-between mb-16 bg-[#1A1A1A] rounded-2xl px-3 py-2">
            <span className="flex items-center gap-2 pl-2 text-white font-bold tracking-tight text-base">
                <img src="/Logo.png" alt="logo" width={28} height={28} />
                Kang Minseo
            </span>
            <a href="https://github.com/sandy424" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold bg-white text-black">
                Go to Github
            </a>
        </header>
    )
}