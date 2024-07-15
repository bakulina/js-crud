// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()
class User {
  constructor(name, messenger, email) {
    this.name = name
    this.messenger = messenger
    this.email = email
  }
}
// ================================================================

//======================================================================

//=================================================================
// router.get Створює нам один ентпоїнт

// ↙️ тут вводимо шлях (PATH) до сторінки
router.get('/index', function (req, res) {
  res.render('index', {
    // вказуємо назву папки контейнера, в якій знаходяться наші стилі
    style: 'index',
    data: {},
  })

  // res.render генерує нам HTML сторінку
  // ↑↑ сюди вводимо JSON дані
})

// ================================================================

router.get('/sluzby', function (req, res) {
  const id = Number(req.query.id)
  res.render('sluzby', {
    style: 'sluzby',
  })
})

// ================================================================

router.get('/plyn', function (req, res) {
  const id = Number(req.query.id)
  res.render('plyn', {
    style: 'plyn',
  })
})

// ================================================================

router.get('/Tepel', function (req, res) {
  const id = Number(req.query.id)
  res.render('Tepel', {
    style: 'Tepel',
  })
})

//===============================================
router.get('/klimat', function (req, res) {
  const id = Number(req.query.id)
  res.render('klimat', {
    style: 'klimat',
  })
})
//======================================================
router.get('/voda', function (req, res) {
  const id = Number(req.query.id)

  res.render('voda', {
    style: 'voda',
  })
})
//==============================================

//===================================
router.get('/prace', function (req, res) {
  const id = Number(req.query.id)

  res.render('prace', {
    style: 'prace',
  })
})
//=================================================
router.get('/electro', function (req, res) {
  const id = Number(req.query.id)

  res.render('electro', {
    style: 'electro',
  })
})
router.get('/stavba', function (req, res) {
  const id = Number(req.query.id)

  res.render('stavba', {
    style: 'stavba',
  })
})

// Підключаємо роутер до бек-енду
module.exports = router
