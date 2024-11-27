(function() {
    var type_impls = Object.fromEntries([["tauri",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-Wry%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/tauri_runtime_wry/lib.rs.html#2261\">source</a><a href=\"#impl-Debug-for-Wry%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"tauri_runtime_wry/struct.Wry.html\" title=\"struct tauri_runtime_wry::Wry\">Wry</a>&lt;T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"tauri_runtime/trait.UserEvent.html\" title=\"trait tauri_runtime::UserEvent\">UserEvent</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/tauri_runtime_wry/lib.rs.html#2262\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.82.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.82.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.82.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.82.0/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.82.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","tauri::Wry"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Runtime%3CT%3E-for-Wry%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/tauri_runtime_wry/lib.rs.html#2520\">source</a><a href=\"#impl-Runtime%3CT%3E-for-Wry%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"tauri_runtime/trait.Runtime.html\" title=\"trait tauri_runtime::Runtime\">Runtime</a>&lt;T&gt; for <a class=\"struct\" href=\"tauri_runtime_wry/struct.Wry.html\" title=\"struct tauri_runtime_wry::Wry\">Wry</a>&lt;T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"tauri_runtime/trait.UserEvent.html\" title=\"trait tauri_runtime::UserEvent\">UserEvent</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.WindowDispatcher\" class=\"associatedtype trait-impl\"><a class=\"src rightside\" href=\"src/tauri_runtime_wry/lib.rs.html#2521\">source</a><a href=\"#associatedtype.WindowDispatcher\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"tauri_runtime/trait.Runtime.html#associatedtype.WindowDispatcher\" class=\"associatedtype\">WindowDispatcher</a> = <a class=\"struct\" href=\"tauri_runtime_wry/struct.WryWindowDispatcher.html\" title=\"struct tauri_runtime_wry::WryWindowDispatcher\">WryWindowDispatcher</a>&lt;T&gt;</h4></section></summary><div class='docblock'>The window message dispatcher.</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.WebviewDispatcher\" class=\"associatedtype trait-impl\"><a class=\"src rightside\" href=\"src/tauri_runtime_wry/lib.rs.html#2522\">source</a><a href=\"#associatedtype.WebviewDispatcher\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"tauri_runtime/trait.Runtime.html#associatedtype.WebviewDispatcher\" class=\"associatedtype\">WebviewDispatcher</a> = <a class=\"struct\" href=\"tauri_runtime_wry/struct.WryWebviewDispatcher.html\" title=\"struct tauri_runtime_wry::WryWebviewDispatcher\">WryWebviewDispatcher</a>&lt;T&gt;</h4></section></summary><div class='docblock'>The webview message dispatcher.</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.Handle\" class=\"associatedtype trait-impl\"><a class=\"src rightside\" href=\"src/tauri_runtime_wry/lib.rs.html#2523\">source</a><a href=\"#associatedtype.Handle\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"tauri_runtime/trait.Runtime.html#associatedtype.Handle\" class=\"associatedtype\">Handle</a> = <a class=\"struct\" href=\"tauri_runtime_wry/struct.WryHandle.html\" title=\"struct tauri_runtime_wry::WryHandle\">WryHandle</a>&lt;T&gt;</h4></section></summary><div class='docblock'>The runtime handle type.</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.EventLoopProxy\" class=\"associatedtype trait-impl\"><a class=\"src rightside\" href=\"src/tauri_runtime_wry/lib.rs.html#2525\">source</a><a href=\"#associatedtype.EventLoopProxy\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"tauri_runtime/trait.Runtime.html#associatedtype.EventLoopProxy\" class=\"associatedtype\">EventLoopProxy</a> = <a class=\"struct\" href=\"tauri_runtime_wry/struct.EventProxy.html\" title=\"struct tauri_runtime_wry::EventProxy\">EventProxy</a>&lt;T&gt;</h4></section></summary><div class='docblock'>The proxy type.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/tauri_runtime_wry/lib.rs.html#2527\">source</a><a href=\"#method.new\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"tauri_runtime/trait.Runtime.html#tymethod.new\" class=\"fn\">new</a>(args: <a class=\"struct\" href=\"tauri_runtime/struct.RuntimeInitArgs.html\" title=\"struct tauri_runtime::RuntimeInitArgs\">RuntimeInitArgs</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.82.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"tauri_runtime_wry/struct.Wry.html\" title=\"struct tauri_runtime_wry::Wry\">Wry</a>&lt;T&gt;, <a class=\"enum\" href=\"tauri_runtime/enum.Error.html\" title=\"enum tauri_runtime::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Creates a new webview runtime. Must be used on the main thread.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.new_any_thread\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/tauri_runtime_wry/lib.rs.html#2537\">source</a><a href=\"#method.new_any_thread\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"tauri_runtime/trait.Runtime.html#tymethod.new_any_thread\" class=\"fn\">new_any_thread</a>(args: <a class=\"struct\" href=\"tauri_runtime/struct.RuntimeInitArgs.html\" title=\"struct tauri_runtime::RuntimeInitArgs\">RuntimeInitArgs</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.82.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"tauri_runtime_wry/struct.Wry.html\" title=\"struct tauri_runtime_wry::Wry\">Wry</a>&lt;T&gt;, <a class=\"enum\" href=\"tauri_runtime/enum.Error.html\" title=\"enum tauri_runtime::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Creates a new webview runtime on any thread.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.create_proxy\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/tauri_runtime_wry/lib.rs.html#2552\">source</a><a href=\"#method.create_proxy\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"tauri_runtime/trait.Runtime.html#tymethod.create_proxy\" class=\"fn\">create_proxy</a>(&amp;self) -&gt; <a class=\"struct\" href=\"tauri_runtime_wry/struct.EventProxy.html\" title=\"struct tauri_runtime_wry::EventProxy\">EventProxy</a>&lt;T&gt;</h4></section></summary><div class='docblock'>Creates an <code>EventLoopProxy</code> that can be used to dispatch user events to the main event loop.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.handle\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/tauri_runtime_wry/lib.rs.html#2556\">source</a><a href=\"#method.handle\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"tauri_runtime/trait.Runtime.html#tymethod.handle\" class=\"fn\">handle</a>(&amp;self) -&gt; &lt;<a class=\"struct\" href=\"tauri_runtime_wry/struct.Wry.html\" title=\"struct tauri_runtime_wry::Wry\">Wry</a>&lt;T&gt; as <a class=\"trait\" href=\"tauri_runtime/trait.Runtime.html\" title=\"trait tauri_runtime::Runtime\">Runtime</a>&lt;T&gt;&gt;::<a class=\"associatedtype\" href=\"tauri_runtime/trait.Runtime.html#associatedtype.Handle\" title=\"type tauri_runtime::Runtime::Handle\">Handle</a></h4></section></summary><div class='docblock'>Gets a runtime handle.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.create_window\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/tauri_runtime_wry/lib.rs.html#2562-2566\">source</a><a href=\"#method.create_window\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"tauri_runtime/trait.Runtime.html#tymethod.create_window\" class=\"fn\">create_window</a>&lt;F&gt;(\n    &amp;self,\n    pending: <a class=\"struct\" href=\"tauri_runtime/window/struct.PendingWindow.html\" title=\"struct tauri_runtime::window::PendingWindow\">PendingWindow</a>&lt;T, <a class=\"struct\" href=\"tauri_runtime_wry/struct.Wry.html\" title=\"struct tauri_runtime_wry::Wry\">Wry</a>&lt;T&gt;&gt;,\n    after_window_creation: <a class=\"enum\" href=\"https://doc.rust-lang.org/1.82.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;F&gt;,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.82.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"tauri_runtime/window/struct.DetachedWindow.html\" title=\"struct tauri_runtime::window::DetachedWindow\">DetachedWindow</a>&lt;T, <a class=\"struct\" href=\"tauri_runtime_wry/struct.Wry.html\" title=\"struct tauri_runtime_wry::Wry\">Wry</a>&lt;T&gt;&gt;, <a class=\"enum\" href=\"tauri_runtime/enum.Error.html\" title=\"enum tauri_runtime::Error\">Error</a>&gt;<div class=\"where\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/ops/function/trait.Fn.html\" title=\"trait core::ops::function::Fn\">Fn</a>(<a class=\"struct\" href=\"tauri_runtime/window/struct.RawWindow.html\" title=\"struct tauri_runtime::window::RawWindow\">RawWindow</a>&lt;'_&gt;) + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,</div></h4></section></summary><div class='docblock'>Create a new window.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.create_webview\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/tauri_runtime_wry/lib.rs.html#2625-2629\">source</a><a href=\"#method.create_webview\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"tauri_runtime/trait.Runtime.html#tymethod.create_webview\" class=\"fn\">create_webview</a>(\n    &amp;self,\n    window_id: <a class=\"struct\" href=\"tauri_runtime/window/struct.WindowId.html\" title=\"struct tauri_runtime::window::WindowId\">WindowId</a>,\n    pending: <a class=\"struct\" href=\"tauri_runtime/webview/struct.PendingWebview.html\" title=\"struct tauri_runtime::webview::PendingWebview\">PendingWebview</a>&lt;T, <a class=\"struct\" href=\"tauri_runtime_wry/struct.Wry.html\" title=\"struct tauri_runtime_wry::Wry\">Wry</a>&lt;T&gt;&gt;,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.82.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"tauri_runtime/webview/struct.DetachedWebview.html\" title=\"struct tauri_runtime::webview::DetachedWebview\">DetachedWebview</a>&lt;T, <a class=\"struct\" href=\"tauri_runtime_wry/struct.Wry.html\" title=\"struct tauri_runtime_wry::Wry\">Wry</a>&lt;T&gt;&gt;, <a class=\"enum\" href=\"tauri_runtime/enum.Error.html\" title=\"enum tauri_runtime::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Create a new webview.</div></details><section id=\"method.primary_monitor\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/tauri_runtime_wry/lib.rs.html#2680\">source</a><a href=\"#method.primary_monitor\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"tauri_runtime/trait.Runtime.html#tymethod.primary_monitor\" class=\"fn\">primary_monitor</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.82.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"tauri_runtime/monitor/struct.Monitor.html\" title=\"struct tauri_runtime::monitor::Monitor\">Monitor</a>&gt;</h4></section><section id=\"method.monitor_from_point\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/tauri_runtime_wry/lib.rs.html#2689\">source</a><a href=\"#method.monitor_from_point\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"tauri_runtime/trait.Runtime.html#tymethod.monitor_from_point\" class=\"fn\">monitor_from_point</a>(&amp;self, x: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.f64.html\">f64</a>, y: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.f64.html\">f64</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.82.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"tauri_runtime/monitor/struct.Monitor.html\" title=\"struct tauri_runtime::monitor::Monitor\">Monitor</a>&gt;</h4></section><section id=\"method.available_monitors\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/tauri_runtime_wry/lib.rs.html#2698\">source</a><a href=\"#method.available_monitors\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"tauri_runtime/trait.Runtime.html#tymethod.available_monitors\" class=\"fn\">available_monitors</a>(&amp;self) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.82.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"struct\" href=\"tauri_runtime/monitor/struct.Monitor.html\" title=\"struct tauri_runtime::monitor::Monitor\">Monitor</a>&gt;</h4></section><section id=\"method.cursor_position\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/tauri_runtime_wry/lib.rs.html#2708\">source</a><a href=\"#method.cursor_position\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"tauri_runtime/trait.Runtime.html#tymethod.cursor_position\" class=\"fn\">cursor_position</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.82.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"tauri/struct.PhysicalPosition.html\" title=\"struct tauri::PhysicalPosition\">PhysicalPosition</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.f64.html\">f64</a>&gt;, <a class=\"enum\" href=\"tauri_runtime/enum.Error.html\" title=\"enum tauri_runtime::Error\">Error</a>&gt;</h4></section><section id=\"method.set_theme\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/tauri_runtime_wry/lib.rs.html#2715\">source</a><a href=\"#method.set_theme\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"tauri_runtime/trait.Runtime.html#tymethod.set_theme\" class=\"fn\">set_theme</a>(&amp;self, theme: <a class=\"enum\" href=\"https://doc.rust-lang.org/1.82.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"enum\" href=\"tauri/enum.Theme.html\" title=\"enum tauri::Theme\">Theme</a>&gt;)</h4></section><details class=\"toggle method-toggle\" open><summary><section id=\"method.set_device_event_filter\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/tauri_runtime_wry/lib.rs.html#2740\">source</a><a href=\"#method.set_device_event_filter\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"tauri_runtime/trait.Runtime.html#tymethod.set_device_event_filter\" class=\"fn\">set_device_event_filter</a>(&amp;mut self, filter: <a class=\"enum\" href=\"tauri/enum.DeviceEventFilter.html\" title=\"enum tauri::DeviceEventFilter\">DeviceEventFilter</a>)</h4></section></summary><div class='docblock'>Change the device event filter mode. <a href=\"tauri_runtime/trait.Runtime.html#tymethod.set_device_event_filter\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.run_iteration\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/tauri_runtime_wry/lib.rs.html#2747\">source</a><a href=\"#method.run_iteration\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"tauri_runtime/trait.Runtime.html#tymethod.run_iteration\" class=\"fn\">run_iteration</a>&lt;F&gt;(&amp;mut self, callback: F)<div class=\"where\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/ops/function/trait.FnMut.html\" title=\"trait core::ops::function::FnMut\">FnMut</a>(<a class=\"enum\" href=\"tauri_runtime/enum.RunEvent.html\" title=\"enum tauri_runtime::RunEvent\">RunEvent</a>&lt;T&gt;) + 'static,</div></h4></section></summary><div class='docblock'>Runs an iteration of the runtime event loop and returns control flow to the caller.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.run\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/tauri_runtime_wry/lib.rs.html#2802\">source</a><a href=\"#method.run\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"tauri_runtime/trait.Runtime.html#tymethod.run\" class=\"fn\">run</a>&lt;F&gt;(self, callback: F)<div class=\"where\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/ops/function/trait.FnMut.html\" title=\"trait core::ops::function::FnMut\">FnMut</a>(<a class=\"enum\" href=\"tauri_runtime/enum.RunEvent.html\" title=\"enum tauri_runtime::RunEvent\">RunEvent</a>&lt;T&gt;) + 'static,</div></h4></section></summary><div class='docblock'>Run the webview runtime.</div></details></div></details>","Runtime<T>","tauri::Wry"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[18524]}