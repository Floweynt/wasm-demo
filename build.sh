clang++ --target=wasm32 wasm.cpp -o module.wasm -O2 -fno-builtin --no-standard-libraries -Wl,--no-entry -Wl,--export-all -Wl,--allow-undefined
