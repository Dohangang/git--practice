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
