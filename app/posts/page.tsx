import { use } from 'react';
import Link from 'next/link';

async function getPosts() {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts');
	return res.json();
}

interface Post {
	id: number;
	title: string;
	userId: number;
	body: string;
}

export default function PostsPage() {
	let posts = use(getPosts());
	return (
		<ul>
			{posts.map((post: Post) => (
				<li key={post.id} className="flex p-4">
					<Link href={`/posts/${post.id}`} className="p-2">
						{post.title}
					</Link>
				</li>
			))}
		</ul>
	);
}
