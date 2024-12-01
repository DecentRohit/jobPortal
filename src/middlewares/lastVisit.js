export const setLastVisit = (req, res, next) => {
    // 1. Check if the `lastVisit` cookie is set and add it to `res.locals` for use in views.
    if (req.cookies && req.cookies.lastVisit) {
        res.locals.lastVisit = new Date(req.cookies.lastVisit).toLocaleString();
    }

    // 2. Set/update the `lastVisit` cookie with the current date and time.
    res.cookie('lastVisit', new Date().toISOString(), {
        maxAge: 2 * 24 * 60 * 60 * 1000, // 2 days in milliseconds
        httpOnly: true, // Secure cookie by default; prevents client-side scripts from accessing it.
        sameSite: 'Strict', // Prevent cross-site cookie usage.
    });

    // 3. Call `next()` to pass control to the next middleware in the stack.
    next();
};