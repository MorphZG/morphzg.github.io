export default function calcReadTime(inputText) {

const wordsPerMinute = 200;

const wordCount = inputText
    .trim()
    .split(/\s+/)
    .length;

return (Math.ceil(wordCount / wordsPerMinute));
}