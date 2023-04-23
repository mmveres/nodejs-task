import * as fs from 'fs';
import * as path from 'path';
import * as https from 'https';

type Link = string;

function downloadPage(link: Link, filename: string) {
    return new Promise<void>((resolve, reject) => {
        https.get(link, (res) => {
            const chunks: Buffer[] = [];

            res.on('data', (chunk: Buffer) => {
                chunks.push(chunk);
            });

            res.on('end', () => {
                const html = Buffer.concat(chunks).toString();
                fs.writeFile(filename, html, (err) => {
                    if (err) {
                        reject(err);
                        return;
                    }

                    resolve();
                });
            });
        });
    });
}

async function downloadPages(links: Link[], folderName: string) {
    if (!fs.existsSync(folderName)) {
        fs.mkdirSync(folderName);
    }

    for (const link of links) {
        const filename = path.join(folderName, path.basename(link) + '.html');
        await downloadPage(link, filename);
    }
}

async function main() {
    const args = process.argv.slice(2);
    console.log(args);
    const jsonFilePath = args[0];
    const jsonString = fs.readFileSync(jsonFilePath, 'utf8');
    const links = JSON.parse(jsonString) as Link[];
    const folderName = path.basename(jsonFilePath, '.json') + '_pages';

    await downloadPages(links, folderName);

    console.log('All pages downloaded successfully.');

}

main();
