module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy({
        "./public/": "/"
    });

    eleventyConfig.addFilter('excerpt', (post) => {
        const content = post.replace(/(<([^>]+)>)/gi, '');
        return content.substr(0, content.lastIndexOf(' ', 200)) + '...';
    });

    return {
        // These are all optional:
        dir: {
            input: "content",          // default: "."
            includes: "../_includes",  // default: "_includes"
            data: "../_data",          // default: "_data"
            output: "_site"
        },
        passthroughFileCopy: true,
        templateFormats: ['html', 'njk', 'md'],
        htmlTemplateEngine: 'njk',
        markdownTemplateEngine: 'njk',
        pathPrefix: "/",
    };
};