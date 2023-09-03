-- CreateTable
CREATE TABLE "Projects" (
    "id" SERIAL NOT NULL,
    "name" TEXT,

    CONSTRAINT "Projects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tasks" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "comepletedDateTime" TIMESTAMP(3),
    "order" INTEGER,
    "projectsId" INTEGER,

    CONSTRAINT "Tasks_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Tasks" ADD CONSTRAINT "Tasks_projectsId_fkey" FOREIGN KEY ("projectsId") REFERENCES "Projects"("id") ON DELETE SET NULL ON UPDATE CASCADE;
