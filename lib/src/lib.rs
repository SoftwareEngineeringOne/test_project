pub mod filehandler;
pub mod metadata;

pub use filehandler::FileHandler;

pub fn add(left: u64, right: u64) -> u64 {
    left + right
}

pub fn insert_if_not_exists<T: PartialEq>(vec: &mut Vec<T>, item: T) {
    if !vec.contains(&item) {
        vec.push(item);
    }
}

pub fn remove_if_exists<T: PartialEq>(vec: &mut Vec<T>, item: T) {
    vec.retain(|x| x != &item);
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn it_works() {
        let result = add(2, 2);
        assert_eq!(result, 4);
    }

    #[test]
    fn insert_new() {
        let mut vec = vec![1, 2, 3];
        insert_if_not_exists(&mut vec, 4);
        assert_eq!(vec, vec![1, 2, 3, 4]);
    }

    #[test]
    fn insert_existing() {
        let mut vec = vec![1, 2, 3];
        insert_if_not_exists(&mut vec, 2);
        assert_eq!(vec, vec![1, 2, 3]);
    }

    #[test]
    fn remove_non_existing() {
        let mut vec = vec![1, 2, 3];
        remove_if_exists(&mut vec, 4);
        assert_eq!(vec, vec![1, 2, 3]);
    }

    #[test]
    fn remove_existing() {
        let mut vec = vec![1, 2, 3];
        remove_if_exists(&mut vec, 2);
        assert_eq!(vec, vec![1, 3]);
    }
}
