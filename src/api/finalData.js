const router = require('express').Router();
const R = require('ramda');

const { pool } = require('../config');

router.get('/odiac', (req, res) => {
  const province = req.query['province'];
  if (!R.isNil(province)) {
    console.log(province)
    pool.query('SELECT odiac20181k as odiac, latitude, longitude from finaldata where UPPER(province) = UPPER($1) order by province;', [province], (error, results) => {
      if (error) {
        throw error;
      } else {
        res.status(200).json(results.rows)
      }
    })
  } else {
    pool.query('SELECT odiac20181k as odiak, latitude, longitude from finaldata as f order by f.province;', (error, results) => {
      if (error) {
        throw error;
      } else {
        res.status(200).json(results.rows)
      }
    })
  }
});

router.get('/emissions', (req, res) => {
  const province = req.query['province'];
  if (!R.isNil(province)) {
    console.log(province)
    pool.query('SELECT emissions, latitude, longitude from finaldata where UPPER(province) = UPPER($1) order by province;', [province], (error, results) => {
      if (error) {
        throw error;
      } else {
        res.status(200).json(results.rows)
      }
    })
  } else {
    pool.query('SELECT emissions, latitude, longitude from finaldata as f order by f.province;', (error, results) => {
      if (error) {
        throw error;
      } else {
        res.status(200).json(results.rows)
      }
    })
  }
});

router.get('/swedenodiac', (req, res) => {
  pool.query('SELECT odiac20181k as odiac, latitude, longitude from sweden', (error, results) => {
    if (error) {
      throw error;
    } else {
      res.status(200).json(results.rows)
    }
  })
});

router.get('/', (req, res) => {
  pool.query('SELECT * FROM finaldata', (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
  })
})

exports.default = router;
