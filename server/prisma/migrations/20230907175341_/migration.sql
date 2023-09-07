/*
  Warnings:

  - You are about to drop the column `comepletedDateTime` on the `Tasks` table. All the data in the column will be lost.
  - You are about to drop the column `order` on the `Tasks` table. All the data in the column will be lost.
  - Made the column `name` on table `Projects` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Projects" ALTER COLUMN "name" SET NOT NULL;

-- AlterTable
ALTER TABLE "Tasks" DROP COLUMN "comepletedDateTime",
DROP COLUMN "order",
ADD COLUMN     "completed" BOOLEAN NOT NULL DEFAULT false;
