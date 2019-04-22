(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),o=a(7),c=a.n(o),r=(a(15),a(1)),l=a(2),i=a(4),u=a(3),h=a(5),m=function(e){return n.a.createElement("header",{className:"app-header"},n.a.createElement("div",{className:"width-90"},n.a.createElement("button",{className:"btn text-white header-title",onClick:e.goHome},n.a.createElement("h1",null,"Bucket List")),n.a.createElement("h3",null,"Secure Cloud Storage")))},g=a(8),p=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){var t=e.currentTarget.name;a.setState(Object(g.a)({},t,e.currentTarget.value))},a.handleClick=function(){a.setState({remember:!a.state.remember})},a.handleSubmit=function(e){e.preventDefault(),console.log("submitted ..."),""===a.state.token?alert("Please enter your key"):fetch("https://challenge.3fs.si/storage/locations",{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Token "+a.state.token}}).then(function(e){e.ok?(a.state.remember&&localStorage.setItem("userKey","Token "+a.state.token),a.props.handleLogin(a.state.token)):401===e.status?e.json().then(function(e){return a.setState({response:e.message+" Please enter a valid key!"})}):500===e.status&&e.json().then(function(e){return a.setState({response:"Server error: "+e.message+" Please try again!"})})})},a.state={token:"",remember:!1,response:"",access:!1},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"width-90 bg-white margin-top"},n.a.createElement("div",{className:"text-center text-lg text-danger font-weight-bold"},this.state.response),n.a.createElement("form",{className:"text-center",onSubmit:this.handleSubmit},n.a.createElement("label",null,"Your key:"),n.a.createElement("p",{className:"small"},"e.g.: XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX"),n.a.createElement("input",{type:"text",placeholder:this.state.token,name:"token",onChange:this.handleChange,className:"login-input"}),n.a.createElement("label",null,"Remember me?"),n.a.createElement("input",{type:"checkbox",className:"login-checkbox",name:"remember",onChange:this.handleClick}),n.a.createElement("button",{type:"submit",className:"btn btn-success btn-lg"},n.a.createElement("i",{className:"fas fa-sign-in-alt"})," Sign in")))}}]),t}(s.Component),b=function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentWillUnmount",value:function(){this.props.clearErrorMsg()}},{key:"render",value:function(){return n.a.createElement("div",{className:"modal-view"},n.a.createElement("div",{className:"modal-box text-center"},n.a.createElement("h2",{className:"text-danger"},"Whoops!"),n.a.createElement("h2",null,":("),n.a.createElement("p",null,"Something went wrong. Sorry!"),n.a.createElement("p",null,"The Server reported:"),n.a.createElement("p",{className:"font-weight-bold"},"ERROR (",this.props.errMsg.status,"):"),n.a.createElement("p",{className:"font-weight-bold"},this.props.errMsg.message),n.a.createElement("p",null,"Log location: ",this.props.errMsg.component),n.a.createElement("p",{className:"text-sm"},"Please refresh the page"),n.a.createElement("button",{className:"btn btn-info btn-sm",onClick:this.props.toggleError},"Close")))}}]),t}(s.Component);b.defaultProps={status:0,message:"default message",component:"default loc"};var d=b,f=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).handleNameChange=function(e){var t={name:e.target.value,location:a.state.newBucket.location};a.setState({newBucket:t})},a.handleSelectChange=function(e){var t={name:a.state.newBucket.name,location:e.target.value};a.setState({newBucket:t})},a.addBucket=function(e){e.preventDefault();var t=a.state.newBucket,s=t.location,n=t.name;n&&s?(fetch("https://challenge.3fs.si/storage/buckets",{method:"POST",headers:{"Content-Type":"application/json",Authorization:a.props.auth},body:JSON.stringify({name:n,location:s})}).then(function(e){e.ok?a.props.fetchBucketList():(a.props.setErrorMsg(e.status,e.statusText,"BucketCreate.js:56"),console.log("Error (".concat(e.status,") creating a bucket, server says: ").concat(e.statusText)),a.props.toggleError())}),a.props.toggleCreate()):alert("Name and location are both required fields!")},a.state={newBucket:{name:"",location:""}},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=n.a.createElement("form",{onSubmit:this.addBucket},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-6"},n.a.createElement("label",null,"Bucket Name*"),n.a.createElement("br",null),n.a.createElement("input",{type:"text",name:"name",value:this.state.newBucket.name,onChange:this.handleNameChange})),n.a.createElement("div",{className:"col-6"},n.a.createElement("label",null,"Location*"),n.a.createElement("br",null),n.a.createElement("select",{name:"locations",onChange:this.handleSelectChange},n.a.createElement("option",null),this.props.locations.map(function(e){return n.a.createElement("option",{key:e.id,value:e.id},e.name)})))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12 text-left"},n.a.createElement("button",{className:"btn btn-success"},"Add Bucket")))),t=n.a.createElement("button",{onClick:this.props.toggleCreate,className:"btn btn-info"},"CreateBucket");return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"width-90 bg-white"},this.props.toggle?e:t))}}]),t}(s.Component),E=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).toggleCreate=function(){a.setState({toggle:!a.state.toggle})},a.selectBucket=function(e){a.props.fetchBucket(e.currentTarget.id),a.props.fetchObjects(e.currentTarget.id),a.props.toggleBucket()},a.state={toggle:!1,select:""},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.buckets.map(function(t){return n.a.createElement("div",{key:t.id,id:t.id,onClick:e.selectBucket,className:"row li ".concat(e.state.select===t.id?"li-active":"")},n.a.createElement("div",{className:"col-9"},t.name),n.a.createElement("div",{className:"col-3"},t.location.name))});return n.a.createElement(n.a.Fragment,null,n.a.createElement(f,{toggle:this.state.toggle,auth:this.props.auth,locations:this.props.locations,toggleCreate:this.toggleCreate,fetchBucketList:this.props.fetchBucketList,toggleError:this.props.toggleError,setErrorMsg:this.props.setErrorMsg}),n.a.createElement("div",{className:"width-90 bg-white"},n.a.createElement("div",{className:"col-3 text-left"},"All Buckets (",this.props.buckets.length,")"),n.a.createElement("div",{className:"row row-header"},n.a.createElement("div",{className:"col-9"},"Name"),n.a.createElement("div",{className:"col-3"},"Location")),t))}}]),t}(s.Component);n.a.defaultProps={buckets:[{id:"-",name:"",location:{id:"-",name:""}}]};var k=E,v=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).browseFiles=function(){a.upload.current.click()},a.uploadFile=function(e){if(""!==e.target.value){var t=a.props.bucket.id,s=new FormData;s.append(e.target.name,a.upload.current.files[0]),fetch("https://challenge.3fs.si/storage/buckets/".concat(t,"/objects"),{method:"POST",headers:{Authorization:a.props.auth},body:s}).then(function(e){e.ok?a.props.fetchObjects(t):(a.props.setErrorMsg(e.status,e.statusText,"BucketFiles.js:39"),console.log("Error (".concat(e.status,") uploading file, server says: ").concat(e.statusText)),a.props.toggleError())})}},a.selectObject=function(e){e.preventDefault(),a.setState({select:e.currentTarget.id})},a.toggleDel=function(){a.state.select?a.setState({toggleDelete:!a.state.toggleDelete}):alert("Select a file to delete!")},a.deleteObject=function(){fetch("https://challenge.3fs.si/storage/buckets/".concat(a.props.bucket.id,"/objects/").concat(a.state.select),{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:a.props.auth}}).then(function(e){e.ok?a.props.fetchObjects(a.props.bucket.id):(a.props.setErrorMsg(e.status,e.statusText,"BucketFiles.js:73"),console.log("Error (".concat(e.status,") deleting file, server says: ").concat(e.statusText)),a.props.toggleError())}),a.setState({select:"",toggleDelete:!1})},a.state={select:"",toggleDelete:!1},a.upload=n.a.createRef(),a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.objects.map(function(t){return n.a.createElement("div",{key:t.name,id:t.name,onClick:e.selectObject,className:"row li ".concat(e.state.select===t.name?"li-active":"")},n.a.createElement("div",{className:"col-5"},n.a.createElement("i",{className:"far fa-file-alt"})," ",t.name),n.a.createElement("div",{className:"col-4"},t.last_modified),n.a.createElement("div",{className:"col-3"},t.size/1024/1024<1?Math.round(t.size/1024)+"kB":Math.round(t.size/1024/1024)+"MB"))}),a=n.a.createElement("button",{className:"btn btn-sm btn-secondary",onClick:this.toggleDel},"Delete Object"),s=n.a.createElement("div",{className:"modal-view"},n.a.createElement("div",{className:"modal-box text-center"},n.a.createElement("h4",{className:"margin-bottom"},"Do you really want to delete this file?"),n.a.createElement("div",null,n.a.createElement("button",{className:"btn btn-sm btn-danger",onClick:this.deleteObject},"Confirm"),n.a.createElement("button",{className:"btn btn-sm btn-info",onClick:this.toggleDel},"Cancel"))));return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"width-90 bg-white"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-3 text-left"},"All files (",this.props.objects.length,")"),n.a.createElement("div",{className:"col-9 text-right"},a,this.state.toggleDelete?s:null,n.a.createElement("button",{className:"btn btn-sm btn-success",onClick:this.browseFiles},"Upload Object"))),n.a.createElement("div",{className:"row row-header"},n.a.createElement("div",{className:"col-5"},"Name"),n.a.createElement("div",{className:"col-4"},"Last modified"),n.a.createElement("div",{className:"col-3"},"Size")),this.props.objects?t:"Something's wrong..."),n.a.createElement("input",{type:"file",name:"file",className:"hidden-input",ref:this.upload,onChange:this.uploadFile,required:!0}))}}]),t}(s.Component);n.a.defaultProps={objects:[{name:"",modified:"",size:0}]};var j=v,N=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).toggleDel=function(){a.setState({toggleDelete:!a.state.toggleDelete})},a.deleteBucket=function(){fetch("https://challenge.3fs.si/storage/buckets/".concat(a.props.bucket.id),{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:a.props.auth}}).then(function(e){e.ok?a.props.fetchBucketList():(a.props.setErrorMsg(e.status,e.statusText,"BucketDetails.js:33"),console.log("Error (".concat(e.status,") deleting file, server says: ").concat(e.statusText)),a.props.toggleError())}).then(a.props.goHome()),a.setState({toggleDelete:!1})},a.getSize=function(){var e=0;return a.props.objects&&a.props.objects.forEach(function(t){return e+=t.size}),e/1024/1024<1?Math.round(e/1024)+"kB":Math.round(e/1024/1024)+"MB"},a.state={toggleDelete:!1,select:""},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.bucket,t=e.name,a=e.location,s=this.getSize(),o=n.a.createElement("button",{className:"btn btn-sm btn-secondary",onClick:this.toggleDel},"Delete Bucket"),c=n.a.createElement("div",{className:"modal-view"},n.a.createElement("div",{className:"modal-box text-center"},n.a.createElement("h4",{className:"margin-bottom"},"Do you really want to delete this bucket?"),n.a.createElement("div",null,n.a.createElement("button",{className:"btn btn-danger",onClick:this.deleteBucket},"Yes!"),n.a.createElement("button",{className:"btn btn-info",onClick:this.toggleDel},"No!"))));return n.a.createElement("div",{className:"width-90 bg-white"},n.a.createElement("div",{className:"text-right"},o,this.state.toggleDelete?c:null),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-3"},n.a.createElement("p",null,"Bucket name:"),n.a.createElement("p",null,"Location:"),n.a.createElement("p",null,"Storage size:")),n.a.createElement("div",{className:"col-9"},n.a.createElement("p",null,t),n.a.createElement("p",null,a.name),n.a.createElement("p",null,s))))}}]),t}(s.Component),O=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).switchTab=function(e){a.setState({toggleTab:e})},a.state={select:"",toggleTab:"files"},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state.toggleTab;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"width-90 bg-white"},n.a.createElement("div",null,n.a.createElement("button",{className:"btn btn-lg ".concat("files"===e?"btn-info":"btn-secondary"),onClick:this.switchTab.bind(this,"files")},"Files"),n.a.createElement("button",{className:"btn btn-lg ".concat("details"===e?"btn-info":"btn-secondary"),onClick:this.switchTab.bind(this,"details")},"Details"))),"files"===this.state.toggleTab&&n.a.createElement(j,{bucket:this.props.bucket,objects:this.props.objects,auth:this.props.auth,fetchObjects:this.props.fetchObjects,goHome:this.props.goHome,toggleError:this.props.toggleError,setErrorMsg:this.props.setErrorMsg}),"details"===this.state.toggleTab&&n.a.createElement(N,{bucket:this.props.bucket,objects:this.props.objects,auth:this.props.auth,goHome:this.props.goHome,fetchBucketList:this.props.fetchBucketList,toggleError:this.props.toggleError,setErrorMsg:this.props.setErrorMsg}))}}]),t}(s.Component);n.a.defaultProps={bucket:{name:"",id:"",location:{name:"",id:""}},objects:[{name:"",modified:"",size:0}]};var w=O,y=(a(16),function(e){function t(){var e,a;Object(r.a)(this,t);for(var s=arguments.length,n=new Array(s),o=0;o<s;o++)n[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={login:!1,auth:"Token",bucket:{name:"",id:"",location:{name:"",id:""}},buckets:[{id:"-",name:"",location:{id:"-",name:""}}],locations:[],objects:[{name:"",modified:"",size:0}],bucketlist:!0,errMsg:{status:0,message:"",component:""},errToggle:!1},a.handleLogin=function(e){a.setState({auth:"Token "+e})},a.toggleLogin=function(){a.setState({login:!0})},a.goHome=function(){a.setState({bucketlist:!0,bucket:{name:"",id:"",location:{name:"",id:""}}})},a.toggleBucket=function(){a.setState({bucketlist:!1})},a.fetchBucket=function(e){fetch("https://challenge.3fs.si/storage/buckets/".concat(e),{method:"GET",headers:{"Content-Type":"application/json",Authorization:a.state.auth}}).then(function(e){e.ok?e.json().then(function(e){return a.setState({bucket:e.bucket})}):(a.setErrorMsg(e.status,e.statusText,"App.js:102"),console.log("Error (".concat(e.status,") on fetch Bucket, server response: ").concat(e.statusText)),a.toggleError())})},a.fetchBucketList=function(){fetch("https://challenge.3fs.si/storage/buckets",{method:"GET",headers:{"Content-Type":"application/json",Authorization:a.state.auth}}).then(function(e){e.ok?e.json().then(function(e){return a.setState({buckets:e.buckets})}):(a.setErrorMsg(e.status,e.statusText,"App.js:121"),console.log("Error (".concat(e.status,") on fetch BucketList, server response: ").concat(e.statusText)),a.toggleError())})},a.fetchLocations=function(){fetch("https://challenge.3fs.si/storage/locations",{method:"GET",headers:{"Content-Type":"application/json",Authorization:a.state.auth}}).then(function(e){e.ok?e.json().then(function(e){return a.setState({locations:e.locations})}):(console.log("Error (".concat(e.status,") on fetch Locations, server response: ").concat(e.statusText)),a.setErrorMsg(e.status,e.statusText,"App.js:141"),a.toggleError())})},a.fetchObjects=function(e){fetch("https://challenge.3fs.si/storage/buckets/".concat(e,"/objects"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:a.state.auth}}).then(function(e){e.ok?e.json().then(function(e){return a.setState({objects:e.objects})}):(a.setErrorMsg(e.status,e.statusText,"App.js:160"),console.log("Error (".concat(e.status,") on fetch Objects, server response: ").concat(e.statusText)),a.toggleError())})},a.toggleError=function(){a.setState({errToggle:!a.state.errToggle})},a.clearErrorMsg=function(){a.setState({errMsg:{status:0,message:"",component:""}})},a.setErrorMsg=function(e,t,s){var n={status:e,message:t,component:s};a.setState({errMsg:n})},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"getSnapshotBeforeUpdate",value:function(e,t){return null!==t?t.auth:null}},{key:"componentDidUpdate",value:function(e,t,a){null!==a&&a!==this.state.auth&&(this.fetchBucketList(),this.fetchLocations(),this.toggleLogin())}},{key:"componentDidMount",value:function(){var e=localStorage.getItem("userKey");null!==e&&this.setState({auth:e})}},{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(m,{goHome:this.goHome}),!this.state.login&&n.a.createElement(p,{handleLogin:this.handleLogin,fetchBucketList:this.fetchBucketList,fetchLocations:this.fetchLocations}),n.a.createElement("div",{className:"width-90"},n.a.createElement("h2",null,this.state.bucket?this.state.bucket.name:"Bucket list")),this.state.login&&this.state.bucketlist&&n.a.createElement(k,{buckets:this.state.buckets,locations:this.state.locations,auth:this.state.auth,toggleBucket:this.toggleBucket,fetchBucketList:this.fetchBucketList,fetchObjects:this.fetchObjects,fetchBucket:this.fetchBucket,toggleError:this.toggleError,setErrorMsg:this.setErrorMsg}),this.state.login&&!this.state.bucketlist&&n.a.createElement(w,{bucket:this.state.bucket,objects:this.state.objects,auth:this.state.auth,goHome:this.goHome,fetchObjects:this.fetchObjects,fetchBucketList:this.fetchBucketList,toggleError:this.toggleError,setErrorMsg:this.setErrorMsg}),this.state.errToggle&&n.a.createElement(d,{toggleError:this.toggleError,clearErrorMsg:this.clearErrorMsg,errMsg:this.state.errMsg}))}}]),t}(s.Component));c.a.render(n.a.createElement(y,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.0ac055ab.chunk.js.map