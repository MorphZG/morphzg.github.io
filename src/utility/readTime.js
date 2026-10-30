const wordsPerMinute = 200;

// Get the post content and count words
const wordCount = post.body
    .trim()
    .split(/\s+/)
    .length;

// Calculate reading time
const readTime = Math.ceil(wordCount / wordsPerMinute);