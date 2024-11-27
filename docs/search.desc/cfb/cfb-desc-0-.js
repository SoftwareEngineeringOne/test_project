searchState.loadedDescShard("cfb", 0, "A library for reading/writing Compound File Binary …\nA compound file, backed by an underlying reader/writer …\nAn iterator over the entries in a storage object.\nMetadata about a single object (storage or stream) in a …\nA stream entry in a compound file, much like a filesystem …\nVersion 3, which uses 512-byte sectors.\nVersion 4, which uses 4096-byte sectors.\nThe CFB format version to use.\nReturns the CLSID (that is, the object class GUID) for …\nCreates a new compound file with no contents at the given …\nCreates a new compound file with no contents, using the …\nCreates and returns a new, empty stream object at the …\nCreates a new, empty storage object (i.e. “directory”) …\nRecursively creates a storage and all of its parent …\nCreates and returns a new, empty stream object at the …\nCreates a new compound file of the given version with no …\nReturns the time when the object that this entry …\nReturns the number of directory entries per sector in this …\nGiven a path within the compound file, get information …\nReturns true if there is an existing stream or storage at …\nFlushes all changes to the underlying file.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the version enum for the given version number, or …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConsumes the <code>CompoundFile</code>, returning the underlying …\nReturns true if the stream is empty.\nReturns true if the stream is empty.\nReturns whether this entry is specifically for the root …\nReturns true if there is an existing storage at the given …\nReturns whether this entry is for a storage object (i.e. a …\nReturns true if there is an existing stream at the given …\nReturns whether this entry is for a stream object (i.e. a …\nReturns the current length of the stream, in bytes.\nReturns the size, in bytes, of the stream that this …\nReturns the time when the object that this entry …\nReturns the name of the object that this entry represents.\nReturns the version number for this version.\nOpens an existing compound file at the given path in …\nOpens an existing compound file, using the underlying …\nOpens an existing compound file at the given path in …\nOpens an existing stream in the compound file for reading …\nReturns the full path to the object that this entry …\nReturns an iterator over the entries within the root …\nReturns an iterator over the entries within a storage …\nRemoves the storage object at the provided path.  The …\nRecursively removes a storage and all of its children.  If …\nRemoves the stream object at the provided path.\nReturns information about the root storage object.  This …\nReturns the length of sectors used in this version.\nReturns the sector shift used in this version.\nTruncates or extends the stream, updating the size of this …\nSets the user-defined bitflags for the object at the …\nSets the CLSID for the storage object at the provided …\nReturns the user-defined bitflags set for this object.\nReturns the bitmask used for reading stream lengths in …\nSets the modified time for the object at the given path to …\nReturns the CFB format version used for this compound file.\nReturns an iterator over all entries within the compound …\nReturns an iterator over all entries under a storage …")