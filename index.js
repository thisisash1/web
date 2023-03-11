const cfonts = require('cfonts');
const banner = cfonts.render((`META KONGZ LEO`), {
        font: 'block',
        color: 'black',
        align: 'left',
        gradient: ["white","white"],
        lineHeight: 1
    });
console.log(banner.string); 