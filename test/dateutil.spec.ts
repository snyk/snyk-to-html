import { describe, expect, it } from '@jest/globals';
import { formatDateTime } from '../src/lib/dateutil';

describe('formatDateTime', () => {
  it('formats date with default format', () => {
    const date = new Date('2023-04-15T14:30:45Z');
    expect(formatDateTime(date, 'MMMM DD, YYYY h:mm:ss a UTC')).toBe(
      'April 15, 2023 2:30:45 pm UTC',
    );
  });

  it('handles different months', () => {
    const date = new Date('2023-01-01T00:00:00Z');
    expect(formatDateTime(date, 'MMMM Do, YYYY')).toBe('January 1st, 2023');
  });

  it('handles ordinal suffixes correctly', () => {
    expect(formatDateTime(new Date('2023-05-01T00:00:00Z'), 'Do')).toBe('1st');
    expect(formatDateTime(new Date('2023-05-02T00:00:00Z'), 'Do')).toBe('2nd');
    expect(formatDateTime(new Date('2023-05-03T00:00:00Z'), 'Do')).toBe('3rd');
    expect(formatDateTime(new Date('2023-05-04T00:00:00Z'), 'Do')).toBe('4th');
    expect(formatDateTime(new Date('2023-05-11T00:00:00Z'), 'Do')).toBe('11th');
    expect(formatDateTime(new Date('2023-05-21T00:00:00Z'), 'Do')).toBe('21st');
  });

  it('formats time correctly', () => {
    const date = new Date('2023-04-15T23:59:59Z');
    expect(formatDateTime(date, 'hh:mm:ss a', 'UTC')).toBe('11:59:59 pm');
  });

  it('handles midnight correctly', () => {
    const date = new Date('2023-04-15T00:00:00Z');
    expect(formatDateTime(date, 'hh:mm:ss a', 'UTC')).toBe('12:00:00 am');
  });

  it('includes timezone information', () => {
    const date = new Date('2023-04-15T14:30:45Z');
    expect(formatDateTime(date, 'UTC +00:00')).toBe('UTC +00:00');
  });

  it('uses current date when no date is provided', () => {
    const now = new Date();
    const formatted = formatDateTime(undefined, 'YYYY');
    expect(formatted).toBe(now.getUTCFullYear().toString());
  });
});
