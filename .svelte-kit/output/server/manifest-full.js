export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["app-deployed-pic.png","canvas.png","canvas2.png","editor.png","favicon.png","music.opus","music2.opus","music3.opus","music4.opus","player.png"]),
	mimeTypes: {".png":"image/png",".opus":"audio/ogg"},
	_: {
		client: {"start":"_app/immutable/entry/start.DdVk41hW.js","app":"_app/immutable/entry/app.CYW8MIto.js","imports":["_app/immutable/entry/start.DdVk41hW.js","_app/immutable/chunks/entry.BBpYiepg.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/entry/app.CYW8MIto.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.BXnAILRk.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
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
