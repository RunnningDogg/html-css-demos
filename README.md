# html-css-demos

useful html css demos for study &amp; use

本项目主要目的是实现一些常用的 html 组件来学习

- [x] 手风琴 2023 年 05 月 20 日
- [x] 轮播图 2023 年 05 月 20 日
- [x] 博客中侧边导航栏(可以看到页面到哪里了) 2023 年 05 月 24 日
- [x] 伸缩栏(可以用 collapse 的方法 在 classList 中增加减少 class 来实现伸缩)
- [x] dropdown menu

---

# 注意事项

## 实现 dropdownmenu

总结：我想设置一个过渡效果，但是我发现如果设置 display:none 的话，是不会有效果的（transition），可以通过设置 height 或者 opacity 的方法实现透明化。

from gpt：

```text
虽然你设置了过渡属性 transition: all 0.5s ease-in-out;，但是过渡效果不会触发，因为 display 属性不是支持过渡的。

display 属性具有离散的值，它直接控制元素是否在文档流中显示。

当你将 display 从 none 切换为其他值时（如 flex），过渡效果不适用，元素会立即显示，而不会产生平滑的过渡效果。

如果你希望实现一个动画效果，你可以考虑使用其他属性，例如 opacity 或 height 来控制元素的显示和隐藏，并通过过渡效果实现平滑的动画效果。
```
