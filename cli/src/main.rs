use lib::metadata::{Metadata, Language, Ide, BuildSystem};
use lib::FileHandler;
use uuid::Uuid;
use chrono::Utc;
use prompt::Prompt;

mod prompt;

fn main() {
    let data: Metadata = FileHandler::read_toml("./manifest.toml").unwrap();

    println!("Data: {:#?}", data);

    // let mut metadata = Metadata {
    //     id: Uuid::new_v4(),
    //     directory: "/home/simon".to_string(),
    //     title: "Test Title".to_string(),
    //     description: "".to_string(),
    //     languages: vec![ Language {
    //         name: "Rust".to_string(),
    //         version: "1.82.0".to_string()
    //     }],
    //     categories: vec!["This".to_string(),"is".to_string(),"not".to_string(),"fun".to_string()],
    //     build_system: Some(BuildSystem {
    //         name: "Cargo".to_string(),
    //         version: "".to_string()
    //     }),
    //     preferred_ide: Some(Ide {
    //         name: "neovim".to_string(),
    //         version: "0.10".to_string()
    //     }),
    //     repository_url: Some("google.com".to_string()),
    //     created: Utc::now(),
    //     updated: Utc::now(),
    // };
    //
    //
    // let mut prompt = Prompt::default();
    // prompt.run();
    // metadata.title = prompt.title.expect("title was none");
    //
    // FileHandler::write_toml(&metadata, "./manifest.toml");
    //
    //
    //
    // println!("Data: {:#?}", metadata);
    //
    // println!("Hello, world!");
}
