# Run the development server for the website
install:
    npm install --prefix ./web

run: install
    npm run dev --prefix ./web/packages/ratracejoe.co.uk

ci:
    npm ci --prefix ./web/packages/ratracejoe.co.uk

build: install
    npm run build --prefix ./web/packages/ratracejoe.co.uk

build-ci: ci
    npm run build --prefix ./web/packages/ratracejoe.co.uk

work:
    echo "Calm down!"
