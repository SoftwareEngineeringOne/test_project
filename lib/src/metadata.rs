use uuid::Uuid;
use chrono::{DateTime, Utc};
use serde::{Serialize, Deserialize};
use crate::{insert_if_not_exists, remove_if_exists};
pub use language::Language;
pub use ide::Ide;
pub use buildsystem::BuildSystem;


pub mod language;
pub mod ide;
pub mod buildsystem;


#[derive(Serialize, Deserialize, Debug)]
pub struct Metadata {
    pub id: Uuid,
    pub directory: String,
    pub title: String,
    pub description: String,
    pub languages: Vec<Language>,
    pub categories: Vec<String>,
    pub build_system: Option<BuildSystem>,
    pub preferred_ide: Option<Ide>,
    pub repository_url: Option<String>,
    pub created: DateTime<Utc>,
    pub updated: DateTime<Utc>
}

impl Metadata {
    pub fn builder() -> MetadataBuilder {
        MetadataBuilder::default()
    }

    pub fn update(self) -> MetadataBuilder {
        MetadataBuilder {
            id: Some(self.id),
            directory: Some(self.directory),
            title: Some(self.title),
            description: Some(self.description),
            languages: self.languages,
            categories: self.categories,
            build_system: self.build_system,
            preferred_ide: self.preferred_ide,
            repository_url: self.repository_url,
            created: Some(self.created),
        }
    }

}

#[derive(Default)]
pub struct MetadataBuilder {
    id: Option<Uuid>,
    directory: Option<String>,
    title: Option<String>,
    description: Option<String>,
    languages: Vec<Language>,
    categories:Vec<String>,
    build_system: Option<BuildSystem>,
    preferred_ide: Option<Ide>,
    repository_url: Option<String>,
    created: Option<DateTime<Utc>>,
}

impl MetadataBuilder {
    pub fn directory(mut self, directory: String) -> Self {
        self.directory = Some(directory);
        self
    }

    pub fn title(mut self, title: String) -> Self {
        self.title = Some(title);
        self
    }

    pub fn description(mut self, description: String) -> Self {
        self.description = Some(description);
        self
    }

    pub fn add_language(mut self, language: Language) -> Self {
        insert_if_not_exists(&mut self.languages, language);
        self
    }

    pub fn remove_language(mut self, language: Language) -> Self {
        remove_if_exists(&mut self.languages, language);
        self
    }

    pub fn add_category(mut self, category: String) -> Self {
        insert_if_not_exists(&mut self.categories, category);
        self
    }

    pub fn remove_category(mut self, category: String) -> Self {
        remove_if_exists(&mut self.categories, category);
        self
    }

    pub fn build_system(mut self, build_system: BuildSystem) -> Self {
        self.build_system = Some(build_system);
        self
    }

    pub fn preferred_ide(mut self, preferred_ide: Ide) -> Self {
        self.preferred_ide = Some(preferred_ide);
        self
    }

    pub fn repository_url(mut self, repository_url: String) -> Self {
        self.repository_url = Some(repository_url);
        self
    }

    pub fn build(self) -> Metadata {
        Metadata {
            id: self.id.unwrap_or(Uuid::new_v4()),
            directory: self.directory.expect("directory is required"),
            title: self.title.expect("title is required"),
            description: self.description.unwrap_or(String::default()),
            languages: self.languages,
            categories: self.categories,
            build_system: self.build_system,
            preferred_ide: self.preferred_ide,
            repository_url: self.repository_url,
            created: self.created.unwrap_or(Utc::now()),
            updated: Utc::now(),
        }
    }
}
