var Wombat = function(opts) {
    "use strict";

    opts = opts || {};

    this.name = opts.name || 'Wally';

    this.eat = function(food) {
        if (!food) {
            throw new Error('D:');
        }
        return 'nom nom';
    };

    return this;
};
