app.post("/users/signup", async (req, res) => {
  const { username, email, password } = req.body;
  return await myDataSource.query(
    `
      INSERT INTO
        users (
          username,
          email,
          password			
        )
      VALUES (
        ?,
        ?,
        ?
      )
    `,
    [username, email, password]
  );
});

app.post("/users/signin", async (req, res) => {
  const { email, password } = req.body;
  const user = await myDataSource.query(
    `
    SELECT
      users.id
    FROM
      users
    WHERE
      users.email = ?
   `,
    [email]
  );

  if (!user) {
    res.json({ message: "SIGNUP_REQUIRED" });
  }

  return res.json({ userId: user.id });
});
