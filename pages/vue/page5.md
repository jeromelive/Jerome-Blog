<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: zhaojunyun-jk
 * @Date: 2020-09-27 15:58:45
 * @LastEditors: zhaojunyun-jk
 * @LastEditTime: 2020-09-27 17:10:47
-->
# 优化无限滚动加载，再多数据页面也不会卡顿

## 一、背景
在开发360借条中的商城页面中遇到这样的一个问题，即商品推荐流无限滚动加载导致页面异常卡顿。虽然之前也有了解过这种无限滚动优化方案，但却和以往最大的不同却是每个商品对应的 `DOM` 元素高度并不是确定的，这导致了无法通过固定值换算出占位的高度。

## 二、`react-infinite` 优化思路与缺陷

### `react-inifite` 使用
```jsx
import React, { Component } from 'react';
import Infinite from 'react-infinite';
var createReactClass = require('create-react-class');
 
var ListItem = createReactClass({
    render: function() {
        return <h1 className="infinite-list-item" style={{height: '100px'}}>
        List Item {this.props.num}
        </h1>;
    }
});
 

export default class TestPage3 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      elements: []
    }
  }

  getInitialState() {
    return {
        elements: this.buildElements(0, 20),
        isInfiniteLoading: false
    }
  }

  buildElements(start, end) {
    var elements = [];
    for (var i = start; i < end; i++) {
        elements.push(<ListItem key={i} num={i}/>)
    }
    return elements;
  }

  handleInfiniteLoad = () => {
    var that = this;
    this.setState({
        isInfiniteLoading: true
    });
    setTimeout(function() {
        var elemLength = that.state.elements.length,
            newElements = that.buildElements(elemLength, elemLength + 1000);
        that.setState({
            isInfiniteLoading: false,
            elements: that.state.elements.concat(newElements)
        });
    }, 2500);
  }

  elementInfiniteLoad () {
    return <div>
      Loading...
    </div>;
  }

  render() {
    let innerHeight = window.innerHeight
    return (
      <Infinite 
        elementHeight={100}
        containerHeight={innerHeight}
        infiniteLoadBeginEdgeOffset={200}
        onInfiniteLoad={this.handleInfiniteLoad}
        loadingSpinnerDelegate={this.elementInfiniteLoad()}
        isInfiniteLoading={this.state.isInfiniteLoading}
        >
        {this.state.elements}
      </Infinite>
    )
  }
}
```

### 优化思路
观察 `react-infinite` `Dom` 结构，主要分为3个部分，上占位、当前可是区域的元素、下占位，由此可知其主要优化思路既是只展示在可是区域内的元素，上下占位元素使得外层元素的高度不会被改变，从而提高页面性能。
![](/Jerome-Blog/vue-page5-1.png)

### 缺陷
`react-infinite` 初步使用主要的缺陷是高度需要提前设置，无法兼容高度差异的情况，所以主要问题就是如果换算出高度。

## 三、超简单的实现思路
由上述可知，主要的优化思路为：计算出占位元素的高度，只展示在可是区域的元素即可提高页面性能。

对于无法提前得知的高度其实我们可以再渲染后通过 Element.offsetHeight 来获取，但也不可能操作每一个 `Item` 级别的 `DOM`，所以每一页存储到一个 `DIV` 下，初次加载新的页面的时候将其展示到页面上，页面滚动计算每个分页 `DIV` 的高度并设置高度为当前值，再判断当前元素是否在可是区域，在的话即展示反之隐藏。
```js
  // 数据结构
  let data = [
    {
      name: 'page1',
      show: true,
      list: [
        {
          src: '',
          title: '',
          subTitle: ''
        }
      ]
    },
    ...
  ]

  handleGoodsShow() {
    let goods = document.querySelectorAll(`.goods`)
    Array.prototype.forEach.call(goods, (div, innerIndex) => {
      let rect = div.getBoundingClientRect()
      const {top, bottom} = rect
      div.style.height = div.offsetHeight + 'px'
      // currentTab === outerIndex && (top >= 0 || bottom > 0) && top <= innerHeight
      // 为 true 即页面在可是区域 反之不在
      updateFloorShow(innerIndex, currentTab === outerIndex && (top >= 0 || bottom > 0) && top <= innerHeight)
    })
  }


  render() {
    return (
      data.map((outer, outerIndex) => {
        let {show, list} = outer
        list && !list.length ? <div className="goods" key={outerIndex}>
          {
            show ? list.map((inner, innerIndex) => {
              let {src, title, subTitle} = inner
              return <div key={innerIndex}>
                <img src={inner.src} />
                <p>{title}</p>
                <p>{subTitle}</p>
              </div>
            })
            : null
          }
        </div> : null
      })
    )
  }
```

## 四、总结
该方案大大提高了页面流畅度。