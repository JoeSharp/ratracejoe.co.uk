# Run the development server for the website
install:
    npm install 

run: build-hello-wasm build-rust-gaming-wasm install
    npm run dev -w ratracejoe.co.uk

ci:
    npm ci 

test-lib: install
    npm test -w @joe/comp-sci-maths maths

build-lib: 
    npm run build -w @joe/comp-sci-maths

build-site: 
    npm run build -w ratracejoe.co.uk

update-rust-gaming:
    git submodule update --remote --merge

build-rust-gaming-wasm:
    cd packages/rust-gaming-wasm && wasm-pack build --target web --out-dir pkg

build-hello-wasm:
    cd packages/wasm-hello && wasm-pack build --target web --out-dir pkg

build: install build-hello-wasm build-rust-gaming-wasm build-lib build-site

build-ci: ci build-hello-wasm build-rust-gaming-wasm build-lib build-site

work:
    echo "Calm down!"

dev-tools:
    rustup target add wasm32-unknown-unknown
    cargo install wasm-pack