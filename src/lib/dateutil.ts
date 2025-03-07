// export function formatDateTime(date, format, timezone = 'EST'): string {
//import moment from 'moment-timezone';
export function formatDateTime(date, format, timezone: string): string {
    if (!date) {
        date = new Date();
    }
    
    // Create a date string with the timezone offset for parsing
    let localDate = new Date(date);
    
    // Use methods based on timezone
    const useUTC = timezone === 'UTC';
    
    const day = useUTC ? localDate.getUTCDate() : localDate.getDate();
    const ordinalSuffix = getOrdinalSuffix(day);
    const dayWithSuffix = `${day}${ordinalSuffix}`;

    const hours = useUTC ? localDate.getUTCHours() : localDate.getHours();
    const minutes = useUTC ? localDate.getUTCMinutes() : localDate.getMinutes();
    const seconds = useUTC ? localDate.getUTCSeconds() : localDate.getSeconds();
    const ampm = hours >= 12 ? 'pm' : 'am';
    const formattedHours = hours % 12 || 12;

    const monthNames = [
        "January", "February", "March", "April",
        "May", "June", "July", "August",
        "September", "October", "November", "December"
    ];

    // Get month based on timezone
    const month = useUTC ? localDate.getUTCMonth() : localDate.getMonth();
    const year = useUTC ? localDate.getUTCFullYear() : localDate.getFullYear();
    
    // Get timezone abbreviation and offset
    let tzAbbr = timezone;
    let tzOffset;
    
    if (useUTC) {
        tzOffset = '+00:00';
    } else {
        // For non-UTC timezones, calculate the offset
        const offset = -localDate.getTimezoneOffset();
        const offsetHours = Math.floor(Math.abs(offset) / 60);
        const offsetMinutes = Math.abs(offset) % 60;
        tzOffset = `${offset >= 0 ? '+' : '-'}${offsetHours.toString().padStart(2, '0')}:${offsetMinutes.toString().padStart(2, '0')}`;
    }

    const replacements = {
        'MMMM': monthNames[month],
        'Do': dayWithSuffix,
        'YYYY': year,
        'h': formattedHours,
        'mm': minutes.toString().padStart(2, '0'),
        'ss': seconds.toString().padStart(2, '0'),
        'a': ampm,
        'z': tzAbbr,
        'Z': tzOffset
    };

    return format.replace(/MMMM|Do|YYYY|h|mm|ss|a|z|Z/g, (match) => replacements[match]);
}

function getOrdinalSuffix(day) {
    if (day > 3 && day < 21) {
        return 'th';
    }
    switch (day % 10) {
        case 1:
            return 'st';
        case 2:
            return 'nd';
        case 3:
            return 'rd';
        default:
            return 'th';
    }
}