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

export interface RemediationChanges {
  unresolved?: unknown[];
  upgrade?: Record<string, unknown>;
  patch?: Record<string, unknown>;
  ignore?: Record<string, unknown>;
  pin?: Record<string, unknown>;
}

export type SuppressionStatus = 'accepted' | 'rejected' | 'underReview';

export interface Suppression {
  guid?: string;
  kind: string;
  status?: SuppressionStatus;
  justification?: string;
  properties?: {
    category: string;
    expiration?: string;
    ignoredOn: string;
    ignoredBy: {
      name: string;
      email: string;
    };
  };
}
