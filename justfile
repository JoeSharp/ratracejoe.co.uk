# Run the development server for the website
install:
    npm install --prefix ./ratracejoe.co.uk

run: install
    npm run dev --prefix ./ratracejoe.co.uk

ci:
    npm ci --prefix ./ratracejoe.co.uk

build: install
    npm run build --prefix ./ratracejoe.co.uk

build-ci: ci
    npm run build --prefix ./ratracejoe.co.uk

work:
    echo "Calm down!"
