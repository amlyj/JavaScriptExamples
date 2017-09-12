/**  Created by tom **/

/***
 * 声明赋值一个数组
 * @type {Array}
 */
var lst = new Array(0, 1, 2, 3, 4, 5); //lst = [0, 1, 2, 3, 4, 5]

/**
 * 拼接字符串
 * @type {string}
 */
var s = lst.join('-'); //0-1-2-3-4-5

/**
 * 截取数组前2个元素组成新数组,使用　Array.slice(start,end)方法，前闭后开区间[start,end)
 *
 * 该方法并不会修改数组，而是返回一个子数组。
 * 如果想删除数组中的一段元素，应该使用方法 Array.splice()。
 * @type {Array.<*>}
 */
var newLst = lst.slice(0, 2); //newLst = [0, 1], lst = [0, 1, 2, 3, 4, 5]
var sLst = lst.splice(0, 2); //sLst = [0, 1], lst = [2, 3, 4, 5]
