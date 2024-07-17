export function formatDateTime(date, format): string {
    if (!date) {
        date = new Date();
    }
    const day = date.getUTCDate();
    const ordinalSuffix = getOrdinalSuffix(day);
    const dayWithSuffix = `${day}${ordinalSuffix}`;

    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const seconds = date.getUTCSeconds();
    const ampm = hours >= 12 ? 'pm' : 'am';
    const formattedHours = hours % 12 || 12;

    const monthNames = [
        "January", "February", "March", "April",
        "May", "June", "July", "August",
        "September", "October", "November", "December"
    ];

    const replacements = {
        'MMMM': monthNames[date.getUTCMonth()],
        'Do': dayWithSuffix,
        'YYYY': date.getUTCFullYear(),
        'h': formattedHours,
        'mm': minutes.toString().padStart(2, '0'),
        'ss': seconds.toString().padStart(2, '0'),
        'a': ampm,
        'z': 'UTC',
        'Z': '+00:00'
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