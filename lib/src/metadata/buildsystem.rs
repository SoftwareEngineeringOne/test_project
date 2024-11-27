use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Debug)]
pub struct BuildSystem {
    pub name: String,
    pub version: String,
}
