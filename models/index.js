const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

User.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id'
});

Comment.belongsTo(User, {
    foreignkey: 'user_id'
});

Comment.belongsTo(Post, {
    foreignkey: 'post_id'
});

User.hasMany(Comment, {
    foreignkey: 'user_id'
});

Post.hasMany(Comment, {
    foreignkey: 'post_id'
});

module.exports = { User, Post, Comment };