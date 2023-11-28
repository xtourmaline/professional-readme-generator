// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === "None") {
        return "";
    } else if (license === "MIT") {
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
    } else if (license === "GNU GPLv3") {
        return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]";
    } else if (license === "MPL2.0") {
        return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]"
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license === "None") {
        return "";
    } else if (license === "MIT") {
        return "https://opensource.org/licenses/MIT";
    } else if (license === "GNU GPLv3") {
        return "https://www.gnu.org/licenses/gpl-3.0";
    } else if (license === "MPL2.0") {
        return "https://opensource.org/licenses/MPL-2.0"
    }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license === "None") {
        return "";
    } else if (license === "MIT") {
        return "A short, permissive software license. Basically, you can do whatever you want as long as you include the original copyright and license notice in any copy of the software/source.  There are many variations of this license in use.";
    } else if (license === "GNU GPLv3") {
        return "You may copy, distribute and modify the software as long as you track changes/dates in source files. Any modifications to or software including (via compiler) GPL-licensed code must also be made available under the GPL along with build & install instructions.";
    } else if (license === "MPL2.0") {
        return "MPL is a copyleft license that is easy to comply with. You must make the source code for any of your changes available under MPL, but you can combine the MPL software with proprietary code, as long as you keep the MPL code in separate files. Version 2.0 is, by default, compatible with LGPL and GPL version 2 or greater. You can distribute binaries under a proprietary license, as long as you make the source available under MPL."
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    let license = data.license;
    let licenseBadge = renderLicenseBadge(license);
    let licenseLink = renderLicenseLink(license);
    let licenseSection = renderLicenseSection(license);
  
    return `
# ${data.title} ${licenseBadge}(${licenseLink})

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contribution}

## Tests
${data.contribution}

## License
${licenseSection}

## Questions
Email me [here](mailto:${data.email}) for any questions!

or

Check out more works at on [GitHub](https://github.com/${username}/)!

`;
}

module.exports = generateMarkdown;
