export interface ActionableRemediation {
  upgradeFrom: string; // e.g. package@version
  upgradeTo: string; // e.g. package@version
  vulns: Vuln[];
  severityScore: number;
}

export interface Vuln {
  id: string;
  title: string;
  severity: string;
}
