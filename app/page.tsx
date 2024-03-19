import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import NameCard from "./components/NameCard";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default async function Home() {
  const postDir = "published";
  const files = fs.readdirSync(path.join(postDir));
  const posts = files.map((filename) => {
    const fileContent = fs.readFileSync(path.join(postDir, filename), "utf-8");
    const { data: frontMatter } = matter(fileContent);
    return {
      meta: frontMatter,
      slug: filename.replace(".mdx", ""),
    };
  });

  return (
    <div>
      <NameCard></NameCard>
      <div className="mt-5">
        <span>Check Out Recent Posts</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-5">
        {posts.map((post, idx) => (
          <Card key={idx}>
            {/* <Image
              src={urlFor(post.postImage).url()}
              alt="image"
              width={500}
              height={500}
              className="rounded-t-lg h-[200px] object-cover"
            ></Image> */}
            <CardContent className="mt-5">
              <h3 className="text-lg line-clamp-2 font-bold">{post.meta.title}</h3>
              <p className="line-clamp-3 text-sm mt-2 text-gray-600 dark:text-gray-300">
                {post.meta.description}
              </p>
              <Button asChild className="w-full mt-7">
                <Link href={`/blog/${post.slug}`}>Read More</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="p-10">
        <Button className="w-full">
          <Link href="/posts">See More Posts</Link>
        </Button>
      </div>
    </div>
  );
}
