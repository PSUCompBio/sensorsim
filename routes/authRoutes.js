const passport = require("passport");

// route handler
module.exports = app => {
  // first route handler
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );
  // second route handler
  app.get("/auth/google/callback", passport.authenticate("google"));

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  //third route handler
  //req incoming request
  //res outgoing response
  app.get("/api/current_user", (req, res) => {
    // immediate send back res.second
    res.send(req.user);
  });
};
