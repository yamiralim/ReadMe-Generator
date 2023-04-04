// !==========================================|
// ! function to generate markdown for README |
// !==========================================|

function generateMarkdown(data) {
  let readme = `
# { ${data.title} }

## Badges

<p align="center">
<img src="https://img.shields.io/github/languages/count/${data.github}/${data.repository}?color=FF9AA2&style=for-the-badge" alt="Languages" />
<img src="https://img.shields.io/github/languages/top/${data.github}/${data.repository}?color=FFB7B2&style=for-the-badge" alt="Top Language" />
<img src="https://img.shields.io/github/languages/code-size/${data.github}/${data.repository}?color=FFDAC1&style=for-the-badge" alt="Code Size" />
<img src="https://img.shields.io/github/repo-size/${data.github}/${data.repository}?color=E2F0CB&style=for-the-badge" alt="Repo Size" />
<img src="https://img.shields.io/github/last-commit/${data.github}/${data.repository}?color=B5EAD7&style=for-the-badge" alt="Last Commit" />
<img src="https://img.shields.io/github/followers/${data.github}?style=for-the-badge" alt="Followers" />
</p>

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Contribute](#contribute)
- [Tests](#tests)
- [Questions](#questions)

## Description
${data.description}

${installation(data.installation)}

## Usage

${screenshot(data.screenshot)}

## Credits

:bust_in_silhouette: [${data.creator}](https://www.notion.so/davidmichaelmackey/David-Mackey-a59ce61a996840d6a933e3b135673467?pvs=4)<br>
:email: [Email](mailto:${data.email})<br>
:octocat: [GitHub](https://github.com/${data.github}/)<br>
:briefcase: [Linkedin](https://linkedin.com/in/${data.linkedin}/)<br>

${collaborators(data.collaborators)}

${resources(data.resources)}

## Toolset

${toolset(data.toolset)}

${license(data.license)}

## Contribute

[Contributor Covenant](https://www.contributor-covenant.org/)

## Tests

${tests(data.tests)}

## Questions

Have Questions?
<br>
Feel free send me an [email](mailto:${data.email}) or reach out to me on [Linkedin](https://linkedin.com/in/${data.linkedin}/).

`;
  return readme;
}

// !===========================|
// ! function for installation |
// !===========================|

function installation(installation) {

  if (installation) {
    var commands = installation.split(", ");
    commands.forEach((c, index) => commands[index] = commands[index].trim());
    return `## Installation
Follow these commands to run the command-line application:  

    ${commands.join(`
    `)}`;
  }
  else
    return ``;
}

// !=========================|
// ! function for screenshot |
// !=========================|

function screenshot(screenshot) {
  if (screenshot) {
    return `

  ![Usage](assets/images/${screenshot})

    `;
  } else {
    return ``;
  }
}

// !============================|
// ! function for collaborators |
// !============================|

function collaborators(collaborators) {

  if (collaborators) {
    var commands = collaborators.split(",");
    commands.forEach((c, index) => commands[index] = commands[index].trim());
    return `"### Collaborators

    ${commands.join(``)}`;
  }
  else
    return ``;
}

// !============================|
// ! function for collaborators |
// !============================|

function tests(tests) {

  if (tests) {
    var commands = tests.split(",");
    commands.forEach((c, index) => commands[index] = commands[index].trim());
    return `

    ${commands.join(`
    `)}`;
  }
  else
    return `n/a`;
}

// !========================|
// ! function for resources |
// !========================|

function resources(resources) {

  if (resources) {
    var commands = resources.split(",");
    commands.forEach((c, index) => commands[index] = commands[index].trim());
    return `### Resources

    ${commands.join(`
    `)}`;
  }
  else
    return ``;
}

// !=====================|
// ! function for badges |
// !=====================|

function toolset(tools) {
  if (tools) {
    tools = tools.split(", ");
    let res = `<p align="center">`;
    tools.forEach(tool => {
      res += `<img src="https://img.shields.io/badge/-${tool}-grey?style=for-the-badge"  alt="${tool}" />
      `;
    });
    res += `
</p>`;
    return res;
  }
  else {
    return ``;
  }
}

// !======================|
// ! function for license |
// !======================|

function license(license) {
  if (license) {
    let licenseBadges = [
      {
        href: "#",
        src: 'https://img.shields.io/badge/License-Free_License-yellow?style=for-the-badge',
        alt: 'Free License'
      },
      {
        href: "https://www.gnu.org/licenses/gpl-3.0",
        src: 'https://img.shields.io/badge/License-GPL-BD0100?style=for-the-badge',
        alt: 'General Public License'
      },
      {
        href: "https://www.apache.org/licenses/LICENSE-2.0",
        src: 'https://img.shields.io/badge/License-Apache-4543AA?style=for-the-badge',
        alt: 'Apache License'
      },
      {
        href: "https://opensource.org/licenses/MS-PL",
        src: 'https://img.shields.io/badge/License-MsPL-00A4EF?style=for-the-badge',
        alt: 'Microsoft Public License'
      },
      {
        href: "https://en.wikipedia.org/wiki/BSD_licenses",
        src: 'https://img.shields.io/badge/License-BSD-003262?style=for-the-badge',
        alt: 'Berkeley Software Distribution'
      },
      {
        href: "https://en.wikipedia.org/wiki/Common_Development_and_Distribution_License",
        src: 'https://img.shields.io/badge/License-CDDL-5F81A0?style=for-the-badge',
        alt: 'Common Development & Distribution License'
      },
      {
        href: "https://opensource.org/licenses/EPL-1.0)",
        src: 'https://img.shields.io/badge/License-EPL-E89940?style=for-the-badge',
        alt: 'Eclipse Public License'
      },
      {
        href: "https://opensource.org/licenses/MIT",
        src: 'https://img.shields.io/badge/License-MIT-A31F34?style=for-the-badge',
        alt: 'MIT License'
      },
      {
        href: "https://opensource.org/licenses/MPL-2.0",
        src: 'https://img.shields.io/badge/License-MPL-E66000?style=for-the-badge',
        alt: 'Mozilla Public License'
      },
      {
        href: "#",
        src: 'https://img.shields.io/badge/License-Other-lightgrey?style=for-the-badge',
        alt: 'Other License'
      }
    ];
    return `## License
<p align = "center">
  <a href="${licenseBadges[license].href}"><img src="${licenseBadges[license].src}" alt="${licenseBadges[license].alt}"/></a>
</p>`;
  }
}

// !================|
// ! module exports |
// !================|

module.exports = generateMarkdown;
