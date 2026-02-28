const fs = require('fs');
const path = require('path');
const Mustache = require('mustache');

// 讀取 CMS 資料
const data = JSON.parse(fs.readFileSync('cms-data.json', 'utf-8'));

console.log('Rebuild script loaded CMS data');
console.log('CMS data keys:', Object.keys(data));

// Note: This is a placeholder rebuild script
// To fully implement Mustache templates, you would need to:
// 1. Convert each HTML file to a .mustache template in templates/
// 2. Replace static content with {{variable}} syntax
// 3. Uncomment the code below

/*
// 掃描 templates/ 目錄
const templatesDir = path.join(__dirname, 'templates');
if (!fs.existsSync(templatesDir)) {
  console.log('Templates directory not found, skipping rebuild');
  process.exit(0);
}

const templates = fs.readdirSync(templatesDir)
  .filter(f => f.endsWith('.mustache'));

templates.forEach(templateFile => {
  const template = fs.readFileSync(
    path.join(templatesDir, templateFile), 'utf-8'
  );

  // 將巢狀資料打平供 Mustache 使用
  const flatData = {};
  for (const [sectionKey, sectionData] of Object.entries(data)) {
    if (typeof sectionData === 'object' && sectionData !== null) {
      for (const [fieldKey, fieldValue] of Object.entries(sectionData)) {
        flatData[`${sectionKey}.${fieldKey}`] = fieldValue;
      }
    }
    flatData[sectionKey] = sectionData;
  }

  const html = Mustache.render(template, flatData);

  // 去掉 .mustache 後綴
  const outputFile = templateFile.replace('.mustache', '');
  fs.writeFileSync(outputFile, html, 'utf-8');
  console.log(`已重建: ${outputFile}`);
});

console.log('重建完成！');
*/

console.log('Rebuild script finished (templates not yet implemented)');
console.log('Current website uses static HTML content');
console.log('To enable dynamic CMS updates, create .mustache templates in templates/ directory');
