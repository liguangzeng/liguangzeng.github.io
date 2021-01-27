(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{355:function(t,e,a){"use strict";a.r(e);var r=a(5),v=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("文章内容根据"),a("a",{attrs:{href:"https://mp.weixin.qq.com/s/9yibACTP1sTAn16jeWueOQ",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://mp.weixin.qq.com/s/9yibACTP1sTAn16jeWueOQ"),a("OutboundLink")],1),t._v("学习。")]),t._v(" "),a("h2",{attrs:{id:"堆与栈-stack-heap"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#堆与栈-stack-heap"}},[t._v("#")]),t._v(" 堆与栈（Stack & Heap）")]),t._v(" "),a("blockquote",[a("p",[t._v("内存通常指的是操作系统从主存中划分（抽象）出来的内存空间。\n内存又可以分为两类：栈内存和堆内存。")])]),t._v(" "),a("h3",{attrs:{id:"栈内存-stack-memory"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#栈内存-stack-memory"}},[t._v("#")]),t._v(" 栈内存（stack memory）")]),t._v(" "),a("p",[t._v("栈内存遵循着后进先出的原则，生活中的例子可以参考羽毛球桶，因此栈内存读取会非常的快。但是栈内存一般容量较小主要用于\n存放函数调用信息和变量等数据，大量的内存操作会导致栈溢出。简单来说，"),a("code",[t._v("栈内存适合存放生命周期短、占用空间小且固定的数据")]),t._v("。工作有些忙晚些继续")]),t._v(" "),a("h3",{attrs:{id:"堆内存-heap-memory"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#堆内存-heap-memory"}},[t._v("#")]),t._v(" 堆内存（Heap memory）")]),t._v(" "),a("p",[t._v("堆内存的分配是动态且不连续的，程序可以按需申请堆内存空间，但是访问速度要比栈内存慢不少。")]),t._v(" "),a("p",[t._v("堆内存里的数据可以长时间存在，无用的数据需要程序主动去回收，如果大量无用数据占用内存就会造成内存泄露（Memory leak）。\n"),a("code",[t._v("堆内存适合存放生命周期长，占用空间较大或占用空间不固定的数据。")])]),t._v(" "),a("h3",{attrs:{id:"函数调用-function-calling"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#函数调用-function-calling"}},[t._v("#")]),t._v(" 函数调用（Function calling）")]),t._v(" "),a("p",[t._v("当函数调用时，会将函数推入栈内存，生成一个栈帧（Stack frame），栈帧可以理解为由函数返回地址、\n参数和局部变量组成的一个块；当函数调用另一个函数时，又会将另一个函数推入栈内存中，周而复始；\n直到最后一个函数返回，便从栈顶开始将栈内存中的元素逐个弹出，直到栈内存中不再有元素时则此次调用结束。\n如下图。")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/img/stack.gif"),alt:"调用帧"}}),t._v("     \n图中的内容经过了简化，剥离了栈帧的各种指针的概念，主要展示函数调用以及内存分配的大概过程。  \n"),a("p",[t._v("因为javascript是单线程，所以所有的被执行的函数以及函数的参数和局部变量都会被推入到同一栈内存中，\n这也就是大量递归会导致栈溢出（Stack overflow）的原因。")]),t._v(" "),a("h3",{attrs:{id:"储存变量-store-variables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#储存变量-store-variables"}},[t._v("#")]),t._v(" 储存变量（Store variables）")]),t._v(" "),a("p",[t._v("当javascript程序运行时，在非全局作用域中产生的局部变量均储存在栈内存中。但是只有原始类型的变量真正的\n存储在栈内存中。而引用类型的变量只是在栈内存中存储一个引用，这个引用指向堆内存的里的才是真正的值。")]),t._v(" "),a("blockquote",[a("p",[t._v("原始类型又称为基本类型，包括"),a("code",[t._v("string")]),t._v("、"),a("code",[t._v("number")]),t._v("、"),a("code",[t._v("bigint")]),t._v("、"),a("code",[t._v("boolean")]),t._v("、和"),a("code",[t._v("symbol")]),t._v("。虽然typeof null返回的是object\n但是null真不是一个对象，这完全是javascript的官方bug。")])]),t._v(" "),a("blockquote",[a("p",[t._v("引用类型 是除了原始类型之外的类型，包括但不限于"),a("code",[t._v("Object")]),t._v("、"),a("code",[t._v("Array")]),t._v("、"),a("code",[t._v("Function")]),t._v("、"),a("code",[t._v("Date")]),t._v("、"),a("code",[t._v("RegExp")]),t._v("、"),a("code",[t._v("String")]),t._v("、\n"),a("code",[t._v("Number")]),t._v("等等...因为其他引用类型都继承自object所以可以说所有的引用类型都是对象。")])]),t._v(" "),a("el-alert",{attrs:{title:"全局变量以及被闭包引用的变量（即使是原始类型）均储存在堆内存中。",type:"warning",closable:!1}}),t._v(" "),a("el-alert",{attrs:{title:"全局变量-在全局作用域下创建的所有变量都会成为全局对象（如 window 对象）的属性，也就是全局变量。\n           而全局对象储存在堆内存中，所以全局变量必然也会储存在堆内存中。",type:"warning",closable:!1}}),t._v(" "),a("el-alert",{attrs:{title:"闭包-当一个局部变量被当前函数之外的其他函数所引用（也就是发生了逃逸），此时这个局部变量就不能随着当前函数的返回而被回收，那么这个变量就必须储存在堆内存中",type:"warning",closable:!1}})],1)}),[],!1,null,null,null);e.default=v.exports}}]);