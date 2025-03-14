hexo-theme-shokaX主题插件，向你的主题中添加文章统计功能

# 预览

![img1](https://pic1.imgdb.cn/item/67d3e6cc88c538a9b5bd6540.png)

![img2](https://pic1.imgdb.cn/item/67d3e73788c538a9b5bd66d8.png)

图片挂了的话可以[点击查看](https://lyrashore.com/statistics/)

# 准备工作

使用前请安装前置npm包:

```bash
pnpm add cheerio
pnpm add moment
```
请将pnpm更换为对应包管理器

# 使用方法

1. 在hexo环境根目录创建`scripts`文件夹,把js文件放进去
2. 把views文件夹放在hexo环境根目录下
3. 在根目录`_config.shokax.yml`或者主题目录`_config.yml`下新增配置

```yaml
statistics:
  start: "2024-11" #文章统计开始时间
```



4. 使用`hexo new page "<pageName>"`新建页面，加入下列代码

```html
{% raw %}

<script src="https://s4.zstatic.net/ajax/libs/echarts/5.2.2/echarts.min.js"></script>
<script>
    function switchPostChart () {
        // 这里为了统一颜色选取的是 “明暗模式” 下的两种字体颜色，也可以自己定义
        const theme = document.documentElement.getAttribute('data-theme');
        const color = theme === 'dark' ? '#fff' : '#000'; 
        if (document.getElementById('posts-calendar')) {
            let postsCalendarNew = postsCalendarOption
            postsCalendarNew.textStyle.color = color
            postsCalendarNew.title.textStyle.color = color
            postsCalendarNew.visualMap.textStyle.color = color
            postsCalendarNew.calendar.itemStyle.color = color
            postsCalendarNew.calendar.yearLabel.color = color
            postsCalendarNew.calendar.monthLabel.color = color
            postsCalendarNew.calendar.dayLabel.color = color
            postsCalendar.setOption(postsCalendarNew)
        }
        if (document.getElementById('posts-chart')) {
            let postsOptionNew = postsOption
            postsOptionNew.textStyle.color = color
            postsOptionNew.title.textStyle.color = color
            postsOptionNew.xAxis.axisLine.lineStyle.color = color
            postsOptionNew.yAxis.axisLine.lineStyle.color = color
            postsChart.setOption(postsOptionNew)
        }
        if (document.getElementById('tags-chart')) {
            let tagsOptionNew = tagsOption
            tagsOptionNew.textStyle.color = color
            tagsOptionNew.title.textStyle.color = color
            tagsOptionNew.xAxis.axisLine.lineStyle.color = color
            tagsOptionNew.yAxis.axisLine.lineStyle.color = color
            tagsChart.setOption(tagsOptionNew)
        }
        if (document.getElementById('categories-chart')) {
            let categoriesOptionNew = categoriesOption
            categoriesOptionNew.textStyle.color = color
            categoriesOptionNew.title.textStyle.color = color
            categoriesOptionNew.legend.textStyle.color = color
            categoriesChart.setOption(categoriesOptionNew)
        }
    }
const observer = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    if (mutation.attributeName === 'data-theme') {
      switchPostChart();
    }
  });
});
observer.observe(document.documentElement, {attributes: true, attributeFilter: ['data-theme']});
document.addEventListener('DOMContentLoaded', switchPostChart);
</script>

<div class="pjax">
    <!-- 文章发布日历 -->
    <div id="posts-calendar" style="border-radius: 8px; height: 300px; padding: 10px;"></div>
    <!-- 文章发布时间统计图 -->
    <div id="posts-chart" style="border-radius: 8px; height: 300px; padding: 10px;"></div>
    <!-- 文章标签统计图 -->
    <div id="tags-chart" data-length="10" style="border-radius: 8px; height: 300px; padding: 10px;"></div>
    <!-- 文章分类统计图 -->
    <div id="categories-chart" style="border-radius: 8px; height: 500px; padding: 10px;"></div>
</div>


{% endraw %}
```

