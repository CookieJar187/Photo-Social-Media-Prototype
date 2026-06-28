const fakeProfiles = [
  {
    username: "benjamin",
    id: "1"
  },
  {
    username: "stefan",
    id: "2"
  },
]

export function getProfiles(req, res) {
  const userId = req.user.userId;

  return res.json({
    success: true,
    profiles: fakeProfiles,
  });
}