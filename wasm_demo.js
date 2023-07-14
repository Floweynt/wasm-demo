let wasm_memory = undefined;

const wasm_inst = WebAssembly.instantiateStreaming(fetch("module.wasm"),{
    env: {
        "print_int": (x) => {console.log(x);} ,
        "write_stdout": (pointer, length) => {
            console.log(new TextDecoder().decode(new Uint8Array(wasm_memory.buffer, pointer, length)));} 
    },
}).then((wasm_module) => {
    const memory = wasm_module.instance.exports.memory;
    wasm_memory = memory;
    memory.grow(1024);

    const values = new Uint32Array(memory.buffer, 512, 10);
    for (let i = 0; i < 10; i++) {
        values[i] = i;
    }

    // sum_array(int* ptr, int size)
    // we have 10 elements in this array, and the pointer starts at 512
    const sum = wasm_module.instance.exports.sum_array(512, 10);
    console.log(sum);
    wasm_module.instance.exports.print_add_one(4);
    wasm_module.instance.exports.hello_world();
});

console.log("hello");
