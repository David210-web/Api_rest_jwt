const { verifyToken } = require("../security/jwtServices");

function authentication(req, res, next) {
  //    const token = req.headers['authorization']?.split(' ')[1] //obtener el token del encabezado
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Token not provided" });
  }

  const payload = verifyToken(token);

  if (!payload) {
    return res.status(403).json({ message: "Invalid token" });
  }

  req.user = payload; //Guardar el payload en el objeto de la solicitud
  next(); //Continuar con lo siguiente
}

module.exports = authentication;
