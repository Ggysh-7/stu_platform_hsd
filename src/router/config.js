const routes = [];
const context = require.context('@/views', true, /\.vue$/, 'lazy');

context.keys().forEach(path => {
    const componentName = path.replace(/.*\/([^\\.\\/]*)\.vue$/, '$1');
    routes.push({
        path: `/${componentName.toLowerCase()}`,
        name: componentName,
        component: () => context(path),
        meta: {
            isLink: true
        }
    });
});

export default routes;