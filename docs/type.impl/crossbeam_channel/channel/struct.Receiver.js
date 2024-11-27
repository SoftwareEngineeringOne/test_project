(function() {
    var type_impls = Object.fromEntries([["muda",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-Receiver%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/crossbeam_channel/channel.rs.html#1165\">source</a><a href=\"#impl-Clone-for-Receiver%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"crossbeam_channel/channel/struct.Receiver.html\" title=\"struct crossbeam_channel::channel::Receiver\">Receiver</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/crossbeam_channel/channel.rs.html#1166\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.82.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"crossbeam_channel/channel/struct.Receiver.html\" title=\"struct crossbeam_channel::channel::Receiver\">Receiver</a>&lt;T&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.82.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.82.0/src/core/clone.rs.html#174\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.82.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: &amp;Self)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.82.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","muda::MenuEventReceiver"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-Receiver%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/crossbeam_channel/channel.rs.html#1180\">source</a><a href=\"#impl-Debug-for-Receiver%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"crossbeam_channel/channel/struct.Receiver.html\" title=\"struct crossbeam_channel::channel::Receiver\">Receiver</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/crossbeam_channel/channel.rs.html#1181\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.82.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.82.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.82.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.82.0/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.82.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","muda::MenuEventReceiver"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Drop-for-Receiver%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/crossbeam_channel/channel.rs.html#1150\">source</a><a href=\"#impl-Drop-for-Receiver%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"crossbeam_channel/channel/struct.Receiver.html\" title=\"struct crossbeam_channel::channel::Receiver\">Receiver</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.drop\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/crossbeam_channel/channel.rs.html#1151\">source</a><a href=\"#method.drop\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.82.0/core/ops/drop/trait.Drop.html#tymethod.drop\" class=\"fn\">drop</a>(&amp;mut self)</h4></section></summary><div class='docblock'>Executes the destructor for this type. <a href=\"https://doc.rust-lang.org/1.82.0/core/ops/drop/trait.Drop.html#tymethod.drop\">Read more</a></div></details></div></details>","Drop","muda::MenuEventReceiver"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-IntoIterator-for-Receiver%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/crossbeam_channel/channel.rs.html#1195\">source</a><a href=\"#impl-IntoIterator-for-Receiver%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a> for <a class=\"struct\" href=\"crossbeam_channel/channel/struct.Receiver.html\" title=\"struct crossbeam_channel::channel::Receiver\">Receiver</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Item\" class=\"associatedtype trait-impl\"><a class=\"src rightside\" href=\"src/crossbeam_channel/channel.rs.html#1196\">source</a><a href=\"#associatedtype.Item\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"https://doc.rust-lang.org/1.82.0/core/iter/traits/collect/trait.IntoIterator.html#associatedtype.Item\" class=\"associatedtype\">Item</a> = T</h4></section></summary><div class='docblock'>The type of the elements being iterated over.</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.IntoIter\" class=\"associatedtype trait-impl\"><a class=\"src rightside\" href=\"src/crossbeam_channel/channel.rs.html#1197\">source</a><a href=\"#associatedtype.IntoIter\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"https://doc.rust-lang.org/1.82.0/core/iter/traits/collect/trait.IntoIterator.html#associatedtype.IntoIter\" class=\"associatedtype\">IntoIter</a> = <a class=\"struct\" href=\"crossbeam_channel/channel/struct.IntoIter.html\" title=\"struct crossbeam_channel::channel::IntoIter\">IntoIter</a>&lt;T&gt;</h4></section></summary><div class='docblock'>Which kind of iterator are we turning this into?</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.into_iter\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/crossbeam_channel/channel.rs.html#1199\">source</a><a href=\"#method.into_iter\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.82.0/core/iter/traits/collect/trait.IntoIterator.html#tymethod.into_iter\" class=\"fn\">into_iter</a>(self) -&gt; &lt;<a class=\"struct\" href=\"crossbeam_channel/channel/struct.Receiver.html\" title=\"struct crossbeam_channel::channel::Receiver\">Receiver</a>&lt;T&gt; as <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a>&gt;::<a class=\"associatedtype\" href=\"https://doc.rust-lang.org/1.82.0/core/iter/traits/collect/trait.IntoIterator.html#associatedtype.IntoIter\" title=\"type core::iter::traits::collect::IntoIterator::IntoIter\">IntoIter</a></h4></section></summary><div class='docblock'>Creates an iterator from a value. <a href=\"https://doc.rust-lang.org/1.82.0/core/iter/traits/collect/trait.IntoIterator.html#tymethod.into_iter\">Read more</a></div></details></div></details>","IntoIterator","muda::MenuEventReceiver"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Receiver%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/crossbeam_channel/channel.rs.html#736\">source</a><a href=\"#impl-Receiver%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"struct\" href=\"crossbeam_channel/channel/struct.Receiver.html\" title=\"struct crossbeam_channel::channel::Receiver\">Receiver</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_recv\" class=\"method\"><a class=\"src rightside\" href=\"src/crossbeam_channel/channel.rs.html#759\">source</a><h4 class=\"code-header\">pub fn <a href=\"crossbeam_channel/channel/struct.Receiver.html#tymethod.try_recv\" class=\"fn\">try_recv</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.82.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;T, <a class=\"enum\" href=\"crossbeam_channel/err/enum.TryRecvError.html\" title=\"enum crossbeam_channel::err::TryRecvError\">TryRecvError</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Attempts to receive a message from the channel without blocking.</p>\n<p>This method will either receive a message from the channel immediately or return an error\nif the channel is empty.</p>\n<p>If called on a zero-capacity channel, this method will receive a message only if there\nhappens to be a send operation on the other side of the channel at the same time.</p>\n<h5 id=\"examples\"><a class=\"doc-anchor\" href=\"#examples\">§</a>Examples</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>crossbeam_channel::{unbounded, TryRecvError};\n\n<span class=\"kw\">let </span>(s, r) = unbounded();\n<span class=\"macro\">assert_eq!</span>(r.try_recv(), <span class=\"prelude-val\">Err</span>(TryRecvError::Empty));\n\ns.send(<span class=\"number\">5</span>).unwrap();\ndrop(s);\n\n<span class=\"macro\">assert_eq!</span>(r.try_recv(), <span class=\"prelude-val\">Ok</span>(<span class=\"number\">5</span>));\n<span class=\"macro\">assert_eq!</span>(r.try_recv(), <span class=\"prelude-val\">Err</span>(TryRecvError::Disconnected));</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.recv\" class=\"method\"><a class=\"src rightside\" href=\"src/crossbeam_channel/channel.rs.html#812\">source</a><h4 class=\"code-header\">pub fn <a href=\"crossbeam_channel/channel/struct.Receiver.html#tymethod.recv\" class=\"fn\">recv</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.82.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;T, <a class=\"struct\" href=\"crossbeam_channel/err/struct.RecvError.html\" title=\"struct crossbeam_channel::err::RecvError\">RecvError</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Blocks the current thread until a message is received or the channel is empty and\ndisconnected.</p>\n<p>If the channel is empty and not disconnected, this call will block until the receive\noperation can proceed. If the channel is empty and becomes disconnected, this call will\nwake up and return an error.</p>\n<p>If called on a zero-capacity channel, this method will wait for a send operation to appear\non the other side of the channel.</p>\n<h5 id=\"examples-1\"><a class=\"doc-anchor\" href=\"#examples-1\">§</a>Examples</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>std::thread;\n<span class=\"kw\">use </span>std::time::Duration;\n<span class=\"kw\">use </span>crossbeam_channel::{unbounded, RecvError};\n\n<span class=\"kw\">let </span>(s, r) = unbounded();\n\nthread::spawn(<span class=\"kw\">move </span>|| {\n    thread::sleep(Duration::from_secs(<span class=\"number\">1</span>));\n    s.send(<span class=\"number\">5</span>).unwrap();\n    drop(s);\n});\n\n<span class=\"macro\">assert_eq!</span>(r.recv(), <span class=\"prelude-val\">Ok</span>(<span class=\"number\">5</span>));\n<span class=\"macro\">assert_eq!</span>(r.recv(), <span class=\"prelude-val\">Err</span>(RecvError));</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.recv_timeout\" class=\"method\"><a class=\"src rightside\" href=\"src/crossbeam_channel/channel.rs.html#877\">source</a><h4 class=\"code-header\">pub fn <a href=\"crossbeam_channel/channel/struct.Receiver.html#tymethod.recv_timeout\" class=\"fn\">recv_timeout</a>(&amp;self, timeout: <a class=\"struct\" href=\"https://doc.rust-lang.org/1.82.0/core/time/struct.Duration.html\" title=\"struct core::time::Duration\">Duration</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.82.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;T, <a class=\"enum\" href=\"crossbeam_channel/err/enum.RecvTimeoutError.html\" title=\"enum crossbeam_channel::err::RecvTimeoutError\">RecvTimeoutError</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Waits for a message to be received from the channel, but only for a limited time.</p>\n<p>If the channel is empty and not disconnected, this call will block until the receive\noperation can proceed or the operation times out. If the channel is empty and becomes\ndisconnected, this call will wake up and return an error.</p>\n<p>If called on a zero-capacity channel, this method will wait for a send operation to appear\non the other side of the channel.</p>\n<h5 id=\"examples-2\"><a class=\"doc-anchor\" href=\"#examples-2\">§</a>Examples</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>std::thread;\n<span class=\"kw\">use </span>std::time::Duration;\n<span class=\"kw\">use </span>crossbeam_channel::{unbounded, RecvTimeoutError};\n\n<span class=\"kw\">let </span>(s, r) = unbounded();\n\nthread::spawn(<span class=\"kw\">move </span>|| {\n    thread::sleep(Duration::from_secs(<span class=\"number\">1</span>));\n    s.send(<span class=\"number\">5</span>).unwrap();\n    drop(s);\n});\n\n<span class=\"macro\">assert_eq!</span>(\n    r.recv_timeout(Duration::from_millis(<span class=\"number\">500</span>)),\n    <span class=\"prelude-val\">Err</span>(RecvTimeoutError::Timeout),\n);\n<span class=\"macro\">assert_eq!</span>(\n    r.recv_timeout(Duration::from_secs(<span class=\"number\">1</span>)),\n    <span class=\"prelude-val\">Ok</span>(<span class=\"number\">5</span>),\n);\n<span class=\"macro\">assert_eq!</span>(\n    r.recv_timeout(Duration::from_secs(<span class=\"number\">1</span>)),\n    <span class=\"prelude-val\">Err</span>(RecvTimeoutError::Disconnected),\n);</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.recv_deadline\" class=\"method\"><a class=\"src rightside\" href=\"src/crossbeam_channel/channel.rs.html#923\">source</a><h4 class=\"code-header\">pub fn <a href=\"crossbeam_channel/channel/struct.Receiver.html#tymethod.recv_deadline\" class=\"fn\">recv_deadline</a>(&amp;self, deadline: <a class=\"struct\" href=\"https://doc.rust-lang.org/1.82.0/std/time/struct.Instant.html\" title=\"struct std::time::Instant\">Instant</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.82.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;T, <a class=\"enum\" href=\"crossbeam_channel/err/enum.RecvTimeoutError.html\" title=\"enum crossbeam_channel::err::RecvTimeoutError\">RecvTimeoutError</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Waits for a message to be received from the channel, but only before a given deadline.</p>\n<p>If the channel is empty and not disconnected, this call will block until the receive\noperation can proceed or the operation times out. If the channel is empty and becomes\ndisconnected, this call will wake up and return an error.</p>\n<p>If called on a zero-capacity channel, this method will wait for a send operation to appear\non the other side of the channel.</p>\n<h5 id=\"examples-3\"><a class=\"doc-anchor\" href=\"#examples-3\">§</a>Examples</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>std::thread;\n<span class=\"kw\">use </span>std::time::{Instant, Duration};\n<span class=\"kw\">use </span>crossbeam_channel::{unbounded, RecvTimeoutError};\n\n<span class=\"kw\">let </span>(s, r) = unbounded();\n\nthread::spawn(<span class=\"kw\">move </span>|| {\n    thread::sleep(Duration::from_secs(<span class=\"number\">1</span>));\n    s.send(<span class=\"number\">5</span>).unwrap();\n    drop(s);\n});\n\n<span class=\"kw\">let </span>now = Instant::now();\n\n<span class=\"macro\">assert_eq!</span>(\n    r.recv_deadline(now + Duration::from_millis(<span class=\"number\">500</span>)),\n    <span class=\"prelude-val\">Err</span>(RecvTimeoutError::Timeout),\n);\n<span class=\"macro\">assert_eq!</span>(\n    r.recv_deadline(now + Duration::from_millis(<span class=\"number\">1500</span>)),\n    <span class=\"prelude-val\">Ok</span>(<span class=\"number\">5</span>),\n);\n<span class=\"macro\">assert_eq!</span>(\n    r.recv_deadline(now + Duration::from_secs(<span class=\"number\">5</span>)),\n    <span class=\"prelude-val\">Err</span>(RecvTimeoutError::Disconnected),\n);</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_empty\" class=\"method\"><a class=\"src rightside\" href=\"src/crossbeam_channel/channel.rs.html#965\">source</a><h4 class=\"code-header\">pub fn <a href=\"crossbeam_channel/channel/struct.Receiver.html#tymethod.is_empty\" class=\"fn\">is_empty</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class=\"docblock\"><p>Returns <code>true</code> if the channel is empty.</p>\n<p>Note: Zero-capacity channels are always empty.</p>\n<h5 id=\"examples-4\"><a class=\"doc-anchor\" href=\"#examples-4\">§</a>Examples</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>crossbeam_channel::unbounded;\n\n<span class=\"kw\">let </span>(s, r) = unbounded();\n\n<span class=\"macro\">assert!</span>(r.is_empty());\ns.send(<span class=\"number\">0</span>).unwrap();\n<span class=\"macro\">assert!</span>(!r.is_empty());</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_full\" class=\"method\"><a class=\"src rightside\" href=\"src/crossbeam_channel/channel.rs.html#991\">source</a><h4 class=\"code-header\">pub fn <a href=\"crossbeam_channel/channel/struct.Receiver.html#tymethod.is_full\" class=\"fn\">is_full</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class=\"docblock\"><p>Returns <code>true</code> if the channel is full.</p>\n<p>Note: Zero-capacity channels are always full.</p>\n<h5 id=\"examples-5\"><a class=\"doc-anchor\" href=\"#examples-5\">§</a>Examples</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>crossbeam_channel::bounded;\n\n<span class=\"kw\">let </span>(s, r) = bounded(<span class=\"number\">1</span>);\n\n<span class=\"macro\">assert!</span>(!r.is_full());\ns.send(<span class=\"number\">0</span>).unwrap();\n<span class=\"macro\">assert!</span>(r.is_full());</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.len\" class=\"method\"><a class=\"src rightside\" href=\"src/crossbeam_channel/channel.rs.html#1016\">source</a><h4 class=\"code-header\">pub fn <a href=\"crossbeam_channel/channel/struct.Receiver.html#tymethod.len\" class=\"fn\">len</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.usize.html\">usize</a></h4></section></summary><div class=\"docblock\"><p>Returns the number of messages in the channel.</p>\n<h5 id=\"examples-6\"><a class=\"doc-anchor\" href=\"#examples-6\">§</a>Examples</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>crossbeam_channel::unbounded;\n\n<span class=\"kw\">let </span>(s, r) = unbounded();\n<span class=\"macro\">assert_eq!</span>(r.len(), <span class=\"number\">0</span>);\n\ns.send(<span class=\"number\">1</span>).unwrap();\ns.send(<span class=\"number\">2</span>).unwrap();\n<span class=\"macro\">assert_eq!</span>(r.len(), <span class=\"number\">2</span>);</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.capacity\" class=\"method\"><a class=\"src rightside\" href=\"src/crossbeam_channel/channel.rs.html#1043\">source</a><h4 class=\"code-header\">pub fn <a href=\"crossbeam_channel/channel/struct.Receiver.html#tymethod.capacity\" class=\"fn\">capacity</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.82.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.usize.html\">usize</a>&gt;</h4></section></summary><div class=\"docblock\"><p>If the channel is bounded, returns its capacity.</p>\n<h5 id=\"examples-7\"><a class=\"doc-anchor\" href=\"#examples-7\">§</a>Examples</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>crossbeam_channel::{bounded, unbounded};\n\n<span class=\"kw\">let </span>(<span class=\"kw\">_</span>, r) = unbounded::&lt;i32&gt;();\n<span class=\"macro\">assert_eq!</span>(r.capacity(), <span class=\"prelude-val\">None</span>);\n\n<span class=\"kw\">let </span>(<span class=\"kw\">_</span>, r) = bounded::&lt;i32&gt;(<span class=\"number\">5</span>);\n<span class=\"macro\">assert_eq!</span>(r.capacity(), <span class=\"prelude-val\">Some</span>(<span class=\"number\">5</span>));\n\n<span class=\"kw\">let </span>(<span class=\"kw\">_</span>, r) = bounded::&lt;i32&gt;(<span class=\"number\">0</span>);\n<span class=\"macro\">assert_eq!</span>(r.capacity(), <span class=\"prelude-val\">Some</span>(<span class=\"number\">0</span>));</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.iter\" class=\"method\"><a class=\"src rightside\" href=\"src/crossbeam_channel/channel.rs.html#1082\">source</a><h4 class=\"code-header\">pub fn <a href=\"crossbeam_channel/channel/struct.Receiver.html#tymethod.iter\" class=\"fn\">iter</a>(&amp;self) -&gt; <a class=\"struct\" href=\"crossbeam_channel/channel/struct.Iter.html\" title=\"struct crossbeam_channel::channel::Iter\">Iter</a>&lt;'_, T&gt;</h4></section></summary><div class=\"docblock\"><p>A blocking iterator over messages in the channel.</p>\n<p>Each call to <a href=\"https://doc.rust-lang.org/1.82.0/core/iter/traits/iterator/trait.Iterator.html#tymethod.next\" title=\"method core::iter::traits::iterator::Iterator::next\"><code>next</code></a> blocks waiting for the next message and then returns it. However, if\nthe channel becomes empty and disconnected, it returns <a href=\"https://doc.rust-lang.org/1.82.0/core/option/enum.Option.html#variant.None\" title=\"variant core::option::Option::None\"><code>None</code></a> without blocking.</p>\n<h5 id=\"examples-8\"><a class=\"doc-anchor\" href=\"#examples-8\">§</a>Examples</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>std::thread;\n<span class=\"kw\">use </span>crossbeam_channel::unbounded;\n\n<span class=\"kw\">let </span>(s, r) = unbounded();\n\nthread::spawn(<span class=\"kw\">move </span>|| {\n    s.send(<span class=\"number\">1</span>).unwrap();\n    s.send(<span class=\"number\">2</span>).unwrap();\n    s.send(<span class=\"number\">3</span>).unwrap();\n    drop(s); <span class=\"comment\">// Disconnect the channel.\n</span>});\n\n<span class=\"comment\">// Collect all messages from the channel.\n// Note that the call to `collect` blocks until the sender is dropped.\n</span><span class=\"kw\">let </span>v: Vec&lt;<span class=\"kw\">_</span>&gt; = r.iter().collect();\n\n<span class=\"macro\">assert_eq!</span>(v, [<span class=\"number\">1</span>, <span class=\"number\">2</span>, <span class=\"number\">3</span>]);</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_iter\" class=\"method\"><a class=\"src rightside\" href=\"src/crossbeam_channel/channel.rs.html#1118\">source</a><h4 class=\"code-header\">pub fn <a href=\"crossbeam_channel/channel/struct.Receiver.html#tymethod.try_iter\" class=\"fn\">try_iter</a>(&amp;self) -&gt; <a class=\"struct\" href=\"crossbeam_channel/channel/struct.TryIter.html\" title=\"struct crossbeam_channel::channel::TryIter\">TryIter</a>&lt;'_, T&gt;</h4></section></summary><div class=\"docblock\"><p>A non-blocking iterator over messages in the channel.</p>\n<p>Each call to <a href=\"https://doc.rust-lang.org/1.82.0/core/iter/traits/iterator/trait.Iterator.html#tymethod.next\" title=\"method core::iter::traits::iterator::Iterator::next\"><code>next</code></a> returns a message if there is one ready to be received. The iterator\nnever blocks waiting for the next message.</p>\n<h5 id=\"examples-9\"><a class=\"doc-anchor\" href=\"#examples-9\">§</a>Examples</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>std::thread;\n<span class=\"kw\">use </span>std::time::Duration;\n<span class=\"kw\">use </span>crossbeam_channel::unbounded;\n\n<span class=\"kw\">let </span>(s, r) = unbounded::&lt;i32&gt;();\n\nthread::spawn(<span class=\"kw\">move </span>|| {\n    s.send(<span class=\"number\">1</span>).unwrap();\n    thread::sleep(Duration::from_secs(<span class=\"number\">1</span>));\n    s.send(<span class=\"number\">2</span>).unwrap();\n    thread::sleep(Duration::from_secs(<span class=\"number\">2</span>));\n    s.send(<span class=\"number\">3</span>).unwrap();\n});\n\nthread::sleep(Duration::from_secs(<span class=\"number\">2</span>));\n\n<span class=\"comment\">// Collect all messages from the channel without blocking.\n// The third message hasn't been sent yet so we'll collect only the first two.\n</span><span class=\"kw\">let </span>v: Vec&lt;<span class=\"kw\">_</span>&gt; = r.try_iter().collect();\n\n<span class=\"macro\">assert_eq!</span>(v, [<span class=\"number\">1</span>, <span class=\"number\">2</span>]);</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.same_channel\" class=\"method\"><a class=\"src rightside\" href=\"src/crossbeam_channel/channel.rs.html#1137\">source</a><h4 class=\"code-header\">pub fn <a href=\"crossbeam_channel/channel/struct.Receiver.html#tymethod.same_channel\" class=\"fn\">same_channel</a>(&amp;self, other: &amp;<a class=\"struct\" href=\"crossbeam_channel/channel/struct.Receiver.html\" title=\"struct crossbeam_channel::channel::Receiver\">Receiver</a>&lt;T&gt;) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.82.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class=\"docblock\"><p>Returns <code>true</code> if receivers belong to the same channel.</p>\n<h5 id=\"examples-10\"><a class=\"doc-anchor\" href=\"#examples-10\">§</a>Examples</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>crossbeam_channel::unbounded;\n\n<span class=\"kw\">let </span>(<span class=\"kw\">_</span>, r) = unbounded::&lt;usize&gt;();\n\n<span class=\"kw\">let </span>r2 = r.clone();\n<span class=\"macro\">assert!</span>(r.same_channel(<span class=\"kw-2\">&amp;</span>r2));\n\n<span class=\"kw\">let </span>(<span class=\"kw\">_</span>, r3) = unbounded();\n<span class=\"macro\">assert!</span>(!r.same_channel(<span class=\"kw-2\">&amp;</span>r3));</code></pre></div>\n</div></details></div></details>",0,"muda::MenuEventReceiver"],["<section id=\"impl-RefUnwindSafe-for-Receiver%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/crossbeam_channel/channel.rs.html#734\">source</a><a href=\"#impl-RefUnwindSafe-for-Receiver%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a> for <a class=\"struct\" href=\"crossbeam_channel/channel/struct.Receiver.html\" title=\"struct crossbeam_channel::channel::Receiver\">Receiver</a>&lt;T&gt;</h3></section>","RefUnwindSafe","muda::MenuEventReceiver"],["<section id=\"impl-Send-for-Receiver%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/crossbeam_channel/channel.rs.html#730\">source</a><a href=\"#impl-Send-for-Receiver%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"crossbeam_channel/channel/struct.Receiver.html\" title=\"struct crossbeam_channel::channel::Receiver\">Receiver</a>&lt;T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,</div></h3></section>","Send","muda::MenuEventReceiver"],["<section id=\"impl-Sync-for-Receiver%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/crossbeam_channel/channel.rs.html#731\">source</a><a href=\"#impl-Sync-for-Receiver%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"crossbeam_channel/channel/struct.Receiver.html\" title=\"struct crossbeam_channel::channel::Receiver\">Receiver</a>&lt;T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,</div></h3></section>","Sync","muda::MenuEventReceiver"],["<section id=\"impl-UnwindSafe-for-Receiver%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/crossbeam_channel/channel.rs.html#733\">source</a><a href=\"#impl-UnwindSafe-for-Receiver%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.82.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"crossbeam_channel/channel/struct.Receiver.html\" title=\"struct crossbeam_channel::channel::Receiver\">Receiver</a>&lt;T&gt;</h3></section>","UnwindSafe","muda::MenuEventReceiver"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[31786]}