// function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
## Description

${data.description}

## Table of Contents

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## License



## Contributing

${data.contributing}

## Tests

${data.test}

## Questions

Feel free to reach out to me at ${data.email} with any questions.

More of my work can be seen here: [github/${data.github}](https://github.com/${data.github})
  `;
}

module.exports = generateMarkdown;
