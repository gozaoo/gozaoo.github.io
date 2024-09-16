import markdownParser from "./utils/markdownParser.js";
import { writeFile,readFile } from 'fs/promises'
import { createServer, build } from "vite";
const makeRoutes =async ()=>{

    const routes =await markdownParser.markdownFilesToRoutes()

    console.log(`Make routes for ${routes.length} articles`);
    
    let jsText = `export default ${JSON.stringify(routes, null, 2)};\n`;

    await writeFile('./src/assets/articlesParsed.js',jsText,'utf-8')

}
const firstLoad=async ()=>{
    try {
        await markdownParser.markdownSaver(undefined, 'home', '# 欢迎打开我的博客！', ['主页']);
    } catch (error) {
        console.error('Error creating home file:', error);
    }
}

let main=async ()=>{
    const filePath = './articles/home.md'
    try {
        
         await readFile(filePath, { encoding: 'utf8' })

    } catch (err) {
        // console.error()
        if(err.code==='ENOENT') {
            console.log(`Cannot found the home file: ${filePath} , now creating`)
            await firstLoad()
        } else {
            console.error('Error checking home file:', err);
        }
        
    }


    await makeRoutes()

    const argv = process.argv
    if (argv[2] === 'build') {
        // 使用 Vite 构建
        await build({
            root: process.cwd(), // 当前工作目录
            configFile: './vite.config.js', // Vite 配置文件路径
            // 其他构建配置选项
        });
        console.log('Build completed');
    } else  if (argv[2] === 'push'){
        let mdPageName = argv[3]
        let mdContent = await readFile(argv[4], { encoding: 'utf8' })
        await markdownParser.markdownSaver(undefined,mdPageName,mdContent,[])
    } 
    else {
        // 使用 Vite 启动开发服务器
        const server = await createServer({
            root: process.cwd(), // 当前工作目录
            configFile: './vite.config.js', // Vite 配置文件路径
            // 其他开发服务器配置选项
        });
        await server.listen();
        console.log('Dev server running at:', (server.config.server.host)?server.config.server.host:'http://localhost:'+server.config.server.port);
    }

}
main()