const { RESOURCE_ID, USER_TYPE_PERMISSIONS } = require("modules/resources");
const { checkUserTypeMenuPermissions } = require("utils/permissionUtils");

const routes = [
    { path: "/home", id: RESOURCE_ID.TEST.HOME },
    { path: "/profile", id: RESOURCE_ID.TEST.PROFILE },
    { path: "/settings", id: RESOURCE_ID.TEST.SETTINGS }
];

describe("checkPermissions", () => {

    it("should return only routes that match user permissions", () => {
        const permissions = [USER_TYPE_PERMISSIONS.CUSTOMER];
        const filteredRoutes = checkUserTypeMenuPermissions(routes, permissions);
        expect(filteredRoutes).toEqual([
            { path: "/home", id: RESOURCE_ID.TEST.HOME },
            { path: "/settings", id: RESOURCE_ID.TEST.SETTINGS }
        ]);
    });

    it("should return all routes if user has admin permissions", () => {
        const filteredRoutes = checkUserTypeMenuPermissions(routes, [USER_TYPE_PERMISSIONS.ADMIN]);
        expect(filteredRoutes).toEqual(routes);
    });

    it("should return empty array if no match with user permissions", () => {
        const permissions = [USER_TYPE_PERMISSIONS.UN_AUTHORIZED];
        const filteredRoutes = checkUserTypeMenuPermissions(routes, permissions);
        expect(filteredRoutes).toEqual([]);
    });
});
