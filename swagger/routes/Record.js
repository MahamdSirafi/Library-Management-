/**
 * @swagger
 * tags:
 *   name: Borrowing Record
 *   description: Patron management and retrieval
 */

/**
 * @swagger
 * /borrow/{bookId}/patron/{patronId}:
 *   post:
 *     summary: borrow a book
 *     description: Only employee can create borrow record.
 *     tags: [Borrowing Record]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: bookId
 *         required: true
 *         schema:
 *           type: string
 *         description: book id
 *       - in: path
 *         name: patronId
 *         required: true
 *         schema:
 *           type: string
 *         description: patron id
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 doc:
 *                     $ref: '#/components/schemas/Record'
 *       "400":
 *         $ref: '#/components/responses/DuplicateEmail'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */

/**
 * @swagger
 * /return/{bookId}/patron/{patronId}:
 *   put:
 *     summary: return a book
 *     description: Only employee can update  Patron.
 *     tags: [Borrowing Record]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: bookId
 *         required: true
 *         schema:
 *           type: string
 *         description: book id
 *       - in: path
 *         name: patronId
 *         required: true
 *         schema:
 *           type: string
 *         description: patron id
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 doc:
 *                     $ref: '#/components/schemas/Record'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 */

exports.Record = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    book: { type: 'string' },
    patron: { type: 'string' },
    borrowing_dates: { type: 'date' },
    return_date: { type: 'date' },
  },
  example: {
    id: '5ebac534954b54139806c112',
    book: '5ebac534934b54139806c212',
    patron: '+5ebac294934b54139806c212',
    borrowing_dates: '2024-5-0',
    return_date: '2024-5-15',
  },
};
