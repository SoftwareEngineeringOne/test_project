use serde::{Serialize, Deserialize};

#[derive(PartialEq, Serialize, Deserialize, Debug)]
pub struct Language {
    pub name: String,
    pub version: String,
}