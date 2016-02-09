'use strict';

let me = {};

me.act = function ({toggl, views}, token, description) {
	toggl.startTimeEntry(token, description)
		.then(views.started)
		.catch(views.err);
};

me = require('mee')(module, me, {
	toggl: require('../toggl.js'),
	views: require('../views.js')
});
