<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: zhaojunyun-jk
 * @Date: 2020-08-12 13:56:55
 * @LastEditors: zhaojunyun-jk
 * @LastEditTime: 2020-09-27 15:57:18
-->
# git 常用操作

## git stash

- `git stash save "message"`：执行存储时，添加备注，方便查找，`git stash` 也可以，但是没有备注信息
- `git stash list`：查看 `stash` 存储
- `git stash apply`：引用某个存储，但不会把存储从存储列表中删除，默认使用第一个存储，即 `stash@{0}`，如果要使用其他，`git stash apply stash@{$num}`，比如第二个：`git stash apply stash@{1}`
- `git stash drop stash@{$num}`：删除 `stash@{$num}` 存储
- `git stash clear`：删除所有缓存的 `stash`

## git reset
- `git reset --soft HEAD`：回退到某个版本，只回退了commit的信息，不会恢复到index file一级。如果还要提交，直接commit即可
- `git reset --hard HEAD`：彻底回退到某个版本，本地的源码也会变为上一个版本的内容，撤销的commit中所包含的更改被冲掉