-- CreateTable
CREATE TABLE "specialties" (
    "id" TEXT NOT NULL,
    "title" VARCHAR(100) NOT NULL,
    "description" VARCHAR(500),
    "icon" VARCHAR(255),
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "deleteAt" TIMESTAMP(3),

    CONSTRAINT "specialties_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "idx_specialty_isDeleted" ON "specialties"("isDeleted");

-- CreateIndex
CREATE INDEX "idx_specialty_title" ON "specialties"("title");
