searchState.loadedDescShard("tracing_subscriber", 0, "Utilities for implementing and composing <code>tracing</code> …\nUtilities for working with fields and field visitors.\n<code>Layer</code>s that control which spans and events are enabled by …\nA <code>Subscriber</code> for formatting and logging <code>tracing</code> data.\nThe <code>Layer</code> trait, a composable abstraction for building …\nThe <code>tracing-subscriber</code> prelude.\nStorage for span data shared by multiple <code>Layer</code>s.\nWrapper for a <code>Layer</code> to allow it to be dynamically reloaded.\nExtension traits and other utilities to make working with …\nExtension trait providing <code>MakeVisitor</code> combinators.\nExtension trait implemented for all <code>MakeVisitor</code> …\nCreates new visitors.\nExtension trait implemented by types which can be recorded …\nVisits typed values.\nExtension trait implemented by visitors to indicate that …\nA visitor that produces output once it has visited a set …\nExtension trait implemented by visitors to indicate that …\nThe visitor type produced by this <code>MakeVisitor</code>.\n<code>MakeVisitor</code> wrappers for working with <code>fmt::Debug</code> fields.\nWraps <code>self</code> so that any <code>fmt::Debug</code> fields are recorded …\nA <code>MakeVisitor</code> wrapper that separates formatted fields with …\nWraps <code>self</code> so that when fields are formatted to a writer, …\n<code>MakeVisitor</code> wrappers for working with <code>fmt::Display</code> fields.\nWraps <code>self</code> so that any string fields named “message” …\nCompletes the visitor, returning any output.\nMake a new visitor for the provided <code>target</code>.\nRecord all the fields in <code>self</code> with the provided <code>visitor</code>.\nVisit a boolean value.\nVisit a byte slice.\nVisit a value implementing <code>fmt::Debug</code>.\nRecords a type implementing <code>Error</code>.\nVisit a double-precision floating point value.\nVisit a signed 128-bit integer value.\nVisit a signed 64-bit integer value.\nVisit a string value.\nVisit an unsigned 128-bit integer value.\nVisit an unsigned 64-bit integer value.\nVisit a set of fields, and return the output of finishing …\nVisits all fields in <code>fields</code> with a new visitor constructed …\nReturns the formatter that this visitor writes to.\nReturns the writer that this visitor writes to.\nA visitor wrapper that ensures any <code>fmt::Debug</code> fields are …\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nWraps the provided visitor so that any <code>fmt::Debug</code> fields …\nVisit a string value.\nA <code>MakeVisitor</code> wrapper that wraps a visitor that writes …\nA visitor wrapper that inserts a delimiter after the …\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns a new <code>MakeVisitor</code> implementation that wraps <code>inner</code> …\nReturns a new <code>Visit</code> implementation that wraps <code>inner</code> so that\nA visitor wrapper that ensures any strings named “message…\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nReturns a new <code>MakeVisitor</code> implementation that will wrap …\nVisit a string value.\nThe “debug” level.\nA filter implemented by a closure or function pointer that …\nThe “error” level.\nExtension trait adding combinators for combining <code>Filter</code>.\nA filter implemented by a closure or function pointer that …\nUniquely identifies an individual <code>Filter</code> instance in the …\nA <code>Layer</code> that wraps an inner <code>Layer</code> and adds a <code>Filter</code> which …\nThe “info” level.\nA filter comparable to a verbosity <code>Level</code>.\nIndicates that a string could not be parsed to a valid …\nThe “off” level.\nIndicates that a string could not be parsed as a filtering …\nThe “trace” level.\nThe “warn” level.\nCombines this <code>Filter</code> with another <code>Filter</code> s so that spans …\nCombines this <code>Filter</code> with another <code>Filter</code> s so that spans …\nBoxes <code>self</code>, erasing its concrete type.\nBoxes <code>self</code>, erasing its concrete type.\nFilter combinators\nReturns a <code>LevelFilter</code> that matches the most verbose <code>Level</code> …\nConstructs a <code>DynFilterFn</code> from a function or closure that …\nBorrows the <code>Filter</code> used by this layer.\nConstructs a <code>FilterFn</code>, from a function or closure that …\nMutably borrows the <code>Filter</code> used by this layer.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns a <code>LevelFilter</code> that enables spans and events with …\nBorrows the inner <code>Layer</code> wrapped by this <code>Filtered</code> layer.\nMutably borrows the inner <code>Layer</code> wrapped by this <code>Filtered</code> …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns the most verbose <code>Level</code> that this filter accepts, …\nConstructs a <code>Filter</code> from a function or closure that …\nConstructs a <code>FilterFn</code> from a function or closure that …\nWraps the provided <code>Layer</code> so that it is filtered by the …\nInverts <code>self</code>, returning a filter that enables spans and …\nInverts <code>self</code>, returning a filter that enables spans and …\nCombines two <code>Filter</code>s so that spans and events are enabled …\nCombines two <code>Filter</code>s so that spans and events are enabled …\nA filter that enables or disables spans and events based …\nAdds a function for filtering callsites to this filter.\nSets the highest verbosity <code>Level</code> the filter function will …\nSets the highest verbosity <code>Level</code> the filter function will …\nCombines two <code>Filter</code>s so that spans and events are enabled …\nInverts the result of a <code>Filter</code>.\nCombines two <code>Filter</code>s so that spans and events are enabled …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nAn owning iterator over the target-level pairs of a <code>Targets</code>…\nA borrowing iterator over the target-level pairs of a …\nA filter that enables or disables spans and events based …\nReturns the default level for this filter, if one is set.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns an iterator over the target-<code>LevelFilter</code> pairs in …\nReturns a new <code>Targets</code> filter.\nSets the default level to enable for spans and events …\nEnables spans and events with targets starting with the …\nAdds targets from an iterator of target-<code>LevelFilter</code> pairs …\nReturns whether a target-<code>Level</code> pair would be enabled by …\nThe maximum verbosity level that is enabled by a <code>Subscriber</code>…\nProvides the current span context to a formatter.\nA type that can format a tracing <code>Event</code> to a <code>Writer</code>.\nA type that can format a set of fields to a <code>Writer</code>.\nA formatted representation of a span’s fields stored in …\nA <code>Subscriber</code> that logs formatted representations of <code>tracing</code>…\nA <code>Layer</code> that logs formatted representations of <code>tracing</code> …\nA type that can create <code>io::Write</code> instances.\nA <code>Subscriber</code> that logs formatted representations of <code>tracing</code>…\nConfigures and constructs <code>Subscriber</code>s.\nA writer intended to support <code>libtest</code>’s output capturing …\nThe concrete <code>io::Write</code> implementation returned by …\nRecord additional field(s) on an existing span.\nReturns a new <code>format::Writer</code> for writing to this …\nReturns a new <code>SubscriberBuilder</code> for configuring a format …\nSets the layer being built to use a less verbose formatter.\nSets the subscriber being built to use a less verbose …\nReturns the current span for this formatter.\nSets the event formatter that the layer being built will …\nSets the event formatter that the subscriber being built …\nReturns an iterator over the stored data for all the spans …\nReturns <code>true</code> if an active span exists for the given <code>Id</code>.\nReturns the field formatter configured by the subscriber …\nThe formatted fields of a span.\nFinish the builder, returning a new <code>FmtSubscriber</code>.\nReturns a new <code>SubscriberBuilder</code> for configuring a …\nSets the field formatter that the layer being built will …\nSets the field formatter that the subscriber being built …\nFormatters for logging <code>tracing</code> events.\nReturns the default configuration for an [event formatter].\nWrite a log message for <code>Event</code> in <code>Context</code> to the given …\nFormat the provided <code>fields</code> to the provided <code>Writer</code>, …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nInstall a global tracing subscriber that listens for …\nInstall this Subscriber as the global default.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns a new formatting layer that can be composed with …\nSets whether to write errors from <code>FormatEvent</code> to the …\nSets whether to write errors from <code>FormatEvent</code> to the …\nReturns stored data for the span that the wrapped …\nReturns an instance of <code>Writer</code>.\nReturns a <code>Writer</code> for writing data from the span or event …\nUpdates the event formatter by applying a function to the …\nUpdates the event formatter by applying a function to the …\nUpdates the field formatter by applying a function to the …\nUpdates the field formatter by applying a function to the …\nUpdates the <code>MakeWriter</code> by applying a function to the …\nUpdates the <code>MakeWriter</code> by applying a function to the …\nReturns metadata for the span with the given <code>id</code>, if it …\nReturns a new <code>Layer</code> with the default configuration.\nReturns a new <code>FormattedFields</code>.\nReturns a new format subscriber with the default …\nReturns stored data for the parent span of the event …\nReturns stored data for the span with the given <code>id</code>, if it …\nReturns an iterator over the stored data for all the spans …\nFormatters for event timestamps.\nReturns a new <code>SystemTime</code> timestamp provider.\nInstall a global tracing subscriber that listens for …\nInstall this Subscriber as the global default if one is …\nVisits every span in the current context with a closure.\nSets whether or not the formatter emits ANSI terminal …\nSets whether or not an event’s source code file path is …\nSets whether or not an event’s source code file path is …\nSets whether or not an event’s level is displayed.\nSets whether or not an event’s level is displayed.\nSets whether or not an event’s source code line number is\nSets whether or not an event’s source code line number is\nSets the maximum verbosity level that will be enabled by …\nConfigures how synthesized events are emitted at points in …\nConfigures how synthesized events are emitted at points in …\nSets whether or not an event’s target is displayed.\nSets whether or not an event’s target is displayed.\nConfigures the layer to support <code>libtest</code>’s output …\nConfigures the subscriber to support <code>libtest</code>’s output …\nSets whether or not the thread ID of the current thread is …\nSets whether or not the thread ID of the current thread is …\nSets whether or not the name of the current thread is …\nSets whether or not the name of the current thread is …\nUse the given <code>timer</code> for span and event timestamps.\nUse the given <code>timer</code> for log message timestamps.\nSets the <code>MakeWriter</code> that the layer being built will use to …\nSets the <code>MakeWriter</code> that the subscriber being built will …\nDo not emit timestamps with spans and event.\nDo not emit timestamps with log messages.\nAbstractions for creating <code>io::Write</code> instances.\nBorrows the writer for this <code>Layer</code>.\nMutably borrows the writer for this <code>Layer</code>.\none event per enter/exit of a span\none event when the span is dropped\nMarker for <code>Format</code> that indicates that the compact log …\nThe default <code>FormatFields</code> implementation.\nThe visitor produced by <code>DefaultFields</code>’s <code>MakeVisitor</code> …\none event per enter of a span\none event per exit of a span\nevents at all points (new, enter, exit, drop)\nA <code>FormatFields</code> implementation that formats fields by …\nThe visitor produced by <code>FieldFn</code>’s <code>MakeVisitor</code> …\nConfigures what points in the span lifecycle are logged as …\nA pre-configured event formatter.\nA type that can format a tracing <code>Event</code> to a <code>Writer</code>.\nA type that can format a set of fields to a <code>Writer</code>.\nMarker for <code>Format</code> that indicates that the default log …\none event when span is created\nspans are ignored (this is the default)\nA writer to which formatted representations of spans and …\nRecord additional field(s) on an existing span.\nReturn a new <code>Writer</code> that mutably borrows <code>self</code>.\nUse a less verbose output format.\nReturns a <code>FormatFields</code> implementation that formats fields …\nReturns the default configuration for an [event formatter].\nWrite a log message for <code>Event</code> in <code>Context</code> to the given …\nFormat the provided <code>fields</code> to the provided <code>Writer</code>, …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns <code>true</code> if ANSI escape codes may be used to add colors\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCreate a new <code>Writer</code> from any type that implements …\nReturns a new default visitor that formats to the provided …\nReturns a new default <code>FormatFields</code> implementation.\nEnable ANSI terminal colors for formatted output.\nSets whether or not an event’s source code file path is …\nSets whether or not an event’s level is displayed.\nSets whether or not an event’s source code line number is\nSets whether or not the source code location from which an …\nSets whether or not an event’s target is displayed.\nSets whether or not the thread ID of the current thread is …\nSets whether or not the name of the current thread is …\nUse the given <code>timer</code> for log message timestamps.\nDo not emit timestamps with log messages.\nWrites a <code>char</code> into this writer, returning whether the …\nGlue for usage of the <code>write!</code> macro with <code>Writer</code>s.\nWrites a string slice into this <code>Writer</code>, returning whether …\nA type that can measure and format the current time.\nRetrieve and print the current wall-clock time.\nRetrieve and print the relative elapsed wall-clock time …\nMeasure and write out the current time.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns a new <code>SystemTime</code> timestamp provider.\nReturns a new <code>Uptime</code> timestamp provider.\nA writer of type <code>A</code>.\nA writer of type <code>A</code>.\nImplements <code>std::io::Write</code> for an <code>Arc</code> where <code>&amp;W: Write</code>.\nA writer of type <code>B</code>.\nA writer of type <code>B</code>.\nA writer that erases the specific <code>io::Write</code> and <code>MakeWriter</code> …\nA writer that is one of two types implementing <code>io::Write</code>.\nA type that can create <code>io::Write</code> instances.\nExtension trait adding combinators for working with types …\nA type implementing <code>io::Write</code> for a <code>MutexGuard</code> where the …\nA writer which may or may not be enabled.\nCombines a <code>MakeWriter</code> that returns an <code>OptionalWriter</code> with …\nCombines two types implementing <code>MakeWriter</code> (or …\nA writer intended to support <code>libtest</code>’s output capturing …\nA <code>MakeWriter</code> combinator that wraps a <code>MakeWriter</code> with a …\nA <code>MakeWriter</code> combinator that only returns an enabled writer…\nA <code>MakeWriter</code> combinator that only returns an enabled writer…\nThe concrete <code>io::Write</code> implementation returned by …\nCombines <code>self</code> with another type implementing <code>MakeWriter</code>, …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns an instance of <code>Writer</code>.\nReturns a <code>Writer</code> for writing data from the span or event …\nConstructs a <code>BoxMakeWriter</code> wrapping a type implementing …\nReturns a new <code>TestWriter</code> with the default configuration.\nWraps the provided <code>MakeWriter</code> with a maximum <code>Level</code>, so …\nWraps the provided <code>MakeWriter</code> with a minimum <code>Level</code>, so …\nWraps <code>make</code> with the provided <code>filter</code>, returning a <code>MakeWriter</code>…\nCombines\nCombines two types implementing <code>MakeWriter</code>, returning a …\nReturns a disabled writer.\nReturns a disabled writer.\nCombines <code>self</code> with another type implementing <code>MakeWriter</code>, …\nReturns an enabled writer of type <code>T</code>.\nReturns an enabled writer of type <code>T</code>.\nWraps <code>self</code> with a predicate that takes a span or event’s …\nWraps <code>self</code> and returns a <code>MakeWriter</code> that will only write …\nWraps <code>self</code> and returns a <code>MakeWriter</code> that will only write …\nRepresents information about the current context provided …\nA per-<code>Layer</code> filter that determines whether a span or event …\nA layer that does nothing.\nA composable handler for <code>tracing</code> events.\nA <code>Subscriber</code> composed of a <code>Subscriber</code> wrapped by one or …\nExtension trait adding a <code>with(Layer)</code> combinator to …\nComposes this layer around the given <code>Layer</code>, returning a …\nErases the type of this <code>Layer</code>, returning a <code>Box</code>ed <code>dyn Layer</code> …\nReturns an <code>Interest</code> indicating whether this layer will …\nReturns the wrapped subscriber’s view of the current …\nReturns some reference to this <code>Subscriber</code> value if it is …\nReturns <code>true</code> if this layer is interested in a span or …\nReturns <code>true</code> if this layer is interested in a span or …\nReturns whether the wrapped subscriber would enable the …\nRecords the provided <code>event</code> with the wrapped subscriber.\nCalled before <code>on_event</code>, to determine if <code>on_event</code> should be …\nCalled before the filtered [<code>Layer]&#39;s [</code>on_event…\nReturns an iterator over the stored data for all the spans …\nReturns a <code>SpanRef</code> for the parent span of the given <code>Event</code>, …\nReturns <code>true</code> if an active span exists for the given <code>Id</code>.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns <code>true</code> if this <code>Subscriber</code> is the same type as <code>T</code>.\nReturns stored data for the span that the wrapped …\nReturns an optional hint of the highest verbosity level …\nReturns metadata for the span with the given <code>id</code>, if it …\nReturns a new <code>Identity</code> layer.\nNotifies this layer that the span with the given ID has …\nNotifies this filter that a span with the given ID has …\nNotifies this layer that a span with the given ID was …\nNotifies this filter that a span with the given ID was …\nNotifies this layer that an event has occurred.\nNotifies this layer that the span with the given ID was …\nNotifies this filter that a span with the given ID was …\nNotifies this layer that a span with the ID <code>span</code> recorded …\nNotifies this layer that a span ID has been cloned, and …\nPerforms late initialization when attaching a <code>Layer</code> to a …\nNotifies this layer that a new span was constructed with …\nNotifies this filter that a new span was constructed with …\nNotifies this layer that a span with the given <code>Id</code> recorded …\nNotifies this filter that a span with the given <code>Id</code> …\nPerforms late initialization when installing this layer as …\nRegisters a new callsite with this layer, returning …\nReturns stored data for the span with the given <code>id</code>, if it …\nReturns an iterator over the stored data for all the spans …\nWraps <code>self</code> with the provided <code>layer</code>.\nCombines <code>self</code> with a <code>Filter</code>, returning a <code>Filtered</code> layer.\nComposes this <code>Layer</code> with the given <code>Subscriber</code>, returning a …\nSpan data stored in a <code>Registry</code>.\nThe type of span data stored in this registry.\nAn immutable, read-only reference to a Span’s extensions.\nAn mutable reference to a Span’s extensions.\nProvides access to stored span data.\nA shared, reusable store for spans.\nAn iterator over the parents of a span, ordered from leaf …\nAn iterator over the parents of a span, ordered from root …\nA stored representation of data associated with a span.\nA reference to [span data] and the associated registry.\nThis is intentionally not implemented, as recording events …\nReturns a reference to this span’s <code>Extensions</code>.\nReturns a reference to this span’s <code>Extensions</code>.\nReturns a mutable reference to this span’s <code>Extensions</code>.\nReturns a mutable reference to this span’s <code>Extensions</code>.\nReturns a list of fields defined by the span.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nFlips the order of the iterator, so that it is ordered …\nImmutably borrows a type previously inserted into this …\nGet a mutable reference to a type previously inserted on …\nReturns this span’s ID.\nReturns this span’s ID.\nInsert a type into this <code>Extensions</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns <code>true</code> if this span is enabled for the per-layer …\nReturns a reference to the span’s <code>Metadata</code>.\nReturns a static reference to the span’s metadata.\nReturns the span’s name,\nReturns a reference to the ID\nReturns a <code>SpanRef</code> describing this span’s parent, or <code>None</code> …\nThis is intentionally not implemented, as recording fields …\nRegisters a <code>Filter</code> for per-layer filtering with this …\nRemove a type from this <code>Extensions</code>.\nReplaces an existing <code>T</code> into this extensions.\nReturns an iterator over all parents of this span, …\nReturns a <code>SpanRef</code> for the span with the given <code>Id</code>, if it …\nReturns the <code>SpanData</code> for a given <code>Id</code>, if it exists.\nDecrements the reference count of the span with the given …\nIndicates that an error occurred when reloading a layer.\nAllows reloading the state of an associated <code>Layer</code>.\nWraps a <code>Layer</code> or <code>Filter</code>, allowing it to be reloaded …\nReturns a clone of the layer or filter’s current value …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns a <code>Handle</code> that can be used to reload the wrapped …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns <code>true</code> if this error occurred because the <code>Subscriber</code> …\nReturns <code>true</code> if this error occurred because the layer was …\nInvokes a closure with a mutable reference to the current …\nWraps the given <code>Layer</code> or <code>Filter</code>, returning a <code>reload::Layer</code> …\nReplace the current <code>Layer</code> or <code>Filter</code> with the provided …\nInvokes a closure with a borrowed reference to the current …\nExtension trait adding utility methods for subscriber …\nError returned by <code>try_init</code> if a global default subscriber …\nReturns the argument unchanged.\nAttempts to set <code>self</code> as the global default subscriber in …\nCalls <code>U::from(self)</code>.\nSets <code>self</code> as the default subscriber in the current scope, …\nAttempts to set <code>self</code> as the global default subscriber in …")