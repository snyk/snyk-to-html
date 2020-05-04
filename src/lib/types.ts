export interface UpgradeRemediation {
  upgradeFrom: string; // e.g. package@version
  upgradeTo: string; // e.g. package@version
  vulns: Vuln[];
  severityScore: number;
  isTransitive?: boolean;
}

export interface PatchRemediation {
  paths: object[];
  issueData: Vuln;
  name: string;
  version: string;
  severityScore: number;
}

export interface Vuln {
  id: string;
  title: string;
  severity: string;
}
