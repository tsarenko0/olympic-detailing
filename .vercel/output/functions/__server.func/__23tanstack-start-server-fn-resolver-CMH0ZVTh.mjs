//#region node_modules/.nitro/vite/services/ssr/assets/__23tanstack-start-server-fn-resolver-CMH0ZVTh.js
var manifest = { "d3e5d78746fef4f74fcb04c73a82ec539db56a2d2d15e40e3b0f255be1fa9845": {
	functionName: "submitContactLead_createServerFn_handler",
	importer: () => import("./_ssr/submit-contact-lead-DX4R31GT.mjs")
} };
async function getServerFnById(id, access) {
	const serverFnInfo = manifest[id];
	if (!serverFnInfo) throw new Error("Server function info not found for " + id);
	const fnModule = serverFnInfo.module ?? await serverFnInfo.importer();
	if (!fnModule) throw new Error("Server function module not resolved for " + id);
	const action = fnModule[serverFnInfo.functionName];
	if (!action) throw new Error("Server function module export not resolved for serverFn ID: " + id);
	return action;
}
//#endregion
export { getServerFnById as t };
