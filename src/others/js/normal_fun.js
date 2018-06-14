// 一些有用的js代码片段

// Anagrams of string（带有重复项）
// 使用递归。对于给定字符串中的每个字母，为字母创建字谜。使用map（）将字母与每部分字谜组合，然后使用reduce（）将所有字谜组合到一个数组中，最基本情况是字符串长度等于2或1
const anagrams = str => {
  if (str.length <= 2) return str.length === 2 ? [str, str[1] + str[0]] : [str];

  return str
    .split('')
    .reduce(
      (acc, letter, i) =>
        acc.concat(
          anagrams(str.slice(0, i) + str.slice(i + 1)).map(val => letter + val)
        ),
      []
    );
};
console.log(anagrams('abc'), anagrams('defg'), anagrams('lmnml'));

// 数组平均数
// 使用reduce（）将每个值添加到累加器，初始值为0，总和除以数组长度。
const average = (arr) => arr.reduce((acc, val) => acc + val, 0) / arr.length;
console.log(average([1,2,3]),average([3,6,2]), average([6,45,3]));

// 大写每个单词的首字母. \b匹配每个单词的开始。
// 使用replace（）匹配每个单词的第一个字符，并使用toUpperCase（）来将其大写。
const capitalizeEveryWord = (str) => str.replace(/\b[a-z]/g, char => char.toUpperCase());
console.log(capitalizeEveryWord('hello world!'), capitalizeEveryWord('hello哈哈we  fasf   fds!!fsf'));

// 首字母大写
// 使用slice（0,1）和toUpperCase（）大写第一个字母，slice（1）获取字符串的其余部分。 省略lowerRest参数以保持字符串的其余部分不变，或将其设置为true以转换为小写。（注意：这和上一个示例不是同一件事情）
const capitalize = (str, lowerRest = false) => str.slice(0, 1).toUpperCase() + (lowerRest ? str.slice(1).toLowerCase() : str.slice(1));
console.log(capitalize('hello WORld'), capitalize('hello WORld', true));

// 检查回文
// 将字符串转换为toLowerCase（），并使用replace（）从中删除非字母的字符。然后，将其转换为tolowerCase（），将（’‘）拆分为单独字符，reverse（），join（’‘），与原始的非反转字符串进行比较，然后将其转换为tolowerCase（）。
const palindrome = (str) => {
  const s = str.replace(/[\W_]/g, '');
  return s === s.split().reverse().join('');
}
console.log(palindrome('cato tac'), palindrome('cat哈哈tac'));

// 计数数组中值的出现次数
// 每次遇到数组中的特定值时，使用reduce（）来递增计数器。
const countOccurrences = (arr, val) => arr.reduce((acc, v) => v === val ? acc + 1: acc, 0);
console.log(countOccurrences([1,2,3,1,3,1,15,1], 1));

// 当前URL
// 使用window.location.href来获取当前URL。
const currentUrl = () => window.location.href;
console.log(currentUrl());

