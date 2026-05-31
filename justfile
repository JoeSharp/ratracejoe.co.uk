# Run the development server for the website
install:
    npm install

run: install
    npm run dev

ci:
    npm ci

build: install
    npm run build

build-ci: ci
    npm run build

work:
    echo "Calm down!"
