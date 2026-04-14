import * as programmingFundamentals from './programmingFundamentals';
import * as python from './python';
import * as java from './java';
import * as csharpDotnet from './csharpDotnet';
import * as javascriptTypescript from './javascriptTypescript';
import * as frontendFrameworks from './frontendFrameworks';
import * as cloudDeployment from './cloudDeployment';
import * as businessKnowledge from './businessKnowledge';
import * as businessImprovement from './businessImprovement';
import * as projectManagement from './projectManagement';
import * as leadershipSkills from './leadershipSkills';
import * as advancedConcepts from './advancedConcepts';

export interface LearningTab {
  id: string;
  label: string;
  icon: string;
  notes: typeof programmingFundamentals.notes;
}

export const learningTabs: LearningTab[] = [
  programmingFundamentals,
  python,
  java,
  csharpDotnet,
  javascriptTypescript,
  frontendFrameworks,
  cloudDeployment,
  businessKnowledge,
  businessImprovement,
  projectManagement,
  leadershipSkills,
  advancedConcepts,
].map((mod) => ({
  id: mod.tabId,
  label: mod.tabLabel,
  icon: mod.tabIcon,
  notes: mod.notes,
}));
