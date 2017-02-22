# eslint-plugin-msc

## 安装

1.安装eslint [ESLint](http://eslint.org):

```
$ npm install eslint --save-dev
```

2.安装eslint-plugin-msc  `eslint-plugin-msc`:

```
$ npm install eslint-plugin-msc --save-dev
```

**Note:** 如果eslint是全局安装(-g)，eslint-plugin-msc也应该全局安装(-g)

## 使用

将以下代码加入到`.eslintrc` 配置文件中:

```json
{
  "plugins": [
    "msc"
  ],
  "rules": {
    "msc/no-keyword-property": 1
  }
}
```


## 参考文档
+ http://eslint.org/docs/developer-guide/working-with-rules
+ https://www.zybuluo.com/lxjwlt/note/503766

