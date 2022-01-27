module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '3aed8659553a114a7d269700c9b289c2'),
  },
});
