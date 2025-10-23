import { describe, expect, it } from '@jest/globals';
import {
  countIgnoredIssues,
  getHighestSuppression,
  isIssueIgnored,
} from '../src/lib/codeutil';

describe('Suppressions handling', () => {
  describe('isIssueIgnored', () => {
    it('should return false if there are no suppressions', () => {
      const result = isIssueIgnored([]);
      expect(result).toBe(false);
    });

    it('should return true if the status is not provided (treat as accepted)', () => {
      const result = isIssueIgnored([{ kind: 'external' }]);
      expect(result).toBe(true);
    });

    it('should return true if the status is accepted', () => {
      const result = isIssueIgnored([{ status: 'accepted', kind: 'external' }]);
      expect(result).toBe(true);
    });

    it('should return false if the status is underReview', () => {
      const result = isIssueIgnored([
        { status: 'underReview', kind: 'external' },
      ]);
      expect(result).toBe(false);
    });

    it('should return false if the status is rejected', () => {
      const result = isIssueIgnored([{ status: 'rejected', kind: 'external' }]);
      expect(result).toBe(false);
    });

    it('should return true if from multiple suppression statuses the accepted status is present', () => {
      const result = isIssueIgnored([
        { status: 'underReview', kind: 'external' },
        { status: 'rejected', kind: 'external' },
        { status: 'accepted', kind: 'external' },
      ]);
      expect(result).toBe(true);
    });
  });

  describe('getHighestSuppressionStatus', () => {
    it('should return accepted if the status is accepted', () => {
      const result = getHighestSuppression([
        { status: 'accepted', kind: 'external' },
      ]);
      expect(result?.status).toBe('accepted');
    });

    it('should return underReview if the status is underReview', () => {
      const result = getHighestSuppression([
        { status: 'underReview', kind: 'external' },
      ]);
      expect(result?.status).toBe('underReview');
    });

    it('should return rejected if the status is rejected', () => {
      const result = getHighestSuppression([
        { status: 'rejected', kind: 'external' },
      ]);
      expect(result?.status).toBe('rejected');
    });

    it('should return accepted if the status is not provided', () => {
      const result = getHighestSuppression([{ kind: 'external' }]);
      expect(result?.status).toBe(undefined);
    });

    it('should return accepted if from multiple suppression statuses the accepted status is present', () => {
      const result = getHighestSuppression([
        { status: 'underReview', kind: 'external' },
        { status: 'rejected', kind: 'external' },
        { status: 'accepted', kind: 'external' },
      ]);
      expect(result?.status).toBe('accepted');
    });

    it('should return accepted if from multiple suppression statuses the accepted status is present', () => {
      const result = getHighestSuppression([
        { status: 'underReview', kind: 'external' },
        { status: 'rejected', kind: 'external' },
        { kind: 'external' },
      ]);
      expect(result?.status).toBe(undefined);
    });

    it('should return null if there are no suppressions', () => {
      const result = getHighestSuppression([]);
      expect(result).toBeNull();
    });
  });

  describe.only('countIgnoredIssues', () => {
    it('should return the correct number of ignored issues if there are no ignored issues', () => {
      const result = countIgnoredIssues([]);
      expect(result).toBe(0);
    });

    it('should return the correct number of ignored issues if there is severity level with ignored issues', () => {
      const result = countIgnoredIssues([
        {
          vulnsummarycounter: [{ ignored: 1 }, { ignored: 0 }, { ignored: 0 }],
        },
      ]);
      expect(result).toBe(1);
    });

    it('should return the correct number of ignored issues if there are multiple severity levels with ignored issues', () => {
      const result = countIgnoredIssues([
        {
          vulnsummarycounter: [{ ignored: 2 }, { ignored: 1 }, { ignored: 3 }],
        },
      ]);
      expect(result).toBe(6);
    });
  });
});
