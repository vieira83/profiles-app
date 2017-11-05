const getNamesFromContext = context => {
    return context.keys().map(path => {
        const name = context(`${path}`);

        return name.default ? name.default : name.moduleName;
    });
};

const pagesContext = require.context(".", true, /index$/);
const servicesContext = require.context("./services", true, /^((?!test).)*.js$/);
const componentsContext = require.context("./components", true, /component$/);

const pagesNames = getNamesFromContext(pagesContext);
const serviceNames = getNamesFromContext(servicesContext);
const componentNames = getNamesFromContext(componentsContext);

export {
    pagesNames,
    serviceNames,
    componentNames
};
