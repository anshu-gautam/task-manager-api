app.patch("/users/:id", async (req, res) => {
  const updates = Object.keys(req.body);

  const allowedUpdates = ["name", "age", "password", "email"];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(404).send({ error: "Invalid Updates" });
  }

  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      return res.status(400).send();
    }
    res.send(user);
  } catch (e) {
    res.send(400).send(e);
  }
});
