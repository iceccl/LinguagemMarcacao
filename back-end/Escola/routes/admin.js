import express from 'express';
//[pause]

const router = express.Router();
//[pause]

router.get('/', (req, res) => {
  res.render('admin/dashboard');
});
//[pause]

export default router;
