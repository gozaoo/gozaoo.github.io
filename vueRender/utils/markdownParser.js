import { readFile, readdir, writeFile, unlink } from 'node:fs/promises';

const markdownFilesToRoutes = async (folderPath = './articles/') => {
    const files = await readdir(folderPath);
    const routesPromises = await files.map(async file => {
        const content = await readFile(`${folderPath}/${file}`, { encoding: 'utf8' });
        const content_lines = content.split('\n')
        const title = file.replace('.md', '');
        const time = content_lines[1]
        const last_edit_time = content_lines[2]
        const tags = content_lines[3].split(' ')

        return {
            path: `/${title}`,
            text: content,
            tags,
            title,
            time,
            last_edit_time
        }
    });
    // 使用 Promise.all 等待所有异步操作完成
    let routes = await Promise.all(routesPromises);

    // 排序：确保 'home' 在第一个位置，其余按 'time' 排序
    routes.sort((a, b) => {
        if (a.title === 'home') return -1;
        if (b.title === 'home') return 1;
        return new Date(a.time) - new Date(b.time);
    });

    return routes;
};

const markdownSaver = async (savePath = './articles', fileName = 'draft', text, tags) => {
    const filePath = `${savePath}/${fileName}.md`;
    const currentTime = Date.now()
    try {
        // 尝试读取现有文件
        const existingContent =await readFile(filePath,{ encoding: 'utf8' });
        
        const existingContentLines = existingContent.split('\n');
        const publishTime = existingContentLines[1]; // 假设第二行是发布时间

        // 构建新的文件内容，保留发布时间
        const content = `---\n${publishTime}\n${currentTime}\n${tags.join(' ')}\n---\n\n${text}`;

        // 将内容写入文件
        await writeFile(filePath, content, { encoding: 'utf8' });
    } catch (error) {
        if (error.code === 'ENOENT' || error.code == 'ERR_UNHANDLED_REJECTION') {
            // 文件不存在，创建新文件
            const content = `---\n${currentTime}\n${currentTime}\n${tags.join(' ')}\n---\n\n${text}`;
            await writeFile(filePath, content, { encoding: 'utf8' });
        } else {
            // 其他错误
            console.error('Error saving markdown file:', error);
            throw error;
        }
    }
};
const deleteMarkdown = async (deletePath = './articles', fileName) => {
    // 检查文件是否存在
    try {
        await unlink(`${deletePath}/${fileName}.md`)
        console.log(`File ${fileName}.md deleted successfully.`);
    } catch (error) {
        console.error(`Error deleting file ${fileName}.md:`, error);
    }
};


export default {
    markdownFilesToRoutes,
    markdownSaver,
    deleteMarkdown
}
