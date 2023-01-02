const generateImage = async (req, res) => {
  res.status(200).json({
    succes: true,
  });
};

module.exports = { generateImage };
