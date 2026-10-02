import Count from "./Count";

const MARQUEE = "ABAP,OData,BAPI,BDC,ALV Reports,Smart Forms,User Exits,Enhancements,SAP FI,SAP MM,SAP PP,SAP SD,PostgreSQL,Python,React,Java".split(",");

export default function Stats() {
  return (
    <>
      <div className="stats rv">
        <div><Count n={1} s="+" /><span>year in SAP ABAP</span></div>
        <div><Count n={100} s="+" /><span>AMS tickets resolved</span></div>
        <div><Count n={7} /><span>client engagements</span></div>
      </div>
      <div className="mq" aria-hidden="true">
        <div className="mt">{[...MARQUEE, ...MARQUEE].map((x, i) => <span key={i}>{x}</span>)}</div>
      </div>
    </>
  );
}
