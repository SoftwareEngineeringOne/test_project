use serde::{Serialize, Deserialize};

#[derive(Serialize, Deserialize, Debug)]
pub struct BuildSystem {
    pub name: String,
    pub version: String,
}
