import{s as i,T as u,o as l,B as w}from"./index.esm2017-25db0622.js";import{w as c}from"./index-bd7b5927.js";import{Q as s}from"./index-9e047c9c.js";import{i as m}from"./initFirebase-cc8fb877.js";const t=c(null),o=s(t);s(t);m();let a=o;const g=async()=>{if(!o){a=[];const e=i(u(l(),"News"));return await w(e).then(r=>r.forEach(n=>{a.push(n.data())})),await t.update(r=>a),a}return await t.update(e=>a),a};export{g};