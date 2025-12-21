# Free GeoIP Databases - IP Geolocation for Developers

[![GitHub Stars](https://img.shields.io/github/stars/wp-statistics/geo?style=social)](https://github.com/wp-statistics/geo)
[![Website](https://img.shields.io/badge/website-geo.wp--statistics.com-blue)](https://geo.wp-statistics.com)
[![License](https://img.shields.io/badge/license-CC%20BY--SA%204.0-green)](https://creativecommons.org/licenses/by-sa/4.0/)

**Free, regularly updated IP geolocation databases for developers.** Get accurate city-level location data from IP addresses with no authentication required.

🌐 **Website:** [geo.wp-statistics.com](https://geo.wp-statistics.com)

---

## Features

- **Free Forever** - No API keys, no accounts, no rate limits
- **Auto-Updated** - Databases updated automatically via GitHub Actions
- **Lightning Fast CDN** - Served via jsDelivr with global edge locations
- **Multiple Providers** - Choose between MaxMind GeoLite2 or DB-IP
- **City-Level Accuracy** - Get country, city, coordinates, and timezone
- **Version History** - All versions preserved in npm registry

---

## Available Databases

### MaxMind GeoLite2-City

The industry-standard IP geolocation database.

| Property | Value |
|----------|-------|
| **CDN URL** | `https://cdn.jsdelivr.net/npm/geolite2-city/GeoLite2-City.mmdb.gz` |
| **Update Frequency** | Every Tuesday & Friday |
| **Size** | ~68 MB (compressed) |
| **License** | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) |
| **GitHub** | [wp-statistics/GeoLite2-City](https://github.com/wp-statistics/GeoLite2-City) |
| **npm** | [geolite2-city](https://www.npmjs.com/package/geolite2-city) |

### DB-IP City Lite

A lightweight alternative with smaller file size.

| Property | Value |
|----------|-------|
| **CDN URL** | `https://cdn.jsdelivr.net/npm/dbip-city-lite/dbip-city-lite.mmdb.gz` |
| **Update Frequency** | Monthly (1st of month) |
| **Size** | ~19 MB (compressed) |
| **License** | [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) |
| **GitHub** | [wp-statistics/DbIP-City-lite](https://github.com/wp-statistics/DbIP-City-lite) |
| **npm** | [dbip-city-lite](https://www.npmjs.com/package/dbip-city-lite) |

---

## Quick Start

### PHP

```php
use GeoIp2\Database\Reader;

// Download the database from CDN
$dbUrl = 'https://cdn.jsdelivr.net/npm/geolite2-city/GeoLite2-City.mmdb.gz';

// Initialize the reader
$reader = new Reader('/path/to/GeoLite2-City.mmdb');

// Look up an IP address
$record = $reader->city('128.101.101.101');

echo $record->country->name;      // 'United States'
echo $record->city->name;         // 'Minneapolis'
echo $record->location->latitude; // 44.9759
```

### Node.js

```javascript
const { Reader } = require('@maxmind/geoip2-node');

// Download the database from CDN
const dbUrl = 'https://cdn.jsdelivr.net/npm/geolite2-city/GeoLite2-City.mmdb.gz';

// Initialize the reader
const reader = await Reader.open('./GeoLite2-City.mmdb');

// Look up an IP address
const response = reader.city('128.101.101.101');

console.log(response.country.names.en);  // 'United States'
console.log(response.city.names.en);     // 'Minneapolis'
console.log(response.location.latitude); // 44.9759
```

### Python

```python
import geoip2.database

# Download the database from CDN
db_url = 'https://cdn.jsdelivr.net/npm/geolite2-city/GeoLite2-City.mmdb.gz'

# Initialize the reader
reader = geoip2.database.Reader('./GeoLite2-City.mmdb')

# Look up an IP address
response = reader.city('128.101.101.101')

print(response.country.name)      # 'United States'
print(response.city.name)         # 'Minneapolis'
print(response.location.latitude) # 44.9759
```

### WordPress (with WP Statistics)

The easiest way to use GeoIP in WordPress - zero configuration required!

```php
use WP_Statistics\Service\Geolocation\GeolocationFactory;

// That's it! WP Statistics handles everything:
// - Automatic database download
// - Automatic updates
// - Simple one-line API

$location = GeolocationFactory::getLocation('128.101.101.101');

echo $location['country'];      // 'United States'
echo $location['country_code']; // 'US'
echo $location['city'];         // 'Minneapolis'
```

👉 **Get WP Statistics:** [wordpress.org/plugins/wp-statistics](https://wordpress.org/plugins/wp-statistics/)

---

## Direct Download URLs

### MaxMind GeoLite2-City
```
https://cdn.jsdelivr.net/npm/geolite2-city/GeoLite2-City.mmdb.gz
```

### DB-IP City Lite
```
https://cdn.jsdelivr.net/npm/dbip-city-lite/dbip-city-lite.mmdb.gz
```

---

## Why Use Our Service?

| Feature | Benefit |
|---------|---------|
| **No Authentication** | Start using immediately without API keys or accounts |
| **CDN Delivery** | Fast downloads from jsDelivr's global network |
| **Automatic Updates** | GitHub Actions fetch latest databases automatically |
| **Open Source** | Full transparency - check our repos for automation scripts |
| **Version History** | Roll back to any previous database version via npm |
| **Community Trusted** | Maintained by WP Statistics, trusted by 600K+ WordPress sites |

---

## Use Cases

- **Analytics & Reporting** - Track visitor locations for website analytics
- **Content Personalization** - Show localized content based on user location
- **Fraud Detection** - Identify suspicious activity from unexpected locations
- **Compliance** - Implement geo-restrictions for regulatory compliance
- **Marketing** - Target campaigns based on geographic regions
- **Load Balancing** - Route users to nearest servers

---

## Data Accuracy

Both databases provide city-level accuracy for IP geolocation:

- **Country accuracy:** 99%+
- **City accuracy:** 70-85% (varies by region)
- **Coordinates:** Approximate city center

For higher accuracy requirements, consider the commercial versions from [MaxMind](https://www.maxmind.com/) or [DB-IP](https://db-ip.com/).

---

## Attribution

This service uses data from:

- **MaxMind GeoLite2** - [maxmind.com](https://www.maxmind.com) - Licensed under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)
- **DB-IP Lite** - [db-ip.com](https://db-ip.com) - Licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)

When using these databases, please include appropriate attribution as required by the licenses.

---

## Related Projects

- [WP Statistics](https://wp-statistics.com) - Privacy-focused analytics for WordPress
- [GeoLite2-City](https://github.com/wp-statistics/GeoLite2-City) - MaxMind database repository
- [DbIP-City-lite](https://github.com/wp-statistics/DbIP-City-lite) - DB-IP database repository

---

## Contributing

Found an issue or have a suggestion? [Open an issue](https://github.com/wp-statistics/geo/issues) or submit a pull request.

---

## License

This project is maintained by [VeronaLabs](https://veronalabs.com) and the [WP Statistics](https://wp-statistics.com) team.

The databases are distributed under their respective licenses:
- MaxMind GeoLite2: [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)
- DB-IP Lite: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)

---

<p align="center">
  <a href="https://wp-statistics.com">
    <strong>WP Statistics</strong>
  </a>
  <br>
  <sub>Maintained with ❤️ by the WP Statistics team</sub>
</p>
