const express = require('express');
const { generateToken, decodeToken } = require('../controllers/tokenController.js');

const router = express.Router();

/**
 * @swagger
 * /api/generate-token:
 *   get:
 *     summary: Generates a JWT with a random message
 *     responses:
 *       200:
 *         description: A JWT token
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 */
router.get('/generate-token', generateToken);

/**
 * @swagger
 * /api/decode-token:
 *   post:
 *     summary: Decodes a JWT token and returns the message if valid
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               token:
 *                 type: string
 *     responses:
 *       200:
 *         description: Decoded message
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       401:
 *         description: Invalid token
 */
router.post('/decode-token', decodeToken);

module.exports = router;
