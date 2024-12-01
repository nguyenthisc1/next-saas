import { UserToProjects } from './../../../../node_modules/.pnpm/@prisma+client@5.14.0_prisma@5.14.0/node_modules/.prisma/client/index.d'
import { createTRPCRouter, protectedProcedure } from '@/server/api/trpc'
import { z } from 'zod'

export const projectRouter = createTRPCRouter({
    createProject: protectedProcedure
        .input(
            z.object({
                name: z.string(),
                githubUrl: z.string(),
                githubToken: z.string().optional(),
            })
        )
        .mutation(async ({ ctx, input }) => {
            const project = await ctx.db.project.create({
                data: {
                    githubUrl: input.githubToken,
                    name: input.name,
                    userToProjects: {
                        create: {
                            userId: ctx.user.userId!,
                        },
                    },
                },
            })

            return project
        }),

    getProjects: protectedProcedure.query(async ({ ctx }) => {
        return await ctx.db.project.findMany({
            where: {
                userToProjects: {
                    some: {
                        userId: ctx.user.userId!,
                    },
                },
                deletedAt: null,
            },
        })
    }),
})