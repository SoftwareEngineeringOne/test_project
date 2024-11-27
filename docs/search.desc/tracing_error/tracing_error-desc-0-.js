searchState.loadedDescShard("tracing_error", 0, "Utilities for enriching error handling with <code>tracing</code> …\nA span trace has been captured and the <code>SpanTrace</code> should …\nThe SpanTrace is empty, likely because it was captured …\nA subscriber <code>Layer</code> that enables capturing <code>SpanTrace</code>s.\nA trait for extracting SpanTraces created by …\nExtension trait for instrumenting errors with <code>SpanTrace</code>s\nExtension trait for instrumenting errors in <code>Result</code>s with …\nThe type of the wrapped error after instrumentation\nThe type of the wrapped error after instrumentation\nA captured trace of <code>tracing</code> spans.\nThe current status of a SpanTrace, indicating whether it …\nA wrapper type for <code>Error</code>s that bundles a <code>SpanTrace</code> with an …\nFormatting a SpanTrace is not supported, likely because …\nCapture the current span trace.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nInstrument an Error by bundling it with a SpanTrace\nInstrument an Error by bundling it with a SpanTrace\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns a new <code>ErrorLayer</code> with the provided field formatter.\nCreate a new span trace with the given span as the …\nNotifies this layer that a new span was constructed with …\nThe <code>tracing-error</code> prelude.\nAttempts to downcast to a <code>TracedError</code> and return a …\nReturns the status of this <code>SpanTrace</code>.\nApply a function to all captured spans in the trace until …")