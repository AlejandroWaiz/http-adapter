const healthcheck = (req, res) => {
  return res.status(200).json({ status: 'UP' });
};

module.exports = healthcheck;
