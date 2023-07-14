/**
 * This allows reusing the PrismaClient connection and avoids creating a new instance on every import. 
 * The global instance is used in development while a new instance is created per import in production.
 */
import { PrismaClient } from '@prisma/client'

// Create a global object to store the PrismaClient instance
const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClient | undefined
}

// Export a PrismaClient instance 
// Check if there is already one in the global object and reuse it
// Otherwise create a new instance
export const prisma =
    globalForPrisma.prisma ??
    new PrismaClient({
        log: ['query'],
    })

// In development, set the global PrismaClient instance 
// so it is reused between imports
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
