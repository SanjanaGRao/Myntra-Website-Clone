module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'cc492a0c15ce04ba245bac8412ff0cae'),
  },
});
