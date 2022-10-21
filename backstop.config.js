const createBackstopConfig = require('./vendor/sigwin/infra/resources/Visual/create-backstop-config');

// the root where the files we'll test are
const root = process.env.PROJECT_ROOT + "/example-site";

// what are the scenarios we'll test?
const scenarios = [
    // whole page
    "index.html",

    // same page, specific section + click next carousel
    {"path": "index.html", "selectors": "#carousel-example-generic"},
];

// defaults applied to each scenario, can be omitted
const defaults = {};

// this can be modified before exporting if some custom stuff is required (additional viewports, etc)
module.exports = createBackstopConfig(root, scenarios, defaults);
