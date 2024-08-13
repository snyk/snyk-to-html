import tap from 'tap';
import { formatDateTime } from '../src/lib/dateutil';

tap.test('formatDateTime', async (t) => {
  t.test('formats date with default format', async (t) => {
    const date = new Date('2023-04-15T14:30:45Z');
    t.equal(
      formatDateTime(date, 'MMMM Do, YYYY h:mm:ss a z'),
      'April 15th, 2023 2:30:45 pm UTC',
    );
    t.end();
  });

  t.test('handles different months', async (t) => {
    const date = new Date('2023-01-01T00:00:00Z');
    t.equal(formatDateTime(date, 'MMMM Do, YYYY'), 'January 1st, 2023');
    t.end();
  });

  t.test('handles ordinal suffixes correctly', async (t) => {
    t.equal(formatDateTime(new Date('2023-05-01T00:00:00Z'), 'Do'), '1st');
    t.equal(formatDateTime(new Date('2023-05-02T00:00:00Z'), 'Do'), '2nd');
    t.equal(formatDateTime(new Date('2023-05-03T00:00:00Z'), 'Do'), '3rd');
    t.equal(formatDateTime(new Date('2023-05-04T00:00:00Z'), 'Do'), '4th');
    t.equal(formatDateTime(new Date('2023-05-11T00:00:00Z'), 'Do'), '11th');
    t.equal(formatDateTime(new Date('2023-05-21T00:00:00Z'), 'Do'), '21st');
    t.end();
  });

  t.test('formats time correctly', async (t) => {
    const date = new Date('2023-04-15T23:59:59Z');
    t.equal(formatDateTime(date, 'h:mm:ss a'), '11:59:59 pm');
    t.end();
  });

  t.test('handles midnight correctly', async (t) => {
    const date = new Date('2023-04-15T00:00:00Z');
    t.equal(formatDateTime(date, 'h:mm:ss a'), '12:00:00 am');
    t.end();
  });

  t.test('includes timezone information', async (t) => {
    const date = new Date('2023-04-15T14:30:45Z');
    t.equal(formatDateTime(date, 'z Z'), 'UTC +00:00');
    t.end();
  });

  t.test('uses current date when no date is provided', async (t) => {
    const now = new Date();
    const formatted = formatDateTime(null, 'YYYY');
    t.equal(formatted, now.getUTCFullYear().toString());
    t.end();
  });

  t.end();
});
