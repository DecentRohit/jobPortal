export const setLastVisit = (req, res, next) => {
    if (!req.session.lastVisitDisplayed) {
        if (req.cookies && req.cookies.lastVisit) {
            res.locals.lastVisit = new Date(req.cookies.lastVisit).toLocaleString();
            res.locals.showLastVisit = true; // Display the message
            req.session.lastVisitDisplayed = true; // Mark as displayed
        } else {
            res.locals.showLastVisit = false; // No previous visit
        }
    } else {
        res.locals.showLastVisit = false; // Already displayed in this session
    }

    res.cookie('lastVisit', new Date().toISOString(), {
        maxAge: 2 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: 'Strict',
    });

    next();
};
