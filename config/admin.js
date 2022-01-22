module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '651b5fbe0636f5abbb126c1f6f8f00aa'),
  },
});
