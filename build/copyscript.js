/**
 * 初始化业务
 * 新建一个业务时，建议通过脚本创建
 */
var fs = require('fs')
var path = require('path')
//引入readline模块
const readline = require('readline');

// 初始化业务需要替换的内容
const replaceMap = new Map([
	['<%= currentTime%>', new Date().toString()],
	['<%= author%>', '韦姜宏']
]);

//创建readline接口实例
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var copyFile = function (srcPath, tarPath, cb) {
	let indexJs = fs.readFileSync(path.resolve(__dirname, srcPath), 'Utf-8')

	for(let [key, value] of replaceMap) {
		indexJs = indexJs.replace(key, value)
	}
	fs.writeFileSync(path.resolve(__dirname, tarPath), indexJs)
}

var copyFolder = function (srcDir, tarDir, cb) {
	fs.readdir(srcDir, function (err, files) {
		var count = 0
		var checkEnd = function () {
			++count == files.length && cb && cb()
		}

		if (err) {
			checkEnd()
			return
		}

		files.forEach(function (file) {
			var srcPath = path.join(srcDir, file)
			var tarPath = path.join(tarDir, file)

			fs.stat(srcPath, function (err, stats) {
				if (stats.isDirectory()) {
					fs.mkdir(tarPath, function (err) {
						if (err) {
							return
						}

						copyFolder(srcPath, tarPath, checkEnd)
					})
				} else {
					copyFile(srcPath, tarPath, checkEnd)
				}
			})
		})

		//为空时直接回调
		files.length === 0 && cb && cb()
	})
}

// 入口
var init = function(businessName) {
	// 先判断是否已经存在业务文件夹×，自己会报错

	// 创建新的业务空文件夹
	fs.mkdirSync(path.resolve(__dirname, `../src/business/${businessName}`));
	// 把script文件夹的内容复制到业务文件夹里
	copyFolder(
		path.resolve(__dirname, '../script'),
		path.resolve(__dirname, `../src/business/${businessName}`),
		function (err) {

			if (err) {
				return
			}
			//continue

		})


}


// 输入业务英文名来初始化业务项目文件
rl.question('输入业务英文名：', function(answer){
	replaceMap.set('<%= businiessName%>', answer)
	// 不加close，则不会结束
	init(answer);
    rl.close();
});

