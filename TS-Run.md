1. npm init -y
2. tsc --init
3. npm install ts-node-dev --save-dev

- Add in package.json file
"scripts": {
  "dev": "ts-node-dev --respawn src/app.ts"
}

- Modify tsconfig.json file
{
  "compilerOptions": {
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "target": "ES2022", // Or your desired target
    "strict": true,
    "outDir": "./dist"
  }
}

