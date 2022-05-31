const { init } = require('../serverless.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["database.svg"]),
	mimeTypes: {".svg":"image/svg+xml"},
	_: {
		entry: {"file":"start-89267cd8.js","js":["start-89267cd8.js","chunks/index-80d79615.js","chunks/index-3b236717.js"],"css":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/26.js')),
			() => Promise.resolve().then(() => require('../server/nodes/2.js')),
			() => Promise.resolve().then(() => require('../server/nodes/3.js')),
			() => Promise.resolve().then(() => require('../server/nodes/21.js')),
			() => Promise.resolve().then(() => require('../server/nodes/25.js')),
			() => Promise.resolve().then(() => require('../server/nodes/7.js')),
			() => Promise.resolve().then(() => require('../server/nodes/13.js')),
			() => Promise.resolve().then(() => require('../server/nodes/19.js')),
			() => Promise.resolve().then(() => require('../server/nodes/20.js')),
			() => Promise.resolve().then(() => require('../server/nodes/22.js')),
			() => Promise.resolve().then(() => require('../server/nodes/23.js')),
			() => Promise.resolve().then(() => require('../server/nodes/24.js')),
			() => Promise.resolve().then(() => require('../server/nodes/4.js')),
			() => Promise.resolve().then(() => require('../server/nodes/5.js')),
			() => Promise.resolve().then(() => require('../server/nodes/6.js')),
			() => Promise.resolve().then(() => require('../server/nodes/8.js')),
			() => Promise.resolve().then(() => require('../server/nodes/9.js')),
			() => Promise.resolve().then(() => require('../server/nodes/10.js')),
			() => Promise.resolve().then(() => require('../server/nodes/11.js')),
			() => Promise.resolve().then(() => require('../server/nodes/12.js')),
			() => Promise.resolve().then(() => require('../server/nodes/14.js')),
			() => Promise.resolve().then(() => require('../server/nodes/15.js')),
			() => Promise.resolve().then(() => require('../server/nodes/16.js')),
			() => Promise.resolve().then(() => require('../server/nodes/17.js')),
			() => Promise.resolve().then(() => require('../server/nodes/18.js'))
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "Sorry",
				pattern: /^\/Sorry\/?$/,
				names: [],
				types: [],
				path: "/Sorry",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				id: "database",
				pattern: /^\/database\/?$/,
				names: [],
				types: [],
				path: "/database",
				shadow: null,
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				id: "game",
				pattern: /^\/game\/?$/,
				names: [],
				types: [],
				path: "/game",
				shadow: null,
				a: [0,5],
				b: [1]
			},
			{
				type: 'page',
				id: "home",
				pattern: /^\/home\/?$/,
				names: [],
				types: [],
				path: "/home",
				shadow: null,
				a: [0,6],
				b: [1]
			},
			{
				type: 'page',
				id: "database/math",
				pattern: /^\/database\/math\/?$/,
				names: [],
				types: [],
				path: "/database/math",
				shadow: null,
				a: [0,7],
				b: [1]
			},
			{
				type: 'page',
				id: "database/physics",
				pattern: /^\/database\/physics\/?$/,
				names: [],
				types: [],
				path: "/database/physics",
				shadow: null,
				a: [0,8],
				b: [1]
			},
			{
				type: 'page',
				id: "database/topic",
				pattern: /^\/database\/topic\/?$/,
				names: [],
				types: [],
				path: "/database/topic",
				shadow: null,
				a: [0,9],
				b: [1]
			},
			{
				type: 'page',
				id: "game/discord",
				pattern: /^\/game\/discord\/?$/,
				names: [],
				types: [],
				path: "/game/discord",
				shadow: null,
				a: [0,10],
				b: [1]
			},
			{
				type: 'page',
				id: "game/leaderboard",
				pattern: /^\/game\/leaderboard\/?$/,
				names: [],
				types: [],
				path: "/game/leaderboard",
				shadow: null,
				a: [0,11],
				b: [1]
			},
			{
				type: 'page',
				id: "game/physicsGame",
				pattern: /^\/game\/physicsGame\/?$/,
				names: [],
				types: [],
				path: "/game/physicsGame",
				shadow: null,
				a: [0,12],
				b: [1]
			},
			{
				type: 'page',
				id: "game/topic",
				pattern: /^\/game\/topic\/?$/,
				names: [],
				types: [],
				path: "/game/topic",
				shadow: null,
				a: [0,13],
				b: [1]
			},
			{
				type: 'page',
				id: "database/math/all",
				pattern: /^\/database\/math\/all\/?$/,
				names: [],
				types: [],
				path: "/database/math/all",
				shadow: null,
				a: [0,14],
				b: [1]
			},
			{
				type: 'page',
				id: "database/math/functions",
				pattern: /^\/database\/math\/functions\/?$/,
				names: [],
				types: [],
				path: "/database/math/functions",
				shadow: null,
				a: [0,15],
				b: [1]
			},
			{
				type: 'page',
				id: "database/math/geoTrig",
				pattern: /^\/database\/math\/geoTrig\/?$/,
				names: [],
				types: [],
				path: "/database/math/geoTrig",
				shadow: null,
				a: [0,16],
				b: [1]
			},
			{
				type: 'page',
				id: "database/math/numAlg",
				pattern: /^\/database\/math\/numAlg\/?$/,
				names: [],
				types: [],
				path: "/database/math/numAlg",
				shadow: null,
				a: [0,17],
				b: [1]
			},
			{
				type: 'page',
				id: "database/math/statProp",
				pattern: /^\/database\/math\/statProp\/?$/,
				names: [],
				types: [],
				path: "/database/math/statProp",
				shadow: null,
				a: [0,18],
				b: [1]
			},
			{
				type: 'page',
				id: "database/physics/atomic",
				pattern: /^\/database\/physics\/atomic\/?$/,
				names: [],
				types: [],
				path: "/database/physics/atomic",
				shadow: null,
				a: [0,19],
				b: [1]
			},
			{
				type: 'page',
				id: "database/physics/electricityAndmagnetism",
				pattern: /^\/database\/physics\/electricityAndmagnetism\/?$/,
				names: [],
				types: [],
				path: "/database/physics/electricityAndmagnetism",
				shadow: null,
				a: [0,20],
				b: [1]
			},
			{
				type: 'page',
				id: "database/physics/energyProduction",
				pattern: /^\/database\/physics\/energyProduction\/?$/,
				names: [],
				types: [],
				path: "/database/physics/energyProduction",
				shadow: null,
				a: [0,21],
				b: [1]
			},
			{
				type: 'page',
				id: "database/physics/measurementsAnduncertainty",
				pattern: /^\/database\/physics\/measurementsAnduncertainty\/?$/,
				names: [],
				types: [],
				path: "/database/physics/measurementsAnduncertainty",
				shadow: null,
				a: [0,22],
				b: [1]
			},
			{
				type: 'page',
				id: "database/physics/mechanics",
				pattern: /^\/database\/physics\/mechanics\/?$/,
				names: [],
				types: [],
				path: "/database/physics/mechanics",
				shadow: null,
				a: [0,23],
				b: [1]
			},
			{
				type: 'page',
				id: "database/physics/quantumAndnuclearPhysics",
				pattern: /^\/database\/physics\/quantumAndnuclearPhysics\/?$/,
				names: [],
				types: [],
				path: "/database/physics/quantumAndnuclearPhysics",
				shadow: null,
				a: [0,24],
				b: [1]
			},
			{
				type: 'page',
				id: "database/physics/thermal",
				pattern: /^\/database\/physics\/thermal\/?$/,
				names: [],
				types: [],
				path: "/database/physics/thermal",
				shadow: null,
				a: [0,25],
				b: [1]
			},
			{
				type: 'page',
				id: "database/physics/waves",
				pattern: /^\/database\/physics\/waves\/?$/,
				names: [],
				types: [],
				path: "/database/physics/waves",
				shadow: null,
				a: [0,26],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
