import { ProblemSubmission } from "@prisma/client"
import { prisma } from "./prisma-client"

interface Service {
  get(id_problem: string): Promise<ProblemSubmission>
  getAll(): Promise<ProblemSubmission[]>
  create(problem: Omit<ProblemSubmission, "id" | "createdAt" | "updatedAt">): Promise<ProblemSubmission>
  delete(id_problem: string): Promise<ProblemSubmission>
  update(id_problem: string, modifiedFields: Pick<ProblemSubmission, "statut" | "comment">): Promise<ProblemSubmission>
}

class ProblemSubmissionService implements Service {
  async get(id_problem: string): Promise<ProblemSubmission> {
    const problem = await prisma.problemSubmission.findUnique({
      where: {
        id: id_problem,
      },
    })

    if (!problem) {
      throw new Error(`ProblemSubmission with id ${id_problem} not found`)
    }

    return problem
  }

  async getAll(): Promise<ProblemSubmission[]> {
    return await prisma.problemSubmission.findMany()
  }

  async create(problem: Omit<ProblemSubmission, "id" | "createdAt" | "updatedAt" | "comment">): Promise<ProblemSubmission> {
    return await prisma.problemSubmission.create({
      data: {
        ...problem,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    })
  }

  async delete(id_problem: string): Promise<ProblemSubmission> {
    return await prisma.problemSubmission.delete({
      where: {
        id: id_problem,
      },
    })
  }

  async update(id_problem: string, modifiedFields: Pick<ProblemSubmission, "statut" | "comment">): Promise<ProblemSubmission> {
    return await prisma.problemSubmission.update({
      where: {
        id: id_problem,
      },
      data: {
        ...modifiedFields,
        updatedAt: new Date(),
      },
    })
  }
}

export const problemSubmissionService = new ProblemSubmissionService()
