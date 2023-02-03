import React from "react"
import * as style from "./tree.module.css"

const Tree = () => {
    return (
      <div className={style.tree}>
        <div className={style.treeTrunk}></div>
        <div className={style.treeTop}>
          <div className={style.treeGreenMid}></div>
          <div className={style.treeGreenTl}></div>
          <div className={style.treeGreenTr}></div>
          <div className={style.treeGreenBr}></div>
          <div className={style.treeGreenBl}></div>
          <div className={style.treeGreenTop}></div>
          <div className={style.appleone}></div>
          <div className={style.appletwo}></div>
          <div className={style.applethree}></div>
          <div className={style.applefour}></div>
          <div className={style.applefive}></div>
        </div>
      </div>
    )
};

export default Tree
