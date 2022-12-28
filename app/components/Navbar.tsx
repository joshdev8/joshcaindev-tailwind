import Link from 'next/link';

export default function Navbar() {
	return (
		<header className="sticky top-0 z-30 w-full bg-black px-2 py-4 shadow-xl shadow-blue-600/20 sm:px-4">
			<div className="flex w-full items-center justify-between border shadow-lg dark:border-gray-800">
				<div className="p-4">
					<a href="#" className="text-xl font-bold">
						JoshCainDev
					</a>
				</div>
				<div className="flex p-2 text-sm font-semibold">
					<Link href="/" className="p-2 hover:underline md:mr-6 ">
						Home
					</Link>
					<Link href="/blog" className="p-2 hover:underline md:mr-6 ">
						Blog
					</Link>
					<Link href="/posts" className="p-2 hover:underline md:mr-6 ">
						Posts
					</Link>
				</div>
			</div>
		</header>
	);
}
