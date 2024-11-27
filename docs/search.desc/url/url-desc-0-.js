searchState.loadedDescShard("url", 0, "rust-url is an implementation of the URL Standard for the …\nA DNS domain name, as ‘.’ dot-separated labels. …\nThe host name of an URL.\nAn IPv4 address. <code>Url::host_str</code> returns the serialization …\nAn IPv6 address. <code>Url::host_str</code> returns the serialization …\nNo value.\nA globally unique identifier\nOpaque identifier for URLs that have file or other schemes\nThe origin of an URL\nErrors that can occur during parsing.\nFull configuration for the URL parser.\nExposes methods to manipulate the path of an URL that is …\nIndicates a position within a URL based on its components.\nSome value of type <code>T</code>.\nNon-fatal syntax violations that can occur during parsing.\nConsists of the URL’s scheme, host and port\nA parsed URL record.\nImplementation detail of <code>Url::query_pairs_mut</code>. Typically …\nReturn the serialization of this URL.\n…\nReturn the authority of this URL as an ASCII string.\nChange the base URL\nReturn whether this URL is a cannot-be-a-base URL, meaning …\nRemove all segments in the path, leaving the minimal …\nSerialize with Serde using the internal representation of …\nIf this URL has a host and it is a domain name (not an IP …\nOverride the character encoding of query strings. This is …\nAppend each segment from the given iterator at the end of …\nReturn this URL’s fragment identifier, if any.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nConvert a directory name as <code>std::path::Path</code> into an URL in …\nConvert a file name as <code>std::path::Path</code> into an URL in the …\nReturn whether the URL has an ‘authority’, which can …\nEquivalent to <code>url.host().is_some()</code>.\nReturn the parsed representation of the host for this URL. …\nReturn the string representation of the host (domain or IP …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturn the serialization of this URL.\nReturn whether the URL is special (has a special scheme)\nReturn whether this origin is a (scheme, host, port) tuple …\nParse a string as an URL, with this URL as the base URL.\nCreates a relative URL if possible, with this URL as the …\nCreates a new opaque origin that is only equal to itself.\nReturn a default <code>ParseOptions</code> that can fully configure the …\nReturn the origin of this URL (…\nParse a host: either an IPv6 address in [] square …\nParse an absolute URL from a string.\nParse an URL string with the configuration so far.\nParse an absolute URL from a string and add params to its …\nReturn the password for this URL, if any, as a …\nReturn the path for this URL, as a percent-encoded ASCII …\nUnless this URL is cannot-be-a-base, return an iterator of …\nReturn an object with methods to manipulate this URL’s …\nRemove the last segment of this URL’s path.\nRemove the last segment of this URL’s path if it is …\nReturn the port number for this URL, if any.\nReturn the port number for this URL, or the default port …\nAppend the given segment at the end of this URL’s path.\nReturn this URL’s query string, if any, as a …\nParse the URL’s query string, if any, as …\nManipulate this URL’s query string, viewed as a sequence …\nReturn the scheme of this URL, lower-cased, as an ASCII …\nSerialize with Serde using the internal representation of …\nChange this URL’s fragment identifier.\nChange this URL’s host.\nChange this URL’s host to the given IP address.\nChange this URL’s password.\nChange this URL’s path.\nChange this URL’s port number.\nChange this URL’s query string. If <code>query</code> is <code>None</code>, this …\nChange this URL’s scheme.\nChange this URL’s username.\nResolve a URL’s host and port number to <code>SocketAddr</code>.\nCall the provided function or closure for a non-fatal …\nAssuming the URL is in the <code>file</code> scheme or similar, convert …\nReturn a copy of <code>self</code> that owns an allocated <code>String</code> but …\n…\nReturn the username for this URL (typically the empty …")