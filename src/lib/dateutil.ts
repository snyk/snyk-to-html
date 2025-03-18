import * as moment from 'moment-timezone';

export function formatDateTime(date: Date | string | undefined, format: string, timezone: string = 'UTC'): string {
    console.log(`Timezone received from CLI in dateutil: ${timezone}`);

    if (!date) {
        date = new Date(); // Use current date if none provided
    }

    let zonedDate;
    try {
        let dateString: string;
        if (date instanceof Date) {
            // 1. Get the UTC parts of the date
            const year = date.getUTCFullYear();
            const month = String(date.getUTCMonth() + 1).padStart(2, '0');
            const day = String(date.getUTCDate()).padStart(2, '0');
            const hours = String(date.getUTCHours()).padStart(2, '0');
            const minutes = String(date.getUTCMinutes()).padStart(2, '0');
            const seconds = String(date.getUTCSeconds()).padStart(2, '0');

            // 2. Construct a UTC date string
            dateString = `${year}-${month}-${day} ${hours}:${minutes}:${seconds} UTC`; // Explicit UTC

        } else {
            dateString = date; // Assume it's a string we can parse
        }

        // Ensure we parse the date in UTC and then convert to the desired timezone
        zonedDate = moment.tz(dateString, 'YYYY-MM-DD HH:mm:ss UTC', 'UTC').tz(timezone);

    } catch (error) {
        console.warn(`Invalid timezone: ${timezone}, defaulting to UTC`);
        zonedDate = moment.tz(date, 'UTC');
    }

    console.log(`Formatting date in dateutil: ${zonedDate.format('YYYY-MM-DD HH:mm:ss')}, Timezone: ${timezone}, Output: ${zonedDate.format(format)}`);

    // Construct replacements, ensuring timezone context
    const replacements = {
        'MMMM': zonedDate.format('MMMM'),
        'Do': zonedDate.format('Do'),
        'YYYY': zonedDate.format('YYYY'),
        'h': zonedDate.format('h'),
        'mm': zonedDate.format('mm'),
        'ss': zonedDate.format('ss'),
        'a': zonedDate.format('a'),
        'z': zonedDate.format('z'),
        'Z': zonedDate.format('Z')
    };

    // Replace within the formatted string
    let formattedString = format.replace(/MMMM|Do|YYYY|h|mm|ss|a|z|Z/g, (match) => replacements[match]);

    return formattedString;
}