use serde::{Serialize, Deserialize};

#[derive(Serialize, Deserialize, Debug)]
pub struct Ide {
    pub name: String,
    pub version: String,
}
