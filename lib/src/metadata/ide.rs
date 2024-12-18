use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Debug)]
pub struct Ide {
    pub name: String,
    pub version: String,
}
