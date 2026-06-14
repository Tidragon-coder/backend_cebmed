import { Router } from "express";
import {
    register,
    login,
    me,
    updateMe,
    updateMyPassword,
    deleteMe,
    logout,
    refresh,
    requestPasswordReset,
    resetPassword,
    verifyEmail,
  resendVerificationEmail,
} from "../controllers/auth.controller";

import { authenticate } from "../middlewares/middleware";
import rateLimit from "express-rate-limit";

const router = Router();

// Définition du limiteur
const publicLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,  // Fenêtre de 15 minutes
    max: 100,                   // 100 requêtes max par IP
    message: {
        status: 429,
        error: 'Trop de requêtes, réessaie dans 15 minutes.'
    },
    standardHeaders: true,  // Ajoute les headers RateLimit-* dans la réponse
    legacyHeaders: false,   // Désactive les anciens headers X-RateLimit-*
});

/**
 * @openapi
 * /api/auth/register:
 *   post:
 *     tags:
 *       - Auth
 *     summary: Register a new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - first_name
 *               - last_name
 *               - date_of_birth
 *               - email
 *               - password
 *             properties:
 *               first_name:
 *                 type: string
 *               last_name:
 *                 type: string
 *               date_of_birth:
 *                 type: string
 *                 format: date
 *               email:
 *                 type: string
 *                 format: email
 *               phone:
 *                 type: string
 *                 nullable: true
 *               password:
 *                 type: string
 *                 minLength: 8
 *               picture:
 *                 type: string
 *                 nullable: true
 *     responses:
 *       201:
 *         description: User created
 *       400:
 *         description: Invalid input
 *       409:
 *         description: Email already exists
 *       500:
 *         description: Internal server error
 */
router.post("/register", publicLimiter, register);

/**
 * @openapi
 * /api/auth/login:
 *   post:
 *     tags:
 *       - Auth
 *     summary: Login user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login success
 *       400:
 *         description: Invalid input
 *       401:
 *         description: Invalid credentials
 *       500:
 *         description: Internal server error
 */
router.post("/login", publicLimiter, login);

/**
 * @openapi
 * /api/auth/password/forgot:
 *   post:
 *     tags:
 *       - Auth
 *     summary: Request a password reset code by email
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *     responses:
 *       200:
 *         description: Reset code sent if the account exists
 *       400:
 *         description: Invalid email
 *       500:
 *         description: Internal server error
 */
router.post("/password/forgot", publicLimiter, requestPasswordReset);

/**
 * @openapi
 * /api/auth/password/reset:
 *   post:
 *     tags:
 *       - Auth
 *     summary: Reset password with email code
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - code
 *               - new_password
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *               code:
 *                 type: string
 *                 minLength: 5
 *                 maxLength: 5
 *               new_password:
 *                 type: string
 *                 minLength: 8
 *     responses:
 *       200:
 *         description: Password reset
 *       400:
 *         description: Invalid or expired code
 *       500:
 *         description: Internal server error
 */
router.post("/password/reset", publicLimiter, resetPassword);

/**
 * @openapi
 * /api/auth/refresh:
 *   post:
 *     tags:
 *       - Auth
 *     summary: Refresh access token
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - refresh_token
 *             properties:
 *               refresh_token:
 *                 type: string
 *     responses:
 *       200:
 *         description: New access and refresh tokens
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 access_token:
 *                   type: string
 *                 refresh_token:
 *                   type: string
 *       400:
 *         description: refresh_token missing
 *       401:
 *         description: Refresh token invalide ou expiré
 *       500:
 *         description: Internal server error
 */
router.post('/refresh', publicLimiter, refresh);

/**
 * @openapi
 * /api/auth/me:
 *   get:
 *     tags:
 *       - Auth
 *     summary: Get current authenticated user
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Current user info
 *       401:
 *         description: Missing token
 *       403:
 *         description: Invalid or expired token
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal server error
 */
router.get("/me", authenticate, me);

/**
 * @openapi
 * /api/auth/me:
 *   patch:
 *     tags:
 *       - Auth
 *     summary: Update current authenticated user profile
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               first_name:
 *                 type: string
 *               last_name:
 *                 type: string
 *               date_of_birth:
 *                 type: string
 *                 format: date
 *               email:
 *                 type: string
 *                 format: email
 *               phone:
 *                 type: string
 *                 nullable: true
 *               picture:
 *                 type: string
 *                 nullable: true
 *     responses:
 *       200:
 *         description: Profile updated
 *       400:
 *         description: Invalid input
 *       401:
 *         description: Missing token
 *       403:
 *         description: Invalid or expired token
 *       409:
 *         description: Email already exists
 *       500:
 *         description: Internal server error
 */
router.patch("/me", authenticate, updateMe);

/**
 * @openapi
 * /api/auth/me/password:
 *   patch:
 *     tags:
 *       - Auth
 *     summary: Change current authenticated user password
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - current_password
 *               - new_password
 *             properties:
 *               current_password:
 *                 type: string
 *               new_password:
 *                 type: string
 *                 minLength: 8
 *     responses:
 *       200:
 *         description: Password updated
 *       400:
 *         description: Invalid input
 *       401:
 *         description: Missing token or wrong current password
 *       403:
 *         description: Invalid or expired token
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal server error
 */
router.patch("/me/password", authenticate, updateMyPassword);

/**
 * @openapi
 * /api/auth/me:
 *   delete:
 *     tags:
 *       - Auth
 *     summary: Delete current authenticated user account with password confirmation
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - password
 *             properties:
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Account deleted
 *       400:
 *         description: Invalid input
 *       401:
 *         description: Missing token or wrong password
 *       403:
 *         description: Invalid or expired token
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal server error
 */
router.delete("/me", authenticate, deleteMe);

/**
 * @openapi
 * /api/auth/logout:
 *   post:
 *     tags:
 *       - Auth
 *     summary: Logout and revoke refresh token
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - refresh_token
 *             properties:
 *               refresh_token:
 *                 type: string
 *     responses:
 *       200:
 *         description: Déconnecté avec succès
 *       400:
 *         description: refresh_token missing
 *       401:
 *         description: Missing token
 *       403:
 *         description: Invalid or expired token
 *       500:
 *         description: Internal server error
 */
router.post('/logout', authenticate, logout);

/**
 * @openapi
 * /api/auth/verify-email:
 *   post:
 *     tags:
 *       - Auth
 *     summary: Vérifier l'email avec le code reçu par mail
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - code
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *               code:
 *                 type: string
 *                 minLength: 5
 *                 maxLength: 5
 *     responses:
 *       200:
 *         description: Email vérifié avec succès
 *       400:
 *         description: Email/code manquant, invalide ou expiré
 *       500:
 *         description: Erreur serveur
 */
router.post('/verify-email', publicLimiter, verifyEmail);
/**
 * @openapi
 * /api/auth/resend-verification:
 *   post:
 *     tags:
 *       - Auth
 *     summary: Renvoyer l'email de vérification
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *     responses:
 *       200:
 *         description: Email envoyé si le compte existe et n'est pas encore vérifié
 *       400:
 *         description: Email invalide
 *       500:
 *         description: Erreur serveur
 */
router.post('/resend-verification', publicLimiter, resendVerificationEmail);

export default router;
