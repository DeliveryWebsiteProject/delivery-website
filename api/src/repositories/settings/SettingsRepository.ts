import { Settings } from "../../models"

export default interface SettingsRepository {
  getSettings(): Promise<Settings[]>
  create(data: Settings): Promise<Settings>
  update(data: Settings): Promise<Settings>
}