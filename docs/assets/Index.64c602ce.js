import{d as a,r as e,e as s,o as t,c as r,a as n,f as l,g as c}from"./index.6528481b.js";var o=a({name:"DemoIndexComp",setup:()=>(e.push("calc"),{})});const d={class:"bg-gray-500"},u={class:"my-1 text-sm text-center py-1 text-gray-100\r\n                flex flex-row flex-wrap gap-2 justify-center"},f=c(" 计算器 "),i=c(" 日历 ");o.render=function(a,e,c,o,m,x){const p=s("router-link"),v=s("router-view");return t(),r("div",null,[n("div",d,[n("div",u,[n(p,{to:{name:"calc"},class:""},{default:l((()=>[f])),_:1}),n(p,{to:{name:"calendar"},class:"lzh-nav-link"},{default:l((()=>[i])),_:1})])]),n(v)])};export default o;