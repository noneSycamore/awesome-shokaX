[hexo-theme-shokaX](https://github.com/zkz098/hexo-theme-shokaX) 主题插件，用于向页面添加漂浮物飘落效果

## 预览

截图放上来看不太清，就不放了，想看效果可以[点此查看](lyrashore.com)

## 使用方法

1. 在hexo环境根目录创建`scripts`文件夹,把js文件放进去
2. 把views文件夹放在hexo环境根目录下

3. 向主题目录的 `_config.yml`或者根目录的`_config.shokax.yml`添加配置

```yaml
float_effect:
  allow_all: true # 是否允许所有页面添加漂浮物，false则只为部分页面添加
  allowed_pages: #指定添加漂浮物的页面
    - /
  #  - /categories/
  #  - /tags/
  image: /assets/float.png #漂浮物图片，需自备
```

