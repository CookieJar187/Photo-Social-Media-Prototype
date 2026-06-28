const fakeProfiles = [
  {
    username: "benjamin",
    id: "1"
  },
  {
    username: "stefan",
    id: "2"
  },
  {
    username: "justin_122",
    id: "3"
  },
  {
    username: "igor_gaming2001",
    id: "4"
  },
  {
    username: "spaghetti_alla_napoletana",
    id: "4"
  },
]

const fakeFollowers = [
  {
    username: "stefan",
    id: "2"
  },
  {
    username: "igor_gaming2001",
    id: "4"
  },
]

const fakeFollowing = [
  {
    username: "stefan",
    id: "2"
  },
  {
    username: "spaghetti_alla_napoletana",
    id: "4"
  },
]

export function getProfiles(req, res) {
  const userId = req.user.userId;

  return res.json({
    success: true,
    profiles: fakeProfiles,
  });
}

export function getFollowers(req, res) {
  const userId = req.user.userId;

  return res.json({
    success: true,
    profiles: fakeFollowers,
  });
}

export function getFollowing(req, res) {
  const userId = req.user.userId;

  return res.json({
    success: true,
    profiles: fakeFollowing,
  });
}