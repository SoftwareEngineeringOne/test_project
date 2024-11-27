use color_eyre::Result;
use inquire::Text;
use lib::metadata::{BuildSystem, Ide, Language};

#[derive(Default, Debug)]
pub struct Prompt {
    directory: Option<String>,
    pub title: Option<String>,
    description: String,
    languages: Vec<Language>,
    categories: Vec<String>,
    build_system: Option<BuildSystem>,
    preferred_ide: Option<Ide>,
    repository_url: Option<String>,
}

impl Prompt {
    pub fn run(&mut self) -> Result<()> {
        let pwd = std::env::var("PWD")?;
        let default_title = pwd.rsplit("/").next().unwrap_or("default-app");
        self.title = Some(
            Text::new("What should your project be called?")
                .with_default(&default_title)
                .prompt()?,
        );

        Ok(())
    }
}
