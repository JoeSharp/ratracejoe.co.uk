# Run the development server for the website
install:
    npm install 

run: install
    npm run dev -w ratracejoe.co.uk

ci:
    npm ci 

test-lib: install
    npm test -w @joe/comp-sci-maths maths

build-lib: 
    npm run build -w @joe/comp-sci-maths

build-site: 
    npm run build -w ratracejoe.co.uk

build: install build-site

build-ci: ci build-site

work:
    echo "Calm down!"
