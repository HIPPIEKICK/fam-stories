npm install
#npx nx build fam-stories-api
#npx nx build fam-stories-app
mkdir -p dist/apps/fam-stories-api/public
cp -r dist/apps/fam-stories-app/* dist/apps/fam-stories-api/public
cd dist/apps/fam-stories-api/
npm install
node main.js
