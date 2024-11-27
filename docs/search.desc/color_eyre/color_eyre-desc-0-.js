searchState.loadedDescShard("color_eyre", 0, "An error report handler for panics and the <code>eyre</code> crate for …\nA custom handler type for <code>eyre::Report</code> which provides …\nReturn a reference to the captured <code>Backtrace</code> type\nConfiguration options for customizing the behavior of the …\nReturns the argument unchanged.\nInstall the default panic and error report hooks\nCalls <code>U::from(self)</code>.\nHelpers for adding custom sections to error reports\nReturn a reference to the captured <code>SpanTrace</code> type\nAn eyre reporting hook used to construct <code>EyreHandler</code>s\nCallback for filtering a vector of <code>Frame</code>s\nA representation of a Frame from a Backtrace or a SpanTrace\nBuilder for customizing the behavior of the global panic …\nA panic reporting hook\nA type representing an error report for a panic.\nA struct that represents a theme that is used by <code>color_eyre</code>\nStyles the selected line of displayed code\nAdd the default set of filters to this <code>HookBuilder</code>’s …\nAdd a custom filter to the set of frame filters\nConstruct a HookBuilder with minimal features enabled\nConfigures the default capture mode for <code>SpanTraces</code> in …\nStyles the hash after <code>dependency_code</code> and <code>crate_code</code>\nStyles code that’s in your crate\nReturns a theme for dark backgrounds. This is the default\nStyles code that is not part of your crate\nConfigures the enviroment varible info section and whether …\nConfigures the location info section and whether or not it …\nStyles errors printed by <code>EyreHandler</code>\nStyles printed paths\nsource file path\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nStyles the “error” section header\nStyles the “note” section header\nStyles the “suggestion” section header\nStyles the “warning” section header\nStyles the “N frames hidden” message\nInstall the given Hook as the global error report hook\nInstall self as a global panic hook via …\nInstalls self as the global eyre handling hook via …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConvert the self into the boxed type expected by …\nCreate a <code>PanicHook</code> and <code>EyreHook</code> from this <code>HookBuilder</code>. …\nConvert self into the type expected by <code>std::panic::set_hook</code>…\nReturns a theme for light backgrounds\nStyles the line number of a file\nsource line number\nFrame index\nframe symbol name\nConstruct a HookBuilder\nCreates a blank theme\nStyles paths of a panic\nStyles the header of a panic\nStyles the line numbers of a panic\nOverrides the main error message printing section at the …\nStyles the message of a panic\nConstruct a panic reporter which prints it’s panic …\nAdd a custom section to the panic hook that will be printed\nStyles fields associated with a the <code>tracing::Span</code>.\nStyles the <code>color_spantrace</code> target (i.e. the module and …\nSet the global styles that <code>color_eyre</code> should use.\nCreate a <code>PanicHook</code> and <code>EyreHook</code> from this <code>HookBuilder</code>. …\nAn indented section with a header for an error report\nTrait for printing a panic error message for the given …\nThe return type of each method after adding context\nA helper trait for attaching informational sections to …\nExtension trait for constructing sections with commonly …\nDisplay trait equivalent for implementing the display logic\nAdd an error section to an error report, to be displayed …\nReturns the argument unchanged.\nAdd a header to a <code>Section</code> and indent the body\nCalls <code>U::from(self)</code>.\nAdd a Note to an error report, to be displayed after the …\nAdd a section to an error report, to be displayed after …\nAdd a Suggestion to an error report, to be displayed after …\nWhether to suppress printing of collected backtrace (if …\nAdd a Warning to an error report, to be displayed after …\nAdd an error section to an error report, to be displayed …\nAdd a Note to an error report, to be displayed after the …\nAdd a Section to an error report, to be displayed after …\nAdd a Suggestion to an error report, to be displayed after …\nAdd a Warning to an error report, to be displayed after …")