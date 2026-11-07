export function categoryCount(posts) {
    return posts.reduce((counts, post) => {
        const category = post.data.category;

        if (!category) return counts;

        counts.set(category, (counts.get(category) ?? 0) + 1);

        return counts;
    }, new Map());
}