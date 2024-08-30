const router = require('express').Router();
const { Post, Comment, User } = require('../models');

router.get('/post/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [User, { model: Comment, include: [User] }]
    });
    if (postData) {
      const post = postData.get({ plain: true });
      res.render('post', { post, loggedIn: req.session.loggedIn });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/post/:id/comment', async (req, res) => {
  try {
    if (req.session.loggedIn) {
      await Comment.create({
        comment_text: req.body.comment_text,
        post_id: req.params.id,
        user_id: req.session.user_id
      });
      res.redirect(`/post/${req.params.id}`);
    } else {
      res.redirect('/login');
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
