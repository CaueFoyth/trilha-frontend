export default function authorizeRole(role) {
  return (req, res, next) => {
    if (req.user?.role === role) return next();
    res.status(403).send('Acesso negado');
  };
}
