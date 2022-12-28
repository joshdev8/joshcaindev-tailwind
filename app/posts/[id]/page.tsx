import { ParsedUrlQuery } from 'querystring';
import { use } from 'react';
import Link from 'next/link';

interface Params extends ParsedUrlQuery {
	id?: string;
}

async function getPost(id: string) {
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
	return res.json();
}

export default function Page({ params }: Params) {
	const { id } = params as unknown as Params;
	let post = id ? use(getPost(id)) : null;

	return (
		<>
			<div className="p-4 hover:underline">
				<Link href="/posts">Back</Link>
			</div>
			<div className="p-4 text-4xl ">{post?.title ?? id}</div>
			{post && (
				<div className="flex p-4">
					<div className="p-2">{post.body}</div>
				</div>
			)}
		</>
	);
}
