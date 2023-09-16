-- CreateTable
CREATE TABLE "ProblemSubmission" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "statut" TEXT NOT NULL,
    "comment" TEXT,

    CONSTRAINT "ProblemSubmission_pkey" PRIMARY KEY ("id")
);
