const fakePosts = [
  {
    id: "1",
    authorId: "1",
    title: "Picture of an apple",
    description: "I've spent a lot of time taking a picture of this apple, roughly 700 years.",
    createdAt: "2026-06-25T12:00:00Z",
  },
  {
    id: "2",
    authorId: "1",
    title: "Picture of my cat alfred",
    description: "Alfred has won the world cup in 2014 btw",
    createdAt: "2026-06-25T12:00:00Z",
  },
]

export function getPosts(req, res) {
  const userId = req.user.userId;

  return res.json({
    success: true,
    posts: fakePosts,
  });
}