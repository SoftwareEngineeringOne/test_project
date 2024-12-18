use crate::metadata::Metadata;
use color_eyre::Result;
use serde::{de::DeserializeOwned, Deserialize, Serialize};
use std::fs;

pub struct FileHandler;

impl FileHandler {
    pub fn write_toml<T: Serialize>(data: &T, file: &str) {
        fs::write(file, toml::to_string(data).expect("serialize to TOML")).expect("write file");
    }

    pub fn read_toml<T: DeserializeOwned>(file: &str) -> Result<T> {
        let data = fs::read_to_string(file)?;

        Ok(toml::from_str(&data)?)
    }
}
