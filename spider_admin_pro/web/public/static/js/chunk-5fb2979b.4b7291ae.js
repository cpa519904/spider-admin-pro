(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5fb2979b"],{"24bc":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-select",e._b({attrs:{placeholder:"选择项目"},model:{value:e._value,callback:function(t){e._value=t},expression:"_value"}},"el-select",e.$attrs,!1),e._l(e.list,(function(e){return n("el-option",{attrs:{label:e.project,value:e.project}})})),1)},s=[],a=(n("e186"),n("7590")),i={name:"",props:{value:{type:String}},components:{},data:function(){return{list:[]}},computed:{_value:{get:function(){return this.value},set:function(e){this.$emit("update:value",e)}}},methods:{getData:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$Http.scrapydListProjects();case 2:t=e.sent,this.list=t.data;case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},created:function(){this.getData()}},o=i,c=n("cba8"),u=Object(c["a"])(o,r,s,!1,null,"09352087",null);t["a"]=u.exports},3629:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-autocomplete",e._g(e._b({attrs:{"fetch-suggestions":e.querySearch,placeholder:"搜索\bSpider名",clearable:""},on:{select:e.handleSelect},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.item;return[n("span",[e._v(e._s(r.spider))])]}}]),model:{value:e._value,callback:function(t){e._value=t},expression:"_value"}},"el-autocomplete",e.$attrs,!1),e.$listeners))},s=[],a=(n("e186"),n("7590")),i={name:"",props:{value:{type:String},project:{type:String}},components:{},data:function(){return{list:[]}},watch:{project:{handler:function(e){e?this.getData():this.list=[]},immediate:!0}},computed:{_value:{get:function(){return this.value},set:function(e){this.$emit("update:value",e)}}},methods:{querySearch:function(e,t){var n=e?this.filterItem(e):this.list;t(n)},filterItem:function(e){return this.list.filter((function(t){return 0==t.spider.toLowerCase().indexOf(e.toLowerCase())}))},handleSelect:function(e){this._value=e.spider,this.$emit("change",e.spider)},getData:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.list=[],e.next=3,this.$Http.scrapydlistSpiders({project:this.project});case 3:t=e.sent,this.list=t.data;case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},created:function(){}},o=i,c=n("cba8"),u=Object(c["a"])(o,r,s,!1,null,"ba25b154",null);t["a"]=u.exports},"479c":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-button",e._b({attrs:{size:"mini",icon:"el-icon-video-play"},on:{click:e.handleSchedule}},"el-button",e.$attrs,!1))},s=[],a=(n("e186"),n("7590")),i={name:"",props:{spider:{type:String},project:{type:String}},components:{},data:function(){return{}},computed:{},methods:{handleSchedule:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$Http.scrapydSchedule({project:this.project,spider:this.spider});case 2:t=e.sent,0==t.code?this.$message.success("运行成功"):this.$message.error(t.msg);case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},created:function(){}},o=i,c=n("cba8"),u=Object(c["a"])(o,r,s,!1,null,"cf272b78",null);t["a"]=u.exports},"63d3":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{},[e.job_id?n("el-button",e._b({attrs:{size:"mini",icon:"el-icon-edit-outline"},on:{click:e.handleDialogVisibleClick}},"el-button",e.$attrs,!1)):n("el-button",e._b({attrs:{size:"mini",icon:"el-icon-document-add"},on:{click:e.handleDialogVisibleClick}},"el-button",e.$attrs,!1),[e._v("添加")]),e._v(" "),n("el-dialog",{attrs:{title:e.btnText+"任务",visible:e.dialogVisible,width:"500px",center:""},on:{"update:visible":function(t){e.dialogVisible=t}}},[n("el-form",{ref:"form",attrs:{model:e.form,"status-icon":"","label-width":"100px",size:"small",rules:e.rules}},[n("el-form-item",{attrs:{label:"项目名称",prop:"project",width:"300px"}},[n("ProjectSelect",{staticStyle:{width:"300px"},attrs:{value:e.form.project,disabled:null!=e.project||null!=e.job_id},on:{"update:value":function(t){return e.$set(e.form,"project",t)}}})],1),e._v(" "),n("el-form-item",{attrs:{label:"\bSpider名称",prop:"spider",width:"300px"}},[n("SpiderSearch",{staticStyle:{width:"300px"},attrs:{project:e.form.project,value:e.form.spider,disabled:null!=e.spider||null!=e.job_id},on:{"update:value":function(t){return e.$set(e.form,"spider",t)}}})],1),e._v(" "),n("el-form-item",{attrs:{label:"cron表达式",prop:"cron"}},[n("el-input",{staticStyle:{width:"300px"},attrs:{type:"text",placeholder:"分 时 日 月 周"},model:{value:e.form.cron,callback:function(t){e.$set(e.form,"cron",t)},expression:"form.cron"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"其他参数",prop:"options"}},[n("el-input",{staticStyle:{width:"300px"},attrs:{type:"textarea",rows:"3",placeholder:'any parameter is passed as spider args eg:{"setting": "DOWNLOAD_DELAY=2"}'},model:{value:e.form.options,callback:function(t){e.$set(e.form,"options",t)},expression:"form.options"}})],1)],1),e._v(" "),n("span",{attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{size:"small"},on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),e._v(" "),n("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.submit}},[e._v("确 定")])],1)],1)],1)},s=[],a=(n("ac67"),n("1bc7"),n("32ea"),n("8ee4")),i=(n("e186"),n("7590")),o=(n("fc02"),n("24bc")),c=n("3629");function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){Object(a["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var d={name:"",props:{job_id:{type:String,default:null},project:{type:String,default:null},spider:{type:String,default:null}},components:{ProjectSelect:o["a"],SpiderSearch:c["a"]},data:function(){var e=function(e,t,n){if(!t)return n(new Error("cron表达式不能为空"));var r=t.split(" ").filter((function(e){return""!=e.trim()}));if(5!=r.length)return n(new Error("cron表达式不正确"));n()},t=function(e,t,n){if(t)try{JSON.parse(t)}catch(r){return n(new Error("参数不是json字符串"))}n()};return{dialogVisible:!1,form:{project:"",spider:"",cron:"* * * * *",options:""},rules:{project:{required:!0,message:"项目名称必须填写",trigger:"blur"},spider:{required:!0,message:"\bSpider名称必须填写",trigger:"change"},cron:{required:!0,validator:e,trigger:"blur"},options:{required:!1,validator:t,trigger:"blur"}}}},computed:{btnText:function(){return this.job_id?"修改":"添加"},icon:function(){return this.job_id?"el-icon-edit-outline":"el-icon-document-add"}},watch:{dialogVisible:function(e){}},methods:{getData:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$Http.scheduleJobDetail({job_id:this.job_id});case 2:t=e.sent,this.form=t.data.kwargs;case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),submit:function(){var e=this;this.$refs.form.validate((function(t){t&&e.addVersion()}))},addVersion:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$Http.scheduleAddJob(l({job_id:this.job_id},this.form));case 2:t=e.sent,0==t.code?(this.$message.success("添加成功"),this.$emit("success"),this.$refs.form.resetFields(),this.dialogVisible=!1):this.$message.error(t.msg);case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),handleDialogVisibleClick:function(){this.dialogVisible=!0,this.project&&(this.form.project=this.project),this.spider&&(this.form.spider=this.spider),this.job_id&&this.getData(),this.$refs.form&&this.$refs.form.clearValidate()}},created:function(){}},p=d,h=n("cba8"),f=Object(h["a"])(p,r,s,!1,null,"7990df5a",null);t["a"]=f.exports},"73d0":function(e,t,n){"use strict";n("f8ce")},e6b7:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("ScheduleTool",{on:{success:e.getData}}),e._v(" "),n("div",{staticStyle:{height:"20px"}}),e._v(" "),n("ScheduleTable",{attrs:{data:e.list},on:{success:e.getData,"sort-change":e.handleSortChange}})],1)},s=[],a=(n("e186"),n("7590")),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{display:"flex"}},[n("ScheduleAdd",{on:{success:e.handleSuccess}}),e._v(" "),n("ScheduleRemoveAllJob",{staticStyle:{"margin-left":"20px"},on:{success:e.handleSuccess}}),e._v(" "),n("ScheduleState",{staticStyle:{"margin-left":"20px"},on:{success:e.handleSuccess}})],1)},o=[],c=n("63d3"),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"schedule-state"},[n("span",{staticStyle:{"font-size":"14px",color:"#303133"}},[e._v("调度器控制：")]),e._v(" "),n("StartShutdown",{on:{success:e.handleSuccess},model:{value:e.startShutdownState,callback:function(t){e.startShutdownState=t},expression:"startShutdownState"}}),e._v(" "),n("PauseResume",{staticStyle:{"margin-left":"20px"},attrs:{disabled:"stopped"==e.startShutdownState},on:{success:e.handleSuccess},model:{value:e.pauseResumeState,callback:function(t){e.pauseResumeState=t},expression:"pauseResumeState"}})],1)},l=[],d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("mo-switch",e._g(e._b({attrs:{"active-value":"running","active-text":"继续","inactive-text":"暂停","inactive-value":"paused"},on:{change:e.handleChange}},"mo-switch",e.$attrs,!1),e.$listeners))},p=[],h={name:"",props:{},components:{},data:function(){return{state:""}},computed:{},methods:{handleChange:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("paused"!=t){e.next=6;break}return e.next=3,this.$Http.schedulePause();case 3:n=e.sent,e.next=9;break;case 6:return e.next=8,this.$Http.scheduleResume();case 8:n=e.sent;case 9:0==n.code?(this.$msg.success("操作成功"),this.$emit("success")):this.$msg.error(n.msg);case 10:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},created:function(){}},f=h,m=n("cba8"),b=Object(m["a"])(f,d,p,!1,null,"02806c0f",null),v=b.exports,g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("mo-switch",e._g(e._b({attrs:{"active-value":"running","active-text":"开启","inactive-text":"停止","inactive-value":"stopped"},on:{change:e.handleChange}},"mo-switch",e.$attrs,!1),e.$listeners))},_=[],w={name:"",props:{},components:{},data:function(){return{state:""}},computed:{},methods:{handleChange:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("stopped"!=t){e.next=6;break}return e.next=3,this.$Http.scheduleShutdown();case 3:n=e.sent,e.next=9;break;case 6:return e.next=8,this.$Http.scheduleStart();case 8:n=e.sent;case 9:0==n.code?(this.$msg.success("操作成功"),this.$emit("success")):this.$msg.error(n.msg);case 10:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},created:function(){}},S=w,j=Object(m["a"])(S,g,_,!1,null,"e4d9b0c6",null),x=j.exports,$="stopped",y="running",k="paused",O={name:"",props:{},components:{PauseResume:v,StartShutdown:x},data:function(){return{state:"",startShutdownState:"stopped",pauseResumeState:"paused"}},methods:{getData:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$Http.scheduleState();case 2:t=e.sent,t.data.state==$?(this.startShutdownState=$,this.pauseResumeState=k):t.data.state==y?(this.startShutdownState=y,this.pauseResumeState=y):t.data.state==k&&(this.startShutdownState=y,this.pauseResumeState=k);case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),handleSuccess:function(){this.getData(),this.$emit("success")}},created:function(){this.getData()}},R=O,D=(n("73d0"),Object(m["a"])(R,u,l,!1,null,"63358618",null)),E=D.exports,C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-popconfirm",{attrs:{title:"确定移除所有任务？"},on:{confirm:e.handleRemove}},[n("el-button",e._b({attrs:{slot:"reference",icon:"el-icon-delete",size:"mini"},slot:"reference"},"el-button",e.$attrs,!1),[e._v("移除所有任务")])],1)},P=[],J={name:"",props:{job_id:{type:String}},components:{},data:function(){return{}},computed:{},methods:{handleRemove:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$Http.scheduleRemoveAllJobs();case 2:t=e.sent,0==t.code?(this.$message.success("操作成功"),this.$emit("success")):this.$message.error(t.msg);case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},created:function(){}},H=J,V=Object(m["a"])(H,C,P,!1,null,"4eb6e001",null),A=V.exports,z={name:"",props:[],components:{ScheduleAdd:c["a"],ScheduleState:E,ScheduleRemoveAllJob:A},data:function(){return{}},computed:{},methods:{handleSuccess:function(){this.$emit("success")}},created:function(){}},T=z,q=Object(m["a"])(T,i,o,!1,null,"6df68c2a",null),L=q.exports,I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{},[n("mo-table",e._g(e._b({},"mo-table",e.$attrs,!1),e.$listeners),[n("el-table-column",{attrs:{align:"center",label:"序号",width:"60"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.$index+1)+"\n      ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"项目名","header-align":"center",align:"left",width:"150px"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.kwargs.project)+"\n      ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"\bSpider","header-align":"center",align:"left",prop:"spider",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.kwargs.spider)+"\n      ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"Cron",align:"center",width:"120px"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.kwargs.cron)+"\n      ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"下次执行时间",align:"center",width:"170px"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.next_run_time||"-")+"\n      ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"调度日志",align:"center",width:"80px"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("router-link",{attrs:{to:{name:"schedule-log-list",query:{project:t.row.kwargs.project,spider:t.row.kwargs.spider,job:t.row.id}},target:"_blank"}},[n("i",{staticClass:"el-icon-document"}),e._v(" 日志")])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"运行统计",align:"center",width:"80px"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("router-link",{attrs:{to:{name:"stats-list",query:{project:t.row.kwargs.project,spider:t.row.kwargs.spider}},target:"_blank"}},[n("i",{staticClass:"el-icon-document"}),e._v(" 日志")])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"运行日志",align:"center",width:"80px"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("router-link",{attrs:{to:{name:"logs-project-spider",params:{project:t.row.kwargs.project,spider:t.row.kwargs.spider}},target:"_blank"}},[n("i",{staticClass:"el-icon-document"}),e._v(" 日志")])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"状态",align:"center",width:"65"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("ScheduleJobStatus",{attrs:{job_id:t.row.id},model:{value:t.row.status,callback:function(n){e.$set(t.row,"status",n)},expression:"scope.row.status"}})]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"执行",align:"center",width:"65"},scopedSlots:e._u([{key:"default",fn:function(e){return[n("SpiderSchedule",{attrs:{project:e.row.kwargs.project,spider:e.row.kwargs.spider}})]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"修改",align:"center",width:"65"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("ScheduleAdd",{attrs:{job_id:t.row.id},on:{success:function(t){return e.$emit("success")}}})]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"移除",align:"center",width:"65"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("ScheduleRemoveJob",{attrs:{job_id:t.row.id},on:{success:function(t){return e.$emit("success")}}})]}}])})],1)],1)},N=[],F=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-switch",e._g(e._b({attrs:{"active-value":"running","inactive-value":"paused"},on:{change:e.handleChange}},"el-switch",e.$attrs,!1),e.$listeners))},G=[],W={name:"",props:{job_id:{type:String}},components:{},data:function(){return{}},computed:{},methods:{handleChange:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n={job_id:this.job_id},"running"!=t){e.next=7;break}return e.next=4,this.$Http.scheduleResumeJob(n);case 4:r=e.sent,e.next=14;break;case 7:if("paused"!=t){e.next=13;break}return e.next=10,this.$Http.schedulePauseJob(n);case 10:r=e.sent,e.next=14;break;case 13:throw Error("value is invalid");case 14:0==r.code?this.$msg.success("操作成功"):this.$msg.error(r.msg);case 15:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},created:function(){}},Y=W,B=Object(m["a"])(Y,F,G,!1,null,"e322d636",null),K=B.exports,M=n("479c"),Q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-popconfirm",{attrs:{title:"确定删除？"},on:{confirm:e.handleRemove}},[n("el-button",e._b({attrs:{slot:"reference",icon:"el-icon-delete",size:"mini"},slot:"reference"},"el-button",e.$attrs,!1))],1)},U=[],X={name:"",props:{job_id:{type:String}},components:{},data:function(){return{}},computed:{},methods:{handleRemove:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$Http.scheduleRemoveJob({job_id:this.job_id});case 2:t=e.sent,0==t.code?(this.$message.success("操作成功"),this.$emit("success")):this.$message.error(t.msg);case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},created:function(){}},Z=X,ee=Object(m["a"])(Z,Q,U,!1,null,"2a7863d0",null),te=ee.exports,ne={name:"",props:[],components:{ScheduleAdd:c["a"],ScheduleJobStatus:K,SpiderSchedule:M["a"],ScheduleRemoveJob:te},data:function(){return{}},computed:{},methods:{getData:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()},created:function(){this.getData()}},re=ne,se=Object(m["a"])(re,I,N,!1,null,"e7a79d18",null),ae=se.exports,ie={name:"",props:[],components:{ScheduleTool:L,ScheduleTable:ae},data:function(){return{list:[],orderProp:"",orderType:""}},computed:{},methods:{getData:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$Http.scheduleGetJobs();case 2:t=e.sent,0==t.code&&(this.list=t.data);case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),handleSortChange:function(e){var t=e.column,n=e.prop,r=e.order;console.log(t,n,r),this.orderType=r,this.orderType?this.orderProp=n:this.orderProp=null}},created:function(){this.getData()}},oe=ie,ce=Object(m["a"])(oe,r,s,!1,null,"9e42ed4e",null);t["default"]=ce.exports},f8ce:function(e,t,n){}}]);