(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{448:function(t,v,_){"use strict";_.r(v);var a=_(15),p=Object(a.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("p",[t._v("这一篇文章简单讲解怎么把一个 OpenWRT 系统的路由器变成 AP 和交换机使用。")]),t._v(" "),_("p",[t._v("首先修改无线网络的设置")]),t._v(" "),_("p",[t._v("将模式改为  "),_("code",[t._v("接入点AP(WDS)")]),t._v(" ，然后应用并保存即可。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://file.sm9.top/item/5f715a9a160a154a6700bf4d.png",alt:""}})]),t._v(" "),_("p",[t._v("接下来设置 LAN 口，找到  "),_("code",[t._v("网络-接口")]),t._v("  先关闭 WAN 口，对，我们不需要使用 WAN 口。")]),t._v(" "),_("p",[t._v("然后修改 LAN 口设置。")]),t._v(" "),_("ul",[_("li",[t._v("协议：静态地址")]),t._v(" "),_("li",[t._v("IPV4 网络：192.168.1.x，建议设置小于 100")]),t._v(" "),_("li",[t._v("子网掩码：255.225.255.0")]),t._v(" "),_("li",[t._v("IPV4 网关：192.168.1.1 （主路由的地址）")])]),t._v(" "),_("p",[t._v("注意 AP 的网段要和主路由相同，根据你自己的实际情况修改参数。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://file.sm9.top/item/5f715a9a160a154a6700bf52.png",alt:""}})]),t._v(" "),_("p",[t._v("然后在这个接口上关闭 DHCP。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://file.sm9.top/item/5f715a9a160a154a6700bf4a.png",alt:""}})]),t._v(" "),_("p",[t._v("再把以前的 WAN 口也添加进来，组成网桥")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://file.sm9.top/item/5f7167bd160a154a67047f4a.png",alt:""}})]),t._v(" "),_("p",[t._v("设置完成后保存并应用，此时会连不上路由器，不要着急，接着往下看。")]),t._v(" "),_("p",[t._v("将路由器的任意一口和主路由的 LAN 口连接，接下来就可以用前面设置的固定 IP 登录到这个 AP 节点了。")]),t._v(" "),_("p",[t._v("因为没有 AC，所以不能统一管理，但是只要所有 AP 节点都支持 802.11 kvr 协议，就可以自动切换 AP。")]),t._v(" "),_("h2",{attrs:{id:"作为任意路由器的-ap"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#作为任意路由器的-ap"}},[t._v("#")]),t._v(" 作为任意路由器的 AP")]),t._v(" "),_("p",[t._v("不推荐这么做，但是设置好了真的很方便，方便接入到不同的网络里。")]),t._v(" "),_("p",[t._v("和上面设置类似，只不过 LAN 口协议改为 DHCP 客户端。")]),t._v(" "),_("hr")])}),[],!1,null,null,null);v.default=p.exports}}]);