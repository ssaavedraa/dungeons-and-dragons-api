-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Character" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "race" TEXT NOT NULL,
    "alignment" TEXT NOT NULL,
    "background" TEXT NOT NULL,
    "experience" INTEGER NOT NULL DEFAULT 0,
    "inspiration" INTEGER NOT NULL DEFAULT 0,
    "inventory" TEXT NOT NULL,
    "speed" INTEGER NOT NULL,
    "initiative" INTEGER NOT NULL,
    "armorClass" INTEGER NOT NULL,
    "health" INTEGER NOT NULL,
    "temporalHealth" INTEGER NOT NULL,
    "passive_wisdom" INTEGER NOT NULL,
    "hitDice" TEXT NOT NULL,
    "attacksAndSpells" TEXT NOT NULL,
    "deathSaves" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Character_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Statistics" (
    "id" SERIAL NOT NULL,
    "strength" INTEGER NOT NULL,
    "dexterity" INTEGER NOT NULL,
    "constitution" INTEGER NOT NULL,
    "intelligence" INTEGER NOT NULL,
    "wisdom" INTEGER NOT NULL,
    "charm" INTEGER NOT NULL,
    "strengthBonus" INTEGER NOT NULL,
    "dexterityBonus" INTEGER NOT NULL,
    "constitutionBonus" INTEGER NOT NULL,
    "intelligenceBonus" INTEGER NOT NULL,
    "wisdomBonus" INTEGER NOT NULL,
    "charmBonus" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Statistics_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Skills" (
    "id" SERIAL NOT NULL,
    "acrobacies" INTEGER NOT NULL,
    "athletism" INTEGER NOT NULL,
    "arcaneKnowledge" INTEGER NOT NULL,
    "cheat" INTEGER NOT NULL,
    "history" INTEGER NOT NULL,
    "interpretation" INTEGER NOT NULL,
    "intimidation" INTEGER NOT NULL,
    "investigation" INTEGER NOT NULL,
    "handsGame" INTEGER NOT NULL,
    "medicine" INTEGER NOT NULL,
    "nature" INTEGER NOT NULL,
    "preception" INTEGER NOT NULL,
    "perspicacity" INTEGER NOT NULL,
    "persuation" INTEGER NOT NULL,
    "religion" INTEGER NOT NULL,
    "stealth" INTEGER NOT NULL,
    "survival" INTEGER NOT NULL,
    "talkWithAnimals" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Skills_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");
