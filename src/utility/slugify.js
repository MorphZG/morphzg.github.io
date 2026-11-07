// slug generator, converts titles and text strings into URL friendly string
//
export function slugify(text) {
    return text
        .toString()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
}

// slugify("Getting Started with Astro");
// getting-started-with-astro

// slugify("Web Development & JavaScript");
// web-development-javascript

// slugify("Čćžšđ - Hrvatski");
// cczzd-hrvatski

// slugify("  My New Blog Post!  ");
// my-new-blog-post