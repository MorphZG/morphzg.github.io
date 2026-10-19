import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
    const blogPosts = await getCollection("blog");
    console.log(blogPosts);
    return rss({
        title: "Zoran Topic Blog",
        description:
            "Just a casual, simple dog, nothing extraordinary at a first glance. But beneath the surface lies a unique and peculiar one. His alterego grows from within, like a sprout after the rain. Fueld by curiosity and hungry for knowledge. Who is he? Where is he? No one knows.",
        site: context.site,
        items: blogPosts.map((post)=>{
            return({
            title: post.data.title,
            description: post.data.description,
            pubDate: post.data.pubDate,
            link: `/posts/${post.id}`
            })
        }),
    });
}
