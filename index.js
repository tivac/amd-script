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
            id = document.currentScript.getAttribute("href");
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

        module.exports = functions[id](
            ...functions[id].dependencies.map((dep) =>
                require(dep)
            )
        );

        instances[id] = module;

        return module.exports;
    };
}());
