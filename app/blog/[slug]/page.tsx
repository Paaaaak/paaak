import { client, urlFor } from "@/app/lib/sanity";

async function getData(slug: string) {
    const query = `
      * [_type == 'blog' && slug.current == '${slug}'] | order(_createdAt asc) {
        "currentSlug": slug.current,
        title,
        content,
        postImage
      }`;
  
      const data = await client.fetch(query);
      return data;
  }

export default async function BlogArticle({params}: {params: {slug: string}}) {
    const data = await getData(params.slug);
    console.log(data);

    return <h1>{params.slug}</h1>;
}