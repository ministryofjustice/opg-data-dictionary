const dateFilter = require('./src/filters/date-filter.js');
const date24HourFilter = require('./src/filters/date24Hours-filter.js');

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy({ 'node_modules/govuk-frontend/govuk/assets': 'assets' })
    eleventyConfig.addPassthroughCopy({ 'src/_includes/css': 'assets' })
    eleventyConfig.addPassthroughCopy({ 'src/_includes/assets': 'assets' })
    eleventyConfig.addPassthroughCopy({ 'src/_includes/scripts': 'assets' });
    eleventyConfig.addPassthroughCopy({ 'src/CNAME': '' });

    eleventyConfig.addPassthroughCopy({ 'src/_data': 'data' });

    eleventyConfig.addNunjucksGlobal("is_number", (str) => { return !isNaN(str) })

    eleventyConfig.addFilter('log', value => {
        console.log(value)
    })
    
    eleventyConfig.addFilter('dateFilter', dateFilter);
    eleventyConfig.addFilter('date24HourFilter', date24HourFilter);

    return {
        dir: { input: 'src', output: '_site', data: '_data' },
        templateFormats: ['njk', 'md', 'css', 'html', 'yml'],
        htmlTemplateEngine: 'njk',
        passthroughFileCopy: true
    }
}