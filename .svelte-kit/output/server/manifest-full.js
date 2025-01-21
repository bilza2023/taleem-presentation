export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["app-deployed-pic.png","canvas.png","canvas2.png","editor.png","favicon.png","images/player.jpg","images/player.png","images/wood.jpg","images/wood.png","music.opus","music2.opus","music3.opus","music4.opus","player.png"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg",".opus":"audio/ogg"},
	_: {
		client: {"start":"_app/immutable/entry/start.D-3rGSzU.js","app":"_app/immutable/entry/app.enduk9QL.js","imports":["_app/immutable/entry/start.D-3rGSzU.js","_app/immutable/chunks/entry.BykdLXUG.js","_app/immutable/chunks/scheduler.Zj5W8Wif.js","_app/immutable/entry/app.enduk9QL.js","_app/immutable/chunks/preload-helper.C1FmrZbK.js","_app/immutable/chunks/scheduler.Zj5W8Wif.js","_app/immutable/chunks/index.Di1jUxA_.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/canvasEditor",
				pattern: /^\/canvasEditor\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/canvasPlayer",
				pattern: /^\/canvasPlayer\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/editorDemo",
				pattern: /^\/editorDemo\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/editor",
				pattern: /^\/editor\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/eqEditor",
				pattern: /^\/eqEditor\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/eqPlayer",
				pattern: /^\/eqPlayer\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/playerDemo",
				pattern: /^\/playerDemo\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/player",
				pattern: /^\/player\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
