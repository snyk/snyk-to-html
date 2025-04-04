export function formatDateTime(
  date: Date | string | undefined,
  format: string,
  timezone = 'UTC',
): string {
  // Ensure a date is provided
  if (!date) {
    date = new Date();
  }

  // Convert to Date object if it's a string
  const inputDate = date instanceof Date ? date : new Date(date);

  // Use the provided timezone
  const effectiveTimezone = timezone || process.env.TZ || 'UTC';

  // Create a date in the specified timezone
  const zonedDate = new Date(
    inputDate.toLocaleString('en-US', { timeZone: effectiveTimezone }),
  );

  // Custom formatting to match the original moment.js style
  return format.replace(/MMMM|MMM|MM|Do|DD|YYYY|YY|hh|mm|ss|a/g, (match) => {
    const hours12 = zonedDate.getHours() % 12 || 12;
    const ampm = zonedDate.getHours() >= 12 ? 'pm' : 'am';

    switch (match) {
      case 'MMMM':
        return new Intl.DateTimeFormat('en-US', { month: 'long' }).format(
          zonedDate,
        );
      case 'MMM':
        return new Intl.DateTimeFormat('en-US', { month: 'short' }).format(
          zonedDate,
        );
      case 'MM':
        return String(zonedDate.getMonth() + 1).padStart(2, '0');
      case 'Do':
        return (
          zonedDate.getDate() +
          ([1, 21, 31].includes(zonedDate.getDate())
            ? 'st'
            : [2, 22].includes(zonedDate.getDate())
            ? 'nd'
            : [3, 23].includes(zonedDate.getDate())
            ? 'rd'
            : 'th')
        );
      case 'DD':
        return String(zonedDate.getDate()).padStart(2, '0');
      case 'YYYY':
        return zonedDate.getFullYear().toString();
      case 'YY':
        return zonedDate
          .getFullYear()
          .toString()
          .slice(-2);
      case 'hh':
        return String(hours12).padStart(2, '0');
      case 'mm':
        return String(zonedDate.getMinutes()).padStart(2, '0');
      case 'ss':
        return String(zonedDate.getSeconds()).padStart(2, '0');
      case 'a':
        return ampm;
      default:
        return match;
    }
  });
}
