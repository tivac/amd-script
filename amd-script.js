var define, require;

(function() {
    var functions = {},
        instances = {};

    define = (id, dependencies, fn) => {
        // Anonymous w/o deps
        if(typeof id === "function") {
            fn = id;
            id = false;
        }
        
        // Anonymous w/ deps
        if(Array.isArray(id)) {
            fn = dependencies;
            dependencies = id;
            id = false;
        }
        
        if(!id) {
            id = document.currentScript.getAttribute("src");
        }

        functions[id] = typeof fn === "function" ? fn : () => fn;
        functions[id].dependencies = Array.isArray(dependencies) ? dependencies : [];
    };

    // AMD requires this - https://github.com/amdjs/amdjs-api/blob/master/AMD.md#defineamd-property-
    define.amd = {};

    // Only supports the sync form
    require = (id) => {
        var module;

        if(instances[id]) {
            return instances[id].exports;
        }

        module = {
            id,
            exports : {},
        };

        const result = functions[id](
            ...functions[id].dependencies.map((dep) => {
                if(dep === "module") {
                    return module;
                }

                if(dep === "require") {
                    return require;
                }

                if(dep === "exports") {
                    return module.exports;
                }

                return require(dep);
            })
        );

        if(result) {
            module.exports = result;
        }

        instances[id] = module;

        return module.exports;
    };
}());
