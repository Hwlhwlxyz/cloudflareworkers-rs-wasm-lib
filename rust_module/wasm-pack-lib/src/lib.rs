//  wasm-pack build --target web
mod utils;

use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern "C" {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet() {
    alert("Hello, wasm-pack-lib!");
}

#[wasm_bindgen]
pub fn wasm_print(name: &str) -> JsValue {
    println!("Hello, wasm_print!");
    JsValue::from_str(&format!("Hello from rust, {}!", name))
}