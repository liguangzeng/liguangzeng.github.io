(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{355:function(t,a,e){"use strict";e.r(a);var n=e(5),s=Object(n.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("文章内容根据"),e("a",{attrs:{href:"https://mp.weixin.qq.com/s/9yibACTP1sTAn16jeWueOQ",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://mp.weixin.qq.com/s/9yibACTP1sTAn16jeWueOQ"),e("OutboundLink")],1),t._v("学习。")]),t._v(" "),e("h2",{attrs:{id:"堆与栈-stack-heap"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#堆与栈-stack-heap"}},[t._v("#")]),t._v(" 堆与栈（Stack & Heap）")]),t._v(" "),e("blockquote",[e("p",[t._v("内存通常指的是操作系统从主存中划分（抽象）出来的内存空间。\n内存又可以分为两类：栈内存和堆内存。")])]),t._v(" "),e("h3",{attrs:{id:"栈内存-stack-memory"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#栈内存-stack-memory"}},[t._v("#")]),t._v(" 栈内存（stack memory）")]),t._v(" "),e("p",[t._v("栈内存遵循着后进先出的原则，生活中的例子可以参考羽毛球桶，因此栈内存读取会非常的快。但是栈内存一般容量较小主要用于\n存放函数调用信息和变量等数据，大量的内存操作会导致栈溢出。简单来说，"),e("code",[t._v("栈内存适合存放生命周期短、占用空间小且固定的数据")]),t._v("。工作有些忙晚些继续")]),t._v(" "),e("h3",{attrs:{id:"堆内存-heap-memory"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#堆内存-heap-memory"}},[t._v("#")]),t._v(" 堆内存（Heap memory）")]),t._v(" "),e("p",[t._v("堆内存的分配是动态且不连续的，程序可以按需申请堆内存空间，但是访问速度要比栈内存慢不少。")]),t._v(" "),e("p",[t._v("堆内存里的数据可以长时间存在，无用的数据需要程序主动去回收，如果大量无用数据占用内存就会造成内存泄露（Memory leak）。\n"),e("code",[t._v("堆内存适合存放生命周期长，占用空间较大或占用空间不固定的数据。")])]),t._v(" "),e("h3",{attrs:{id:"函数调用-function-calling"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#函数调用-function-calling"}},[t._v("#")]),t._v(" 函数调用（Function calling）")]),t._v(" "),e("p",[t._v("当函数调用时，会将函数推入栈内存，生成一个栈帧（Stack frame），栈帧可以理解为由函数返回地址、\n参数和局部变量组成的一个块；当函数调用另一个函数时，又会将另一个函数推入栈内存中，周而复始；\n直到最后一个函数返回，便从栈顶开始将栈内存中的元素逐个弹出，直到栈内存中不再有元素时则此次调用结束。\n如下图。")]),t._v(" "),e("img",{attrs:{src:t.$withBase("/img/memory/stack.gif"),alt:"调用帧"}}),t._v("     \n图中的内容经过了简化，剥离了栈帧的各种指针的概念，主要展示函数调用以及内存分配的大概过程。  \n"),e("p",[t._v("因为javascript是单线程，所以所有的被执行的函数以及函数的参数和局部变量都会被推入到同一栈内存中，\n这也就是大量递归会导致栈溢出（Stack overflow）的原因。")]),t._v(" "),e("h3",{attrs:{id:"储存变量-store-variables"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#储存变量-store-variables"}},[t._v("#")]),t._v(" 储存变量（Store variables）")]),t._v(" "),e("p",[t._v("当javascript程序运行时，在非全局作用域中产生的局部变量均储存在栈内存中。但是只有原始类型的变量真正的\n存储在栈内存中。而引用类型的变量只是在栈内存中存储一个引用，这个引用指向堆内存的里的才是真正的值。")]),t._v(" "),e("blockquote",[e("p",[t._v("原始类型又称为基本类型，包括"),e("code",[t._v("string")]),t._v("、"),e("code",[t._v("number")]),t._v("、"),e("code",[t._v("bigint")]),t._v("、"),e("code",[t._v("boolean")]),t._v("、和"),e("code",[t._v("symbol")]),t._v("。虽然typeof null返回的是object\n但是null真不是一个对象，这完全是javascript的官方bug。")])]),t._v(" "),e("blockquote",[e("p",[t._v("引用类型 是除了原始类型之外的类型，包括但不限于"),e("code",[t._v("Object")]),t._v("、"),e("code",[t._v("Array")]),t._v("、"),e("code",[t._v("Function")]),t._v("、"),e("code",[t._v("Date")]),t._v("、"),e("code",[t._v("RegExp")]),t._v("、"),e("code",[t._v("String")]),t._v("、\n"),e("code",[t._v("Number")]),t._v("等等...因为其他引用类型都继承自object所以可以说所有的引用类型都是对象。")])]),t._v(" "),e("el-alert",{attrs:{title:"全局变量以及被闭包引用的变量（即使是原始类型）均储存在堆内存中。",type:"warning",closable:!1}}),t._v(" "),e("el-alert",{attrs:{title:"全局变量-在全局作用域下创建的所有变量都会成为全局对象（如 window 对象）的属性，也就是全局变量。\n           而全局对象储存在堆内存中，所以全局变量必然也会储存在堆内存中。",type:"warning",closable:!1}}),t._v(" "),e("el-alert",{attrs:{title:"闭包-当一个局部变量被当前函数之外的其他函数所引用（也就是发生了逃逸），此时这个局部变量就不能随着当前函数的返回而被回收，那么这个变量就必须储存在堆内存中",type:"warning",closable:!1}}),t._v(" "),e("h3",{attrs:{id:"不可变与可变-immutable-and-mutable"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#不可变与可变-immutable-and-mutable"}},[t._v("#")]),t._v(" 不可变与可变（Immutable and Mutable）")]),t._v(" "),e("p",[t._v("栈内存中会存储原始值和引用，不仅类型不同，他们在栈内存的表现也不太一样。")]),t._v(" "),e("p",[e("em",[t._v("原始类型")])]),t._v(" "),e("ul",[e("li",[t._v("当我们定义一个原始类型会开辟一个一块新的空间存变量的值")]),t._v(" "),e("li",[t._v("当我们给变量赋值为另一个新值时，栈内存依然会开辟一个新的空间给变量保存值。")]),t._v(" "),e("li",[t._v("当一个边赋值给另一个变量时依然是会开辟一个新的空间"),e("br"),t._v(" "),e("img",{attrs:{src:t.$withBase("/img/memory/immutable.jpg"),alt:"不可变例子"}}),e("br"),t._v(" "),e("el-alert",{attrs:{title:"所以说：栈内存中的原始值一旦确定就不能被更改（不可变的）",type:"warning",closable:!1}})],1)]),t._v(" "),e("p",[e("em",[t._v("对象引用")])]),t._v(" "),e("ul",[e("li",[t._v("当我们定义一个引用类型的变量时，JavaScript 会先在堆内存中找到一块合适的地方来储存对象，并激活一块栈内存来储存对象的引用（堆内存地址），最后将变量指向这块栈内存。")]),t._v(" "),e("li",[t._v("当我们把引用类型变量赋值给另一个变量时，会将源变量指向的栈内存中的对象引用复制到新变量的栈内存中，所以实际上只是复制了个对象引用，并没有在堆内存中生成一份新的对象。")]),t._v(" "),e("li",[t._v("而当我们给引用类型变量分配为一个新的对象时，则会直接修改变量指向的栈内存中的引用，新的引用指向堆内存中新的对象。\n"),e("img",{attrs:{src:t.$withBase("/img/memory/mutable.jpg"),alt:"可变例子"}}),e("br"),t._v(" "),e("el-alert",{attrs:{title:"栈内存中的对象引用是可以被更改的（可变的）",type:"warning",closable:!1}})],1)]),t._v(" "),e("h3",{attrs:{id:"内存的生命周期-memory-life-cycle"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#内存的生命周期-memory-life-cycle"}},[t._v("#")]),t._v(" 内存的生命周期（Memory life cycle）")]),t._v(" "),e("p",[t._v("通常来说内存的声明周期都是一致的"),e("code",[t._v("分配 -> 使用 -> 释放")]),t._v("。对于 JavaScript 程序来说，内存的分配与释放是由 JavaScript 引擎自动完成的（目前的 JavaScript 引擎基本都是使用 C++ 或 C 编写的）。\n但是这不意味着我们就不需要在乎内存管理，了解内存的更多细节可以帮助我们写出性能更好，稳定性更高的代码。")]),t._v(" "),e("h3",{attrs:{id:"垃圾回收-garbage-collection"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#垃圾回收-garbage-collection"}},[t._v("#")]),t._v(" 垃圾回收（Garbage collection）")]),t._v(" "),e("p",[t._v("垃圾回收即我们常说的 GC（Garbage collection），也就是清除内存中不再需要的数据，释放内存空间。\n"),e("code",[t._v("由于栈内存由操作系统直接管理，所以当我们提到 GC 时指的都是堆内存的垃圾回收。")]),t._v("\n基本上现在的浏览器的 JavaScript 引擎（如 V8 和 SpiderMonkey）都实现了垃圾回收机制，引擎中的垃圾回收器（Garbage collector）会定期进行垃圾回收。")]),t._v(" "),e("p",[t._v("想要了解垃圾回收机制  我们先来理解两个概念"),e("code",[t._v("可达性")]),t._v("和"),e("code",[t._v("内存泄漏")]),t._v("。")]),t._v(" "),e("blockquote",[e("p",[t._v("可达性（Reachability）是指可直接或者间接通过全局对象访问到。"),e("br"),t._v(" "),e("img",{attrs:{src:t.$withBase("/img/memory/kedaxing.jpg"),alt:"可达性"}}),e("br"),t._v("\n上图中的节点 9 和节点 10 均无法通过节点 1（根节点）直接或间接访问，所以它们都是不可达的，可以被安全地回收。")])]),t._v(" "),e("blockquote",[e("p",[t._v("内存泄漏是指没用的数据因为某种原因而未被释放。轻微的内存泄漏并不会造成太大影响。但是一旦内存泄漏严重就会造成卡顿崩溃等后果。\n（在 Node.js 中，堆内存默认上限在 64 位系统中约为 1.4 GB，在 32 位系统中约为 0.7 GB。而在 Chrome 浏览器中，每个标签页的内存上限约为 4 GB（64 位系统）和 1 GB（32 位系统））")])]),t._v(" "),e("h3",{attrs:{id:"垃圾回收算法-algorithms"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#垃圾回收算法-algorithms"}},[t._v("#")]),t._v(" 垃圾回收算法（Algorithms）")]),t._v(" "),e("p",[t._v("垃圾回收的基本思路很简单：确定哪个变量不会再使用，然后释放它占用的内存。\n实际上，在回收过程中想要确定一个变量是否还有用并不简单。\n直到现在也还没有一个真正完美的垃圾回收算法，接下来介绍 3 种最广为人知的垃圾回收算法。")]),t._v(" "),e("h4",{attrs:{id:"标记-清除-mark-and-sweep"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#标记-清除-mark-and-sweep"}},[t._v("#")]),t._v(" 标记-清除（Mark-and-Sweep）")]),t._v(" "),e("p",[t._v("标记清除算法是目前最常用的垃圾收集算法之一。\n从该算法的名字上就可以看出，算法的关键就是标记与清除。\n标记指的是标记变量的状态的过程，标记变量的具体方法有很多种，但是基本理念是相似的。\n他会定期扫描所有的内存中的变量，将不需要的变量标记为"),e("code",[t._v("待删除")]),t._v("之后再整体删除变量。\n需要注意的是，这个算法的效率不算高，同时会引起内存碎片化的问题。")]),t._v(" "),e("h4",{attrs:{id:"标记-整理-mark-compact"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#标记-整理-mark-compact"}},[t._v("#")]),t._v(" 标记-整理（Mark-Compact）")]),t._v(" "),e("p",[t._v("标记整理算法也是常用的垃圾收集算法之一。\n使用标记整理算法可以解决内存碎片化的问题（通过整理），提高内存空间的可用性。\n但是，该算法的标记阶段比较耗时，可能会堵塞主线程，导致程序长时间处于无响应状态。\n虽然算法的名字上只有标记和整理，但这个算法通常有 3 个阶段，即标记、整理与清除。"),e("br"),t._v("\n① 首先，在标记阶段，垃圾回收器会从全局对象（根）开始，一层一层往下查询，直到标记完所有活跃的对象，那么剩下的未被标记的对象就是不可达的了。"),e("br"),t._v("\n② 然后是整理阶段（碎片整理），垃圾回收器会将活跃的（被标记了的）对象往内存空间的一端移动，这个过程可能会改变内存中的对象的内存地址。"),e("br"),t._v("\n③ 最后来到清除阶段，垃圾回收器会将边界后面（也就是最后一个活跃的对象后面）的对象清除，并释放它们占用的内存空间。\n"),e("img",{attrs:{src:t.$withBase("/img/memory/bj2.jpg"),alt:"标记-整理"}})]),t._v(" "),e("h4",{attrs:{id:"引用计数-reference-counting"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#引用计数-reference-counting"}},[t._v("#")]),t._v(" 引用计数（Reference counting）")]),t._v(" "),e("p",[t._v("引用计数算法是基于“引用计数”实现的垃圾回收算法，这是最初级但已经被弃用的垃圾回收算法。\n引用计数算法需要 JavaScript 引擎在程序运行时记录每个变量被引用的次数，随后根据引用的次数来判断变量是否能够被回收。")]),t._v(" "),e("h4",{attrs:{id:"v8-中的垃圾回收-gc-in-v8"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#v8-中的垃圾回收-gc-in-v8"}},[t._v("#")]),t._v(" V8 中的垃圾回收（GC in V8）")]),t._v(" "),e("p",[t._v("在 V8 的内存管理机制中，把堆内存（Heap memory）划分成了多个区域。"),e("br"),t._v("\n这里我们只关注这两个区域：")]),t._v(" "),e("p",[e("code",[t._v("New Space（新空间）：又称 Young generation（新世代），用于储存新生成的对象，由 Minor GC 进行管理。")])]),t._v(" "),e("p",[e("code",[t._v("Old Space（旧空间）：又称 Old generation（旧世代），用于储存那些在两次 GC 后仍然存活的对象，由 Major GC 进行管理。")])]),t._v(" "),e("el-tag",[t._v("双管齐下")]),t._v(" "),e("p",[t._v("V8 内部实现了两个垃圾回收器："),e("br"),t._v(" "),e("code",[t._v("Minor GC（副 GC）：它还有个名字叫做 Scavenger（清道夫），具体使用的是 Cheney's Algorithm（Cheney 算法）。")]),e("br"),t._v(" "),e("code",[t._v("Major GC（主 GC）：使用的是文章前面提到的 Mark-Compact Algorithm（标记-整理算法）。")]),e("br"),t._v("\n储存在 New Space 里的新生对象大多都只是临时使用的，而且 New Space 的容量比较小，为了保持内存的可用率，Minor GC 会频繁地运行。")]),t._v(" "),e("p",[t._v("而 Old Space 里的对象存活时间都比较长，所以 Major GC 没那么勤快，这一定程度地降低了频繁 GC 带来的性能损耗。")]),t._v(" "),e("el-tag",[t._v("加点魔法")]),t._v(" "),e("p",[t._v("我们在上方的“标记整理算法”中有提到这个算法的标记过程非常耗时，所以很容易导致应用长时间无响应。")]),t._v(" "),e("p",[t._v("为了提升用户体验，V8 还实现了一个名为增量标记（Incremental marking）的特性。")]),t._v(" "),e("p",[t._v("增量标记的要点就是把标记工作分成多个小段，夹杂在主线程（Main thread）的 JavaScript 逻辑中，这样就不会长时间阻塞主线程了。")]),t._v(" "),e("img",{attrs:{src:t.$withBase("/img/memory/zlbj.jpg"),alt:"增量标记"}}),t._v(" "),e("p",[t._v("当然增量标记也有代价的，在增量标记过程中所有对象的变化都需要通知垃圾回收器，好让垃圾回收器能够正确地标记那些对象，这里的“通知”也是需要成本的。")]),t._v(" "),e("p",[t._v("另外 V8 中还有使用工作线程（Worker thread）实现的平行标记（Parallel marking）和并行标记（Concurrent marking），这里我就不再细说了~")]),t._v(" "),e("p",[t._v("为了提升性能和用户体验，V8 内部做了非常非常多的“骚操作”，本文提到的都只是冰山一角，但足以让我五体投地佩服连连！\n总之就是非常 Amazing 啊~")]),t._v(" "),e("h3",{attrs:{id:"总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),e("p",[t._v("1、因为全局变量永远都是可达的，所以全局变量永远不会被回收。所以当一个全局变量不再需要用到时，记得解除其引用（置空），好让垃圾回收器可以释放这部分内存。")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("window"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("me "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  name"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'吴彦祖'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("speak")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token template-string"}},[e("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("我是")]),e("span",{pre:!0,attrs:{class:"token interpolation"}},[e("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),e("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),e("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nwindow"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("me"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("speak")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 解除引用后才可以被回收")]),t._v("\nwindow"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("me "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("2、被闭包引用的变量储存在堆内存中，所以，我们必须避免滥用闭包，并且谨慎使用闭包！\n当不再需要时记得解除闭包函数的引用，让闭包函数以及引用的变量能够被回收")]),t._v(" "),e("p",[t._v("3、在 V8 内部有一个叫做“隐藏类”的机制，主要用于提升对象（Object）的性能。\nV8 里的每一个 JS 对象（JS Objects）都会关联一个隐藏类，隐藏类里面储存了对象的形状（特征）和属性名称到属性的映射等信息。在我们创建对象时，拥有完全相同的特征（相同属性且相同顺序）的对象可以共享同一个隐藏类。\n一般情况下，当我们动态修改对象的特征（增删属性）时，V8 会为该对象分配一个能用的隐藏类或者创建一个新的隐藏类（新的分支）。因为隐藏类也需要占用内存空间，这其实就是一种用空间换时间的机制。\n如果由于动态增删对象属性而创建了大量隐藏类和分支，结果就是会浪费不少内存空间。所以，我们要尽量避免动态增删对象属性操作，应该在构造函数内就一次性声明所有需要用到的属性。\n如果确实不再需要某个属性，我们可以将属性的值设为 null。")])],1)}),[],!1,null,null,null);a.default=s.exports}}]);