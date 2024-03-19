import Image from "next/image";
import fs from 'fs';
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";

export async function generateStaticParams() {
    const files = fs.readdirSync(path.join('published'));
    const paths = files.map(filename => ({
        slug: filename.replace('.mdx', '')
    }))
    return paths;
}

function getPost({ slug }: { slug: string }) {
    const markdownFile = fs.readFileSync(path.join('published', slug + '.mdx'), 'utf-8');
    const { data: frontMatter, content } = matter(markdownFile);
    return {
        frontMatter, 
        slug,
        content
    }
}

export default async function Page({ params }: any) {
    const props = getPost(params);

    return (
        <article className="prose prose-sm md:prose-base lg:prose-lg prose-slate prose-invert mx-auto">
            <h1>
                <span className="block text-base text-center text-primary font-semibold tracking-wide uppercase">
                    Jaehyeon - Blog
                </span>
                <span className="mt-2 block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl">
                    {props.frontMatter.title}
                </span>
            </h1>
            {/* <Image
                src={urlFor(data.postImage).url()}
                width={800}
                height={400}
                alt="Title Image"
                priority
                className="rounded-lg mt-8 border"
            /> 
            <div className="mt-16 prose prose-blue prose-lg dark:prose-invert prose-li:marker:text-primary prose-a:text-primary">
                <PortableText value={data.content} />
            </div> */}
            <MDXRemote source={props.content}></MDXRemote>
        </article>
    );
}