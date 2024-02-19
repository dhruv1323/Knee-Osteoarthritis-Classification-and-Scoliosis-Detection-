export { default } from "next-auth/middleware"

export const config = {
    matcher: ["/pages/uploadImage",
        "/pages/osteoarthritis",
        "/pages/scoliosis"]
};