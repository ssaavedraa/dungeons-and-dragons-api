import { CreateSkillsDto } from './../../skills/dto/create-skill.dto';
import { CreateStatisticDto } from 'src/statistics/dto/create-statistic.dto';
export class CreateCharacterDto {
  characterData: CharacterData
  characterStatistics: CreateStatisticDto
  characterSkills: CreateSkillsDto
  userId: number
}

export class CharacterData {
  name: string
  race: string
  alignment: string
  background: string
  experience: number
  inspiration: number
  inventory: string
  speed: number
  initiative: number
  armorClass: number
  health: number
  temporalHealth: number
  passiveWisdom: number
  attacksAndSpells: string
  deathSaves: string
  deathsaves: string
  hitDice: string
}