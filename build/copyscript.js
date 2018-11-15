/**
 *初始化业务时需要
 */
var fs = require('fs')
var path = require('path')
//引入readline模块
const readline = require('readline');

//创建readline接口实例
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var copyFile = function (srcPath, tarPath, cb) {
	var rs = fs.createReadStream(srcPath)
	rs.on('error', function (err) {
		if (err) {
			console.log('read error', srcPath)
		}
		cb && cb(err)
	})

	var ws = fs.createWriteStream(tarPath)
	ws.on('error', function (err) {
		if (err) {
			console.log('write error', tarPath)
		}
		cb && cb(err)
	})
	ws.on('close', function (ex) {
		cb && cb(ex)
	})

	rs.pipe(ws)
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
					console.log('mkdir', tarPath)
					fs.mkdir(tarPath, function (err) {
						if (err) {
							console.log(err)
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

	// 给新初始化的业务里修改一些默认信息

}


// 输入业务英文名来初始化业务项目文件
rl.question('输入业务英文名：', function(answer){
	// 不加close，则不会结束
	init(answer);
    rl.close();
});

