export default {
    dateParsed(timeStamp) {
        // 创建一个新的Date对象
        const date = new Date(timeStamp);
        console.log(date);
        
        // 获取年、月、日、小时和分钟
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');

        // 拼接成所需的格式
        return `${year}/${month}/${day} ${hours}:${minutes}`;
    }
};
