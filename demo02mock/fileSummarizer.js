'use strict';
//这里用到了fs module，而该module是比较脆弱的，故而需要mock来达到更好的效果
const fs = require('fs');
//遍历输出文件夹下文件
function summarizeFilesInDirectorySync(directory) {
  return fs.readdirSync(directory).map(fileName => ({
    directory,
    fileName,
  }));
}

exports.summarizeFilesInDirectorySync = summarizeFilesInDirectorySync;
