// Locale Override Script
// Handles date, number, and locale formatting customizations

(function() {
    // Cache for locale-specific values
    const localeCache = {
        "Date": {
            "toLocaleString": {
                "70732731": "May 11, 2024",
                "1741705893": "May 10, 2024",
                "4003783824": "May 15, 2024"
            },
            "toLocaleDateString": {}
        },
        "DateTimeFormat": {
            "format": {},
            "formatRange": {},
            "formatToParts": {},
            "formatRangeToParts": {}
        },
        "Number": {
            "toLocaleString": {}
        },
        "NumberFormat": {
            "format": {},
            "formatRange": {},
            "formatToParts": {},
            "formatRangeToParts": {}
        }
    };

    function hashCode(str) {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            hash += str.charCodeAt(i);
            hash += (hash << 10);
            hash ^= (hash >> 6);
        }
        hash += (hash << 3);
        hash ^= (hash >> 11);
        hash += (hash << 15);
        return hash >>> 0;
    }

    function getCachedLocaleValue(method, args) {
        const key = hashCode(JSON.stringify(args));
        return localeCache[method]?.[key];
    }

    function setCachedLocaleValue(method, args, value) {
        const key = hashCode(JSON.stringify(args));
        if (!localeCache[method]) {
            localeCache[method] = {};
        }
        localeCache[method][key] = value;
        return value;
    }

    // Override Date.prototype.toLocaleString
    if (Date.prototype.toLocaleString) {
        const originalToLocaleString = Date.prototype.toLocaleString;
        Date.prototype.toLocaleString = function(locale, options) {
            const cached = getCachedLocaleValue('Date.toLocaleString', [locale, options]);
            if (cached !== undefined) return cached;
            const result = originalToLocaleString.call(this, locale, options);
            return setCachedLocaleValue('Date.toLocaleString', [locale, options], result);
        };
    }

    // Override Date.prototype.toLocaleDateString
    if (Date.prototype.toLocaleDateString) {
        const originalToLocaleDateString = Date.prototype.toLocaleDateString;
        Date.prototype.toLocaleDateString = function(locale, options) {
            const cached = getCachedLocaleValue('Date.toLocaleDateString', [locale, options]);
            if (cached !== undefined) return cached;
            const result = originalToLocaleDateString.call(this, locale, options);
            return setCachedLocaleValue('Date.toLocaleDateString', [locale, options], result);
        };
    }

    // Intl.DateTimeFormat overrides
    const originalDateTimeFormatFormat = Object.getOwnPropertyDescriptor(Intl.DateTimeFormat.prototype, 'format');
    if (originalDateTimeFormatFormat?.get) {
        Object.defineProperty(Intl.DateTimeFormat.prototype, 'format', {
            get() {
                const original = originalDateTimeFormatFormat.get.call(this);
                return function(date) {
                    const cached = getCachedLocaleValue('Intl.DateTimeFormat.format', [date]);
                    if (cached !== undefined) return cached;
                    const result = original.call(this, date);
                    return setCachedLocaleValue('Intl.DateTimeFormat.format', [date], result);
                };
            }
        });
    }

    // Number formatting overrides (similar pattern)
    if (Number.prototype.toLocaleString) {
        const originalToLocaleString = Number.prototype.toLocaleString;
        Number.prototype.toLocaleString = function(locale, options) {
            const cached = getCachedLocaleValue('Number.toLocaleString', [locale, options]);
            if (cached !== undefined) return cached;
            const result = originalToLocaleString.call(this, locale, options);
            return setCachedLocaleValue('Number.toLocaleString', [locale, options], result);
        };
    }
})();
