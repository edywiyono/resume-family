const fs = require('fs');

const template =
fs.readFileSync(
'templates/ats.html',
'utf8'
);

const files =
fs.readdirSync('data');

for(const file of files){

    const data =
    JSON.parse(
        fs.readFileSync(
            `data/${file}`,
            'utf8'
        )
    );

    let html = template;

    html =
    html.replaceAll(
        '{{name}}',
        data.name
    );

    html =
    html.replaceAll(
        '{{phone}}',
        data.phone
    );

    html =
    html.replaceAll(
        '{{email}}',
        data.email
    );

    html =
    html.replaceAll(
        '{{linkedin}}',
        data.linkedin
    );

    html =
    html.replaceAll(
        '{{summary}}',
        data.summary
    );

    html =
    html.replaceAll(
        '{{skills}}',
        data.skills
            .map(
                x => `<li>${x}</li>`
            )
            .join('')
    );

    const output =
    file.replace('.json','.html');

    fs.writeFileSync(
        `resumes/${output}`,
        html
    );
}
