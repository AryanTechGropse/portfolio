export const authMiddleware = async (request, reply) => {
    const token = request.headers["x-auth-token"];
    const userType = request.headers["x-user-type"];

    if (!token || !userType) {
        return reply
            .code(401)
            .send({ error: "Unauthorized: x-auth-token and x-user-type required" });
    }

    // Optionally, you can attach headers to request object
    request.user = {
        token,
        type: userType,
    };
};
