const customHeader = (req, res, next) => {
    try {
      const apiKey = req.headers.api_key;
      if (apiKey === "leifer-e1") {
        next();
      } else {
        res.status(403).send({ error: "API_KEY_NO_ES_CORRECTA" });
      }
    } catch (e) {
      res.status(403).send({ error: "ALGO_OCURRIÓ_EN_EL_CUSTOM_HEADER" });
    }
  };
  
module.exports = customHeader;